import { UPDATE } from '@airgram/constants'
import { useModels } from '@airgram/use-models'
import { Airgram, Auth, prompt } from 'airgram'
import debug from 'debug'
import { ChatModel } from './ChatModel'

const writeLog = debug('airgram:log')
const writeError = debug('airgram:error')

const airgram = new Airgram({
  apiId: process.env.APP_ID as number | undefined,
  apiHash: process.env.APP_HASH,
  command: process.env.TDLIB_COMMAND,
  databaseDirectory: '../../db',
  logVerbosityLevel: 1,
  // the following option allows to provide custom models for TDLib objects
  models: useModels({
    chat: ChatModel
  })
})

airgram.use(new Auth({
  code: () => prompt(`Please enter the secret code:\n`),
  phoneNumber: () => prompt(`Please enter your phone number:\n`)
}))

airgram.on(UPDATE.updateNewChat, async ({ update }, next) => {
  // The `isBasicGroup`, `isSupergroup`, `isPrivateChat` and `isSecretChat` properties
  // are defined in the `ChatModel` class
  const {
    title,
    isBasicGroup,
    isSupergroup,
    isPrivateChat,
    isSecretChat
  } = update.chat

  writeLog({
    title,
    isBasicGroup,
    isSupergroup,
    isPrivateChat,
    isSecretChat
  })
  return next()
})

airgram.api.getChats({
  limit: 10,
  offsetChatId: 0,
  offsetOrder: '9223372036854775807'
}).catch(writeError)
