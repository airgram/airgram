export type SavedCredentialsUnion = SavedCredentials

/** Contains information about saved card credentials */
export interface SavedCredentials {
  _: 'savedCredentials'
  /** Unique identifier of the saved credentials */
  id: string
  /** Title of the saved credentials */
  title: string
}
