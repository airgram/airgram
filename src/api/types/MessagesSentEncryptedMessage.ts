import { EncryptedFileUnion } from './EncryptedFile'

export interface MessagesSentEncryptedFile {
  _: 'messages.sentEncryptedFile'
  date: number
  file: EncryptedFileUnion
}

export interface MessagesSentEncryptedMessage {
  _: 'messages.sentEncryptedMessage'
  date: number
}

export type MessagesSentEncryptedMessageUnion = MessagesSentEncryptedFile
  | MessagesSentEncryptedMessage
