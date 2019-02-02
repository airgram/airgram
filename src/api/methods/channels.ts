/*tslint:disable:variable-name*/
/*tslint:disable:max-line-length*/
/*tslint:disable:ordered-imports*/

import { ag } from '../../interfaces'

import {
  ChannelAdminLogEventsFilterUnion,
  ChannelAdminRightsUnion,
  ChannelBannedRightsUnion,
  ChannelParticipantsFilterUnion,
  ChannelsAdminLogResultsUnion,
  ChannelsChannelParticipantUnion,
  ChannelsChannelParticipantsUnion,
  ExportedChatInviteUnion,
  ExportedMessageLinkUnion,
  InputChannelUnion,
  InputChatPhotoUnion,
  InputStickerSetUnion,
  InputUserUnion,
  MessagesAffectedHistoryUnion,
  MessagesAffectedMessagesUnion,
  MessagesChatFullUnion,
  MessagesChatsUnion,
  MessagesMessagesUnion,
  UpdatesUnion
} from '../'

export interface CheckUsernameParams {
  channel: InputChannelUnion,
  username: string
}

export interface CreateChannelParams {
  about: string,
  flags?: number,
  title: string,
  broadcast?: true,
  megagroup?: true
}

export interface DeleteChannelParams {
  channel: InputChannelUnion
}

export interface DeleteMessagesParams {
  channel: InputChannelUnion,
  id: number[]
}

export interface DeleteUserHistoryParams {
  channel: InputChannelUnion,
  user_id: InputUserUnion
}

export interface EditAboutParams {
  about: string,
  channel: InputChannelUnion
}

export interface EditAdminParams {
  admin_rights: ChannelAdminRightsUnion,
  channel: InputChannelUnion,
  user_id: InputUserUnion
}

export interface EditBannedParams {
  banned_rights: ChannelBannedRightsUnion,
  channel: InputChannelUnion,
  user_id: InputUserUnion
}

export interface EditPhotoParams {
  channel: InputChannelUnion,
  photo: InputChatPhotoUnion
}

export interface EditTitleParams {
  channel: InputChannelUnion,
  title: string
}

export interface ExportInviteParams {
  channel: InputChannelUnion
}

export interface ExportMessageLinkParams {
  channel: InputChannelUnion,
  id: number
}

export interface GetAdminLogParams {
  channel: InputChannelUnion,
  flags?: number,
  limit: number,
  max_id: string,
  min_id: string,
  q: string,
  admins?: InputUserUnion[],
  events_filter?: ChannelAdminLogEventsFilterUnion
}

export interface GetChannelsParams {
  id: InputChannelUnion[]
}

export interface GetFullChannelParams {
  channel: InputChannelUnion
}

export interface GetMessagesParams {
  channel: InputChannelUnion,
  id: number[]
}

export interface GetParticipantParams {
  channel: InputChannelUnion,
  user_id: InputUserUnion
}

export interface GetParticipantsParams {
  channel: InputChannelUnion,
  filter: ChannelParticipantsFilterUnion,
  limit: number,
  offset: number
}

export interface InviteToChannelParams {
  channel: InputChannelUnion,
  users: InputUserUnion[]
}

export interface JoinChannelParams {
  channel: InputChannelUnion
}

export interface LeaveChannelParams {
  channel: InputChannelUnion
}

export interface ReadHistoryParams {
  channel: InputChannelUnion,
  max_id: number
}

export interface ReadMessageContentsParams {
  channel: InputChannelUnion,
  id: number[]
}

export interface ReportSpamParams {
  channel: InputChannelUnion,
  id: number[],
  user_id: InputUserUnion
}

export interface SetStickersParams {
  channel: InputChannelUnion,
  stickerset: InputStickerSetUnion
}

export interface ToggleInvitesParams {
  channel: InputChannelUnion,
  enabled: boolean
}

export interface ToggleSignaturesParams {
  channel: InputChannelUnion,
  enabled: boolean
}

export interface UpdatePinnedMessageParams {
  channel: InputChannelUnion,
  flags?: number,
  id: number,
  silent?: true
}

export interface UpdateUsernameParams {
  channel: InputChannelUnion,
  username: string
}

export interface ChannelsApi {
  checkUsername: (params: CheckUsernameParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  createChannel: (params: CreateChannelParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  deleteChannel: (params: DeleteChannelParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  deleteMessages: (params: DeleteMessagesParams, options?: ag.MtpRequestOptions) => Promise<MessagesAffectedMessagesUnion>
  deleteUserHistory: (params: DeleteUserHistoryParams, options?: ag.MtpRequestOptions) => Promise<MessagesAffectedHistoryUnion>
  editAbout: (params: EditAboutParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  editAdmin: (params: EditAdminParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  editBanned: (params: EditBannedParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  editPhoto: (params: EditPhotoParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  editTitle: (params: EditTitleParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  exportInvite: (params: ExportInviteParams, options?: ag.MtpRequestOptions) => Promise<ExportedChatInviteUnion>
  exportMessageLink: (params: ExportMessageLinkParams, options?: ag.MtpRequestOptions) => Promise<ExportedMessageLinkUnion>
  getAdminLog: (params: GetAdminLogParams, options?: ag.MtpRequestOptions) => Promise<ChannelsAdminLogResultsUnion>
  getAdminedPublicChannels: (options?: ag.MtpRequestOptions) => Promise<MessagesChatsUnion>
  getChannels: (params: GetChannelsParams, options?: ag.MtpRequestOptions) => Promise<MessagesChatsUnion>
  getFullChannel: (params: GetFullChannelParams, options?: ag.MtpRequestOptions) => Promise<MessagesChatFullUnion>
  getMessages: (params: GetMessagesParams, options?: ag.MtpRequestOptions) => Promise<MessagesMessagesUnion>
  getParticipant: (params: GetParticipantParams, options?: ag.MtpRequestOptions) => Promise<ChannelsChannelParticipantUnion>
  getParticipants: (params: GetParticipantsParams, options?: ag.MtpRequestOptions) => Promise<ChannelsChannelParticipantsUnion>
  inviteToChannel: (params: InviteToChannelParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  joinChannel: (params: JoinChannelParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  leaveChannel: (params: LeaveChannelParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  readHistory: (params: ReadHistoryParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  readMessageContents: (params: ReadMessageContentsParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  reportSpam: (params: ReportSpamParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  setStickers: (params: SetStickersParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  toggleInvites: (params: ToggleInvitesParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  toggleSignatures: (params: ToggleSignaturesParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  updatePinnedMessage: (params: UpdatePinnedMessageParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  updateUsername: (params: UpdateUsernameParams, options?: ag.MtpRequestOptions) => Promise<boolean>
}

export const factory = (callApi: ag.CallApiFn): ChannelsApi => ({
  checkUsername: (params: CheckUsernameParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<CheckUsernameParams, boolean>('channels.checkUsername', params, options),

  createChannel: (params: CreateChannelParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<CreateChannelParams, UpdatesUnion>('channels.createChannel', params, options),

  deleteChannel: (params: DeleteChannelParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<DeleteChannelParams, UpdatesUnion>('channels.deleteChannel', params, options),

  deleteMessages: (params: DeleteMessagesParams, options?: ag.MtpRequestOptions): Promise<MessagesAffectedMessagesUnion> =>
    callApi<DeleteMessagesParams, MessagesAffectedMessagesUnion>('channels.deleteMessages', params, options),

  deleteUserHistory: (params: DeleteUserHistoryParams, options?: ag.MtpRequestOptions): Promise<MessagesAffectedHistoryUnion> =>
    callApi<DeleteUserHistoryParams, MessagesAffectedHistoryUnion>('channels.deleteUserHistory', params, options),

  editAbout: (params: EditAboutParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<EditAboutParams, boolean>('channels.editAbout', params, options),

  editAdmin: (params: EditAdminParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<EditAdminParams, UpdatesUnion>('channels.editAdmin', params, options),

  editBanned: (params: EditBannedParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<EditBannedParams, UpdatesUnion>('channels.editBanned', params, options),

  editPhoto: (params: EditPhotoParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<EditPhotoParams, UpdatesUnion>('channels.editPhoto', params, options),

  editTitle: (params: EditTitleParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<EditTitleParams, UpdatesUnion>('channels.editTitle', params, options),

  exportInvite: (params: ExportInviteParams, options?: ag.MtpRequestOptions): Promise<ExportedChatInviteUnion> =>
    callApi<ExportInviteParams, ExportedChatInviteUnion>('channels.exportInvite', params, options),

  exportMessageLink: (params: ExportMessageLinkParams, options?: ag.MtpRequestOptions): Promise<ExportedMessageLinkUnion> =>
    callApi<ExportMessageLinkParams, ExportedMessageLinkUnion>('channels.exportMessageLink', params, options),

  getAdminLog: (params: GetAdminLogParams, options?: ag.MtpRequestOptions): Promise<ChannelsAdminLogResultsUnion> =>
    callApi<GetAdminLogParams, ChannelsAdminLogResultsUnion>('channels.getAdminLog', params, options),

  getAdminedPublicChannels: (options?: ag.MtpRequestOptions): Promise<MessagesChatsUnion> =>
    callApi<void, MessagesChatsUnion>('channels.getAdminedPublicChannels', undefined, options),

  getChannels: (params: GetChannelsParams, options?: ag.MtpRequestOptions): Promise<MessagesChatsUnion> =>
    callApi<GetChannelsParams, MessagesChatsUnion>('channels.getChannels', params, options),

  getFullChannel: (params: GetFullChannelParams, options?: ag.MtpRequestOptions): Promise<MessagesChatFullUnion> =>
    callApi<GetFullChannelParams, MessagesChatFullUnion>('channels.getFullChannel', params, options),

  getMessages: (params: GetMessagesParams, options?: ag.MtpRequestOptions): Promise<MessagesMessagesUnion> =>
    callApi<GetMessagesParams, MessagesMessagesUnion>('channels.getMessages', params, options),

  getParticipant: (params: GetParticipantParams, options?: ag.MtpRequestOptions): Promise<ChannelsChannelParticipantUnion> =>
    callApi<GetParticipantParams, ChannelsChannelParticipantUnion>('channels.getParticipant', params, options),

  getParticipants: (params: GetParticipantsParams, options?: ag.MtpRequestOptions): Promise<ChannelsChannelParticipantsUnion> =>
    callApi<GetParticipantsParams, ChannelsChannelParticipantsUnion>('channels.getParticipants', params, options),

  inviteToChannel: (params: InviteToChannelParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<InviteToChannelParams, UpdatesUnion>('channels.inviteToChannel', params, options),

  joinChannel: (params: JoinChannelParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<JoinChannelParams, UpdatesUnion>('channels.joinChannel', params, options),

  leaveChannel: (params: LeaveChannelParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<LeaveChannelParams, UpdatesUnion>('channels.leaveChannel', params, options),

  readHistory: (params: ReadHistoryParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<ReadHistoryParams, boolean>('channels.readHistory', params, options),

  readMessageContents: (params: ReadMessageContentsParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<ReadMessageContentsParams, boolean>('channels.readMessageContents', params, options),

  reportSpam: (params: ReportSpamParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<ReportSpamParams, boolean>('channels.reportSpam', params, options),

  setStickers: (params: SetStickersParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<SetStickersParams, boolean>('channels.setStickers', params, options),

  toggleInvites: (params: ToggleInvitesParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<ToggleInvitesParams, UpdatesUnion>('channels.toggleInvites', params, options),

  toggleSignatures: (params: ToggleSignaturesParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<ToggleSignaturesParams, UpdatesUnion>('channels.toggleSignatures', params, options),

  updatePinnedMessage: (params: UpdatePinnedMessageParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<UpdatePinnedMessageParams, UpdatesUnion>('channels.updatePinnedMessage', params, options),

  updateUsername: (params: UpdateUsernameParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<UpdateUsernameParams, boolean>('channels.updateUsername', params, options)
})
