/*tslint:disable:variable-name*/
/*tslint:disable:max-line-length*/
/*tslint:disable:ordered-imports*/

import { ag } from '../../interfaces'

import {
  CdnFileHashUnion,
  InputFileLocationUnion,
  InputWebFileLocationUnion,
  UploadCdnFileUnion,
  UploadFileUnion,
  UploadWebFileUnion
} from '../'

export interface GetCdnFileParams {
  file_token: number[],
  limit: number,
  offset: number
}

export interface GetCdnFileHashesParams {
  file_token: number[],
  offset: number
}

export interface GetFileParams {
  limit: number,
  location: InputFileLocationUnion,
  offset: number
}

export interface GetWebFileParams {
  limit: number,
  location: InputWebFileLocationUnion,
  offset: number
}

export interface ReuploadCdnFileParams {
  file_token: number[],
  request_token: number[]
}

export interface SaveBigFilePartParams {
  bytes: number[],
  file_id: string,
  file_part: number,
  file_total_parts: number
}

export interface SaveFilePartParams {
  bytes: number[],
  file_id: string,
  file_part: number
}

export interface UploadApi {
  getCdnFile: (params: GetCdnFileParams, options?: ag.MtpRequestOptions) => Promise<UploadCdnFileUnion>
  getCdnFileHashes: (params: GetCdnFileHashesParams, options?: ag.MtpRequestOptions) => Promise<CdnFileHashUnion[]>
  getFile: (params: GetFileParams, options?: ag.MtpRequestOptions) => Promise<UploadFileUnion>
  getWebFile: (params: GetWebFileParams, options?: ag.MtpRequestOptions) => Promise<UploadWebFileUnion>
  reuploadCdnFile: (params: ReuploadCdnFileParams, options?: ag.MtpRequestOptions) => Promise<CdnFileHashUnion[]>
  saveBigFilePart: (params: SaveBigFilePartParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  saveFilePart: (params: SaveFilePartParams, options?: ag.MtpRequestOptions) => Promise<boolean>
}

export const factory = (callApi: ag.CallApiFn): UploadApi => ({
  getCdnFile: (params: GetCdnFileParams, options?: ag.MtpRequestOptions): Promise<UploadCdnFileUnion> =>
    callApi<GetCdnFileParams, UploadCdnFileUnion>('upload.getCdnFile', params, options),

  getCdnFileHashes: (params: GetCdnFileHashesParams, options?: ag.MtpRequestOptions): Promise<CdnFileHashUnion[]> =>
    callApi<GetCdnFileHashesParams, CdnFileHashUnion[]>('upload.getCdnFileHashes', params, options),

  getFile: (params: GetFileParams, options?: ag.MtpRequestOptions): Promise<UploadFileUnion> =>
    callApi<GetFileParams, UploadFileUnion>('upload.getFile', params, options),

  getWebFile: (params: GetWebFileParams, options?: ag.MtpRequestOptions): Promise<UploadWebFileUnion> =>
    callApi<GetWebFileParams, UploadWebFileUnion>('upload.getWebFile', params, options),

  reuploadCdnFile: (params: ReuploadCdnFileParams, options?: ag.MtpRequestOptions): Promise<CdnFileHashUnion[]> =>
    callApi<ReuploadCdnFileParams, CdnFileHashUnion[]>('upload.reuploadCdnFile', params, options),

  saveBigFilePart: (params: SaveBigFilePartParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<SaveBigFilePartParams, boolean>('upload.saveBigFilePart', params, options),

  saveFilePart: (params: SaveFilePartParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<SaveFilePartParams, boolean>('upload.saveFilePart', params, options)
})
