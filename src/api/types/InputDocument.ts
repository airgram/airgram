
export interface InputDocument {
  _: 'inputDocument'
  id: string
  access_hash: string
}

export interface InputDocumentEmpty {
  _: 'inputDocumentEmpty'
}

export type InputDocumentUnion = InputDocument
  | InputDocumentEmpty
