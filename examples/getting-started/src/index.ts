import { Airgram, Auth, isError, prompt, toObject } from 'airgram'
import debug from 'debug'

const writeLog = debug('airgram:log')
const writeInfo = debug('airgram:info')
const writeError = debug('airgram:error')

const airgram = new Airgram({
  apiId: process.env.APP_ID as number | undefined,
  apiHash: process.env.APP_HASH,
  command: process.env.TDLIB_COMMAND,
  databaseDirectory: '../../db',
  logVerbosityLevel: 2
})

airgram.use(new Auth({
  code: () => prompt(`Please enter the secret code:\n`),
  phoneNumber: () => prompt(`Please enter your phone number:\n`)
}))

// async/await style of requests
void (async () => {
  const me = toObject(await airgram.api.getMe())
  writeInfo(`[Me] `, me)
})

// Example above is equivalent to:
// airgram.api.getMe().then(toObject).then((me) => {
//   writeLog(`[Me] `, me)
// })

// handle errors
airgram.api.setProfilePhoto({
  photo: {
    _: 'inputFileLocal',
    path: '/invalid/path/to/image.jpg'
  }
}).then(({ request, response }) => {
  if (isError(response)) {
    writeError(`[${request.method}][${response.code}] ${response.message}`)
  } else {
    writeInfo('Profile photo has been loaded.')
  }
})

// Getting all updates
airgram.use((ctx, next) => {
  if ('update' in ctx) {
    writeLog(`[all updates][${ctx._}]`, JSON.stringify(ctx.update))
  }
  return next()
})

// Getting new messages
airgram.on('updateNewMessage', async ({ update }, next) => {
  const { message } = update
  writeLog('[new message]', message)
  return next()
})
