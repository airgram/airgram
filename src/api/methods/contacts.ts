/*tslint:disable:variable-name*/
/*tslint:disable:max-line-length*/
/*tslint:disable:ordered-imports*/

import { ag } from '../../interfaces'

import {
  ContactStatusUnion,
  ContactsBlockedUnion,
  ContactsContactsUnion,
  ContactsFoundUnion,
  ContactsImportedContactsUnion,
  ContactsLinkUnion,
  ContactsResolvedPeerUnion,
  ContactsTopPeersUnion,
  InputContactUnion,
  InputPeerUnion,
  InputUserUnion,
  TopPeerCategoryUnion,
  UserUnion
} from '../'

export interface BlockParams {
  id: InputUserUnion
}

export interface DeleteContactParams {
  id: InputUserUnion
}

export interface DeleteContactsParams {
  id: InputUserUnion[]
}

export interface GetBlockedParams {
  limit: number,
  offset: number
}

export interface GetContactsParams {
  hash: number
}

export interface GetTopPeersParams {
  flags?: number,
  hash: number,
  limit: number,
  offset: number,
  bots_inline?: true,
  bots_pm?: true,
  channels?: true,
  correspondents?: true,
  groups?: true,
  phone_calls?: true
}

export interface ImportCardParams {
  export_card: number[]
}

export interface ImportContactsParams {
  contacts: InputContactUnion[]
}

export interface ResetTopPeerRatingParams {
  category: TopPeerCategoryUnion,
  peer: InputPeerUnion
}

export interface ResolveUsernameParams {
  username: string
}

export interface SearchParams {
  limit: number,
  q: string
}

export interface UnblockParams {
  id: InputUserUnion
}

export interface ContactsApi {
  block: (params: BlockParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  deleteContact: (params: DeleteContactParams, options?: ag.MtpRequestOptions) => Promise<ContactsLinkUnion>
  deleteContacts: (params: DeleteContactsParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  exportCard: (options?: ag.MtpRequestOptions) => Promise<number[]>
  getBlocked: (params: GetBlockedParams, options?: ag.MtpRequestOptions) => Promise<ContactsBlockedUnion>
  getContacts: (params: GetContactsParams, options?: ag.MtpRequestOptions) => Promise<ContactsContactsUnion>
  getStatuses: (options?: ag.MtpRequestOptions) => Promise<ContactStatusUnion[]>
  getTopPeers: (params: GetTopPeersParams, options?: ag.MtpRequestOptions) => Promise<ContactsTopPeersUnion>
  importCard: (params: ImportCardParams, options?: ag.MtpRequestOptions) => Promise<UserUnion>
  importContacts: (params: ImportContactsParams, options?: ag.MtpRequestOptions) => Promise<ContactsImportedContactsUnion>
  resetSaved: (options?: ag.MtpRequestOptions) => Promise<boolean>
  resetTopPeerRating: (params: ResetTopPeerRatingParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  resolveUsername: (params: ResolveUsernameParams, options?: ag.MtpRequestOptions) => Promise<ContactsResolvedPeerUnion>
  search: (params: SearchParams, options?: ag.MtpRequestOptions) => Promise<ContactsFoundUnion>
  unblock: (params: UnblockParams, options?: ag.MtpRequestOptions) => Promise<boolean>
}

export const factory = (callApi: ag.CallApiFn): ContactsApi => ({
  block: (params: BlockParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<BlockParams, boolean>('contacts.block', params, options),

  deleteContact: (params: DeleteContactParams, options?: ag.MtpRequestOptions): Promise<ContactsLinkUnion> =>
    callApi<DeleteContactParams, ContactsLinkUnion>('contacts.deleteContact', params, options),

  deleteContacts: (params: DeleteContactsParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<DeleteContactsParams, boolean>('contacts.deleteContacts', params, options),

  exportCard: (options?: ag.MtpRequestOptions): Promise<number[]> =>
    callApi<void, number[]>('contacts.exportCard', undefined, options),

  getBlocked: (params: GetBlockedParams, options?: ag.MtpRequestOptions): Promise<ContactsBlockedUnion> =>
    callApi<GetBlockedParams, ContactsBlockedUnion>('contacts.getBlocked', params, options),

  getContacts: (params: GetContactsParams, options?: ag.MtpRequestOptions): Promise<ContactsContactsUnion> =>
    callApi<GetContactsParams, ContactsContactsUnion>('contacts.getContacts', params, options),

  getStatuses: (options?: ag.MtpRequestOptions): Promise<ContactStatusUnion[]> =>
    callApi<void, ContactStatusUnion[]>('contacts.getStatuses', undefined, options),

  getTopPeers: (params: GetTopPeersParams, options?: ag.MtpRequestOptions): Promise<ContactsTopPeersUnion> =>
    callApi<GetTopPeersParams, ContactsTopPeersUnion>('contacts.getTopPeers', params, options),

  importCard: (params: ImportCardParams, options?: ag.MtpRequestOptions): Promise<UserUnion> =>
    callApi<ImportCardParams, UserUnion>('contacts.importCard', params, options),

  importContacts: (params: ImportContactsParams, options?: ag.MtpRequestOptions): Promise<ContactsImportedContactsUnion> =>
    callApi<ImportContactsParams, ContactsImportedContactsUnion>('contacts.importContacts', params, options),

  resetSaved: (options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<void, boolean>('contacts.resetSaved', undefined, options),

  resetTopPeerRating: (params: ResetTopPeerRatingParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<ResetTopPeerRatingParams, boolean>('contacts.resetTopPeerRating', params, options),

  resolveUsername: (params: ResolveUsernameParams, options?: ag.MtpRequestOptions): Promise<ContactsResolvedPeerUnion> =>
    callApi<ResolveUsernameParams, ContactsResolvedPeerUnion>('contacts.resolveUsername', params, options),

  search: (params: SearchParams, options?: ag.MtpRequestOptions): Promise<ContactsFoundUnion> =>
    callApi<SearchParams, ContactsFoundUnion>('contacts.search', params, options),

  unblock: (params: UnblockParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<UnblockParams, boolean>('contacts.unblock', params, options)
})
