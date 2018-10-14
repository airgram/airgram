import { DcOptionUnion } from './DcOption'
import { DisabledFeatureUnion } from './DisabledFeature'

export interface Config {
  _: 'config'
  flags: number
  phonecalls_enabled?: true
  date: number
  expires: number
  test_mode: boolean
  this_dc: number
  dc_options: DcOptionUnion[]
  chat_size_max: number
  megagroup_size_max: number
  forwarded_count_max: number
  online_update_period_ms: number
  offline_blur_timeout_ms: number
  offline_idle_timeout_ms: number
  online_cloud_timeout_ms: number
  notify_cloud_delay_ms: number
  notify_default_delay_ms: number
  chat_big_size: number
  push_chat_period_ms: number
  push_chat_limit: number
  saved_gifs_limit: number
  edit_time_limit: number
  rating_e_decay: number
  stickers_recent_limit: number
  stickers_faved_limit: number
  tmp_sessions?: number
  pinned_dialogs_count_max: number
  call_receive_timeout_ms: number
  call_ring_timeout_ms: number
  call_connect_timeout_ms: number
  call_packet_timeout_ms: number
  me_url_prefix: string
  suggested_lang_code?: string
  lang_pack_version?: number
  disabled_features: DisabledFeatureUnion[]
}

export type ConfigUnion = Config
