export type DatabaseType = 'mongodb' | 'postgres' | 'sqlite'

/**
 * Detects the database type from a connection URI
 * @param uri Database connection URI
 * @returns Detected database type, defaults to sqlite if not recognized
 */
export function detectDatabaseType(uri?: string): DatabaseType {
  if (!uri) return 'sqlite'
  
  if (uri.startsWith('mongodb://') || uri.startsWith('mongodb+srv://')) {
    return 'mongodb'
  }
  
  if (uri.startsWith('postgres://') || uri.startsWith('postgresql://')) {
    return 'postgres'
  }
  
  return 'sqlite' // Default fallback
}

export interface DatabaseAdapterOptions {
  uri?: string
  overrideType?: DatabaseType
}

/**
 * Configures the appropriate database adapter based on the connection URI
 * @param options Configuration options
 * @returns Promise resolving to the configured database adapter
 */
export async function configureDatabaseAdapter(options: DatabaseAdapterOptions = {}) {
  const { uri = process.env.DATABASE_URI, overrideType } = options
  
  const dbType = overrideType || detectDatabaseType(uri)
  
  try {
    switch (dbType) {
      case 'mongodb':
        return {
          type: 'mongodb',
          config: {
            url: uri || ''
          }
        }
      case 'postgres':
        return {
          type: 'postgres',
          config: {
            pool: { connectionString: uri || '' }
          }
        }
      case 'sqlite':
      default:
        return {
          type: 'sqlite',
          config: {
            client: { url: uri || '' }
          }
        }
    }
  } catch (error: unknown) {
    console.error(`Error configuring database adapter: ${error instanceof Error ? error.message : String(error)}`)
    return {
      type: 'sqlite',
      config: {
        client: { url: uri || '' }
      }
    }
  }
}
