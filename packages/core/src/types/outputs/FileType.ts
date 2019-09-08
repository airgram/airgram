/** Represents the type of a file */
export type FileTypeUnion = FileTypeNone
  | FileTypeAnimation
  | FileTypeAudio
  | FileTypeDocument
  | FileTypePhoto
  | FileTypeProfilePhoto
  | FileTypeSecret
  | FileTypeSecretThumbnail
  | FileTypeSecure
  | FileTypeSticker
  | FileTypeThumbnail
  | FileTypeUnknown
  | FileTypeVideo
  | FileTypeVideoNote
  | FileTypeVoiceNote
  | FileTypeWallpaper

/** The data is not a file */
export interface FileTypeNone {
  _: 'fileTypeNone'
}

/** The file is an animation */
export interface FileTypeAnimation {
  _: 'fileTypeAnimation'
}

/** The file is an audio file */
export interface FileTypeAudio {
  _: 'fileTypeAudio'
}

/** The file is a document */
export interface FileTypeDocument {
  _: 'fileTypeDocument'
}

/** The file is a photo */
export interface FileTypePhoto {
  _: 'fileTypePhoto'
}

/** The file is a profile photo */
export interface FileTypeProfilePhoto {
  _: 'fileTypeProfilePhoto'
}

/** The file was sent to a secret chat (the file type is not known to the server) */
export interface FileTypeSecret {
  _: 'fileTypeSecret'
}

/** The file is a thumbnail of a file from a secret chat */
export interface FileTypeSecretThumbnail {
  _: 'fileTypeSecretThumbnail'
}

/** The file is a file from Secure storage used for storing Telegram Passport files */
export interface FileTypeSecure {
  _: 'fileTypeSecure'
}

/** The file is a sticker */
export interface FileTypeSticker {
  _: 'fileTypeSticker'
}

/** The file is a thumbnail of another file */
export interface FileTypeThumbnail {
  _: 'fileTypeThumbnail'
}

/** The file type is not yet known */
export interface FileTypeUnknown {
  _: 'fileTypeUnknown'
}

/** The file is a video */
export interface FileTypeVideo {
  _: 'fileTypeVideo'
}

/** The file is a video note */
export interface FileTypeVideoNote {
  _: 'fileTypeVideoNote'
}

/** The file is a voice note */
export interface FileTypeVoiceNote {
  _: 'fileTypeVoiceNote'
}

/** The file is a wallpaper or a background pattern */
export interface FileTypeWallpaper {
  _: 'fileTypeWallpaper'
}
