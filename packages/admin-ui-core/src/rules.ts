import { get } from '@vtex/admin-ui-util'

export const rules = {
  // animation
  opacity: 'opacities',
  transition: 'transitions',

  // border
  border: 'border',
  borderTop: 'border',
  borderRight: 'border',
  borderBottom: 'border',
  borderLeft: 'border',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'borderRadius',
  borderTopRightRadius: 'borderRadius',
  borderTopLeftRadius: 'borderRadius',
  borderBottomRightRadius: 'borderRadius',
  borderBottomLeftRadius: 'borderRadius',
  borderTopWidth: 'borderWidths',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightStyle: 'borderStyles',
  borderBlock: 'border',
  borderBlockEnd: 'border',
  borderBlockEndStyle: 'borderStyles',
  borderBlockEndWidth: 'borderWidths',
  borderBlockStart: 'border',
  borderBlockStartStyle: 'borderStyles',
  borderBlockStartWidth: 'borderWidths',
  borderBlockStyle: 'borderStyles',
  borderBlockWidth: 'borderWidths',
  borderEndEndRadius: 'borderRadius',
  borderEndStartRadius: 'borderRadius',
  borderInline: 'border',
  borderInlineEnd: 'border',
  borderInlineEndStyle: 'borderStyles',
  borderInlineEndWidth: 'borderWidths',
  borderInlineStart: 'border',
  borderInlineStartStyle: 'borderStyles',
  borderInlineStartWidth: 'borderWidths',
  borderInlineStyle: 'borderStyles',
  borderInlineWidth: 'borderWidths',
  borderStartEndRadius: 'borderRadius',
  borderStartStartRadius: 'borderRadius',

  // color
  color: 'fg',
  backgroundColor: 'bg',
  background: 'bg',
  borderColor: 'borderColor',
  caretColor: 'colors',
  columnRuleColor: 'colors',
  borderTopColor: 'borderColor',
  borderBottomColor: 'borderColor',
  borderLeftColor: 'borderColor',
  borderRightColor: 'borderColor',
  fill: 'colors',
  stroke: 'colors',
  outlineColor: 'colors',

  // elevation
  boxShadow: 'shadow',
  textShadow: 'shadow',
  zIndex: 'zIndices',

  // size
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  blockSize: 'sizes',
  inlineSize: 'sizes',
  maxBlockSize: 'sizes',
  maxInlineSize: 'sizes',
  minBlockSize: 'sizes',
  minInlineSize: 'sizes',
  size: 'sizes',
  minSize: 'sizes',
  maxSize: 'sizes',
  absoluteSize: 'sizes',

  // space
  margin: 'space',
  padding: 'space',
  marginBlock: 'space',
  marginBlockEnd: 'space',
  marginBlockStart: 'space',
  marginInline: 'space',
  marginInlineEnd: 'space',
  marginInlineStart: 'space',
  paddingBlock: 'space',
  paddingBlockEnd: 'space',
  paddingBlockStart: 'space',
  paddingInline: 'space',
  paddingInlineEnd: 'space',
  paddingInlineStart: 'space',
  scrollPadding: 'space',
  inset: 'space',
  insetBlock: 'space',
  insetBlockEnd: 'space',
  insetBlockStart: 'space',
  insetInline: 'space',
  insetInlineEnd: 'space',
  insetInlineStart: 'space',
  gridGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',

  // hspace
  gridColumnGap: 'hspace',
  marginRight: 'hspace',
  marginLeft: 'hspace',
  marginX: 'hspace',
  paddingRight: 'hspace',
  paddingLeft: 'hspace',
  paddingX: 'hspace',
  scrollPaddingRight: 'hspace',
  scrollPaddingLeft: 'hspace',
  scrollPaddingX: 'hspace',
  right: 'hspace',
  left: 'hspace',

  // vspace
  gridRowGap: 'vspace',
  marginTop: 'vspace',
  marginBottom: 'vspace',
  marginY: 'vspace',
  paddingTop: 'vspace',
  paddingBottom: 'vspace',
  paddingY: 'vspace',
  scrollPaddingTop: 'vspace',
  scrollPaddingBottom: 'vspace',
  scrollPaddingY: 'vspace',
  top: 'vspace',
  bottom: 'vspace',

  // typography
  text: 'text',
}

export function resolveRule(prop: string, theme: any) {
  const ruleId = get(rules, prop)
  const value = get(theme, ruleId, get(theme, prop, {}))

  return value
}
