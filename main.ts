import { parseArgs } from 'node:util'
import { exec } from 'node:child_process'
import { toggleZoom } from './toggle-vscode-zoom'

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
  exec(`osascript ./toggle-cursor-size.applescript ${zoom}`)
}
