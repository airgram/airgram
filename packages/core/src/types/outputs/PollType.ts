import { FormattedText } from './index'

/** Describes the type of a poll */
export type PollTypeUnion = PollTypeRegular | PollTypeQuiz

/** A regular poll */
export interface PollTypeRegular {
  _: 'pollTypeRegular'
  /** True, if multiple answer options can be chosen simultaneously */
  allowMultipleAnswers: boolean
}

/**
 * A poll in quiz mode, which has exactly one correct answer option and can be answered
 * only once
 */
export interface PollTypeQuiz {
  _: 'pollTypeQuiz'
  /** 0-based identifier of the correct answer option; -1 for a yet unanswered poll */
  correctOptionId: number
  /**
   * Text that is shown when the user chooses an incorrect answer or taps on the lamp
   * icon, 0-200 characters with at most 2 line feeds; empty for a yet unanswered poll
   */
  explanation: FormattedText
}
