module.exports = {
  "env": {
      "es6": true,
      "node": true
  },
  "extends": [
      "plugin:@typescript-eslint/recommended" // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser", // Specifies the ESLint parser
  "parserOptions": {
      "ecmaVersion": 2018, // Allows for the parsing of modern ECMAScript features
      "sourceType": "module" // Allows for the use of imports
  },
  "plugins": [
      "@typescript-eslint"
  ],
  "rules": {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  }
};
