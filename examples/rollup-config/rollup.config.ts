import * as path from 'path'
// @ts-ignore
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import copy from 'rollup-plugin-copy'
import resolve from 'rollup-plugin-node-resolve'
import sourceMaps from 'rollup-plugin-sourcemaps'

const extensions = ['.ts', '.js']

export default {
  context: 'window',
  input: `src/App.ts`,
  output: [
    {
      name: 'airgram',
      file: 'dist/bundle.js',
      format: 'iife',
      sourcemap: true
    }
  ],
  external: [],
  watch: {
    include: 'src/**'
  },
  plugins: [
    resolve({ extensions }),
    commonjs({ extensions }),
    babel({ extensions }),
    sourceMaps(),
    copy({
      targets: [
        { src: path.resolve(__dirname, '../../node_modules/tdweb/dist/**/*'), dest: 'dist' },
        { src: 'src/index.html', dest: 'dist' }
      ]
    })
  ]
}
