import { RecommendedChatFilter } from '@airgram/core'

/** Contains a list of recommended chat filters */
export class RecommendedChatFiltersBaseModel {
  public _: 'recommendedChatFilters'

  /** List of recommended chat filters */
  public chatFilters: RecommendedChatFilter[]
}
