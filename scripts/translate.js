import googleTranslate from 'google-translate'
import langs from 'langs'
import { response, event, socket } from 'syncano-server'

const translator = googleTranslate(CONFIG.API_KEY);

const text = ARGS.text
const lang = ARGS.lang

const langCode = langs.where('name', lang.charAt(0).toUpperCase() + lang.slice(1))['1']

translator.translate(text, langCode, function(err, translation) {
  if (err) {
    return response(text)
  }
  response(translation.translatedText)
})
