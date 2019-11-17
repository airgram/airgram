import { Airgram as BaseAirgram, Config } from '@airgram/core'
import { TdProvider } from './components'
import { TdWebProviderConfig } from './types'

export interface AirgramConfig
  extends Omit<Config, 'provider'>, TdWebProviderConfig {}

export class Airgram extends BaseAirgram<TdProvider> {
  public constructor (config: AirgramConfig) {
    const {
      instanceName,
      isBackground,
      jsLogVerbosityLevel,
      logVerbosityLevel,
      mode,
      readOnly,
      useDatabase,
      ...restConfig
    } = config
    const baseConfig = {
      ...restConfig,
      provider: new TdProvider({
        instanceName,
        isBackground,
        jsLogVerbosityLevel,
        logVerbosityLevel,
        mode,
        readOnly,
        useDatabase
      })
    }
    super(baseConfig)
  }
}
