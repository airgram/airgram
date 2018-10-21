/*tslint:disable:object-literal-sort-keys*/

import Airgram, { ag, TYPES } from '../../src'
import RedisStore from './RedisStore'

const app = {
  id: 1234,
  hash: 'XXX'
}

const airgram = new Airgram(app)

airgram.bind<RedisStore<ag.AuthDoc>>(TYPES.AuthStore).to(RedisStore)
airgram.bind<RedisStore<ag.MtpState>>(TYPES.MtpStateStore).to(RedisStore)
