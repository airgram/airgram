
export interface TopPeerCategoryBotsInline {
  _: 'topPeerCategoryBotsInline'
}

export interface TopPeerCategoryBotsPm {
  _: 'topPeerCategoryBotsPM'
}

export interface TopPeerCategoryChannels {
  _: 'topPeerCategoryChannels'
}

export interface TopPeerCategoryCorrespondents {
  _: 'topPeerCategoryCorrespondents'
}

export interface TopPeerCategoryGroups {
  _: 'topPeerCategoryGroups'
}

export interface TopPeerCategoryPhoneCalls {
  _: 'topPeerCategoryPhoneCalls'
}

export type TopPeerCategoryUnion = TopPeerCategoryBotsInline
  | TopPeerCategoryBotsPm
  | TopPeerCategoryChannels
  | TopPeerCategoryCorrespondents
  | TopPeerCategoryGroups
  | TopPeerCategoryPhoneCalls
