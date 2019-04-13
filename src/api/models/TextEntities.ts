import { TextEntity } from '../outputs'

/** Contains a list of text entities */
export class TextEntitiesBaseModel {
  public _: 'textEntities'
  /** List of text entities */
  public entities: TextEntity[]
}
