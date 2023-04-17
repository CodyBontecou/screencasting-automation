import fs from 'fs'
import path from 'path'

const __dirname = path.resolve()

const filePath = path.join(
  __dirname,
  '..',
  '..',
  'Library',
  'Application Support',
  'Code',
  'User',
  'settings.json'
)
const encoding = 'utf8'
const smallZoom = 2
const largeZoom = 5

try {
  const text = fs.readFileSync(filePath, encoding)
  const obj = JSON.parse(text)

  obj['window.zoomLevel'] =
    obj['window.zoomLevel'] === largeZoom ? smallZoom : largeZoom

  fs.writeFileSync(filePath, JSON.stringify(obj), encoding)
} catch (error) {
  console.error(`An error occurred: ${error}`)
}
