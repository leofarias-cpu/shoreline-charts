# RFC Base collapsible component

- Start Date: 2020-08-31
- PR: (leave this empty)
- Issue: (leave this empty)

# Summary

A `Collapsible` is a container that allows toggling the display of content. It
can be nested as well.

# Basic example

```jsx
import { Collapsible, useCollapsible } from '@vtex-component/collapsible'

const collapsibleState = useCollapsible({ visible: true })

<Collapsible {...collapsibleState}>
  <Collapsible.Header disclosureIcon={<Arrow />}>
    Header
  </Collapsible.Header>
  <Collapsible.Content>
    Content
  </Collapsible.Content>
</Collapsible>

<Footer>
<Links>
...
</Links>
<ExtraLinks>
  <SocialMedias>
  <CopyWrite>
</ExtraLinks>
</Footer>
```

# Detailed design

The Collapsible has two composites: `Header` and `Content`. It states are controlled by a custom hook, `useCollapsible`.

## Header

| prop       | type        | description                    | required |
| --------   | ----------- | -----------------------        | -------- |
| children   | ReactNode   | set of actions                 | 🚫       |
| arrowIcon  | ReactNode   | arrow icon shown in the header | 🚫       |
| sx         | SxStyleProp | Theme-ui style prop            | 🚫       |

## Content

| prop     | type        | description           | required |
| -------- | ----------- | --------------------- | -------- |
| children | ReactNode   | what's beeing toggled | 🚫       |
| sx       | SxStyleProp | Theme-ui style prop   | 🚫       |

## useCollapsible

It is extracted directly from `reakit/disclosure` with the same props.
[Read more](https://reakit.io/docs/disclosure/#usedisclosurestate)

## Customizing

```jsx
// theme.ts
const theme: Theme = {
  ...
  components: {
    collapsible: {
      header: {
        ...
      },
      content: {
        ...
      }
    }
  }
  ...
}
```

### Usage

```jsx
const props = useCollapsible({ visible: true })

<Collapsible {...props}>
  {/** Collapsible composites **/}
</Collapsible>
```

# Drawbacks

- The need to import props from the `useCollapsible()` hook every time that `Collapsible` is used, even if the state control is not necessary.

# Alternatives

We've considered the uncontrolled approach, in which the user would only react to the `Collapsible`'s internal changes.

```jsx
<Collapsible visible={/** Inital state **/} onCollapse={/** Do something **/} />
```

The problem with this approach is that the user would not be able to set the internal state of the component without a force update.

# Adoption strategy

- This is a new feature, no breaking changes to any packages in `onda`.
- We must write a migration guide for users coming from `@vtex/styleguide` since this is a breaking change for them.

# Education

- As with any DS component, it must be documented.

# Unresolved questions

- Missing hover state.
- Missing disabled state.
