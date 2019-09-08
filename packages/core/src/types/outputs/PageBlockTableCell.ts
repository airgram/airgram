import {
  PageBlockHorizontalAlignmentUnion,
  PageBlockVerticalAlignmentUnion,
  RichTextUnion
} from './index'

export type PageBlockTableCellUnion = PageBlockTableCell

/** Represents a cell of a table */
export interface PageBlockTableCell {
  _: 'pageBlockTableCell'
  /** Cell text */
  text: RichTextUnion
  /** True, if it is a header cell */
  isHeader: boolean
  /** The number of columns the cell should span */
  colspan: number
  /** The number of rows the cell should span */
  rowspan: number
  /** Horizontal cell content alignment */
  align: PageBlockHorizontalAlignmentUnion
  /** Vertical cell content alignment */
  valign: PageBlockVerticalAlignmentUnion
}
