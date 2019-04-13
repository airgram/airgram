/** Describes the reason why a chat is reported */
export type ChatReportReasonUnion = ChatReportReasonSpam
  | ChatReportReasonViolence
  | ChatReportReasonPornography
  | ChatReportReasonCopyright
  | ChatReportReasonCustom

/** The chat contains spam messages */
export interface ChatReportReasonSpam {
  _: 'chatReportReasonSpam'
}

/** The chat promotes violence */
export interface ChatReportReasonViolence {
  _: 'chatReportReasonViolence'
}

/** The chat contains pornographic messages */
export interface ChatReportReasonPornography {
  _: 'chatReportReasonPornography'
}

/** The chat contains copyrighted content */
export interface ChatReportReasonCopyright {
  _: 'chatReportReasonCopyright'
}

/** A custom reason provided by the user */
export interface ChatReportReasonCustom {
  _: 'chatReportReasonCustom'
  /** Report text */
  text: string
}
