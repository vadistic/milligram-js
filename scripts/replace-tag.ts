import fs from 'fs'
import path from 'path'

type File = {
  filepath: string
  data: string
}

export const replaceTags = ({ data, filepath }: File) => {
  const next = data.replace(/import { css } from '.*';/, '').replace(/css\s*`/g, '/* css */ `')

  return {
    filepath,
    data: next,
  }
}

const readFile = (filepath: string): File => ({
  filepath,
  data: fs.readFileSync(filepath, 'utf-8'),
})

const writeFile = (file: File) => {
  fs.writeFileSync(file.filepath, file.data, 'utf-8')
  return file
}

const writeFiles = (prev: File[], next: File[]): File[] =>
  next
    .map((nextFile, i) => {
      if (nextFile.data !== prev[i].data) {
        return writeFile(nextFile)
      }

      return undefined
    })
    .filter((f): f is NonNullable<typeof f> => !!f)

const globJsfiles = (dirpath: string): string[] => {
  const dir = fs.readdirSync(dirpath)

  const files = dir
    .filter((name) => name.endsWith('.js'))
    .map((filename) => path.join(dirpath, filename))

  const nested = dir
    .filter((name) => path.extname(name) === '')
    .flatMap((dirname) => globJsfiles(path.join(dirpath, dirname)))

  return [...files, ...nested]
}

const main = () => {
  const dirpath = process.argv[2]

  if (!dirpath) {
    throw Error('missing script dir argument')
  }

  const files = globJsfiles(dirpath).map(readFile)
  const changed = writeFiles(files, files.map(replaceTags))

  console.log(`written ${changed.length} files\n`)

  changed.forEach(({ filepath }) => {
    console.log(filepath)
  })
}

main()
