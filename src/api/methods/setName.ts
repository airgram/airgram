import { OkUnion } from '../outputs'

/**
 * Changes the first and last name of the current user. If something changes, updateUser
 * will be sent
 * @param {Object} params
 * @param {string} [params.firstName] - The new value of the first name for the user;
 * 1-255 characters
 * @param {string} [params.lastName] - The new value of the optional last name for
 * the user; 0-255 characters
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetNameMethod = <ResponseT = OkUnion>(
  params: SetNameParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetNameParams {
  /** The new value of the first name for the user; 1-255 characters */
  firstName?: string
  /** The new value of the optional last name for the user; 0-255 characters */
  lastName?: string
}
