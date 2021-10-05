import { FormattedText } from '@airgram/core'

/**
 * A poll in quiz mode, which has exactly one correct answer option and can be answered
 * only once
 */
export class PollTypeQuizBaseModel {
  public _: 'pollTypeQuiz'

  /** 0-based identifier of the correct answer option; -1 for a yet unanswered poll */
  public correctOptionId: number

  /**
   * Text that is shown when the user chooses an incorrect answer or taps on the lamp
   * icon; 0-200 characters with at most 2 line feeds; empty for a yet unanswered poll
   */
  public explanation: FormattedText
}
