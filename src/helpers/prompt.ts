import * as readline from 'readline'

export function prompt (question: string): Promise<string> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    rl.question(`${question}\n`, (answer) => {
      rl.close()
      resolve(answer)
    })
  })
}
