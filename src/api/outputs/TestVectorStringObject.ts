import { TestString } from './index'

export type TestVectorStringObjectUnion = TestVectorStringObject

/** A simple object containing a vector of objects that hold a string; for testing only */
export interface TestVectorStringObject {
  _: 'testVectorStringObject'
  /** Vector of objects */
  value: TestString[]
}
