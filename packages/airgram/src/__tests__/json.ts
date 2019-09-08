/* eslint-disable @typescript-eslint/no-explicit-any */

import { createDeserializer, createSerializer } from '../utils'

test('prepare params for tdlib', () => {
  const serialize = createSerializer()
  const src = { _: 'parent', id: 1, child: { _: 'child' } }
  const res = '{"@type":"parent","id":1,"child":{"@type":"child"}}'
  expect(JSON.stringify(src, serialize)).toBe(res)
})

test('parse tdlib response', () => {
  const deserialize = createDeserializer()
  const src = '{"@type":"parent","id":1,"child":{"@type":"child"}}'
  const res = { _: 'parent', id: 1, child: { _: 'child' } }
  expect(JSON.parse(src, deserialize)).toStrictEqual(res)
})

test('parse null response', () => {
  const deserialize = createDeserializer()
  const src = null
  const res = null
  expect(JSON.parse(src as any, deserialize)).toBe(res)
})

test('parse false response', () => {
  const deserialize = createDeserializer()
  const src = false
  const res = false
  expect(JSON.parse(src as any, deserialize)).toBe(res)
})
