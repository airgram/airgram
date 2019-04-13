/** Represents the type of a file */
export type FileTypeInputUnion = FileTypeNoneInput
  | FileTypeAnimationInput
  | FileTypeAudioInput
  | FileTypeDocumentInput
  | FileTypePhotoInput
  | FileTypeProfilePhotoInput
  | FileTypeSecretInput
  | FileTypeSecretThumbnailInput
  | FileTypeSecureInput
  | FileTypeStickerInput
  | FileTypeThumbnailInput
  | FileTypeUnknownInput
  | FileTypeVideoInput
  | FileTypeVideoNoteInput
  | FileTypeVoiceNoteInput
  | FileTypeWallpaperInput

/** The data is not a file */
export interface FileTypeNoneInput {
  _: 'fileTypeNone'
}

/** The file is an animation */
export interface FileTypeAnimationInput {
  _: 'fileTypeAnimation'
}

/** The file is an audio file */
export interface FileTypeAudioInput {
  _: 'fileTypeAudio'
}

/** The file is a document */
export interface FileTypeDocumentInput {
  _: 'fileTypeDocument'
}

/** The file is a photo */
export interface FileTypePhotoInput {
  _: 'fileTypePhoto'
}

/** The file is a profile photo */
export interface FileTypeProfilePhotoInput {
  _: 'fileTypeProfilePhoto'
}

/** The file was sent to a secret chat (the file type is not known to the server) */
export interface FileTypeSecretInput {
  _: 'fileTypeSecret'
}

/** The file is a thumbnail of a file from a secret chat */
export interface FileTypeSecretThumbnailInput {
  _: 'fileTypeSecretThumbnail'
}

/** The file is a file from Secure storage used for storing Telegram Passport files */
export interface FileTypeSecureInput {
  _: 'fileTypeSecure'
}

/** The file is a sticker */
export interface FileTypeStickerInput {
  _: 'fileTypeSticker'
}

/** The file is a thumbnail of another file */
export interface FileTypeThumbnailInput {
  _: 'fileTypeThumbnail'
}

/** The file type is not yet known */
export interface FileTypeUnknownInput {
  _: 'fileTypeUnknown'
}

/** The file is a video */
export interface FileTypeVideoInput {
  _: 'fileTypeVideo'
}

/** The file is a video note */
export interface FileTypeVideoNoteInput {
  _: 'fileTypeVideoNote'
}

/** The file is a voice note */
export interface FileTypeVoiceNoteInput {
  _: 'fileTypeVoiceNote'
}

/** The file is a wallpaper */
export interface FileTypeWallpaperInput {
  _: 'fileTypeWallpaper'
}
