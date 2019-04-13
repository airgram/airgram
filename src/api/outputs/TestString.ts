export type TestStringUnion = TestString

/** A simple object containing a string; for testing only */
export interface TestString {
  _: 'testString'
  /** String */
  value: string
}
