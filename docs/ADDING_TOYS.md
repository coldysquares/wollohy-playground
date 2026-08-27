# Adding, hiding, and adjusting toys

You should not have to remember the site architecture to curate Playground.

The collection lives in one place: `registry.js`.

## Add a toy

1. Put a self-contained HTML toy in `toys/`, or keep it at a stable `https://` URL.
2. Copy an existing object in `registry.js`.
3. Change the fields below.

```js
{
  id: "new-thing",
  title: "NEW THING",
  kicker: "ONE SHORT CATEGORY",
  description: "One sentence that tells somebody what they get to do.",
  url: "toys/new-thing.html",
  tags: ["game", "generative"],
  accent: "cyan",
  featured: false,
  enabled: true,
  embed: true,
  order: 90
}
```

That is the whole publishing contract.

## Hide something without deleting it

Set:

```js
enabled: false
```

The toy stays in the registry but disappears from the public shell.

## Reorder

Change `order`. Lower numbers appear first.

## Feature

Set:

```js
featured: true
```

Use this sparingly. Featured means "this is one of the reasons Playground exists," not merely "I still like it."

## Embedded stage vs new tab

Use:

```js
embed: true
```

for a self-contained browser toy that behaves correctly in the Playground stage.

Use:

```js
embed: false
```

for a larger app, a site with its own navigation, or anything that behaves badly in an iframe.

## Accent values

The shell currently understands:

- `cyan`
- `magenta`
- `yellow`
- `green`
- `white`

Accent is a signal, not a full reskin. The toy keeps its own visual identity.

## Before enabling a toy

A toy should pass this small bar:

- the premise is understandable in roughly 15 seconds
- the first satisfying interaction happens in roughly 30 seconds
- start/reset/replay behavior is clear when relevant
- mouse/touch behavior is intentional
- important controls are keyboard accessible
- audio does not start before a user gesture
- there is no prototype-only copy explaining implementation details to visitors
- the toy functions without relying on the Playground shell

## Do not edit `index.html` just to add a toy

If adding or removing an object requires changing the shell layout, the registry contract has failed. Fix the infrastructure instead of making a one-off exception.
