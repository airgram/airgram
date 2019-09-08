import { createDeserializer } from 'airgram'
import { useModels } from '../useModels'

test('use models', () => {
  class MyModelClass {
    public id!: number

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
