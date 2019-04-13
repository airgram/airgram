import { LocationInput } from '../inputs'
import { FileUnion } from '../outputs'

/**
 * Returns information about a file with a map thumbnail in PNG format. Only map thumbnail
 * files with size less than 1MB can be downloaded
 * @param {Object} params
 * @param {LocationInput} [params.location] - Location of the map center
 * @param {number} [params.zoom] - Map zoom level; 13-20
 * @param {number} [params.width] - Map width in pixels before applying scale; 16-1024
 * @param {number} [params.height] - Map height in pixels before applying scale;
 * 16-1024
 * @param {number} [params.scale] - Map scale; 1-3
 * @param {number} [params.chatId] - Identifier of a chat, in which the thumbnail
 * will be shown. Use 0 if unknown
 * @param {Object} state
 * @returns {FileUnion}
 */
export type GetMapThumbnailFileMethod = <ResponseT = FileUnion>(
  params: GetMapThumbnailFileParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetMapThumbnailFileParams {
  /** Location of the map center */
  location?: LocationInput
  /** Map zoom level; 13-20 */
  zoom?: number
  /** Map width in pixels before applying scale; 16-1024 */
  width?: number
  /** Map height in pixels before applying scale; 16-1024 */
  height?: number
  /** Map scale; 1-3 */
  scale?: number
  /** Identifier of a chat, in which the thumbnail will be shown. Use 0 if unknown */
  chatId?: number
}
