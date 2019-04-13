import { TestInt } from './index'

export type TestVectorIntObjectUnion = TestVectorIntObject

/** A simple object containing a vector of objects that hold a number; for testing only */
export interface TestVectorIntObject {
  _: 'testVectorIntObject'
  /** Vector of objects */
  value: TestInt[]
}
