/* eslint-env worker */

import { ApiRequest, TdObject, TdProvider as BaseTdProvider } from '@airgram/core'
import { PromisifyWorker, TdWebProviderConfig } from '../types'
import { promisifyWorker } from '../utils'
import { InitWorkerPayload, SendWorkerPayload, UpdateWorkerPayload } from './tdweb.worker'

function isUpdatePayload (obj: any): obj is UpdateWorkerPayload {
  return obj && typeof obj === 'object' && ('_' in obj) && obj._ === 'update'
}

export class TdProvider extends BaseTdProvider {
  private readonly config: TdWebProviderConfig = {}

  private handleError: ((error: any) => void) = () => {}

  private readonly worker: PromisifyWorker

  public constructor (config: TdWebProviderConfig = {}) {
    super()
    this.config = config
    this.worker = promisifyWorker(new Worker('./tdweb.worker', { type: 'module' }))
  }

  public async destroy (): Promise<void> {
    this.worker.terminate()
  }

  public initialize (
    handleUpdate: (update: TdObject) => Promise<any>,
    handleError: (error: any) => void
  ): void {
    this.handleError = handleError

    const initMessage: InitWorkerPayload = {
      _: 'init',
      config: this.config
    }
    this.worker.postMessage(initMessage).catch(handleError)
    this.worker.addEventListener('message', (message) => {
      if (isUpdatePayload(message.data)) {
        return handleUpdate(message.data.update)
      }
    })
  }

  public send (request: ApiRequest): Promise<TdObject> {
    const message: SendWorkerPayload = {
      _: 'send',
      request: {
        _: request.method,
        ...request.params
      }
    }
    return this.worker.postMessage(message).catch(this.handleError)
  }
}
