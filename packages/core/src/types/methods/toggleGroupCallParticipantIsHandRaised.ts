import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageSenderInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface ToggleGroupCallParticipantIsHandRaisedParams {
  groupCallId?: number // Group call identifier
  participantId?: MessageSenderInputUnion // Participant identifier
  isHandRaised?: boolean // Pass true if the user's hand needs to be raised. Only self hand can be raised. Requires groupCall.can_be_managed group call flag to lower other's hand
}

/**
 * Toggles whether a group call participant hand is rased
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {MessageSenderInputUnion} [params.participantId] - Participant identifier
 * @param {boolean} [params.isHandRaised] - Pass true if the user's hand needs to
 * be raised. Only self hand can be raised. Requires groupCall.can_be_managed group
 * call flag to lower other's hand
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleGroupCallParticipantIsHandRaisedParams, OkUnion>>}
 */
export type toggleGroupCallParticipantIsHandRaised = (
  params?: ToggleGroupCallParticipantIsHandRaisedParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleGroupCallParticipantIsHandRaisedParams, OkUnion>>
