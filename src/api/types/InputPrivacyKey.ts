
export interface InputPrivacyKeyChatInvite {
  _: 'inputPrivacyKeyChatInvite'
}

export interface InputPrivacyKeyPhoneCall {
  _: 'inputPrivacyKeyPhoneCall'
}

export interface InputPrivacyKeyStatusTimestamp {
  _: 'inputPrivacyKeyStatusTimestamp'
}

export type InputPrivacyKeyUnion = InputPrivacyKeyChatInvite
  | InputPrivacyKeyPhoneCall
  | InputPrivacyKeyStatusTimestamp
