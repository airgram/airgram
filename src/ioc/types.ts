const entities = {
  Api: Symbol.for('Api'),
  Auth: Symbol.for('Auth'),
  AuthStore: Symbol.for('AuthStore'),
  Chat: Symbol.for('Chat'),
  ChatStore: Symbol.for('ChatStore'),
  Chats: Symbol.for('Chats'),
  Client: Symbol.for('Client'),
  Collection: Symbol.for('Collection'),
  Composer: Symbol.for('Composer'),
  Context: Symbol.for('Context'),
  Crypto: Symbol.for('Crypto'),
  InMemoryStore: Symbol.for('InMemoryStore'),
  Logger: Symbol.for('Logger'),
  MtpAuthorizer: Symbol.for('MtpAuthorizer'),
  MtpClient: Symbol.for('MtpClient'),
  MtpCrypto: Symbol.for('MtpCrypto'),
  MtpDeserializer: Symbol.for('MtpDeserializer'),
  MtpMessage: Symbol.for('MtpMessage'),
  MtpNetwork: Symbol.for('MtpNetwork'),
  MtpRequest: Symbol.for('MtpRequest'),
  MtpRsaKeysManager: Symbol.for('MtpRsaKeysManager'),
  MtpSerializer: Symbol.for('MtpSerializer'),
  MtpState: Symbol.for('MtpState'),
  MtpStateStore: Symbol.for('MtpStateStore'),
  MtpTimeManager: Symbol.for('MtpTimeManager'),
  PendingState: Symbol.for('PendingState'),
  PersistentStore: Symbol.for('PersistentStore'),
  Updates: Symbol.for('Updates'),
  UpdatesHandler: Symbol.for('UpdatesHandler'),
  UpdatesState: Symbol.for('UpdatesState'),
  UpdatesStateStore: Symbol.for('UpdatesStateStore')
}

const factories = {
  ApiFactory: Symbol.for('Factory<Api>'),
  ChatFactory: Symbol.for('Factory<ChatFactory>'),
  ClientFactory: Symbol.for('Factory<Client>'),
  ContextFactory: Symbol.for('Factory<Context>'),
  MtpAuthorizerFactory: Symbol.for('Factory<MtpAuthorizer>'),
  MtpClientFactory: Symbol.for('Factory<MtpClient>'),
  MtpCryptoFactory: Symbol.for('Factory<MtpCrypto>'),
  MtpDeserializerFactory: Symbol.for('Factory<MtpDeserializer>'),
  MtpMessageFactory: Symbol.for('Factory<MtpMessage>'),
  MtpNetworkFactory: Symbol.for('Factory<MtpNetwork>'),
  MtpRequestFactory: Symbol.for('Factory<MtpRequest>'),
  MtpSerializerFactory: Symbol.for('Factory<MtpSerializer>'),
  MtpStateFactory: Symbol.for('Factory<MtpState>'),
  MtpTimeManagerFactory: Symbol.for('Factory<MtpTimeManager>'),
  UpdatesContextFactory: Symbol.for('Factory<UpdatesContext>'),
  UpdatesFactory: Symbol.for('Factory<Updates>'),
  UpdatesHandlerFactory: Symbol.for('Factory<UpdatesHandler>')
}

export default {
  ...entities,
  ...factories
}
