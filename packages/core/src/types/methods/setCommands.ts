import { ApiRequestOptions, ApiResponse } from '../airgram'
import { BotCommandInput, BotCommandScopeInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetCommandsParams {
  scope?: BotCommandScopeInputUnion // The scope to which the commands are relevant; pass null to change commands in the default bot command scope
  languageCode?: string // A two-letter ISO 639-1 country code. If empty, the commands will be applied to all users from the given scope, for which language there are no dedicated commands
  commands?: BotCommandInput[] // List of the bot's commands
}

/**
 * Sets the list of commands supported by the bot for the given user scope and language;
 * for bots only
 * @param {Object} params
 * @param {BotCommandScopeInputUnion} [params.scope] - The scope to which the commands
 * are relevant; pass null to change commands in the default bot command scope
 * @param {string} [params.languageCode] - A two-letter ISO 639-1 country code. If
 * empty, the commands will be applied to all users from the given scope, for which
 * language there are no dedicated commands
 * @param {BotCommandInput[]} [params.commands] - List of the bot's commands
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetCommandsParams, OkUnion>>}
 */
export type setCommands = (
  params?: SetCommandsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetCommandsParams, OkUnion>>
