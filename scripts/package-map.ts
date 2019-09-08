import fg from 'fast-glob'
import fs from 'fs'
import { dirname, resolve } from 'path'

async function run (): Promise<void> {
  process.chdir(resolve(__dirname, '..'))
  const entries: string[] = await fg(['packages/*/package.json'])
  const map = entries.reduce<Record<string, any>>((obj, filename: string) => {
    const { name, version } = JSON.parse(fs.readFileSync(filename, { encoding: 'utf-8' }))
    return Object.assign(obj, {
      [name]: {
        version,
        path: dirname(filename)
      }
    })
  }, {})
  fs.writeFileSync('package-map.json', JSON.stringify(map))

  console.info('Package map:')
  console.info(map)
}

run().catch(console.error)
