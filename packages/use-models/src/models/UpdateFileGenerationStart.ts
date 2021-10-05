/** The file generation process needs to be started by the application */
export class UpdateFileGenerationStartBaseModel {
  public _: 'updateFileGenerationStart'

  /** Unique identifier for the generation process */
  public generationId: string

  /** The path to a file from which a new file is generated; may be empty */
  public originalPath: string

  /** The path to a file that must be created and where the new file is generated */
  public destinationPath: string

  /**
   * String specifying the conversion applied to the original file. If conversion is "#url#"
   * than original_path contains an HTTP/HTTPS URL of a file, which must be downloaded
   * by the application
   */
  public conversion: string
}
