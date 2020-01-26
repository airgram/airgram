import { Airgram, Auth, User, ApiResponse } from 'airgram'
import debug from 'debug'

const writeLog = debug('airgram:log')
const writeInfo = debug('airgram:info')
const writeError = debug('airgram:error')

const airgram = new Airgram({
  apiId: process.env.APP_ID as number | undefined,
  apiHash: process.env.APP_HASH,
  command: process.env.TDLIB_COMMAND,
  databaseDirectory: process.env.TDLIB_DB,
  logVerbosityLevel: 2
})

airgram.use(
  new Auth({
    token: process.env.BOT_TOKEN
  })
)

let botId: number | undefined
// Getting new messages
airgram.on('updateNewMessage', async ({ update, airgram }) => {
  writeLog('received updateNewMessage event')
  // only if we know self(bot) user id
  if (typeof botId === 'number') {
    const { message } = update
    if (
      message.senderUserId !== botId && // avoid self messages
      message.content._ === 'messageText' && // listen for text messages only
      message.content.text._ === 'formattedText' // listen for text messages only
    ) {
      writeLog('reply to message', message.content.text.text)
      airgram.api.sendMessage({
        chatId: message.chatId,
        replyToMessageId: message.id,
        inputMessageContent: {
          _: 'inputMessageText',
          text: {
            _: 'formattedText',
            text: message.content.text.text
          }
        }
      })
    }
  }
})

airgram.api
  .getMe()
  .then((ctx: ApiResponse<never, User>) => {
    if (ctx.response._ === 'user') {
      botId = ctx.response.id
      writeInfo('got self user id', botId)
    }
    if (ctx.response._ === 'error' && ctx.response.code === 401) {
      throw new Error('You are not authorized')
    }
  })
  .catch(err => {
    writeError(err)
    airgram.destroy()
  })
