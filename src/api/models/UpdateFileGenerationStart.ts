/** The file generation process needs to be started by the client */
export class UpdateFileGenerationStartBaseModel {
  public _: 'updateFileGenerationStart'
  /** Unique identifier for the generation process */
  public generationId: number | string
  /** The path to a file from which a new file is generated; may be empty */
  public originalPath: string
  /** The path to a file that should be created and where the new file should be generated */
  public destinationPath: string
  /**
   * String specifying the conversion applied to the original file. If conversion is "#url#"
   * than original_path contains an HTTP/HTTPS URL of a file, which should be downloaded
   * by the client
   */
  public conversion: string
}
