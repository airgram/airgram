# Airgram for `tdweb`

Use [`tdweb`](https://github.com/tdlib/td/tree/master/example/web/tdweb) on steroids.

## Features

- Strictly typed;
- Documentation out of the box;
- Supports models;
- Built on middleware;

All TDLib classes and methods are described and have suitable wrappers in Airgram. There are only two differences:
- All parameter names are represent in "camelCase".
- Parameter `@type` renamed to `_`.

## Documentation
- [Installation](#installation) 
- [Usage](#usage)
- [Configuration](#configuration)
- [Api reference](#api-reference)
---
Check out `airgram` documentation:
- [Middleware](https://github.com/airgram/airgram#middleware)
- [Getting updates](https://github.com/airgram/airgram#getting-updates)
---
TDLib API reference:
- [TDLib methods](https://github.com/airgram/airgram-api/tree/master/docs/td-methods.md)
- [TDLib input types](https://github.com/airgram/airgram-api/tree/master/docs/td-inputs.md)
- [TDLib output types](https://github.com/airgram/airgram-api/tree/master/docs/td-outputs.md)

## Installation
```bash
npm install tdweb-airgram
```

## Usage
- [Webpack example](https://github.com/airgram/tdweb-airgram/tree/master/examples/webpack-config)
- [Rollup example](https://github.com/airgram/tdweb-airgram/tree/master/examples/rollup-example)

## Configuration

This section describes the options you can pass to `Airgram` constructor:

```typescript
import { Airgram } from 'tdweb-airgram'

const airgram = new Airgram({
  // options
})
```

### TDLib options

| Key                | Type                     | Note                                                        |
| ------------------ | ------------------------ | ----------------------------------------------------------- |
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

### `tdweb` options:

| Key                | Type                     | Note                                                        |
| ------------------ | ------------------------ | ----------------------------------------------------------- |
| `instanceName` | `string` | Name of the TDLib instance. Currently only one instance of TdClient with a given name is allowed. All but one instances with the same name will be automatically closed. Usually, the newest non-background instance is kept alive. Files will be stored in an IndexedDb table with the same name. |
| `isBackground` | `boolean` | Pass true, if the instance is opened from the background. Default: `false` |
| `jsLogVerbosityLevel` | `string` | The initial verbosity level of the JavaScript part of the code (one of 'error', 'warning', 'info', 'log', 'debug'). Default: `info` |
| `logVerbosityLevel` | `number` | The initial verbosity level for the TDLib internal logging (0-1023). Default: 2 |
| `useDatabase` | `boolean` | Pass false to use TDLib without database and secret chats. It will significantly improve loading time, but some functionality will be unavailable. Default: `true` |
| `readOnly` | `boolean` | For debug only. Pass true to open TDLib database in read-only mode. Default: `false` |
| `mode` | `string` | For debug only. The type of the TDLib build to use. 'asmjs' for asm.js and 'wasm' for WebAssembly. If mode == 'auto' WebAbassembly will be used if supported by browser, asm.js otherwise. Default: `auto` |


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

## License

The source code is licensed under GPL v3. License is available [here](/LICENSE).
