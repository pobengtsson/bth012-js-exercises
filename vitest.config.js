import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))
const srcDir = resolve(projectRoot, 'src')

export default defineConfig({
  test: {
    globals: true,
    include: ['tests/**/*.test.js']
  },
  resolve: {
    alias: [
      {
        find: /^exercise_(\d+)$/,
        replacement: resolve(srcDir, 'exercise_$1.js')
      },
      {
        find: 'exercise_functions',
        replacement: resolve(srcDir, 'exercise_functions.js')
      }
    ]
  }
})
