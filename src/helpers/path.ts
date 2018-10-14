import * as requireDir from 'require-directory'

export const collectPaths = (m: typeof module, options: {
  exclude?: RegExp | ((_: any, filename: string) => boolean),
  extensions?: string[],
  rename?: (str: string) => string
} = {}) => {
  return requireDir(m, options)
}
