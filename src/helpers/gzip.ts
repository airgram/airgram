import * as zlib from 'zlib'
import { bufferToArrayBuffer } from './convert'

export function uncompress (bytes: Uint8Array): ArrayBuffer {
  const result = zlib.gunzipSync(bytes)
  return bufferToArrayBuffer(result)
}
