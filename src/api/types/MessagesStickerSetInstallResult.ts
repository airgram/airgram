import { StickerSetCoveredUnion } from './StickerSetCovered'

export interface MessagesStickerSetInstallResultArchive {
  _: 'messages.stickerSetInstallResultArchive'
  sets: StickerSetCoveredUnion[]
}

export interface MessagesStickerSetInstallResultSuccess {
  _: 'messages.stickerSetInstallResultSuccess'
}

export type MessagesStickerSetInstallResultUnion = MessagesStickerSetInstallResultArchive
  | MessagesStickerSetInstallResultSuccess
