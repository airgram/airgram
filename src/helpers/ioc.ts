import { interfaces } from 'inversify'
import * as get from 'lodash/get'

export const getCalleeName = (context: interfaces.Context): string => {
  return get(context, ['currentRequest', 'parentRequest', 'bindings', 0, 'implementationType', 'name'])
}
