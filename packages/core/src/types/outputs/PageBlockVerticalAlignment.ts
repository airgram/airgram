/** Describes a Vertical alignment of a table cell content */
export type PageBlockVerticalAlignmentUnion = PageBlockVerticalAlignmentTop
  | PageBlockVerticalAlignmentMiddle
  | PageBlockVerticalAlignmentBottom

/** The content must be top-aligned */
export interface PageBlockVerticalAlignmentTop {
  _: 'pageBlockVerticalAlignmentTop'
}

/** The content must be middle-aligned */
export interface PageBlockVerticalAlignmentMiddle {
  _: 'pageBlockVerticalAlignmentMiddle'
}

/** The content must be bottom-aligned */
export interface PageBlockVerticalAlignmentBottom {
  _: 'pageBlockVerticalAlignmentBottom'
}
