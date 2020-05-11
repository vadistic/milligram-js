export const normaliseStyles = (styles: Record<string, string>, blacklist: string[] = []) => {
  const res: Record<string, string> = {}

  Object.entries(styles).forEach(([key, val]) => {
    if (typeof val === 'string' && !blacklist.includes(key)) {
      res[key] = val
        // precision
        .replace(/(?<=^|\s+)0(px|em|rem)/g, '0')
        // trailing zeros
        .replace(/(?<=[0-9])\.0+(?![0-9])/g, '')
        // leading zeros
        .replace(/(?<=(^|\s)-?)\.(?=[0-9]+)/g, '0.')
    }
  })

  return res
}
