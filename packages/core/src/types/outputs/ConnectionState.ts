/** Describes the current state of the connection to Telegram servers */
export type ConnectionStateUnion = ConnectionStateWaitingForNetwork
  | ConnectionStateConnectingToProxy
  | ConnectionStateConnecting
  | ConnectionStateUpdating
  | ConnectionStateReady

/**
 * Currently waiting for the network to become available. Use setNetworkType to change
 * the available network type
 */
export interface ConnectionStateWaitingForNetwork {
  _: 'connectionStateWaitingForNetwork'
}

/** Currently establishing a connection with a proxy server */
export interface ConnectionStateConnectingToProxy {
  _: 'connectionStateConnectingToProxy'
}

/** Currently establishing a connection to the Telegram servers */
export interface ConnectionStateConnecting {
  _: 'connectionStateConnecting'
}

/** Downloading data received while the application was offline */
export interface ConnectionStateUpdating {
  _: 'connectionStateUpdating'
}

/** There is a working connection to the Telegram servers */
export interface ConnectionStateReady {
  _: 'connectionStateReady'
}
