export type TestVectorIntUnion = TestVectorInt

/** A simple object containing a vector of numbers; for testing only */
export interface TestVectorInt {
  _: 'testVectorInt'
  /** Vector of numbers */
  value: number[]
}
