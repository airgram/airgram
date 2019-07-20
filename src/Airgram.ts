import { Airgram } from '@airgram/core'
import { TdJsonProvider, TdJsonProviderConfig } from './components'

export interface AirgramConfig<ContextT>
  extends Airgram.Omit<Airgram.Config<ContextT>, 'provider'>, TdJsonProviderConfig {}

export class TdJsonAirgram<ContextT extends Airgram.Context = Airgram.Context>
  extends Airgram<ContextT, TdJsonProvider> implements Airgram.AirgramInstance<ContextT, TdJsonProvider> {
  constructor (config: AirgramConfig<ContextT>) {
    const { command, logFilePath, logMaxFileSize, logVerbosityLevel, ...restConfig } = config
    const baseConfig = {
      ...restConfig, provider: new TdJsonProvider({
        command,
        logFilePath,
        logMaxFileSize,
        logVerbosityLevel
      })
    }
    super(baseConfig)
  }
}
