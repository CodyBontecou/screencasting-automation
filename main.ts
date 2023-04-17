import { parseArgs, promisify } from 'node:util'
import { exec as e } from 'node:child_process'

const exec = promisify(e)

const args = parseArgs({
  options: {
    name: {
      type: 'string',
      short: 'n',
    },
    zoom: {
      type: 'boolean',
      short: 'v',
    },
  },
})

const { values, positionals } = args
console.log(values, positionals)

if (values.zoom) {
  await exec('npm run vscode-zoom')
  await exec('osascript ./toggle-cursor-size.applescript')
}
