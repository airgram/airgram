import { ChatMemberStatusUnion } from './index'

export type BasicGroupUnion = BasicGroup

/**
 * Represents a basic group of 0-200 users (must be upgraded to a supergroup to accommodate
 * more than 200 users)
 */
export interface BasicGroup {
  _: 'basicGroup'
  /** Group identifier */
  id: number
  /** Number of members in the group */
  memberCount: number
  /** Status of the current user in the group */
  status: ChatMemberStatusUnion
  /** True, if all members have been granted administrator rights in the group */
  everyoneIsAdministrator: boolean
  /** True, if the group is active */
  isActive: boolean
  /** Identifier of the supergroup to which this group was upgraded; 0 if none */
  upgradedToSupergroupId: number
}
