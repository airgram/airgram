import { ContactInput } from '../inputs'
import { ImportedContactsUnion } from '../outputs'

/**
 * Adds new contacts or edits existing contacts; contacts' user identifiers are ignored
 * @param {Object} params
 * @param {ContactInput[]} [params.contacts] - The list of contacts to import or
 * edit, contact's vCard are ignored and are not imported
 * @param {Object} state
 * @returns {ImportedContactsUnion}
 */
export type ImportContactsMethod = <ResponseT = ImportedContactsUnion>(
  params: ImportContactsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ImportContactsParams {
  /** The list of contacts to import or edit, contact's vCard are ignored and are not imported */
  contacts?: ContactInput[]
}
