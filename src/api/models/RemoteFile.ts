/** Represents a remote file */
export class RemoteFileBaseModel {
  public _: 'remoteFile'
  /**
   * Remote file identifier; may be empty. Can be used across application restarts or
   * even from other devices for the current user. If the ID starts with "http://" or
   * "https://", it represents the HTTP URL of the file. TDLib is currently unable to
   * download files if only their URL is known. If downloadFile is called on such a file
   * or if it is sent to a secret chat, TDLib starts a file generation process by sending
   * updateFileGenerationStart to the client with the HTTP URL in the original_path and
   * "#url#" as the conversion string. Clients should generate the file by downloading
   * it to the specified location
   */
  public id: string
  /**
   * True, if the file is currently being uploaded (or a remote copy is being generated
   * by some other means)
   */
  public isUploadingActive: boolean
  /** True, if a remote copy is fully available */
  public isUploadingCompleted: boolean
  /** Size of the remote available part of the file; 0 if unknown */
  public uploadedSize: number
}
