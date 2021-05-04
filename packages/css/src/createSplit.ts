import { Plugin } from './createPlugin'

export function createSplit(plugins: Plugin[]) {
  const collection = plugins
    .map((p) => p.onSplit)
    .reduce(
      (acc, callbackRule) => ({
        ...acc,
        ...callbackRule(),
      }),
      {}
    ) as Record<string, string[]>

  function split(prop: string, value: any) {
    const entries = collection[prop]

    return entries.reduce(
      (acc, entry) => ({
        ...acc,
        [entry]: value,
      }),
      {}
    )
  }

  return {
    value: collection,
    exec: split,
  }
}
