declare module 'dedent' {
  function dedent(strings: TemplateStringsArray, ...sub: string[]): string

  export = dedent
}
