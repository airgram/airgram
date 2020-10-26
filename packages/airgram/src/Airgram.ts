import { AirgramCore, Config, CreateProviderFactoryFn } from '@airgram/core'
import { Provider, TdJsonClient } from './components'
import { TdProviderConfig, TdProxyConfig } from './types'

export interface ExtendedConfig extends Config, TdProxyConfig {}

export const createProviderFactory: CreateProviderFactoryFn<Provider, TdJsonClient | TdProxyConfig> = (proxyOrConfig: TdJsonClient | TdProxyConfig) => {
  const tdProxy = proxyOrConfig instanceof TdJsonClient ? proxyOrConfig : new TdJsonClient(proxyOrConfig)
  return (
    handleUpdate: TdProviderConfig['handleUpdate']
  ) => {
    return new Provider(tdProxy, {
      handleUpdate
    })
  }
}

export class Airgram extends AirgramCore<Provider> {
  public constructor (config: ExtendedConfig)
  public constructor (tdJsonClient: TdJsonClient, config: Config)
  public constructor (configOrClient: ExtendedConfig | TdJsonClient, config?: Config) {
    if (configOrClient instanceof TdJsonClient && config) {
      super(createProviderFactory(configOrClient), config)
    } else if (typeof configOrClient === 'object' && 'apiId' in configOrClient) {
      const { command, models, ...restConfig } = configOrClient
      super(createProviderFactory({ command, models }), restConfig)
    } else {
      throw new Error('Invalid Airgram config.')
    }
  }
}
