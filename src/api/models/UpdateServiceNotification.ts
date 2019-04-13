import { MessageContentUnion } from '../outputs'

/**
 * Service notification from the server. Upon receiving this the client must show a
 * popup with the content of the notification
 */
export class UpdateServiceNotificationBaseModel {
  public _: 'updateServiceNotification'
  /**
   * Notification type. If type begins with "AUTH_KEY_DROP_", then two buttons "Cancel"
   * and "Log out" should be shown under notification; if user presses the second, all
   * local data should be destroyed using Destroy method
   */
  public type: string
  /** Notification content */
  public content: MessageContentUnion
}
