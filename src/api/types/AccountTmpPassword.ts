
export interface AccountTmpPassword {
  _: 'account.tmpPassword'
  tmp_password: number[]
  valid_until: number
}

export type AccountTmpPasswordUnion = AccountTmpPassword
