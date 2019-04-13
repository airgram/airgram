import { LocalFile, RemoteFile } from '../outputs'

/** Represents a file */
export class FileBaseModel {
  public _: 'file'
  /** Unique file identifier */
  public id: number
  /** File size; 0 if unknown */
  public size: number
  /**
   * Expected file size in case the exact file size is unknown, but an approximate size
   * is known. Can be used to show download/upload progress
   */
  public expectedSize: number
  /** Information about the local copy of the file */
  public local: LocalFile
  /** Information about the remote copy of the file */
  public remote: RemoteFile
}
