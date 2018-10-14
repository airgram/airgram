/*tslint:disable:variable-name*/
/*tslint:disable:max-line-length*/
/*tslint:disable:ordered-imports*/

import { ag } from '../../interfaces'

import {
  InputUserUnion,
  UserUnion,
  UserFullUnion
} from '../'

export interface GetFullUserParams {
  id: InputUserUnion
}

export interface GetUsersParams {
  id: InputUserUnion[]
}

export interface UsersApi {
  getFullUser: (params: GetFullUserParams, options?: ag.MtpRequestOptions) => Promise<UserFullUnion>
  getUsers: (params: GetUsersParams, options?: ag.MtpRequestOptions) => Promise<UserUnion[]>
}

export const factory = (callApi: ag.CallApiFn): UsersApi => ({
  getFullUser: (params: GetFullUserParams, options?: ag.MtpRequestOptions): Promise<UserFullUnion> =>
    callApi<GetFullUserParams, UserFullUnion>('users.getFullUser', params, options),

  getUsers: (params: GetUsersParams, options?: ag.MtpRequestOptions): Promise<UserUnion[]> =>
    callApi<GetUsersParams, UserUnion[]>('users.getUsers', params, options)
})
