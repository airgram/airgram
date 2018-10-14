# Airgram

Modern Telegram client framework for TypeScript/JavaScript.

- Strictly typed;
- Described all the Telegram API methods;
- Max flexible;
- Built on middleware;
- Authorization helper;
- Getting updates;

## Documentation
- [Installation](#installation)
- [Getting started](#getting-started)
- [Authorization](#authorization)
- [Requests](#requests)
- [Getting updates](#getting-updates)
- [Data store](#data-store)
- [Middleware](#middleware)
- [Logging](#logging)
- [Components](#components)

## API reference
- [Telegram methods](/docs/telegram-methods.md)
- [Telegram types](/docs/telegram-types.md)
- [Airgram types](/docs/airgram-types.md)

## Installation
```bash
# npm
npm install airgram
```
```bash
# yarn
yarn add airgram
```

## Getting started

**Note:** all examples created with TypeScript but you may use JavaScript. Please check out [airgram-js-example](https://github.com/airgram/airgram-js-example).

A simple example of how to use Airgram:

```typescript
import { Airgram, AuthDialog } from 'airgram'
import * as readline from 'readline'

// JavaScript import:
// const { Airgram, AuthDialog } = require('airgram')
// const readline = require('readline')

function prompt (request: string): Promise<string> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    rl.question(`${request}:\n`, (response) => {
      rl.close()
      resolve(response)
    })
  })
}

// Obtain app id and hash here: https://my.telegram.org/apps
const app = {
  id: process.env.APP_ID,
  hash: process.env.APP_HASH
}

const airgram = new Airgram(app)

// Authorization
const { auth } = airgram

airgram.use(auth)

auth.use(new AuthDialog({
  phoneNumber: process.env.PHONE_NUMBER, // your phone number
  code: () => prompt(`Please enter the secret code:\n`)
}))

// Updates
const { updates } = airgram

airgram.use(updates)

// Get all updates
updates.use((ctx, next) => {
  console.log(ctx.update)
  return next()
})

// Get only new message updates
updates.on('updateNewMessage', (ctx, next) => {
  console.log('New message:', ctx.update)
  return next()
})

updates.startPolling().then(() => {
  console.log('Long polling started')
}).catch((error) => {
  console.error(error)
})

// Get dialogs list
airgram.client.messages.getDialogs({
  flags: 0,
  limit: 30,
  offset_date: 0,
  offset_id: 0,
  offset_peer: {_: 'inputPeerEmpty'},
}).then((dialogs) => {
  console.info(dialogs)
}).catch((error) => {
  console.error(error)
})

```

## Authorization
Airgram provides component `Auth`, which implements basic logic for authorization or registration a new Telegram account. User just needs to specify the phone number, secret code and some other necessary information.

```typescript
import Airgram, { AuthDialog } from 'airgram'

const airgram = new Airgram({ id: process.env.APP_ID, hash: process.env.APP_HASH })

const { auth } = airgram

// We extend middleware`s state to pass information to Airgram
auth.use((ctx: { _: string, state: { [key: string]: string } }, next: () => Promise<any>) => {
  Object.assign(ctx.state, {
    firstName: 'John',
    lastName: 'Smith',
    phoneNumber: '649965043265'
  })
  return next()
})

// Also you can use method `on` to call a callback only for given type of the requests
auth.on('code', async ({ state }, next) => {
  state.code = await getSecretCodeFromSomewhere()
  return next()
})
```

In the example above you have to implement `getSecretCodeFromSomewhere()` function by yourself. That function returns `Promise<string>`, where `string` is a secret code received from Telegram.


You can use helper `prompt` to communicate with user by the command line:

```typescript
import { prompt } from 'airgram/helpers'

// ...

auth.on('code', async ({ state }, next) => {
  state.code = await prompt('Please input the secret code:')
  return next()
})
```

Component `AuthDialog` implements authorization middleware and provides more intuitive interface:

```typescript
import { Airgram,  AuthDialog } from 'airgram'
import { prompt } from 'airgram/helpers'

const airgram = new Airgram({ id: process.env.APP_ID, hash: process.env.APP_HASH })

const { auth } = airgram

// Register authorization component
airgram.use(auth)

// Register middleware to receive data from user
auth.use(new AuthDialog({
  firstName: 'John',
  lastName: 'Smith',
  phoneNumber: process.env.PHONE_NUMBER || prompt('Please input your phone number:'),
  code: async () => prompt('Please input the secret code:'),
  samePhoneNumber: ({ phoneNumber }) => prompt(`Do you want to sign in with the "${phoneNumber}" phone number? Y/N`),
  continue: ({ phoneNumber }) => prompt(`Last authorization with the "${phoneNumber}" phone number has broken. If you have the secret code and wish to continue, input "Yes". Y/N`)
}))
```

Config that passed to `AuthDialog` constructor has the following properties:

| Key                | Note                                                         |
| ------------------ | ------------------------------------------------------------ |
| `firstName`        | Only for registration                                        |
| `lastName`         | Only for registration                                        |
| `phoneNumber`      | Only digits                                                  |
| `code`             | The secret code received from Telegram                    |
| `continue`         | Do not start login with zero if the secret code has already been sent |
| `samePhoneNumber`  | Whether to use previous phone number or input the new one |
 
Each property value has a type: `((state: Partial<Answers>) => Promise<string>) | string | undefined`. 
Default value: `undefined`.

## Requests

All Telegram API methods are described and have suitable methods in Airgram.

- [`Account`](/docs/telegram-methods.md#account)
- [`Auth`](/docs/telegram-methods.md#auth)
- [`Bots`](/docs/telegram-methods.md#bots)
- [`Channels`](/docs/telegram-methods.md#channels)
- [`Contacts`](/docs/telegram-methods.md#contacts)
- [`Help`](/docs/telegram-methods.md#help)
- [`Langpack`](/docs/telegram-methods.md#langpack)
- [`Messages`](/docs/telegram-methods.md#messages)
- [`Payments`](/docs/telegram-methods.md#payments)
- [`Phone`](/docs/telegram-methods.md#phone)
- [`Photos`](/docs/telegram-methods.md#photos)
- [`Stickers`](/docs/telegram-methods.md#stickers)
- [`Updates`](/docs/telegram-methods.md#updates)
- [`Upload`](/docs/telegram-methods.md#upload)
- [`Users`](/docs/telegram-methods.md#users)

## Getting updates

For getting updates use the `Updates` component as shown below:

```typescript
import { Airgram, api } from 'airgram'

const airgram = new Airgram(/* config */)

airgram.updates.getDifference().then((difference: api.UpdatesDifferenceUnion) => {
  console.log('difference:', difference)
})
```

**Note:** method `airgram.updates.getDifference()` is the wrapper for the method [`airgram.client.updates.getDifference()`](/docs/telegram-methods.md#updatesgetdifference), which has more complicated interface:

```typescript
interface GetDifferenceParams {
  date: number,
  flags: number,
  pts: number,
  qts: number,
  pts_total_limit?: number
}

// `getUpdatesState()` – it's your own function that returns the current updates state
const { pts, date, qts } = getUpdatesState()

const params: GetDifferenceParams = { pts, date, qts, flags: 0 }

airgram.client.updates.getDifference(params).then((difference) => {
  console.log('difference:', difference)
})
```

### Long polling

In most cases you do not need to call `getDifference()` directly. Airgram supports long polling connection to deliver updates as soon as they come.

Use component `Updates` as middleware to handle incoming updates:  

```typescript
const { updates } = airgram

// Use the `Updates` component as a middleware
airgram.use(updates)

// Start to listen new updates
updates.startPolling()
```

If you need to break long polling connection use method `stop()`:

```typescript
updates.stop()
``` 

Use methods `use()` and `on()` to add your own handlers for updates. Do not forget to call `next()` if you want to run next handlers.

```typescript
  // Get all updates
  updates.use((ctx, next) => {
    console.log(`Update type: ${ctx._}`)
    return next()
  })
  
  // Get only new message updates
  updates.on('updateNewMessage', (ctx, next) => {
    console.log(`New message: ${ctx.update}`)
    return next()
  })
```

#### Argument `ctx`

Argument `ctx` is an object with the following structure:

| Key                | Type     | Note                                                        |
| ------------------ | -------- | ----------------------------------------------------------- |
| `_`                | string   | Updates type                                           |
| `client`           | `Client` | The same as in `airgram.client`                              |
| `state`            | {[key: string]: any} | Just a plain object. You should use it to pass some data between different middleware |
| `update`           | {[key: string]: any} |An object with update data                                   |

#### Containers

Some of the incoming updates have nested structure. Updates of this type are containers for other updates. 

Container usually consists of a list of the chats and users, which are in the children updates. You should save them to your own store.

```typescript
  updates.use(({ update }, next) => {
    if ('chats' in update && update.chats.length) {
      // saveChats(update.chats)
    }
    if ('users' in update && update.users.length) {
      // saveUsers(update.users)
    }
    return next()
  })
```

## Data store

Airgram keeps 4 types of data:
- updates state
- chat's updates state
- last login information
- Telegram access keys

By default all information written into a memory store. If you do not want to lose data between sessions you have to use persistent store.  

In the next example we will show how to use PouchDB as a persistent store. Of course, you may easily create a provider for any other database.

**Important:** do not forget to encrypt all secret information. We will skip this part of the code to simplify it.

Airgram store has the following simple interface:

```typescript
export interface Store<DocT extends { [key: string]: any }> {
  create (key: string, value: DocT): Promise<DocT>

  get (key: string): Promise<DocT | null>

  update (key: string, value: Partial<DocT>): Promise<Partial<DocT>>
}
```

Ok, lets implement it for PouchDB:


```typescript
import PouchDB from 'pouchdb'
import UpsertPlugin from 'pouchdb-upsert'

PouchDB.plugin(UpsertPlugin)

// Here is using pouchdb-server
const db = new PouchDB(`http://127.0.0.1:5984/airgram`)


export default class PouchDBStore {
  public create (id, doc) {
    return db.upsert(id, () => doc).then(() => doc)
  }

  public async get (key) {
    try {
      return await db.get(key)
    } catch (e) {
      return null
    }
  }

  public async update (id, doc) {
    let nextDoc
    return db.upsert(id, (currentDoc) => {
      nextDoc = Object.assign({}, currentDoc, doc)
      return nextDoc
    }).then(() => nextDoc)
  }
}
```

When the store component is created we can mount it to Airgram: 

```typescript
import { Airgram, TYPES } from 'airgram'

const airgram = new Airgram(/* config */)

airgram.bind(TYPES.AuthStore).to(PouchDBStore)
airgram.bind(TYPES.MtpStateStore).to(PouchDBStore)
```

Please follow to the [`example page`](/examples/pouchdb-store/index.ts) to see the source code.

## Middleware

Middleware is a chain of callback functions, which are called before the request is send to Telegram. Middleware allows you modify requests and responses to add some additional handlers.

Inside of the box Airgram provides 2 components you can use as middleware. There are `Auth` and `Updates`.

This is a scaffolding for middleware function:

```typescript
airgram.use((ctx, next) => {
  
  // Add some code here
  
  return next()
})
```

Function takes 2 arguments: `ctx` and `next`.

### `ctx`

Argument `ctx` contains an object with the following structure:

| Key                | Type                     | Note                                                        |
| ------------------ | ------------------------ | ----------------------------------------------------------- |
| `_`                | `string`               | Updates type                                           |
| `client`           | `Client`             | The same as in `airgram.client`                              |
| `state`            | `{ [key: string]: any }` | Just a plain object. You should use it to pass some data between different middleware |
| `handled`          | `boolean`              | Whether the request has already been handled or not                 |
| `request`          |  `{ [key: string]: any }`                 | Telegram request |
| `deferred`         |  `{ resolve: (response: any) => any, reject: (error: Error) => any }` | You may immediately resolve or reject the Telegram request  |


**`ctx.request`**

| Key                | Type                     | Note                                                        |
| ------------------ | ------------------------ | ----------------------------------------------------------- |
| `method`   | `string`             | Request method name                 |
| `params`   | `{[key: string]: any}` | Optional. Request parameters according to the Telegram schema   |
| `options`  | `{[key: string]: any}}` | Optional. Additional options passed to the request                 |

### `next`

The second argument `next` is a callback function which runs the next handler. 

Function `next()` returns a promise `Promise<any>`, so we can use the next handlers result inside of our middleware:

```typescript
airgram.use(async (ctx, next) => {
  const start = new Date()
  const { request } = ctx
  const result = await next()
  console.log(`Method: ${request.method}, params: ${JSON.stringify(request.params)}, result: ${JSON.stringify(result)}, ${new Date() - start}ms`)
})
```

### `use()` vs `on()`

When we set middleware by `use()` method, callback will be called for every request. Method `on()` allows us to mount callback only to some type of requests. 

```typescript
airgram.on('messages.getDialogs', async (ctx, next) => {
  const dialogs = await next()
  updateMyDialogList(dialogs)
})
```

### Class as a middleware

Sometimes middleware may be pretty complicated or you want to reuse the code. In this case the most suitable way is to create new class (or use existing) and pass it to `use()` or `on()` methods.

Your class must have a `middleware()` method which returns a factory:

```typescript
class MyMiddlewareClass {
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

const myMiddleware = new MyMiddlewareClass()

airgram.use(myMiddleware)
```

## Logging

By default, all messages with level `info` and above fall into terminal via default `console` utility. You can change this behavior.

Lets extend the `Logger` component. We will add timestamp label and replace `console` utility to `debug` library:

```typescript
import { Airgram, getCalleeName, Logger, TYPES } from 'airgram'
import * as createLogger from 'debug'
import moment from 'moment'
import { injectable } from 'inversify'

const DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss.SSS'
const writeLog = createLogger('airgram')

@injectable()
class DebugLogger extends Logger {
  protected formatMessage (message, level) {
    const parts = [
      `${name}${' '.repeat(7 - level.name.length)} `,
      `${moment().format(DATETIME_FORMAT)}: `,
      this.namespace.map((v) => `[${v}] `)
    ]
    return `${parts.join('')}${message}`
  }

  protected log (level, message) {
    writeLog(this.formatMessage(message, level))
  }
}

airgram.bind(TYPES.Logger).to(DebugLogger).onActivation((context, logger) => {
  logger.namespace = [getCalleeName(context)] // log will show current component name
  logger.level = 'verbose' 
  return logger
})
``` 

Sure, you may create your own logger class from scratch. You just need to implement the following interface:

```typescript
export interface Logger {
  namespace: string[]
  debug (...args: any[]): void
  verbose (...args: any[]): void
  info (...args: any[]): void
  warn (...args: any[]): void
  error (...args: any[]): void
}
```

## Components

Under the hood Airgram uses inversion of control (IoC) container. It gives max flexibility. You may change or replace any part of framework. 

The most popular cases when you need to inject your own component:
- custom logger (debug, winston and etc)
- persistent store

Please check out [IoC container documentation](https://github.com/inversify/InversifyJS/blob/master/wiki/container_api.md).

```typescript
import { Airgram, ag, DevLogger, TYPES } from 'airgram'

const airgram = new Airgram(/* config */)

airgram.bind<ag.Logger>(TYPES.Logger).to(DevLogger)
```

Airgram container is accessible via `airgram.container` property. 

Since all components are defined during initialization you should use method [`airgram.container.rebind`](https://github.com/inversify/InversifyJS/blob/master/wiki/container_api.md#containerrebindserviceidentifier-serviceidentifier) to avoid an error. There is a shortcut: `airgram.bind`.

All the injectable components are contained in the variable `TYPES`.

The most popular of them:

| Type               | Name                                                         |
| ------------------ | ------------------------------------------------------------ |
| `AuthStore`        | Keeps the condition of whether the user is logged in or not |
| `ChatStore`        | Store that keeps chat's state                                |
| `Client`           | Value of the `airgram.client` property
| `MtpStateStore`    | Store for telegram secret keys |
| `Logger`           | By default the logger use `console` |
| `UpdatesStateStore`| Updates state |
 
## License

The source code is licensed under GPL v3. License is available [here](/LICENSE).