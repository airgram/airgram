import { Container, interfaces } from 'inversify'
import { autoProvide, buildProviderModule } from 'inversify-binding-decorators'
import * as api from '../api/index'
import Chat from '../base/Chat'
import Client from '../base/Client'
import entities from '../base/index'
import MtpAuthorizer from '../base/MtpAuthorizer'
import MtpClient from '../base/MtpClient'
import MtpCrypto from '../base/MtpCrypto'
import MtpDeserializer from '../base/MtpDeserializer'
import MtpMessage from '../base/MtpMessage'
import MtpNetwork from '../base/MtpNetwork'
import MtpRequest from '../base/MtpRequest'
import MtpSerializer from '../base/MtpSerializer'
import MtpState from '../base/MtpState'
import MtpTimeManager from '../base/MtpTimeManager'
import UpdatesHandler from '../base/UpdatesHandler'
import { InMemoryStore } from '../components'
import { ag } from '../interfaces/index'
import TYPES from './types'

export function createContainer () {
  return new Container()
}

export function bindComponents (container: Container) {
  autoProvide(container, entities)
  container.load(buildProviderModule())

  // Stores
  container.bind<InMemoryStore<ag.AuthDoc>>(TYPES.AuthStore).to(InMemoryStore)
  container.bind<InMemoryStore<ag.ChatDoc>>(TYPES.ChatStore).to(InMemoryStore)
  container.bind<InMemoryStore<ag.MtpState>>(TYPES.MtpStateStore).to(InMemoryStore)
  container.bind<InMemoryStore<ag.UpdatesStateDoc>>(TYPES.UpdatesStateStore).to(InMemoryStore)

  // Api factory
  container.bind<interfaces.Factory<ag.Api>>(TYPES.ApiFactory)
    .toFactory<ag.Api>((): ag.ApiFactory => <ApiT> (name: string, callApi: ag.CallApiFn) => {
      return (api[name] as { factory: (CallApiFn) => ApiT }).factory(callApi)
    })

  // Client factory
  container.bind<interfaces.Factory<ag.Client>>(TYPES.ClientFactory)
    .toFactory<ag.Client>((context: interfaces.Context): ag.ClientFactory => (config: ag.Config) =>
      Client.factory(
        () => context.container.get <ag.Client>(TYPES.Client),
        config
      ))

  // MtpAuthorizer factory
  container.bind<interfaces.Factory<ag.MtpAuthorizer>>(TYPES.MtpAuthorizerFactory)
    .toFactory<ag.MtpAuthorizer>((context: interfaces.Context): ag.MtpAuthorizerFactory =>
      (client: ag.Client) =>
        MtpAuthorizer.factory(
          () => context.container.get <ag.MtpAuthorizer>(TYPES.MtpAuthorizer),
          client
        )
    )

  // MtpTimeManager factory
  container.bind<interfaces.Factory<ag.MtpTimeManager>>(TYPES.MtpTimeManagerFactory)
    .toFactory<ag.MtpTimeManager>((context: interfaces.Context): ag.MtpTimeManagerFactory =>
      (client: ag.Client) =>
        MtpTimeManager.factory(
          () => context.container.get <ag.MtpTimeManager>(TYPES.MtpTimeManager),
          client
        )
    )

  // MtpSerializer factory
  container.bind<interfaces.Factory<ag.MtpSerializer>>(TYPES.MtpSerializerFactory)
    .toFactory<ag.MtpSerializer>((context: interfaces.Context): ag.MtpSerializerFactory => (options) =>
      MtpSerializer.factory(
        () => context.container.get <ag.MtpSerializer>(TYPES.MtpSerializer),
        options
      ))

  // MtpDeserializer factory
  container.bind<interfaces.Factory<ag.MtpDeserializer>>(TYPES.MtpDeserializerFactory)
    .toFactory<ag.MtpDeserializer>((context: interfaces.Context): ag.MtpDeserializerFactory => (buffer, options) =>
      MtpDeserializer.factory(
        () => context.container.get <ag.MtpDeserializer>(TYPES.MtpDeserializer),
        buffer,
        options
      ))

  // MtpState factory
  container.bind<interfaces.Factory<ag.MtpState>>(TYPES.MtpStateFactory)
    .toFactory<ag.MtpState>((context: interfaces.Context): ag.MtpStateFactory =>
      (client: ag.Client) => MtpState.factory(
        () => context.container.get <ag.MtpState>(TYPES.MtpState),
        client,
        context
      ))

  // MtpClient factory
  container.bind<interfaces.Factory<ag.MtpClient>>(TYPES.MtpClientFactory)
    .toFactory<ag.MtpClient>((context: interfaces.Context): ag.MtpClientFactory =>
      (client: ag.Client) => MtpClient.factory(
        () => context.container.get <ag.MtpClient>(TYPES.MtpClient),
        client
      ))

  // MtpCrypto factory
  container.bind<interfaces.Factory<ag.MtpCrypto>>(TYPES.MtpCryptoFactory)
    .toFactory<ag.MtpCrypto>((context: interfaces.Context): ag.MtpCryptoFactory =>
      (client: ag.MtpClient, authKey: Uint8Array | number[]) => MtpCrypto.factory(
        () => context.container.get <ag.MtpCrypto>(TYPES.MtpCrypto),
        client,
        authKey
      ))

  // MtpRequest factory
  container.bind<interfaces.Factory<ag.MtpRequest<any, any>>>(TYPES.MtpRequestFactory)
    .toFactory<ag.MtpRequest<any, any>>((context: interfaces.Context): ag.MtpRequestFactory =>
      (client: ag.Client) => MtpRequest.factory(
        <ParamsT, ResponseT> () => context.container.get <ag.MtpRequest<ParamsT, ResponseT>>(TYPES.MtpRequest),
        client
      ))

  // MtpNetwork factory
  container.bind<interfaces.Factory<ag.MtpNetwork>>(TYPES.MtpNetworkFactory)
    .toFactory<ag.MtpNetwork>((context: interfaces.Context): ag.MtpNetworkFactory =>
      (client: ag.Client) => MtpNetwork.factory(
        () => context.container.get <ag.MtpNetwork>(TYPES.MtpNetwork),
        client
      ))

  // MtpMessage factory
  container.bind<interfaces.Factory<ag.MtpMessage>>(TYPES.MtpMessageFactory)
    .toFactory<ag.MtpMessage>((context: interfaces.Context): ag.MtpMessageFactory =>
      (message: Partial<ag.MtpMessage>, options?: Partial<ag.MtpMessage>) => MtpMessage.factory(
        () => context.container.get <ag.MtpMessage>(TYPES.MtpMessage),
        message,
        options
      ))

  // Chat factory
  container.bind<interfaces.Factory<ag.Chat>>(TYPES.ChatFactory)
    .toFactory<ag.Chat>((context: interfaces.Context): ag.ChatFactory =>
      (id: number, chats: ag.Chats) => Chat.factory(
        () => context.container.get <ag.Chat>(TYPES.Chat),
        id,
        chats
      ))

  // UpdatesHandler factory
  container.bind<interfaces.Factory<ag.UpdatesHandler>>(TYPES.UpdatesHandlerFactory)
    .toFactory<ag.UpdatesHandler>((context: interfaces.Context): ag.UpdatesHandlerFactory =>
      (updates: ag.Updates, ctx: ag.Context, complete: (update: api.UpdateUnion) => any) => UpdatesHandler.factory(
        context,
        () => context.container.get <ag.UpdatesHandler>(TYPES.UpdatesHandler),
        updates,
        ctx,
        complete
      ))
}
