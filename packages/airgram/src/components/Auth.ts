/* eslint-disable no-dupe-class-members */

import {
  AuthIndependentMethodName,
  authIndependentMethods,
  AUTHORIZATION_STATE,
  MethodName,
  UPDATE
} from '@airgram/constants'
import {
  ApiResponse,
  AuthorizationStateUnion,
  CheckAuthenticationCodeParams,
  CheckAuthenticationPasswordParams,
  Composer,
  Context,
  ErrorUnion,
  Instance,
  isError,
  MiddlewareFn,
  Ok,
  OkUnion,
  RegisterUserParams,
  UpdateAuthorizationState
} from '@airgram/core'
import { TdProvider } from './TdProvider'

interface LoginDeferred {
  promise: Promise<void>
  resolve: () => unknown
  reject: (error: Error) => unknown
}

type AuthConfigOption = string | (() => string) | (() => Promise<string>)

interface AuthConfig {
  code?: AuthConfigOption
  firstName?: AuthConfigOption
  lastName?: AuthConfigOption
  phoneNumber?: AuthConfigOption
  password?: AuthConfigOption
  token?: AuthConfigOption
}

const authMethods: MethodName[] = [
  'checkAuthenticationBotToken',
  'checkAuthenticationCode',
  'checkAuthenticationPassword',
  'checkDatabaseEncryptionKey',
  'getAuthorizationState',
  'registerUser',
  'requestAuthenticationPasswordRecovery',
  'resendAuthenticationCode',
  'setAuthenticationPhoneNumber',
  'setOption',
  'setTdlibParameters'
]

export class Auth {
  public maxAttempts: number = 3

  private _airgram?: Instance<any>

  private answers: Partial<Record<keyof AuthConfig, string>> = {}

  private attempt: number = 0

  private authState: AuthorizationStateUnion | ErrorUnion | null = null

  private readonly config: AuthConfig = {}

  private deferred: LoginDeferred | null = null

  private invalidPhoneNumbers: Set<string> = new Set()

  public constructor (config: AuthConfig) {
    this.config = config
  }

  public get isAuthorized (): boolean {
    return !!(this.authState && this.authState._ === AUTHORIZATION_STATE.authorizationStateReady)
  }

  public get isBot (): boolean {
    return 'token' in this.config
  }

  private get airgram (): Instance<any> {
    if (!this._airgram) {
      throw new Error('Airgram has not been initialized yet.')
    }
    return this._airgram
  }

  public middleware (): MiddlewareFn<Context> {
    return Composer.compose([
      (ctx, next) => {
        if (!this._airgram) {
          this._airgram = ctx.airgram
        }
        return next()
      },
      Composer.filter((ctx: | { update?: UpdateAuthorizationState }) => !('update' in ctx) ||
        !ctx.update ||
        ctx.update._ !== UPDATE.updateAuthorizationState ||
        !this.handleUpdateState(ctx.update)
      ),
      Composer.optional(
        (ctx: Context<unknown>) =>
          !this.isAuthorized &&
          !authMethods.includes(ctx._ as MethodName) &&
          !authIndependentMethods.includes(ctx._ as AuthIndependentMethodName),
        (_ctx, next) => this.login().then(next)
      )
    ])
  }

  private async ask (type: keyof AuthConfig): Promise<string> {
    if (!(type in this.config) || !this.config[type]) {
      throw new Error(`The "${type}" option does not specified.`)
    }
    if (typeof this.config[type] === 'function') {
      return (this.config[type] as () => string)()
    }
    return this.config[type] as string
  }

  private async askPhoneNumber (): Promise<string> {
    return this.ask('phoneNumber')
      .then(async (phoneNumber) => {
        if (!phoneNumber) {
          throw new Error('Phone number is not defined')
        }
        if (this.invalidPhoneNumbers.has(phoneNumber) || !/^\+?\d{10,}$/.test(phoneNumber.trim())) {
          this.invalidPhoneNumbers.add(phoneNumber)
          delete this.answers.phoneNumber
          throw new Error('Invalid phone number')
        }
        return phoneNumber
      })
  }

  private async checkAuthenticationPassword (): Promise<ApiResponse<CheckAuthenticationPasswordParams, Ok>> {
    return this.airgram.api.checkAuthenticationPassword({
      password: await this.ask('password')
    })
  }

  private async fatalError (error: Error): Promise<false> {
    console.error(`[Airgram Auth] quit due an error: "${error.message}"`)
    if (this.airgram.provider instanceof TdProvider) {
      await this.airgram.provider.destroy()
    }
    return false
  }

  private async handleError (error: ErrorUnion): Promise<boolean> {
    let promise: Promise<ApiResponse<any, Ok>> | null = null

    if (error.code === 429) {
      return this.fatalError(new Error(error.message))
    }

    switch (error.message) {
      case 'PHONE_NUMBER_INVALID': {
        if (this.answers.phoneNumber) {
          this.invalidPhoneNumbers.add(this.answers.phoneNumber)
          delete this.answers.phoneNumber
        }
        promise = this.askPhoneNumber()
          .then((phoneNumber) => this.airgram.api.setAuthenticationPhoneNumber({ phoneNumber }))
        break
      }
      case 'PHONE_CODE_EMPTY':
      case 'PHONE_CODE_EXPIRED':
      case 'PHONE_CODE_INVALID': {
        if (this.attempt < this.maxAttempts) {
          this.attempt += 1
          promise = this.sendCode()
        } else {
          return this.fatalError(new Error('Exceeded the limit of failed attempts'))
        }
        break
      }
      case 'PASSWORD_HASH_INVALID': {
        if (this.attempt < this.maxAttempts) {
          this.attempt += 1
          promise = this.checkAuthenticationPassword()
        } else {
          return this.fatalError(new Error('Exceeded the limit of failed attempts'))
        }
        break
      }
      default: {
        return false
      }
    }
    return promise
      ? promise.then(({ response }) => {
        if (isError(response)) {
          this.handleError(response)
          return false
        }
        return true
      }).catch((error: Error) => this.fatalError(error))
      : true
  }

  private async handleUpdateState ({ authorizationState }: UpdateAuthorizationState): Promise<boolean> {
    this.attempt = 0
    this.authState = authorizationState
    let promise: Promise<ApiResponse<any, Ok>> | null = null

    switch (authorizationState._) {
      case AUTHORIZATION_STATE.authorizationStateWaitPhoneNumber: {
        if (this.isBot) {
          const token = await this.ask('token')
          promise = this.airgram.api.checkAuthenticationBotToken({ token })
        } else {
          promise = this.askPhoneNumber().then((phoneNumber) => this.airgram.api.setAuthenticationPhoneNumber({
            phoneNumber
          }))
        }
        break
      }
      case AUTHORIZATION_STATE.authorizationStateWaitCode: {
        promise = this.sendCode()
        break
      }
      case AUTHORIZATION_STATE.authorizationStateWaitRegistration: {
        promise = this.registerUser()
        break
      }
      case AUTHORIZATION_STATE.authorizationStateWaitPassword: {
        promise = this.checkAuthenticationPassword()
        break
      }
      case AUTHORIZATION_STATE.authorizationStateReady: {
        if (this.deferred) {
          await this.deferred.resolve()
          this.deferred = null
        }
        break
      }
      default: {
        return false
      }
    }

    return promise ? promise.then(({ response }) => {
        if (isError(response)) {
          this.handleError(response)
          return false
        }
        return true
      }).catch((error: Error) => this.fatalError(error))
      : true
  }

  private async login (): Promise<void> {
    if (!this.deferred) {
      const deferred: Partial<LoginDeferred> = {}
      deferred.promise = new Promise<void>((resolve, reject) => {
        deferred.resolve = resolve
        deferred.reject = reject
      })
      this.deferred = deferred as LoginDeferred
      if (!this.authState) {
        const { response: authState } = await this.airgram.api.getAuthorizationState()
        this.authState = authState || null
      }
    }
    return Promise.resolve(this.deferred ? this.deferred.promise : undefined)
  }

  private async registerUser (): Promise<ApiResponse<RegisterUserParams, OkUnion>> {
    const firstName = await this.ask('firstName')
    if (!firstName) {
      throw new Error('First name can not be empty.')
    }
    return this.airgram.api.registerUser({
      firstName,
      lastName: (await this.ask('lastName')) || undefined
    })
  }

  private async sendCode (): Promise<ApiResponse<CheckAuthenticationCodeParams, OkUnion>> {
    const code = await this.ask('code')
    if (!code || !/^\d+$/.test(code)) {
      throw new Error('Invalid authorization code')
    }
    return this.airgram.api.checkAuthenticationCode({
      code
    })
  }
}
