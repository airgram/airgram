// tslint:disable:ordered-imports
import 'reflect-metadata'
import { plainToClass } from 'class-transformer'
import * as ag from '../types'

export function useModels (
  models: Record<string, ag.ClassType<any>>
): ag.PlainObjectToModelTransformer {
  return (plainObject) => '_' in plainObject && models[plainObject._]
    ? plainToClass(models[plainObject._], plainObject)
    : plainObject
}
