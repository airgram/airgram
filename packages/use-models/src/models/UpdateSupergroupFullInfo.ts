import { SupergroupFullInfo } from '@airgram/core'

/** Some data in supergroupFullInfo has been changed */
export class UpdateSupergroupFullInfoBaseModel {
  public _: 'updateSupergroupFullInfo'

  /** Identifier of the supergroup or channel */
  public supergroupId: number

  /** New full information about the supergroup */
  public supergroupFullInfo: SupergroupFullInfo
}
