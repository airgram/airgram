import { ChatFilterInfo } from '@airgram/core'

/** The list of chat filters or a chat filter has changed */
export class UpdateChatFiltersBaseModel {
  public _: 'updateChatFilters'

  /** The new list of chat filters */
  public chatFilters: ChatFilterInfo[]
}
