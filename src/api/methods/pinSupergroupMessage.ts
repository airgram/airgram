import { OkUnion } from '../outputs'

/**
 * Pins a message in a supergroup or channel; requires appropriate administrator rights
 * in the supergroup or channel
 * @param {Object} params
 * @param {number} [params.supergroupId] - Identifier of the supergroup or channel
 * @param {number} [params.messageId] - Identifier of the new pinned message
 * @param {boolean} [params.disableNotification] - True, if there should be no notification
 * about the pinned message
 * @param {Object} state
 * @returns {OkUnion}
 */
export type PinSupergroupMessageMethod = <ResponseT = OkUnion>(
  params: PinSupergroupMessageParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface PinSupergroupMessageParams {
  /** Identifier of the supergroup or channel */
  supergroupId?: number
  /** Identifier of the new pinned message */
  messageId?: number
  /** True, if there should be no notification about the pinned message */
  disableNotification?: boolean
}
