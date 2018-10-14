import { collectPaths } from '../helpers/path'
import TYPES from '../ioc/types'

const entities = collectPaths(module, {
  exclude: (path) => /\.d\.ts$/.test(path),
  extensions: ['js', 'ts']
})

export default Object.keys(entities).reduce((result: { [key: string]: any }, name: string) => {
  result[TYPES[name]] = entities[name].default
  return result
}, {})
