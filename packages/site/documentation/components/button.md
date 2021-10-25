---
path: /button/
---

# Button

Buttons trigger an action or allow the user to advance a state. It renders a `<button>` element by default.

## Usage

```jsx isStatic
import { Button } from '@vtex/admin-ui'

export function Example() {
  return <Button onClick={() => {}}>Admin UI Button</Button>
}
```

## Alternatives

- [ButtonGhost](/button-ghost/) - For complementary, less proeminent, actions.

## Examples

### Tone of voice

The button's [tone of voice](/foundations/colors/#tones) is either `main` (default) or `critical`, and it's adjustable using the `tone` prop.

```jsx
<Set>
  <Button>Main</Button>
  <Button tone="critical">Critical</Button>
</Set>
```

### Variant

The variant defines the appearance and emphasis of the button.

- Text (low emphasis): Typically used for less important actions.
- Soft (medium emphasis): Used for more emphasis than text buttons.
- Solid (high emphasis): Have the highest emphasis, as they use a color fill and shadow. Used for primary actions.

```jsx
<Set orientation="vertical">
  <Set>
    <Button variant="text">Main Text</Button>
    <Button variant="soft">Main Soft</Button>
    <Button>Main Solid</Button>
  </Set>
  <Set>
    <Button tone="critical" variant="text">
      Critical Text
    </Button>
    <Button tone="critical" variant="soft">
      Critical Soft
    </Button>
    <Button tone="critical">Critical Solid</Button>
  </Set>
</Set>
```

### Size

The button comes in two sizes: `regular` (default) and `small`.

```jsx
<Set>
  <Button>Regular Button</Button>
  <Button size="small">Small Button</Button>
</Set>
```

### With Icon

Buttons may include an icon before or after the text or even be icon only.

#### Icon before

Display an icon before the text.

```jsx
<Button icon={<IconFavorite />}>Icon start</Button>
```

#### Icon after

Display an icon after the text.

```jsx
<Button icon={<IconFavorite />} iconPosition="end">
  Icon start
</Button>
```

#### Icon Only

Display only an Icon.

```jsx
<Button icon={<IconFavorite title="Favorite" />} aria-label="Favorite button" />
```

### State

#### Disabled

Set `disabled` to disable a button that isn’t usable.

```jsx
function Example() {
  return (
    <Set>
      <Button disabled>Disabled</Button>
      <Button variant="soft" disabled>
        Disabled
      </Button>
      <Button variant="text" disabled>
        Disabled
      </Button>
    </Set>
  )
}
```

#### Loading

Set `loading` to indicate the button is loading.

```jsx
function Example() {
  const [loading, setLoading] = React.useState(true)

  return (
    <Set>
      <Button
        loading={loading}
        variant="text"
        onClick={() => setLoading(!loading)}
      >
        Loading
      </Button>
      <Button
        loading={loading}
        variant="soft"
        onClick={() => setLoading(!loading)}
      >
        Loading
      </Button>
      <Button loading={loading} onClick={() => setLoading(!loading)}>
        Loading
      </Button>
    </Set>
  )
}
```

## Accessibility

- `Button` has role `button`.
- When `Button` has focus, <kbd>Space</kbd> and <kbd>Enter</kbd> triggers it.
- If `disabled` prop is `true`, `Button` has `disabled` and `aria-disabled` attributes set to `true`.

### Best Practices

- When using an Icon only button, you must set the `aria-label` property.

```jsx isStatic
function Example() {
  return (
    <Button
      icon={<IconFavorite title="Favorite" />}
      aria-label="Favorite button"
    />
  )
}
```

## Props

All props of `button` JSX element.

| Name         | Type                | Description                               | Required | Default   |
| ------------ | ------------------- | ----------------------------------------- | -------- | --------- |
| size         | `regular, small`    | Size of the button                        | 🚫       | `regular` |
| tone         | `main, small`       | Tone of voice                             | 🚫       | `main`    |
| variant      | `solid, soft, text` | Button variant                            | 🚫       | `solid`   |
| icon         | `ReactNode`         | Icon of the button                        | 🚫       | -         |
| iconPosition | `start, end`        | Position of the icon                      | 🚫       | `start`   |
| disabled     | `boolean`           | Defines if the Button is disabled         | 🚫       | `false`   |
| loading      | `boolean`           | Defines if the Button is in loading state | 🚫       | `false`   |
| focusable    | `boolean`           | Defines if the Button is focusable        | 🚫       | -         |
| children     | `ReactNode`         | Button children                           | 🚫       | -         |
| csx          | `StyleProp`         | Defines component styles                  | 🚫       | `{}`      |
