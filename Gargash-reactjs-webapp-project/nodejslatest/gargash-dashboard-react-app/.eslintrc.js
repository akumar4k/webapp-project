module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'import', '@typescript-eslint', 'prettier', 'react-refresh'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/no-unescaped-entities': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    // this is for sorting WITHIN an import
    'sort-imports': [
      'warn',
      { ignoreCase: true, ignoreDeclarationSort: true, allowSeparatedGroups: true }
    ],
    // this is for sorting imports
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: 'assets',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: 'components',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: 'pages',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: 'util',
            group: 'internal',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
