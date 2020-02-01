/** An HTTP url needs to be open */
export class LoginUrlInfoOpenBaseModel {
  public _: 'loginUrlInfoOpen'

  /** The URL to open */
  public url: string

  /** True, if there is no need to show an ordinary open URL confirm */
  public skipConfirm: boolean
}
