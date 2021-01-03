import { AirgramCore, Config, ProviderFactory } from '@airgram/core'
import { Provider } from './Provider'
import { TdWebProviderConfig } from './types'

export interface AirgramConfig
  extends Config, TdWebProviderConfig {}

export class Airgram extends AirgramCore<Provider> {
  public constructor (config: AirgramConfig) {
    const {
      instanceName,
      isBackground,
      jsLogVerbosityLevel,
      logVerbosityLevel,
      mode,
      readOnly,
      useDatabase,
      ...baseConfig
    } = config
    const providerFactory: ProviderFactory<Provider> = (handleUpdate) => {
      const provider = new Provider({
        instanceName,
        isBackground,
        jsLogVerbosityLevel,
        logVerbosityLevel,
        mode,
        readOnly,
        useDatabase
      })
      provider.initialize(handleUpdate)
      return provider
    }
    super(providerFactory, baseConfig)
  }
}
