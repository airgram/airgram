
export interface InputReportReasonOther {
  _: 'inputReportReasonOther'
  text: string
}

export interface InputReportReasonPornography {
  _: 'inputReportReasonPornography'
}

export interface InputReportReasonSpam {
  _: 'inputReportReasonSpam'
}

export interface InputReportReasonViolence {
  _: 'inputReportReasonViolence'
}

export type ReportReasonUnion = InputReportReasonOther
  | InputReportReasonPornography
  | InputReportReasonSpam
  | InputReportReasonViolence
