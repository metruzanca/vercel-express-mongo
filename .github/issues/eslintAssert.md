# Assert Eslint issue

A previous eslint config had an issue with `assert { type: 'json' }`. This is because thats very new syntax and has not been updated in eslint yet. (also because most people use typescript and typescript has `resolveJsonModule`, so adding assert has been a much lower priority)

## The fix

Install these packages
```
npm i -D @babel/eslint-parser @babel/plugin-syntax-import-assertions
```

And replace your `.eslintrc.json` with
```json
{
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "requireConfigFile": false,
    "babelOptions": {
      "plugins": [
        "@babel/plugin-syntax-import-assertions"
      ]
    }
  },
  "env": {
    "node": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "never"]
  }
}
```