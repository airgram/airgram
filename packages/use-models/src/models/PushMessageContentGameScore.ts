/** A new high score was achieved in a game */
export class PushMessageContentGameScoreBaseModel {
  public _: 'pushMessageContentGameScore'

  /** Game title, empty for pinned message */
  public title: string

  /** New score, 0 for pinned message */
  public score: number

  /** True, if the message is a pinned message with the specified content */
  public isPinned: boolean
}
