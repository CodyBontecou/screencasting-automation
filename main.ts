import { parseArgs, promisify } from 'node:util'
import { exec as e } from 'node:child_process'
import { toggleZoom } from './toggle-vscode-zoom'

const exec = promisify(e)

const args = parseArgs({
  options: {
    zoom: {
      type: 'string',
      short: 'z',
    },
  },
})

const { values, positionals } = args

const zoom = values.zoom

if (zoom) {
  toggleZoom(zoom)
  await exec(`osascript ./toggle-cursor-size.applescript ${zoom}`)
}
