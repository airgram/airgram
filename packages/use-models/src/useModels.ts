import { TdObject } from '@airgram/core'
import { plainToClass } from 'class-transformer'

export type ClassType<T> = new (...args: any[]) => T
export type PlainObjectToModelTransformer = (plainObject: TdObject) => ClassType<any> | TdObject

export function useModels (
  models: Record<string, ClassType<any>>
): PlainObjectToModelTransformer {
  return (plainObject) => '_' in plainObject && models[plainObject._]
    ? plainToClass(models[plainObject._], plainObject)
    : plainObject
}
