export type PaymentFormThemeInputUnion = PaymentFormThemeInput

/** Theme colors for a payment form */
export interface PaymentFormThemeInput {
  _: 'paymentFormTheme'
  /** A color of the payment form background in the RGB24 format */
  backgroundColor?: number
  /** A color of text in the RGB24 format */
  textColor?: number
  /** A color of hints in the RGB24 format */
  hintColor?: number
  /** A color of links in the RGB24 format */
  linkColor?: number
  /** A color of thebuttons in the RGB24 format */
  buttonColor?: number
  /** A color of text on the buttons in the RGB24 format */
  buttonTextColor?: number
}
