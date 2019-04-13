import { UserFullInfo } from '../outputs'

/** Some data from userFullInfo has been changed */
export class UpdateUserFullInfoBaseModel {
  public _: 'updateUserFullInfo'
  /** User identifier */
  public userId: number
  /** New full information about the user */
  public userFullInfo: UserFullInfo
}
