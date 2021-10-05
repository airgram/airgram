import { LocalFile, RemoteFile } from './index'

export type FileUnion = File

/** Represents a file */
export interface File {
  _: 'file'
  /** Unique file identifier */
  id: number
  /** File size, in bytes; 0 if unknown */
  size: number
  /**
   * Approximate file size in bytes in case the exact file size is unknown. Can be used
   * to show download/upload progress
   */
  expectedSize: number
  /** Information about the local copy of the file */
  local: LocalFile
  /** Information about the remote copy of the file */
  remote: RemoteFile
}
