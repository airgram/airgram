/**
 * The chat is a private chat with an administrator of a chat to which the user sent
 * join request
 */
export class ChatActionBarJoinRequestBaseModel {
  public _: 'chatActionBarJoinRequest'

  /** Title of the chat to which the join request was sent */
  public title: string

  /** True, if the join request was sent to a channel chat */
  public isChannel: boolean

  /** Point in time (Unix timestamp) when the join request was sent */
  public requestDate: number
}
