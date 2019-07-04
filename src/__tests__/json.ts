import { useModels } from 'airgram-use-models'
import { createDeserializer, createSerializer } from '../helpers'

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

test('use models', () => {
  class MyModelClass {
    public id: number

    public testField = true
  }

  const models = useModels({
    myModel: MyModelClass
  })
  const deserialize = createDeserializer(models)
  const src = '{"@type": "parent", "child": {"@type": "myModel","id": 777}}'
  const res = JSON.parse(src, deserialize)
  expect(res.child.testField).toBeTruthy()
})
