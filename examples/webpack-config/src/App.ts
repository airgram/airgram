import { Airgram } from '@airgram/web'
import { apiHash, apiId, jsLogVerbosityLevel, logVerbosityLevel } from './config'

const airgram = new Airgram({
  apiId,
  apiHash,
  jsLogVerbosityLevel,
  logVerbosityLevel
})

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
