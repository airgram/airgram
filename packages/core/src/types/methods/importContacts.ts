import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ContactInput } from '../inputs'
import { ImportedContactsUnion } from '../outputs'

export interface ImportContactsParams {
  contacts?: ContactInput[] // The list of contacts to import or edit, contact's vCard are ignored and are not imported
}

/**
 * Adds new contacts or edits existing contacts; contacts' user identifiers are ignored
 * @param {Object} params
 * @param {ContactInput[]} [params.contacts] - The list of contacts to import or
 * edit, contact's vCard are ignored and are not imported
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ImportContactsParams, ImportedContactsUnion>>}
 */
export type importContacts = (
  params?: ImportContactsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ImportContactsParams, ImportedContactsUnion>>
