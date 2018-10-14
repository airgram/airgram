
export interface PostAddress {
  _: 'postAddress'
  street_line1: string
  street_line2: string
  city: string
  state: string
  country_iso2: string
  post_code: string
}

export type PostAddressUnion = PostAddress
