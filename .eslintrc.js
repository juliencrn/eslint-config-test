
module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": 2020,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint",
      "prettier"
    ],
  "plugins": [
      "@typescript-eslint",
      "react",
      "react-hooks",
      "prettier"
  ],
  "env": {
      "browser": true,
      "es6": true,
      "node": true
  },
  "settings": {
      "react": {
          "version": "detect"
        }
  },
  "rules": {
      "prettier/prettier": "error",
      "react/prop-types": 0,
      "import/prefer-default-export": "off",
      "@typescript-eslint/explicit-function-return-type": "off"
  }
}