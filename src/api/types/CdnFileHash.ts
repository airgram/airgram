
export interface CdnFileHash {
  _: 'cdnFileHash'
  offset: number
  limit: number
  hash: number[]
}

export type CdnFileHashUnion = CdnFileHash
