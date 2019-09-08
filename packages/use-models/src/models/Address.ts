/** Describes an address */
export class AddressBaseModel {
  public _: 'address'

  /** A two-letter ISO 3166-1 alpha-2 country code */
  public countryCode: string

  /** State, if applicable */
  public state: string

  /** City */
  public city: string

  /** First line of the address */
  public streetLine1: string

  /** Second line of the address */
  public streetLine2: string

  /** Address postal code */
  public postalCode: string
}
