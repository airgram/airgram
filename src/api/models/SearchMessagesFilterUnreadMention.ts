/**
 * Returns only messages with unread mentions of the current user or messages that are
 * replies to their messages. When using this filter the results can't be additionally
 * filtered by a query or by the sending user
 */
export class SearchMessagesFilterUnreadMentionBaseModel {
  public _: 'searchMessagesFilterUnreadMention'
}
