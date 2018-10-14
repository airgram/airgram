
export interface PrivacyKeyChatInvite {
  _: 'privacyKeyChatInvite'
}

export interface PrivacyKeyPhoneCall {
  _: 'privacyKeyPhoneCall'
}

export interface PrivacyKeyStatusTimestamp {
  _: 'privacyKeyStatusTimestamp'
}

export type PrivacyKeyUnion = PrivacyKeyChatInvite
  | PrivacyKeyPhoneCall
  | PrivacyKeyStatusTimestamp
