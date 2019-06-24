declare module 'tdweb' {
  export interface TdWebConfig {
    instanceName?: string
    isBackground?: boolean
    logVerbosityLevel?: number
    jsLogVerbosityLevel?: 'error' | 'warning' | 'info' | 'log' | 'debug'
    useDatabase?: boolean
    readOnly?: boolean
    mode?: 'auto' | 'asmjs' | 'wasm'
    onUpdate?: (update: Record<string, any>) => void
  }

  class TdWeb {
    constructor (config: TdWebConfig)

    public onUpdate (update: Record<string, any>): void

    public send (query: Record<string, any>): Promise<Record<string, any>>
  }

  export default TdWeb
}
