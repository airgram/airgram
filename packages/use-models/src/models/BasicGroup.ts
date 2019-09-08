import { ChatMemberStatusUnion } from '@airgram/core'

/**
 * Represents a basic group of 0-200 users (must be upgraded to a supergroup to accommodate
 * more than 200 users)
 */
export class BasicGroupBaseModel {
  public _: 'basicGroup'

  /** Group identifier */
  public id: number

  /** Number of members in the group */
  public memberCount: number

  /** Status of the current user in the group */
  public status: ChatMemberStatusUnion

  /** True, if the group is active */
  public isActive: boolean

  /** Identifier of the supergroup to which this group was upgraded; 0 if none */
  public upgradedToSupergroupId: number
}
