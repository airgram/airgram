import { TestString } from '../outputs'

/** A simple object containing a vector of objects that hold a string; for testing only */
export class TestVectorStringObjectBaseModel {
  public _: 'testVectorStringObject'
  /** Vector of objects */
  public value: TestString[]
}
