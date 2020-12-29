---
path: /layouts/introduction/
---

# Introduction

Our design system comes with a set of layout components to help you build common layouts inside your application. They include the following basic structures:

- `Columns:` represents a basic columned layout. It implements a 12 column flexbox-based, responsive column system.
- `Set:` represents a set of components, that automatically space out the components.

If you find a layout behavior not implemented yet and you think that could be useful to have it in our design system, feel free to create an [issue in our repository](https://github.com/vtex/onda/issues/new/choose). Suggestions are welcome!

## Do's:

Layout components should be used during the following cases:

- ✅ You are building a layout inside your application.

- ✅ You want to add consistency between common layouts.

- ✅ You want to avoid handling layout behavior in atomic components.

```jsx isStatic
// 🚫 Wrong
function Example() {
  return (
    <Box styles={{ display: 'flex', flexDirection: 'column' }}>
      <Button styleOverrides={{ marginBottom: 3 }} />
      <Button styleOverrides={{ marginBottom: 3 }} />
      <Button styleOverrides={{ marginBottom: 3 }} />
      <Button />
    </Box>
  )
}

// ✅ Correct
function Example() {
  return (
    <Set orientation="vertical" spacing={3}>
      <Button />
      <Button />
      <Button />
      <Button />
    </Set>
  )
}
```

## Don'ts:

Layout components should _not_ be used during the following cases:

- 🚫 You are not building a layout inside your application.

- 🚫 You are handling with just one atomic component.

- 🚫 Apply styles of color, border, background, etc. The component should only handle the layout behavior.

```jsx isStatic
// 🚫 Wrong
function Example() {
  return (
    <Columns>
      <Columns.Item>
        <Paragraph>Paragraph</Paragraph>
      </Columns.Item>
    </Columns>
  )
}

// ✅ Correct
function Example() {
  return <Paragraph>Paragraph</Paragraph>
}
```

```jsx isStatic
// 🚫 Wrong
function Example() {
  return (
    <Set
      spacing={2}
      orientation="vertical"
      styleOverrides={{
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: 'default',
        borderColor: 'mid.secondary',
        padding: 6,
      }}
    >
      <Button />
      <Button />
      <Button />
      <Button />
    </Set>
  )
}

// ✅ Correct
function Example() {
  return (
    <Card>
      <Set orientation="vertical" spacing={3}>
        <Button />
        <Button />
        <Button />
        <Button />
      </Set>
    </Card>
  )
}
```
