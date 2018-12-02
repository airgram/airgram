
export interface AccountPasswordInputSettings {
  _: 'account.passwordInputSettings'
  flags: number
  new_salt?: number[]
  new_password_hash?: number[]
  hint?: string
  email?: string
}

export type AccountPasswordSettingsUnion = AccountPasswordInputSettings
