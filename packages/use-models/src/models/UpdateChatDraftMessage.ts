import { DraftMessage } from '@airgram/core'

/**
 * A chat draft has changed. Be aware that the update may come in the currently opened
 * chat but with old content of the draft. If the user has changed the content of the
 * draft, this update shouldn't be applied
 */
export class UpdateChatDraftMessageBaseModel {
  public _: 'updateChatDraftMessage'

  /** Chat identifier */
  public chatId: number

  /** The new draft message; may be null */
  public draftMessage?: DraftMessage

  /** New value of the chat order */
  public order: string
}
