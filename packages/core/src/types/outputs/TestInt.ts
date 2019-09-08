export type TestIntUnion = TestInt

/** A simple object containing a number; for testing only */
export interface TestInt {
  _: 'testInt'
  /** Number */
  value: number
}
