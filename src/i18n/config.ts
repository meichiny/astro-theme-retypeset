// Global Language Map
export const langMap: Record<string, string[]> = {
  'zh': ['zh-CN'],
//  'zh-tw': ['zh-TW'],
//  'ja': ['ja-JP'],
//  'en': ['en-US'],
//  'es': ['es-ES'],
//  'ru': ['ru-RU'],
}

// Waline Language Map
// https://waline.js.org/guide/i18n.html
export const walineLocaleMap: Record<string, string> = {
  'zh': 'zh-CN',
//  'zh-tw': 'zh-TW',
//  'ja': 'jp-JP', // Waline uses jp-JP instead of ja-JP
//  'en': 'en-US',
//  'es': 'es-ES',
//  'ru': 'ru-RU',
}

// Giscus Language Map
// https://giscus.app/
export const giscusLocaleMap: Record<string, string> = {
  'zh': 'zh-CN',
  //'de': 'de',
  //'en': 'en',
  //'es': 'es',
  //'fr': 'fr',
  //'ja': 'ja',
  //'ko': 'ko',
  //'pl': 'pl',
  //'pt': 'pt',
  //'ru': 'ru',
  //'zh-tw': 'zh-TW',
}

// Supported Languages
export const supportedLangs = Object.keys(langMap).flat()
