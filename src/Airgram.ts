import { Container, interfaces } from 'inversify'
import { Config } from './config'
import { ag } from './interfaces'
import { bindComponents, createContainer } from './ioc'
import TYPES from './ioc/types'

export default class Airgram {
  public config: ag.Config
  public container: Container
  private destroyed: boolean = false
  private instances: { client?: ag.Client, auth?: ag.Auth, updates?: ag.Updates } = {}

  constructor (config: Config | { id: number, hash: string, version?: string }, container?: Container) {
    this.config = config instanceof Config ? config : new Config(config.id, config.hash, config.version)
    if (container instanceof Container) {
      this.container = container
    } else {
      this.container = createContainer()
      bindComponents(this.container)
    }
  }

  get auth (): ag.Auth {
    if (!('auth' in this.instances)) {
      this.instances.auth = this.container.get<ag.Auth>(TYPES.Auth)
      this.instances.auth.configure(this.client)
    }
    return this.instances.auth!
  }

  get client (): ag.Client {
    if (this.destroyed) {
      throw new Error('Client has destroyed.')
    }
    if (!('client' in this.instances)) {
      const createClient = this.container.get<interfaces.Factory<ag.Client<ag.Context>>>(TYPES.ClientFactory)
      this.instances.client = createClient(this.config) as ag.Client<ag.Context>
    }
    return this.instances.client!
  }

  get updates (): ag.Updates {
    if (!('updates' in this.instances)) {
      this.instances.updates = this.container.get<ag.Updates>(TYPES.Updates)
      this.instances.updates.configure(this.client)
    }
    return this.instances.updates!
  }

  public bind<T> (serviceIdentifier: interfaces.ServiceIdentifier<T>): interfaces.BindingToSyntax<T> {
    if (('client' in this.instances)) {
      throw new Error('bind() binding is allowed only before the client initialization.')
    }
    return this.container.rebind<T>(serviceIdentifier)
  }

  public catch (handler: (error: Error) => void): this {
    this.client.catch(handler)
    return this
  }

  public async destroy (): Promise<void> {
    await this.client.destroy()
    Object.keys(this.instances).forEach((key) => {
      delete this.instances[key]
    })
    this.destroyed = true
  }

  public on (predicateTypes: string | string[], ...fns: Array<ag.Middleware<ag.Context>>): this {
    this.client.on(predicateTypes, ...fns)
    return this
  }

  public use (...fns: Array<ag.Middleware<ag.Context>>): this {
    this.client.use(...fns)
    return this
  }
}
