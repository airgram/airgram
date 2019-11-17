import { PromisifyWorker, PromisifyWorkerMessage } from '../types'

interface PendingResult {
  resolve: (result: unknown) => unknown
  reject: (error: Error | ErrorEvent) => unknown
}

let queryId = 0

export function promisifyWorker<PayloadT> (worker: Worker): PromisifyWorker {
  const pendingList = new Map<number, PendingResult>()

  const rejectAll = (error: Error | ErrorEvent): void => {
    pendingList.forEach((result, id) => {
      result.reject(error)
      pendingList.delete(id)
    })
  }

  worker.addEventListener('message', (e) => {
    const data: PromisifyWorkerMessage<any> = e.data
    const { id, payload } = data
    if (pendingList.has(id)) {
      const result = pendingList.get(id) as PendingResult
      result.resolve(payload)
      pendingList.delete(id)
    }
  })
  worker.addEventListener('error', rejectAll)

  const postMessage = worker.postMessage.bind(worker)
  const terminate = worker.terminate.bind(worker)

  return Object.assign(
    worker,
    {
      postMessage: (payload: PayloadT, ...args: any[]): Promise<any> => {
        const id = ++queryId
        const message: PromisifyWorkerMessage<PayloadT> = { id, payload }
        return new Promise((resolve, reject) => {
          const pending = {
            resolve,
            reject
          }
          pendingList.set(id, pending)

          try {
            postMessage(message, ...args)
          } catch (e) {
            reject(e)
          }
        })
      },
      rejectAll: () => {
        rejectAll(new Error('Promise has been destroyed.'))
      },
      terminate: () => {
        terminate()
        rejectAll(new Error('Worker has been destroyed.'))
      }
    })
}
