# Airgram

Awesome wrapper for [TDLib](https://core.tlgr.org/tdlib) (TypeScript/JavaScript, NodeJS).

You may also be interested in:
- [MTProto implementation](https://github.com/airgram/airgram/tree/mtproto)
- [Version for browsers](https://github.com/airgram/tdweb-airgram)

## Features

- Strictly typed;
- Documentation out of the box;
- Supports models;
- Built on middleware;
- Authorization helper;

All TDLib classes and methods are described and have suitable wrappers in Airgram. There are only two differences:
- All parameter names are represent in "camelCase".
- Parameter `@type` renamed to `_`.

## Requirements
- TDLib v1.4.0
- NodeJS

## Documentation
- [Installation](#installation)
- [Getting started](#getting-started)
- [Configuration](#configuration)
- [Api reference](#api-reference)
- [Authorization](#authorization)
- [Middleware](#middleware)
- [Getting updates](#getting-updates)
---
- [TDLib methods](https://github.com/airgram/airgram-api/tree/master/docs/td-methods.md)
- [TDLib input types](https://github.com/airgram/airgram-api/tree/master/docs/td-inputs.md)
- [TDLib output types](https://github.com/airgram/airgram-api/tree/master/docs/td-outputs.md)

## Installation
1. Build TDLib library according the [instruction](https://github.com/tdlib/td#building).
2. Install Airgram:
```bash
# npm
npm install airgram
```
```bash
# yarn
yarn add airgram
```

## Getting started

Please check out an [example](https://github.com/airgram/airgram-ts-example).

Basic usage:

```typescript
import { Airgram, Auth, prompt } from 'airgram'

const airgram = new Airgram({
  apiId: Number(process.env.APP_ID!),
  apiHash: process.env.APP_HASH!,
  logVerbosityLevel: 2
})

const auth = new Auth(airgram)

auth.use({
  code: () => prompt(`Please enter the secret code:\n`),
  phoneNumber: () => prompt(`Please enter your phone number:\n`)
})

// Call Telegram method
airgram.api.getMe().then((response) => {
  console.info(response)
})

// Getting all updates
airgram.updates.use(({ update }, next) => {
  if(update) {
    console.log(`"${update._}" ${JSON.stringify(update)}`)
  }
  return next()
})

// Get only new message updates
airgram.updates.on('updateNewMessage', ({ update }, next) => {
  console.info(update)
  return next
})

```

## Configuration

This section describes the options you can pass to `Airgram` constructor:

```typescript
import { Airgram } from 'airgram'

const airgram = new Airgram({
  // options
})
```

### TDLib options

| Key                | Type                     | Note                                                        |
| ------------------ | ------------------------ | ----------------------------------------------------------- |
| `command` | `string` | Path to the `tdjson` (windows) / `libtdjson` (unix) command. |
| `logFilePath` | `string` | Path to a file where the internal TDLib log will be written. Use an empty path to switch back to the default logging behaviour. |
| `logMaxFileSize` | `number` | Maximum size of the file to where the internal TDLib log is written before the file will be auto-rotated. Should be positive.  |
| `logVerbosityLevel` | `number` | New value of the verbosity level for logging. Value 0 corresponds to fatal errors, value 1 corresponds to errors, value 2 corresponds to warnings and debug warnings, value 3 corresponds to informational, value 4 corresponds to debug, value 5 corresponds to verbose debug, value greater than 5 and up to 1024 can be used to enable even more logging. |
| `useTestDc` | `boolean` | If set to true, the Telegram test environment will be used instead of the production  environment |
| `databaseDirectory` | `string` | The path to the directory for the persistent database |
| `filesDirectory` | `string` | The path to the directory for storing files |
| `useFileDatabase` | `boolean` | If set to true, information about downloaded and uploaded files will be saved between application restarts |
| `useChatInfoDatabase` | `boolean` | If set to true, the library will maintain a cache of users, basic groups, supergroups, channels and secret chats. Implies `useFileDatabase` |
| `useMessageDatabase` | `boolean` | If set to true, the library will maintain a cache of chats and messages. Implies `useChatInfoDatabase` |
| `useSecretChats` | `boolean` | If set to true, support for secret chats will be enabled |
| `apiId` | `number` | Application identifier for Telegram API access, which can be obtained at https://my.telegram.org |
| `apiHash` | `string` | Application identifier hash for Telegram API access, which can be obtained at https://my.telegram.org |
| `systemLanguageCode` | `string` | IETF language tag of the user's operating system language |
| `deviceModel` | `string` | Model of the device the application is being run on |
| `systemVersion` | `string` | Version of the operating system the application is being run on |
| `applicationVersion` | `string` | Application version |
| `enableStorageOptimizer` | `boolean` | If set to true, old files will automatically be deleted |
| `ignoreFileNames` | `boolean` | If set to true, original file names will be ignored. Otherwise, downloaded files will be saved under names as close as possible to the original name |
| `databaseEncryptionKey` | `string` | Encryption key |


### Other options

| Key                | Type                     | Note                                                        |
| ------------------ | ------------------------ | ----------------------------------------------------------- |
| `models` | Function | Contains function, which converts plain JSON objects to models. [Details](https://github.com/airgram/airgram-use-models). |
| `contextFactory` | Function | Function that returns custom middleware context. [Details](#ctx). |

## API reference

This section describes public API of an `Airgram` instance:


| Key                | Type                     | Note                                                        |
| ------------------ | ------------------------ | ----------------------------------------------------------- |
| `api` | Object | Contains wrappers for all [TDLib methods](https://github.com/airgram/airgram-api/blob/master/docs/td-methods.md). |
| `config` | Object | Airgram configuration. Readonly. |
| `catch` | `(handler) => void` | Overrides default error handler. Argument `handler` takes a function: `(error: Error, ctx?: Record<string, any>) => void`  |
| `provider.pause` | `() => void` | Stop getting responses and updates from TDLib |
| `provider.resume` | `() => void` | Continue getting responses and updates from TDLib |
| `provider.destroy` | `() => void` | Destroy `Airgram` and TDLib instances |


## Authorization
### As a bot

Just specify a secret token by `Auth` constructor:

```typescript
import { Airgram, Auth } from 'airgram'

const airgram = new Airgram(/* options */)

new Auth(airgram, {
  token: 'xxx'
})
```

### As a user
Airgram provides component `Auth`, which implements basic logic for authorization or registration new Telegram accounts. User just needs to specify the phone number, secret code and some other data, if necessary.

```typescript
import { Airgram, Auth } from 'airgram'

const airgram = new Airgram()
const auth = new Auth(airgram)

auth.use({
  phoneNumber: '+1234567890',
  firstName: 'John',
  lastName: 'Smith'
})
```

Method `auth.use()` takes config:
```typescript
type AuthAnswer = string | (() => string) | (() => Promise<string>)

interface AuthDialog {
  code?: AuthAnswer
  firstName?: AuthAnswer
  lastName?: AuthAnswer,
  phoneNumber?: AuthAnswer
  password?: AuthAnswer
}
```

You can use helper `prompt` to communicate with user by the command line:

```typescript
import { prompt } from 'airgram'

auth.use({
  code: () => prompt(`Please enter the secret code:\n`),
  phoneNumber: () => prompt(`Please enter your phone number:\n`)
})
```

#### Authorization callback

If you want to ensure the code will execute only after successful authorization, you can use `auth.ready()` method:

```typescript
auth.ready().then(() => {
  console.log('Success!')
})

// or pass callback
auth.ready(() => {
  console.log('Success!')
})
```

## Middleware

Middleware is a chain of callback functions, which are called before a request is send to TDLib. Middleware allows you modify requests and responses to add some additional logic. Middlewares also are using to handle updates.

This is a scaffolding for middleware function:

```typescript
import { UPDATE } from '@airgram/api'

airgram.use((ctx, next) => {
  
  // Add some code here
  
  return next()
})

// You can pass an array of predicates: `['updateNewChat', 'updateSupergroup']`
airgram.on(UPDATE.updateNewChat, (ctx, next) => {
  
  // Add some code here
  
  return next()
})
```

**Tip:** in the example above we took predicate's value from the `UPDATE` directory instead of using string value `updateNewChat`, because this way protects us from typos and we can use IDE autocomplete.

Function takes 2 arguments: `ctx` and `next`.

### `ctx`

Argument `ctx` contains an object with the following structure:

| Key                | Type                     | Note                                                        |
| ------------------ | ------------------------ | ----------------------------------------------------------- |
| `_`                | `string`               | Request (or update) type.                                           |
| `airgram`           | `Airgram`             | Instance of `Airgram`.                              |
| `getState`            | `() => Object` | Returns current state. |
| `setState`            | Function | A function that takes either a new state object, or a function which receives the previous state and returns a new one. It behaves similarly to `setState` from React. |              |
| `request`          |  `{ method: string, params: Object }`                 | Object which contains method and parameters of the request. Value will be `undefined` for updates. |
| `response`          |  Object                 | Object which contains response data from TDLib. Field will be `undefined` if the request has not handled. |
| `update`          |  Object                 | This field is available only for updates. |

You can extend default context by define `contextFactory`: 

```typescript
import { Airgram, createContext, User } from 'airgram'
import { UPDATE } from '@airgram/api'

interface Context extends Airgram.Context {
  getUser (id: number): User | void
  setUser (id: number, user: User): void
}

const userMap: Map<number, User> = new Map()

const contextFactory: Airgram.ContextFactory = () => {
  return (options: Airgram.ContextOptions): Context => ({
    ...createContext(options),
    getUser (id: number): User | void {
      return userMap.get(id)
    },
    setUser (id: number, user: User): void {
      userMap.set(id, user)
    }
  })
}

const airgram = new Airgram<Context>({
  contextFactory
})

airgram.updates.on(UPDATE.updateUser, ({ setUser, update }, next) => {
  setUser(update.user.id, update.user)
  return next()
})

airgram.updates.on(UPDATE.updateNewMessage, async ({ getUser, update }) => {
  const user = getUser(update.message.senderUserId)

  if (!user) {
    throw new Error('Unknown user')
  }

  console.log(`${user.username}: ${JSON.stringify(update.message)}`)
})
``` 

Since middlewares are meant to be composed, they need an easy way to send metadata about the request down the chain of middleware. To accomplish this, each middleware context has a state object. The state is read by using `ctx.getState()` and written using `ctx.setState(newState)` or `ctx.setState((prevState) => newState)`. The API of `setState` is meant to be similar to React's one. For example:

```typescript
airgram.use(({ setState }, next) => {
  setState({ foo: 'bar' })
  return next()
})

airgram.use(async ({ getState }) => {
  console.log(`foo = ${getState().foo}`);
  // output: foo = bar
})
```

Each state can be set by the last argument of the request:

```typescript

// We can set starting state by the last argument
airgram.api.getChats({limit: 10}, {log: true})

airgram.on('getChats', async ({ _, getState }, next) => {
  if(!getState().log) {
    return next()
  }
  const start = new Date()
  await next()
  const time = new Date() - start;
  console.log(`Request "${_}" took ${time} to complete.`);
})
```

### `next`

The second argument `next` is a function which runs the next handler. 

Function `next()` returns a promise `Promise<any>`, so we can use the next handlers result inside of our middleware:

```typescript
airgram.use(async (ctx, next) => {
  const start = new Date()
  const { request } = ctx
  const result = await next()
  console.log(`Method: ${request.method}, params: ${JSON.stringify(request.params)}, result: ${JSON.stringify(result)}, ${new Date() - start}ms`)
})
```

### Class as a middleware

Sometimes middleware may be pretty complicated or you want to reuse the code. In this case the most suitable way is to create new class (or use existing) and pass it to `use()` or `on()` methods.

Your class must have a `middleware()` factory method:

```typescript
class MiddlewareClass {
  handle(ctx) {
    // do some work
  }
  
  middleware() {
    return (ctx, next) => {
      this.handle(ctx)
      return next()
    }
  }
}

airgram.use(new MiddlewareClass())
```

All methods describes [here](/docs/telegram-methods.md).

## Getting updates

Use methods `airgram.updates.use()` and `airgram.updates.on()` to handle updates. It works almost the same as `airgram.use()` and `airgram.on()`, but there are two differences:

1. By using `airgram.updates.use()` and `airgram.updates.on()` methods, callbacks won't be called for requests;
2. Improved typings for updates.

## License

The source code is licensed under GPL v3. License is available [here](/LICENSE).
