import { DraftMessageUnion } from './DraftMessage'
import { PeerUnion } from './Peer'
import { PeerNotifySettingsUnion } from './PeerNotifySettings'

export interface Dialog {
  _: 'dialog'
  flags: number
  pinned?: true
  peer: PeerUnion
  top_message: number
  read_inbox_max_id: number
  read_outbox_max_id: number
  unread_count: number
  unread_mentions_count: number
  notify_settings: PeerNotifySettingsUnion
  pts?: number
  draft?: DraftMessageUnion
}

export type DialogUnion = Dialog
