import { Airgram as BaseAirgram, Config } from '@airgram/core'
import { TdProvider, TdProviderConfig } from './components'

export interface AirgramConfig
  extends Omit<Config, 'provider'>, TdProviderConfig {}

export class Airgram extends BaseAirgram<TdProvider> {
  public constructor (config: AirgramConfig) {
    const { command, ...restConfig } = config
    const baseConfig = {
      ...restConfig,
      provider: new TdProvider({ command })
    }
    super(baseConfig)
  }
}
