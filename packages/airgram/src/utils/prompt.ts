// tslint:disable:object-literal-sort-keys

import * as readline from 'readline'

export interface PromptDeferred {
  resolve: (value: string) => void
  reject: (error: Error) => void
}

let prev: PromptDeferred | null = null

export function prompt (question: string, fn?: (deferred: PromptDeferred) => void): Promise<string> {
  return new Promise((resolve, reject) => {
    if (prev) {
      prev.reject(new Error('Readline seance has been closed due initialization of the new seance.'))
    }
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    prev = {
      resolve: (value: string) => {
        prev = null
        rl.close()
        resolve(value)
      },
      reject: (error: Error) => {
        prev = null
        rl.close()
        reject(error)
      }
    }
    rl.question(`${question}\n`, (value) => {
      prev = null
      rl.close()
      resolve(value)
    })
    if (typeof fn === 'function') {
      fn(prev)
    }
  })
}
