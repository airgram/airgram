import { ApiRequestOptions, ApiResponse } from '../airgram'
import { BotCommandScopeInputUnion } from '../inputs'
import { BotCommandsUnion } from '../outputs'

export interface GetCommandsParams {
  scope?: BotCommandScopeInputUnion // The scope to which the commands are relevant; pass null to get commands in the default bot command scope
  languageCode?: string // A two-letter ISO 639-1 country code or an empty string
}

/**
 * Returns the list of commands supported by the bot for the given user scope and language;
 * for bots only
 * @param {Object} params
 * @param {BotCommandScopeInputUnion} [params.scope] - The scope to which the commands
 * are relevant; pass null to get commands in the default bot command scope
 * @param {string} [params.languageCode] - A two-letter ISO 639-1 country code or
 * an empty string
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetCommandsParams, BotCommandsUnion>>}
 */
export type getCommands = (
  params?: GetCommandsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetCommandsParams, BotCommandsUnion>>
