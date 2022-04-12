import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TextUnion } from '../outputs'

export interface TranslateTextParams {
  text?: string // Text to translate
  fromLanguageCode?: string // A two-letter ISO 639-1 language code of the language from which the message is translated. If empty, the language will be detected automatically
  toLanguageCode?: string // A two-letter ISO 639-1 language code of the language to which the message is translated
}

/**
 * Translates a text to the given language. Returns a 404 error if the translation can't
 * be performed
 * @param {Object} params
 * @param {string} [params.text] - Text to translate
 * @param {string} [params.fromLanguageCode] - A two-letter ISO 639-1 language code
 * of the language from which the message is translated. If empty, the language will
 * be detected automatically
 * @param {string} [params.toLanguageCode] - A two-letter ISO 639-1 language code
 * of the language to which the message is translated
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<TranslateTextParams, TextUnion>>}
 */
export type translateText = (
  params?: TranslateTextParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<TranslateTextParams, TextUnion>>
