/** The has_protected_content setting of a channel was toggled */
export class ChatEventHasProtectedContentToggledBaseModel {
  public _: 'chatEventHasProtectedContentToggled'

  /** New value of has_protected_content */
  public hasProtectedContent: boolean
}
