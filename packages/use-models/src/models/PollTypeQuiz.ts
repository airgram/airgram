/**
 * A poll in quiz mode, which has exactly one correct answer option and can be answered
 * only once
 */
export class PollTypeQuizBaseModel {
  public _: 'pollTypeQuiz'

  /** 0-based identifier of the correct answer option; -1 for a yet unanswered poll */
  public correctOptionId: number
}
