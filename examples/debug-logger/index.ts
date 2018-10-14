/*tslint:disable:object-literal-sort-keys*/

import { interfaces } from 'inversify'
import Airgram, { ag, TYPES } from '../../src'
import { getCalleeName } from '../../src/helpers'
import DebugLogger from './DebugLogger'

const app = {
  id: 1234,
  hash: 'XXX'
}

const airgram = new Airgram(app)

airgram.bind<ag.Logger & { level: string }>(TYPES.Logger).to(DebugLogger)
  .onActivation((context: interfaces.Context, logger) => {
    logger.namespace = [getCalleeName(context)]
    logger.level = 'info'
    return logger
  })
