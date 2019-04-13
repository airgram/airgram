import { TextEntitiesUnion } from '../outputs'

/**
 * Returns all entities (mentions, hashtags, cashtags, bot commands, URLs, and email
 * addresses) contained in the text. This is an offline method. Can be called before
 * authorization. Can be called synchronously
 * @param {Object} params
 * @param {string} [params.text] - The text in which to look for entites
 * @param {Object} state
 * @returns {TextEntitiesUnion}
 */
export type GetTextEntitiesMethod = <ResponseT = TextEntitiesUnion>(
  params: GetTextEntitiesParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetTextEntitiesParams {
  /** The text in which to look for entites */
  text?: string
}
