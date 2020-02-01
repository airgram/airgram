/**
 * A file defined by its remote ID. The remote ID is guaranteed to be usable only if
 * the corresponding file is still accessible to the user and known to TDLib. For example,
 * if the file is from a message, then the message must be not deleted and accessible
 * to the user. If the file database is disabled, then the corresponding object with
 * the file must be preloaded by the client
 */
export class InputFileRemoteBaseModel {
  public _: 'inputFileRemote'

  /** Remote file identifier */
  public id: string
}
