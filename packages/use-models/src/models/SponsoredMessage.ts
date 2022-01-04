import {
  ChatInviteLinkInfo,
  InternalLinkTypeUnion,
  MessageContentUnion
} from '@airgram/core'

/** Describes a sponsored message */
export class SponsoredMessageBaseModel {
  public _: 'sponsoredMessage'

  /**
   * Message identifier; unique for the chat to which the sponsored message belongs among
   * both ordinary and sponsored messages
   */
  public messageId: number

  /** Sponsor chat identifier; 0 if the sponsor chat is accessible through an invite link */
  public sponsorChatId: number

  /** Information about the sponsor chat; may be null unless sponsor_chat_id == 0 */
  public sponsorChatInfo?: ChatInviteLinkInfo

  /**
   * An internal link to be opened when the sponsored message is clicked; may be null.
   * If null, the sponsor chat needs to be opened instead
   */
  public link?: InternalLinkTypeUnion

  /** Content of the message. Currently, can be only of the type messageText */
  public content: MessageContentUnion
}
