/** Describes a horizontal alignment of a table cell content */
export type PageBlockHorizontalAlignmentUnion = PageBlockHorizontalAlignmentLeft
  | PageBlockHorizontalAlignmentCenter
  | PageBlockHorizontalAlignmentRight

/** The content must be left-aligned */
export interface PageBlockHorizontalAlignmentLeft {
  _: 'pageBlockHorizontalAlignmentLeft'
}

/** The content must be center-aligned */
export interface PageBlockHorizontalAlignmentCenter {
  _: 'pageBlockHorizontalAlignmentCenter'
}

/** The content must be right-aligned */
export interface PageBlockHorizontalAlignmentRight {
  _: 'pageBlockHorizontalAlignmentRight'
}
