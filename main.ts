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
    web: {
      type: 'boolean',
      short: 'w',
    },
  },
})

const { values } = args

const { web, zoom } = values

await exec('osascript ./toggle-dnd.applescript')

if (zoom) {
  toggleZoom(zoom)
  await exec(`osascript ./toggle-cursor-size.applescript ${zoom}`)
}

if (web) {
  await exec(`osascript ./chrome.applescript`)
}
