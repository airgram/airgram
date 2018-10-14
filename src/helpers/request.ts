import axios, { AxiosRequestConfig } from 'axios'
import { bufferToArrayBuffer } from './convert'

export function sendRequest (url: string, requestData: { [name: string]: any }, options?: AxiosRequestConfig) {
  return axios({
    ...options,
    data: requestData,
    method: 'POST',
    responseType: 'arraybuffer',
    transformResponse: (data) => bufferToArrayBuffer(data),
    url
  })
}
