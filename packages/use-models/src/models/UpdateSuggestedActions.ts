import { SuggestedActionUnion } from '@airgram/core'

/** The list of suggested to the user actions has changed */
export class UpdateSuggestedActionsBaseModel {
  public _: 'updateSuggestedActions'

  /** Added suggested actions */
  public addedActions: SuggestedActionUnion[]

  /** Removed suggested actions */
  public removedActions: SuggestedActionUnion[]
}
