// eslint.config.js
import reactEslint from "eslint-plugin-react";
import reactDom from "eslint-plugin-react-dom";

export default [
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["dist"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      react: reactEslint,
      "react-dom": reactDom,
    },
    
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": "off",
      "no-unused-vars": "warn",
    },
  },
];
