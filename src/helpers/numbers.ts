/*tslint:disable:no-bitwise*/

import * as goog from '../vendor/goog-math-long'
import {
  add_,
  bigInt2str,
  copy_,
  copyInt_,
  divide_,
  eGCD_,
  equalsInt,
  getBpe,
  getOne,
  greater,
  isZero,
  powMod,
  rightShift_,
  str2bigInt,
  sub_
} from '../vendor/leemon-bigInt'
import { bigInt, BigInteger, bigStringInt, SecureRandom } from './big-numbers'
import { bigIntToBytes, hexToBytes } from './convert'

export {
  bigInt,
  bigStringInt,
  bigInt2str,
  // copy_,
  // copyInt_,
  gcdLong,
  getBpe,
  // goog,
  powMod,
  SecureRandom,
  str2bigInt
}

export function nextRandomInt (maxValue: number): number {
  return Math.floor(Math.random() * maxValue)
}

export function pqPrimeBigInteger (what: BigInteger): [number[], number[], number] {
  let it = 0
  let g
  for (let i = 0; i < 3; i++) {
    const q = (nextRandomInt(128) & 15) + 17
    let x = bigInt(nextRandomInt(1000000000) + 1)
    let y = x.clone()
    const lim = 1 << (i + 18)

    for (let j = 1; j < lim; j++) {
      ++it
      let a = x.clone()
      let b = x.clone()
      let c = bigInt(q)

      while (!b.equals(BigInteger.ZERO)) {
        if (!b.and(BigInteger.ONE).equals(BigInteger.ZERO)) {
          c = c.add(a)
          if (c.compareTo(what) > 0) {
            c = c.subtract(what)
          }
        }
        a = a.add(a)
        if (a.compareTo(what) > 0) {
          a = a.subtract(what)
        }
        b = b.shiftRight(1)
      }

      x = c.clone()
      const z = x.compareTo(y) < 0 ? y.subtract(x) : x.subtract(y)
      g = z.gcd(what)
      if (!g.equals(BigInteger.ONE)) {
        break
      }
      if ((j & (j - 1)) === 0) {
        y = x.clone()
      }
    }
    if (g.compareTo(BigInteger.ONE) > 0) {
      break
    }
  }

  const f = what.divide(g)
  let P
  let Q

  if (g.compareTo(f) > 0) {
    P = f
    Q = g
  } else {
    P = g
    Q = f
  }

  return [bigIntToBytes(P), bigIntToBytes(Q), it]
}

function gcdLong (a: BigInteger, b: BigInteger): BigInteger {
  while (a.notEquals(goog.math.Long.ZERO) && b.notEquals(goog.math.Long.ZERO)) {
    while (b.and(goog.math.Long.ONE).equals(goog.math.Long.ZERO)) {
      b = b.shiftRight(1)
    }
    while (a.and(goog.math.Long.ONE).equals(goog.math.Long.ZERO)) {
      a = a.shiftRight(1)
    }
    if (a.compare(b) > 0) {
      a = a.subtract(b)
    } else {
      b = b.subtract(a)
    }
  }
  return b.equals(goog.math.Long.ZERO) ? a : b
}

export function pqPrimeLong (what: BigInteger): [number[], number[], number] {
  let it = 0
  let g
  for (let i = 0; i < 3; i++) {
    const q = goog.math.Long.fromInt((nextRandomInt(128) & 15) + 17)
    const lim = 1 << (i + 18)

    let x = goog.math.Long.fromInt(nextRandomInt(1000000000) + 1)
    let y = x

    for (let j = 1; j < lim; j++) {
      ++it
      let a = x
      let b = x
      let c = q

      while (b.notEquals(goog.math.Long.ZERO)) {
        if (b.and(goog.math.Long.ONE).notEquals(goog.math.Long.ZERO)) {
          c = c.add(a)
          if (c.compare(what) > 0) {
            c = c.subtract(what)
          }
        }
        a = a.add(a)
        if (a.compare(what) > 0) {
          a = a.subtract(what)
        }
        b = b.shiftRight(1)
      }

      x = c
      const z = x.compare(y) < 0 ? y.subtract(x) : x.subtract(y)
      g = gcdLong(z, what)
      if (g.notEquals(goog.math.Long.ONE)) {
        break
      }
      if ((j & (j - 1)) === 0) {
        y = x
      }
    }
    if (g.compare(goog.math.Long.ONE) > 0) {
      break
    }
  }

  const f = what.div(g)

  let P
  let Q

  if (g.compare(f) > 0) {
    P = f
    Q = g
  } else {
    P = g
    Q = f
  }

  return [hexToBytes(P.toString(16)), hexToBytes(Q.toString(16)), it]
}

export function pqPrimeLeemon (what: BigInteger): [number[], number[], number] {
  const minBits = 64
  const minLen = Math.ceil(minBits / getBpe()) + 1
  let it = 0
  let i
  let q
  let j
  let lim
  let P
  let Q
  const a = new Array(minLen)
  const b = new Array(minLen)
  const c = new Array(minLen)
  const g = new Array(minLen)
  const z = new Array(minLen)
  const x = new Array(minLen)
  const y = new Array(minLen)

  for (i = 0; i < 3; i++) {
    q = (nextRandomInt(128) & 15) + 17
    copyInt_(x, nextRandomInt(1000000000) + 1)
    copy_(y, x)
    lim = 1 << (i + 18)

    for (j = 1; j < lim; j++) {
      ++it
      copy_(a, x)
      copy_(b, x)
      copyInt_(c, q)

      while (!isZero(b)) {
        if (b[0] & 1) {
          add_(c, a)
          if (greater(c, what)) {
            sub_(c, what)
          }
        }
        add_(a, a)
        if (greater(a, what)) {
          sub_(a, what)
        }
        rightShift_(b, 1)
      }

      copy_(x, c)
      if (greater(x, y)) {
        copy_(z, x)
        sub_(z, y)
      } else {
        copy_(z, y)
        sub_(z, x)
      }
      eGCD_(z, what, g, a, b)
      if (!equalsInt(g, 1)) {
        break
      }
      if ((j & (j - 1)) === 0) {
        copy_(y, x)
      }
    }
    if (greater(g, getOne())) {
      break
    }
  }

  divide_(what, g, x, y)

  if (greater(g, x)) {
    P = x
    Q = g
  } else {
    P = g
    Q = x
  }

  return [leemonBigIntToBytes(P), leemonBigIntToBytes(Q), it]
}

function leemonBigIntToBytes (value: number): number[] {
  return hexToBytes(bigInt2str(value, 16))
}
