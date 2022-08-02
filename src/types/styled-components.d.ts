import theme from 'styles/theme'

// inferência de tipos
type teme = typeof theme

declare module 'style-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
