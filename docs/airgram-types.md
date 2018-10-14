# Airgram reference

- [`Airgram`](#airgram)
- [`Auth`](#auth)
- [`Client`](#client)
- [`Updates`](#updates)
- [Request options](#request-options)

-------------

## Airgram

| Name | Type | Description |
| --- | --- | --- |
| `auth` | [`Auth`](#auth) | Authorization helper |
| `client` | [`Client`](#client) | API client |
| `updates` | [`Updates`](#updates) | Getting updates |
| `bind` | function | Shortcut for [`Client.bind`](#client) |
| `catch` | function |  Shortcut for [`Client.catch`](#client) |
| `on` | function |  Shortcut for [`Client.on`](#client) |
| `use` | function |  Shortcut for [`Client.use`](#client) |

## Auth

| Name | Type | Description |
| --- | --- | --- |
| `client` | [`Client`](#client) | API client |
| `maxAttempts` | `number` | Number of wrong authorizations before throw an exception. Default: 3. |
| `catch` | (handler: (error: `Error`) => `void`): [`Auth`](#auth) | Set authorization error handler |
| `checkCode` | checkCode (code: `string`): Promise<[`AuthAuthorizationUnion`](/docs#authauthorizationunion)> |  Send secret code to Telegram |
| `login` | (): Promise<[`AuthAuthorizationUnion`](/docs#authauthorizationunion)> |  Start authorization |
| `logout` | logout (): Promise<`boolean`> |  Destroy authorization session |
| `on` | (predicate: string, ...fns: Array<(ctx, next) => any>): [`Auth`](#auth) |  Set authorization middleware for the mounted predicate  |
| `use` | (...fns: Array<(ctx, next) => any>): [`Auth`](#auth) | Set authorization middleware |

## Client

| Name | Type | Description |
| --- | --- | --- |
| `me` | {id: number} | User identity |
| `account` | object | See [`Account`](/docs/telegram-methods.md#account) |
| `auth` | object | See [`Auth`](/docs/telegram-methods.md#auth) |
| `bots` | object | See [`Bots`](/docs/telegram-methods.md#bots) |
| `channels` | object | See [`Channels`](/docs/telegram-methods.md#channels) |
| `config` | object | Airgram config |
| `contacts` | object | See [`Contacts`](/docs/telegram-methods.md#contacts) |
| `help` | object | See [`Help`](/docs/telegram-methods.md#help) |
| `langpack` | object | See [`Langpack`](/docs/telegram-methods.md#langpack) |
| `messages` | object | See [`Messages`](/docs/telegram-methods.md#messages) |
| `payments` | object | See [`Payments`](/docs/telegram-methods.md#payments) |
| `phone` | object | See [`Phone`](/docs/telegram-methods.md#phone) |
| `photos` | object | See [`Photos`](/docs/telegram-methods.md#photos) |
| `stickers` | object | See [`Stickers`](/docs/telegram-methods.md#stickers) |
| `updates` | object | See [`Updates`](/docs/telegram-methods.md#updates) |
| `upload` | object | See [`Upload`](/docs/telegram-methods.md#upload) |
| `users` | object | See [`Users`](/docs/telegram-methods.md#users) |
| `catch` | (handler: (error: `Error`) => `void` | Sets a custom error handler |
| `destroy` | (): Promise<`void`> | Destroys a Telegram client and clears memory. |

## Updates

| Name | Type | Description |
| --- | --- | --- |
| `getDifference` | (): Promise<[`UpdatesDifferenceUnion`](/docs/telegram-types.md#updatesdifferenceunion)> | Get updates difference |
| `startPolling` | (): Promise<`any`> | Start getting updates |
| `stop` | (): Promise<`void`> | Stop getting updates |

## Request options

| Name | Type | Description |
| --- | --- | --- |
| `isFileTransfer` | `boolean` | Set `true` when download or upload a file |
| `timeout` | `number` | Max time to wait for the response |
