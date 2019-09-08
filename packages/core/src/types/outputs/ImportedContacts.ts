export type ImportedContactsUnion = ImportedContacts

/** Represents the result of an ImportContacts request */
export interface ImportedContacts {
  _: 'importedContacts'
  /**
   * User identifiers of the imported contacts in the same order as they were specified
   * in the request; 0 if the contact is not yet a registered user
   */
  userIds: number[]
  /**
   * The number of users that imported the corresponding contact; 0 for already registered
   * users or if unavailable
   */
  importerCount: number[]
}
