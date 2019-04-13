/** Contains the description of an error in a Telegram Passport element; for bots only */
export type InputPassportElementErrorSourceUnion = InputPassportElementErrorSourceUnspecified
  | InputPassportElementErrorSourceDataField
  | InputPassportElementErrorSourceFrontSide
  | InputPassportElementErrorSourceReverseSide
  | InputPassportElementErrorSourceSelfie
  | InputPassportElementErrorSourceTranslationFile
  | InputPassportElementErrorSourceTranslationFiles
  | InputPassportElementErrorSourceFile
  | InputPassportElementErrorSourceFiles

/**
 * The element contains an error in an unspecified place. The error will be considered
 * resolved when new data is added
 */
export interface InputPassportElementErrorSourceUnspecified {
  _: 'inputPassportElementErrorSourceUnspecified'
  /** Current hash of the entire element */
  elementHash: string
}

/**
 * A data field contains an error. The error is considered resolved when the field's
 * value changes
 */
export interface InputPassportElementErrorSourceDataField {
  _: 'inputPassportElementErrorSourceDataField'
  /** Field name */
  fieldName: string
  /** Current data hash */
  dataHash: string
}

/**
 * The front side of the document contains an error. The error is considered resolved
 * when the file with the front side of the document changes
 */
export interface InputPassportElementErrorSourceFrontSide {
  _: 'inputPassportElementErrorSourceFrontSide'
  /** Current hash of the file containing the front side */
  fileHash: string
}

/**
 * The reverse side of the document contains an error. The error is considered resolved
 * when the file with the reverse side of the document changes
 */
export interface InputPassportElementErrorSourceReverseSide {
  _: 'inputPassportElementErrorSourceReverseSide'
  /** Current hash of the file containing the reverse side */
  fileHash: string
}

/**
 * The selfie contains an error. The error is considered resolved when the file with
 * the selfie changes
 */
export interface InputPassportElementErrorSourceSelfie {
  _: 'inputPassportElementErrorSourceSelfie'
  /** Current hash of the file containing the selfie */
  fileHash: string
}

/**
 * One of the files containing the translation of the document contains an error. The
 * error is considered resolved when the file with the translation changes
 */
export interface InputPassportElementErrorSourceTranslationFile {
  _: 'inputPassportElementErrorSourceTranslationFile'
  /** Current hash of the file containing the translation */
  fileHash: string
}

/**
 * The translation of the document contains an error. The error is considered resolved
 * when the list of files changes
 */
export interface InputPassportElementErrorSourceTranslationFiles {
  _: 'inputPassportElementErrorSourceTranslationFiles'
  /** Current hashes of all files with the translation */
  fileHashes: string[]
}

/** The file contains an error. The error is considered resolved when the file changes */
export interface InputPassportElementErrorSourceFile {
  _: 'inputPassportElementErrorSourceFile'
  /** Current hash of the file which has the error */
  fileHash: string
}

/**
 * The list of attached files contains an error. The error is considered resolved when
 * the file list changes
 */
export interface InputPassportElementErrorSourceFiles {
  _: 'inputPassportElementErrorSourceFiles'
  /** Current hashes of all attached files */
  fileHashes: string[]
}
