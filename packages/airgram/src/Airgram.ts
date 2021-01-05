import { AirgramCore, Config, CreateProviderFactoryFn } from '@airgram/core'
import { Provider, TdJsonClient } from './components'
import { BaseJsonClient } from './components/BaseJsonClient'
import { TdJsonConfig, TdProviderConfig } from './types'

export interface ExtendedConfig extends Config, Pick<TdJsonConfig, 'command' | 'models'> {}

export const createProviderFactory: CreateProviderFactoryFn<Provider, BaseJsonClient> = (tdJsonClient: BaseJsonClient) => {
  return (handleUpdate: TdProviderConfig['handleUpdate']) => {
    return new Provider(tdJsonClient, {
      handleUpdate
    })
  }
}

export class Airgram extends AirgramCore<Provider> {
  private static tdJsonClient: BaseJsonClient | null = null

  public constructor (config: ExtendedConfig)
  public constructor (tdJsonClient: BaseJsonClient, config: Config)
  public constructor (configOrClient: ExtendedConfig | BaseJsonClient, config?: Config) {
    if (configOrClient instanceof BaseJsonClient && config) {
      super(createProviderFactory(configOrClient), config)
    } else if (typeof configOrClient === 'object' && 'apiId' in configOrClient) {
      const { command, models, ...restConfig } = configOrClient

      if (models) {
        throw new Error('For using models you need to create TdJsonClient manually. See: https://airgram.netlify.app/api-reference/tdjsonclient')
      }

      const tdJsonClient = Airgram.tdJsonClient = Airgram.tdJsonClient ?? new TdJsonClient({ command })

      if (tdJsonClient.command !== command) {
        throw new Error('The "command" option must have the same value as in active TdJsonClient instance.')
      }

      super(createProviderFactory(tdJsonClient), restConfig)
    } else {
      throw new Error('Invalid Airgram config.')
    }
  }
}
