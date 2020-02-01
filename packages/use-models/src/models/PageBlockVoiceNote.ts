import { PageBlockCaption, VoiceNote } from '@airgram/core'

/** A voice note */
export class PageBlockVoiceNoteBaseModel {
  public _: 'pageBlockVoiceNote'

  /** Voice note; may be null */
  public voiceNote?: VoiceNote

  /** Voice note caption */
  public caption: PageBlockCaption
}
