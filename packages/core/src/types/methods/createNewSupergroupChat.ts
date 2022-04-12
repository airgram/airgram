import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatLocationInput } from '../inputs'
import { ChatUnion } from '../outputs'

export interface CreateNewSupergroupChatParams {
  title?: string // Title of the new chat; 1-128 characters
  isChannel?: boolean // Pass true to create a channel chat
  description?: string // Chat description; 0-255 characters
  location?: ChatLocationInput // Chat location if a location-based supergroup is being created; pass null to create an ordinary supergroup chat
  forImport?: boolean // Pass true to create a supergroup for importing messages using importMessage
}

/**
 * Creates a new supergroup or channel and sends a corresponding messageSupergroupChatCreate.
 * Returns the newly created chat
 * @param {Object} params
 * @param {string} [params.title] - Title of the new chat; 1-128 characters
 * @param {boolean} [params.isChannel] - Pass true to create a channel chat
 * @param {string} [params.description] - Chat description; 0-255 characters
 * @param {ChatLocationInput} [params.location] - Chat location if a location-based
 * supergroup is being created; pass null to create an ordinary supergroup chat
 * @param {boolean} [params.forImport] - Pass true to create a supergroup for importing
 * messages using importMessage
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreateNewSupergroupChatParams, ChatUnion>>}
 */
export type createNewSupergroupChat = (
  params?: CreateNewSupergroupChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CreateNewSupergroupChatParams, ChatUnion>>
