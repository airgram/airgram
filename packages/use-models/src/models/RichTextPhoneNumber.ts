import { RichTextUnion } from '@airgram/core'

/** A rich text phone number */
export class RichTextPhoneNumberBaseModel {
  public _: 'richTextPhoneNumber'

  /** Text */
  public text: RichTextUnion

  /** Phone number */
  public phoneNumber: string
}
