
export interface EncryptedChat {
  _: 'encryptedChat'
  id: number
  access_hash: number
  date: number
  admin_id: number
  participant_id: number
  g_a_or_b: number[]
  key_fingerprint: number
}

export interface EncryptedChatDiscarded {
  _: 'encryptedChatDiscarded'
  id: number
}

export interface EncryptedChatEmpty {
  _: 'encryptedChatEmpty'
  id: number
}

export interface EncryptedChatRequested {
  _: 'encryptedChatRequested'
  id: number
  access_hash: number
  date: number
  admin_id: number
  participant_id: number
  g_a: number[]
}

export interface EncryptedChatWaiting {
  _: 'encryptedChatWaiting'
  id: number
  access_hash: number
  date: number
  admin_id: number
  participant_id: number
}

export type EncryptedChatUnion = EncryptedChat
  | EncryptedChatDiscarded
  | EncryptedChatEmpty
  | EncryptedChatRequested
  | EncryptedChatWaiting
