import * as PouchDB from 'pouchdb'
import * as UpsertPlugin from 'pouchdb-upsert'

PouchDB.plugin(UpsertPlugin)

export { PouchDB }

export function createCollection<DocT> (name: string): PouchDB.Database<DocT> {
  return new PouchDB<DocT>(`http://127.0.0.1:5984/${name}`)
}
