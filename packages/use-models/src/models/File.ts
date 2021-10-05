import { LocalFile, RemoteFile } from '@airgram/core'

/** Represents a file */
export class FileBaseModel {
  public _: 'file'

  /** Unique file identifier */
  public id: number

  /** File size, in bytes; 0 if unknown */
  public size: number

  /**
   * Approximate file size in bytes in case the exact file size is unknown. Can be used
   * to show download/upload progress
   */
  public expectedSize: number

  /** Information about the local copy of the file */
  public local: LocalFile

  /** Information about the remote copy of the file */
  public remote: RemoteFile
}
