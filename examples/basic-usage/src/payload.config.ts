import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { buildConfig } from 'payload'

export default buildConfig({
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./payload.db',
    },
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  collections: [],
})
