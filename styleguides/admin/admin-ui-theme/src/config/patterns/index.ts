import { border, BorderPattern } from './border'
import { palette, PalettePattern } from './palette'
import { text, TextPattern } from './text'

const patterns = {
  palette,
  text,
  border,
}

export const patternKeys = Object.keys(patterns)

type PatternsProps = BorderPattern & TextPattern & PalettePattern

export { BorderPattern, PalettePattern, TextPattern, PatternsProps }
export default patterns
