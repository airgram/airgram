
export interface FileLocation {
  _: 'fileLocation'
  dc_id: number
  volume_id: string
  local_id: number
  secret: string
}

export interface FileLocationUnavailable {
  _: 'fileLocationUnavailable'
  volume_id: string
  local_id: number
  secret: string
}

export type FileLocationUnion = FileLocation
  | FileLocationUnavailable
