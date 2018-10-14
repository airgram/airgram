/*tslint:disable:no-bitwise*/

import { BigInteger, SecureRandom } from '../vendor/big-numbers'

export {
  BigInteger,
  SecureRandom
}

export function bigInt (num: number): BigInteger {
  return new BigInteger(num.toString(16), 16)
}

export function bigStringInt (strNum: string): BigInteger {
  return new BigInteger(strNum, 10)
}
