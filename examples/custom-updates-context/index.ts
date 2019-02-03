import 'reflect-metadata'
import { ag, Airgram, api, TYPES } from '../../src'
import UpdatesContextManager, { CustomUpdatesContext } from './UpdatesContextManager'

const app = {
  hash: process.env.APP_HASH!,
  id: Number(process.env.APP_ID!),
  token: process.env.BOT_TOKEN
}

const airgram = new Airgram<ag.Context, CustomUpdatesContext>(app)
const { auth, updates } = airgram

// Bind custom context
airgram.bind<ag.UpdatesContextManager>(TYPES.UpdatesContextManager).to(UpdatesContextManager)

// Use `Auth` and `Updates` middlewares
airgram.use(auth, updates)

// Get message and reply with the `keyboardButtonCallback` button
updates.on<api.UpdateNewMessage, api.Updates>('updateNewMessage',
  async ({ client, update, parent, convertStringToBytes }, next) => {

    if (!parent.users.length || parent.users[0]._ !== 'user' || update.message._ !== 'message') {
      return next()
    }

    const userId = parent.users[0].id as number
    const accessHash = (parent.users[0] as api.User).access_hash as string
    const replyText = `Echo: ${update.message.message}`
    const callbackData = 'CALLBACK_DATA'
    const buttonLabel = 'Send callback'

    await client.messages.sendMessage({
      flags: 4,
      message: replyText,
      peer: { _: 'inputPeerUser', user_id: userId, access_hash: accessHash },
      random_id: String(Math.random()),
      reply_markup: {
        _: 'replyInlineMarkup',
        rows: [
          {
            _: 'keyboardButtonRow', buttons: [
              { _: 'keyboardButtonCallback', text: buttonLabel, data: convertStringToBytes(callbackData) }
            ]
          }
        ]
      }
    })

    return next()
  })

// Getting callbacks
updates.on<api.UpdateBotCallbackQuery>('updateBotCallbackQuery', ({ convertBytesToString, update }, next) => {
  if (update.data) {
    console.log(`"Callback data: ${convertBytesToString(update.data)}`)
  }
  return next()
})

updates.startPolling().catch((error) => {
  throw error
})
