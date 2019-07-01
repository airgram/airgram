import { ag, Airgram as BaseAirgram } from 'airgram-core'
import { TdJsonProvider, TdJsonProviderConfig } from './components'

export interface AirgramConfig<ContextT>
  extends ag.Omit<ag.AirgramConfig<ContextT>, 'provider'>, TdJsonProviderConfig {}

export class Airgram<ContextT extends ag.Context>
  extends BaseAirgram<ContextT, TdJsonProvider> implements ag.Airgram<ContextT, TdJsonProvider> {
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
