import { ChatMember, ChatPhoto } from './index'

export type BasicGroupFullInfoUnion = BasicGroupFullInfo

/** Contains full information about a basic group */
export interface BasicGroupFullInfo {
  _: 'basicGroupFullInfo'
  /** Chat photo; may be null */
  photo?: ChatPhoto
  /** Group description */
  description: string
  /** User identifier of the creator of the group; 0 if unknown */
  creatorUserId: number
  /** Group members */
  members: ChatMember[]
  /**
   * Invite link for this group; available only after it has been generated at least once
   * and only for the group creator
   */
  inviteLink: string
}
