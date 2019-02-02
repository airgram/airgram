import axios from 'axios'
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

  private cancelAxiosRequest: any

  public async cancelRequest () {
    this.cancelAxiosRequest()
  }

  public configure (client: ag.Client) {
    //
  }

  public sendRequest (
    url: string,
    requestData: { [name: string]: any },
    options?: ag.MtpNetworkRequestOptions
  ): Promise<ArrayBuffer> {
    const { token, cancel } = axios.CancelToken.source()
    const optionsWithCancelToken = Object.assign(options || {}, { cancelToken: token })

    this.cancelAxiosRequest = cancel

    return axios({
      ...optionsWithCancelToken,
      data: requestData,
      method: 'POST',
      responseType: 'arraybuffer',
      transformResponse: (data) => bufferToArrayBuffer(data),
      url
    }).then((result) => result.data)
  }
}
