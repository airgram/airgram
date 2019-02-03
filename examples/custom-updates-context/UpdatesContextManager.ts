import { inject, injectable } from 'inversify'
import { ag, TYPES } from '../../src'
import BaseUpdatesContextManager from '../../src/base/UpdatesContextManager'
import { arrayBufferToBytes } from '../../src/helpers'

export interface CustomUpdatesContext extends ag.UpdateContext {
  convertBytesToString (bytes: number[]): string

  convertStringToBytes (str: string): number[]
}

@injectable()
export default class UpdatesContextManager extends BaseUpdatesContextManager
  implements ag.UpdatesContextManager<CustomUpdatesContext> {

  constructor (
    @inject(TYPES.MtpSerializerFactory) protected createSerializer: ag.MtpSerializerFactory,
    @inject(TYPES.MtpDeserializerFactory) protected createDeserializer: ag.MtpDeserializerFactory
  ) {
    super()
  }

  public createContext (options: ag.UpdateContextOptions) {
    return {
      ...super.createContext(options),
      convertBytesToString: (bytes) => this.convertBytesToString(bytes),
      convertStringToBytes: (str) => this.convertStringToBytes(str)
    }
  }

  private convertBytesToString (bytes: number[]): string {
    const data = this.createDeserializer(bytes)
    return data.fetchString()
  }

  private convertStringToBytes (str: string): number[] {
    const data = this.createSerializer()
    data.storeString(str)
    return arrayBufferToBytes(data.getBuffer())
  }
}
