import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LocationInput } from '../inputs'
import { FileUnion } from '../outputs'

export interface GetMapThumbnailFileParams {
  location?: LocationInput // Location of the map center
  zoom?: number // Map zoom level; 13-20
  width?: number // Map width in pixels before applying scale; 16-1024
  height?: number // Map height in pixels before applying scale; 16-1024
  scale?: number // Map scale; 1-3
  chatId?: number // Identifier of a chat, in which the thumbnail will be shown. Use 0 if unknown
}

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
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMapThumbnailFileParams, FileUnion>>}
 */
export type getMapThumbnailFile<ExtensionT> = (
  params?: GetMapThumbnailFileParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetMapThumbnailFileParams, FileUnion> & ExtensionT>
