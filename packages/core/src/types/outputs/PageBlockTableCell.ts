import {
  PageBlockHorizontalAlignmentUnion,
  PageBlockVerticalAlignmentUnion,
  RichTextUnion
} from './index'

export type PageBlockTableCellUnion = PageBlockTableCell

/** Represents a cell of a table */
export interface PageBlockTableCell {
  _: 'pageBlockTableCell'
  /** Cell text; may be null. If the text is null, then the cell must be invisible */
  text?: RichTextUnion
  /** True, if it is a header cell */
  isHeader: boolean
  /** The number of columns the cell spans */
  colspan: number
  /** The number of rows the cell spans */
  rowspan: number
  /** Horizontal cell content alignment */
  align: PageBlockHorizontalAlignmentUnion
  /** Vertical cell content alignment */
  valign: PageBlockVerticalAlignmentUnion
}
