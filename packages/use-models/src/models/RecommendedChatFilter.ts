import { ChatFilter } from '@airgram/core'

/** Describes a recommended chat filter */
export class RecommendedChatFilterBaseModel {
  public _: 'recommendedChatFilter'

  /** The chat filter */
  public filter: ChatFilter

  /** Chat filter description */
  public description: string
}
