import googleTranslate from 'google-translate'
import { response, event, socket } from 'syncano-server'

const translator = googleTranslate(CONFIG.API_KEY);

const text = ARGS.text
const lang = ARGS.lang

translator.translate(text, lang, function(err, translation) {
  if (err) {
    return response(text)
  }
  response(translation.translatedText)
})
