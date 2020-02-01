import { Airgram } from '@airgram/web'
import { Auth } from 'airgram/src/components/Auth' // We borrow the component only for demonstration purposes.
import { apiHash, apiId, jsLogVerbosityLevel, logVerbosityLevel } from './config'

const airgram = new Airgram({
  apiId,
  apiHash,
  jsLogVerbosityLevel,
  logVerbosityLevel
})

airgram.use(new Auth({
  code: () => window.prompt('Please enter the secret code:') || '',
  phoneNumber: () => window.prompt('Please enter your phone number:') || '',
  password: () => window.prompt('Please enter your password:') || ''
}))

airgram.use(async (ctx, next) => {
  if ('request' in ctx) {
    console.log('🚀 [Airgram Request]:', ctx.request)
  } else if (ctx.update) {
    console.log('🚀 [Airgram Update]:', ctx.update)
  }
  await next()
  if ('request' in ctx) {
    console.log('🚀 [Airgram Response]:', ctx.request.method, ctx.response)
  }
})

export {
  airgram
}
