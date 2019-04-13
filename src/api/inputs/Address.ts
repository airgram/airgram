export type AddressInputUnion = AddressInput

/** Describes an address */
export interface AddressInput {
  _: 'address'
  /** A two-letter ISO 3166-1 alpha-2 country code */
  countryCode?: string
  /** State, if applicable */
  state?: string
  /** City */
  city?: string
  /** First line of the address */
  streetLine1?: string
  /** Second line of the address */
  streetLine2?: string
  /** Address postal code */
  postalCode?: string
}
