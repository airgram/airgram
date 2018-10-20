import { injectable } from 'inversify'
import { ag } from '../../src/interfaces/index'
import { createCollection, PouchDB } from './pouchdb'

const db: PouchDB.Database = createCollection('airgram')

@injectable()
export default class PouchDBStore<DocT> implements ag.Store<DocT> {
  public async delete (id: string): Promise<void> {
    try {
      await db.remove(id)
    } catch (e) {
      throw e
    }
  }

  public async get (key: string, field?: string): Promise<any> {
    try {
      const value = await db.get<DocT>(key)
      return field ? value[field] : value
    } catch (e) {
      return null
    }
  }

  public async set (id: string, doc: Partial<DocT>): Promise<Partial<DocT>> {
    let nextDoc
    return db.upsert(id, (currentDoc: DocT) => {
      nextDoc = Object.assign({}, currentDoc, doc)
      return nextDoc
    }).then(() => nextDoc)
  }
}
