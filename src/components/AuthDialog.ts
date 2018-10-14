import { ag } from '../interfaces'

export type Value = ((state: Partial<Answers>) => Promise<string>) | string | undefined

export interface Answers {
  code: Value,
  continue: Value,
  firstName: Value,
  lastName: Value,
  phoneNumber: Value,
  samePhoneNumber: Value

  [key: string]: Value
}

const defaultAnswers: Answers = {
  code: undefined,
  continue: undefined,
  firstName: undefined,
  lastName: undefined,
  phoneNumber: undefined,
  samePhoneNumber: undefined
}

export default class AuthDialog {
  public static async unwrap (value: Value, state: Partial<{ [key: string]: Value }>): Promise<string> {
    return (typeof value === 'function') ? value(state) : String(value)
  }

  public answers: Answers

  constructor (answers: Partial<Answers> = {}) {
    this.answers = { ...defaultAnswers, ...answers }
  }

  public middleware (): ag.MiddlewarePromise<any> {
    return async (ctx: { _: string, state: Partial<Answers> }, next: () => Promise<any>) => {
      const { _: type, state } = ctx
      state[type] = await this.prompt(type, state)
      return next()
    }
  }

  public async prompt (type: string, state: Partial<{ [key: string]: Value }>): Promise<string> {
    if (type in this.answers && this.answers[type] !== undefined) {
      return AuthDialog.unwrap(this.answers[type], state)
    }
    throw new Error(`Type "${type}" is not supported`)
  }
}
