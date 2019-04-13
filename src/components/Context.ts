import { createState } from '../helpers'
import * as ag from '../types'

export function createContext ({ state, ...options }: ag.ContextOptions): ag.Context {
  return Object.assign(options, createState(state))
}
