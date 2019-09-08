import { InputFileInputUnion } from './index'

/** Contains information about background to set */
export type InputBackgroundInputUnion = InputBackgroundLocalInput
  | InputBackgroundRemoteInput

/** A background from a local file */
export interface InputBackgroundLocalInput {
  _: 'inputBackgroundLocal'
  /**
   * Background file to use. Only inputFileLocal and inputFileGenerated are supported.
   * The file nust be in JPEG format for wallpapers and in PNG format for patterns
   */
  background?: InputFileInputUnion
}

/** A background from the server */
export interface InputBackgroundRemoteInput {
  _: 'inputBackgroundRemote'
  /** The background identifier */
  backgroundId?: string
}
