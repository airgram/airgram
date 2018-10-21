import { injectable } from 'inversify'
import { ag } from '../../src/index'
import { delAsync, hgetAllAsync, hgetAsync, hmsetAsync } from './redis'

@injectable()
export default class RedisStore<DocT> implements ag.Store<DocT> {
  public async delete (id: string): Promise<void> {
    return delAsync(id)
  }

  public async get (id: string, field?: string): Promise<any> {
    if (field === undefined) {
      return hgetAllAsync(id).then((doc) => {
        if (!doc) {
          return null
        }
        return Object.keys(doc).reduce((data, key) => {
          data[key] = JSON.parse(doc[key])
          return data
        }, {})
      })
    }
    return hgetAsync(id, field).then((value) => JSON.parse(value))
  }

  public async set (id: string, doc: Partial<DocT>): Promise<Partial<DocT>> {
    const encoded: { [key: string]: string } = Object.keys(doc).reduce((data, key) => {
      data[key] = JSON.stringify(doc[key])
      return data
    }, {})
    return hmsetAsync(id, encoded).then(() => doc)
  }
}
