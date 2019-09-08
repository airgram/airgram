import { LocalFile, RemoteFile } from './index'

export type FileUnion = File

/** Represents a file */
export interface File {
  _: 'file'
  /** Unique file identifier */
  id: number
  /** File size; 0 if unknown */
  size: number
  /**
   * Expected file size in case the exact file size is unknown, but an approximate size
   * is known. Can be used to show download/upload progress
   */
  expectedSize: number
  /** Information about the local copy of the file */
  local: LocalFile
  /** Information about the remote copy of the file */
  remote: RemoteFile
}
