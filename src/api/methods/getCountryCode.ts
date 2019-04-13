import { TextUnion } from '../outputs'

/**
 * Uses current user IP to found his country. Returns two-letter ISO 3166-1 alpha-2
 * country code. Can be called before authorization
 * @param {Object} state
 * @returns {TextUnion}
 */
export type GetCountryCodeMethod = <ResponseT = TextUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
