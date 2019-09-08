import { BasicGroupFullInfo } from '@airgram/core'

/** Some data from basicGroupFullInfo has been changed */
export class UpdateBasicGroupFullInfoBaseModel {
  public _: 'updateBasicGroupFullInfo'

  /** Identifier of a basic group */
  public basicGroupId: number

  /** New full information about the group */
  public basicGroupFullInfo: BasicGroupFullInfo
}
