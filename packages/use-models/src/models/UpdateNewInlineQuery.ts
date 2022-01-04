import { ChatTypeUnion, Location } from '@airgram/core'

/** A new incoming inline query; for bots only */
export class UpdateNewInlineQueryBaseModel {
  public _: 'updateNewInlineQuery'

  /** Unique query identifier */
  public id: string

  /** Identifier of the user who sent the query */
  public senderUserId: number

  /** User location; may be null */
  public userLocation?: Location

  /** The type of the chat, from which the query originated; may be null if unknown */
  public chatType?: ChatTypeUnion

  /** Text of the query */
  public query: string

  /** Offset of the first entry to return */
  public offset: string
}
