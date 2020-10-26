import { ChatMember, ChatPhoto } from '@airgram/core'

/** Contains full information about a basic group */
export class BasicGroupFullInfoBaseModel {
  public _: 'basicGroupFullInfo'

  /** Chat photo; may be null */
  public photo?: ChatPhoto

  /** Group description */
  public description: string

  /** User identifier of the creator of the group; 0 if unknown */
  public creatorUserId: number

  /** Group members */
  public members: ChatMember[]

  /**
   * Invite link for this group; available only after it has been generated at least once
   * and only for the group creator
   */
  public inviteLink: string
}
