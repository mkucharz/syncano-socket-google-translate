import googleTranslate from 'google-translate'
import langs from 'langs'

import Syncano from 'syncano-server'

export default (ctx) => {
  const {response} = Syncano(ctx)
  const translator = googleTranslate(ctx.config.API_KEY)

  const text = ctx.args.text
  const lang = ctx.args.lang

  const langCode = langs.where('name', lang.charAt(0).toUpperCase() + lang.slice(1))['1']

  return translator.translate(text, langCode, (err, translation) => {
    if (err) {
      return response(text)
    }
    return response(translation.translatedText)
  })
}
