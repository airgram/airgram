/*tslint:disable:object-literal-sort-keys*/

const methods = {
  '51854712': {
    id: 51854712,
    method: 'updates.getChannelDifference',
    params: [{ name: 'flags', type: '#' }, { name: 'force', type: 'flags.0?true' }, {
      name: 'channel',
      type: 'InputChannel'
    }, { name: 'filter', type: 'ChannelMessagesFilter' }, { name: 'pts', type: 'int' }, { name: 'limit', type: 'int' }],
    type: 'updates.ChannelDifference'
  },
  '60726944': {
    id: 60726944,
    method: 'messages.search',
    params: [{ name: 'flags', type: '#' }, { name: 'peer', type: 'InputPeer' }, {
      name: 'q',
      type: 'string'
    }, { name: 'from_id', type: 'flags.0?InputUser' }, { name: 'filter', type: 'MessagesFilter' }, {
      name: 'min_date',
      type: 'int'
    }, { name: 'max_date', type: 'int' }, { name: 'offset_id', type: 'int' }, {
      name: 'add_offset',
      type: 'int'
    }, { name: 'limit', type: 'int' }, { name: 'max_id', type: 'int' }, { name: 'min_id', type: 'int' }],
    type: 'messages.Messages'
  },
  '94983360': {
    id: 94983360,
    method: 'messages.receivedMessages',
    params: [{ name: 'max_id', type: 'int' }],
    type: 'Vector<ReceivedNotifyMessage>'
  },
  '141781513': {
    id: 141781513,
    method: 'channels.getFullChannel',
    params: [{ name: 'channel', type: 'InputChannel' }],
    type: 'messages.ChatFull'
  },
  '149257707': {
    id: 149257707,
    method: 'account.sendChangePhoneCode',
    params: [{ name: 'flags', type: '#' }, { name: 'allow_flashcall', type: 'flags.0?true' }, {
      name: 'phone_number',
      type: 'string'
    }, { name: 'current_number', type: 'flags.0?Bool' }],
    type: 'auth.SentCode'
  },
  '150761757': { id: 150761757, method: 'account.getAccountTTL', params: [], type: 'AccountDaysTTL' },
  '163765653': {
    id: 163765653,
    method: 'messages.setBotPrecheckoutResults',
    params: [{ name: 'flags', type: '#' }, { name: 'success', type: 'flags.1?true' }, {
      name: 'query_id',
      type: 'long'
    }, { name: 'error', type: 'flags.0?string' }],
    type: 'Bool'
  },
  '164303470': {
    id: 164303470,
    method: 'messages.createChat',
    params: [{ name: 'users', type: 'Vector<InputUser>' }, { name: 'title', type: 'string' }],
    type: 'Updates'
  },
  '174260510': {
    id: 174260510,
    method: 'auth.checkPassword',
    params: [{ name: 'password_hash', type: 'bytes' }],
    type: 'auth.Authorization'
  },
  '176122811': {
    id: 176122811,
    method: 'channels.getChannels',
    params: [{ name: 'id', type: 'Vector<InputChannel>' }],
    type: 'messages.Chats'
  },
  '187583869': {
    id: 187583869,
    method: 'langpack.getDifference',
    params: [{ name: 'from_version', type: 'int' }],
    type: 'LangPackDifference'
  },
  '218777796': {
    id: 218777796,
    method: 'messages.getCommonChats',
    params: [{ name: 'user_id', type: 'InputUser' }, { name: 'max_id', type: 'int' }, { name: 'limit', type: 'int' }],
    type: 'messages.Chats'
  },
  '227648840': {
    id: 227648840,
    method: 'users.getUsers',
    params: [{ name: 'id', type: 'Vector<InputUser>' }],
    type: 'Vector<User>'
  },
  '238054714': {
    id: 238054714,
    method: 'messages.readHistory',
    params: [{ name: 'peer', type: 'InputPeer' }, { name: 'max_id', type: 'int' }],
    type: 'messages.AffectedMessages'
  },
  '258170395': {
    id: 258170395,
    method: 'messages.getInlineGameHighScores',
    params: [{ name: 'id', type: 'InputBotInlineMessageID' }, { name: 'user_id', type: 'InputUser' }],
    type: 'messages.HighScores'
  },
  '283557164': {
    id: 283557164,
    method: 'channels.checkUsername',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'username', type: 'string' }],
    type: 'Bool'
  },
  '301470424': {
    id: 301470424,
    method: 'contacts.search',
    params: [{ name: 'q', type: 'string' }, { name: 'limit', type: 'int' }],
    type: 'contacts.Found'
  },
  '313765169': {
    id: 313765169,
    method: 'account.getNotifySettings',
    params: [{ name: 'peer', type: 'InputNotifyPeer' }],
    type: 'PeerNotifySettings'
  },
  '319564933': {
    id: 319564933,
    method: 'messages.editInlineBotMessage',
    params: [{ name: 'flags', type: '#' }, { name: 'no_webpage', type: 'flags.1?true' }, {
      name: 'id',
      type: 'InputBotInlineMessageID'
    }, { name: 'message', type: 'flags.11?string' }, {
      name: 'reply_markup',
      type: 'flags.2?ReplyMarkup'
    }, { name: 'entities', type: 'flags.3?Vector<MessageEntity>' }],
    type: 'Bool'
  },
  '333610782': {
    id: 333610782,
    method: 'channels.editAbout',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'about', type: 'string' }],
    type: 'Bool'
  },
  '353818557': {
    id: 353818557,
    method: 'account.sendConfirmPhoneCode',
    params: [{ name: 'flags', type: '#' }, { name: 'allow_flashcall', type: 'flags.0?true' }, {
      name: 'hash',
      type: 'string'
    }, { name: 'current_number', type: 'flags.0?Bool' }],
    type: 'auth.SentCode'
  },
  '363051235': {
    id: 363051235,
    method: 'messages.migrateChat',
    params: [{ name: 'chat_id', type: 'int' }],
    type: 'Updates'
  },
  '363700068': {
    id: 363700068,
    method: 'messages.setInlineGameScore',
    params: [{ name: 'flags', type: '#' }, { name: 'edit_message', type: 'flags.0?true' }, {
      name: 'force',
      type: 'flags.1?true'
    }, { name: 'id', type: 'InputBotInlineMessageID' }, { name: 'user_id', type: 'InputUser' }, {
      name: 'score',
      type: 'int'
    }],
    type: 'Bool'
  },
  '399855457': {
    id: 399855457,
    method: 'phone.receivedCall',
    params: [{ name: 'peer', type: 'InputPhoneCall' }],
    type: 'Bool'
  },
  '421243333': {
    id: 421243333,
    method: 'messages.getDialogs',
    params: [{ name: 'flags', type: '#' }, { name: 'exclude_pinned', type: 'flags.0?true' }, {
      name: 'offset_date',
      type: 'int'
    }, { name: 'offset_id', type: 'int' }, { name: 'offset_peer', type: 'InputPeer' }, { name: 'limit', type: 'int' }],
    type: 'messages.Dialogs'
  },
  '429865580': {
    id: 429865580,
    method: 'channels.inviteToChannel',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'users', type: 'Vector<InputUser>' }],
    type: 'Updates'
  },
  '451113900': {
    id: 451113900,
    method: 'contacts.resetTopPeerRating',
    params: [{ name: 'category', type: 'TopPeerCategory' }, { name: 'peer', type: 'InputPeer' }],
    type: 'Bool'
  },
  '452533257': {
    id: 452533257,
    method: 'upload.reuploadCdnFile',
    params: [{ name: 'file_token', type: 'bytes' }, { name: 'request_token', type: 'bytes' }],
    type: 'Vector<CdnFileHash>'
  },
  '453408308': {
    id: 453408308,
    method: 'auth.signUp',
    params: [{ name: 'phone_number', type: 'string' }, {
      name: 'phone_code_hash',
      type: 'string'
    }, { name: 'phone_code', type: 'string' }, { name: 'first_name', type: 'string' }, {
      name: 'last_name',
      type: 'string'
    }],
    type: 'auth.Authorization'
  },
  '469850889': {
    id: 469850889,
    method: 'messages.deleteHistory',
    params: [{ name: 'flags', type: '#' }, { name: 'just_clear', type: 'flags.0?true' }, {
      name: 'peer',
      type: 'InputPeer'
    }, { name: 'max_id', type: 'int' }],
    type: 'messages.AffectedHistory'
  },
  '475228724': {
    id: 475228724,
    method: 'phone.setCallRating',
    params: [{ name: 'peer', type: 'InputPhoneCall' }, { name: 'rating', type: 'int' }, {
      name: 'comment',
      type: 'string'
    }],
    type: 'Updates'
  },
  '479598769': {
    id: 479598769,
    method: 'messages.getAllStickers',
    params: [{ name: 'hash', type: 'int' }],
    type: 'messages.AllStickers'
  },
  '520357240': {
    id: 520357240,
    method: 'auth.cancelCode',
    params: [{ name: 'phone_number', type: 'string' }, { name: 'phone_code_hash', type: 'string' }],
    type: 'Bool'
  },
  '527021574': {
    id: 527021574,
    method: 'channels.toggleSignatures',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'enabled', type: 'Bool' }],
    type: 'Updates'
  },
  '531836966': { id: 531836966, method: 'help.getNearestDc', params: [], type: 'NearestDc' },
  '536919235': {
    id: 536919235,
    method: 'upload.getCdnFile',
    params: [{ name: 'file_token', type: 'bytes' }, { name: 'offset', type: 'int' }, { name: 'limit', type: 'int' }],
    type: 'upload.CdnFile'
  },
  '548962836': {
    id: 548962836,
    method: 'channels.editAdmin',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'user_id', type: 'InputUser' }, {
      name: 'admin_rights',
      type: 'ChannelAdminRights'
    }],
    type: 'Updates'
  },
  '567151374': {
    id: 567151374,
    method: 'messages.getFavedStickers',
    params: [{ name: 'hash', type: 'int' }],
    type: 'messages.FavedStickers'
  },
  '578650699': { id: 578650699, method: 'payments.getSavedInfo', params: [], type: 'payments.SavedInfo' },
  '608323678': {
    id: 608323678,
    method: 'account.setAccountTTL',
    params: [{ name: 'ttl', type: 'AccountDaysTTL' }],
    type: 'Bool'
  },
  '615851205': {
    id: 615851205,
    method: 'channels.joinChannel',
    params: [{ name: 'channel', type: 'InputChannel' }],
    type: 'Updates'
  },
  '618237842': {
    id: 618237842,
    method: 'channels.getParticipants',
    params: [{ name: 'channel', type: 'InputChannel' }, {
      name: 'filter',
      type: 'ChannelParticipantsFilter'
    }, { name: 'offset', type: 'int' }, { name: 'limit', type: 'int' }],
    type: 'channels.ChannelParticipants'
  },
  '619086221': {
    id: 619086221,
    method: 'upload.getWebFile',
    params: [{ name: 'location', type: 'InputWebFileLocation' }, { name: 'offset', type: 'int' }, {
      name: 'limit',
      type: 'int'
    }],
    type: 'upload.WebFile'
  },
  '623001124': {
    id: 623001124,
    method: 'messages.getWebPagePreview',
    params: [{ name: 'message', type: 'string' }],
    type: 'MessageMedia'
  },
  '630429265': {
    id: 630429265,
    method: 'updates.getDifference',
    params: [{ name: 'flags', type: '#' }, { name: 'pts', type: 'int' }, {
      name: 'pts_total_limit',
      type: 'flags.0?int'
    }, { name: 'date', type: 'int' }, { name: 'qts', type: 'int' }],
    type: 'updates.Difference'
  },
  '639215886': {
    id: 639215886,
    method: 'messages.getStickerSet',
    params: [{ name: 'stickerset', type: 'InputStickerSet' }],
    type: 'messages.StickerSet'
  },
  '651135312': {
    id: 651135312,
    method: 'messages.getDhConfig',
    params: [{ name: 'version', type: 'int' }, { name: 'random_length', type: 'int' }],
    type: 'messages.DhConfig'
  },
  '655677548': {
    id: 655677548,
    method: 'account.checkUsername',
    params: [{ name: 'username', type: 'string' }],
    type: 'Bool'
  },
  '662363518': {
    id: 662363518,
    method: 'phone.saveCallDebug',
    params: [{ name: 'peer', type: 'InputPhoneCall' }, { name: 'debug', type: 'DataJSON' }],
    type: 'Bool'
  },
  '730364339': {
    id: 730364339,
    method: 'payments.sendPaymentForm',
    params: [{ name: 'flags', type: '#' }, { name: 'msg_id', type: 'int' }, {
      name: 'requested_info_id',
      type: 'flags.0?string'
    }, { name: 'shipping_option_id', type: 'flags.1?string' }, {
      name: 'credentials',
      type: 'InputPaymentCredentials'
    }],
    type: 'payments.PaymentResult'
  },
  '746589157': {
    id: 746589157,
    method: 'contacts.importContacts',
    params: [{ name: 'contacts', type: 'Vector<InputContact>' }],
    type: 'contacts.ImportedContacts'
  },
  '764901049': {
    id: 764901049,
    method: 'messages.getPeerDialogs',
    params: [{ name: 'peers', type: 'Vector<InputPeer>' }],
    type: 'messages.PeerDialogs'
  },
  '766298703': {
    id: 766298703,
    method: 'messages.getFeaturedStickers',
    params: [{ name: 'hash', type: 'int' }],
    type: 'messages.FeaturedStickers'
  },
  '773776152': {
    id: 773776152,
    method: 'langpack.getStrings',
    params: [{ name: 'lang_code', type: 'string' }, { name: 'keys', type: 'Vector<string>' }],
    type: 'Vector<LangPackString>'
  },
  '788404002': {
    id: 788404002,
    method: 'phone.confirmCall',
    params: [{ name: 'peer', type: 'InputPhoneCall' }, { name: 'g_a', type: 'bytes' }, {
      name: 'key_fingerprint',
      type: 'long'
    }, { name: 'protocol', type: 'PhoneCallProtocol' }],
    type: 'phone.PhoneCall'
  },
  '846868683': {
    id: 846868683,
    method: 'messages.saveGif',
    params: [{ name: 'id', type: 'InputDocument' }, { name: 'unsave', type: 'Bool' }],
    type: 'Bool'
  },
  '847887978': {
    id: 847887978,
    method: 'messages.toggleDialogPin',
    params: [{ name: 'flags', type: '#' }, { name: 'pinned', type: 'flags.0?true' }, {
      name: 'peer',
      type: 'InputPeer'
    }],
    type: 'Bool'
  },
  '852135825': {
    id: 852135825,
    method: 'messages.getWebPage',
    params: [{ name: 'url', type: 'string' }, { name: 'hash', type: 'int' }],
    type: 'WebPage'
  },
  '852769188': {
    id: 852769188,
    method: 'messages.sendEncryptedService',
    params: [{ name: 'peer', type: 'InputEncryptedChat' }, { name: 'random_id', type: 'long' }, {
      name: 'data',
      type: 'bytes'
    }],
    type: 'messages.SentEncryptedMessage'
  },
  '858475004': { id: 858475004, method: 'contacts.block', params: [{ name: 'id', type: 'InputUser' }], type: 'Bool' },
  '864953444': {
    id: 864953444,
    method: 'messages.getDocumentByHash',
    params: [{ name: 'sha256', type: 'bytes' }, { name: 'size', type: 'int' }, { name: 'mime_type', type: 'string' }],
    type: 'Document'
  },
  '865483769': {
    id: 865483769,
    method: 'messages.forwardMessage',
    params: [{ name: 'peer', type: 'InputPeer' }, { name: 'id', type: 'int' }, { name: 'random_id', type: 'long' }],
    type: 'Updates'
  },
  '870184064': {
    id: 870184064,
    method: 'channels.getAdminLog',
    params: [{ name: 'flags', type: '#' }, { name: 'channel', type: 'InputChannel' }, {
      name: 'q',
      type: 'string'
    }, { name: 'events_filter', type: 'flags.0?ChannelAdminLogEventsFilter' }, {
      name: 'admins',
      type: 'flags.1?Vector<InputUser>'
    }, { name: 'max_id', type: 'long' }, { name: 'min_id', type: 'long' }, { name: 'limit', type: 'int' }],
    type: 'channels.AdminLogResults'
  },
  '889286899': { id: 889286899, method: 'help.getTermsOfService', params: [], type: 'help.TermsOfService' },
  '890549214': {
    id: 890549214,
    method: 'channels.updateUsername',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'username', type: 'string' }],
    type: 'Bool'
  },
  '913498268': {
    id: 913498268,
    method: 'messages.getPeerSettings',
    params: [{ name: 'peer', type: 'InputPeer' }],
    type: 'PeerSettings'
  },
  '916930423': {
    id: 916930423,
    method: 'messages.readMessageContents',
    params: [{ name: 'id', type: 'Vector<int>' }],
    type: 'messages.AffectedMessages'
  },
  '954152242': {
    id: 954152242,
    method: 'account.updateDeviceLocked',
    params: [{ name: 'period', type: 'int' }],
    type: 'Bool'
  },
  '958863608': {
    id: 958863608,
    method: 'messages.saveRecentSticker',
    params: [{ name: 'flags', type: '#' }, { name: 'attached', type: 'flags.0?true' }, {
      name: 'id',
      type: 'InputDocument'
    }, { name: 'unsave', type: 'Bool' }],
    type: 'Bool'
  },
  '998448230': {
    id: 998448230,
    method: 'messages.getFullChat',
    params: [{ name: 'chat_id', type: 'int' }],
    type: 'messages.ChatFull'
  },
  '1003664544': {
    id: 1003664544,
    method: 'phone.acceptCall',
    params: [{ name: 'peer', type: 'InputPhoneCall' }, { name: 'g_b', type: 'bytes' }, {
      name: 'protocol',
      type: 'PhoneCallProtocol'
    }],
    type: 'phone.PhoneCall'
  },
  '1013621127': {
    id: 1013621127,
    method: 'messages.getChats',
    params: [{ name: 'id', type: 'Vector<int>' }],
    type: 'messages.Chats'
  },
  '1035731989': {
    id: 1035731989,
    method: 'messages.acceptEncryption',
    params: [{ name: 'peer', type: 'InputEncryptedChat' }, { name: 'g_b', type: 'bytes' }, {
      name: 'key_fingerprint',
      type: 'long'
    }],
    type: 'EncryptedChat'
  },
  '1036301552': {
    id: 1036301552,
    method: 'invokeAfterMsgs',
    params: [{ name: 'msg_ids', type: 'Vector<long>' }, { name: 'query', type: '!X' }],
    type: 'X'
  },
  '1040964988': {
    id: 1040964988,
    method: 'account.updateUsername',
    params: [{ name: 'username', type: 'string' }],
    type: 'User'
  },
  '1051570619': {
    id: 1051570619,
    method: 'messages.checkChatInvite',
    params: [{ name: 'hash', type: 'string' }],
    type: 'ChatInvite'
  },
  '1056025023': {
    id: 1056025023,
    method: 'auth.resendCode',
    params: [{ name: 'phone_number', type: 'string' }, { name: 'phone_code_hash', type: 'string' }],
    type: 'auth.SentCode'
  },
  '1099779595': {
    id: 1099779595,
    method: 'account.deleteAccount',
    params: [{ name: 'reason', type: 'string' }],
    type: 'Bool'
  },
  '1109588596': {
    id: 1109588596,
    method: 'messages.getMessages',
    params: [{ name: 'id', type: 'Vector<int>' }],
    type: 'messages.Messages'
  },
  '1180140658': {
    id: 1180140658,
    method: 'messages.getUnreadMentions',
    params: [{ name: 'peer', type: 'InputPeer' }, { name: 'offset_id', type: 'int' }, {
      name: 'add_offset',
      type: 'int'
    }, { name: 'limit', type: 'int' }, { name: 'max_id', type: 'int' }, { name: 'min_id', type: 'int' }],
    type: 'messages.Messages'
  },
  '1231065863': {
    id: 1231065863,
    method: 'channels.toggleInvites',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'enabled', type: 'Bool' }],
    type: 'Updates'
  },
  '1250046590': {
    id: 1250046590,
    method: 'account.getTmpPassword',
    params: [{ name: 'password_hash', type: 'bytes' }, { name: 'period', type: 'int' }],
    type: 'account.TmpPassword'
  },
  '1259113487': {
    id: 1259113487,
    method: 'messages.reportEncryptedSpam',
    params: [{ name: 'peer', type: 'InputEncryptedChat' }],
    type: 'Bool'
  },
  '1295590211': { id: 1295590211, method: 'help.getInviteText', params: [], type: 'help.InviteText' },
  '1319464594': {
    id: 1319464594,
    method: 'auth.recoverPassword',
    params: [{ name: 'code', type: 'string' }],
    type: 'auth.Authorization'
  },
  '1328726168': {
    id: 1328726168,
    method: 'photos.uploadProfilePhoto',
    params: [{ name: 'file', type: 'InputFile' }],
    type: 'photos.Photo'
  },
  '1340184318': {
    id: 1340184318,
    method: 'contacts.importCard',
    params: [{ name: 'export_card', type: 'Vector<int>' }],
    type: 'User'
  },
  '1364105629': {
    id: 1364105629,
    method: 'messages.getInlineBotResults',
    params: [{ name: 'flags', type: '#' }, { name: 'bot', type: 'InputUser' }, {
      name: 'peer',
      type: 'InputPeer'
    }, { name: 'geo_point', type: 'flags.0?InputGeoPoint' }, { name: 'query', type: 'string' }, {
      name: 'offset',
      type: 'string'
    }],
    type: 'messages.BotResults'
  },
  '1369162417': {
    id: 1369162417,
    method: 'messages.uploadMedia',
    params: [{ name: 'peer', type: 'InputPeer' }, { name: 'media', type: 'InputMedia' }],
    type: 'MessageMedia'
  },
  '1375900482': { id: 1375900482, method: 'help.getCdnConfig', params: [], type: 'CdnConfig' },
  '1416484774': {
    id: 1416484774,
    method: 'channels.getParticipant',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'user_id', type: 'InputUser' }],
    type: 'channels.ChannelParticipant'
  },
  '1418342645': { id: 1418342645, method: 'account.getPassword', params: [], type: 'account.Password' },
  '1430593449': { id: 1430593449, method: 'phone.getCallConfig', params: [], type: 'DataJSON' },
  '1436924774': {
    id: 1436924774,
    method: 'messages.receivedQueue',
    params: [{ name: 'max_qts', type: 'int' }],
    type: 'Vector<long>'
  },
  '1450044624': {
    id: 1450044624,
    method: 'channels.editTitle',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'title', type: 'string' }],
    type: 'Updates'
  },
  '1461180992': { id: 1461180992, method: 'auth.logOut', params: [], type: 'Bool' },
  '1475442322': {
    id: 1475442322,
    method: 'messages.getArchivedStickers',
    params: [{ name: 'flags', type: '#' }, { name: 'masks', type: 'flags.0?true' }, {
      name: 'offset_id',
      type: 'long'
    }, { name: 'limit', type: 'int' }],
    type: 'messages.ArchivedStickers'
  },
  '1491380032': {
    id: 1491380032,
    method: 'rpc_drop_answer',
    params: [{ name: 'req_msg_id', type: 'long' }],
    type: 'RpcDropAnswer'
  },
  '1504393374': {
    id: 1504393374,
    method: 'contacts.deleteContacts',
    params: [{ name: 'id', type: 'Vector<InputUser>' }],
    type: 'Bool'
  },
  '1527873830': {
    id: 1527873830,
    method: 'messages.readFeaturedStickers',
    params: [{ name: 'id', type: 'Vector<long>' }],
    type: 'Bool'
  },
  '1536537556': {
    id: 1536537556,
    method: 'phone.requestCall',
    params: [{ name: 'user_id', type: 'InputUser' }, { name: 'random_id', type: 'int' }, {
      name: 'g_a_hash',
      type: 'bytes'
    }, { name: 'protocol', type: 'PhoneCallProtocol' }],
    type: 'phone.PhoneCall'
  },
  '1587647177': {
    id: 1587647177,
    method: 'messages.getRecentStickers',
    params: [{ name: 'flags', type: '#' }, { name: 'attached', type: 'flags.0?true' }, { name: 'hash', type: 'int' }],
    type: 'messages.RecentStickers'
  },
  '1596029123': {
    id: 1596029123,
    method: 'account.confirmPhone',
    params: [{ name: 'phone_code_hash', type: 'string' }, { name: 'phone_code', type: 'string' }],
    type: 'Bool'
  },
  '1615239032': { id: 1615239032, method: 'req_pq', params: [{ name: 'nonce', type: 'int128' }], type: 'ResPQ' },
  '1669245048': {
    id: 1669245048,
    method: 'account.registerDevice',
    params: [{ name: 'token_type', type: 'int' }, { name: 'token', type: 'string' }],
    type: 'Bool'
  },
  '1706608543': {
    id: 1706608543,
    method: 'messages.getMaskStickers',
    params: [{ name: 'hash', type: 'int' }],
    type: 'messages.AllStickers'
  },
  '1707432768': {
    id: 1707432768,
    method: 'account.unregisterDevice',
    params: [{ name: 'token_type', type: 'int' }, { name: 'token', type: 'string' }],
    type: 'Bool'
  },
  '1713919532': {
    id: 1713919532,
    method: 'account.updateStatus',
    params: [{ name: 'offline', type: 'Bool' }],
    type: 'Bool'
  },
  '1738800940': {
    id: 1738800940,
    method: 'auth.importBotAuthorization',
    params: [{ name: 'flags', type: 'int' }, { name: 'api_id', type: 'int' }, {
      name: 'api_hash',
      type: 'string'
    }, { name: 'bot_auth_token', type: 'string' }],
    type: 'auth.Authorization'
  },
  '1782549861': { id: 1782549861, method: 'messages.getAllDrafts', params: [], type: 'Updates' },
  '1817183516': {
    id: 1817183516,
    method: 'messages.importChatInvite',
    params: [{ name: 'hash', type: 'string' }],
    type: 'Updates'
  },
  '1862465352': {
    id: 1862465352,
    method: 'help.saveAppLog',
    params: [{ name: 'events', type: 'Vector<InputAppEvent>' }],
    type: 'Bool'
  },
  '1877286395': {
    id: 1877286395,
    method: 'auth.checkPhone',
    params: [{ name: 'phone_number', type: 'string' }],
    type: 'auth.CheckedPhone'
  },
  '1888354709': {
    id: 1888354709,
    method: 'messages.forwardMessages',
    params: [{ name: 'flags', type: '#' }, { name: 'silent', type: 'flags.5?true' }, {
      name: 'background',
      type: 'flags.6?true'
    }, { name: 'with_my_score', type: 'flags.8?true' }, { name: 'from_peer', type: 'InputPeer' }, {
      name: 'id',
      type: 'Vector<int>'
    }, { name: 'random_id', type: 'Vector<long>' }, { name: 'to_peer', type: 'InputPeer' }],
    type: 'Updates'
  },
  '1891839707': {
    id: 1891839707,
    method: 'account.changePhone',
    params: [{ name: 'phone_number', type: 'string' }, {
      name: 'phone_code_hash',
      type: 'string'
    }, { name: 'phone_code', type: 'string' }],
    type: 'User'
  },
  '1997180532': {
    id: 1997180532,
    method: 'payments.validateRequestedInfo',
    params: [{ name: 'flags', type: '#' }, { name: 'save', type: 'flags.0?true' }, {
      name: 'msg_id',
      type: 'int'
    }, { name: 'info', type: 'PaymentRequestedInfo' }],
    type: 'payments.ValidatedRequestedInfo'
  },
  '1998331287': {
    id: 1998331287,
    method: 'auth.sendInvites',
    params: [{ name: 'phone_numbers', type: 'Vector<string>' }, { name: 'message', type: 'string' }],
    type: 'Bool'
  },
  '2016638777': {
    id: 2016638777,
    method: 'messages.reorderStickerSets',
    params: [{ name: 'flags', type: '#' }, { name: 'masks', type: 'flags.0?true' }, {
      name: 'order',
      type: 'Vector<long>'
    }],
    type: 'Bool'
  },
  '2018596725': {
    id: 2018596725,
    method: 'account.updateProfile',
    params: [{ name: 'flags', type: '#' }, { name: 'first_name', type: 'flags.0?string' }, {
      name: 'last_name',
      type: 'flags.1?string'
    }, { name: 'about', type: 'flags.2?string' }],
    type: 'User'
  },
  '2027164582': {
    id: 2027164582,
    method: 'phone.discardCall',
    params: [{ name: 'peer', type: 'InputPhoneCall' }, { name: 'duration', type: 'int' }, {
      name: 'reason',
      type: 'PhoneCallDiscardReason'
    }, { name: 'connection_id', type: 'long' }],
    type: 'Updates'
  },
  '2031374829': {
    id: 2031374829,
    method: 'messages.setEncryptedTyping',
    params: [{ name: 'peer', type: 'InputEncryptedChat' }, { name: 'typing', type: 'Bool' }],
    type: 'Bool'
  },
  '2059302892': { id: 2059302892, method: 'ping', params: [{ name: 'ping_id', type: 'long' }], type: 'Pong' },
  '2106086025': {
    id: 2106086025,
    method: 'messages.exportChatInvite',
    params: [{ name: 'chat_id', type: 'int' }],
    type: 'ExportedChatInvite'
  },
  '2135648522': {
    id: 2135648522,
    method: 'messages.readEncryptedHistory',
    params: [{ name: 'peer', type: 'InputEncryptedChat' }, { name: 'max_date', type: 'int' }],
    type: 'Bool'
  },
  '-878758099': {
    id: -878758099,
    method: 'invokeAfterMsg',
    params: [{ name: 'msg_id', type: 'long' }, { name: 'query', type: '!X' }],
    type: 'X'
  },
  '-2035355412': {
    id: -2035355412,
    method: 'auth.sendCode',
    params: [{ name: 'flags', type: '#' }, { name: 'allow_flashcall', type: 'flags.0?true' }, {
      name: 'phone_number',
      type: 'string'
    }, { name: 'current_number', type: 'flags.0?Bool' }, { name: 'api_id', type: 'int' }, {
      name: 'api_hash',
      type: 'string'
    }],
    type: 'auth.SentCode'
  },
  '-1126886015': {
    id: -1126886015,
    method: 'auth.signIn',
    params: [{ name: 'phone_number', type: 'string' }, {
      name: 'phone_code_hash',
      type: 'string'
    }, { name: 'phone_code', type: 'string' }],
    type: 'auth.Authorization'
  },
  '-1616179942': { id: -1616179942, method: 'auth.resetAuthorizations', params: [], type: 'Bool' },
  '-440401971': {
    id: -440401971,
    method: 'auth.exportAuthorization',
    params: [{ name: 'dc_id', type: 'int' }],
    type: 'auth.ExportedAuthorization'
  },
  '-470837741': {
    id: -470837741,
    method: 'auth.importAuthorization',
    params: [{ name: 'id', type: 'int' }, { name: 'bytes', type: 'bytes' }],
    type: 'auth.Authorization'
  },
  '-2067899501': {
    id: -2067899501,
    method: 'account.updateNotifySettings',
    params: [{ name: 'peer', type: 'InputNotifyPeer' }, { name: 'settings', type: 'InputPeerNotifySettings' }],
    type: 'Bool'
  },
  '-612493497': { id: -612493497, method: 'account.resetNotifySettings', params: [], type: 'Bool' },
  '-1068696894': { id: -1068696894, method: 'account.getWallPapers', params: [], type: 'Vector<WallPaper>' },
  '-902781519': {
    id: -902781519,
    method: 'users.getFullUser',
    params: [{ name: 'id', type: 'InputUser' }],
    type: 'UserFull'
  },
  '-995929106': { id: -995929106, method: 'contacts.getStatuses', params: [], type: 'Vector<ContactStatus>' },
  '-1071414113': {
    id: -1071414113,
    method: 'contacts.getContacts',
    params: [{ name: 'hash', type: 'int' }],
    type: 'contacts.Contacts'
  },
  '-1902823612': {
    id: -1902823612,
    method: 'contacts.deleteContact',
    params: [{ name: 'id', type: 'InputUser' }],
    type: 'contacts.Link'
  },
  '-448724803': {
    id: -448724803,
    method: 'contacts.unblock',
    params: [{ name: 'id', type: 'InputUser' }],
    type: 'Bool'
  },
  '-176409329': {
    id: -176409329,
    method: 'contacts.getBlocked',
    params: [{ name: 'offset', type: 'int' }, { name: 'limit', type: 'int' }],
    type: 'contacts.Blocked'
  },
  '-1347868602': {
    id: -1347868602,
    method: 'messages.getHistory',
    params: [{ name: 'peer', type: 'InputPeer' }, { name: 'offset_id', type: 'int' }, {
      name: 'offset_date',
      type: 'int'
    }, { name: 'add_offset', type: 'int' }, { name: 'limit', type: 'int' }, {
      name: 'max_id',
      type: 'int'
    }, { name: 'min_id', type: 'int' }],
    type: 'messages.Messages'
  },
  '-443640366': {
    id: -443640366,
    method: 'messages.deleteMessages',
    params: [{ name: 'flags', type: '#' }, { name: 'revoke', type: 'flags.0?true' }, {
      name: 'id',
      type: 'Vector<int>'
    }],
    type: 'messages.AffectedMessages'
  },
  '-1551737264': {
    id: -1551737264,
    method: 'messages.setTyping',
    params: [{ name: 'peer', type: 'InputPeer' }, { name: 'action', type: 'SendMessageAction' }],
    type: 'Bool'
  },
  '-91733382': {
    id: -91733382,
    method: 'messages.sendMessage',
    params: [{ name: 'flags', type: '#' }, { name: 'no_webpage', type: 'flags.1?true' }, {
      name: 'silent',
      type: 'flags.5?true'
    }, { name: 'background', type: 'flags.6?true' }, { name: 'clear_draft', type: 'flags.7?true' }, {
      name: 'peer',
      type: 'InputPeer'
    }, { name: 'reply_to_msg_id', type: 'flags.0?int' }, { name: 'message', type: 'string' }, {
      name: 'random_id',
      type: 'long'
    }, { name: 'reply_markup', type: 'flags.2?ReplyMarkup' }, {
      name: 'entities',
      type: 'flags.3?Vector<MessageEntity>'
    }],
    type: 'Updates'
  },
  '-923703407': {
    id: -923703407,
    method: 'messages.sendMedia',
    params: [{ name: 'flags', type: '#' }, { name: 'silent', type: 'flags.5?true' }, {
      name: 'background',
      type: 'flags.6?true'
    }, { name: 'clear_draft', type: 'flags.7?true' }, { name: 'peer', type: 'InputPeer' }, {
      name: 'reply_to_msg_id',
      type: 'flags.0?int'
    }, { name: 'media', type: 'InputMedia' }, { name: 'random_id', type: 'long' }, {
      name: 'reply_markup',
      type: 'flags.2?ReplyMarkup'
    }],
    type: 'Updates'
  },
  '-599447467': {
    id: -599447467,
    method: 'messages.editChatTitle',
    params: [{ name: 'chat_id', type: 'int' }, { name: 'title', type: 'string' }],
    type: 'Updates'
  },
  '-900957736': {
    id: -900957736,
    method: 'messages.editChatPhoto',
    params: [{ name: 'chat_id', type: 'int' }, { name: 'photo', type: 'InputChatPhoto' }],
    type: 'Updates'
  },
  '-106911223': {
    id: -106911223,
    method: 'messages.addChatUser',
    params: [{ name: 'chat_id', type: 'int' }, { name: 'user_id', type: 'InputUser' }, {
      name: 'fwd_limit',
      type: 'int'
    }],
    type: 'Updates'
  },
  '-530505962': {
    id: -530505962,
    method: 'messages.deleteChatUser',
    params: [{ name: 'chat_id', type: 'int' }, { name: 'user_id', type: 'InputUser' }],
    type: 'Updates'
  },
  '-304838614': { id: -304838614, method: 'updates.getState', params: [], type: 'updates.State' },
  '-256159406': {
    id: -256159406,
    method: 'photos.updateProfilePhoto',
    params: [{ name: 'id', type: 'InputPhoto' }],
    type: 'UserProfilePhoto'
  },
  '-1291540959': {
    id: -1291540959,
    method: 'upload.saveFilePart',
    params: [{ name: 'file_id', type: 'long' }, { name: 'file_part', type: 'int' }, { name: 'bytes', type: 'bytes' }],
    type: 'Bool'
  },
  '-475607115': {
    id: -475607115,
    method: 'upload.getFile',
    params: [{ name: 'location', type: 'InputFileLocation' }, { name: 'offset', type: 'int' }, {
      name: 'limit',
      type: 'int'
    }],
    type: 'upload.File'
  },
  '-990308245': { id: -990308245, method: 'help.getConfig', params: [], type: 'Config' },
  '-1372724842': { id: -1372724842, method: 'help.getAppUpdate', params: [], type: 'help.AppUpdate' },
  '-2016444625': {
    id: -2016444625,
    method: 'photos.deletePhotos',
    params: [{ name: 'id', type: 'Vector<InputPhoto>' }],
    type: 'Vector<long>'
  },
  '-1848823128': {
    id: -1848823128,
    method: 'photos.getUserPhotos',
    params: [{ name: 'user_id', type: 'InputUser' }, { name: 'offset', type: 'int' }, {
      name: 'max_id',
      type: 'long'
    }, { name: 'limit', type: 'int' }],
    type: 'photos.Photos'
  },
  '-162681021': {
    id: -162681021,
    method: 'messages.requestEncryption',
    params: [{ name: 'user_id', type: 'InputUser' }, { name: 'random_id', type: 'int' }, {
      name: 'g_a',
      type: 'bytes'
    }],
    type: 'EncryptedChat'
  },
  '-304536635': {
    id: -304536635,
    method: 'messages.discardEncryption',
    params: [{ name: 'chat_id', type: 'int' }],
    type: 'Bool'
  },
  '-1451792525': {
    id: -1451792525,
    method: 'messages.sendEncrypted',
    params: [{ name: 'peer', type: 'InputEncryptedChat' }, { name: 'random_id', type: 'long' }, {
      name: 'data',
      type: 'bytes'
    }],
    type: 'messages.SentEncryptedMessage'
  },
  '-1701831834': {
    id: -1701831834,
    method: 'messages.sendEncryptedFile',
    params: [{ name: 'peer', type: 'InputEncryptedChat' }, { name: 'random_id', type: 'long' }, {
      name: 'data',
      type: 'bytes'
    }, { name: 'file', type: 'InputEncryptedFile' }],
    type: 'messages.SentEncryptedMessage'
  },
  '-562337987': {
    id: -562337987,
    method: 'upload.saveBigFilePart',
    params: [{ name: 'file_id', type: 'long' }, { name: 'file_part', type: 'int' }, {
      name: 'file_total_parts',
      type: 'int'
    }, { name: 'bytes', type: 'bytes' }],
    type: 'Bool'
  },
  '-951575130': {
    id: -951575130,
    method: 'initConnection',
    params: [{ name: 'api_id', type: 'int' }, { name: 'device_model', type: 'string' }, {
      name: 'system_version',
      type: 'string'
    }, { name: 'app_version', type: 'string' }, { name: 'system_lang_code', type: 'string' }, {
      name: 'lang_pack',
      type: 'string'
    }, { name: 'lang_code', type: 'string' }, { name: 'query', type: '!X' }],
    type: 'X'
  },
  '-1663104819': { id: -1663104819, method: 'help.getSupport', params: [], type: 'help.Support' },
  '-841733627': {
    id: -841733627,
    method: 'auth.bindTempAuthKey',
    params: [{ name: 'perm_auth_key_id', type: 'long' }, { name: 'nonce', type: 'long' }, {
      name: 'expires_at',
      type: 'int'
    }, { name: 'encrypted_message', type: 'bytes' }],
    type: 'Bool'
  },
  '-2065352905': { id: -2065352905, method: 'contacts.exportCard', params: [], type: 'Vector<int>' },
  '-623130288': {
    id: -623130288,
    method: 'account.getPrivacy',
    params: [{ name: 'key', type: 'InputPrivacyKey' }],
    type: 'account.PrivacyRules'
  },
  '-906486552': {
    id: -906486552,
    method: 'account.setPrivacy',
    params: [{ name: 'key', type: 'InputPrivacyKey' }, { name: 'rules', type: 'Vector<InputPrivacyRule>' }],
    type: 'account.PrivacyRules'
  },
  '-627372787': {
    id: -627372787,
    method: 'invokeWithLayer',
    params: [{ name: 'layer', type: 'int' }, { name: 'query', type: '!X' }],
    type: 'X'
  },
  '-113456221': {
    id: -113456221,
    method: 'contacts.resolveUsername',
    params: [{ name: 'username', type: 'string' }],
    type: 'contacts.ResolvedPeer'
  },
  '-484392616': { id: -484392616, method: 'account.getAuthorizations', params: [], type: 'account.Authorizations' },
  '-545786948': {
    id: -545786948,
    method: 'account.resetAuthorization',
    params: [{ name: 'hash', type: 'long' }],
    type: 'Bool'
  },
  '-1131605573': {
    id: -1131605573,
    method: 'account.getPasswordSettings',
    params: [{ name: 'current_password_hash', type: 'bytes' }],
    type: 'account.PasswordSettings'
  },
  '-92517498': {
    id: -92517498,
    method: 'account.updatePasswordSettings',
    params: [{ name: 'current_password_hash', type: 'bytes' }, {
      name: 'new_settings',
      type: 'account.PasswordInputSettings'
    }],
    type: 'Bool'
  },
  '-661144474': { id: -661144474, method: 'auth.requestPasswordRecovery', params: [], type: 'auth.PasswordRecovery' },
  '-1080796745': {
    id: -1080796745,
    method: 'invokeWithoutUpdates',
    params: [{ name: 'query', type: '!X' }],
    type: 'X'
  },
  '-946871200': {
    id: -946871200,
    method: 'messages.installStickerSet',
    params: [{ name: 'stickerset', type: 'InputStickerSet' }, { name: 'archived', type: 'Bool' }],
    type: 'messages.StickerSetInstallResult'
  },
  '-110209570': {
    id: -110209570,
    method: 'messages.uninstallStickerSet',
    params: [{ name: 'stickerset', type: 'InputStickerSet' }],
    type: 'Bool'
  },
  '-421563528': {
    id: -421563528,
    method: 'messages.startBot',
    params: [{ name: 'bot', type: 'InputUser' }, { name: 'peer', type: 'InputPeer' }, {
      name: 'random_id',
      type: 'long'
    }, { name: 'start_param', type: 'string' }],
    type: 'Updates'
  },
  '-1877938321': {
    id: -1877938321,
    method: 'help.getAppChangelog',
    params: [{ name: 'prev_app_version', type: 'string' }],
    type: 'Updates'
  },
  '-820669733': {
    id: -820669733,
    method: 'messages.reportSpam',
    params: [{ name: 'peer', type: 'InputPeer' }],
    type: 'Bool'
  },
  '-993483427': {
    id: -993483427,
    method: 'messages.getMessagesViews',
    params: [{ name: 'peer', type: 'InputPeer' }, { name: 'id', type: 'Vector<int>' }, {
      name: 'increment',
      type: 'Bool'
    }],
    type: 'Vector<int>'
  },
  '-871347913': {
    id: -871347913,
    method: 'channels.readHistory',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'max_id', type: 'int' }],
    type: 'Bool'
  },
  '-2067661490': {
    id: -2067661490,
    method: 'channels.deleteMessages',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'id', type: 'Vector<int>' }],
    type: 'messages.AffectedMessages'
  },
  '-787622117': {
    id: -787622117,
    method: 'channels.deleteUserHistory',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'user_id', type: 'InputUser' }],
    type: 'messages.AffectedHistory'
  },
  '-32999408': {
    id: -32999408,
    method: 'channels.reportSpam',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'user_id', type: 'InputUser' }, {
      name: 'id',
      type: 'Vector<int>'
    }],
    type: 'Bool'
  },
  '-1814580409': {
    id: -1814580409,
    method: 'channels.getMessages',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'id', type: 'Vector<int>' }],
    type: 'messages.Messages'
  },
  '-192332417': {
    id: -192332417,
    method: 'channels.createChannel',
    params: [{ name: 'flags', type: '#' }, { name: 'broadcast', type: 'flags.0?true' }, {
      name: 'megagroup',
      type: 'flags.1?true'
    }, { name: 'title', type: 'string' }, { name: 'about', type: 'string' }],
    type: 'Updates'
  },
  '-248621111': {
    id: -248621111,
    method: 'channels.editPhoto',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'photo', type: 'InputChatPhoto' }],
    type: 'Updates'
  },
  '-130635115': {
    id: -130635115,
    method: 'channels.leaveChannel',
    params: [{ name: 'channel', type: 'InputChannel' }],
    type: 'Updates'
  },
  '-950663035': {
    id: -950663035,
    method: 'channels.exportInvite',
    params: [{ name: 'channel', type: 'InputChannel' }],
    type: 'ExportedChatInvite'
  },
  '-1072619549': {
    id: -1072619549,
    method: 'channels.deleteChannel',
    params: [{ name: 'channel', type: 'InputChannel' }],
    type: 'Updates'
  },
  '-326379039': {
    id: -326379039,
    method: 'messages.toggleChatAdmins',
    params: [{ name: 'chat_id', type: 'int' }, { name: 'enabled', type: 'Bool' }],
    type: 'Updates'
  },
  '-1444503762': {
    id: -1444503762,
    method: 'messages.editChatAdmin',
    params: [{ name: 'chat_id', type: 'int' }, { name: 'user_id', type: 'InputUser' }, {
      name: 'is_admin',
      type: 'Bool'
    }],
    type: 'Bool'
  },
  '-1640190800': {
    id: -1640190800,
    method: 'messages.searchGlobal',
    params: [{ name: 'q', type: 'string' }, { name: 'offset_date', type: 'int' }, {
      name: 'offset_peer',
      type: 'InputPeer'
    }, { name: 'offset_id', type: 'int' }, { name: 'limit', type: 'int' }],
    type: 'messages.Messages'
  },
  '-1374118561': {
    id: -1374118561,
    method: 'account.reportPeer',
    params: [{ name: 'peer', type: 'InputPeer' }, { name: 'reason', type: 'ReportReason' }],
    type: 'Bool'
  },
  '-1080395925': {
    id: -1080395925,
    method: 'messages.searchGifs',
    params: [{ name: 'q', type: 'string' }, { name: 'offset', type: 'int' }],
    type: 'messages.FoundGifs'
  },
  '-2084618926': {
    id: -2084618926,
    method: 'messages.getSavedGifs',
    params: [{ name: 'hash', type: 'int' }],
    type: 'messages.SavedGifs'
  },
  '-346119674': {
    id: -346119674,
    method: 'messages.setInlineBotResults',
    params: [{ name: 'flags', type: '#' }, { name: 'gallery', type: 'flags.0?true' }, {
      name: 'private',
      type: 'flags.1?true'
    }, { name: 'query_id', type: 'long' }, {
      name: 'results',
      type: 'Vector<InputBotInlineResult>'
    }, { name: 'cache_time', type: 'int' }, { name: 'next_offset', type: 'flags.2?string' }, {
      name: 'switch_pm',
      type: 'flags.3?InlineBotSwitchPM'
    }],
    type: 'Bool'
  },
  '-1318189314': {
    id: -1318189314,
    method: 'messages.sendInlineBotResult',
    params: [{ name: 'flags', type: '#' }, { name: 'silent', type: 'flags.5?true' }, {
      name: 'background',
      type: 'flags.6?true'
    }, { name: 'clear_draft', type: 'flags.7?true' }, { name: 'peer', type: 'InputPeer' }, {
      name: 'reply_to_msg_id',
      type: 'flags.0?int'
    }, { name: 'random_id', type: 'long' }, { name: 'query_id', type: 'long' }, { name: 'id', type: 'string' }],
    type: 'Updates'
  },
  '-934882771': {
    id: -934882771,
    method: 'channels.exportMessageLink',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'id', type: 'int' }],
    type: 'ExportedMessageLink'
  },
  '-1460572005': {
    id: -1460572005,
    method: 'messages.hideReportSpam',
    params: [{ name: 'peer', type: 'InputPeer' }],
    type: 'Bool'
  },
  '-1490162350': {
    id: -1490162350,
    method: 'channels.updatePinnedMessage',
    params: [{ name: 'flags', type: '#' }, { name: 'silent', type: 'flags.0?true' }, {
      name: 'channel',
      type: 'InputChannel'
    }, { name: 'id', type: 'int' }],
    type: 'Updates'
  },
  '-39416522': {
    id: -39416522,
    method: 'messages.getMessageEditData',
    params: [{ name: 'peer', type: 'InputPeer' }, { name: 'id', type: 'int' }],
    type: 'messages.MessageEditData'
  },
  '-829299510': {
    id: -829299510,
    method: 'messages.editMessage',
    params: [{ name: 'flags', type: '#' }, { name: 'no_webpage', type: 'flags.1?true' }, {
      name: 'peer',
      type: 'InputPeer'
    }, { name: 'id', type: 'int' }, { name: 'message', type: 'flags.11?string' }, {
      name: 'reply_markup',
      type: 'flags.2?ReplyMarkup'
    }, { name: 'entities', type: 'flags.3?Vector<MessageEntity>' }],
    type: 'Updates'
  },
  '-2130010132': {
    id: -2130010132,
    method: 'messages.getBotCallbackAnswer',
    params: [{ name: 'flags', type: '#' }, { name: 'game', type: 'flags.1?true' }, {
      name: 'peer',
      type: 'InputPeer'
    }, { name: 'msg_id', type: 'int' }, { name: 'data', type: 'flags.0?bytes' }],
    type: 'messages.BotCallbackAnswer'
  },
  '-712043766': {
    id: -712043766,
    method: 'messages.setBotCallbackAnswer',
    params: [{ name: 'flags', type: '#' }, { name: 'alert', type: 'flags.1?true' }, {
      name: 'query_id',
      type: 'long'
    }, { name: 'message', type: 'flags.0?string' }, { name: 'url', type: 'flags.2?string' }, {
      name: 'cache_time',
      type: 'int'
    }],
    type: 'Bool'
  },
  '-728224331': {
    id: -728224331,
    method: 'contacts.getTopPeers',
    params: [{ name: 'flags', type: '#' }, { name: 'correspondents', type: 'flags.0?true' }, {
      name: 'bots_pm',
      type: 'flags.1?true'
    }, { name: 'bots_inline', type: 'flags.2?true' }, { name: 'phone_calls', type: 'flags.3?true' }, {
      name: 'groups',
      type: 'flags.10?true'
    }, { name: 'channels', type: 'flags.15?true' }, { name: 'offset', type: 'int' }, {
      name: 'limit',
      type: 'int'
    }, { name: 'hash', type: 'int' }],
    type: 'contacts.TopPeers'
  },
  '-1137057461': {
    id: -1137057461,
    method: 'messages.saveDraft',
    params: [{ name: 'flags', type: '#' }, { name: 'no_webpage', type: 'flags.1?true' }, {
      name: 'reply_to_msg_id',
      type: 'flags.0?int'
    }, { name: 'peer', type: 'InputPeer' }, { name: 'message', type: 'string' }, {
      name: 'entities',
      type: 'flags.3?Vector<MessageEntity>'
    }],
    type: 'Bool'
  },
  '-1986437075': {
    id: -1986437075,
    method: 'messages.clearRecentStickers',
    params: [{ name: 'flags', type: '#' }, { name: 'attached', type: 'flags.0?true' }],
    type: 'Bool'
  },
  '-1920105769': { id: -1920105769, method: 'channels.getAdminedPublicChannels', params: [], type: 'messages.Chats' },
  '-1907842680': {
    id: -1907842680,
    method: 'auth.dropTempAuthKeys',
    params: [{ name: 'except_auth_keys', type: 'Vector<long>' }],
    type: 'Bool'
  },
  '-1896289088': {
    id: -1896289088,
    method: 'messages.setGameScore',
    params: [{ name: 'flags', type: '#' }, { name: 'edit_message', type: 'flags.0?true' }, {
      name: 'force',
      type: 'flags.1?true'
    }, { name: 'peer', type: 'InputPeer' }, { name: 'id', type: 'int' }, {
      name: 'user_id',
      type: 'InputUser'
    }, { name: 'score', type: 'int' }],
    type: 'Updates'
  },
  '-866424884': {
    id: -866424884,
    method: 'messages.getAttachedStickers',
    params: [{ name: 'media', type: 'InputStickeredMedia' }],
    type: 'Vector<StickerSetCovered>'
  },
  '-400399203': {
    id: -400399203,
    method: 'messages.getGameHighScores',
    params: [{ name: 'peer', type: 'InputPeer' }, { name: 'id', type: 'int' }, { name: 'user_id', type: 'InputUser' }],
    type: 'messages.HighScores'
  },
  '-341307408': {
    id: -341307408,
    method: 'messages.getAllChats',
    params: [{ name: 'except_ids', type: 'Vector<int>' }],
    type: 'messages.Chats'
  },
  '-333262899': {
    id: -333262899,
    method: 'help.setBotUpdatesStatus',
    params: [{ name: 'pending_updates_count', type: 'int' }, { name: 'message', type: 'string' }],
    type: 'Bool'
  },
  '-1784678844': {
    id: -1784678844,
    method: 'messages.reorderPinnedDialogs',
    params: [{ name: 'flags', type: '#' }, { name: 'force', type: 'flags.0?true' }, {
      name: 'order',
      type: 'Vector<InputPeer>'
    }],
    type: 'Bool'
  },
  '-497756594': { id: -497756594, method: 'messages.getPinnedDialogs', params: [], type: 'messages.PeerDialogs' },
  '-1712285883': {
    id: -1712285883,
    method: 'payments.getPaymentForm',
    params: [{ name: 'msg_id', type: 'int' }],
    type: 'payments.PaymentForm'
  },
  '-436833542': {
    id: -436833542,
    method: 'messages.setBotShippingResults',
    params: [{ name: 'flags', type: '#' }, { name: 'query_id', type: 'long' }, {
      name: 'error',
      type: 'flags.0?string'
    }, { name: 'shipping_options', type: 'flags.1?Vector<ShippingOption>' }],
    type: 'Bool'
  },
  '-1440257555': {
    id: -1440257555,
    method: 'bots.sendCustomRequest',
    params: [{ name: 'custom_method', type: 'string' }, { name: 'params', type: 'DataJSON' }],
    type: 'DataJSON'
  },
  '-434028723': {
    id: -434028723,
    method: 'bots.answerWebhookJSONQuery',
    params: [{ name: 'query_id', type: 'long' }, { name: 'data', type: 'DataJSON' }],
    type: 'Bool'
  },
  '-1601001088': {
    id: -1601001088,
    method: 'payments.getPaymentReceipt',
    params: [{ name: 'msg_id', type: 'int' }],
    type: 'payments.PaymentReceipt'
  },
  '-667062079': {
    id: -667062079,
    method: 'payments.clearSavedInfo',
    params: [{ name: 'flags', type: '#' }, { name: 'credentials', type: 'flags.0?true' }, {
      name: 'info',
      type: 'flags.1?true'
    }],
    type: 'Bool'
  },
  '-1680314774': {
    id: -1680314774,
    method: 'stickers.createStickerSet',
    params: [{ name: 'flags', type: '#' }, { name: 'masks', type: 'flags.0?true' }, {
      name: 'user_id',
      type: 'InputUser'
    }, { name: 'title', type: 'string' }, { name: 'short_name', type: 'string' }, {
      name: 'stickers',
      type: 'Vector<InputStickerSetItem>'
    }],
    type: 'messages.StickerSet'
  },
  '-1699363442': {
    id: -1699363442,
    method: 'langpack.getLangPack',
    params: [{ name: 'lang_code', type: 'string' }],
    type: 'LangPackDifference'
  },
  '-2146445955': { id: -2146445955, method: 'langpack.getLanguages', params: [], type: 'Vector<LangPackLanguage>' },
  '-1076292147': {
    id: -1076292147,
    method: 'channels.editBanned',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'user_id', type: 'InputUser' }, {
      name: 'banned_rights',
      type: 'ChannelBannedRights'
    }],
    type: 'Updates'
  },
  '-143257775': {
    id: -143257775,
    method: 'stickers.removeStickerFromSet',
    params: [{ name: 'sticker', type: 'InputDocument' }],
    type: 'messages.StickerSet'
  },
  '-4795190': {
    id: -4795190,
    method: 'stickers.changeStickerPosition',
    params: [{ name: 'sticker', type: 'InputDocument' }, { name: 'position', type: 'int' }],
    type: 'messages.StickerSet'
  },
  '-2041315650': {
    id: -2041315650,
    method: 'stickers.addStickerToSet',
    params: [{ name: 'stickerset', type: 'InputStickerSet' }, { name: 'sticker', type: 'InputStickerSetItem' }],
    type: 'messages.StickerSet'
  },
  '-914493408': {
    id: -914493408,
    method: 'messages.sendScreenshotNotification',
    params: [{ name: 'peer', type: 'InputPeer' }, { name: 'reply_to_msg_id', type: 'int' }, {
      name: 'random_id',
      type: 'long'
    }],
    type: 'Updates'
  },
  '-149567365': {
    id: -149567365,
    method: 'upload.getCdnFileHashes',
    params: [{ name: 'file_token', type: 'bytes' }, { name: 'offset', type: 'int' }],
    type: 'Vector<CdnFileHash>'
  },
  '-1174420133': {
    id: -1174420133,
    method: 'messages.faveSticker',
    params: [{ name: 'id', type: 'InputDocument' }, { name: 'unfave', type: 'Bool' }],
    type: 'Bool'
  },
  '-359881479': {
    id: -359881479,
    method: 'channels.setStickers',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'stickerset', type: 'InputStickerSet' }],
    type: 'Bool'
  },
  '-2020263951': { id: -2020263951, method: 'contacts.resetSaved', params: [], type: 'Bool' },
  '-357180360': {
    id: -357180360,
    method: 'channels.readMessageContents',
    params: [{ name: 'channel', type: 'InputChannel' }, { name: 'id', type: 'Vector<int>' }],
    type: 'Bool'
  },
  '-686627650': {
    id: -686627650,
    method: 'req_DH_params',
    params: [{ name: 'nonce', type: 'int128' }, { name: 'server_nonce', type: 'int128' }, {
      name: 'p',
      type: 'bytes'
    }, { name: 'q', type: 'bytes' }, { name: 'public_key_fingerprint', type: 'long' }, {
      name: 'encrypted_data',
      type: 'bytes'
    }],
    type: 'Server_DH_Params'
  },
  '-184262881': {
    id: -184262881,
    method: 'set_client_DH_params',
    params: [{ name: 'nonce', type: 'int128' }, { name: 'server_nonce', type: 'int128' }, {
      name: 'encrypted_data',
      type: 'bytes'
    }],
    type: 'Set_client_DH_params_answer'
  },
  '-1188971260': {
    id: -1188971260,
    method: 'get_future_salts',
    params: [{ name: 'num', type: 'int' }],
    type: 'FutureSalts'
  },
  '-213746804': {
    id: -213746804,
    method: 'ping_delay_disconnect',
    params: [{ name: 'ping_id', type: 'long' }, { name: 'disconnect_delay', type: 'int' }],
    type: 'Pong'
  },
  '-414113498': {
    id: -414113498,
    method: 'destroy_session',
    params: [{ name: 'session_id', type: 'long' }],
    type: 'DestroySessionRes'
  },
  '-1835453025': {
    id: -1835453025,
    method: 'http_wait',
    params: [{ name: 'max_delay', type: 'int' }, { name: 'wait_after', type: 'int' }, {
      name: 'max_wait',
      type: 'int'
    }],
    type: 'HttpWait'
  }
}

const nameMap = {
  'invokeAfterMsg': '-878758099',
  'invokeAfterMsgs': '1036301552',
  'auth.checkPhone': '1877286395',
  'auth.sendCode': '-2035355412',
  'auth.signUp': '453408308',
  'auth.signIn': '-1126886015',
  'auth.logOut': '1461180992',
  'auth.resetAuthorizations': '-1616179942',
  'auth.sendInvites': '1998331287',
  'auth.exportAuthorization': '-440401971',
  'auth.importAuthorization': '-470837741',
  'account.registerDevice': '1669245048',
  'account.unregisterDevice': '1707432768',
  'account.updateNotifySettings': '-2067899501',
  'account.getNotifySettings': '313765169',
  'account.resetNotifySettings': '-612493497',
  'account.updateProfile': '2018596725',
  'account.updateStatus': '1713919532',
  'account.getWallPapers': '-1068696894',
  'users.getUsers': '227648840',
  'users.getFullUser': '-902781519',
  'contacts.getStatuses': '-995929106',
  'contacts.getContacts': '-1071414113',
  'contacts.importContacts': '746589157',
  'contacts.search': '301470424',
  'contacts.deleteContact': '-1902823612',
  'contacts.deleteContacts': '1504393374',
  'contacts.block': '858475004',
  'contacts.unblock': '-448724803',
  'contacts.getBlocked': '-176409329',
  'messages.getMessages': '1109588596',
  'messages.getDialogs': '421243333',
  'messages.getHistory': '-1347868602',
  'messages.search': '60726944',
  'messages.readHistory': '238054714',
  'messages.deleteHistory': '469850889',
  'messages.deleteMessages': '-443640366',
  'messages.receivedMessages': '94983360',
  'messages.setTyping': '-1551737264',
  'messages.sendMessage': '-91733382',
  'messages.sendMedia': '-923703407',
  'messages.forwardMessages': '1888354709',
  'messages.getChats': '1013621127',
  'messages.getFullChat': '998448230',
  'messages.editChatTitle': '-599447467',
  'messages.editChatPhoto': '-900957736',
  'messages.addChatUser': '-106911223',
  'messages.deleteChatUser': '-530505962',
  'messages.createChat': '164303470',
  'updates.getState': '-304838614',
  'updates.getDifference': '630429265',
  'photos.updateProfilePhoto': '-256159406',
  'photos.uploadProfilePhoto': '1328726168',
  'upload.saveFilePart': '-1291540959',
  'upload.getFile': '-475607115',
  'help.getConfig': '-990308245',
  'help.getNearestDc': '531836966',
  'help.getAppUpdate': '-1372724842',
  'help.saveAppLog': '1862465352',
  'help.getInviteText': '1295590211',
  'photos.deletePhotos': '-2016444625',
  'photos.getUserPhotos': '-1848823128',
  'messages.forwardMessage': '865483769',
  'messages.getDhConfig': '651135312',
  'messages.requestEncryption': '-162681021',
  'messages.acceptEncryption': '1035731989',
  'messages.discardEncryption': '-304536635',
  'messages.setEncryptedTyping': '2031374829',
  'messages.readEncryptedHistory': '2135648522',
  'messages.sendEncrypted': '-1451792525',
  'messages.sendEncryptedFile': '-1701831834',
  'messages.sendEncryptedService': '852769188',
  'messages.receivedQueue': '1436924774',
  'upload.saveBigFilePart': '-562337987',
  'initConnection': '-951575130',
  'help.getSupport': '-1663104819',
  'auth.bindTempAuthKey': '-841733627',
  'contacts.exportCard': '-2065352905',
  'contacts.importCard': '1340184318',
  'messages.readMessageContents': '916930423',
  'account.checkUsername': '655677548',
  'account.updateUsername': '1040964988',
  'account.getPrivacy': '-623130288',
  'account.setPrivacy': '-906486552',
  'account.deleteAccount': '1099779595',
  'account.getAccountTTL': '150761757',
  'account.setAccountTTL': '608323678',
  'invokeWithLayer': '-627372787',
  'contacts.resolveUsername': '-113456221',
  'account.sendChangePhoneCode': '149257707',
  'account.changePhone': '1891839707',
  'messages.getAllStickers': '479598769',
  'account.updateDeviceLocked': '954152242',
  'account.getPassword': '1418342645',
  'auth.checkPassword': '174260510',
  'messages.getWebPagePreview': '623001124',
  'account.getAuthorizations': '-484392616',
  'account.resetAuthorization': '-545786948',
  'account.getPasswordSettings': '-1131605573',
  'account.updatePasswordSettings': '-92517498',
  'auth.requestPasswordRecovery': '-661144474',
  'auth.recoverPassword': '1319464594',
  'invokeWithoutUpdates': '-1080796745',
  'messages.exportChatInvite': '2106086025',
  'messages.checkChatInvite': '1051570619',
  'messages.importChatInvite': '1817183516',
  'messages.getStickerSet': '639215886',
  'messages.installStickerSet': '-946871200',
  'messages.uninstallStickerSet': '-110209570',
  'auth.importBotAuthorization': '1738800940',
  'messages.startBot': '-421563528',
  'help.getAppChangelog': '-1877938321',
  'messages.reportSpam': '-820669733',
  'messages.getMessagesViews': '-993483427',
  'updates.getChannelDifference': '51854712',
  'channels.readHistory': '-871347913',
  'channels.deleteMessages': '-2067661490',
  'channels.deleteUserHistory': '-787622117',
  'channels.reportSpam': '-32999408',
  'channels.getMessages': '-1814580409',
  'channels.getParticipants': '618237842',
  'channels.getParticipant': '1416484774',
  'channels.getChannels': '176122811',
  'channels.getFullChannel': '141781513',
  'channels.createChannel': '-192332417',
  'channels.editAbout': '333610782',
  'channels.editAdmin': '548962836',
  'channels.editTitle': '1450044624',
  'channels.editPhoto': '-248621111',
  'channels.checkUsername': '283557164',
  'channels.updateUsername': '890549214',
  'channels.joinChannel': '615851205',
  'channels.leaveChannel': '-130635115',
  'channels.inviteToChannel': '429865580',
  'channels.exportInvite': '-950663035',
  'channels.deleteChannel': '-1072619549',
  'messages.toggleChatAdmins': '-326379039',
  'messages.editChatAdmin': '-1444503762',
  'messages.migrateChat': '363051235',
  'messages.searchGlobal': '-1640190800',
  'account.reportPeer': '-1374118561',
  'messages.reorderStickerSets': '2016638777',
  'help.getTermsOfService': '889286899',
  'messages.getDocumentByHash': '864953444',
  'messages.searchGifs': '-1080395925',
  'messages.getSavedGifs': '-2084618926',
  'messages.saveGif': '846868683',
  'messages.getInlineBotResults': '1364105629',
  'messages.setInlineBotResults': '-346119674',
  'messages.sendInlineBotResult': '-1318189314',
  'channels.toggleInvites': '1231065863',
  'channels.exportMessageLink': '-934882771',
  'channels.toggleSignatures': '527021574',
  'messages.hideReportSpam': '-1460572005',
  'messages.getPeerSettings': '913498268',
  'channels.updatePinnedMessage': '-1490162350',
  'auth.resendCode': '1056025023',
  'auth.cancelCode': '520357240',
  'messages.getMessageEditData': '-39416522',
  'messages.editMessage': '-829299510',
  'messages.editInlineBotMessage': '319564933',
  'messages.getBotCallbackAnswer': '-2130010132',
  'messages.setBotCallbackAnswer': '-712043766',
  'contacts.getTopPeers': '-728224331',
  'contacts.resetTopPeerRating': '451113900',
  'messages.getPeerDialogs': '764901049',
  'messages.saveDraft': '-1137057461',
  'messages.getAllDrafts': '1782549861',
  'account.sendConfirmPhoneCode': '353818557',
  'account.confirmPhone': '1596029123',
  'messages.getFeaturedStickers': '766298703',
  'messages.readFeaturedStickers': '1527873830',
  'messages.getRecentStickers': '1587647177',
  'messages.saveRecentSticker': '958863608',
  'messages.clearRecentStickers': '-1986437075',
  'messages.getArchivedStickers': '1475442322',
  'channels.getAdminedPublicChannels': '-1920105769',
  'auth.dropTempAuthKeys': '-1907842680',
  'messages.setGameScore': '-1896289088',
  'messages.setInlineGameScore': '363700068',
  'messages.getMaskStickers': '1706608543',
  'messages.getAttachedStickers': '-866424884',
  'messages.getGameHighScores': '-400399203',
  'messages.getInlineGameHighScores': '258170395',
  'messages.getCommonChats': '218777796',
  'messages.getAllChats': '-341307408',
  'help.setBotUpdatesStatus': '-333262899',
  'messages.getWebPage': '852135825',
  'messages.toggleDialogPin': '847887978',
  'messages.reorderPinnedDialogs': '-1784678844',
  'messages.getPinnedDialogs': '-497756594',
  'phone.requestCall': '1536537556',
  'phone.acceptCall': '1003664544',
  'phone.discardCall': '2027164582',
  'phone.receivedCall': '399855457',
  'messages.reportEncryptedSpam': '1259113487',
  'payments.getPaymentForm': '-1712285883',
  'payments.sendPaymentForm': '730364339',
  'account.getTmpPassword': '1250046590',
  'messages.setBotShippingResults': '-436833542',
  'messages.setBotPrecheckoutResults': '163765653',
  'upload.getWebFile': '619086221',
  'bots.sendCustomRequest': '-1440257555',
  'bots.answerWebhookJSONQuery': '-434028723',
  'payments.getPaymentReceipt': '-1601001088',
  'payments.validateRequestedInfo': '1997180532',
  'payments.getSavedInfo': '578650699',
  'payments.clearSavedInfo': '-667062079',
  'phone.getCallConfig': '1430593449',
  'phone.confirmCall': '788404002',
  'phone.setCallRating': '475228724',
  'phone.saveCallDebug': '662363518',
  'upload.getCdnFile': '536919235',
  'upload.reuploadCdnFile': '452533257',
  'help.getCdnConfig': '1375900482',
  'messages.uploadMedia': '1369162417',
  'stickers.createStickerSet': '-1680314774',
  'langpack.getLangPack': '-1699363442',
  'langpack.getStrings': '773776152',
  'langpack.getDifference': '187583869',
  'langpack.getLanguages': '-2146445955',
  'channels.editBanned': '-1076292147',
  'channels.getAdminLog': '870184064',
  'stickers.removeStickerFromSet': '-143257775',
  'stickers.changeStickerPosition': '-4795190',
  'stickers.addStickerToSet': '-2041315650',
  'messages.sendScreenshotNotification': '-914493408',
  'upload.getCdnFileHashes': '-149567365',
  'messages.getUnreadMentions': '1180140658',
  'messages.faveSticker': '-1174420133',
  'channels.setStickers': '-359881479',
  'contacts.resetSaved': '-2020263951',
  'messages.getFavedStickers': '567151374',
  'channels.readMessageContents': '-357180360',
  'req_pq': '1615239032',
  'req_DH_params': '-686627650',
  'set_client_DH_params': '-184262881',
  'rpc_drop_answer': '1491380032',
  'get_future_salts': '-1188971260',
  'ping': '2059302892',
  'ping_delay_disconnect': '-213746804',
  'destroy_session': '-414113498',
  'http_wait': '-1835453025'
}

export function getMethodByName (type: string) {
  return methods[nameMap[type]]
}
