
export interface Authorization {
  _: 'authorization'
  hash: string
  flags: number
  device_model: string
  platform: string
  system_version: string
  api_id: number
  app_name: string
  app_version: string
  date_created: number
  date_active: number
  ip: string
  country: string
  region: string
}

export type AuthorizationUnion = Authorization
