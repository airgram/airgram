import { Airgram as BaseAirgram, Config } from '@airgram/core'
import { TdProvider, TdWebProviderConfig } from './components'

export interface AirgramConfig<ContextT>
  extends Omit<Config<ContextT>, 'provider'>, TdWebProviderConfig {}

export class Airgram<ContextT = {}> extends BaseAirgram<ContextT, TdProvider> {
  public constructor (config: AirgramConfig<ContextT>) {
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
