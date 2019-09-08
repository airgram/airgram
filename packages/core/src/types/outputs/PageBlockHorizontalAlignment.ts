/** Describes a horizontal alignment of a table cell content */
export type PageBlockHorizontalAlignmentUnion = PageBlockHorizontalAlignmentLeft
  | PageBlockHorizontalAlignmentCenter
  | PageBlockHorizontalAlignmentRight

/** The content should be left-aligned */
export interface PageBlockHorizontalAlignmentLeft {
  _: 'pageBlockHorizontalAlignmentLeft'
}

/** The content should be center-aligned */
export interface PageBlockHorizontalAlignmentCenter {
  _: 'pageBlockHorizontalAlignmentCenter'
}

/** The content should be right-aligned */
export interface PageBlockHorizontalAlignmentRight {
  _: 'pageBlockHorizontalAlignmentRight'
}
