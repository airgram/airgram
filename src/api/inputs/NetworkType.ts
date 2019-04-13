/** Represents the type of a network */
export type NetworkTypeInputUnion = NetworkTypeNoneInput
  | NetworkTypeMobileInput
  | NetworkTypeMobileRoamingInput
  | NetworkTypeWiFiInput
  | NetworkTypeOtherInput

/** The network is not available */
export interface NetworkTypeNoneInput {
  _: 'networkTypeNone'
}

/** A mobile network */
export interface NetworkTypeMobileInput {
  _: 'networkTypeMobile'
}

/** A mobile roaming network */
export interface NetworkTypeMobileRoamingInput {
  _: 'networkTypeMobileRoaming'
}

/** A Wi-Fi network */
export interface NetworkTypeWiFiInput {
  _: 'networkTypeWiFi'
}

/** A different network type (e.g., Ethernet network) */
export interface NetworkTypeOtherInput {
  _: 'networkTypeOther'
}
