import type { CollectionConfig } from 'payload'

export const Edges: CollectionConfig = {
  slug: 'edges',
  admin: { useAsTitle: 'predicate' },
  fields: [
    { name: 'predicate', type: 'relationship', relationTo: 'types' },
    { name: 'data', type: 'json' },
    { name: 'content', type: 'code', admin: { language: 'mdx' } },
    { name: 'from', type: 'relationship', relationTo: 'nodes' },
    { name: 'to', type: 'relationship', relationTo: 'nodes' },
  ],
}
