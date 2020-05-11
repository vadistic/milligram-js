export const css = (strings: TemplateStringsArray, ...sub: string[]): string => {
  const lastIndex = strings.length - 1

  if (!lastIndex) return strings[0]

  let acc = ''
  let part

  for (let i = 0; i < lastIndex; i++) {
    part = strings[i]

    if (part) acc += part

    acc += sub[i]
  }

  part = strings[lastIndex]

  if (part) acc += part

  return acc
}
