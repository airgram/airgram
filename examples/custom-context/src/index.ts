import { UPDATE } from '@airgram/constants'
import { Airgram, Auth, isError, prompt } from 'airgram'
import debug from 'debug'
import { Store } from './Store'

const writeLog = debug('airgram:log')
const writeError = debug('airgram:error')

const store = new Store()

const airgram = new Airgram({
  apiId: process.env.APP_ID as number | undefined,
  apiHash: process.env.APP_HASH,
  command: process.env.TDLIB_COMMAND,
  databaseDirectory: '../../db',
  logVerbosityLevel: 2,
  // the following option allows to extend the base context
  context: { $store: store }
})

airgram.use(new Auth({
  code: () => prompt('Please enter the secret code:\n'),
  phoneNumber: () => prompt('Please enter your phone number:\n')
}))

airgram.on(UPDATE.updateUser, async ({ $store, update }, next) => {
  const { user } = update
  $store.users.set(user.id, user)
  return next()
})

airgram.on(UPDATE.updateNewChat, async ({ $store, update }, next) => {
  const { chat } = update
  $store.chats.set(chat.id, chat)
  return next()
})

airgram.on(UPDATE.updateChatLastMessage, async ({ $store, update }, next) => {
  $store.chatLastMessage.set(update.chatId, update)
  return next()
})

airgram.api.getChats({
  limit: 10,
  offsetChatId: 0,
  offsetOrder: '9223372036854775807' // 2^63
}).then(({ response, $store }) => {
  if (isError(response)) {
    throw new Error(`[TDLib][${response.code}] ${response.message}`)
  }
  const chats = response.chatIds.map((chatId) => {
    const chat = $store.chats.get(chatId)
    const message = $store.chatLastMessage.get(chatId)

    if (!chat || !message || !message.lastMessage) {
      throw new Error('Invalidate store')
    }

    const { lastMessage } = message
    const { title } = chat
    const sentBy = $store.users.get(lastMessage.senderUserId)

    return {
      title,
      lastMessage: lastMessage.content,
      sentBy
    }
  })

  writeLog('getChats:')
  writeLog(chats)
}).catch(writeError)
