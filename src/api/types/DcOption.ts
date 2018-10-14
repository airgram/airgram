
export interface DcOption {
  _: 'dcOption'
  flags: number
  ipv6?: true
  media_only?: true
  tcpo_only?: true
  cdn?: true
  static?: true
  id: number
  ip_address: string
  port: number
}

export type DcOptionUnion = DcOption
