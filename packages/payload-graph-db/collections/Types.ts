import type { CollectionConfig } from 'payload'

export const Types: CollectionConfig = {
  slug: 'types',
  fields: [
    { name: 'id', type: 'text', required: true },
    { name: 'schema', type: 'json' },
    { name: 'nodes', type: 'join', collection: 'nodes', on: 'type' },
    { name: 'edges', type: 'join', collection: 'edges', on: 'predicate' },
  ],
}
