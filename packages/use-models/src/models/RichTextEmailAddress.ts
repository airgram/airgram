import { RichTextUnion } from '@airgram/core'

/** A rich text email link */
export class RichTextEmailAddressBaseModel {
  public _: 'richTextEmailAddress'

  /** Text */
  public text: RichTextUnion

  /** Email address */
  public emailAddress: string
}
