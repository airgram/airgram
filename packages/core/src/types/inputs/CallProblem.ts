/** Describes the exact type of a problem with a call */
export type CallProblemInputUnion = CallProblemEchoInput
  | CallProblemNoiseInput
  | CallProblemInterruptionsInput
  | CallProblemDistortedSpeechInput
  | CallProblemSilentLocalInput
  | CallProblemSilentRemoteInput
  | CallProblemDroppedInput

/** The user heard their own voice */
export interface CallProblemEchoInput {
  _: 'callProblemEcho'
}

/** The user heard background noise */
export interface CallProblemNoiseInput {
  _: 'callProblemNoise'
}

/** The other side kept disappearing */
export interface CallProblemInterruptionsInput {
  _: 'callProblemInterruptions'
}

/** The speech was distorted */
export interface CallProblemDistortedSpeechInput {
  _: 'callProblemDistortedSpeech'
}

/** The user couldn't hear the other side */
export interface CallProblemSilentLocalInput {
  _: 'callProblemSilentLocal'
}

/** The other side couldn't hear the user */
export interface CallProblemSilentRemoteInput {
  _: 'callProblemSilentRemote'
}

/** The call ended unexpectedly */
export interface CallProblemDroppedInput {
  _: 'callProblemDropped'
}
