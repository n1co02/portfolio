import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import nextVitals from 'eslint-config-next/core-web-vitals'
import prettier from 'eslint-config-prettier'

const config = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...nextVitals,
  prettier,
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'next-env.d.ts'],
  },
]

export default config
