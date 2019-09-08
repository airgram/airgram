export type LogTagsUnion = LogTags

/** Contains a list of available TDLib internal log tags */
export interface LogTags {
  _: 'logTags'
  /** List of log tags */
  tags: string[]
}
