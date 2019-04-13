/**
 * Represents the relationship between user A and user B. For incoming_link, user A
 * is the current user; for outgoing_link, user B is the current user
 */
export type LinkStateUnion = LinkStateNone
  | LinkStateKnowsPhoneNumber
  | LinkStateIsContact

/** The phone number of user A is not known to user B */
export interface LinkStateNone {
  _: 'linkStateNone'
}

/**
 * The phone number of user A is known but that number has not been saved to the contacts
 * list of user B
 */
export interface LinkStateKnowsPhoneNumber {
  _: 'linkStateKnowsPhoneNumber'
}

/** The phone number of user A has been saved to the contacts list of user B */
export interface LinkStateIsContact {
  _: 'linkStateIsContact'
}
