import { ApiRequestOptions, ApiResponse } from '../airgram'
import { BotCommandScopeInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface DeleteCommandsParams {
  scope?: BotCommandScopeInputUnion // The scope to which the commands are relevant; pass null to delete commands in the default bot command scope
  languageCode?: string // A two-letter ISO 639-1 language code or an empty string
}

/**
 * Deletes commands supported by the bot for the given user scope and language; for
 * bots only
 * @param {Object} params
 * @param {BotCommandScopeInputUnion} [params.scope] - The scope to which the commands
 * are relevant; pass null to delete commands in the default bot command scope
 * @param {string} [params.languageCode] - A two-letter ISO 639-1 language code or
 * an empty string
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteCommandsParams, OkUnion>>}
 */
export type deleteCommands = (
  params?: DeleteCommandsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DeleteCommandsParams, OkUnion>>
