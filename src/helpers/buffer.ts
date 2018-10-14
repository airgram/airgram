export function concatBuffer (
  buffer1: Buffer | ArrayBuffer | Uint8Array | number[],
  buffer2: Buffer | ArrayBuffer | Uint8Array | number[]
): ArrayBuffer {
  const l1 = 'byteLength' in buffer1 ? buffer1.byteLength : buffer1.length
  const l2 = 'byteLength' in buffer2 ? buffer2.byteLength : buffer2.length
  const tmp: Buffer = Buffer.alloc(l1 + l2)
  tmp.set(buffer1 instanceof ArrayBuffer ? new Uint8Array(buffer1) : buffer1, 0)
  tmp.set(buffer2 instanceof ArrayBuffer ? new Uint8Array(buffer2) : buffer2, l1)
  return tmp.buffer as ArrayBuffer
}
