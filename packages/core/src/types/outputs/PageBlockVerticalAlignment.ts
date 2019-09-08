/** Describes a Vertical alignment of a table cell content */
export type PageBlockVerticalAlignmentUnion = PageBlockVerticalAlignmentTop
  | PageBlockVerticalAlignmentMiddle
  | PageBlockVerticalAlignmentBottom

/** The content should be top-aligned */
export interface PageBlockVerticalAlignmentTop {
  _: 'pageBlockVerticalAlignmentTop'
}

/** The content should be middle-aligned */
export interface PageBlockVerticalAlignmentMiddle {
  _: 'pageBlockVerticalAlignmentMiddle'
}

/** The content should be bottom-aligned */
export interface PageBlockVerticalAlignmentBottom {
  _: 'pageBlockVerticalAlignmentBottom'
}
