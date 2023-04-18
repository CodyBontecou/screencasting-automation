import fs from 'fs'
import path from 'path'

export function toggleZoom(zoom: string) {
  try {
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
    const zoomOptions = {
      in: 5,
      out: 2,
    }
    const text = fs.readFileSync(filePath, encoding)
    const obj = JSON.parse(text)

    if (zoomOptions[zoom]) {
      obj['window.zoomLevel'] = zoomOptions[zoom]
    } else {
      throw new Error('zoom parameter has to be either "in" or "out"')
    }

    fs.writeFileSync(filePath, JSON.stringify(obj), encoding)
  } catch (error) {
    console.error(`An error occurred: ${error}`)
  }
}
