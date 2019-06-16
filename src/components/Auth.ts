import {
  AUTHORIZATION_STATE,
  AuthorizationStateUnion,
  AuthorizationStateWaitCode,
  Error as TdError,
  UpdateAuthorizationState
} from 'airgram-api'
import * as pick from 'lodash/pick'
import * as ag from '../types'
import { compose, filter, optional } from './Composer'

interface LoginDeferred {
  promise: Promise<void>,
  resolve: () => any
  reject: (error: Error) => any
}

type AuthAnswer = string | (() => string) | (() => Promise<string>)

interface AuthDialog {
  code?: AuthAnswer
  firstName?: AuthAnswer
  lastName?: AuthAnswer,
  phoneNumber?: AuthAnswer
  password?: AuthAnswer,
  token?: AuthAnswer
}

const AUTH_METHODS = [
  'checkAuthenticationBotToken',
  'checkAuthenticationCode',
  'checkAuthenticationPassword',
  'checkDatabaseEncryptionKey',
  'getAuthorizationState',
  'setAuthenticationPhoneNumber',
  'setTdlibParameters'
]

export default class Auth {
  public maxAttempts: 3

  private answers: Partial<Record<keyof AuthDialog, any>> = {}

  private attempt: number = 0

  private authState: AuthorizationStateUnion | null = null

  private deferred: LoginDeferred | null = null

  private dialog: AuthDialog = {}

  private invalidPhoneNumbers: Set<string> = new Set()

  constructor (private airgram: ag.Airgram<any>, dialog?: AuthDialog) {
    airgram.use(this.middleware())
    if (dialog) {
      this.use(dialog)
    }
  }

  public get isAuthorized (): boolean {
    return !!(this.authState && this.authState._ === AUTHORIZATION_STATE.authorizationStateReady)
  }

  public get isBot (): boolean {
    return 'token' in this.dialog
  }

  public ready (): Promise<void>
  public ready (fn: () => any): void
  public ready (fn?: () => any): Promise<void> | void {
    if (fn) {
      return this.login().then(fn)
    }
    return this.login()
  }

  public use (dialog: AuthDialog) {
    this.dialog = dialog
  }

  private async ask (type: keyof AuthDialog): Promise<any> {
    if (!this.dialog[type]) {
      throw new Error(`Answer for the "${type}" does not specified.`)
    }
    return typeof this.dialog[type] === 'function'
      ? (this.dialog[type] as () => string)()
      : this.dialog[type]
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

  private async checkAuthenticationPassword (): Promise<void> {
    await this.airgram.api.checkAuthenticationPassword({
      password: await this.ask('password')
    })
  }

  private async handleError (error: TdError): Promise<boolean> {
    let promise: Promise<any> | null = null

    switch (error.message) {
      case 'PHONE_NUMBER_INVALID': {
        this.invalidPhoneNumbers.add(this.answers.phoneNumber)
        delete this.answers.phoneNumber
        promise = this.askPhoneNumber()
          .then((phoneNumber) => this.airgram.api.setAuthenticationPhoneNumber({ phoneNumber }))
        break
      }
      case 'PHONE_CODE_EMPTY':
      case 'PHONE_CODE_EXPIRED':
      case 'PHONE_CODE_INVALID': {
        if (this.attempt < this.maxAttempts) {
          this.attempt += 1
          promise = this.sendCode(
            !!(this.authState && (this.authState as AuthorizationStateWaitCode).isRegistered))
        } else {
          this.airgram.handleError(new Error('Exceeded the limit of failed attempts'), error)
        }
        break
      }
      case 'PASSWORD_HASH_INVALID': {
        if (this.attempt < this.maxAttempts) {
          this.attempt += 1
          promise = this.checkAuthenticationPassword()
        } else {
          this.airgram.handleError(new Error('Exceeded the limit of failed attempts'), error)
        }
        break
      }
      default: {
        return false
      }
    }
    return promise
      ? promise.then(() => true).catch((e) => this.airgram.handleError(e, error))
      : true
  }

  private async handleUpdateState ({ authorizationState }: UpdateAuthorizationState): Promise<boolean> {
    this.attempt = 0
    this.authState = authorizationState

    let promise: Promise<any> | null = null

    switch (authorizationState._) {
      case 'authorizationStateWaitTdlibParameters': {
        const keys: Array<keyof ag.TdLibConfig> = [
          'useTestDc',
          'databaseDirectory',
          'filesDirectory',
          'useFileDatabase',
          'useChatInfoDatabase',
          'useMessageDatabase',
          'useSecretChats',
          'apiId',
          'apiHash',
          'systemLanguageCode',
          'deviceModel',
          'systemVersion',
          'applicationVersion',
          'enableStorageOptimizer',
          'ignoreFileNames'
        ]
        promise = this.airgram.api.setTdlibParameters({
          parameters: { _: 'tdlibParameters', ...pick(this.airgram.config, keys) }
        })
        break
      }
      case 'authorizationStateWaitEncryptionKey': {
        promise = this.airgram.api.checkDatabaseEncryptionKey({
          encryptionKey: this.airgram.config.databaseEncryptionKey
        })
        break
      }
      case 'authorizationStateWaitPhoneNumber': {
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
      case 'authorizationStateWaitCode': {
        promise = this.sendCode(authorizationState.isRegistered)
        break
      }
      case 'authorizationStateWaitPassword': {
        promise = this.checkAuthenticationPassword()
        break
      }
      case 'authorizationStateReady': {
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

    return promise ? promise.then(() => true)
      .catch((error) => this.airgram.handleError(error, authorizationState))
      .catch(() => {
        // do nothing
      }) : true
  }

  private async login (): Promise<void> {
    if (!this.deferred) {
      const deferred: Record<string, any> = {}
      deferred.promise = new Promise<void>((resolve, reject) => {
        deferred.resolve = resolve
        deferred.reject = reject
      })
      this.deferred = deferred as LoginDeferred
      if (!this.authState) {
        this.authState = await this.airgram.api.getAuthorizationState()
      }
    }
    return this.deferred.promise
  }

  private middleware (): ag.MiddlewarePromise<any> {
    return compose([
      (ctx, next) => {
        return next()
      },
      filter((ctx) => !('update' in ctx)
        || !ctx.update
        || ctx.update._ !== 'updateAuthorizationState'
        || !this.handleUpdateState(ctx.update)
      ),
      filter((ctx) => !ctx.update
        || ctx.update._ !== 'error'
        || !this.handleError(ctx.update)
      ),
      optional(
        (ctx) => !this.isAuthorized && !AUTH_METHODS.includes(ctx._),
        (ctx, next) => this.login().then(next)
      )
    ])
  }

  private async sendCode (isRegistered: boolean): Promise<any> {
    const code = await this.ask('code')
    if (!code || !/^\d+$/.test(code)) {
      throw new Error('Invalid authorization code')
    }
    return this.airgram.api.checkAuthenticationCode({
      code,
      firstName: (!isRegistered && await this.ask('firstName')) || undefined,
      lastName: (!isRegistered && await this.ask('lastName')) || undefined
    })
  }
}
