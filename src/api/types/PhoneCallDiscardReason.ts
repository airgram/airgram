
export interface PhoneCallDiscardReasonBusy {
  _: 'phoneCallDiscardReasonBusy'
}

export interface PhoneCallDiscardReasonDisconnect {
  _: 'phoneCallDiscardReasonDisconnect'
}

export interface PhoneCallDiscardReasonHangup {
  _: 'phoneCallDiscardReasonHangup'
}

export interface PhoneCallDiscardReasonMissed {
  _: 'phoneCallDiscardReasonMissed'
}

export type PhoneCallDiscardReasonUnion = PhoneCallDiscardReasonBusy
  | PhoneCallDiscardReasonDisconnect
  | PhoneCallDiscardReasonHangup
  | PhoneCallDiscardReasonMissed
