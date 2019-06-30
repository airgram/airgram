// tslint:disable:object-literal-sort-keys

import * as readline from 'readline'

export interface PromptDeferred {
  resolve: (value: any) => void,
  reject: (error: Error) => void,
}

export function prompt (question: string, fn?: (deferred: PromptDeferred) => void): Promise<string> {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    rl.question(`${question}\n`, (value) => {
      rl.close()
      resolve(value)
    })
    if (typeof fn === 'function') {
      fn({
        resolve: (value: any) => {
          rl.close()
          resolve(value)
        },
        reject: (error: Error) => {
          rl.close()
          reject(error)
        }
      })
    }
  })
}
