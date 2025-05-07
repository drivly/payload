import { buildConfig } from 'payload/config'

export default buildConfig({
  collections: [],
  admin: {
    user: 'users',
  },
  typescript: {
    outputFile: 'payload-types.ts',
  },
})
