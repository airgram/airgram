
export interface AccountNoPassword {
  _: 'account.noPassword'
  new_salt: number[]
  email_unconfirmed_pattern: string
}

export interface AccountPassword {
  _: 'account.password'
  current_salt: number[]
  new_salt: number[]
  hint: string
  has_recovery: boolean
  email_unconfirmed_pattern: string
}

export type AccountPasswordUnion = AccountNoPassword
  | AccountPassword
