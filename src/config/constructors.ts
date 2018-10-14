/*tslint:disable:object-literal-sort-keys*/

import { ag } from '../interfaces'

interface Constructors {
  [key: string]: ag.TelegramConstructor
}

const constructors: {api: Constructors, mtp: Constructors} = {
  api: {
    '8322574': {
      id: 8322574,
      predicate: 'storage.fileJpeg',
      params: [],
      type: 'storage.FileType'
    },
    '9203775': {
      id: 9203775,
      predicate: 'userStatusOffline',
      params: [{ name: 'was_online', type: 'int' }],
      type: 'UserStatus'
    },
    '16030880': {
      id: 16030880,
      predicate: 'updates.difference',
      params: [{ name: 'new_messages', type: 'Vector<Message>' }, {
        name: 'new_encrypted_messages',
        type: 'Vector<EncryptedMessage>'
      }, { name: 'other_updates', type: 'Vector<Update>' }, { name: 'chats', type: 'Vector<Chat>' }, {
        name: 'users',
        type: 'Vector<User>'
      }, { name: 'state', type: 'updates.State' }],
      type: 'updates.Difference'
    },
    '53231223': {
      id: 53231223,
      predicate: 'inputGameID',
      params: [{ name: 'id', type: 'long' }, { name: 'access_hash', type: 'long' }],
      type: 'InputGame'
    },
    '70813275': {
      id: 70813275,
      predicate: 'inputStickeredMediaDocument',
      params: [{ name: 'id', type: 'InputDocument' }],
      type: 'InputStickeredMedia'
    },
    '82699215': {
      id: 82699215,
      predicate: 'messages.featuredStickersNotModified',
      params: [],
      type: 'messages.FeaturedStickers'
    },
    '90744648': {
      id: 90744648,
      predicate: 'keyboardButtonSwitchInline',
      params: [{ name: 'flags', type: '#' }, { name: 'same_peer', type: 'flags.0?true' }, {
        name: 'text',
        type: 'string'
      }, { name: 'query', type: 'string' }],
      type: 'KeyboardButton'
    },
    '98092748': {
      id: 98092748,
      predicate: 'dcOption',
      params: [{ name: 'flags', type: '#' }, { name: 'ipv6', type: 'flags.0?true' }, {
        name: 'media_only',
        type: 'flags.1?true'
      }, { name: 'tcpo_only', type: 'flags.2?true' }, { name: 'cdn', type: 'flags.3?true' }, {
        name: 'static',
        type: 'flags.4?true'
      }, { name: 'id', type: 'int' }, { name: 'ip_address', type: 'string' }, { name: 'port', type: 'int' }],
      type: 'DcOption'
    },
    '104314861': { id: 104314861, predicate: 'topPeerCategoryCorrespondents', params: [], type: 'TopPeerCategory' },
    '106343499': {
      id: 106343499,
      predicate: 'channelParticipantsSearch',
      params: [{ name: 'q', type: 'string' }],
      type: 'ChannelParticipantsFilter'
    },
    '120753115': {
      id: 120753115,
      predicate: 'chatForbidden',
      params: [{ name: 'id', type: 'int' }, { name: 'title', type: 'string' }],
      type: 'Chat'
    },
    '125178264': {
      id: 125178264,
      predicate: 'updateChatParticipants',
      params: [{ name: 'participants', type: 'ChatParticipants' }],
      type: 'Update'
    },
    '129960444': { id: 129960444, predicate: 'userStatusLastWeek', params: [], type: 'UserStatus' },
    '145955919': {
      id: 145955919,
      predicate: 'pageBlockCollage',
      params: [{ name: 'items', type: 'Vector<PageBlock>' }, { name: 'caption', type: 'RichText' }],
      type: 'PageBlock'
    },
    '153267905': {
      id: 153267905,
      predicate: 'inputMediaPhotoExternal',
      params: [{ name: 'flags', type: '#' }, { name: 'url', type: 'string' }, {
        name: 'caption',
        type: 'string'
      }, { name: 'ttl_seconds', type: 'flags.0?int' }],
      type: 'InputMedia'
    },
    '157948117': {
      id: 157948117,
      predicate: 'upload.file',
      params: [{ name: 'type', type: 'storage.FileType' }, { name: 'mtime', type: 'int' }, {
        name: 'bytes',
        type: 'bytes'
      }],
      type: 'upload.File'
    },
    '164646985': { id: 164646985, predicate: 'userStatusEmpty', params: [], type: 'UserStatus' },
    '172975040': { id: 172975040, predicate: 'storage.filePng', params: [], type: 'storage.FileType' },
    '175419739': {
      id: 175419739,
      predicate: 'botInlineMessageMediaAuto',
      params: [{ name: 'flags', type: '#' }, { name: 'caption', type: 'string' }, {
        name: 'reply_markup',
        type: 'flags.2?ReplyMarkup'
      }],
      type: 'BotInlineMessage'
    },
    '182649427': {
      id: 182649427,
      predicate: 'messageRange',
      params: [{ name: 'min_id', type: 'int' }, { name: 'max_id', type: 'int' }],
      type: 'MessageRange'
    },
    '186120336': {
      id: 186120336,
      predicate: 'messages.recentStickersNotModified',
      params: [],
      type: 'messages.RecentStickers'
    },
    '189033187': {
      id: 189033187,
      predicate: 'messages.messagesSlice',
      params: [{ name: 'count', type: 'int' }, { name: 'messages', type: 'Vector<Message>' }, {
        name: 'chats',
        type: 'Vector<Chat>'
      }, { name: 'users', type: 'Vector<User>' }],
      type: 'messages.Messages'
    },
    '195371015': {
      id: 195371015,
      predicate: 'inputPrivacyValueDisallowContacts',
      params: [],
      type: 'InputPrivacyRule'
    },
    '196268545': {
      id: 196268545,
      predicate: 'updateStickerSetsOrder',
      params: [{ name: 'flags', type: '#' }, { name: 'masks', type: 'flags.0?true' }, {
        name: 'order',
        type: 'Vector<long>'
      }],
      type: 'Update'
    },
    '209668535': {
      id: 209668535,
      predicate: 'privacyValueDisallowUsers',
      params: [{ name: 'users', type: 'Vector<int>' }],
      type: 'PrivacyRule'
    },
    '213142300': {
      id: 213142300,
      predicate: 'channel',
      params: [{ name: 'flags', type: '#' }, { name: 'creator', type: 'flags.0?true' }, {
        name: 'left',
        type: 'flags.2?true'
      }, { name: 'editor', type: 'flags.3?true' }, { name: 'broadcast', type: 'flags.5?true' }, {
        name: 'verified',
        type: 'flags.7?true'
      }, { name: 'megagroup', type: 'flags.8?true' }, { name: 'restricted', type: 'flags.9?true' }, {
        name: 'democracy',
        type: 'flags.10?true'
      }, { name: 'signatures', type: 'flags.11?true' }, { name: 'min', type: 'flags.12?true' }, {
        name: 'id',
        type: 'int'
      }, { name: 'access_hash', type: 'flags.13?long' }, { name: 'title', type: 'string' }, {
        name: 'username',
        type: 'flags.6?string'
      }, { name: 'photo', type: 'ChatPhoto' }, { name: 'date', type: 'int' }, {
        name: 'version',
        type: 'int'
      }, { name: 'restriction_reason', type: 'flags.9?string' }, {
        name: 'admin_rights',
        type: 'flags.14?ChannelAdminRights'
      }, { name: 'banned_rights', type: 'flags.15?ChannelBannedRights' }],
      type: 'Chat'
    },
    '218751099': { id: 218751099, predicate: 'inputPrivacyValueAllowContacts', params: [], type: 'InputPrivacyRule' },
    '236446268': {
      id: 236446268,
      predicate: 'photoSizeEmpty',
      params: [{ name: 'type', type: 'string' }],
      type: 'PhotoSize'
    },
    '239663460': {
      id: 239663460,
      predicate: 'updateBotInlineSend',
      params: [{ name: 'flags', type: '#' }, { name: 'user_id', type: 'int' }, {
        name: 'query',
        type: 'string'
      }, { name: 'geo', type: 'flags.0?GeoPoint' }, { name: 'id', type: 'string' }, {
        name: 'msg_id',
        type: 'flags.1?InputBotInlineMessageID'
      }],
      type: 'Update'
    },
    '250621158': {
      id: 250621158,
      predicate: 'documentAttributeVideo',
      params: [{ name: 'flags', type: '#' }, { name: 'round_message', type: 'flags.0?true' }, {
        name: 'duration',
        type: 'int'
      }, { name: 'w', type: 'int' }, { name: 'h', type: 'int' }],
      type: 'DocumentAttribute'
    },
    '253890367': {
      id: 253890367,
      predicate: 'userFull',
      params: [{ name: 'flags', type: '#' }, { name: 'blocked', type: 'flags.0?true' }, {
        name: 'phone_calls_available',
        type: 'flags.4?true'
      }, { name: 'phone_calls_private', type: 'flags.5?true' }, { name: 'user', type: 'User' }, {
        name: 'about',
        type: 'flags.1?string'
      }, { name: 'link', type: 'contacts.Link' }, {
        name: 'profile_photo',
        type: 'flags.2?Photo'
      }, { name: 'notify_settings', type: 'PeerNotifySettings' }, {
        name: 'bot_info',
        type: 'flags.3?BotInfo'
      }, { name: 'common_chats_count', type: 'int' }],
      type: 'UserFull'
    },
    '276907596': { id: 276907596, predicate: 'storage.fileWebp', params: [], type: 'storage.FileType' },
    '281165899': { id: 281165899, predicate: 'updateLangPackTooLong', params: [], type: 'Update' },
    '286776671': { id: 286776671, predicate: 'geoPointEmpty', params: [], type: 'GeoPoint' },
    '292985073': {
      id: 292985073,
      predicate: 'langPackLanguage',
      params: [{ name: 'name', type: 'string' }, { name: 'native_name', type: 'string' }, {
        name: 'lang_code',
        type: 'string'
      }],
      type: 'LangPackLanguage'
    },
    '297109817': { id: 297109817, predicate: 'documentAttributeAnimated', params: [], type: 'DocumentAttribute' },
    '301019932': {
      id: 301019932,
      predicate: 'updateShortSentMessage',
      params: [{ name: 'flags', type: '#' }, { name: 'out', type: 'flags.1?true' }, {
        name: 'id',
        type: 'int'
      }, { name: 'pts', type: 'int' }, { name: 'pts_count', type: 'int' }, {
        name: 'date',
        type: 'int'
      }, { name: 'media', type: 'flags.9?MessageMedia' }, { name: 'entities', type: 'flags.7?Vector<MessageEntity>' }],
      type: 'Updates'
    },
    '307276766': {
      id: 307276766,
      predicate: 'account.authorizations',
      params: [{ name: 'authorizations', type: 'Vector<Authorization>' }],
      type: 'account.Authorizations'
    },
    '313694676': {
      id: 313694676,
      predicate: 'stickerPack',
      params: [{ name: 'emoticon', type: 'string' }, { name: 'documents', type: 'Vector<long>' }],
      type: 'StickerPack'
    },
    '314130811': {
      id: 314130811,
      predicate: 'updateUserPhone',
      params: [{ name: 'user_id', type: 'int' }, { name: 'phone', type: 'string' }],
      type: 'Update'
    },
    '314359194': {
      id: 314359194,
      predicate: 'updateNewEncryptedMessage',
      params: [{ name: 'message', type: 'EncryptedMessage' }, { name: 'qts', type: 'int' }],
      type: 'Update'
    },
    '319588707': {
      id: 319588707,
      predicate: 'pageBlockSlideshow',
      params: [{ name: 'items', type: 'Vector<PageBlock>' }, { name: 'caption', type: 'RichText' }],
      type: 'PageBlock'
    },
    '320652927': {
      id: 320652927,
      predicate: 'inputPrivacyValueAllowUsers',
      params: [{ name: 'users', type: 'Vector<InputUser>' }],
      type: 'InputPrivacyRule'
    },
    '324435594': { id: 324435594, predicate: 'pageBlockUnsupported', params: [], type: 'PageBlock' },
    '326715557': {
      id: 326715557,
      predicate: 'auth.passwordRecovery',
      params: [{ name: 'email_pattern', type: 'string' }],
      type: 'auth.PasswordRecovery'
    },
    '332848423': {
      id: 332848423,
      predicate: 'encryptedChatDiscarded',
      params: [{ name: 'id', type: 'int' }],
      type: 'EncryptedChat'
    },
    '338142689': {
      id: 338142689,
      predicate: 'channelParticipantsBanned',
      params: [{ name: 'q', type: 'string' }],
      type: 'ChannelParticipantsFilter'
    },
    '342061462': {
      id: 342061462,
      predicate: 'inputFileLocation',
      params: [{ name: 'volume_id', type: 'long' }, { name: 'local_id', type: 'int' }, {
        name: 'secret',
        type: 'long'
      }],
      type: 'InputFileLocation'
    },
    '344356834': { id: 344356834, predicate: 'topPeerCategoryBotsInline', params: [], type: 'TopPeerCategory' },
    '352657236': {
      id: 352657236,
      predicate: 'photos.photosSlice',
      params: [{ name: 'count', type: 'int' }, { name: 'photos', type: 'Vector<Photo>' }, {
        name: 'users',
        type: 'Vector<User>'
      }],
      type: 'photos.Photos'
    },
    '358154344': {
      id: 358154344,
      predicate: 'documentAttributeFilename',
      params: [{ name: 'file_name', type: 'string' }],
      type: 'DocumentAttribute'
    },
    '364538944': {
      id: 364538944,
      predicate: 'messages.dialogs',
      params: [{ name: 'dialogs', type: 'Vector<Dialog>' }, {
        name: 'messages',
        type: 'Vector<Message>'
      }, { name: 'chats', type: 'Vector<Chat>' }, { name: 'users', type: 'Vector<User>' }],
      type: 'messages.Dialogs'
    },
    '367766557': {
      id: 367766557,
      predicate: 'channelParticipant',
      params: [{ name: 'user_id', type: 'int' }, { name: 'date', type: 'int' }],
      type: 'ChannelParticipant'
    },
    '371037736': { id: 371037736, predicate: 'topPeerCategoryChannels', params: [], type: 'TopPeerCategory' },
    '372165663': {
      id: 372165663,
      predicate: 'foundGif',
      params: [{ name: 'url', type: 'string' }, { name: 'thumb_url', type: 'string' }, {
        name: 'content_url',
        type: 'string'
      }, { name: 'content_type', type: 'string' }, { name: 'w', type: 'int' }, { name: 'h', type: 'int' }],
      type: 'FoundGif'
    },
    '377562760': {
      id: 377562760,
      predicate: 'updateShortChatMessage',
      params: [{ name: 'flags', type: '#' }, { name: 'out', type: 'flags.1?true' }, {
        name: 'mentioned',
        type: 'flags.4?true'
      }, { name: 'media_unread', type: 'flags.5?true' }, { name: 'silent', type: 'flags.13?true' }, {
        name: 'id',
        type: 'int'
      }, { name: 'from_id', type: 'int' }, { name: 'chat_id', type: 'int' }, {
        name: 'message',
        type: 'string'
      }, { name: 'pts', type: 'int' }, { name: 'pts_count', type: 'int' }, {
        name: 'date',
        type: 'int'
      }, { name: 'fwd_from', type: 'flags.2?MessageFwdHeader' }, {
        name: 'via_bot_id',
        type: 'flags.11?int'
      }, { name: 'reply_to_msg_id', type: 'flags.3?int' }, { name: 'entities', type: 'flags.7?Vector<MessageEntity>' }],
      type: 'Updates'
    },
    '381645902': { id: 381645902, predicate: 'sendMessageTypingAction', params: [], type: 'SendMessageAction' },
    '386986326': {
      id: 386986326,
      predicate: 'updateEncryptedChatTyping',
      params: [{ name: 'chat_id', type: 'int' }],
      type: 'Update'
    },
    '393186209': { id: 393186209, predicate: 'sendMessageGeoLocationAction', params: [], type: 'SendMessageAction' },
    '396093539': {
      id: 396093539,
      predicate: 'inputPeerChat',
      params: [{ name: 'chat_id', type: 'int' }],
      type: 'InputPeer'
    },
    '398898678': {
      id: 398898678,
      predicate: 'help.support',
      params: [{ name: 'phone_number', type: 'string' }, { name: 'user', type: 'User' }],
      type: 'help.Support'
    },
    '400266251': {
      id: 400266251,
      predicate: 'botInlineMediaResult',
      params: [{ name: 'flags', type: '#' }, { name: 'id', type: 'string' }, {
        name: 'type',
        type: 'string'
      }, { name: 'photo', type: 'flags.0?Photo' }, { name: 'document', type: 'flags.1?Document' }, {
        name: 'title',
        type: 'flags.2?string'
      }, { name: 'description', type: 'flags.3?string' }, { name: 'send_message', type: 'BotInlineMessage' }],
      type: 'BotInlineResult'
    },
    '401891279': {
      id: 401891279,
      predicate: 'channelFull',
      params: [{ name: 'flags', type: '#' }, {
        name: 'can_view_participants',
        type: 'flags.3?true'
      }, { name: 'can_set_username', type: 'flags.6?true' }, {
        name: 'can_set_stickers',
        type: 'flags.7?true'
      }, { name: 'id', type: 'int' }, { name: 'about', type: 'string' }, {
        name: 'participants_count',
        type: 'flags.0?int'
      }, { name: 'admins_count', type: 'flags.1?int' }, {
        name: 'kicked_count',
        type: 'flags.2?int'
      }, { name: 'banned_count', type: 'flags.2?int' }, {
        name: 'read_inbox_max_id',
        type: 'int'
      }, { name: 'read_outbox_max_id', type: 'int' }, { name: 'unread_count', type: 'int' }, {
        name: 'chat_photo',
        type: 'Photo'
      }, { name: 'notify_settings', type: 'PeerNotifySettings' }, {
        name: 'exported_invite',
        type: 'ExportedChatInvite'
      }, { name: 'bot_info', type: 'Vector<BotInfo>' }, {
        name: 'migrated_from_chat_id',
        type: 'flags.4?int'
      }, { name: 'migrated_from_max_id', type: 'flags.4?int' }, {
        name: 'pinned_msg_id',
        type: 'flags.5?int'
      }, { name: 'stickerset', type: 'flags.8?StickerSet' }],
      type: 'ChatFull'
    },
    '405815507': {
      id: 405815507,
      predicate: 'channelAdminLogEventActionParticipantJoin',
      params: [],
      type: 'ChannelAdminLogEventAction'
    },
    '406307684': { id: 406307684, predicate: 'inputEncryptedFileEmpty', params: [], type: 'InputEncryptedFile' },
    '407582158': { id: 407582158, predicate: 'inputPrivacyValueAllowAll', params: [], type: 'InputPrivacyRule' },
    '410618194': {
      id: 410618194,
      predicate: 'inputDocument',
      params: [{ name: 'id', type: 'long' }, { name: 'access_hash', type: 'long' }],
      type: 'InputDocument'
    },
    '415997816': {
      id: 415997816,
      predicate: 'help.inviteText',
      params: [{ name: 'message', type: 'string' }],
      type: 'help.InviteText'
    },
    '423314455': { id: 423314455, predicate: 'inputNotifyUsers', params: [], type: 'InputNotifyPeer' },
    '446822276': {
      id: 446822276,
      predicate: 'contacts.found',
      params: [{ name: 'results', type: 'Vector<Peer>' }, { name: 'chats', type: 'Vector<Chat>' }, {
        name: 'users',
        type: 'Vector<User>'
      }],
      type: 'contacts.Found'
    },
    '457133559': {
      id: 457133559,
      predicate: 'updateEditChannelMessage',
      params: [{ name: 'message', type: 'Message' }, { name: 'pts', type: 'int' }, { name: 'pts_count', type: 'int' }],
      type: 'Update'
    },
    '460916654': {
      id: 460916654,
      predicate: 'channelAdminLogEventActionToggleInvites',
      params: [{ name: 'new_value', type: 'Bool' }],
      type: 'ChannelAdminLogEventAction'
    },
    '462375633': {
      id: 462375633,
      predicate: 'phoneCallWaiting',
      params: [{ name: 'flags', type: '#' }, { name: 'id', type: 'long' }, {
        name: 'access_hash',
        type: 'long'
      }, { name: 'date', type: 'int' }, { name: 'admin_id', type: 'int' }, {
        name: 'participant_id',
        type: 'int'
      }, { name: 'protocol', type: 'PhoneCallProtocol' }, { name: 'receive_date', type: 'flags.0?int' }],
      type: 'PhoneCall'
    },
    '469489699': {
      id: 469489699,
      predicate: 'updateUserStatus',
      params: [{ name: 'user_id', type: 'int' }, { name: 'status', type: 'UserStatus' }],
      type: 'Update'
    },
    '471043349': {
      id: 471043349,
      predicate: 'contacts.blocked',
      params: [{ name: 'blocked', type: 'Vector<ContactBlocked>' }, { name: 'users', type: 'Vector<User>' }],
      type: 'contacts.Blocked'
    },
    '480546647': { id: 480546647, predicate: 'inputChatPhotoEmpty', params: [], type: 'InputChatPhoto' },
    '483901197': { id: 483901197, predicate: 'inputPhotoEmpty', params: [], type: 'InputPhoto' },
    '505595789': { id: 505595789, predicate: 'inputReportReasonViolence', params: [], type: 'ReportReason' },
    '506920429': {
      id: 506920429,
      predicate: 'inputPhoneCall',
      params: [{ name: 'id', type: 'long' }, { name: 'access_hash', type: 'long' }],
      type: 'InputPhoneCall'
    },
    '511092620': { id: 511092620, predicate: 'topPeerCategoryPhoneCalls', params: [], type: 'TopPeerCategory' },
    '512535275': {
      id: 512535275,
      predicate: 'postAddress',
      params: [{ name: 'street_line1', type: 'string' }, { name: 'street_line2', type: 'string' }, {
        name: 'city',
        type: 'string'
      }, { name: 'state', type: 'string' }, { name: 'country_iso2', type: 'string' }, {
        name: 'post_code',
        type: 'string'
      }],
      type: 'PostAddress'
    },
    '522914557': {
      id: 522914557,
      predicate: 'updateNewMessage',
      params: [{ name: 'message', type: 'Message' }, { name: 'pts', type: 'int' }, { name: 'pts_count', type: 'int' }],
      type: 'Update'
    },
    '524838915': {
      id: 524838915,
      predicate: 'exportedMessageLink',
      params: [{ name: 'link', type: 'string' }],
      type: 'ExportedMessageLink'
    },
    '537022650': { id: 537022650, predicate: 'userEmpty', params: [{ name: 'id', type: 'int' }], type: 'User' },
    '539045032': {
      id: 539045032,
      predicate: 'photos.photo',
      params: [{ name: 'photo', type: 'Photo' }, { name: 'users', type: 'Vector<User>' }],
      type: 'photos.Photo'
    },
    '541710092': {
      id: 541710092,
      predicate: 'geoPoint',
      params: [{ name: 'long', type: 'double' }, { name: 'lat', type: 'double' }],
      type: 'GeoPoint'
    },
    '543450958': {
      id: 543450958,
      predicate: 'updates.channelDifference',
      params: [{ name: 'flags', type: '#' }, { name: 'final', type: 'flags.0?true' }, {
        name: 'pts',
        type: 'int'
      }, { name: 'timeout', type: 'flags.1?int' }, {
        name: 'new_messages',
        type: 'Vector<Message>'
      }, { name: 'other_updates', type: 'Vector<Update>' }, { name: 'chats', type: 'Vector<Chat>' }, {
        name: 'users',
        type: 'Vector<User>'
      }],
      type: 'updates.ChannelDifference'
    },
    '546203849': {
      id: 546203849,
      predicate: 'inputMessageEntityMentionName',
      params: [{ name: 'offset', type: 'int' }, { name: 'length', type: 'int' }, {
        name: 'user_id',
        type: 'InputUser'
      }],
      type: 'MessageEntity'
    },
    '548253432': {
      id: 548253432,
      predicate: 'inputPeerChannel',
      params: [{ name: 'channel_id', type: 'int' }, { name: 'access_hash', type: 'long' }],
      type: 'InputPeer'
    },
    '568808380': {
      id: 568808380,
      predicate: 'upload.webFile',
      params: [{ name: 'size', type: 'int' }, { name: 'mime_type', type: 'string' }, {
        name: 'file_type',
        type: 'storage.FileType'
      }, { name: 'mtime', type: 'int' }, { name: 'bytes', type: 'bytes' }],
      type: 'upload.WebFile'
    },
    '573315206': {
      id: 573315206,
      predicate: 'channelParticipantBanned',
      params: [{ name: 'flags', type: '#' }, { name: 'left', type: 'flags.0?true' }, {
        name: 'user_id',
        type: 'int'
      }, { name: 'kicked_by', type: 'int' }, { name: 'date', type: 'int' }, {
        name: 'banned_rights',
        type: 'ChannelBannedRights'
      }],
      type: 'ChannelParticipant'
    },
    '577556219': { id: 577556219, predicate: 'auth.codeTypeFlashCall', params: [], type: 'auth.CodeType' },
    '590459437': { id: 590459437, predicate: 'photoEmpty', params: [{ name: 'id', type: 'long' }], type: 'Photo' },
    '594758406': {
      id: 594758406,
      predicate: 'encryptedMessageService',
      params: [{ name: 'random_id', type: 'long' }, { name: 'chat_id', type: 'int' }, {
        name: 'date',
        type: 'int'
      }, { name: 'bytes', type: 'bytes' }],
      type: 'EncryptedMessage'
    },
    '608050278': {
      id: 608050278,
      predicate: 'sendMessageUploadRoundAction',
      params: [{ name: 'progress', type: 'int' }],
      type: 'SendMessageAction'
    },
    '628472761': {
      id: 628472761,
      predicate: 'updateContactRegistered',
      params: [{ name: 'user_id', type: 'int' }, { name: 'date', type: 'int' }],
      type: 'Update'
    },
    '629866245': {
      id: 629866245,
      predicate: 'keyboardButtonUrl',
      params: [{ name: 'text', type: 'string' }, { name: 'url', type: 'string' }],
      type: 'KeyboardButton'
    },
    '634833351': {
      id: 634833351,
      predicate: 'updateReadChannelOutbox',
      params: [{ name: 'channel_id', type: 'int' }, { name: 'max_id', type: 'int' }],
      type: 'Update'
    },
    '641563686': {
      id: 641563686,
      predicate: 'pageBlockBlockquote',
      params: [{ name: 'text', type: 'RichText' }, { name: 'caption', type: 'RichText' }],
      type: 'PageBlock'
    },
    '646922073': { id: 646922073, predicate: 'contactLinkHasPhone', params: [], type: 'ContactLink' },
    '648939889': {
      id: 648939889,
      predicate: 'channelAdminLogEventActionToggleSignatures',
      params: [{ name: 'new_value', type: 'Bool' }],
      type: 'ChannelAdminLogEventAction'
    },
    '649453030': {
      id: 649453030,
      predicate: 'messages.messageEditData',
      params: [{ name: 'flags', type: '#' }, { name: 'caption', type: 'flags.0?true' }],
      type: 'messages.MessageEditData'
    },
    '673687578': {
      id: 673687578,
      predicate: 'inputMediaVenue',
      params: [{ name: 'geo_point', type: 'InputGeoPoint' }, { name: 'title', type: 'string' }, {
        name: 'address',
        type: 'string'
      }, { name: 'provider', type: 'string' }, { name: 'venue_id', type: 'string' }],
      type: 'InputMedia'
    },
    '681420594': {
      id: 681420594,
      predicate: 'channelForbidden',
      params: [{ name: 'flags', type: '#' }, { name: 'broadcast', type: 'flags.5?true' }, {
        name: 'megagroup',
        type: 'flags.8?true'
      }, { name: 'id', type: 'int' }, { name: 'access_hash', type: 'long' }, {
        name: 'title',
        type: 'string'
      }, { name: 'until_date', type: 'flags.16?int' }],
      type: 'Chat'
    },
    '681706865': {
      id: 681706865,
      predicate: 'messageEntityCode',
      params: [{ name: 'offset', type: 'int' }, { name: 'length', type: 'int' }],
      type: 'MessageEntity'
    },
    '690781161': {
      id: 690781161,
      predicate: 'pageBlockEmbedPost',
      params: [{ name: 'url', type: 'string' }, { name: 'webpage_id', type: 'long' }, {
        name: 'author_photo_id',
        type: 'long'
      }, { name: 'author', type: 'string' }, { name: 'date', type: 'int' }, {
        name: 'blocks',
        type: 'Vector<PageBlock>'
      }, { name: 'caption', type: 'RichText' }],
      type: 'PageBlock'
    },
    '691006739': {
      id: 691006739,
      predicate: 'inputBotInlineMessageMediaAuto',
      params: [{ name: 'flags', type: '#' }, { name: 'caption', type: 'string' }, {
        name: 'reply_markup',
        type: 'flags.2?ReplyMarkup'
      }],
      type: 'InputBotInlineMessage'
    },
    '695856818': {
      id: 695856818,
      predicate: 'langPackStringDeleted',
      params: [{ name: 'key', type: 'string' }],
      type: 'LangPackString'
    },
    '740433629': {
      id: 740433629,
      predicate: 'messages.dhConfig',
      params: [{ name: 'g', type: 'int' }, { name: 'p', type: 'bytes' }, {
        name: 'version',
        type: 'int'
      }, { name: 'random', type: 'bytes' }],
      type: 'messages.DhConfig'
    },
    '750510426': {
      id: 750510426,
      predicate: 'inputBotInlineResult',
      params: [{ name: 'flags', type: '#' }, { name: 'id', type: 'string' }, {
        name: 'type',
        type: 'string'
      }, { name: 'title', type: 'flags.1?string' }, { name: 'description', type: 'flags.2?string' }, {
        name: 'url',
        type: 'flags.3?string'
      }, { name: 'thumb_url', type: 'flags.4?string' }, {
        name: 'content_url',
        type: 'flags.5?string'
      }, { name: 'content_type', type: 'flags.5?string' }, { name: 'w', type: 'flags.6?int' }, {
        name: 'h',
        type: 'flags.6?int'
      }, { name: 'duration', type: 'flags.7?int' }, { name: 'send_message', type: 'InputBotInlineMessage' }],
      type: 'InputBotInlineResult'
    },
    '766443943': {
      id: 766443943,
      predicate: 'inputBotInlineMessageMediaContact',
      params: [{ name: 'flags', type: '#' }, { name: 'phone_number', type: 'string' }, {
        name: 'first_name',
        type: 'string'
      }, { name: 'last_name', type: 'string' }, { name: 'reply_markup', type: 'flags.2?ReplyMarkup' }],
      type: 'InputBotInlineMessage'
    },
    '767652808': {
      id: 767652808,
      predicate: 'inputEncryptedFileBigUploaded',
      params: [{ name: 'id', type: 'long' }, { name: 'parts', type: 'int' }, { name: 'key_fingerprint', type: 'int' }],
      type: 'InputEncryptedFile'
    },
    '771925524': {
      id: 771925524,
      predicate: 'chatFull',
      params: [{ name: 'id', type: 'int' }, { name: 'participants', type: 'ChatParticipants' }, {
        name: 'chat_photo',
        type: 'Photo'
      }, { name: 'notify_settings', type: 'PeerNotifySettings' }, {
        name: 'exported_invite',
        type: 'ExportedChatInvite'
      }, { name: 'bot_info', type: 'Vector<BotInfo>' }],
      type: 'ChatFull'
    },
    '772213157': {
      id: 772213157,
      predicate: 'messages.savedGifs',
      params: [{ name: 'hash', type: 'int' }, { name: 'gifs', type: 'Vector<Document>' }],
      type: 'messages.SavedGifs'
    },
    '773059779': {
      id: 773059779,
      predicate: 'user',
      params: [{ name: 'flags', type: '#' }, { name: 'self', type: 'flags.10?true' }, {
        name: 'contact',
        type: 'flags.11?true'
      }, { name: 'mutual_contact', type: 'flags.12?true' }, { name: 'deleted', type: 'flags.13?true' }, {
        name: 'bot',
        type: 'flags.14?true'
      }, { name: 'bot_chat_history', type: 'flags.15?true' }, {
        name: 'bot_nochats',
        type: 'flags.16?true'
      }, { name: 'verified', type: 'flags.17?true' }, { name: 'restricted', type: 'flags.18?true' }, {
        name: 'min',
        type: 'flags.20?true'
      }, { name: 'bot_inline_geo', type: 'flags.21?true' }, { name: 'id', type: 'int' }, {
        name: 'access_hash',
        type: 'flags.0?long'
      }, { name: 'first_name', type: 'flags.1?string' }, {
        name: 'last_name',
        type: 'flags.2?string'
      }, { name: 'username', type: 'flags.3?string' }, { name: 'phone', type: 'flags.4?string' }, {
        name: 'photo',
        type: 'flags.5?UserProfilePhoto'
      }, { name: 'status', type: 'flags.6?UserStatus' }, {
        name: 'bot_info_version',
        type: 'flags.14?int'
      }, { name: 'restriction_reason', type: 'flags.18?string' }, {
        name: 'bot_inline_placeholder',
        type: 'flags.19?string'
      }, { name: 'lang_code', type: 'flags.22?string' }],
      type: 'User'
    },
    '777640226': { id: 777640226, predicate: 'inputReportReasonPornography', params: [], type: 'ReportReason' },
    '791617983': {
      id: 791617983,
      predicate: 'updateReadHistoryOutbox',
      params: [{ name: 'peer', type: 'Peer' }, { name: 'max_id', type: 'int' }, {
        name: 'pts',
        type: 'int'
      }, { name: 'pts_count', type: 'int' }],
      type: 'Update'
    },
    '792191537': {
      id: 792191537,
      predicate: 'inputMediaUploadedPhoto',
      params: [{ name: 'flags', type: '#' }, { name: 'file', type: 'InputFile' }, {
        name: 'caption',
        type: 'string'
      }, { name: 'stickers', type: 'flags.0?Vector<InputDocument>' }, { name: 'ttl_seconds', type: 'flags.1?int' }],
      type: 'InputMedia'
    },
    '834148991': {
      id: 834148991,
      predicate: 'pageBlockAudio',
      params: [{ name: 'audio_id', type: 'long' }, { name: 'caption', type: 'RichText' }],
      type: 'PageBlock'
    },
    '861169551': { id: 861169551, predicate: 'updatePtsChanged', params: [], type: 'Update' },
    '863093588': {
      id: 863093588,
      predicate: 'messages.peerDialogs',
      params: [{ name: 'dialogs', type: 'Vector<Dialog>' }, {
        name: 'messages',
        type: 'Vector<Message>'
      }, { name: 'chats', type: 'Vector<Chat>' }, { name: 'users', type: 'Vector<User>' }, {
        name: 'state',
        type: 'updates.State'
      }],
      type: 'messages.PeerDialogs'
    },
    '872932635': {
      id: 872932635,
      predicate: 'stickerSetMultiCovered',
      params: [{ name: 'set', type: 'StickerSet' }, { name: 'covers', type: 'Vector<Document>' }],
      type: 'StickerSetCovered'
    },
    '873977640': {
      id: 873977640,
      predicate: 'inputPaymentCredentials',
      params: [{ name: 'flags', type: '#' }, { name: 'save', type: 'flags.0?true' }, {
        name: 'data',
        type: 'DataJSON'
      }],
      type: 'InputPaymentCredentials'
    },
    '889353612': {
      id: 889353612,
      predicate: 'replyKeyboardMarkup',
      params: [{ name: 'flags', type: '#' }, { name: 'resize', type: 'flags.0?true' }, {
        name: 'single_use',
        type: 'flags.1?true'
      }, { name: 'selective', type: 'flags.2?true' }, { name: 'rows', type: 'Vector<KeyboardButtonRow>' }],
      type: 'ReplyMarkup'
    },
    '892193368': {
      id: 892193368,
      predicate: 'messageEntityMentionName',
      params: [{ name: 'offset', type: 'int' }, { name: 'length', type: 'int' }, { name: 'user_id', type: 'int' }],
      type: 'MessageEntity'
    },
    '904138920': {
      id: 904138920,
      predicate: 'messages.stickerSetInstallResultArchive',
      params: [{ name: 'sets', type: 'Vector<StickerSetCovered>' }],
      type: 'messages.StickerSetInstallResult'
    },
    '904770772': {
      id: 904770772,
      predicate: 'botInlineMessageMediaContact',
      params: [{ name: 'flags', type: '#' }, { name: 'phone_number', type: 'string' }, {
        name: 'first_name',
        type: 'string'
      }, { name: 'last_name', type: 'string' }, { name: 'reply_markup', type: 'flags.2?ReplyMarkup' }],
      type: 'BotInlineMessage'
    },
    '911761060': {
      id: 911761060,
      predicate: 'messages.botCallbackAnswer',
      params: [{ name: 'flags', type: '#' }, { name: 'alert', type: 'flags.1?true' }, {
        name: 'has_url',
        type: 'flags.3?true'
      }, { name: 'message', type: 'flags.0?string' }, { name: 'url', type: 'flags.2?string' }, {
        name: 'cache_time',
        type: 'int'
      }],
      type: 'messages.BotCallbackAnswer'
    },
    '922273905': {
      id: 922273905,
      predicate: 'documentEmpty',
      params: [{ name: 'id', type: 'long' }],
      type: 'Document'
    },
    '928101534': { id: 928101534, predicate: 'inputMessagesFilterMusic', params: [], type: 'MessagesFilter' },
    '935395612': { id: 935395612, predicate: 'chatPhotoEmpty', params: [], type: 'ChatPhoto' },
    '946083368': {
      id: 946083368,
      predicate: 'messages.stickerSetInstallResultSuccess',
      params: [],
      type: 'messages.StickerSetInstallResult'
    },
    '949182130': {
      id: 949182130,
      predicate: 'inputPeerNotifySettings',
      params: [{ name: 'flags', type: '#' }, { name: 'show_previews', type: 'flags.0?true' }, {
        name: 'silent',
        type: 'flags.1?true'
      }, { name: 'mute_until', type: 'int' }, { name: 'sound', type: 'string' }],
      type: 'InputPeerNotifySettings'
    },
    '956179895': {
      id: 956179895,
      predicate: 'updateEncryptedMessagesRead',
      params: [{ name: 'chat_id', type: 'int' }, { name: 'max_date', type: 'int' }, { name: 'date', type: 'int' }],
      type: 'Update'
    },
    '972174080': {
      id: 972174080,
      predicate: 'pageBlockCover',
      params: [{ name: 'cover', type: 'PageBlock' }],
      type: 'PageBlock'
    },
    '975236280': { id: 975236280, predicate: 'inputMessagesFilterChatPhotos', params: [], type: 'MessagesFilter' },
    '978896884': {
      id: 978896884,
      predicate: 'pageBlockList',
      params: [{ name: 'ordered', type: 'Bool' }, { name: 'items', type: 'Vector<RichText>' }],
      type: 'PageBlock'
    },
    '982505656': {
      id: 982505656,
      predicate: 'botInlineMessageMediaGeo',
      params: [{ name: 'flags', type: '#' }, { name: 'geo', type: 'GeoPoint' }, {
        name: 'reply_markup',
        type: 'flags.2?ReplyMarkup'
      }],
      type: 'BotInlineMessage'
    },
    '986597452': {
      id: 986597452,
      predicate: 'contacts.link',
      params: [{ name: 'my_link', type: 'ContactLink' }, { name: 'foreign_link', type: 'ContactLink' }, {
        name: 'user',
        type: 'User'
      }],
      type: 'contacts.Link'
    },
    '995769920': {
      id: 995769920,
      predicate: 'channelAdminLogEvent',
      params: [{ name: 'id', type: 'long' }, { name: 'date', type: 'int' }, {
        name: 'user_id',
        type: 'int'
      }, { name: 'action', type: 'ChannelAdminLogEventAction' }],
      type: 'ChannelAdminLogEvent'
    },
    '1006044124': {
      id: 1006044124,
      predicate: 'encryptedChatWaiting',
      params: [{ name: 'id', type: 'int' }, { name: 'access_hash', type: 'long' }, {
        name: 'date',
        type: 'int'
      }, { name: 'admin_id', type: 'int' }, { name: 'participant_id', type: 'int' }],
      type: 'EncryptedChat'
    },
    '1008755359': {
      id: 1008755359,
      predicate: 'inlineBotSwitchPM',
      params: [{ name: 'text', type: 'string' }, { name: 'start_param', type: 'string' }],
      type: 'InlineBotSwitchPM'
    },
    '1009288385': {
      id: 1009288385,
      predicate: 'textUrl',
      params: [{ name: 'text', type: 'RichText' }, { name: 'url', type: 'string' }, {
        name: 'webpage_id',
        type: 'long'
      }],
      type: 'RichText'
    },
    '1030105979': { id: 1030105979, predicate: 'privacyKeyPhoneCall', params: [], type: 'PrivacyKey' },
    '1035688326': {
      id: 1035688326,
      predicate: 'auth.sentCodeTypeApp',
      params: [{ name: 'length', type: 'int' }],
      type: 'auth.SentCodeType'
    },
    '1036876423': {
      id: 1036876423,
      predicate: 'inputBotInlineMessageText',
      params: [{ name: 'flags', type: '#' }, { name: 'no_webpage', type: 'flags.0?true' }, {
        name: 'message',
        type: 'string'
      }, { name: 'entities', type: 'flags.1?Vector<MessageEntity>' }, {
        name: 'reply_markup',
        type: 'flags.2?ReplyMarkup'
      }],
      type: 'InputBotInlineMessage'
    },
    '1038967584': { id: 1038967584, predicate: 'messageMediaEmpty', params: [], type: 'MessageMedia' },
    '1041346555': {
      id: 1041346555,
      predicate: 'updates.channelDifferenceEmpty',
      params: [{ name: 'flags', type: '#' }, { name: 'final', type: 'flags.0?true' }, {
        name: 'pts',
        type: 'int'
      }, { name: 'timeout', type: 'flags.1?int' }],
      type: 'updates.ChannelDifference'
    },
    '1061556205': {
      id: 1061556205,
      predicate: 'chatParticipants',
      params: [{ name: 'chat_id', type: 'int' }, {
        name: 'participants',
        type: 'Vector<ChatParticipant>'
      }, { name: 'version', type: 'int' }],
      type: 'ChatParticipants'
    },
    '1062645411': {
      id: 1062645411,
      predicate: 'payments.paymentForm',
      params: [{ name: 'flags', type: '#' }, {
        name: 'can_save_credentials',
        type: 'flags.2?true'
      }, { name: 'password_missing', type: 'flags.3?true' }, { name: 'bot_id', type: 'int' }, {
        name: 'invoice',
        type: 'Invoice'
      }, { name: 'provider_id', type: 'int' }, { name: 'url', type: 'string' }, {
        name: 'native_provider',
        type: 'flags.4?string'
      }, { name: 'native_params', type: 'flags.4?DataJSON' }, {
        name: 'saved_info',
        type: 'flags.0?PaymentRequestedInfo'
      }, { name: 'saved_credentials', type: 'flags.1?PaymentSavedCredentials' }, {
        name: 'users',
        type: 'Vector<User>'
      }],
      type: 'payments.PaymentForm'
    },
    '1072550713': { id: 1072550713, predicate: 'true', params: [], type: 'True' },
    '1080663248': {
      id: 1080663248,
      predicate: 'messageActionPaymentSent',
      params: [{ name: 'currency', type: 'string' }, { name: 'total_amount', type: 'long' }],
      type: 'MessageAction'
    },
    '1081547008': {
      id: 1081547008,
      predicate: 'updateChannelWebPage',
      params: [{ name: 'channel_id', type: 'int' }, { name: 'webpage', type: 'WebPage' }, {
        name: 'pts',
        type: 'int'
      }, { name: 'pts_count', type: 'int' }],
      type: 'Update'
    },
    '1086091090': { id: 1086091090, predicate: 'storage.filePartial', params: [], type: 'storage.FileType' },
    '1108669311': {
      id: 1108669311,
      predicate: 'updateReadChannelInbox',
      params: [{ name: 'channel_id', type: 'int' }, { name: 'max_id', type: 'int' }],
      type: 'Update'
    },
    '1121994683': {
      id: 1121994683,
      predicate: 'channelAdminLogEventActionDeleteMessage',
      params: [{ name: 'message', type: 'Message' }],
      type: 'ChannelAdminLogEventAction'
    },
    '1125058340': {
      id: 1125058340,
      predicate: 'inputDocumentFileLocation',
      params: [{ name: 'id', type: 'long' }, { name: 'access_hash', type: 'long' }, { name: 'version', type: 'int' }],
      type: 'InputFileLocation'
    },
    '1130767150': {
      id: 1130767150,
      predicate: 'botInlineMessageMediaVenue',
      params: [{ name: 'flags', type: '#' }, { name: 'geo', type: 'GeoPoint' }, {
        name: 'title',
        type: 'string'
      }, { name: 'address', type: 'string' }, { name: 'provider', type: 'string' }, {
        name: 'venue_id',
        type: 'string'
      }, { name: 'reply_markup', type: 'flags.2?ReplyMarkup' }],
      type: 'BotInlineMessage'
    },
    '1135492588': { id: 1135492588, predicate: 'updateStickerSets', params: [], type: 'Update' },
    '1158290442': {
      id: 1158290442,
      predicate: 'messages.foundGifs',
      params: [{ name: 'next_offset', type: 'int' }, { name: 'results', type: 'Vector<FoundGif>' }],
      type: 'messages.FoundGifs'
    },
    '1182402406': {
      id: 1182402406,
      predicate: 'pageBlockParagraph',
      params: [{ name: 'text', type: 'RichText' }],
      type: 'PageBlock'
    },
    '1187706024': {
      id: 1187706024,
      predicate: 'inputMessagesFilterMyMentionsUnread',
      params: [],
      type: 'MessagesFilter'
    },
    '1200788123': { id: 1200788123, predicate: 'messageActionScreenshotTaken', params: [], type: 'MessageAction' },
    '1212395773': {
      id: 1212395773,
      predicate: 'inputMediaGifExternal',
      params: [{ name: 'url', type: 'string' }, { name: 'q', type: 'string' }],
      type: 'InputMedia'
    },
    '1216809369': {
      id: 1216809369,
      predicate: 'pageBlockFooter',
      params: [{ name: 'text', type: 'RichText' }],
      type: 'PageBlock'
    },
    '1217033015': {
      id: 1217033015,
      predicate: 'messageActionChatAddUser',
      params: [{ name: 'users', type: 'Vector<int>' }],
      type: 'MessageAction'
    },
    '1218642516': {
      id: 1218642516,
      predicate: 'replyInlineMarkup',
      params: [{ name: 'rows', type: 'Vector<KeyboardButtonRow>' }],
      type: 'ReplyMarkup'
    },
    '1248893260': {
      id: 1248893260,
      predicate: 'encryptedFile',
      params: [{ name: 'id', type: 'long' }, { name: 'access_hash', type: 'long' }, {
        name: 'size',
        type: 'int'
      }, { name: 'dc_id', type: 'int' }, { name: 'key_fingerprint', type: 'int' }],
      type: 'EncryptedFile'
    },
    '1251338318': { id: 1251338318, predicate: 'inputNotifyChats', params: [], type: 'InputNotifyPeer' },
    '1251549527': {
      id: 1251549527,
      predicate: 'inputStickeredMediaPhoto',
      params: [{ name: 'id', type: 'InputPhoto' }],
      type: 'InputStickeredMedia'
    },
    '1258196845': {
      id: 1258196845,
      predicate: 'updates.differenceTooLong',
      params: [{ name: 'pts', type: 'int' }],
      type: 'updates.Difference'
    },
    '1258941372': { id: 1258941372, predicate: 'storage.fileMov', params: [], type: 'storage.FileType' },
    '1262639204': {
      id: 1262639204,
      predicate: 'inputBotInlineMessageGame',
      params: [{ name: 'flags', type: '#' }, { name: 'reply_markup', type: 'flags.2?ReplyMarkup' }],
      type: 'InputBotInlineMessage'
    },
    '1297858060': {
      id: 1297858060,
      predicate: 'privacyValueAllowUsers',
      params: [{ name: 'users', type: 'Vector<int>' }],
      type: 'PrivacyRule'
    },
    '1314881805': {
      id: 1314881805,
      predicate: 'payments.paymentResult',
      params: [{ name: 'updates', type: 'Updates' }],
      type: 'payments.PaymentResult'
    },
    '1318109142': {
      id: 1318109142,
      predicate: 'updateMessageID',
      params: [{ name: 'id', type: 'int' }, { name: 'random_id', type: 'long' }],
      type: 'Update'
    },
    '1326562017': { id: 1326562017, predicate: 'userProfilePhotoEmpty', params: [], type: 'UserProfilePhoto' },
    '1329878739': {
      id: 1329878739,
      predicate: 'pageBlockPullquote',
      params: [{ name: 'text', type: 'RichText' }, { name: 'caption', type: 'RichText' }],
      type: 'PageBlock'
    },
    '1335282456': { id: 1335282456, predicate: 'inputPrivacyKeyStatusTimestamp', params: [], type: 'InputPrivacyKey' },
    '1336154098': {
      id: 1336154098,
      predicate: 'inputBotInlineResultGame',
      params: [{ name: 'id', type: 'string' }, { name: 'short_name', type: 'string' }, {
        name: 'send_message',
        type: 'InputBotInlineMessage'
      }],
      type: 'InputBotInlineResult'
    },
    '1338747336': {
      id: 1338747336,
      predicate: 'messages.archivedStickers',
      params: [{ name: 'count', type: 'int' }, { name: 'sets', type: 'Vector<StickerSetCovered>' }],
      type: 'messages.ArchivedStickers'
    },
    '1342771681': {
      id: 1342771681,
      predicate: 'payments.paymentReceipt',
      params: [{ name: 'flags', type: '#' }, { name: 'date', type: 'int' }, {
        name: 'bot_id',
        type: 'int'
      }, { name: 'invoice', type: 'Invoice' }, { name: 'provider_id', type: 'int' }, {
        name: 'info',
        type: 'flags.0?PaymentRequestedInfo'
      }, { name: 'shipping', type: 'flags.1?ShippingOption' }, {
        name: 'currency',
        type: 'string'
      }, { name: 'total_amount', type: 'long' }, { name: 'credentials_title', type: 'string' }, {
        name: 'users',
        type: 'Vector<User>'
      }],
      type: 'payments.PaymentReceipt'
    },
    '1343122938': { id: 1343122938, predicate: 'privacyKeyChatInvite', params: [], type: 'PrivacyKey' },
    '1355435489': {
      id: 1355435489,
      predicate: 'phoneCallDiscarded',
      params: [{ name: 'flags', type: '#' }, { name: 'need_rating', type: 'flags.2?true' }, {
        name: 'need_debug',
        type: 'flags.3?true'
      }, { name: 'id', type: 'long' }, { name: 'reason', type: 'flags.0?PhoneCallDiscardReason' }, {
        name: 'duration',
        type: 'flags.1?int'
      }],
      type: 'PhoneCall'
    },
    '1358175439': {
      id: 1358175439,
      predicate: 'keyboardButtonGame',
      params: [{ name: 'text', type: 'string' }],
      type: 'KeyboardButton'
    },
    '1358283666': { id: 1358283666, predicate: 'inputMessagesFilterVoice', params: [], type: 'MessagesFilter' },
    '1371385889': {
      id: 1371385889,
      predicate: 'messageActionChatMigrateTo',
      params: [{ name: 'channel_id', type: 'int' }],
      type: 'MessageAction'
    },
    '1384777335': { id: 1384777335, predicate: 'storage.fileMp3', params: [], type: 'storage.FileType' },
    '1398007207': {
      id: 1398007207,
      predicate: 'auth.sentCodeTypeCall',
      params: [{ name: 'length', type: 'int' }],
      type: 'auth.SentCodeType'
    },
    '1399245077': {
      id: 1399245077,
      predicate: 'phoneCallEmpty',
      params: [{ name: 'id', type: 'long' }],
      type: 'PhoneCall'
    },
    '1406570614': {
      id: 1406570614,
      predicate: 'fileLocation',
      params: [{ name: 'dc_id', type: 'int' }, { name: 'volume_id', type: 'long' }, {
        name: 'local_id',
        type: 'int'
      }, { name: 'secret', type: 'long' }],
      type: 'FileLocation'
    },
    '1417832080': {
      id: 1417832080,
      predicate: 'updateBotInlineQuery',
      params: [{ name: 'flags', type: '#' }, { name: 'query_id', type: 'long' }, {
        name: 'user_id',
        type: 'int'
      }, { name: 'query', type: 'string' }, { name: 'geo', type: 'flags.0?GeoPoint' }, {
        name: 'offset',
        type: 'string'
      }],
      type: 'Update'
    },
    '1427671598': {
      id: 1427671598,
      predicate: 'channelAdminLogEventActionChangeAbout',
      params: [{ name: 'prev_value', type: 'string' }, { name: 'new_value', type: 'string' }],
      type: 'ChannelAdminLogEventAction'
    },
    '1430961007': {
      id: 1430961007,
      predicate: 'account.privacyRules',
      params: [{ name: 'rules', type: 'Vector<PrivacyRule>' }, { name: 'users', type: 'Vector<User>' }],
      type: 'account.PrivacyRules'
    },
    '1433323434': {
      id: 1433323434,
      predicate: 'pageFull',
      params: [{ name: 'blocks', type: 'Vector<PageBlock>' }, {
        name: 'photos',
        type: 'Vector<Photo>'
      }, { name: 'documents', type: 'Vector<Document>' }],
      type: 'Page'
    },
    '1442983757': {
      id: 1442983757,
      predicate: 'updateLangPack',
      params: [{ name: 'difference', type: 'LangPackDifference' }],
      type: 'Update'
    },
    '1443858741': {
      id: 1443858741,
      predicate: 'messages.sentEncryptedMessage',
      params: [{ name: 'date', type: 'int' }],
      type: 'messages.SentEncryptedMessage'
    },
    '1444661369': {
      id: 1444661369,
      predicate: 'contactBlocked',
      params: [{ name: 'user_id', type: 'int' }, { name: 'date', type: 'int' }],
      type: 'ContactBlocked'
    },
    '1450380236': { id: 1450380236, predicate: 'null', params: [], type: 'Null' },
    '1457575028': {
      id: 1457575028,
      predicate: 'messageMediaGeo',
      params: [{ name: 'geo', type: 'GeoPoint' }],
      type: 'MessageMedia'
    },
    '1458172132': { id: 1458172132, predicate: 'inputMessagesFilterPhotoVideo', params: [], type: 'MessagesFilter' },
    '1461528386': { id: 1461528386, predicate: 'updateReadFeaturedStickers', params: [], type: 'Update' },
    '1462101002': {
      id: 1462101002,
      predicate: 'cdnConfig',
      params: [{ name: 'public_keys', type: 'Vector<CdnPublicKey>' }],
      type: 'CdnConfig'
    },
    '1471006352': {
      id: 1471006352,
      predicate: 'phoneCallDiscardReasonHangup',
      params: [],
      type: 'PhoneCallDiscardReason'
    },
    '1474492012': { id: 1474492012, predicate: 'inputMessagesFilterEmpty', params: [], type: 'MessagesFilter' },
    '1489977929': {
      id: 1489977929,
      predicate: 'channelBannedRights',
      params: [{ name: 'flags', type: '#' }, { name: 'view_messages', type: 'flags.0?true' }, {
        name: 'send_messages',
        type: 'flags.1?true'
      }, { name: 'send_media', type: 'flags.2?true' }, {
        name: 'send_stickers',
        type: 'flags.3?true'
      }, { name: 'send_gifs', type: 'flags.4?true' }, {
        name: 'send_games',
        type: 'flags.5?true'
      }, { name: 'send_inline', type: 'flags.6?true' }, {
        name: 'embed_links',
        type: 'flags.7?true'
      }, { name: 'until_date', type: 'int' }],
      type: 'ChannelBannedRights'
    },
    '1490799288': { id: 1490799288, predicate: 'inputReportReasonSpam', params: [], type: 'ReportReason' },
    '1493171408': {
      id: 1493171408,
      predicate: 'highScore',
      params: [{ name: 'pos', type: 'int' }, { name: 'user_id', type: 'int' }, { name: 'score', type: 'int' }],
      type: 'HighScore'
    },
    '1511503333': {
      id: 1511503333,
      predicate: 'inputEncryptedFile',
      params: [{ name: 'id', type: 'long' }, { name: 'access_hash', type: 'long' }],
      type: 'InputEncryptedFile'
    },
    '1516793212': {
      id: 1516793212,
      predicate: 'chatInviteAlready',
      params: [{ name: 'chat', type: 'Chat' }],
      type: 'ChatInvite'
    },
    '1523279502': {
      id: 1523279502,
      predicate: 'inputMediaDocument',
      params: [{ name: 'flags', type: '#' }, { name: 'id', type: 'InputDocument' }, {
        name: 'caption',
        type: 'string'
      }, { name: 'ttl_seconds', type: 'flags.0?int' }],
      type: 'InputMedia'
    },
    '1548249383': {
      id: 1548249383,
      predicate: 'updateUserTyping',
      params: [{ name: 'user_id', type: 'int' }, { name: 'action', type: 'SendMessageAction' }],
      type: 'Update'
    },
    '1558266229': {
      id: 1558266229,
      predicate: 'popularContact',
      params: [{ name: 'client_id', type: 'long' }, { name: 'importers', type: 'int' }],
      type: 'PopularContact'
    },
    '1558317424': {
      id: 1558317424,
      predicate: 'messages.recentStickers',
      params: [{ name: 'hash', type: 'int' }, { name: 'stickers', type: 'Vector<Document>' }],
      type: 'messages.RecentStickers'
    },
    '1563376297': {
      id: 1563376297,
      predicate: 'updateBotPrecheckoutQuery',
      params: [{ name: 'flags', type: '#' }, { name: 'query_id', type: 'long' }, {
        name: 'user_id',
        type: 'int'
      }, { name: 'payload', type: 'bytes' }, {
        name: 'info',
        type: 'flags.0?PaymentRequestedInfo'
      }, { name: 'shipping_option_id', type: 'flags.1?string' }, {
        name: 'currency',
        type: 'string'
      }, { name: 'total_amount', type: 'long' }],
      type: 'Update'
    },
    '1567990072': {
      id: 1567990072,
      predicate: 'updates.differenceEmpty',
      params: [{ name: 'date', type: 'int' }, { name: 'seq', type: 'int' }],
      type: 'updates.Difference'
    },
    '1568467877': {
      id: 1568467877,
      predicate: 'channelAdminRights',
      params: [{ name: 'flags', type: '#' }, { name: 'change_info', type: 'flags.0?true' }, {
        name: 'post_messages',
        type: 'flags.1?true'
      }, { name: 'edit_messages', type: 'flags.2?true' }, {
        name: 'delete_messages',
        type: 'flags.3?true'
      }, { name: 'ban_users', type: 'flags.4?true' }, {
        name: 'invite_users',
        type: 'flags.5?true'
      }, { name: 'invite_link', type: 'flags.6?true' }, {
        name: 'pin_messages',
        type: 'flags.7?true'
      }, { name: 'add_admins', type: 'flags.9?true' }],
      type: 'ChannelAdminRights'
    },
    '1577067778': {
      id: 1577067778,
      predicate: 'auth.sentCode',
      params: [{ name: 'flags', type: '#' }, { name: 'phone_registered', type: 'flags.0?true' }, {
        name: 'type',
        type: 'auth.SentCodeType'
      }, { name: 'phone_code_hash', type: 'string' }, {
        name: 'next_type',
        type: 'flags.1?auth.CodeType'
      }, { name: 'timeout', type: 'flags.2?int' }],
      type: 'auth.SentCode'
    },
    '1585262393': {
      id: 1585262393,
      predicate: 'messageMediaContact',
      params: [{ name: 'phone_number', type: 'string' }, { name: 'first_name', type: 'string' }, {
        name: 'last_name',
        type: 'string'
      }, { name: 'user_id', type: 'int' }],
      type: 'MessageMedia'
    },
    '1594340540': {
      id: 1594340540,
      predicate: 'webPage',
      params: [{ name: 'flags', type: '#' }, { name: 'id', type: 'long' }, {
        name: 'url',
        type: 'string'
      }, { name: 'display_url', type: 'string' }, { name: 'hash', type: 'int' }, {
        name: 'type',
        type: 'flags.0?string'
      }, { name: 'site_name', type: 'flags.1?string' }, {
        name: 'title',
        type: 'flags.2?string'
      }, { name: 'description', type: 'flags.3?string' }, { name: 'photo', type: 'flags.4?Photo' }, {
        name: 'embed_url',
        type: 'flags.5?string'
      }, { name: 'embed_type', type: 'flags.5?string' }, {
        name: 'embed_width',
        type: 'flags.6?int'
      }, { name: 'embed_height', type: 'flags.6?int' }, { name: 'duration', type: 'flags.7?int' }, {
        name: 'author',
        type: 'flags.8?string'
      }, { name: 'document', type: 'flags.9?Document' }, { name: 'cached_page', type: 'flags.10?Page' }],
      type: 'WebPage'
    },
    '1599050311': { id: 1599050311, predicate: 'contactLinkUnknown', params: [], type: 'ContactLink' },
    '1632839530': {
      id: 1632839530,
      predicate: 'chatPhoto',
      params: [{ name: 'photo_small', type: 'FileLocation' }, { name: 'photo_big', type: 'FileLocation' }],
      type: 'ChatPhoto'
    },
    '1653390447': {
      id: 1653390447,
      predicate: 'sendMessageChooseContactAction',
      params: [],
      type: 'SendMessageAction'
    },
    '1656358105': {
      id: 1656358105,
      predicate: 'updateNewChannelMessage',
      params: [{ name: 'message', type: 'Message' }, { name: 'pts', type: 'int' }, { name: 'pts_count', type: 'int' }],
      type: 'Update'
    },
    '1662091044': {
      id: 1662091044,
      predicate: 'wallPaperSolid',
      params: [{ name: 'id', type: 'int' }, { name: 'title', type: 'string' }, {
        name: 'bg_color',
        type: 'int'
      }, { name: 'color', type: 'int' }],
      type: 'WallPaper'
    },
    '1662637586': {
      id: 1662637586,
      predicate: 'documentAttributeSticker',
      params: [{ name: 'flags', type: '#' }, { name: 'mask', type: 'flags.1?true' }, {
        name: 'alt',
        type: 'string'
      }, { name: 'stickerset', type: 'InputStickerSet' }, { name: 'mask_coords', type: 'flags.0?MaskCoords' }],
      type: 'DocumentAttribute'
    },
    '1678812626': {
      id: 1678812626,
      predicate: 'stickerSetCovered',
      params: [{ name: 'set', type: 'StickerSet' }, { name: 'cover', type: 'Document' }],
      type: 'StickerSetCovered'
    },
    '1690108678': {
      id: 1690108678,
      predicate: 'inputEncryptedFileUploaded',
      params: [{ name: 'id', type: 'long' }, { name: 'parts', type: 'int' }, {
        name: 'md5_checksum',
        type: 'string'
      }, { name: 'key_fingerprint', type: 'int' }],
      type: 'InputEncryptedFile'
    },
    '1692693954': {
      id: 1692693954,
      predicate: 'messageEntityEmail',
      params: [{ name: 'offset', type: 'int' }, { name: 'length', type: 'int' }],
      type: 'MessageEntity'
    },
    '1694474197': {
      id: 1694474197,
      predicate: 'messages.chats',
      params: [{ name: 'chats', type: 'Vector<Chat>' }],
      type: 'messages.Chats'
    },
    '1698855810': { id: 1698855810, predicate: 'privacyValueAllowAll', params: [], type: 'PrivacyRule' },
    '1730456516': {
      id: 1730456516,
      predicate: 'textBold',
      params: [{ name: 'text', type: 'RichText' }],
      type: 'RichText'
    },
    '1748655686': {
      id: 1748655686,
      predicate: 'keyboardButtonCallback',
      params: [{ name: 'text', type: 'string' }, { name: 'data', type: 'bytes' }],
      type: 'KeyboardButton'
    },
    '1753886890': {
      id: 1753886890,
      predicate: 'updateNewStickerSet',
      params: [{ name: 'stickerset', type: 'messages.StickerSet' }],
      type: 'Update'
    },
    '1757493555': {
      id: 1757493555,
      predicate: 'updateReadMessagesContents',
      params: [{ name: 'messages', type: 'Vector<int>' }, { name: 'pts', type: 'int' }, {
        name: 'pts_count',
        type: 'int'
      }],
      type: 'Update'
    },
    '1776236393': { id: 1776236393, predicate: 'chatInviteEmpty', params: [], type: 'ExportedChatInvite' },
    '1783299128': {
      id: 1783299128,
      predicate: 'channelAdminLogEventActionChangeUsername',
      params: [{ name: 'prev_value', type: 'string' }, { name: 'new_value', type: 'string' }],
      type: 'ChannelAdminLogEventAction'
    },
    '1788705589': {
      id: 1788705589,
      predicate: 'updates.channelDifferenceTooLong',
      params: [{ name: 'flags', type: '#' }, { name: 'final', type: 'flags.0?true' }, {
        name: 'pts',
        type: 'int'
      }, { name: 'timeout', type: 'flags.1?int' }, { name: 'top_message', type: 'int' }, {
        name: 'read_inbox_max_id',
        type: 'int'
      }, { name: 'read_outbox_max_id', type: 'int' }, {
        name: 'unread_count',
        type: 'int'
      }, { name: 'unread_mentions_count', type: 'int' }, { name: 'messages', type: 'Vector<Message>' }, {
        name: 'chats',
        type: 'Vector<Chat>'
      }, { name: 'users', type: 'Vector<User>' }],
      type: 'updates.ChannelDifference'
    },
    '1800845601': {
      id: 1800845601,
      predicate: 'payments.paymentVerficationNeeded',
      params: [{ name: 'url', type: 'string' }],
      type: 'payments.PaymentResult'
    },
    '1815593308': {
      id: 1815593308,
      predicate: 'documentAttributeImageSize',
      params: [{ name: 'w', type: 'int' }, { name: 'h', type: 'int' }],
      type: 'DocumentAttribute'
    },
    '1816074681': {
      id: 1816074681,
      predicate: 'textFixed',
      params: [{ name: 'text', type: 'RichText' }],
      type: 'RichText'
    },
    '1816636575': {
      id: 1816636575,
      predicate: 'langPackStringPluralized',
      params: [{ name: 'flags', type: '#' }, { name: 'key', type: 'string' }, {
        name: 'zero_value',
        type: 'flags.0?string'
      }, { name: 'one_value', type: 'flags.1?string' }, {
        name: 'two_value',
        type: 'flags.2?string'
      }, { name: 'few_value', type: 'flags.3?string' }, {
        name: 'many_value',
        type: 'flags.4?string'
      }, { name: 'other_value', type: 'string' }],
      type: 'LangPackString'
    },
    '1827637959': {
      id: 1827637959,
      predicate: 'messageEntityBotCommand',
      params: [{ name: 'offset', type: 'int' }, { name: 'length', type: 'int' }],
      type: 'MessageEntity'
    },
    '1828732223': {
      id: 1828732223,
      predicate: 'phoneCallAccepted',
      params: [{ name: 'id', type: 'long' }, { name: 'access_hash', type: 'long' }, {
        name: 'date',
        type: 'int'
      }, { name: 'admin_id', type: 'int' }, { name: 'participant_id', type: 'int' }, {
        name: 'g_b',
        type: 'bytes'
      }, { name: 'protocol', type: 'PhoneCallProtocol' }],
      type: 'PhoneCall'
    },
    '1830677896': { id: 1830677896, predicate: 'peerNotifyEventsAll', params: [], type: 'PeerNotifyEvents' },
    '1851755554': {
      id: 1851755554,
      predicate: 'updateChatParticipantDelete',
      params: [{ name: 'chat_id', type: 'int' }, { name: 'user_id', type: 'int' }, { name: 'version', type: 'int' }],
      type: 'Update'
    },
    '1855224129': {
      id: 1855224129,
      predicate: 'updateChatAdmins',
      params: [{ name: 'chat_id', type: 'int' }, { name: 'enabled', type: 'Bool' }, { name: 'version', type: 'int' }],
      type: 'Update'
    },
    '1859134776': {
      id: 1859134776,
      predicate: 'messageEntityUrl',
      params: [{ name: 'offset', type: 'int' }, { name: 'length', type: 'int' }],
      type: 'MessageEntity'
    },
    '1868782349': {
      id: 1868782349,
      predicate: 'messageEntityHashtag',
      params: [{ name: 'offset', type: 'int' }, { name: 'length', type: 'int' }],
      type: 'MessageEntity'
    },
    '1887741886': { id: 1887741886, predicate: 'updateContactsReset', params: [], type: 'Update' },
    '1889215493': {
      id: 1889215493,
      predicate: 'channelAdminLogEventActionEditMessage',
      params: [{ name: 'prev_message', type: 'Message' }, { name: 'new_message', type: 'Message' }],
      type: 'ChannelAdminLogEventAction'
    },
    '1889961234': { id: 1889961234, predicate: 'peerNotifySettingsEmpty', params: [], type: 'PeerNotifySettings' },
    '1890305021': {
      id: 1890305021,
      predicate: 'pageBlockTitle',
      params: [{ name: 'text', type: 'RichText' }],
      type: 'PageBlock'
    },
    '1891070632': {
      id: 1891070632,
      predicate: 'contacts.topPeers',
      params: [{ name: 'categories', type: 'Vector<TopPeerCategoryPeers>' }, {
        name: 'chats',
        type: 'Vector<Chat>'
      }, { name: 'users', type: 'Vector<User>' }],
      type: 'contacts.TopPeers'
    },
    '1910543603': {
      id: 1910543603,
      predicate: 'messages.dialogsSlice',
      params: [{ name: 'count', type: 'int' }, { name: 'dialogs', type: 'Vector<Dialog>' }, {
        name: 'messages',
        type: 'Vector<Message>'
      }, { name: 'chats', type: 'Vector<Chat>' }, { name: 'users', type: 'Vector<User>' }],
      type: 'messages.Dialogs'
    },
    '1918567619': {
      id: 1918567619,
      predicate: 'updatesCombined',
      params: [{ name: 'updates', type: 'Vector<Update>' }, { name: 'users', type: 'Vector<User>' }, {
        name: 'chats',
        type: 'Vector<Chat>'
      }, { name: 'date', type: 'int' }, { name: 'seq_start', type: 'int' }, { name: 'seq', type: 'int' }],
      type: 'Updates'
    },
    '1923290508': { id: 1923290508, predicate: 'auth.codeTypeSms', params: [], type: 'auth.CodeType' },
    '1928391342': { id: 1928391342, predicate: 'inputDocumentEmpty', params: [], type: 'InputDocument' },
    '1938967520': {
      id: 1938967520,
      predicate: 'messageEntityPre',
      params: [{ name: 'offset', type: 'int' }, { name: 'length', type: 'int' }, { name: 'language', type: 'string' }],
      type: 'MessageEntity'
    },
    '1948046307': { id: 1948046307, predicate: 'auth.codeTypeCall', params: [], type: 'auth.CodeType' },
    '1950782688': {
      id: 1950782688,
      predicate: 'textPlain',
      params: [{ name: 'text', type: 'string' }],
      type: 'RichText'
    },
    '1957577280': {
      id: 1957577280,
      predicate: 'updates',
      params: [{ name: 'updates', type: 'Vector<Update>' }, { name: 'users', type: 'Vector<User>' }, {
        name: 'chats',
        type: 'Vector<Chat>'
      }, { name: 'date', type: 'int' }, { name: 'seq', type: 'int' }],
      type: 'Updates'
    },
    '1959820384': { id: 1959820384, predicate: 'notifyAll', params: [], type: 'NotifyPeer' },
    '1990644519': {
      id: 1990644519,
      predicate: 'messageEntityTextUrl',
      params: [{ name: 'offset', type: 'int' }, { name: 'length', type: 'int' }, { name: 'url', type: 'string' }],
      type: 'MessageEntity'
    },
    '1996904104': {
      id: 1996904104,
      predicate: 'inputAppEvent',
      params: [{ name: 'time', type: 'double' }, { name: 'type', type: 'string' }, {
        name: 'peer',
        type: 'long'
      }, { name: 'data', type: 'string' }],
      type: 'InputAppEvent'
    },
    '2002815875': {
      id: 2002815875,
      predicate: 'keyboardButtonRow',
      params: [{ name: 'buttons', type: 'Vector<KeyboardButton>' }],
      type: 'KeyboardButtonRow'
    },
    '2009052699': {
      id: 2009052699,
      predicate: 'photoSize',
      params: [{ name: 'type', type: 'string' }, { name: 'location', type: 'FileLocation' }, {
        name: 'w',
        type: 'int'
      }, { name: 'h', type: 'int' }, { name: 'size', type: 'int' }],
      type: 'PhotoSize'
    },
    '2010127419': {
      id: 2010127419,
      predicate: 'contacts.importedContacts',
      params: [{ name: 'imported', type: 'Vector<ImportedContact>' }, {
        name: 'popular_invites',
        type: 'Vector<PopularContact>'
      }, { name: 'retry_contacts', type: 'Vector<long>' }, { name: 'users', type: 'Vector<User>' }],
      type: 'contacts.ImportedContacts'
    },
    '2011940674': { id: 2011940674, predicate: 'userStatusLastMonth', params: [], type: 'UserStatus' },
    '2012136335': {
      id: 2012136335,
      predicate: 'cdnFileHash',
      params: [{ name: 'offset', type: 'int' }, { name: 'limit', type: 'int' }, { name: 'hash', type: 'bytes' }],
      type: 'CdnFileHash'
    },
    '2027216577': {
      id: 2027216577,
      predicate: 'updateShort',
      params: [{ name: 'update', type: 'Update' }, { name: 'date', type: 'int' }],
      type: 'Updates'
    },
    '2031269663': {
      id: 2031269663,
      predicate: 'messageMediaVenue',
      params: [{ name: 'geo', type: 'GeoPoint' }, { name: 'title', type: 'string' }, {
        name: 'address',
        type: 'string'
      }, { name: 'provider', type: 'string' }, { name: 'venue_id', type: 'string' }],
      type: 'MessageMedia'
    },
    '2054952868': { id: 2054952868, predicate: 'inputMessagesFilterRoundVoice', params: [], type: 'MessagesFilter' },
    '2072935910': {
      id: 2072935910,
      predicate: 'inputPeerUser',
      params: [{ name: 'user_id', type: 'int' }, { name: 'access_hash', type: 'long' }],
      type: 'InputPeer'
    },
    '2079516406': {
      id: 2079516406,
      predicate: 'authorization',
      params: [{ name: 'hash', type: 'long' }, { name: 'flags', type: 'int' }, {
        name: 'device_model',
        type: 'string'
      }, { name: 'platform', type: 'string' }, { name: 'system_version', type: 'string' }, {
        name: 'api_id',
        type: 'int'
      }, { name: 'app_name', type: 'string' }, { name: 'app_version', type: 'string' }, {
        name: 'date_created',
        type: 'int'
      }, { name: 'date_active', type: 'int' }, { name: 'ip', type: 'string' }, {
        name: 'country',
        type: 'string'
      }, { name: 'region', type: 'string' }],
      type: 'Authorization'
    },
    '2081952796': {
      id: 2081952796,
      predicate: 'account.password',
      params: [{ name: 'current_salt', type: 'bytes' }, { name: 'new_salt', type: 'bytes' }, {
        name: 'hint',
        type: 'string'
      }, { name: 'has_recovery', type: 'Bool' }, { name: 'email_unconfirmed_pattern', type: 'string' }],
      type: 'account.Password'
    },
    '2084836563': {
      id: 2084836563,
      predicate: 'messageMediaDocument',
      params: [{ name: 'flags', type: '#' }, { name: 'document', type: 'flags.0?Document' }, {
        name: 'caption',
        type: 'flags.1?string'
      }, { name: 'ttl_seconds', type: 'flags.2?int' }],
      type: 'MessageMedia'
    },
    '2086234950': {
      id: 2086234950,
      predicate: 'fileLocationUnavailable',
      params: [{ name: 'volume_id', type: 'long' }, { name: 'local_id', type: 'int' }, {
        name: 'secret',
        type: 'long'
      }],
      type: 'FileLocation'
    },
    '2104790276': {
      id: 2104790276,
      predicate: 'dataJSON',
      params: [{ name: 'data', type: 'string' }],
      type: 'DataJSON'
    },
    '2107670217': { id: 2107670217, predicate: 'inputPeerSelf', params: [], type: 'InputPeer' },
    '2120376535': {
      id: 2120376535,
      predicate: 'textConcat',
      params: [{ name: 'texts', type: 'Vector<RichText>' }],
      type: 'RichText'
    },
    '2129714567': { id: 2129714567, predicate: 'inputMessagesFilterUrl', params: [], type: 'MessagesFilter' },
    '2131196633': {
      id: 2131196633,
      predicate: 'contacts.resolvedPeer',
      params: [{ name: 'peer', type: 'Peer' }, { name: 'chats', type: 'Vector<Chat>' }, {
        name: 'users',
        type: 'Vector<User>'
      }],
      type: 'contacts.ResolvedPeer'
    },
    '2134579434': { id: 2134579434, predicate: 'inputPeerEmpty', params: [], type: 'InputPeer' },
    '2139689491': {
      id: 2139689491,
      predicate: 'updateWebPage',
      params: [{ name: 'webpage', type: 'WebPage' }, { name: 'pts', type: 'int' }, { name: 'pts_count', type: 'int' }],
      type: 'Update'
    },
    '2144015272': {
      id: 2144015272,
      predicate: 'messageActionChatEditPhoto',
      params: [{ name: 'photo', type: 'Photo' }],
      type: 'MessageAction'
    },
    '-1132882121': { id: -1132882121, predicate: 'boolFalse', params: [], type: 'Bool' },
    '-1720552011': { id: -1720552011, predicate: 'boolTrue', params: [], type: 'Bool' },
    '-994444869': {
      id: -994444869,
      predicate: 'error',
      params: [{ name: 'code', type: 'int' }, { name: 'text', type: 'string' }],
      type: 'Error'
    },
    '-1182234929': { id: -1182234929, predicate: 'inputUserEmpty', params: [], type: 'InputUser' },
    '-138301121': { id: -138301121, predicate: 'inputUserSelf', params: [], type: 'InputUser' },
    '-208488460': {
      id: -208488460,
      predicate: 'inputPhoneContact',
      params: [{ name: 'client_id', type: 'long' }, { name: 'phone', type: 'string' }, {
        name: 'first_name',
        type: 'string'
      }, { name: 'last_name', type: 'string' }],
      type: 'InputContact'
    },
    '-181407105': {
      id: -181407105,
      predicate: 'inputFile',
      params: [{ name: 'id', type: 'long' }, { name: 'parts', type: 'int' }, {
        name: 'name',
        type: 'string'
      }, { name: 'md5_checksum', type: 'string' }],
      type: 'InputFile'
    },
    '-1771768449': { id: -1771768449, predicate: 'inputMediaEmpty', params: [], type: 'InputMedia' },
    '-2114308294': {
      id: -2114308294,
      predicate: 'inputMediaPhoto',
      params: [{ name: 'flags', type: '#' }, { name: 'id', type: 'InputPhoto' }, {
        name: 'caption',
        type: 'string'
      }, { name: 'ttl_seconds', type: 'flags.0?int' }],
      type: 'InputMedia'
    },
    '-104578748': {
      id: -104578748,
      predicate: 'inputMediaGeoPoint',
      params: [{ name: 'geo_point', type: 'InputGeoPoint' }],
      type: 'InputMedia'
    },
    '-1494984313': {
      id: -1494984313,
      predicate: 'inputMediaContact',
      params: [{ name: 'phone_number', type: 'string' }, { name: 'first_name', type: 'string' }, {
        name: 'last_name',
        type: 'string'
      }],
      type: 'InputMedia'
    },
    '-1837345356': {
      id: -1837345356,
      predicate: 'inputChatUploadedPhoto',
      params: [{ name: 'file', type: 'InputFile' }],
      type: 'InputChatPhoto'
    },
    '-1991004873': {
      id: -1991004873,
      predicate: 'inputChatPhoto',
      params: [{ name: 'id', type: 'InputPhoto' }],
      type: 'InputChatPhoto'
    },
    '-457104426': { id: -457104426, predicate: 'inputGeoPointEmpty', params: [], type: 'InputGeoPoint' },
    '-206066487': {
      id: -206066487,
      predicate: 'inputGeoPoint',
      params: [{ name: 'lat', type: 'double' }, { name: 'long', type: 'double' }],
      type: 'InputGeoPoint'
    },
    '-74070332': {
      id: -74070332,
      predicate: 'inputPhoto',
      params: [{ name: 'id', type: 'long' }, { name: 'access_hash', type: 'long' }],
      type: 'InputPhoto'
    },
    '-1649296275': { id: -1649296275, predicate: 'peerUser', params: [{ name: 'user_id', type: 'int' }], type: 'Peer' },
    '-1160714821': { id: -1160714821, predicate: 'peerChat', params: [{ name: 'chat_id', type: 'int' }], type: 'Peer' },
    '-1432995067': { id: -1432995067, predicate: 'storage.fileUnknown', params: [], type: 'storage.FileType' },
    '-891180321': { id: -891180321, predicate: 'storage.fileGif', params: [], type: 'storage.FileType' },
    '-1278304028': { id: -1278304028, predicate: 'storage.fileMp4', params: [], type: 'storage.FileType' },
    '-715532088': {
      id: -715532088,
      predicate: 'userProfilePhoto',
      params: [{ name: 'photo_id', type: 'long' }, { name: 'photo_small', type: 'FileLocation' }, {
        name: 'photo_big',
        type: 'FileLocation'
      }],
      type: 'UserProfilePhoto'
    },
    '-306628279': {
      id: -306628279,
      predicate: 'userStatusOnline',
      params: [{ name: 'expires', type: 'int' }],
      type: 'UserStatus'
    },
    '-1683826688': { id: -1683826688, predicate: 'chatEmpty', params: [{ name: 'id', type: 'int' }], type: 'Chat' },
    '-652419756': {
      id: -652419756,
      predicate: 'chat',
      params: [{ name: 'flags', type: '#' }, { name: 'creator', type: 'flags.0?true' }, {
        name: 'kicked',
        type: 'flags.1?true'
      }, { name: 'left', type: 'flags.2?true' }, { name: 'admins_enabled', type: 'flags.3?true' }, {
        name: 'admin',
        type: 'flags.4?true'
      }, { name: 'deactivated', type: 'flags.5?true' }, { name: 'id', type: 'int' }, {
        name: 'title',
        type: 'string'
      }, { name: 'photo', type: 'ChatPhoto' }, { name: 'participants_count', type: 'int' }, {
        name: 'date',
        type: 'int'
      }, { name: 'version', type: 'int' }, { name: 'migrated_to', type: 'flags.6?InputChannel' }],
      type: 'Chat'
    },
    '-925415106': {
      id: -925415106,
      predicate: 'chatParticipant',
      params: [{ name: 'user_id', type: 'int' }, { name: 'inviter_id', type: 'int' }, { name: 'date', type: 'int' }],
      type: 'ChatParticipant'
    },
    '-57668565': {
      id: -57668565,
      predicate: 'chatParticipantsForbidden',
      params: [{ name: 'flags', type: '#' }, { name: 'chat_id', type: 'int' }, {
        name: 'self_participant',
        type: 'flags.0?ChatParticipant'
      }],
      type: 'ChatParticipants'
    },
    '-2082087340': {
      id: -2082087340,
      predicate: 'messageEmpty',
      params: [{ name: 'id', type: 'int' }],
      type: 'Message'
    },
    '-1864508399': {
      id: -1864508399,
      predicate: 'message',
      params: [{ name: 'flags', type: '#' }, { name: 'out', type: 'flags.1?true' }, {
        name: 'mentioned',
        type: 'flags.4?true'
      }, { name: 'media_unread', type: 'flags.5?true' }, { name: 'silent', type: 'flags.13?true' }, {
        name: 'post',
        type: 'flags.14?true'
      }, { name: 'id', type: 'int' }, { name: 'from_id', type: 'flags.8?int' }, {
        name: 'to_id',
        type: 'Peer'
      }, { name: 'fwd_from', type: 'flags.2?MessageFwdHeader' }, {
        name: 'via_bot_id',
        type: 'flags.11?int'
      }, { name: 'reply_to_msg_id', type: 'flags.3?int' }, { name: 'date', type: 'int' }, {
        name: 'message',
        type: 'string'
      }, { name: 'media', type: 'flags.9?MessageMedia' }, {
        name: 'reply_markup',
        type: 'flags.6?ReplyMarkup'
      }, { name: 'entities', type: 'flags.7?Vector<MessageEntity>' }, {
        name: 'views',
        type: 'flags.10?int'
      }, { name: 'edit_date', type: 'flags.15?int' }, { name: 'post_author', type: 'flags.16?string' }],
      type: 'Message'
    },
    '-1642487306': {
      id: -1642487306,
      predicate: 'messageService',
      params: [{ name: 'flags', type: '#' }, { name: 'out', type: 'flags.1?true' }, {
        name: 'mentioned',
        type: 'flags.4?true'
      }, { name: 'media_unread', type: 'flags.5?true' }, { name: 'silent', type: 'flags.13?true' }, {
        name: 'post',
        type: 'flags.14?true'
      }, { name: 'id', type: 'int' }, { name: 'from_id', type: 'flags.8?int' }, {
        name: 'to_id',
        type: 'Peer'
      }, { name: 'reply_to_msg_id', type: 'flags.3?int' }, { name: 'date', type: 'int' }, {
        name: 'action',
        type: 'MessageAction'
      }],
      type: 'Message'
    },
    '-1256047857': {
      id: -1256047857,
      predicate: 'messageMediaPhoto',
      params: [{ name: 'flags', type: '#' }, { name: 'photo', type: 'flags.0?Photo' }, {
        name: 'caption',
        type: 'flags.1?string'
      }, { name: 'ttl_seconds', type: 'flags.2?int' }],
      type: 'MessageMedia'
    },
    '-1618676578': { id: -1618676578, predicate: 'messageMediaUnsupported', params: [], type: 'MessageMedia' },
    '-1230047312': { id: -1230047312, predicate: 'messageActionEmpty', params: [], type: 'MessageAction' },
    '-1503425638': {
      id: -1503425638,
      predicate: 'messageActionChatCreate',
      params: [{ name: 'title', type: 'string' }, { name: 'users', type: 'Vector<int>' }],
      type: 'MessageAction'
    },
    '-1247687078': {
      id: -1247687078,
      predicate: 'messageActionChatEditTitle',
      params: [{ name: 'title', type: 'string' }],
      type: 'MessageAction'
    },
    '-1780220945': { id: -1780220945, predicate: 'messageActionChatDeletePhoto', params: [], type: 'MessageAction' },
    '-1297179892': {
      id: -1297179892,
      predicate: 'messageActionChatDeleteUser',
      params: [{ name: 'user_id', type: 'int' }],
      type: 'MessageAction'
    },
    '-455150117': {
      id: -455150117,
      predicate: 'dialog',
      params: [{ name: 'flags', type: '#' }, { name: 'pinned', type: 'flags.2?true' }, {
        name: 'peer',
        type: 'Peer'
      }, { name: 'top_message', type: 'int' }, { name: 'read_inbox_max_id', type: 'int' }, {
        name: 'read_outbox_max_id',
        type: 'int'
      }, { name: 'unread_count', type: 'int' }, {
        name: 'unread_mentions_count',
        type: 'int'
      }, { name: 'notify_settings', type: 'PeerNotifySettings' }, { name: 'pts', type: 'flags.0?int' }, {
        name: 'draft',
        type: 'flags.1?DraftMessage'
      }],
      type: 'Dialog'
    },
    '-1836524247': {
      id: -1836524247,
      predicate: 'photo',
      params: [{ name: 'flags', type: '#' }, { name: 'has_stickers', type: 'flags.0?true' }, {
        name: 'id',
        type: 'long'
      }, { name: 'access_hash', type: 'long' }, { name: 'date', type: 'int' }, {
        name: 'sizes',
        type: 'Vector<PhotoSize>'
      }],
      type: 'Photo'
    },
    '-374917894': {
      id: -374917894,
      predicate: 'photoCachedSize',
      params: [{ name: 'type', type: 'string' }, { name: 'location', type: 'FileLocation' }, {
        name: 'w',
        type: 'int'
      }, { name: 'h', type: 'int' }, { name: 'bytes', type: 'bytes' }],
      type: 'PhotoSize'
    },
    '-2128698738': {
      id: -2128698738,
      predicate: 'auth.checkedPhone',
      params: [{ name: 'phone_registered', type: 'Bool' }],
      type: 'auth.CheckedPhone'
    },
    '-855308010': {
      id: -855308010,
      predicate: 'auth.authorization',
      params: [{ name: 'flags', type: '#' }, { name: 'tmp_sessions', type: 'flags.0?int' }, {
        name: 'user',
        type: 'User'
      }],
      type: 'auth.Authorization'
    },
    '-543777747': {
      id: -543777747,
      predicate: 'auth.exportedAuthorization',
      params: [{ name: 'id', type: 'int' }, { name: 'bytes', type: 'bytes' }],
      type: 'auth.ExportedAuthorization'
    },
    '-1195615476': {
      id: -1195615476,
      predicate: 'inputNotifyPeer',
      params: [{ name: 'peer', type: 'InputPeer' }],
      type: 'InputNotifyPeer'
    },
    '-1540769658': { id: -1540769658, predicate: 'inputNotifyAll', params: [], type: 'InputNotifyPeer' },
    '-1378534221': { id: -1378534221, predicate: 'peerNotifyEventsEmpty', params: [], type: 'PeerNotifyEvents' },
    '-1697798976': {
      id: -1697798976,
      predicate: 'peerNotifySettings',
      params: [{ name: 'flags', type: '#' }, { name: 'show_previews', type: 'flags.0?true' }, {
        name: 'silent',
        type: 'flags.1?true'
      }, { name: 'mute_until', type: 'int' }, { name: 'sound', type: 'string' }],
      type: 'PeerNotifySettings'
    },
    '-860866985': {
      id: -860866985,
      predicate: 'wallPaper',
      params: [{ name: 'id', type: 'int' }, { name: 'title', type: 'string' }, {
        name: 'sizes',
        type: 'Vector<PhotoSize>'
      }, { name: 'color', type: 'int' }],
      type: 'WallPaper'
    },
    '-116274796': {
      id: -116274796,
      predicate: 'contact',
      params: [{ name: 'user_id', type: 'int' }, { name: 'mutual', type: 'Bool' }],
      type: 'Contact'
    },
    '-805141448': {
      id: -805141448,
      predicate: 'importedContact',
      params: [{ name: 'user_id', type: 'int' }, { name: 'client_id', type: 'long' }],
      type: 'ImportedContact'
    },
    '-748155807': {
      id: -748155807,
      predicate: 'contactStatus',
      params: [{ name: 'user_id', type: 'int' }, { name: 'status', type: 'UserStatus' }],
      type: 'ContactStatus'
    },
    '-353862078': {
      id: -353862078,
      predicate: 'contacts.contacts',
      params: [{ name: 'contacts', type: 'Vector<Contact>' }, { name: 'saved_count', type: 'int' }, {
        name: 'users',
        type: 'Vector<User>'
      }],
      type: 'contacts.Contacts'
    },
    '-1219778094': {
      id: -1219778094,
      predicate: 'contacts.contactsNotModified',
      params: [],
      type: 'contacts.Contacts'
    },
    '-1878523231': {
      id: -1878523231,
      predicate: 'contacts.blockedSlice',
      params: [{ name: 'count', type: 'int' }, { name: 'blocked', type: 'Vector<ContactBlocked>' }, {
        name: 'users',
        type: 'Vector<User>'
      }],
      type: 'contacts.Blocked'
    },
    '-1938715001': {
      id: -1938715001,
      predicate: 'messages.messages',
      params: [{ name: 'messages', type: 'Vector<Message>' }, { name: 'chats', type: 'Vector<Chat>' }, {
        name: 'users',
        type: 'Vector<User>'
      }],
      type: 'messages.Messages'
    },
    '-438840932': {
      id: -438840932,
      predicate: 'messages.chatFull',
      params: [{ name: 'full_chat', type: 'ChatFull' }, { name: 'chats', type: 'Vector<Chat>' }, {
        name: 'users',
        type: 'Vector<User>'
      }],
      type: 'messages.ChatFull'
    },
    '-1269012015': {
      id: -1269012015,
      predicate: 'messages.affectedHistory',
      params: [{ name: 'pts', type: 'int' }, { name: 'pts_count', type: 'int' }, { name: 'offset', type: 'int' }],
      type: 'messages.AffectedHistory'
    },
    '-1777752804': { id: -1777752804, predicate: 'inputMessagesFilterPhotos', params: [], type: 'MessagesFilter' },
    '-1614803355': { id: -1614803355, predicate: 'inputMessagesFilterVideo', params: [], type: 'MessagesFilter' },
    '-1576161051': {
      id: -1576161051,
      predicate: 'updateDeleteMessages',
      params: [{ name: 'messages', type: 'Vector<int>' }, { name: 'pts', type: 'int' }, {
        name: 'pts_count',
        type: 'int'
      }],
      type: 'Update'
    },
    '-1704596961': {
      id: -1704596961,
      predicate: 'updateChatUserTyping',
      params: [{ name: 'chat_id', type: 'int' }, { name: 'user_id', type: 'int' }, {
        name: 'action',
        type: 'SendMessageAction'
      }],
      type: 'Update'
    },
    '-1489818765': {
      id: -1489818765,
      predicate: 'updateUserName',
      params: [{ name: 'user_id', type: 'int' }, { name: 'first_name', type: 'string' }, {
        name: 'last_name',
        type: 'string'
      }, { name: 'username', type: 'string' }],
      type: 'Update'
    },
    '-1791935732': {
      id: -1791935732,
      predicate: 'updateUserPhoto',
      params: [{ name: 'user_id', type: 'int' }, { name: 'date', type: 'int' }, {
        name: 'photo',
        type: 'UserProfilePhoto'
      }, { name: 'previous', type: 'Bool' }],
      type: 'Update'
    },
    '-1657903163': {
      id: -1657903163,
      predicate: 'updateContactLink',
      params: [{ name: 'user_id', type: 'int' }, { name: 'my_link', type: 'ContactLink' }, {
        name: 'foreign_link',
        type: 'ContactLink'
      }],
      type: 'Update'
    },
    '-1519637954': {
      id: -1519637954,
      predicate: 'updates.state',
      params: [{ name: 'pts', type: 'int' }, { name: 'qts', type: 'int' }, { name: 'date', type: 'int' }, {
        name: 'seq',
        type: 'int'
      }, { name: 'unread_count', type: 'int' }],
      type: 'updates.State'
    },
    '-1459938943': {
      id: -1459938943,
      predicate: 'updates.differenceSlice',
      params: [{ name: 'new_messages', type: 'Vector<Message>' }, {
        name: 'new_encrypted_messages',
        type: 'Vector<EncryptedMessage>'
      }, { name: 'other_updates', type: 'Vector<Update>' }, { name: 'chats', type: 'Vector<Chat>' }, {
        name: 'users',
        type: 'Vector<User>'
      }, { name: 'intermediate_state', type: 'updates.State' }],
      type: 'updates.Difference'
    },
    '-484987010': { id: -484987010, predicate: 'updatesTooLong', params: [], type: 'Updates' },
    '-1857044719': {
      id: -1857044719,
      predicate: 'updateShortMessage',
      params: [{ name: 'flags', type: '#' }, { name: 'out', type: 'flags.1?true' }, {
        name: 'mentioned',
        type: 'flags.4?true'
      }, { name: 'media_unread', type: 'flags.5?true' }, { name: 'silent', type: 'flags.13?true' }, {
        name: 'id',
        type: 'int'
      }, { name: 'user_id', type: 'int' }, { name: 'message', type: 'string' }, {
        name: 'pts',
        type: 'int'
      }, { name: 'pts_count', type: 'int' }, { name: 'date', type: 'int' }, {
        name: 'fwd_from',
        type: 'flags.2?MessageFwdHeader'
      }, { name: 'via_bot_id', type: 'flags.11?int' }, {
        name: 'reply_to_msg_id',
        type: 'flags.3?int'
      }, { name: 'entities', type: 'flags.7?Vector<MessageEntity>' }],
      type: 'Updates'
    },
    '-1913424220': {
      id: -1913424220,
      predicate: 'config',
      params: [{ name: 'flags', type: '#' }, { name: 'phonecalls_enabled', type: 'flags.1?true' }, {
        name: 'date',
        type: 'int'
      }, { name: 'expires', type: 'int' }, { name: 'test_mode', type: 'Bool' }, {
        name: 'this_dc',
        type: 'int'
      }, { name: 'dc_options', type: 'Vector<DcOption>' }, {
        name: 'chat_size_max',
        type: 'int'
      }, { name: 'megagroup_size_max', type: 'int' }, {
        name: 'forwarded_count_max',
        type: 'int'
      }, { name: 'online_update_period_ms', type: 'int' }, {
        name: 'offline_blur_timeout_ms',
        type: 'int'
      }, { name: 'offline_idle_timeout_ms', type: 'int' }, {
        name: 'online_cloud_timeout_ms',
        type: 'int'
      }, { name: 'notify_cloud_delay_ms', type: 'int' }, {
        name: 'notify_default_delay_ms',
        type: 'int'
      }, { name: 'chat_big_size', type: 'int' }, {
        name: 'push_chat_period_ms',
        type: 'int'
      }, { name: 'push_chat_limit', type: 'int' }, { name: 'saved_gifs_limit', type: 'int' }, {
        name: 'edit_time_limit',
        type: 'int'
      }, { name: 'rating_e_decay', type: 'int' }, {
        name: 'stickers_recent_limit',
        type: 'int'
      }, { name: 'stickers_faved_limit', type: 'int' }, {
        name: 'tmp_sessions',
        type: 'flags.0?int'
      }, { name: 'pinned_dialogs_count_max', type: 'int' }, {
        name: 'call_receive_timeout_ms',
        type: 'int'
      }, { name: 'call_ring_timeout_ms', type: 'int' }, {
        name: 'call_connect_timeout_ms',
        type: 'int'
      }, { name: 'call_packet_timeout_ms', type: 'int' }, {
        name: 'me_url_prefix',
        type: 'string'
      }, { name: 'suggested_lang_code', type: 'flags.2?string' }, {
        name: 'lang_pack_version',
        type: 'flags.2?int'
      }, { name: 'disabled_features', type: 'Vector<DisabledFeature>' }],
      type: 'Config'
    },
    '-1910892683': {
      id: -1910892683,
      predicate: 'nearestDc',
      params: [{ name: 'country', type: 'string' }, { name: 'this_dc', type: 'int' }, {
        name: 'nearest_dc',
        type: 'int'
      }],
      type: 'NearestDc'
    },
    '-1987579119': {
      id: -1987579119,
      predicate: 'help.appUpdate',
      params: [{ name: 'id', type: 'int' }, { name: 'critical', type: 'Bool' }, {
        name: 'url',
        type: 'string'
      }, { name: 'text', type: 'string' }],
      type: 'help.AppUpdate'
    },
    '-1000708810': { id: -1000708810, predicate: 'help.noAppUpdate', params: [], type: 'help.AppUpdate' },
    '-265263912': {
      id: -265263912,
      predicate: 'inputPeerNotifyEventsEmpty',
      params: [],
      type: 'InputPeerNotifyEvents'
    },
    '-395694988': { id: -395694988, predicate: 'inputPeerNotifyEventsAll', params: [], type: 'InputPeerNotifyEvents' },
    '-1916114267': {
      id: -1916114267,
      predicate: 'photos.photos',
      params: [{ name: 'photos', type: 'Vector<Photo>' }, { name: 'users', type: 'Vector<User>' }],
      type: 'photos.Photos'
    },
    '-1264392051': {
      id: -1264392051,
      predicate: 'updateEncryption',
      params: [{ name: 'chat', type: 'EncryptedChat' }, { name: 'date', type: 'int' }],
      type: 'Update'
    },
    '-1417756512': {
      id: -1417756512,
      predicate: 'encryptedChatEmpty',
      params: [{ name: 'id', type: 'int' }],
      type: 'EncryptedChat'
    },
    '-931638658': {
      id: -931638658,
      predicate: 'encryptedChatRequested',
      params: [{ name: 'id', type: 'int' }, { name: 'access_hash', type: 'long' }, {
        name: 'date',
        type: 'int'
      }, { name: 'admin_id', type: 'int' }, { name: 'participant_id', type: 'int' }, { name: 'g_a', type: 'bytes' }],
      type: 'EncryptedChat'
    },
    '-94974410': {
      id: -94974410,
      predicate: 'encryptedChat',
      params: [{ name: 'id', type: 'int' }, { name: 'access_hash', type: 'long' }, {
        name: 'date',
        type: 'int'
      }, { name: 'admin_id', type: 'int' }, { name: 'participant_id', type: 'int' }, {
        name: 'g_a_or_b',
        type: 'bytes'
      }, { name: 'key_fingerprint', type: 'long' }],
      type: 'EncryptedChat'
    },
    '-247351839': {
      id: -247351839,
      predicate: 'inputEncryptedChat',
      params: [{ name: 'chat_id', type: 'int' }, { name: 'access_hash', type: 'long' }],
      type: 'InputEncryptedChat'
    },
    '-1038136962': { id: -1038136962, predicate: 'encryptedFileEmpty', params: [], type: 'EncryptedFile' },
    '-182231723': {
      id: -182231723,
      predicate: 'inputEncryptedFileLocation',
      params: [{ name: 'id', type: 'long' }, { name: 'access_hash', type: 'long' }],
      type: 'InputFileLocation'
    },
    '-317144808': {
      id: -317144808,
      predicate: 'encryptedMessage',
      params: [{ name: 'random_id', type: 'long' }, { name: 'chat_id', type: 'int' }, {
        name: 'date',
        type: 'int'
      }, { name: 'bytes', type: 'bytes' }, { name: 'file', type: 'EncryptedFile' }],
      type: 'EncryptedMessage'
    },
    '-1058912715': {
      id: -1058912715,
      predicate: 'messages.dhConfigNotModified',
      params: [{ name: 'random', type: 'bytes' }],
      type: 'messages.DhConfig'
    },
    '-1802240206': {
      id: -1802240206,
      predicate: 'messages.sentEncryptedFile',
      params: [{ name: 'date', type: 'int' }, { name: 'file', type: 'EncryptedFile' }],
      type: 'messages.SentEncryptedMessage'
    },
    '-95482955': {
      id: -95482955,
      predicate: 'inputFileBig',
      params: [{ name: 'id', type: 'long' }, { name: 'parts', type: 'int' }, { name: 'name', type: 'string' }],
      type: 'InputFile'
    },
    '-1373745011': { id: -1373745011, predicate: 'storage.filePdf', params: [], type: 'storage.FileType' },
    '-1629621880': { id: -1629621880, predicate: 'inputMessagesFilterDocument', params: [], type: 'MessagesFilter' },
    '-648121413': {
      id: -648121413,
      predicate: 'inputMessagesFilterPhotoVideoDocuments',
      params: [],
      type: 'MessagesFilter'
    },
    '-364179876': {
      id: -364179876,
      predicate: 'updateChatParticipantAdd',
      params: [{ name: 'chat_id', type: 'int' }, { name: 'user_id', type: 'int' }, {
        name: 'inviter_id',
        type: 'int'
      }, { name: 'date', type: 'int' }, { name: 'version', type: 'int' }],
      type: 'Update'
    },
    '-1906403213': {
      id: -1906403213,
      predicate: 'updateDcOptions',
      params: [{ name: 'dc_options', type: 'Vector<DcOption>' }],
      type: 'Update'
    },
    '-476700163': {
      id: -476700163,
      predicate: 'inputMediaUploadedDocument',
      params: [{ name: 'flags', type: '#' }, { name: 'file', type: 'InputFile' }, {
        name: 'thumb',
        type: 'flags.2?InputFile'
      }, { name: 'mime_type', type: 'string' }, {
        name: 'attributes',
        type: 'Vector<DocumentAttribute>'
      }, { name: 'caption', type: 'string' }, {
        name: 'stickers',
        type: 'flags.0?Vector<InputDocument>'
      }, { name: 'ttl_seconds', type: 'flags.1?int' }],
      type: 'InputMedia'
    },
    '-2027738169': {
      id: -2027738169,
      predicate: 'document',
      params: [{ name: 'id', type: 'long' }, { name: 'access_hash', type: 'long' }, {
        name: 'date',
        type: 'int'
      }, { name: 'mime_type', type: 'string' }, { name: 'size', type: 'int' }, {
        name: 'thumb',
        type: 'PhotoSize'
      }, { name: 'dc_id', type: 'int' }, { name: 'version', type: 'int' }, {
        name: 'attributes',
        type: 'Vector<DocumentAttribute>'
      }],
      type: 'Document'
    },
    '-1073230141': { id: -1073230141, predicate: 'notifyChats', params: [], type: 'NotifyPeer' },
    '-1613493288': {
      id: -1613493288,
      predicate: 'notifyPeer',
      params: [{ name: 'peer', type: 'Peer' }],
      type: 'NotifyPeer'
    },
    '-1261946036': { id: -1261946036, predicate: 'notifyUsers', params: [], type: 'NotifyPeer' },
    '-2131957734': {
      id: -2131957734,
      predicate: 'updateUserBlocked',
      params: [{ name: 'user_id', type: 'int' }, { name: 'blocked', type: 'Bool' }],
      type: 'Update'
    },
    '-1094555409': {
      id: -1094555409,
      predicate: 'updateNotifySettings',
      params: [{ name: 'peer', type: 'NotifyPeer' }, { name: 'notify_settings', type: 'PeerNotifySettings' }],
      type: 'Update'
    },
    '-44119819': { id: -44119819, predicate: 'sendMessageCancelAction', params: [], type: 'SendMessageAction' },
    '-1584933265': {
      id: -1584933265,
      predicate: 'sendMessageRecordVideoAction',
      params: [],
      type: 'SendMessageAction'
    },
    '-378127636': {
      id: -378127636,
      predicate: 'sendMessageUploadVideoAction',
      params: [{ name: 'progress', type: 'int' }],
      type: 'SendMessageAction'
    },
    '-718310409': { id: -718310409, predicate: 'sendMessageRecordAudioAction', params: [], type: 'SendMessageAction' },
    '-212740181': {
      id: -212740181,
      predicate: 'sendMessageUploadAudioAction',
      params: [{ name: 'progress', type: 'int' }],
      type: 'SendMessageAction'
    },
    '-774682074': {
      id: -774682074,
      predicate: 'sendMessageUploadPhotoAction',
      params: [{ name: 'progress', type: 'int' }],
      type: 'SendMessageAction'
    },
    '-1441998364': {
      id: -1441998364,
      predicate: 'sendMessageUploadDocumentAction',
      params: [{ name: 'progress', type: 'int' }],
      type: 'SendMessageAction'
    },
    '-337352679': {
      id: -337352679,
      predicate: 'updateServiceNotification',
      params: [{ name: 'flags', type: '#' }, { name: 'popup', type: 'flags.0?true' }, {
        name: 'inbox_date',
        type: 'flags.1?int'
      }, { name: 'type', type: 'string' }, { name: 'message', type: 'string' }, {
        name: 'media',
        type: 'MessageMedia'
      }, { name: 'entities', type: 'Vector<MessageEntity>' }],
      type: 'Update'
    },
    '-496024847': { id: -496024847, predicate: 'userStatusRecently', params: [], type: 'UserStatus' },
    '-298113238': {
      id: -298113238,
      predicate: 'updatePrivacy',
      params: [{ name: 'key', type: 'PrivacyKey' }, { name: 'rules', type: 'Vector<PrivacyRule>' }],
      type: 'Update'
    },
    '-1137792208': { id: -1137792208, predicate: 'privacyKeyStatusTimestamp', params: [], type: 'PrivacyKey' },
    '-697604407': { id: -697604407, predicate: 'inputPrivacyValueDisallowAll', params: [], type: 'InputPrivacyRule' },
    '-1877932953': {
      id: -1877932953,
      predicate: 'inputPrivacyValueDisallowUsers',
      params: [{ name: 'users', type: 'Vector<InputUser>' }],
      type: 'InputPrivacyRule'
    },
    '-123988': { id: -123988, predicate: 'privacyValueAllowContacts', params: [], type: 'PrivacyRule' },
    '-125240806': { id: -125240806, predicate: 'privacyValueDisallowContacts', params: [], type: 'PrivacyRule' },
    '-1955338397': { id: -1955338397, predicate: 'privacyValueDisallowAll', params: [], type: 'PrivacyRule' },
    '-1194283041': {
      id: -1194283041,
      predicate: 'accountDaysTTL',
      params: [{ name: 'days', type: 'int' }],
      type: 'AccountDaysTTL'
    },
    '-1369215196': {
      id: -1369215196,
      predicate: 'disabledFeature',
      params: [{ name: 'feature', type: 'string' }, { name: 'description', type: 'string' }],
      type: 'DisabledFeature'
    },
    '-1739392570': {
      id: -1739392570,
      predicate: 'documentAttributeAudio',
      params: [{ name: 'flags', type: '#' }, { name: 'voice', type: 'flags.10?true' }, {
        name: 'duration',
        type: 'int'
      }, { name: 'title', type: 'flags.0?string' }, { name: 'performer', type: 'flags.1?string' }, {
        name: 'waveform',
        type: 'flags.2?bytes'
      }],
      type: 'DocumentAttribute'
    },
    '-244016606': { id: -244016606, predicate: 'messages.stickersNotModified', params: [], type: 'messages.Stickers' },
    '-1970352846': {
      id: -1970352846,
      predicate: 'messages.stickers',
      params: [{ name: 'hash', type: 'string' }, { name: 'stickers', type: 'Vector<Document>' }],
      type: 'messages.Stickers'
    },
    '-395967805': {
      id: -395967805,
      predicate: 'messages.allStickersNotModified',
      params: [],
      type: 'messages.AllStickers'
    },
    '-302170017': {
      id: -302170017,
      predicate: 'messages.allStickers',
      params: [{ name: 'hash', type: 'int' }, { name: 'sets', type: 'Vector<StickerSet>' }],
      type: 'messages.AllStickers'
    },
    '-1764049896': {
      id: -1764049896,
      predicate: 'account.noPassword',
      params: [{ name: 'new_salt', type: 'bytes' }, { name: 'email_unconfirmed_pattern', type: 'string' }],
      type: 'account.Password'
    },
    '-1721631396': {
      id: -1721631396,
      predicate: 'updateReadHistoryInbox',
      params: [{ name: 'peer', type: 'Peer' }, { name: 'max_id', type: 'int' }, {
        name: 'pts',
        type: 'int'
      }, { name: 'pts_count', type: 'int' }],
      type: 'Update'
    },
    '-2066640507': {
      id: -2066640507,
      predicate: 'messages.affectedMessages',
      params: [{ name: 'pts', type: 'int' }, { name: 'pts_count', type: 'int' }],
      type: 'messages.AffectedMessages'
    },
    '-17968211': { id: -17968211, predicate: 'contactLinkNone', params: [], type: 'ContactLink' },
    '-721239344': { id: -721239344, predicate: 'contactLinkContact', params: [], type: 'ContactLink' },
    '-350980120': {
      id: -350980120,
      predicate: 'webPageEmpty',
      params: [{ name: 'id', type: 'long' }],
      type: 'WebPage'
    },
    '-981018084': {
      id: -981018084,
      predicate: 'webPagePending',
      params: [{ name: 'id', type: 'long' }, { name: 'date', type: 'int' }],
      type: 'WebPage'
    },
    '-1557277184': {
      id: -1557277184,
      predicate: 'messageMediaWebPage',
      params: [{ name: 'webpage', type: 'WebPage' }],
      type: 'MessageMedia'
    },
    '-1212732749': {
      id: -1212732749,
      predicate: 'account.passwordSettings',
      params: [{ name: 'email', type: 'string' }],
      type: 'account.PasswordSettings'
    },
    '-2037289493': {
      id: -2037289493,
      predicate: 'account.passwordInputSettings',
      params: [{ name: 'flags', type: '#' }, { name: 'new_salt', type: 'flags.0?bytes' }, {
        name: 'new_password_hash',
        type: 'flags.0?bytes'
      }, { name: 'hint', type: 'flags.0?string' }, { name: 'email', type: 'flags.1?string' }],
      type: 'account.PasswordInputSettings'
    },
    '-1551583367': {
      id: -1551583367,
      predicate: 'receivedNotifyMessage',
      params: [{ name: 'id', type: 'int' }, { name: 'flags', type: 'int' }],
      type: 'ReceivedNotifyMessage'
    },
    '-64092740': {
      id: -64092740,
      predicate: 'chatInviteExported',
      params: [{ name: 'link', type: 'string' }],
      type: 'ExportedChatInvite'
    },
    '-613092008': {
      id: -613092008,
      predicate: 'chatInvite',
      params: [{ name: 'flags', type: '#' }, { name: 'channel', type: 'flags.0?true' }, {
        name: 'broadcast',
        type: 'flags.1?true'
      }, { name: 'public', type: 'flags.2?true' }, { name: 'megagroup', type: 'flags.3?true' }, {
        name: 'title',
        type: 'string'
      }, { name: 'photo', type: 'ChatPhoto' }, { name: 'participants_count', type: 'int' }, {
        name: 'participants',
        type: 'flags.4?Vector<User>'
      }],
      type: 'ChatInvite'
    },
    '-123931160': {
      id: -123931160,
      predicate: 'messageActionChatJoinedByLink',
      params: [{ name: 'inviter_id', type: 'int' }],
      type: 'MessageAction'
    },
    '-4838507': { id: -4838507, predicate: 'inputStickerSetEmpty', params: [], type: 'InputStickerSet' },
    '-1645763991': {
      id: -1645763991,
      predicate: 'inputStickerSetID',
      params: [{ name: 'id', type: 'long' }, { name: 'access_hash', type: 'long' }],
      type: 'InputStickerSet'
    },
    '-2044933984': {
      id: -2044933984,
      predicate: 'inputStickerSetShortName',
      params: [{ name: 'short_name', type: 'string' }],
      type: 'InputStickerSet'
    },
    '-852477119': {
      id: -852477119,
      predicate: 'stickerSet',
      params: [{ name: 'flags', type: '#' }, { name: 'installed', type: 'flags.0?true' }, {
        name: 'archived',
        type: 'flags.1?true'
      }, { name: 'official', type: 'flags.2?true' }, { name: 'masks', type: 'flags.3?true' }, {
        name: 'id',
        type: 'long'
      }, { name: 'access_hash', type: 'long' }, { name: 'title', type: 'string' }, {
        name: 'short_name',
        type: 'string'
      }, { name: 'count', type: 'int' }, { name: 'hash', type: 'int' }],
      type: 'StickerSet'
    },
    '-1240849242': {
      id: -1240849242,
      predicate: 'messages.stickerSet',
      params: [{ name: 'set', type: 'StickerSet' }, { name: 'packs', type: 'Vector<StickerPack>' }, {
        name: 'documents',
        type: 'Vector<Document>'
      }],
      type: 'messages.StickerSet'
    },
    '-1032140601': {
      id: -1032140601,
      predicate: 'botCommand',
      params: [{ name: 'command', type: 'string' }, { name: 'description', type: 'string' }],
      type: 'BotCommand'
    },
    '-1729618630': {
      id: -1729618630,
      predicate: 'botInfo',
      params: [{ name: 'user_id', type: 'int' }, { name: 'description', type: 'string' }, {
        name: 'commands',
        type: 'Vector<BotCommand>'
      }],
      type: 'BotInfo'
    },
    '-1560655744': {
      id: -1560655744,
      predicate: 'keyboardButton',
      params: [{ name: 'text', type: 'string' }],
      type: 'KeyboardButton'
    },
    '-1606526075': {
      id: -1606526075,
      predicate: 'replyKeyboardHide',
      params: [{ name: 'flags', type: '#' }, { name: 'selective', type: 'flags.2?true' }],
      type: 'ReplyMarkup'
    },
    '-200242528': {
      id: -200242528,
      predicate: 'replyKeyboardForceReply',
      params: [{ name: 'flags', type: '#' }, { name: 'single_use', type: 'flags.1?true' }, {
        name: 'selective',
        type: 'flags.2?true'
      }],
      type: 'ReplyMarkup'
    },
    '-668391402': {
      id: -668391402,
      predicate: 'inputUser',
      params: [{ name: 'user_id', type: 'int' }, { name: 'access_hash', type: 'long' }],
      type: 'InputUser'
    },
    '-1148011883': {
      id: -1148011883,
      predicate: 'messageEntityUnknown',
      params: [{ name: 'offset', type: 'int' }, { name: 'length', type: 'int' }],
      type: 'MessageEntity'
    },
    '-100378723': {
      id: -100378723,
      predicate: 'messageEntityMention',
      params: [{ name: 'offset', type: 'int' }, { name: 'length', type: 'int' }],
      type: 'MessageEntity'
    },
    '-1117713463': {
      id: -1117713463,
      predicate: 'messageEntityBold',
      params: [{ name: 'offset', type: 'int' }, { name: 'length', type: 'int' }],
      type: 'MessageEntity'
    },
    '-2106619040': {
      id: -2106619040,
      predicate: 'messageEntityItalic',
      params: [{ name: 'offset', type: 'int' }, { name: 'length', type: 'int' }],
      type: 'MessageEntity'
    },
    '-1109531342': {
      id: -1109531342,
      predicate: 'peerChannel',
      params: [{ name: 'channel_id', type: 'int' }],
      type: 'Peer'
    },
    '-1781355374': {
      id: -1781355374,
      predicate: 'messageActionChannelCreate',
      params: [{ name: 'title', type: 'string' }],
      type: 'MessageAction'
    },
    '-1725551049': {
      id: -1725551049,
      predicate: 'messages.channelMessages',
      params: [{ name: 'flags', type: '#' }, { name: 'pts', type: 'int' }, {
        name: 'count',
        type: 'int'
      }, { name: 'messages', type: 'Vector<Message>' }, { name: 'chats', type: 'Vector<Chat>' }, {
        name: 'users',
        type: 'Vector<User>'
      }],
      type: 'messages.Messages'
    },
    '-352032773': {
      id: -352032773,
      predicate: 'updateChannelTooLong',
      params: [{ name: 'flags', type: '#' }, { name: 'channel_id', type: 'int' }, { name: 'pts', type: 'flags.0?int' }],
      type: 'Update'
    },
    '-1227598250': {
      id: -1227598250,
      predicate: 'updateChannel',
      params: [{ name: 'channel_id', type: 'int' }],
      type: 'Update'
    },
    '-1015733815': {
      id: -1015733815,
      predicate: 'updateDeleteChannelMessages',
      params: [{ name: 'channel_id', type: 'int' }, { name: 'messages', type: 'Vector<int>' }, {
        name: 'pts',
        type: 'int'
      }, { name: 'pts_count', type: 'int' }],
      type: 'Update'
    },
    '-1734268085': {
      id: -1734268085,
      predicate: 'updateChannelMessageViews',
      params: [{ name: 'channel_id', type: 'int' }, { name: 'id', type: 'int' }, { name: 'views', type: 'int' }],
      type: 'Update'
    },
    '-292807034': { id: -292807034, predicate: 'inputChannelEmpty', params: [], type: 'InputChannel' },
    '-1343524562': {
      id: -1343524562,
      predicate: 'inputChannel',
      params: [{ name: 'channel_id', type: 'int' }, { name: 'access_hash', type: 'long' }],
      type: 'InputChannel'
    },
    '-1798033689': {
      id: -1798033689,
      predicate: 'channelMessagesFilterEmpty',
      params: [],
      type: 'ChannelMessagesFilter'
    },
    '-847783593': {
      id: -847783593,
      predicate: 'channelMessagesFilter',
      params: [{ name: 'flags', type: '#' }, { name: 'exclude_new_messages', type: 'flags.1?true' }, {
        name: 'ranges',
        type: 'Vector<MessageRange>'
      }],
      type: 'ChannelMessagesFilter'
    },
    '-1557620115': {
      id: -1557620115,
      predicate: 'channelParticipantSelf',
      params: [{ name: 'user_id', type: 'int' }, { name: 'inviter_id', type: 'int' }, { name: 'date', type: 'int' }],
      type: 'ChannelParticipant'
    },
    '-471670279': {
      id: -471670279,
      predicate: 'channelParticipantCreator',
      params: [{ name: 'user_id', type: 'int' }],
      type: 'ChannelParticipant'
    },
    '-566281095': {
      id: -566281095,
      predicate: 'channelParticipantsRecent',
      params: [],
      type: 'ChannelParticipantsFilter'
    },
    '-1268741783': {
      id: -1268741783,
      predicate: 'channelParticipantsAdmins',
      params: [],
      type: 'ChannelParticipantsFilter'
    },
    '-1548400251': {
      id: -1548400251,
      predicate: 'channelParticipantsKicked',
      params: [{ name: 'q', type: 'string' }],
      type: 'ChannelParticipantsFilter'
    },
    '-177282392': {
      id: -177282392,
      predicate: 'channels.channelParticipants',
      params: [{ name: 'count', type: 'int' }, {
        name: 'participants',
        type: 'Vector<ChannelParticipant>'
      }, { name: 'users', type: 'Vector<User>' }],
      type: 'channels.ChannelParticipants'
    },
    '-791039645': {
      id: -791039645,
      predicate: 'channels.channelParticipant',
      params: [{ name: 'participant', type: 'ChannelParticipant' }, { name: 'users', type: 'Vector<User>' }],
      type: 'channels.ChannelParticipant'
    },
    '-636267638': {
      id: -636267638,
      predicate: 'chatParticipantCreator',
      params: [{ name: 'user_id', type: 'int' }],
      type: 'ChatParticipant'
    },
    '-489233354': {
      id: -489233354,
      predicate: 'chatParticipantAdmin',
      params: [{ name: 'user_id', type: 'int' }, { name: 'inviter_id', type: 'int' }, { name: 'date', type: 'int' }],
      type: 'ChatParticipant'
    },
    '-1232070311': {
      id: -1232070311,
      predicate: 'updateChatParticipantAdmin',
      params: [{ name: 'chat_id', type: 'int' }, { name: 'user_id', type: 'int' }, {
        name: 'is_admin',
        type: 'Bool'
      }, { name: 'version', type: 'int' }],
      type: 'Update'
    },
    '-1336546578': {
      id: -1336546578,
      predicate: 'messageActionChannelMigrateFrom',
      params: [{ name: 'title', type: 'string' }, { name: 'chat_id', type: 'int' }],
      type: 'MessageAction'
    },
    '-1328445861': {
      id: -1328445861,
      predicate: 'channelParticipantsBots',
      params: [],
      type: 'ChannelParticipantsFilter'
    },
    '-512463606': {
      id: -512463606,
      predicate: 'inputReportReasonOther',
      params: [{ name: 'text', type: 'string' }],
      type: 'ReportReason'
    },
    '-236044656': {
      id: -236044656,
      predicate: 'help.termsOfService',
      params: [{ name: 'text', type: 'string' }],
      type: 'help.TermsOfService'
    },
    '-3644025': { id: -3644025, predicate: 'inputMessagesFilterGif', params: [], type: 'MessagesFilter' },
    '-1821035490': { id: -1821035490, predicate: 'updateSavedGifs', params: [], type: 'Update' },
    '-1670052855': {
      id: -1670052855,
      predicate: 'foundGifCached',
      params: [{ name: 'url', type: 'string' }, { name: 'photo', type: 'Photo' }, {
        name: 'document',
        type: 'Document'
      }],
      type: 'FoundGif'
    },
    '-402498398': {
      id: -402498398,
      predicate: 'messages.savedGifsNotModified',
      params: [],
      type: 'messages.SavedGifs'
    },
    '-1937807902': {
      id: -1937807902,
      predicate: 'botInlineMessageText',
      params: [{ name: 'flags', type: '#' }, { name: 'no_webpage', type: 'flags.0?true' }, {
        name: 'message',
        type: 'string'
      }, { name: 'entities', type: 'flags.1?Vector<MessageEntity>' }, {
        name: 'reply_markup',
        type: 'flags.2?ReplyMarkup'
      }],
      type: 'BotInlineMessage'
    },
    '-1679053127': {
      id: -1679053127,
      predicate: 'botInlineResult',
      params: [{ name: 'flags', type: '#' }, { name: 'id', type: 'string' }, {
        name: 'type',
        type: 'string'
      }, { name: 'title', type: 'flags.1?string' }, { name: 'description', type: 'flags.2?string' }, {
        name: 'url',
        type: 'flags.3?string'
      }, { name: 'thumb_url', type: 'flags.4?string' }, {
        name: 'content_url',
        type: 'flags.5?string'
      }, { name: 'content_type', type: 'flags.5?string' }, { name: 'w', type: 'flags.6?int' }, {
        name: 'h',
        type: 'flags.6?int'
      }, { name: 'duration', type: 'flags.7?int' }, { name: 'send_message', type: 'BotInlineMessage' }],
      type: 'BotInlineResult'
    },
    '-858565059': {
      id: -858565059,
      predicate: 'messages.botResults',
      params: [{ name: 'flags', type: '#' }, { name: 'gallery', type: 'flags.0?true' }, {
        name: 'query_id',
        type: 'long'
      }, { name: 'next_offset', type: 'flags.1?string' }, {
        name: 'switch_pm',
        type: 'flags.2?InlineBotSwitchPM'
      }, { name: 'results', type: 'Vector<BotInlineResult>' }, { name: 'cache_time', type: 'int' }],
      type: 'messages.BotResults'
    },
    '-1107622874': { id: -1107622874, predicate: 'inputPrivacyKeyChatInvite', params: [], type: 'InputPrivacyKey' },
    '-85986132': {
      id: -85986132,
      predicate: 'messageFwdHeader',
      params: [{ name: 'flags', type: '#' }, { name: 'from_id', type: 'flags.0?int' }, {
        name: 'date',
        type: 'int'
      }, { name: 'channel_id', type: 'flags.1?int' }, {
        name: 'channel_post',
        type: 'flags.2?int'
      }, { name: 'post_author', type: 'flags.3?string' }],
      type: 'MessageFwdHeader'
    },
    '-1799538451': { id: -1799538451, predicate: 'messageActionPinMessage', params: [], type: 'MessageAction' },
    '-2122045747': {
      id: -2122045747,
      predicate: 'peerSettings',
      params: [{ name: 'flags', type: '#' }, { name: 'report_spam', type: 'flags.0?true' }],
      type: 'PeerSettings'
    },
    '-1738988427': {
      id: -1738988427,
      predicate: 'updateChannelPinnedMessage',
      params: [{ name: 'channel_id', type: 'int' }, { name: 'id', type: 'int' }],
      type: 'Update'
    },
    '-1318425559': {
      id: -1318425559,
      predicate: 'keyboardButtonRequestPhone',
      params: [{ name: 'text', type: 'string' }],
      type: 'KeyboardButton'
    },
    '-59151553': {
      id: -59151553,
      predicate: 'keyboardButtonRequestGeoLocation',
      params: [{ name: 'text', type: 'string' }],
      type: 'KeyboardButton'
    },
    '-1073693790': {
      id: -1073693790,
      predicate: 'auth.sentCodeTypeSms',
      params: [{ name: 'length', type: 'int' }],
      type: 'auth.SentCodeType'
    },
    '-1425815847': {
      id: -1425815847,
      predicate: 'auth.sentCodeTypeFlashCall',
      params: [{ name: 'pattern', type: 'string' }],
      type: 'auth.SentCodeType'
    },
    '-415938591': {
      id: -415938591,
      predicate: 'updateBotCallbackQuery',
      params: [{ name: 'flags', type: '#' }, { name: 'query_id', type: 'long' }, {
        name: 'user_id',
        type: 'int'
      }, { name: 'peer', type: 'Peer' }, { name: 'msg_id', type: 'int' }, {
        name: 'chat_instance',
        type: 'long'
      }, { name: 'data', type: 'flags.0?bytes' }, { name: 'game_short_name', type: 'flags.1?string' }],
      type: 'Update'
    },
    '-469536605': {
      id: -469536605,
      predicate: 'updateEditMessage',
      params: [{ name: 'message', type: 'Message' }, { name: 'pts', type: 'int' }, { name: 'pts_count', type: 'int' }],
      type: 'Update'
    },
    '-190472735': {
      id: -190472735,
      predicate: 'inputBotInlineMessageMediaGeo',
      params: [{ name: 'flags', type: '#' }, { name: 'geo_point', type: 'InputGeoPoint' }, {
        name: 'reply_markup',
        type: 'flags.2?ReplyMarkup'
      }],
      type: 'InputBotInlineMessage'
    },
    '-1431327288': {
      id: -1431327288,
      predicate: 'inputBotInlineMessageMediaVenue',
      params: [{ name: 'flags', type: '#' }, { name: 'geo_point', type: 'InputGeoPoint' }, {
        name: 'title',
        type: 'string'
      }, { name: 'address', type: 'string' }, { name: 'provider', type: 'string' }, {
        name: 'venue_id',
        type: 'string'
      }, { name: 'reply_markup', type: 'flags.2?ReplyMarkup' }],
      type: 'InputBotInlineMessage'
    },
    '-1462213465': {
      id: -1462213465,
      predicate: 'inputBotInlineResultPhoto',
      params: [{ name: 'id', type: 'string' }, { name: 'type', type: 'string' }, {
        name: 'photo',
        type: 'InputPhoto'
      }, { name: 'send_message', type: 'InputBotInlineMessage' }],
      type: 'InputBotInlineResult'
    },
    '-459324': {
      id: -459324,
      predicate: 'inputBotInlineResultDocument',
      params: [{ name: 'flags', type: '#' }, { name: 'id', type: 'string' }, {
        name: 'type',
        type: 'string'
      }, { name: 'title', type: 'flags.1?string' }, { name: 'description', type: 'flags.2?string' }, {
        name: 'document',
        type: 'InputDocument'
      }, { name: 'send_message', type: 'InputBotInlineMessage' }],
      type: 'InputBotInlineResult'
    },
    '-1995686519': {
      id: -1995686519,
      predicate: 'inputBotInlineMessageID',
      params: [{ name: 'dc_id', type: 'int' }, { name: 'id', type: 'long' }, { name: 'access_hash', type: 'long' }],
      type: 'InputBotInlineMessageID'
    },
    '-103646630': {
      id: -103646630,
      predicate: 'updateInlineBotCallbackQuery',
      params: [{ name: 'flags', type: '#' }, { name: 'query_id', type: 'long' }, {
        name: 'user_id',
        type: 'int'
      }, { name: 'msg_id', type: 'InputBotInlineMessageID' }, { name: 'chat_instance', type: 'long' }, {
        name: 'data',
        type: 'flags.0?bytes'
      }, { name: 'game_short_name', type: 'flags.1?string' }],
      type: 'Update'
    },
    '-305282981': {
      id: -305282981,
      predicate: 'topPeer',
      params: [{ name: 'peer', type: 'Peer' }, { name: 'rating', type: 'double' }],
      type: 'TopPeer'
    },
    '-1419371685': { id: -1419371685, predicate: 'topPeerCategoryBotsPM', params: [], type: 'TopPeerCategory' },
    '-1122524854': { id: -1122524854, predicate: 'topPeerCategoryGroups', params: [], type: 'TopPeerCategory' },
    '-75283823': {
      id: -75283823,
      predicate: 'topPeerCategoryPeers',
      params: [{ name: 'category', type: 'TopPeerCategory' }, { name: 'count', type: 'int' }, {
        name: 'peers',
        type: 'Vector<TopPeer>'
      }],
      type: 'TopPeerCategoryPeers'
    },
    '-567906571': { id: -567906571, predicate: 'contacts.topPeersNotModified', params: [], type: 'contacts.TopPeers' },
    '-299124375': {
      id: -299124375,
      predicate: 'updateDraftMessage',
      params: [{ name: 'peer', type: 'Peer' }, { name: 'draft', type: 'DraftMessage' }],
      type: 'Update'
    },
    '-1169445179': { id: -1169445179, predicate: 'draftMessageEmpty', params: [], type: 'DraftMessage' },
    '-40996577': {
      id: -40996577,
      predicate: 'draftMessage',
      params: [{ name: 'flags', type: '#' }, { name: 'no_webpage', type: 'flags.1?true' }, {
        name: 'reply_to_msg_id',
        type: 'flags.0?int'
      }, { name: 'message', type: 'string' }, {
        name: 'entities',
        type: 'flags.3?Vector<MessageEntity>'
      }, { name: 'date', type: 'int' }],
      type: 'DraftMessage'
    },
    '-1615153660': { id: -1615153660, predicate: 'messageActionHistoryClear', params: [], type: 'MessageAction' },
    '-1706939360': { id: -1706939360, predicate: 'updateRecentStickers', params: [], type: 'Update' },
    '-123893531': {
      id: -123893531,
      predicate: 'messages.featuredStickers',
      params: [{ name: 'hash', type: 'int' }, { name: 'sets', type: 'Vector<StickerSetCovered>' }, {
        name: 'unread',
        type: 'Vector<long>'
      }],
      type: 'messages.FeaturedStickers'
    },
    '-1225309387': {
      id: -1225309387,
      predicate: 'inputMediaDocumentExternal',
      params: [{ name: 'flags', type: '#' }, { name: 'url', type: 'string' }, {
        name: 'caption',
        type: 'string'
      }, { name: 'ttl_seconds', type: 'flags.0?int' }],
      type: 'InputMedia'
    },
    '-1574314746': { id: -1574314746, predicate: 'updateConfig', params: [], type: 'Update' },
    '-1834538890': {
      id: -1834538890,
      predicate: 'messageActionGameScore',
      params: [{ name: 'game_id', type: 'long' }, { name: 'score', type: 'int' }],
      type: 'MessageAction'
    },
    '-1744710921': {
      id: -1744710921,
      predicate: 'documentAttributeHasStickers',
      params: [],
      type: 'DocumentAttribute'
    },
    '-1361650766': {
      id: -1361650766,
      predicate: 'maskCoords',
      params: [{ name: 'n', type: 'int' }, { name: 'x', type: 'double' }, { name: 'y', type: 'double' }, {
        name: 'zoom',
        type: 'double'
      }],
      type: 'MaskCoords'
    },
    '-750828557': {
      id: -750828557,
      predicate: 'inputMediaGame',
      params: [{ name: 'id', type: 'InputGame' }],
      type: 'InputMedia'
    },
    '-38694904': {
      id: -38694904,
      predicate: 'messageMediaGame',
      params: [{ name: 'game', type: 'Game' }],
      type: 'MessageMedia'
    },
    '-1107729093': {
      id: -1107729093,
      predicate: 'game',
      params: [{ name: 'flags', type: '#' }, { name: 'id', type: 'long' }, {
        name: 'access_hash',
        type: 'long'
      }, { name: 'short_name', type: 'string' }, { name: 'title', type: 'string' }, {
        name: 'description',
        type: 'string'
      }, { name: 'photo', type: 'Photo' }, { name: 'document', type: 'flags.0?Document' }],
      type: 'Game'
    },
    '-1020139510': {
      id: -1020139510,
      predicate: 'inputGameShortName',
      params: [{ name: 'bot_id', type: 'InputUser' }, { name: 'short_name', type: 'string' }],
      type: 'InputGame'
    },
    '-1707344487': {
      id: -1707344487,
      predicate: 'messages.highScores',
      params: [{ name: 'scores', type: 'Vector<HighScore>' }, { name: 'users', type: 'Vector<User>' }],
      type: 'messages.HighScores'
    },
    '-1663561404': {
      id: -1663561404,
      predicate: 'messages.chatsSlice',
      params: [{ name: 'count', type: 'int' }, { name: 'chats', type: 'Vector<Chat>' }],
      type: 'messages.Chats'
    },
    '-580219064': { id: -580219064, predicate: 'sendMessageGamePlayAction', params: [], type: 'SendMessageAction' },
    '-2054908813': { id: -2054908813, predicate: 'webPageNotModified', params: [], type: 'WebPage' },
    '-599948721': { id: -599948721, predicate: 'textEmpty', params: [], type: 'RichText' },
    '-653089380': {
      id: -653089380,
      predicate: 'textItalic',
      params: [{ name: 'text', type: 'RichText' }],
      type: 'RichText'
    },
    '-1054465340': {
      id: -1054465340,
      predicate: 'textUnderline',
      params: [{ name: 'text', type: 'RichText' }],
      type: 'RichText'
    },
    '-1678197867': {
      id: -1678197867,
      predicate: 'textStrike',
      params: [{ name: 'text', type: 'RichText' }],
      type: 'RichText'
    },
    '-564523562': {
      id: -564523562,
      predicate: 'textEmail',
      params: [{ name: 'text', type: 'RichText' }, { name: 'email', type: 'string' }],
      type: 'RichText'
    },
    '-1879401953': {
      id: -1879401953,
      predicate: 'pageBlockSubtitle',
      params: [{ name: 'text', type: 'RichText' }],
      type: 'PageBlock'
    },
    '-1162877472': {
      id: -1162877472,
      predicate: 'pageBlockAuthorDate',
      params: [{ name: 'author', type: 'RichText' }, { name: 'published_date', type: 'int' }],
      type: 'PageBlock'
    },
    '-1076861716': {
      id: -1076861716,
      predicate: 'pageBlockHeader',
      params: [{ name: 'text', type: 'RichText' }],
      type: 'PageBlock'
    },
    '-248793375': {
      id: -248793375,
      predicate: 'pageBlockSubheader',
      params: [{ name: 'text', type: 'RichText' }],
      type: 'PageBlock'
    },
    '-1066346178': {
      id: -1066346178,
      predicate: 'pageBlockPreformatted',
      params: [{ name: 'text', type: 'RichText' }, { name: 'language', type: 'string' }],
      type: 'PageBlock'
    },
    '-618614392': { id: -618614392, predicate: 'pageBlockDivider', params: [], type: 'PageBlock' },
    '-372860542': {
      id: -372860542,
      predicate: 'pageBlockPhoto',
      params: [{ name: 'photo_id', type: 'long' }, { name: 'caption', type: 'RichText' }],
      type: 'PageBlock'
    },
    '-640214938': {
      id: -640214938,
      predicate: 'pageBlockVideo',
      params: [{ name: 'flags', type: '#' }, { name: 'autoplay', type: 'flags.0?true' }, {
        name: 'loop',
        type: 'flags.1?true'
      }, { name: 'video_id', type: 'long' }, { name: 'caption', type: 'RichText' }],
      type: 'PageBlock'
    },
    '-840826671': {
      id: -840826671,
      predicate: 'pageBlockEmbed',
      params: [{ name: 'flags', type: '#' }, { name: 'full_width', type: 'flags.0?true' }, {
        name: 'allow_scrolling',
        type: 'flags.3?true'
      }, { name: 'url', type: 'flags.1?string' }, { name: 'html', type: 'flags.2?string' }, {
        name: 'poster_photo_id',
        type: 'flags.4?long'
      }, { name: 'w', type: 'int' }, { name: 'h', type: 'int' }, { name: 'caption', type: 'RichText' }],
      type: 'PageBlock'
    },
    '-1908433218': {
      id: -1908433218,
      predicate: 'pagePart',
      params: [{ name: 'blocks', type: 'Vector<PageBlock>' }, {
        name: 'photos',
        type: 'Vector<Photo>'
      }, { name: 'documents', type: 'Vector<Document>' }],
      type: 'Page'
    },
    '-1425052898': {
      id: -1425052898,
      predicate: 'updatePhoneCall',
      params: [{ name: 'phone_call', type: 'PhoneCall' }],
      type: 'Update'
    },
    '-686710068': {
      id: -686710068,
      predicate: 'updateDialogPinned',
      params: [{ name: 'flags', type: '#' }, { name: 'pinned', type: 'flags.0?true' }, { name: 'peer', type: 'Peer' }],
      type: 'Update'
    },
    '-657787251': {
      id: -657787251,
      predicate: 'updatePinnedDialogs',
      params: [{ name: 'flags', type: '#' }, { name: 'order', type: 'flags.0?Vector<Peer>' }],
      type: 'Update'
    },
    '-88417185': { id: -88417185, predicate: 'inputPrivacyKeyPhoneCall', params: [], type: 'InputPrivacyKey' },
    '-837994576': {
      id: -837994576,
      predicate: 'pageBlockAnchor',
      params: [{ name: 'name', type: 'string' }],
      type: 'PageBlock'
    },
    '-2089411356': {
      id: -2089411356,
      predicate: 'phoneCallRequested',
      params: [{ name: 'id', type: 'long' }, { name: 'access_hash', type: 'long' }, {
        name: 'date',
        type: 'int'
      }, { name: 'admin_id', type: 'int' }, { name: 'participant_id', type: 'int' }, {
        name: 'g_a_hash',
        type: 'bytes'
      }, { name: 'protocol', type: 'PhoneCallProtocol' }],
      type: 'PhoneCall'
    },
    '-1660057': {
      id: -1660057,
      predicate: 'phoneCall',
      params: [{ name: 'id', type: 'long' }, { name: 'access_hash', type: 'long' }, {
        name: 'date',
        type: 'int'
      }, { name: 'admin_id', type: 'int' }, { name: 'participant_id', type: 'int' }, {
        name: 'g_a_or_b',
        type: 'bytes'
      }, { name: 'key_fingerprint', type: 'long' }, {
        name: 'protocol',
        type: 'PhoneCallProtocol'
      }, { name: 'connection', type: 'PhoneConnection' }, {
        name: 'alternative_connections',
        type: 'Vector<PhoneConnection>'
      }, { name: 'start_date', type: 'int' }],
      type: 'PhoneCall'
    },
    '-1655957568': {
      id: -1655957568,
      predicate: 'phoneConnection',
      params: [{ name: 'id', type: 'long' }, { name: 'ip', type: 'string' }, {
        name: 'ipv6',
        type: 'string'
      }, { name: 'port', type: 'int' }, { name: 'peer_tag', type: 'bytes' }],
      type: 'PhoneConnection'
    },
    '-1564789301': {
      id: -1564789301,
      predicate: 'phoneCallProtocol',
      params: [{ name: 'flags', type: '#' }, { name: 'udp_p2p', type: 'flags.0?true' }, {
        name: 'udp_reflector',
        type: 'flags.1?true'
      }, { name: 'min_layer', type: 'int' }, { name: 'max_layer', type: 'int' }],
      type: 'PhoneCallProtocol'
    },
    '-326966976': {
      id: -326966976,
      predicate: 'phone.phoneCall',
      params: [{ name: 'phone_call', type: 'PhoneCall' }, { name: 'users', type: 'Vector<User>' }],
      type: 'phone.PhoneCall'
    },
    '-2048646399': {
      id: -2048646399,
      predicate: 'phoneCallDiscardReasonMissed',
      params: [],
      type: 'PhoneCallDiscardReason'
    },
    '-527056480': {
      id: -527056480,
      predicate: 'phoneCallDiscardReasonDisconnect',
      params: [],
      type: 'PhoneCallDiscardReason'
    },
    '-84416311': { id: -84416311, predicate: 'phoneCallDiscardReasonBusy', params: [], type: 'PhoneCallDiscardReason' },
    '-2134272152': {
      id: -2134272152,
      predicate: 'inputMessagesFilterPhoneCalls',
      params: [{ name: 'flags', type: '#' }, { name: 'missed', type: 'flags.0?true' }],
      type: 'MessagesFilter'
    },
    '-2132731265': {
      id: -2132731265,
      predicate: 'messageActionPhoneCall',
      params: [{ name: 'flags', type: '#' }, { name: 'call_id', type: 'long' }, {
        name: 'reason',
        type: 'flags.0?PhoneCallDiscardReason'
      }, { name: 'duration', type: 'flags.1?int' }],
      type: 'MessageAction'
    },
    '-1022713000': {
      id: -1022713000,
      predicate: 'invoice',
      params: [{ name: 'flags', type: '#' }, { name: 'test', type: 'flags.0?true' }, {
        name: 'name_requested',
        type: 'flags.1?true'
      }, { name: 'phone_requested', type: 'flags.2?true' }, {
        name: 'email_requested',
        type: 'flags.3?true'
      }, { name: 'shipping_address_requested', type: 'flags.4?true' }, {
        name: 'flexible',
        type: 'flags.5?true'
      }, { name: 'currency', type: 'string' }, { name: 'prices', type: 'Vector<LabeledPrice>' }],
      type: 'Invoice'
    },
    '-1844103547': {
      id: -1844103547,
      predicate: 'inputMediaInvoice',
      params: [{ name: 'flags', type: '#' }, { name: 'title', type: 'string' }, {
        name: 'description',
        type: 'string'
      }, { name: 'photo', type: 'flags.0?InputWebDocument' }, { name: 'invoice', type: 'Invoice' }, {
        name: 'payload',
        type: 'bytes'
      }, { name: 'provider', type: 'string' }, { name: 'start_param', type: 'string' }],
      type: 'InputMedia'
    },
    '-1892568281': {
      id: -1892568281,
      predicate: 'messageActionPaymentSentMe',
      params: [{ name: 'flags', type: '#' }, { name: 'currency', type: 'string' }, {
        name: 'total_amount',
        type: 'long'
      }, { name: 'payload', type: 'bytes' }, {
        name: 'info',
        type: 'flags.0?PaymentRequestedInfo'
      }, { name: 'shipping_option_id', type: 'flags.1?string' }, { name: 'charge', type: 'PaymentCharge' }],
      type: 'MessageAction'
    },
    '-2074799289': {
      id: -2074799289,
      predicate: 'messageMediaInvoice',
      params: [{ name: 'flags', type: '#' }, {
        name: 'shipping_address_requested',
        type: 'flags.1?true'
      }, { name: 'test', type: 'flags.3?true' }, { name: 'title', type: 'string' }, {
        name: 'description',
        type: 'string'
      }, { name: 'photo', type: 'flags.0?WebDocument' }, {
        name: 'receipt_msg_id',
        type: 'flags.2?int'
      }, { name: 'currency', type: 'string' }, { name: 'total_amount', type: 'long' }, {
        name: 'start_param',
        type: 'string'
      }],
      type: 'MessageMedia'
    },
    '-1344716869': {
      id: -1344716869,
      predicate: 'keyboardButtonBuy',
      params: [{ name: 'text', type: 'string' }],
      type: 'KeyboardButton'
    },
    '-1868808300': {
      id: -1868808300,
      predicate: 'paymentRequestedInfo',
      params: [{ name: 'flags', type: '#' }, { name: 'name', type: 'flags.0?string' }, {
        name: 'phone',
        type: 'flags.1?string'
      }, { name: 'email', type: 'flags.2?string' }, { name: 'shipping_address', type: 'flags.3?PostAddress' }],
      type: 'PaymentRequestedInfo'
    },
    '-2095595325': {
      id: -2095595325,
      predicate: 'updateBotWebhookJSON',
      params: [{ name: 'data', type: 'DataJSON' }],
      type: 'Update'
    },
    '-1684914010': {
      id: -1684914010,
      predicate: 'updateBotWebhookJSONQuery',
      params: [{ name: 'query_id', type: 'long' }, { name: 'data', type: 'DataJSON' }, {
        name: 'timeout',
        type: 'int'
      }],
      type: 'Update'
    },
    '-523384512': {
      id: -523384512,
      predicate: 'updateBotShippingQuery',
      params: [{ name: 'query_id', type: 'long' }, { name: 'user_id', type: 'int' }, {
        name: 'payload',
        type: 'bytes'
      }, { name: 'shipping_address', type: 'PostAddress' }],
      type: 'Update'
    },
    '-886477832': {
      id: -886477832,
      predicate: 'labeledPrice',
      params: [{ name: 'label', type: 'string' }, { name: 'amount', type: 'long' }],
      type: 'LabeledPrice'
    },
    '-368917890': {
      id: -368917890,
      predicate: 'paymentCharge',
      params: [{ name: 'id', type: 'string' }, { name: 'provider_charge_id', type: 'string' }],
      type: 'PaymentCharge'
    },
    '-842892769': {
      id: -842892769,
      predicate: 'paymentSavedCredentialsCard',
      params: [{ name: 'id', type: 'string' }, { name: 'title', type: 'string' }],
      type: 'PaymentSavedCredentials'
    },
    '-971322408': {
      id: -971322408,
      predicate: 'webDocument',
      params: [{ name: 'url', type: 'string' }, { name: 'access_hash', type: 'long' }, {
        name: 'size',
        type: 'int'
      }, { name: 'mime_type', type: 'string' }, {
        name: 'attributes',
        type: 'Vector<DocumentAttribute>'
      }, { name: 'dc_id', type: 'int' }],
      type: 'WebDocument'
    },
    '-1678949555': {
      id: -1678949555,
      predicate: 'inputWebDocument',
      params: [{ name: 'url', type: 'string' }, { name: 'size', type: 'int' }, {
        name: 'mime_type',
        type: 'string'
      }, { name: 'attributes', type: 'Vector<DocumentAttribute>' }],
      type: 'InputWebDocument'
    },
    '-1036396922': {
      id: -1036396922,
      predicate: 'inputWebFileLocation',
      params: [{ name: 'url', type: 'string' }, { name: 'access_hash', type: 'long' }],
      type: 'InputWebFileLocation'
    },
    '-784000893': {
      id: -784000893,
      predicate: 'payments.validatedRequestedInfo',
      params: [{ name: 'flags', type: '#' }, { name: 'id', type: 'flags.0?string' }, {
        name: 'shipping_options',
        type: 'flags.1?Vector<ShippingOption>'
      }],
      type: 'payments.ValidatedRequestedInfo'
    },
    '-74456004': {
      id: -74456004,
      predicate: 'payments.savedInfo',
      params: [{ name: 'flags', type: '#' }, {
        name: 'has_saved_credentials',
        type: 'flags.1?true'
      }, { name: 'saved_info', type: 'flags.0?PaymentRequestedInfo' }],
      type: 'payments.SavedInfo'
    },
    '-1056001329': {
      id: -1056001329,
      predicate: 'inputPaymentCredentialsSaved',
      params: [{ name: 'id', type: 'string' }, { name: 'tmp_password', type: 'bytes' }],
      type: 'InputPaymentCredentials'
    },
    '-614138572': {
      id: -614138572,
      predicate: 'account.tmpPassword',
      params: [{ name: 'tmp_password', type: 'bytes' }, { name: 'valid_until', type: 'int' }],
      type: 'account.TmpPassword'
    },
    '-1239335713': {
      id: -1239335713,
      predicate: 'shippingOption',
      params: [{ name: 'id', type: 'string' }, { name: 'title', type: 'string' }, {
        name: 'prices',
        type: 'Vector<LabeledPrice>'
      }],
      type: 'ShippingOption'
    },
    '-1253451181': { id: -1253451181, predicate: 'inputMessagesFilterRoundVideo', params: [], type: 'MessagesFilter' },
    '-363659686': {
      id: -363659686,
      predicate: 'upload.fileCdnRedirect',
      params: [{ name: 'dc_id', type: 'int' }, { name: 'file_token', type: 'bytes' }, {
        name: 'encryption_key',
        type: 'bytes'
      }, { name: 'encryption_iv', type: 'bytes' }, { name: 'cdn_file_hashes', type: 'Vector<CdnFileHash>' }],
      type: 'upload.File'
    },
    '-1997373508': {
      id: -1997373508,
      predicate: 'sendMessageRecordRoundAction',
      params: [],
      type: 'SendMessageAction'
    },
    '-290921362': {
      id: -290921362,
      predicate: 'upload.cdnFileReuploadNeeded',
      params: [{ name: 'request_token', type: 'bytes' }],
      type: 'upload.CdnFile'
    },
    '-1449145777': {
      id: -1449145777,
      predicate: 'upload.cdnFile',
      params: [{ name: 'bytes', type: 'bytes' }],
      type: 'upload.CdnFile'
    },
    '-914167110': {
      id: -914167110,
      predicate: 'cdnPublicKey',
      params: [{ name: 'dc_id', type: 'int' }, { name: 'public_key', type: 'string' }],
      type: 'CdnPublicKey'
    },
    '-283684427': {
      id: -283684427,
      predicate: 'pageBlockChannel',
      params: [{ name: 'channel', type: 'Chat' }],
      type: 'PageBlock'
    },
    '-6249322': {
      id: -6249322,
      predicate: 'inputStickerSetItem',
      params: [{ name: 'flags', type: '#' }, { name: 'document', type: 'InputDocument' }, {
        name: 'emoji',
        type: 'string'
      }, { name: 'mask_coords', type: 'flags.0?MaskCoords' }],
      type: 'InputStickerSetItem'
    },
    '-892239370': {
      id: -892239370,
      predicate: 'langPackString',
      params: [{ name: 'key', type: 'string' }, { name: 'value', type: 'string' }],
      type: 'LangPackString'
    },
    '-209337866': {
      id: -209337866,
      predicate: 'langPackDifference',
      params: [{ name: 'lang_code', type: 'string' }, { name: 'from_version', type: 'int' }, {
        name: 'version',
        type: 'int'
      }, { name: 'strings', type: 'Vector<LangPackString>' }],
      type: 'LangPackDifference'
    },
    '-1473271656': {
      id: -1473271656,
      predicate: 'channelParticipantAdmin',
      params: [{ name: 'flags', type: '#' }, { name: 'can_edit', type: 'flags.0?true' }, {
        name: 'user_id',
        type: 'int'
      }, { name: 'inviter_id', type: 'int' }, { name: 'promoted_by', type: 'int' }, {
        name: 'date',
        type: 'int'
      }, { name: 'admin_rights', type: 'ChannelAdminRights' }],
      type: 'ChannelParticipant'
    },
    '-421545947': {
      id: -421545947,
      predicate: 'channelAdminLogEventActionChangeTitle',
      params: [{ name: 'prev_value', type: 'string' }, { name: 'new_value', type: 'string' }],
      type: 'ChannelAdminLogEventAction'
    },
    '-1204857405': {
      id: -1204857405,
      predicate: 'channelAdminLogEventActionChangePhoto',
      params: [{ name: 'prev_photo', type: 'ChatPhoto' }, { name: 'new_photo', type: 'ChatPhoto' }],
      type: 'ChannelAdminLogEventAction'
    },
    '-370660328': {
      id: -370660328,
      predicate: 'channelAdminLogEventActionUpdatePinned',
      params: [{ name: 'message', type: 'Message' }],
      type: 'ChannelAdminLogEventAction'
    },
    '-124291086': {
      id: -124291086,
      predicate: 'channelAdminLogEventActionParticipantLeave',
      params: [],
      type: 'ChannelAdminLogEventAction'
    },
    '-484690728': {
      id: -484690728,
      predicate: 'channelAdminLogEventActionParticipantInvite',
      params: [{ name: 'participant', type: 'ChannelParticipant' }],
      type: 'ChannelAdminLogEventAction'
    },
    '-422036098': {
      id: -422036098,
      predicate: 'channelAdminLogEventActionParticipantToggleBan',
      params: [{ name: 'prev_participant', type: 'ChannelParticipant' }, {
        name: 'new_participant',
        type: 'ChannelParticipant'
      }],
      type: 'ChannelAdminLogEventAction'
    },
    '-714643696': {
      id: -714643696,
      predicate: 'channelAdminLogEventActionParticipantToggleAdmin',
      params: [{ name: 'prev_participant', type: 'ChannelParticipant' }, {
        name: 'new_participant',
        type: 'ChannelParticipant'
      }],
      type: 'ChannelAdminLogEventAction'
    },
    '-309659827': {
      id: -309659827,
      predicate: 'channels.adminLogResults',
      params: [{ name: 'events', type: 'Vector<ChannelAdminLogEvent>' }, {
        name: 'chats',
        type: 'Vector<Chat>'
      }, { name: 'users', type: 'Vector<User>' }],
      type: 'channels.AdminLogResults'
    },
    '-368018716': {
      id: -368018716,
      predicate: 'channelAdminLogEventsFilter',
      params: [{ name: 'flags', type: '#' }, { name: 'join', type: 'flags.0?true' }, {
        name: 'leave',
        type: 'flags.1?true'
      }, { name: 'invite', type: 'flags.2?true' }, { name: 'ban', type: 'flags.3?true' }, {
        name: 'unban',
        type: 'flags.4?true'
      }, { name: 'kick', type: 'flags.5?true' }, { name: 'unkick', type: 'flags.6?true' }, {
        name: 'promote',
        type: 'flags.7?true'
      }, { name: 'demote', type: 'flags.8?true' }, { name: 'info', type: 'flags.9?true' }, {
        name: 'settings',
        type: 'flags.10?true'
      }, { name: 'pinned', type: 'flags.11?true' }, { name: 'edit', type: 'flags.12?true' }, {
        name: 'delete',
        type: 'flags.13?true'
      }],
      type: 'ChannelAdminLogEventsFilter'
    },
    '-1040652646': { id: -1040652646, predicate: 'inputMessagesFilterMyMentions', params: [], type: 'MessagesFilter' },
    '-1312568665': {
      id: -1312568665,
      predicate: 'channelAdminLogEventActionChangeStickerSet',
      params: [{ name: 'prev_stickerset', type: 'InputStickerSet' }, {
        name: 'new_stickerset',
        type: 'InputStickerSet'
      }],
      type: 'ChannelAdminLogEventAction'
    },
    '-451831443': { id: -451831443, predicate: 'updateFavedStickers', params: [], type: 'Update' },
    '-209768682': {
      id: -209768682,
      predicate: 'messages.favedStickers',
      params: [{ name: 'hash', type: 'int' }, { name: 'packs', type: 'Vector<StickerPack>' }, {
        name: 'stickers',
        type: 'Vector<Document>'
      }],
      type: 'messages.FavedStickers'
    },
    '-1634752813': {
      id: -1634752813,
      predicate: 'messages.favedStickersNotModified',
      params: [],
      type: 'messages.FavedStickers'
    },
    '-1987495099': {
      id: -1987495099,
      predicate: 'updateChannelReadMessagesContents',
      params: [{ name: 'channel_id', type: 'int' }, { name: 'messages', type: 'Vector<int>' }],
      type: 'Update'
    }
  },
  mtp: {
    '81704317': {
      id: 81704317,
      predicate: 'msgs_state_info',
      params: [{ name: 'req_msg_id', type: 'long' }, { name: 'info', type: 'bytes' }],
      type: 'MsgsStateInfo'
    },
    '85337187': {
      id: 85337187,
      predicate: 'resPQ',
      params: [{ name: 'nonce', type: 'int128' }, { name: 'server_nonce', type: 'int128' }, {
        name: 'pq',
        type: 'bytes'
      }, { name: 'server_public_key_fingerprints', type: 'Vector<long>' }],
      type: 'ResPQ'
    },
    '155834844': {
      id: 155834844,
      predicate: 'future_salt',
      params: [{ name: 'valid_since', type: 'int' }, { name: 'valid_until', type: 'int' }, {
        name: 'salt',
        type: 'long'
      }],
      type: 'FutureSalt'
    },
    '481674261': { id: 481674261, predicate: 'vector', params: [], type: 'Vector t' },
    '558156313': {
      id: 558156313,
      predicate: 'rpc_error',
      params: [{ name: 'error_code', type: 'int' }, { name: 'error_message', type: 'string' }],
      type: 'RpcError'
    },
    '661470918': {
      id: 661470918,
      predicate: 'msg_detailed_info',
      params: [{ name: 'msg_id', type: 'long' }, { name: 'answer_msg_id', type: 'long' }, {
        name: 'bytes',
        type: 'int'
      }, { name: 'status', type: 'int' }],
      type: 'MsgDetailedInfo'
    },
    '812830625': {
      id: 812830625,
      predicate: 'gzip_packed',
      params: [{ name: 'packed_data', type: 'bytes' }],
      type: 'Object'
    },
    '880243653': {
      id: 880243653,
      predicate: 'pong',
      params: [{ name: 'msg_id', type: 'long' }, { name: 'ping_id', type: 'long' }],
      type: 'Pong'
    },
    '1003222836': {
      id: 1003222836,
      predicate: 'dh_gen_ok',
      params: [{ name: 'nonce', type: 'int128' }, { name: 'server_nonce', type: 'int128' }, {
        name: 'new_nonce_hash1',
        type: 'int128'
      }],
      type: 'Set_client_DH_params_answer'
    },
    '1188831161': {
      id: 1188831161,
      predicate: 'dh_gen_retry',
      params: [{ name: 'nonce', type: 'int128' }, { name: 'server_nonce', type: 'int128' }, {
        name: 'new_nonce_hash2',
        type: 'int128'
      }],
      type: 'Set_client_DH_params_answer'
    },
    '1538843921': {
      id: 1538843921,
      predicate: 'message',
      params: [{ name: 'msg_id', type: 'long' }, { name: 'seqno', type: 'int' }, {
        name: 'bytes',
        type: 'int'
      }, { name: 'body', type: 'Object' }],
      type: 'Message'
    },
    '1579864942': { id: 1579864942, predicate: 'rpc_answer_unknown', params: [], type: 'RpcDropAnswer' },
    '1658015945': {
      id: 1658015945,
      predicate: 'destroy_session_none',
      params: [{ name: 'session_id', type: 'long' }],
      type: 'DestroySessionRes'
    },
    '1658238041': {
      id: 1658238041,
      predicate: 'msgs_ack',
      params: [{ name: 'msg_ids', type: 'Vector<long>' }],
      type: 'MsgsAck'
    },
    '1715713620': {
      id: 1715713620,
      predicate: 'client_DH_inner_data',
      params: [{ name: 'nonce', type: 'int128' }, { name: 'server_nonce', type: 'int128' }, {
        name: 'retry_id',
        type: 'long'
      }, { name: 'g_b', type: 'bytes' }],
      type: 'Client_DH_Inner_Data'
    },
    '1945237724': {
      id: 1945237724,
      predicate: 'msg_container',
      params: [{ name: 'messages', type: 'vector<%Message>' }],
      type: 'MessageContainer'
    },
    '2043348061': {
      id: 2043348061,
      predicate: 'server_DH_params_fail',
      params: [{ name: 'nonce', type: 'int128' }, { name: 'server_nonce', type: 'int128' }, {
        name: 'new_nonce_hash',
        type: 'int128'
      }],
      type: 'Server_DH_Params'
    },
    '2105940488': {
      id: 2105940488,
      predicate: 'msg_resend_req',
      params: [{ name: 'msg_ids', type: 'Vector<long>' }],
      type: 'MsgResendReq'
    },
    '-2083955988': {
      id: -2083955988,
      predicate: 'p_q_inner_data',
      params: [{ name: 'pq', type: 'bytes' }, { name: 'p', type: 'bytes' }, {
        name: 'q',
        type: 'bytes'
      }, { name: 'nonce', type: 'int128' }, { name: 'server_nonce', type: 'int128' }, {
        name: 'new_nonce',
        type: 'int256'
      }],
      type: 'P_Q_inner_data'
    },
    '-790100132': {
      id: -790100132,
      predicate: 'server_DH_params_ok',
      params: [{ name: 'nonce', type: 'int128' }, { name: 'server_nonce', type: 'int128' }, {
        name: 'encrypted_answer',
        type: 'bytes'
      }],
      type: 'Server_DH_Params'
    },
    '-1249309254': {
      id: -1249309254,
      predicate: 'server_DH_inner_data',
      params: [{ name: 'nonce', type: 'int128' }, { name: 'server_nonce', type: 'int128' }, {
        name: 'g',
        type: 'int'
      }, { name: 'dh_prime', type: 'bytes' }, { name: 'g_a', type: 'bytes' }, { name: 'server_time', type: 'int' }],
      type: 'Server_DH_inner_data'
    },
    '-1499615742': {
      id: -1499615742,
      predicate: 'dh_gen_fail',
      params: [{ name: 'nonce', type: 'int128' }, { name: 'server_nonce', type: 'int128' }, {
        name: 'new_nonce_hash3',
        type: 'int128'
      }],
      type: 'Set_client_DH_params_answer'
    },
    '-212046591': {
      id: -212046591,
      predicate: 'rpc_result',
      params: [{ name: 'req_msg_id', type: 'long' }, { name: 'result', type: 'Object' }],
      type: 'RpcResult'
    },
    '-847714938': { id: -847714938, predicate: 'rpc_answer_dropped_running', params: [], type: 'RpcDropAnswer' },
    '-1539647305': {
      id: -1539647305,
      predicate: 'rpc_answer_dropped',
      params: [{ name: 'msg_id', type: 'long' }, { name: 'seq_no', type: 'int' }, { name: 'bytes', type: 'int' }],
      type: 'RpcDropAnswer'
    },
    '-1370486635': {
      id: -1370486635,
      predicate: 'future_salts',
      params: [{ name: 'req_msg_id', type: 'long' }, { name: 'now', type: 'int' }, {
        name: 'salts',
        type: 'vector<future_salt>'
      }],
      type: 'FutureSalts'
    },
    '-501201412': {
      id: -501201412,
      predicate: 'destroy_session_ok',
      params: [{ name: 'session_id', type: 'long' }],
      type: 'DestroySessionRes'
    },
    '-1631450872': {
      id: -1631450872,
      predicate: 'new_session_created',
      params: [{ name: 'first_msg_id', type: 'long' }, { name: 'unique_id', type: 'long' }, {
        name: 'server_salt',
        type: 'long'
      }],
      type: 'NewSession'
    },
    '-530561358': {
      id: -530561358,
      predicate: 'msg_copy',
      params: [{ name: 'orig_message', type: 'Message' }],
      type: 'MessageCopy'
    },
    '-1477445615': {
      id: -1477445615,
      predicate: 'bad_msg_notification',
      params: [{ name: 'bad_msg_id', type: 'long' }, { name: 'bad_msg_seqno', type: 'int' }, {
        name: 'error_code',
        type: 'int'
      }],
      type: 'BadMsgNotification'
    },
    '-307542917': {
      id: -307542917,
      predicate: 'bad_server_salt',
      params: [{ name: 'bad_msg_id', type: 'long' }, { name: 'bad_msg_seqno', type: 'int' }, {
        name: 'error_code',
        type: 'int'
      }, { name: 'new_server_salt', type: 'long' }],
      type: 'BadMsgNotification'
    },
    '-630588590': {
      id: -630588590,
      predicate: 'msgs_state_req',
      params: [{ name: 'msg_ids', type: 'Vector<long>' }],
      type: 'MsgsStateReq'
    },
    '-1933520591': {
      id: -1933520591,
      predicate: 'msgs_all_info',
      params: [{ name: 'msg_ids', type: 'Vector<long>' }, { name: 'info', type: 'bytes' }],
      type: 'MsgsAllInfo'
    },
    '-2137147681': {
      id: -2137147681,
      predicate: 'msg_new_detailed_info',
      params: [{ name: 'answer_msg_id', type: 'long' }, { name: 'bytes', type: 'int' }, {
        name: 'status',
        type: 'int'
      }],
      type: 'MsgDetailedInfo'
    }
  }
}

const typeMap = {
  'Bool': '-1720552011',
  'Error': '-994444869',
  'Null': '1450380236',
  'InputPeer': '548253432',
  'InputUser': '-668391402',
  'InputContact': '-208488460',
  'InputFile': '-95482955',
  'InputMedia': '-1844103547',
  'InputChatPhoto': '-1991004873',
  'InputGeoPoint': '-206066487',
  'InputPhoto': '-74070332',
  'InputFileLocation': '1125058340',
  'InputAppEvent': '1996904104',
  'Peer': '-1109531342',
  'storage.FileType': '-1373745011',
  'FileLocation': '1406570614',
  'User': '773059779',
  'UserProfilePhoto': '-715532088',
  'UserStatus': '2011940674',
  'Chat': '681420594',
  'ChatFull': '401891279',
  'ChatParticipant': '-489233354',
  'ChatParticipants': '1061556205',
  'ChatPhoto': '1632839530',
  'Message': '1538843921',
  'MessageMedia': '-2074799289',
  'MessageAction': '1200788123',
  'Dialog': '-455150117',
  'Photo': '-1836524247',
  'PhotoSize': '-374917894',
  'GeoPoint': '541710092',
  'auth.CheckedPhone': '-2128698738',
  'auth.SentCode': '1577067778',
  'auth.Authorization': '-855308010',
  'auth.ExportedAuthorization': '-543777747',
  'InputNotifyPeer': '-1540769658',
  'InputPeerNotifySettings': '949182130',
  'PeerNotifyEvents': '1830677896',
  'PeerNotifySettings': '-1697798976',
  'WallPaper': '1662091044',
  'UserFull': '253890367',
  'Contact': '-116274796',
  'ImportedContact': '-805141448',
  'ContactBlocked': '1444661369',
  'ContactStatus': '-748155807',
  'contacts.Link': '986597452',
  'contacts.Contacts': '-1219778094',
  'contacts.ImportedContacts': '2010127419',
  'contacts.Blocked': '-1878523231',
  'contacts.Found': '446822276',
  'messages.Dialogs': '1910543603',
  'messages.Messages': '-1725551049',
  'messages.Chats': '-1663561404',
  'messages.ChatFull': '-438840932',
  'messages.AffectedHistory': '-1269012015',
  'MessagesFilter': '1187706024',
  'Update': '-1987495099',
  'updates.State': '-1519637954',
  'updates.Difference': '1258196845',
  'Updates': '301019932',
  'photos.Photo': '539045032',
  'upload.File': '-363659686',
  'DcOption': '98092748',
  'Config': '-1913424220',
  'NearestDc': '-1910892683',
  'help.AppUpdate': '-1000708810',
  'help.InviteText': '415997816',
  'InputPeerNotifyEvents': '-395694988',
  'photos.Photos': '352657236',
  'EncryptedChat': '332848423',
  'InputEncryptedChat': '-247351839',
  'EncryptedFile': '1248893260',
  'InputEncryptedFile': '767652808',
  'EncryptedMessage': '594758406',
  'messages.DhConfig': '740433629',
  'messages.SentEncryptedMessage': '-1802240206',
  'InputDocument': '410618194',
  'Document': '-2027738169',
  'help.Support': '398898678',
  'NotifyPeer': '-1261946036',
  'SendMessageAction': '608050278',
  'InputPrivacyKey': '-88417185',
  'PrivacyKey': '1030105979',
  'InputPrivacyRule': '-1877932953',
  'PrivacyRule': '209668535',
  'account.PrivacyRules': '1430961007',
  'AccountDaysTTL': '-1194283041',
  'DisabledFeature': '-1369215196',
  'DocumentAttribute': '-1744710921',
  'messages.Stickers': '-1970352846',
  'StickerPack': '313694676',
  'messages.AllStickers': '-302170017',
  'account.Password': '2081952796',
  'messages.AffectedMessages': '-2066640507',
  'ContactLink': '-721239344',
  'WebPage': '-2054908813',
  'Authorization': '2079516406',
  'account.Authorizations': '307276766',
  'account.PasswordSettings': '-1212732749',
  'account.PasswordInputSettings': '-2037289493',
  'auth.PasswordRecovery': '326715557',
  'ReceivedNotifyMessage': '-1551583367',
  'ExportedChatInvite': '-64092740',
  'ChatInvite': '-613092008',
  'InputStickerSet': '-2044933984',
  'StickerSet': '-852477119',
  'messages.StickerSet': '-1240849242',
  'BotCommand': '-1032140601',
  'BotInfo': '-1729618630',
  'KeyboardButton': '-1344716869',
  'KeyboardButtonRow': '2002815875',
  'ReplyMarkup': '1218642516',
  'MessageEntity': '546203849',
  'InputChannel': '-1343524562',
  'contacts.ResolvedPeer': '2131196633',
  'MessageRange': '182649427',
  'updates.ChannelDifference': '543450958',
  'ChannelMessagesFilter': '-847783593',
  'ChannelParticipant': '573315206',
  'ChannelParticipantsFilter': '106343499',
  'channels.ChannelParticipants': '-177282392',
  'channels.ChannelParticipant': '-791039645',
  'True': '1072550713',
  'ReportReason': '-512463606',
  'help.TermsOfService': '-236044656',
  'FoundGif': '-1670052855',
  'messages.FoundGifs': '1158290442',
  'messages.SavedGifs': '772213157',
  'InputBotInlineMessage': '1262639204',
  'InputBotInlineResult': '1336154098',
  'BotInlineMessage': '904770772',
  'BotInlineResult': '400266251',
  'messages.BotResults': '-858565059',
  'ExportedMessageLink': '524838915',
  'MessageFwdHeader': '-85986132',
  'PeerSettings': '-2122045747',
  'auth.CodeType': '577556219',
  'auth.SentCodeType': '-1425815847',
  'messages.BotCallbackAnswer': '911761060',
  'messages.MessageEditData': '649453030',
  'InputBotInlineMessageID': '-1995686519',
  'InlineBotSwitchPM': '1008755359',
  'messages.PeerDialogs': '863093588',
  'TopPeer': '-305282981',
  'TopPeerCategory': '511092620',
  'TopPeerCategoryPeers': '-75283823',
  'contacts.TopPeers': '1891070632',
  'DraftMessage': '-40996577',
  'messages.FeaturedStickers': '-123893531',
  'messages.RecentStickers': '1558317424',
  'messages.ArchivedStickers': '1338747336',
  'messages.StickerSetInstallResult': '904138920',
  'StickerSetCovered': '872932635',
  'MaskCoords': '-1361650766',
  'InputStickeredMedia': '70813275',
  'Game': '-1107729093',
  'InputGame': '-1020139510',
  'HighScore': '1493171408',
  'messages.HighScores': '-1707344487',
  'RichText': '2120376535',
  'PageBlock': '834148991',
  'Page': '1433323434',
  'InputPhoneCall': '506920429',
  'PhoneCall': '1828732223',
  'PhoneConnection': '-1655957568',
  'PhoneCallProtocol': '-1564789301',
  'phone.PhoneCall': '-326966976',
  'PhoneCallDiscardReason': '-84416311',
  'Invoice': '-1022713000',
  'payments.PaymentForm': '1062645411',
  'PostAddress': '512535275',
  'PaymentRequestedInfo': '-1868808300',
  'DataJSON': '2104790276',
  'LabeledPrice': '-886477832',
  'PaymentCharge': '-368917890',
  'PaymentSavedCredentials': '-842892769',
  'WebDocument': '-971322408',
  'InputWebDocument': '-1678949555',
  'InputWebFileLocation': '-1036396922',
  'upload.WebFile': '568808380',
  'payments.ValidatedRequestedInfo': '-784000893',
  'payments.PaymentResult': '1800845601',
  'payments.PaymentReceipt': '1342771681',
  'payments.SavedInfo': '-74456004',
  'InputPaymentCredentials': '873977640',
  'account.TmpPassword': '-614138572',
  'ShippingOption': '-1239335713',
  'upload.CdnFile': '-1449145777',
  'CdnPublicKey': '-914167110',
  'CdnConfig': '1462101002',
  'InputStickerSetItem': '-6249322',
  'LangPackString': '695856818',
  'LangPackDifference': '-209337866',
  'LangPackLanguage': '292985073',
  'ChannelAdminRights': '1568467877',
  'ChannelBannedRights': '1489977929',
  'ChannelAdminLogEventAction': '-1312568665',
  'ChannelAdminLogEvent': '995769920',
  'channels.AdminLogResults': '-309659827',
  'ChannelAdminLogEventsFilter': '-368018716',
  'PopularContact': '1558266229',
  'CdnFileHash': '2012136335',
  'messages.FavedStickers': '-1634752813',
  'Vector t': '481674261',
  'ResPQ': '85337187',
  'P_Q_inner_data': '-2083955988',
  'Server_DH_Params': '-790100132',
  'Server_DH_inner_data': '-1249309254',
  'Client_DH_Inner_Data': '1715713620',
  'Set_client_DH_params_answer': '-1499615742',
  'RpcResult': '-212046591',
  'RpcError': '558156313',
  'RpcDropAnswer': '-1539647305',
  'FutureSalt': '155834844',
  'FutureSalts': '-1370486635',
  'Pong': '880243653',
  'DestroySessionRes': '1658015945',
  'NewSession': '-1631450872',
  'MessageContainer': '1945237724',
  'MessageCopy': '-530561358',
  'Object': '812830625',
  'MsgsAck': '1658238041',
  'BadMsgNotification': '-307542917',
  'MsgResendReq': '2105940488',
  'MsgsStateReq': '-630588590',
  'MsgsStateInfo': '81704317',
  'MsgsAllInfo': '-1933520591',
  'MsgDetailedInfo': '-2137147681'
}

const predicateMap = {
  'boolFalse': '-1132882121',
  'boolTrue': '-1720552011',
  'error': '-994444869',
  'null': '1450380236',
  'inputPeerEmpty': '2134579434',
  'inputPeerSelf': '2107670217',
  'inputPeerChat': '396093539',
  'inputUserEmpty': '-1182234929',
  'inputUserSelf': '-138301121',
  'inputPhoneContact': '-208488460',
  'inputFile': '-181407105',
  'inputMediaEmpty': '-1771768449',
  'inputMediaUploadedPhoto': '792191537',
  'inputMediaPhoto': '-2114308294',
  'inputMediaGeoPoint': '-104578748',
  'inputMediaContact': '-1494984313',
  'inputChatPhotoEmpty': '480546647',
  'inputChatUploadedPhoto': '-1837345356',
  'inputChatPhoto': '-1991004873',
  'inputGeoPointEmpty': '-457104426',
  'inputGeoPoint': '-206066487',
  'inputPhotoEmpty': '483901197',
  'inputPhoto': '-74070332',
  'inputFileLocation': '342061462',
  'inputAppEvent': '1996904104',
  'peerUser': '-1649296275',
  'peerChat': '-1160714821',
  'storage.fileUnknown': '-1432995067',
  'storage.fileJpeg': '8322574',
  'storage.fileGif': '-891180321',
  'storage.filePng': '172975040',
  'storage.fileMp3': '1384777335',
  'storage.fileMov': '1258941372',
  'storage.filePartial': '1086091090',
  'storage.fileMp4': '-1278304028',
  'storage.fileWebp': '276907596',
  'fileLocationUnavailable': '2086234950',
  'fileLocation': '1406570614',
  'userEmpty': '537022650',
  'userProfilePhotoEmpty': '1326562017',
  'userProfilePhoto': '-715532088',
  'userStatusEmpty': '164646985',
  'userStatusOnline': '-306628279',
  'userStatusOffline': '9203775',
  'chatEmpty': '-1683826688',
  'chat': '-652419756',
  'chatForbidden': '120753115',
  'chatFull': '771925524',
  'chatParticipant': '-925415106',
  'chatParticipantsForbidden': '-57668565',
  'chatParticipants': '1061556205',
  'chatPhotoEmpty': '935395612',
  'chatPhoto': '1632839530',
  'messageEmpty': '-2082087340',
  'message': '1538843921',
  'messageService': '-1642487306',
  'messageMediaEmpty': '1038967584',
  'messageMediaPhoto': '-1256047857',
  'messageMediaGeo': '1457575028',
  'messageMediaContact': '1585262393',
  'messageMediaUnsupported': '-1618676578',
  'messageActionEmpty': '-1230047312',
  'messageActionChatCreate': '-1503425638',
  'messageActionChatEditTitle': '-1247687078',
  'messageActionChatEditPhoto': '2144015272',
  'messageActionChatDeletePhoto': '-1780220945',
  'messageActionChatAddUser': '1217033015',
  'messageActionChatDeleteUser': '-1297179892',
  'dialog': '-455150117',
  'photoEmpty': '590459437',
  'photo': '-1836524247',
  'photoSizeEmpty': '236446268',
  'photoSize': '2009052699',
  'photoCachedSize': '-374917894',
  'geoPointEmpty': '286776671',
  'geoPoint': '541710092',
  'auth.checkedPhone': '-2128698738',
  'auth.sentCode': '1577067778',
  'auth.authorization': '-855308010',
  'auth.exportedAuthorization': '-543777747',
  'inputNotifyPeer': '-1195615476',
  'inputNotifyUsers': '423314455',
  'inputNotifyChats': '1251338318',
  'inputNotifyAll': '-1540769658',
  'inputPeerNotifySettings': '949182130',
  'peerNotifyEventsEmpty': '-1378534221',
  'peerNotifyEventsAll': '1830677896',
  'peerNotifySettingsEmpty': '1889961234',
  'peerNotifySettings': '-1697798976',
  'wallPaper': '-860866985',
  'userFull': '253890367',
  'contact': '-116274796',
  'importedContact': '-805141448',
  'contactBlocked': '1444661369',
  'contactStatus': '-748155807',
  'contacts.link': '986597452',
  'contacts.contacts': '-353862078',
  'contacts.contactsNotModified': '-1219778094',
  'contacts.importedContacts': '2010127419',
  'contacts.blocked': '471043349',
  'contacts.blockedSlice': '-1878523231',
  'contacts.found': '446822276',
  'messages.dialogs': '364538944',
  'messages.dialogsSlice': '1910543603',
  'messages.messages': '-1938715001',
  'messages.messagesSlice': '189033187',
  'messages.chats': '1694474197',
  'messages.chatFull': '-438840932',
  'messages.affectedHistory': '-1269012015',
  'inputMessagesFilterEmpty': '1474492012',
  'inputMessagesFilterPhotos': '-1777752804',
  'inputMessagesFilterVideo': '-1614803355',
  'inputMessagesFilterPhotoVideo': '1458172132',
  'updateNewMessage': '522914557',
  'updateMessageID': '1318109142',
  'updateDeleteMessages': '-1576161051',
  'updateUserTyping': '1548249383',
  'updateChatUserTyping': '-1704596961',
  'updateChatParticipants': '125178264',
  'updateUserStatus': '469489699',
  'updateUserName': '-1489818765',
  'updateUserPhoto': '-1791935732',
  'updateContactRegistered': '628472761',
  'updateContactLink': '-1657903163',
  'updates.state': '-1519637954',
  'updates.differenceEmpty': '1567990072',
  'updates.difference': '16030880',
  'updates.differenceSlice': '-1459938943',
  'updatesTooLong': '-484987010',
  'updateShortMessage': '-1857044719',
  'updateShortChatMessage': '377562760',
  'updateShort': '2027216577',
  'updatesCombined': '1918567619',
  'updates': '1957577280',
  'photos.photo': '539045032',
  'upload.file': '157948117',
  'dcOption': '98092748',
  'config': '-1913424220',
  'nearestDc': '-1910892683',
  'help.appUpdate': '-1987579119',
  'help.noAppUpdate': '-1000708810',
  'help.inviteText': '415997816',
  'inputPeerNotifyEventsEmpty': '-265263912',
  'inputPeerNotifyEventsAll': '-395694988',
  'photos.photos': '-1916114267',
  'photos.photosSlice': '352657236',
  'wallPaperSolid': '1662091044',
  'updateNewEncryptedMessage': '314359194',
  'updateEncryptedChatTyping': '386986326',
  'updateEncryption': '-1264392051',
  'updateEncryptedMessagesRead': '956179895',
  'encryptedChatEmpty': '-1417756512',
  'encryptedChatWaiting': '1006044124',
  'encryptedChatRequested': '-931638658',
  'encryptedChat': '-94974410',
  'encryptedChatDiscarded': '332848423',
  'inputEncryptedChat': '-247351839',
  'encryptedFileEmpty': '-1038136962',
  'encryptedFile': '1248893260',
  'inputEncryptedFileEmpty': '406307684',
  'inputEncryptedFileUploaded': '1690108678',
  'inputEncryptedFile': '1511503333',
  'inputEncryptedFileLocation': '-182231723',
  'encryptedMessage': '-317144808',
  'encryptedMessageService': '594758406',
  'messages.dhConfigNotModified': '-1058912715',
  'messages.dhConfig': '740433629',
  'messages.sentEncryptedMessage': '1443858741',
  'messages.sentEncryptedFile': '-1802240206',
  'inputFileBig': '-95482955',
  'inputEncryptedFileBigUploaded': '767652808',
  'storage.filePdf': '-1373745011',
  'inputMessagesFilterDocument': '-1629621880',
  'inputMessagesFilterPhotoVideoDocuments': '-648121413',
  'updateChatParticipantAdd': '-364179876',
  'updateChatParticipantDelete': '1851755554',
  'updateDcOptions': '-1906403213',
  'inputMediaUploadedDocument': '-476700163',
  'inputMediaDocument': '1523279502',
  'messageMediaDocument': '2084836563',
  'inputDocumentEmpty': '1928391342',
  'inputDocument': '410618194',
  'inputDocumentFileLocation': '1125058340',
  'documentEmpty': '922273905',
  'document': '-2027738169',
  'help.support': '398898678',
  'notifyAll': '1959820384',
  'notifyChats': '-1073230141',
  'notifyPeer': '-1613493288',
  'notifyUsers': '-1261946036',
  'updateUserBlocked': '-2131957734',
  'updateNotifySettings': '-1094555409',
  'sendMessageTypingAction': '381645902',
  'sendMessageCancelAction': '-44119819',
  'sendMessageRecordVideoAction': '-1584933265',
  'sendMessageUploadVideoAction': '-378127636',
  'sendMessageRecordAudioAction': '-718310409',
  'sendMessageUploadAudioAction': '-212740181',
  'sendMessageUploadPhotoAction': '-774682074',
  'sendMessageUploadDocumentAction': '-1441998364',
  'sendMessageGeoLocationAction': '393186209',
  'sendMessageChooseContactAction': '1653390447',
  'updateServiceNotification': '-337352679',
  'userStatusRecently': '-496024847',
  'userStatusLastWeek': '129960444',
  'userStatusLastMonth': '2011940674',
  'updatePrivacy': '-298113238',
  'inputPrivacyKeyStatusTimestamp': '1335282456',
  'privacyKeyStatusTimestamp': '-1137792208',
  'inputPrivacyValueAllowContacts': '218751099',
  'inputPrivacyValueAllowAll': '407582158',
  'inputPrivacyValueAllowUsers': '320652927',
  'inputPrivacyValueDisallowContacts': '195371015',
  'inputPrivacyValueDisallowAll': '-697604407',
  'inputPrivacyValueDisallowUsers': '-1877932953',
  'privacyValueAllowContacts': '-123988',
  'privacyValueAllowAll': '1698855810',
  'privacyValueAllowUsers': '1297858060',
  'privacyValueDisallowContacts': '-125240806',
  'privacyValueDisallowAll': '-1955338397',
  'privacyValueDisallowUsers': '209668535',
  'account.privacyRules': '1430961007',
  'accountDaysTTL': '-1194283041',
  'updateUserPhone': '314130811',
  'disabledFeature': '-1369215196',
  'documentAttributeImageSize': '1815593308',
  'documentAttributeAnimated': '297109817',
  'documentAttributeSticker': '1662637586',
  'documentAttributeVideo': '250621158',
  'documentAttributeAudio': '-1739392570',
  'documentAttributeFilename': '358154344',
  'messages.stickersNotModified': '-244016606',
  'messages.stickers': '-1970352846',
  'stickerPack': '313694676',
  'messages.allStickersNotModified': '-395967805',
  'messages.allStickers': '-302170017',
  'account.noPassword': '-1764049896',
  'account.password': '2081952796',
  'updateReadHistoryInbox': '-1721631396',
  'updateReadHistoryOutbox': '791617983',
  'messages.affectedMessages': '-2066640507',
  'contactLinkUnknown': '1599050311',
  'contactLinkNone': '-17968211',
  'contactLinkHasPhone': '646922073',
  'contactLinkContact': '-721239344',
  'updateWebPage': '2139689491',
  'webPageEmpty': '-350980120',
  'webPagePending': '-981018084',
  'webPage': '1594340540',
  'messageMediaWebPage': '-1557277184',
  'authorization': '2079516406',
  'account.authorizations': '307276766',
  'account.passwordSettings': '-1212732749',
  'account.passwordInputSettings': '-2037289493',
  'auth.passwordRecovery': '326715557',
  'inputMediaVenue': '673687578',
  'messageMediaVenue': '2031269663',
  'receivedNotifyMessage': '-1551583367',
  'chatInviteEmpty': '1776236393',
  'chatInviteExported': '-64092740',
  'chatInviteAlready': '1516793212',
  'chatInvite': '-613092008',
  'messageActionChatJoinedByLink': '-123931160',
  'updateReadMessagesContents': '1757493555',
  'inputStickerSetEmpty': '-4838507',
  'inputStickerSetID': '-1645763991',
  'inputStickerSetShortName': '-2044933984',
  'stickerSet': '-852477119',
  'messages.stickerSet': '-1240849242',
  'user': '773059779',
  'botCommand': '-1032140601',
  'botInfo': '-1729618630',
  'keyboardButton': '-1560655744',
  'keyboardButtonRow': '2002815875',
  'replyKeyboardHide': '-1606526075',
  'replyKeyboardForceReply': '-200242528',
  'replyKeyboardMarkup': '889353612',
  'inputMessagesFilterUrl': '2129714567',
  'inputPeerUser': '2072935910',
  'inputUser': '-668391402',
  'messageEntityUnknown': '-1148011883',
  'messageEntityMention': '-100378723',
  'messageEntityHashtag': '1868782349',
  'messageEntityBotCommand': '1827637959',
  'messageEntityUrl': '1859134776',
  'messageEntityEmail': '1692693954',
  'messageEntityBold': '-1117713463',
  'messageEntityItalic': '-2106619040',
  'messageEntityCode': '681706865',
  'messageEntityPre': '1938967520',
  'messageEntityTextUrl': '1990644519',
  'updateShortSentMessage': '301019932',
  'inputPeerChannel': '548253432',
  'peerChannel': '-1109531342',
  'channel': '213142300',
  'channelForbidden': '681420594',
  'channelFull': '401891279',
  'messageActionChannelCreate': '-1781355374',
  'messages.channelMessages': '-1725551049',
  'updateChannelTooLong': '-352032773',
  'updateChannel': '-1227598250',
  'updateNewChannelMessage': '1656358105',
  'updateReadChannelInbox': '1108669311',
  'updateDeleteChannelMessages': '-1015733815',
  'updateChannelMessageViews': '-1734268085',
  'inputChannelEmpty': '-292807034',
  'inputChannel': '-1343524562',
  'contacts.resolvedPeer': '2131196633',
  'messageRange': '182649427',
  'updates.channelDifferenceEmpty': '1041346555',
  'updates.channelDifferenceTooLong': '1788705589',
  'updates.channelDifference': '543450958',
  'channelMessagesFilterEmpty': '-1798033689',
  'channelMessagesFilter': '-847783593',
  'channelParticipant': '367766557',
  'channelParticipantSelf': '-1557620115',
  'channelParticipantCreator': '-471670279',
  'channelParticipantsRecent': '-566281095',
  'channelParticipantsAdmins': '-1268741783',
  'channelParticipantsKicked': '-1548400251',
  'channels.channelParticipants': '-177282392',
  'channels.channelParticipant': '-791039645',
  'true': '1072550713',
  'chatParticipantCreator': '-636267638',
  'chatParticipantAdmin': '-489233354',
  'updateChatAdmins': '1855224129',
  'updateChatParticipantAdmin': '-1232070311',
  'messageActionChatMigrateTo': '1371385889',
  'messageActionChannelMigrateFrom': '-1336546578',
  'channelParticipantsBots': '-1328445861',
  'inputReportReasonSpam': '1490799288',
  'inputReportReasonViolence': '505595789',
  'inputReportReasonPornography': '777640226',
  'inputReportReasonOther': '-512463606',
  'updateNewStickerSet': '1753886890',
  'updateStickerSetsOrder': '196268545',
  'updateStickerSets': '1135492588',
  'help.termsOfService': '-236044656',
  'foundGif': '372165663',
  'inputMediaGifExternal': '1212395773',
  'messages.foundGifs': '1158290442',
  'inputMessagesFilterGif': '-3644025',
  'updateSavedGifs': '-1821035490',
  'updateBotInlineQuery': '1417832080',
  'foundGifCached': '-1670052855',
  'messages.savedGifsNotModified': '-402498398',
  'messages.savedGifs': '772213157',
  'inputBotInlineMessageMediaAuto': '691006739',
  'inputBotInlineMessageText': '1036876423',
  'inputBotInlineResult': '750510426',
  'botInlineMessageMediaAuto': '175419739',
  'botInlineMessageText': '-1937807902',
  'botInlineResult': '-1679053127',
  'messages.botResults': '-858565059',
  'inputMessagesFilterVoice': '1358283666',
  'inputMessagesFilterMusic': '928101534',
  'updateBotInlineSend': '239663460',
  'inputPrivacyKeyChatInvite': '-1107622874',
  'privacyKeyChatInvite': '1343122938',
  'updateEditChannelMessage': '457133559',
  'exportedMessageLink': '524838915',
  'messageFwdHeader': '-85986132',
  'messageActionPinMessage': '-1799538451',
  'peerSettings': '-2122045747',
  'updateChannelPinnedMessage': '-1738988427',
  'keyboardButtonUrl': '629866245',
  'keyboardButtonCallback': '1748655686',
  'keyboardButtonRequestPhone': '-1318425559',
  'keyboardButtonRequestGeoLocation': '-59151553',
  'auth.codeTypeSms': '1923290508',
  'auth.codeTypeCall': '1948046307',
  'auth.codeTypeFlashCall': '577556219',
  'auth.sentCodeTypeApp': '1035688326',
  'auth.sentCodeTypeSms': '-1073693790',
  'auth.sentCodeTypeCall': '1398007207',
  'auth.sentCodeTypeFlashCall': '-1425815847',
  'keyboardButtonSwitchInline': '90744648',
  'replyInlineMarkup': '1218642516',
  'messages.botCallbackAnswer': '911761060',
  'updateBotCallbackQuery': '-415938591',
  'messages.messageEditData': '649453030',
  'updateEditMessage': '-469536605',
  'inputBotInlineMessageMediaGeo': '-190472735',
  'inputBotInlineMessageMediaVenue': '-1431327288',
  'inputBotInlineMessageMediaContact': '766443943',
  'botInlineMessageMediaGeo': '982505656',
  'botInlineMessageMediaVenue': '1130767150',
  'botInlineMessageMediaContact': '904770772',
  'inputBotInlineResultPhoto': '-1462213465',
  'inputBotInlineResultDocument': '-459324',
  'botInlineMediaResult': '400266251',
  'inputBotInlineMessageID': '-1995686519',
  'updateInlineBotCallbackQuery': '-103646630',
  'inlineBotSwitchPM': '1008755359',
  'messageEntityMentionName': '892193368',
  'inputMessageEntityMentionName': '546203849',
  'messages.peerDialogs': '863093588',
  'topPeer': '-305282981',
  'topPeerCategoryBotsPM': '-1419371685',
  'topPeerCategoryBotsInline': '344356834',
  'topPeerCategoryCorrespondents': '104314861',
  'topPeerCategoryGroups': '-1122524854',
  'topPeerCategoryChannels': '371037736',
  'topPeerCategoryPeers': '-75283823',
  'contacts.topPeersNotModified': '-567906571',
  'contacts.topPeers': '1891070632',
  'inputMessagesFilterChatPhotos': '975236280',
  'updateReadChannelOutbox': '634833351',
  'updateDraftMessage': '-299124375',
  'draftMessageEmpty': '-1169445179',
  'draftMessage': '-40996577',
  'messageActionHistoryClear': '-1615153660',
  'updateReadFeaturedStickers': '1461528386',
  'updateRecentStickers': '-1706939360',
  'messages.featuredStickersNotModified': '82699215',
  'messages.featuredStickers': '-123893531',
  'messages.recentStickersNotModified': '186120336',
  'messages.recentStickers': '1558317424',
  'messages.archivedStickers': '1338747336',
  'messages.stickerSetInstallResultSuccess': '946083368',
  'messages.stickerSetInstallResultArchive': '904138920',
  'stickerSetCovered': '1678812626',
  'inputMediaPhotoExternal': '153267905',
  'inputMediaDocumentExternal': '-1225309387',
  'updateConfig': '-1574314746',
  'updatePtsChanged': '861169551',
  'messageActionGameScore': '-1834538890',
  'documentAttributeHasStickers': '-1744710921',
  'keyboardButtonGame': '1358175439',
  'stickerSetMultiCovered': '872932635',
  'maskCoords': '-1361650766',
  'inputStickeredMediaPhoto': '1251549527',
  'inputStickeredMediaDocument': '70813275',
  'inputMediaGame': '-750828557',
  'messageMediaGame': '-38694904',
  'inputBotInlineMessageGame': '1262639204',
  'inputBotInlineResultGame': '1336154098',
  'game': '-1107729093',
  'inputGameID': '53231223',
  'inputGameShortName': '-1020139510',
  'highScore': '1493171408',
  'messages.highScores': '-1707344487',
  'messages.chatsSlice': '-1663561404',
  'updateChannelWebPage': '1081547008',
  'updates.differenceTooLong': '1258196845',
  'sendMessageGamePlayAction': '-580219064',
  'webPageNotModified': '-2054908813',
  'textEmpty': '-599948721',
  'textPlain': '1950782688',
  'textBold': '1730456516',
  'textItalic': '-653089380',
  'textUnderline': '-1054465340',
  'textStrike': '-1678197867',
  'textFixed': '1816074681',
  'textUrl': '1009288385',
  'textEmail': '-564523562',
  'textConcat': '2120376535',
  'pageBlockTitle': '1890305021',
  'pageBlockSubtitle': '-1879401953',
  'pageBlockAuthorDate': '-1162877472',
  'pageBlockHeader': '-1076861716',
  'pageBlockSubheader': '-248793375',
  'pageBlockParagraph': '1182402406',
  'pageBlockPreformatted': '-1066346178',
  'pageBlockFooter': '1216809369',
  'pageBlockDivider': '-618614392',
  'pageBlockList': '978896884',
  'pageBlockBlockquote': '641563686',
  'pageBlockPullquote': '1329878739',
  'pageBlockPhoto': '-372860542',
  'pageBlockVideo': '-640214938',
  'pageBlockCover': '972174080',
  'pageBlockEmbed': '-840826671',
  'pageBlockEmbedPost': '690781161',
  'pageBlockSlideshow': '319588707',
  'pagePart': '-1908433218',
  'pageFull': '1433323434',
  'updatePhoneCall': '-1425052898',
  'updateDialogPinned': '-686710068',
  'updatePinnedDialogs': '-657787251',
  'inputPrivacyKeyPhoneCall': '-88417185',
  'privacyKeyPhoneCall': '1030105979',
  'pageBlockUnsupported': '324435594',
  'pageBlockAnchor': '-837994576',
  'pageBlockCollage': '145955919',
  'inputPhoneCall': '506920429',
  'phoneCallEmpty': '1399245077',
  'phoneCallWaiting': '462375633',
  'phoneCallRequested': '-2089411356',
  'phoneCall': '-1660057',
  'phoneCallDiscarded': '1355435489',
  'phoneConnection': '-1655957568',
  'phoneCallProtocol': '-1564789301',
  'phone.phoneCall': '-326966976',
  'phoneCallDiscardReasonMissed': '-2048646399',
  'phoneCallDiscardReasonDisconnect': '-527056480',
  'phoneCallDiscardReasonHangup': '1471006352',
  'phoneCallDiscardReasonBusy': '-84416311',
  'inputMessagesFilterPhoneCalls': '-2134272152',
  'messageActionPhoneCall': '-2132731265',
  'invoice': '-1022713000',
  'inputMediaInvoice': '-1844103547',
  'messageActionPaymentSentMe': '-1892568281',
  'messageMediaInvoice': '-2074799289',
  'keyboardButtonBuy': '-1344716869',
  'messageActionPaymentSent': '1080663248',
  'payments.paymentForm': '1062645411',
  'postAddress': '512535275',
  'paymentRequestedInfo': '-1868808300',
  'updateBotWebhookJSON': '-2095595325',
  'updateBotWebhookJSONQuery': '-1684914010',
  'updateBotShippingQuery': '-523384512',
  'updateBotPrecheckoutQuery': '1563376297',
  'dataJSON': '2104790276',
  'labeledPrice': '-886477832',
  'paymentCharge': '-368917890',
  'paymentSavedCredentialsCard': '-842892769',
  'webDocument': '-971322408',
  'inputWebDocument': '-1678949555',
  'inputWebFileLocation': '-1036396922',
  'upload.webFile': '568808380',
  'payments.validatedRequestedInfo': '-784000893',
  'payments.paymentResult': '1314881805',
  'payments.paymentVerficationNeeded': '1800845601',
  'payments.paymentReceipt': '1342771681',
  'payments.savedInfo': '-74456004',
  'inputPaymentCredentialsSaved': '-1056001329',
  'inputPaymentCredentials': '873977640',
  'account.tmpPassword': '-614138572',
  'shippingOption': '-1239335713',
  'phoneCallAccepted': '1828732223',
  'inputMessagesFilterRoundVoice': '2054952868',
  'inputMessagesFilterRoundVideo': '-1253451181',
  'upload.fileCdnRedirect': '-363659686',
  'sendMessageRecordRoundAction': '-1997373508',
  'sendMessageUploadRoundAction': '608050278',
  'upload.cdnFileReuploadNeeded': '-290921362',
  'upload.cdnFile': '-1449145777',
  'cdnPublicKey': '-914167110',
  'cdnConfig': '1462101002',
  'updateLangPackTooLong': '281165899',
  'updateLangPack': '1442983757',
  'pageBlockChannel': '-283684427',
  'inputStickerSetItem': '-6249322',
  'langPackString': '-892239370',
  'langPackStringPluralized': '1816636575',
  'langPackStringDeleted': '695856818',
  'langPackDifference': '-209337866',
  'langPackLanguage': '292985073',
  'channelParticipantAdmin': '-1473271656',
  'channelParticipantBanned': '573315206',
  'channelParticipantsBanned': '338142689',
  'channelParticipantsSearch': '106343499',
  'topPeerCategoryPhoneCalls': '511092620',
  'pageBlockAudio': '834148991',
  'channelAdminRights': '1568467877',
  'channelBannedRights': '1489977929',
  'channelAdminLogEventActionChangeTitle': '-421545947',
  'channelAdminLogEventActionChangeAbout': '1427671598',
  'channelAdminLogEventActionChangeUsername': '1783299128',
  'channelAdminLogEventActionChangePhoto': '-1204857405',
  'channelAdminLogEventActionToggleInvites': '460916654',
  'channelAdminLogEventActionToggleSignatures': '648939889',
  'channelAdminLogEventActionUpdatePinned': '-370660328',
  'channelAdminLogEventActionEditMessage': '1889215493',
  'channelAdminLogEventActionDeleteMessage': '1121994683',
  'channelAdminLogEventActionParticipantJoin': '405815507',
  'channelAdminLogEventActionParticipantLeave': '-124291086',
  'channelAdminLogEventActionParticipantInvite': '-484690728',
  'channelAdminLogEventActionParticipantToggleBan': '-422036098',
  'channelAdminLogEventActionParticipantToggleAdmin': '-714643696',
  'channelAdminLogEvent': '995769920',
  'channels.adminLogResults': '-309659827',
  'channelAdminLogEventsFilter': '-368018716',
  'messageActionScreenshotTaken': '1200788123',
  'popularContact': '1558266229',
  'cdnFileHash': '2012136335',
  'inputMessagesFilterMyMentions': '-1040652646',
  'inputMessagesFilterMyMentionsUnread': '1187706024',
  'updateContactsReset': '1887741886',
  'channelAdminLogEventActionChangeStickerSet': '-1312568665',
  'updateFavedStickers': '-451831443',
  'messages.favedStickers': '-209768682',
  'messages.favedStickersNotModified': '-1634752813',
  'updateChannelReadMessagesContents': '-1987495099',
  'vector': '481674261',
  'resPQ': '85337187',
  'p_q_inner_data': '-2083955988',
  'server_DH_params_fail': '2043348061',
  'server_DH_params_ok': '-790100132',
  'server_DH_inner_data': '-1249309254',
  'client_DH_inner_data': '1715713620',
  'dh_gen_ok': '1003222836',
  'dh_gen_retry': '1188831161',
  'dh_gen_fail': '-1499615742',
  'rpc_result': '-212046591',
  'rpc_error': '558156313',
  'rpc_answer_unknown': '1579864942',
  'rpc_answer_dropped_running': '-847714938',
  'rpc_answer_dropped': '-1539647305',
  'future_salt': '155834844',
  'future_salts': '-1370486635',
  'pong': '880243653',
  'destroy_session_ok': '-501201412',
  'destroy_session_none': '1658015945',
  'new_session_created': '-1631450872',
  'msg_container': '1945237724',
  'msg_copy': '-530561358',
  'gzip_packed': '812830625',
  'msgs_ack': '1658238041',
  'bad_msg_notification': '-1477445615',
  'bad_server_salt': '-307542917',
  'msg_resend_req': '2105940488',
  'msgs_state_req': '-630588590',
  'msgs_state_info': '81704317',
  'msgs_all_info': '-1933520591',
  'msg_detailed_info': '661470918',
  'msg_new_detailed_info': '-2137147681'
}

export function getConstructorById (id: number | string, mtp: boolean = false) {
  return constructors[mtp ? 'mtp' : 'api'][String(id)]
}

export function getConstructorByType (type: string, mtp: boolean = false) {
  return getConstructorById(typeMap[type], mtp)
}

export function getConstructorByPredicate (type: string, mtp: boolean = false) {
  return getConstructorById(predicateMap[type], mtp)
}
