import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetChatThemeParams {
  chatId?: number // Chat identifier
  themeName?: string // Name of the new chat theme; pass an empty string to return the default theme
}

/**
 * Changes the chat theme. Supported only in private and secret chats
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.themeName] - Name of the new chat theme; pass an empty
 * string to return the default theme
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatThemeParams, OkUnion>>}
 */
export type setChatTheme = (
  params?: SetChatThemeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatThemeParams, OkUnion>>
