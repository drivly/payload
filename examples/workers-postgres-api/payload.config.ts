import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { buildConfig } from 'payload'

import { Types } from '@/collections/Types'
import { Nodes } from '@/collections/Nodes'
import { Edges } from '@/collections/Edges'
import { Users } from '@/collections/Users'

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Types, Nodes, Edges, Users],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: 'payload.types.ts',
  },
  db: vercelPostgresAdapter() as any,
})
