import * as ffi from 'ffi-napi'
import { resolve as resolvePath } from 'path'
import * as ref from 'ref-napi'
import * as ag from '../types'

interface TdJsonClient {
  td_json_client_create: any
  td_json_client_send: any
  td_json_client_receive: any
  td_json_client_execute: any
  td_json_client_destroy: any
}

interface TdLog {
  td_set_log_file_path: any
  td_set_log_max_file_size: any
  td_set_log_verbosity_level: any
  td_set_log_fatal_error_callback: any
}

const PATH_TO_LIBRARY_FILE = process.platform === 'win32' ? 'tdjson' : 'libtdjson'

function buildQuery (query: string): Buffer {
  const buffer: any = Buffer.from(query + '\0', 'utf-8')
  buffer.type = ref.types.CString
  return buffer
}

// tslint:disable:no-multi-spaces
// tslint:disable:object-literal-sort-keys

export default class TdLib<TdClient = ag.TdClient> implements ag.TdLib<TdClient> {
  private tdlib: TdJsonClient & TdLog

  public constructor ({ command }) {
    // @formatter:off
    this.tdlib = ffi.Library(
      resolvePath(command || PATH_TO_LIBRARY_FILE),
      {
        td_json_client_create          : ['pointer', []],
        td_json_client_send            : ['void'   , ['pointer', 'string']],
        td_json_client_receive         : ['string' , ['pointer', 'double']],
        td_json_client_execute         : ['string' , ['pointer', 'string']],
        td_json_client_destroy         : ['void'   , ['pointer']],
        td_set_log_file_path           : ['int'    , ['string']],
        td_set_log_max_file_size       : ['void'   , ['int64']],
        td_set_log_verbosity_level     : ['void'   , ['int']],
        td_set_log_fatal_error_callback: ['void'   , ['pointer']]
      })
    // @formatter:on
  }

  public create (): TdClient {
    return this.tdlib.td_json_client_create()
  }

  public destroy (client: TdClient): void {
    this.tdlib.td_json_client_destroy(client)
  }

  public execute (client: TdClient, query: string): string | null {
    return this.tdlib.td_json_client_execute(client, buildQuery(query)) || null
  }

  public receive (client: TdClient, timeout: number): Promise<string | null> {
    return new Promise((resolve, reject) => {
      this.tdlib.td_json_client_receive.async(client, timeout, (error, response) => {
        if (error) {
          return reject(error)
        }
        return resolve(response)
      })
    })
  }

  public send (client: TdClient, query: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.tdlib.td_json_client_send.async(client, buildQuery(query), (err) => {
        if (err) return reject(err)
        resolve()
      })
    })
  }

  public setLogFatalErrorCallback (fn: ((error: string) => void) | null): void {
    if (fn === null) {
      this.tdlib.td_set_log_fatal_error_callback(null)
    } else {
      this.tdlib.td_set_log_fatal_error_callback(
        ffi.Callback('void', ['string'], fn))
    }
  }

  public setLogFilePath (path: string): number {
    return this.tdlib.td_set_log_file_path(path)
  }

  public setLogMaxFileSize (maxFileSize: number | string): void {
    this.tdlib.td_set_log_max_file_size(maxFileSize)
  }

  public setLogVerbosityLevel (verbosity: number): void {
    this.tdlib.td_set_log_verbosity_level(verbosity)
  }
}
