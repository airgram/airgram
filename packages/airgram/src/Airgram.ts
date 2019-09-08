import { Airgram as BaseAirgram, Config } from '@airgram/core'
import { TdProvider, TdProviderConfig } from './components'

export interface AirgramConfig<ContextT>
  extends Omit<Config<ContextT>, 'provider'>, TdProviderConfig {}

export class Airgram<ContextT = {}> extends BaseAirgram<ContextT, TdProvider> {
  public constructor (config: AirgramConfig<ContextT>) {
    const { command, ...restConfig } = config
    const baseConfig = {
      ...restConfig,
      provider: new TdProvider({ command })
    }
    super(baseConfig)
  }
}
