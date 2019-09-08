import { FormattedText, VoiceNote } from '@airgram/core'

/** A voice note message */
export class MessageVoiceNoteBaseModel {
  public _: 'messageVoiceNote'

  /** Message content */
  public voiceNote: VoiceNote

  /** Voice note caption */
  public caption: FormattedText

  /** True, if at least one of the recipients has listened to the voice note */
  public isListened: boolean
}
