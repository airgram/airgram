/** Describes the type of a poll */
export type PollTypeInputUnion = PollTypeRegularInput | PollTypeQuizInput

/** A regular poll */
export interface PollTypeRegularInput {
  _: 'pollTypeRegular'
  /** True, if multiple answer options can be chosen simultaneously */
  allowMultipleAnswers?: boolean
}

/**
 * A poll in quiz mode, which has exactly one correct answer option and can be answered
 * only once
 */
export interface PollTypeQuizInput {
  _: 'pollTypeQuiz'
  /** 0-based identifier of the correct answer option; -1 for a yet unanswered poll */
  correctOptionId?: number
}
