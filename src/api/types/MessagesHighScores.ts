import { HighScoreUnion } from './HighScore'
import { UserUnion } from './User'

export interface MessagesHighScores {
  _: 'messages.highScores'
  scores: HighScoreUnion[]
  users: UserUnion[]
}

export type MessagesHighScoresUnion = MessagesHighScores
