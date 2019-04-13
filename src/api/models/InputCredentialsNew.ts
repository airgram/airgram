/** Applies if a user enters new credentials on a payment provider website */
export class InputCredentialsNewBaseModel {
  public _: 'inputCredentialsNew'
  /** Contains JSON-encoded data with a credential identifier from the payment provider */
  public data: string
  /** True, if the credential identifier can be saved on the server side */
  public allowSave: boolean
}
