import { ChatMember } from './index'

export type BasicGroupFullInfoUnion = BasicGroupFullInfo

/** Contains full information about a basic group */
export interface BasicGroupFullInfo {
  _: 'basicGroupFullInfo'
  /** User identifier of the creator of the group; 0 if unknown */
  creatorUserId: number
  /** Group members */
  members: ChatMember[]
  /**
   * Invite link for this group; available only for the group creator and only after it
   * has been generated at least once
   */
  inviteLink: string
}
