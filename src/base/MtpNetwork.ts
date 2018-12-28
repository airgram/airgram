import axios, { AxiosRequestConfig, CancelTokenSource } from 'axios'
import { provide } from 'inversify-binding-decorators'
import { bufferToArrayBuffer } from '../helpers'
import { ag } from '../interfaces/index'
import TYPES from '../ioc/types'

@provide(TYPES.MtpNetwork)
export default class MtpNetwork implements ag.MtpNetwork {
  public static factory (
    createInstance: () => ag.MtpNetwork,
    client: ag.Client
  ) {
    const instance = createInstance()
    instance.configure(client)
    return instance
  }

  public configure (client: ag.Client) {
    //
  }

  public createCancelToken (): CancelTokenSource {
    return axios.CancelToken.source()
  }

  public sendRequest (url: string, requestData: { [name: string]: any }, options?: AxiosRequestConfig) {
    return axios({
      ...options,
      data: requestData,
      method: 'POST',
      responseType: 'arraybuffer',
      transformResponse: (data) => bufferToArrayBuffer(data),
      url
    })
  }
}
