import { Sticker } from '@airgram/core'

/** A message with a sticker */
export class PushMessageContentStickerBaseModel {
  public _: 'pushMessageContentSticker'

  /** Message content; may be null */
  public sticker?: Sticker

  /** Emoji corresponding to the sticker; may be empty */
  public emoji: string

  /** True, if the message is a pinned message with the specified content */
  public isPinned: boolean
}
