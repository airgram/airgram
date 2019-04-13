import { OkUnion } from '../outputs'

/**
 * Toggles whether all members of a supergroup can add new members; requires appropriate
 * administrator rights in the supergroup.
 * @param {Object} params
 * @param {number} [params.supergroupId] - Identifier of the supergroup
 * @param {boolean} [params.anyoneCanInvite] - New value of anyone_can_invite
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ToggleSupergroupInvitesMethod = <ResponseT = OkUnion>(
  params: ToggleSupergroupInvitesParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ToggleSupergroupInvitesParams {
  /** Identifier of the supergroup */
  supergroupId?: number
  /** New value of anyone_can_invite */
  anyoneCanInvite?: boolean
}
