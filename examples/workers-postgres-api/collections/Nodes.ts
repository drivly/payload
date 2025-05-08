import type { CollectionConfig } from 'payload'

export const Nodes: CollectionConfig = {
  slug: 'nodes',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text' },
    { name: 'data', type: 'json' },
    { name: 'content', type: 'code', admin: { language: 'mdx' } },
    { name: 'type', type: 'relationship', relationTo: 'types' },
    { name: 'from', type: 'join', collection: 'edges', on: 'from' },
    { name: 'to', type: 'join', collection: 'edges', on: 'to' },
  ],
}
