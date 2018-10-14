
export interface FileLocation {
  _: 'fileLocation'
  dc_id: number
  volume_id: number
  local_id: number
  secret: number
}

export interface FileLocationUnavailable {
  _: 'fileLocationUnavailable'
  volume_id: number
  local_id: number
  secret: number
}

export type FileLocationUnion = FileLocation
  | FileLocationUnavailable
