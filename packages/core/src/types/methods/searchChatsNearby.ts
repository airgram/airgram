import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LocationInput } from '../inputs'
import { ChatsNearbyUnion } from '../outputs'

export interface SearchChatsNearbyParams {
  location?: LocationInput // Current user location
}

/**
 * Returns a list of users and location-based supergroups nearby. The list of users
 * nearby will be updated for 60 seconds after the request by the updates updateUsersNearby.
 * The request must be sent again every 25 seconds with adjusted location to not miss
 * new chats
 * @param {Object} params
 * @param {LocationInput} [params.location] - Current user location
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchChatsNearbyParams, ChatsNearbyUnion>>}
 */
export type searchChatsNearby = (
  params?: SearchChatsNearbyParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchChatsNearbyParams, ChatsNearbyUnion>>
