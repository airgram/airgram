/**
 * A deleted user or deleted bot. No information on the user besides the user identifier
 * is available. It is not possible to perform any active actions on this type of user
 */
export class UserTypeDeletedBaseModel {
  public _: 'userTypeDeleted'
}
