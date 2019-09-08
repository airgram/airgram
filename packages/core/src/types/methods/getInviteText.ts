import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TextUnion } from '../outputs'

/**
 * Returns the default text for invitation messages to be used as a placeholder when
 * the current user invites friends to Telegram
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, TextUnion>>}
 */
export type getInviteText<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, TextUnion> & ExtensionT>
