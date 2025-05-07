// storage-adapter-import-placeholder
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Types } from './collections/Types'
import { Nodes } from './collections/Nodes'
import { Edges } from './collections/Edges'
import { Users } from './collections/Users'

// const filename = fileURLToPath(import.meta.url)
// const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    // importMap: {
    //   baseDir: path.resolve(dirname),
    // },
  },
  collections: [Types, Nodes, Edges, Users],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: 'payload.types.ts',
  },
  db: vercelPostgresAdapter() as any,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
