/* eslint-disable @typescript-eslint/no-explicit-any */
// tslint:disable:max-classes-per-file

import { deserializerFactory, serializerFactory } from '../utils'

test('json: prepare params for tdlib', () => {
  const serialize = serializerFactory()
  const src = {
    _: 'parent',
    child: {
      _: 'child',
      booleans: [true],
      numbers: [777],
      serializable: [{ _: 'child_child', foo: 'bar' }],
      strings: ['baz']
    },
    id: 1
  }
  const res = {
    '@type': 'parent',
    child: {
      '@type': 'child',
      booleans: [true],
      numbers: [777],
      serializable: [{ '@type': 'child_child', foo: 'bar' }],
      strings: ['baz']
    },
    id: 1
  }
  expect(serialize(src)).toStrictEqual(res)
})

test('json: parse tdlib response', () => {
  const deserialize = deserializerFactory()
  const src = { '@type': 'parent', id: 1, child: { '@type': 'child' } }
  const res = { _: 'parent', id: 1, child: { _: 'child' } }
  expect(deserialize(src)).toStrictEqual(res)
})

test('json: parse number array', () => {
  const deserialize = deserializerFactory()
  const src = { '@type': 'parent', id: 1, child: [300, 400, 500] }
  const res = { _: 'parent', id: 1, child: [300, 400, 500] }
  expect(deserialize(src)).toStrictEqual(res)
})

test('json: parse string array', () => {
  const deserialize = deserializerFactory()
  const src = { '@type': 'parent', id: 1, child: ['foo', 'bar', 'baz'] }
  const res = { _: 'parent', id: 1, child: ['foo', 'bar', 'baz'] }
  expect(deserialize(src)).toStrictEqual(res)
})

test('json: parse null', () => {
  const deserialize = deserializerFactory()
  const src = null
  const res = null
  expect(deserialize(src as any)).toBe(res)
})
