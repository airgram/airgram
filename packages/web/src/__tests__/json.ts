/* eslint-disable @typescript-eslint/no-explicit-any */
// tslint:disable:max-classes-per-file

import { useModels } from '@airgram/use-models'
import { createDeserializer, createSerializer } from '../components'

test('json: prepare params for tdlib', () => {
  const serialize = createSerializer()
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
  const deserialize = createDeserializer()
  const src = { '@type': 'parent', id: 1, child: { '@type': 'child' } }
  const res = { _: 'parent', id: 1, child: { _: 'child' } }
  expect(deserialize(src)).toStrictEqual(res)
})

test('json: parse number array', () => {
  const deserialize = createDeserializer()
  const src = { '@type': 'parent', id: 1, child: [300, 400, 500] }
  const res = { _: 'parent', id: 1, child: [300, 400, 500] }
  expect(deserialize(src)).toStrictEqual(res)
})

test('json: parse string array', () => {
  const deserialize = createDeserializer()
  const src = { '@type': 'parent', id: 1, child: ['foo', 'bar', 'baz'] }
  const res = { _: 'parent', id: 1, child: ['foo', 'bar', 'baz'] }
  expect(deserialize(src)).toStrictEqual(res)
})

test('json: parse null', () => {
  const deserialize = createDeserializer()
  const src = null
  const res = null
  expect(deserialize(src as any)).toBe(res)
})

test('json: use models', () => {
  class FooModelClass {
    public id!: number

    public foo = true
  }

  const models = useModels({
    foo: FooModelClass
  })
  const deserialize = createDeserializer(models)
  const src = { '@type': 'parent', children: [{ '@type': 'foo', id: 777 }] }
  const res = deserialize(src)
  expect((res.children as any)[0].foo).toBeTruthy()
})

test('json: use nested models', () => {
  class FooModelClass {
    public id!: number

    public foo = true

    public bar: any
  }

  class BarModelClass {
    public id!: number

    public baz = true
  }

  const models = useModels({
    foo: FooModelClass,
    // tslint:disable-next-line:object-literal-sort-keys
    bar: BarModelClass
  })
  const deserialize = createDeserializer(models)
  const src = { '@type': 'parent', children: [{ '@type': 'foo', id: 1, nested: { '@type': 'bar', id: 2 } }] }
  const res = deserialize(src)
  expect((res.children as any)[0].nested.baz).toBeTruthy()
})
