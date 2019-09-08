import { TextEntity } from './index'

export type TextEntitiesUnion = TextEntities

/** Contains a list of text entities */
export interface TextEntities {
  _: 'textEntities'
  /** List of text entities */
  entities: TextEntity[]
}
