import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ContactInput } from '../inputs'
import { OkUnion } from '../outputs'

export interface AddContactParams {
  contact?: ContactInput // The contact to add or edit; phone number may be empty and needs to be specified only if known, vCard is ignored
  sharePhoneNumber?: boolean // Pass true to share the current user's phone number with the new contact. A corresponding rule to userPrivacySettingShowPhoneNumber will be added if needed. Use the field userFullInfo.need_phone_number_privacy_exception to check whether the current user needs to be asked to share their phone number
}

/**
 * Adds a user to the contact list or edits an existing contact by their user identifier
 * @param {Object} params
 * @param {ContactInput} [params.contact] - The contact to add or edit; phone number
 * may be empty and needs to be specified only if known, vCard is ignored
 * @param {boolean} [params.sharePhoneNumber] - Pass true to share the current user's
 * phone number with the new contact. A corresponding rule to userPrivacySettingShowPhoneNumber
 * will be added if needed. Use the field userFullInfo.need_phone_number_privacy_exception
 * to check whether the current user needs to be asked to share their phone number
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AddContactParams, OkUnion>>}
 */
export type addContact = (
  params?: AddContactParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AddContactParams, OkUnion>>
