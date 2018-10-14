/*tslint:disable:object-literal-sort-keys*/

import Airgram, { ag, TYPES } from '../../src'
import PouchDBStore from './PouchDBStore'

const app = {
  id: 1234,
  hash: 'XXX'
}

const airgram = new Airgram(app)

airgram.bind<PouchDBStore<ag.AuthDoc>>(TYPES.AuthStore).to(PouchDBStore)
airgram.bind<PouchDBStore<ag.MtpState>>(TYPES.MtpStateStore).to(PouchDBStore)
