import { OkUnion } from '../outputs'

/**
 * Toggles the "All members are admins" setting in basic groups; requires creator privileges
 * in the group
 * @param {Object} params
 * @param {number} [params.basicGroupId] - Identifier of the basic group
 * @param {boolean} [params.everyoneIsAdministrator] - New value of everyone_is_administrator
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ToggleBasicGroupAdministratorsMethod = <ResponseT = OkUnion>(
  params: ToggleBasicGroupAdministratorsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ToggleBasicGroupAdministratorsParams {
  /** Identifier of the basic group */
  basicGroupId?: number
  /** New value of everyone_is_administrator */
  everyoneIsAdministrator?: boolean
}
