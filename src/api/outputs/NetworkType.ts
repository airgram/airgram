/** Represents the type of a network */
export type NetworkTypeUnion = NetworkTypeNone
  | NetworkTypeMobile
  | NetworkTypeMobileRoaming
  | NetworkTypeWiFi
  | NetworkTypeOther

/** The network is not available */
export interface NetworkTypeNone {
  _: 'networkTypeNone'
}

/** A mobile network */
export interface NetworkTypeMobile {
  _: 'networkTypeMobile'
}

/** A mobile roaming network */
export interface NetworkTypeMobileRoaming {
  _: 'networkTypeMobileRoaming'
}

/** A Wi-Fi network */
export interface NetworkTypeWiFi {
  _: 'networkTypeWiFi'
}

/** A different network type (e.g., Ethernet network) */
export interface NetworkTypeOther {
  _: 'networkTypeOther'
}
