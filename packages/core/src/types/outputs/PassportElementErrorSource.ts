/** Contains the description of an error in a Telegram Passport element */
export type PassportElementErrorSourceUnion = PassportElementErrorSourceUnspecified
  | PassportElementErrorSourceDataField
  | PassportElementErrorSourceFrontSide
  | PassportElementErrorSourceReverseSide
  | PassportElementErrorSourceSelfie
  | PassportElementErrorSourceTranslationFile
  | PassportElementErrorSourceTranslationFiles
  | PassportElementErrorSourceFile
  | PassportElementErrorSourceFiles

/**
 * The element contains an error in an unspecified place. The error will be considered
 * resolved when new data is added
 */
export interface PassportElementErrorSourceUnspecified {
  _: 'passportElementErrorSourceUnspecified'
}

/**
 * One of the data fields contains an error. The error will be considered resolved when
 * the value of the field changes
 */
export interface PassportElementErrorSourceDataField {
  _: 'passportElementErrorSourceDataField'
  /** Field name */
  fieldName: string
}

/**
 * The front side of the document contains an error. The error will be considered resolved
 * when the file with the front side changes
 */
export interface PassportElementErrorSourceFrontSide {
  _: 'passportElementErrorSourceFrontSide'
}

/**
 * The reverse side of the document contains an error. The error will be considered
 * resolved when the file with the reverse side changes
 */
export interface PassportElementErrorSourceReverseSide {
  _: 'passportElementErrorSourceReverseSide'
}

/**
 * The selfie with the document contains an error. The error will be considered resolved
 * when the file with the selfie changes
 */
export interface PassportElementErrorSourceSelfie {
  _: 'passportElementErrorSourceSelfie'
}

/**
 * One of files with the translation of the document contains an error. The error will
 * be considered resolved when the file changes
 */
export interface PassportElementErrorSourceTranslationFile {
  _: 'passportElementErrorSourceTranslationFile'
  /** Index of a file with the error */
  fileIndex: number
}

/**
 * The translation of the document contains an error. The error will be considered resolved
 * when the list of translation files changes
 */
export interface PassportElementErrorSourceTranslationFiles {
  _: 'passportElementErrorSourceTranslationFiles'
}

/** The file contains an error. The error will be considered resolved when the file changes */
export interface PassportElementErrorSourceFile {
  _: 'passportElementErrorSourceFile'
  /** Index of a file with the error */
  fileIndex: number
}

/**
 * The list of attached files contains an error. The error will be considered resolved
 * when the list of files changes
 */
export interface PassportElementErrorSourceFiles {
  _: 'passportElementErrorSourceFiles'
}
