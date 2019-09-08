export type HttpUrlUnion = HttpUrl

/** Contains an HTTP URL */
export interface HttpUrl {
  _: 'httpUrl'
  /** The URL */
  url: string
}
