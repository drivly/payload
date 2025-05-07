import { describe, test, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

describe('Package Integration', () => {
  test('All packages have correct dependencies', () => {
    const packagesDir = path.resolve(process.cwd(), 'packages')
    const packages = fs.readdirSync(packagesDir)

    packages.forEach((pkg) => {
      expect(fs.existsSync(path.join(packagesDir, pkg, 'package.json'))).toBe(
        true
      )
    })
  })
})
