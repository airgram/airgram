export type TestVectorStringUnion = TestVectorString

/** A simple object containing a vector of strings; for testing only */
export interface TestVectorString {
  _: 'testVectorString'
  /** Vector of strings */
  value: string[]
}
