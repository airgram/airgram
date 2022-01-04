import { MessageContentUnion } from '@airgram/core'

/**
 * A service notification from the server was received. Upon receiving this the application
 * must show a popup with the content of the notification
 */
export class UpdateServiceNotificationBaseModel {
  public _: 'updateServiceNotification'

  /**
   * Notification type. If type begins with "AUTH_KEY_DROP_", then two buttons "Cancel"
   * and "Log out" must be shown under notification; if user presses the second, all local
   * data must be destroyed using Destroy method
   */
  public type: string

  /** Notification content */
  public content: MessageContentUnion
}
