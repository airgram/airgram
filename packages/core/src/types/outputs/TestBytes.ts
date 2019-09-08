export type TestBytesUnion = TestBytes

/** A simple object containing a sequence of bytes; for testing only */
export interface TestBytes {
  _: 'testBytes'
  /** Bytes */
  value: string
}
