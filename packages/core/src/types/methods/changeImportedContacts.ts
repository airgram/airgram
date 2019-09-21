import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ContactInput } from '../inputs'
import { ImportedContactsUnion } from '../outputs'

export interface ChangeImportedContactsParams {
  contacts?: ContactInput[] // The new list of contacts, contact's vCard are ignored and are not imported
}

/**
 * Changes imported contacts using the list of current user contacts saved on the device.
 * Imports newly added contacts and, if at least the file database is enabled, deletes
 * recently deleted contacts. Query result depends on the result of the previous query,
 * so only one query is possible at the same time
 * @param {Object} params
 * @param {ContactInput[]} [params.contacts] - The new list of contacts, contact's
 * vCard are ignored and are not imported
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ChangeImportedContactsParams, ImportedContactsUnion>>}
 */
export type changeImportedContacts = (
  params?: ChangeImportedContactsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ChangeImportedContactsParams, ImportedContactsUnion>>
