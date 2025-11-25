// eslint.config.js
import react from 'eslint-plugin-react';
import reactDom from 'eslint-plugin-react-dom';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from "vite-plugin-babel";
import { reactRouter } from "@react-router/dev/vite";

const ReactCompilerConfig = { /* ... */ }
export default [
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['dist'], // ignore le dossier de build
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
       plugins: [
    reactRouter(),
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        presets: ["@babel/preset-typescript"], // if you use TypeScript
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }),
  ],

    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    settings: {
      react: {
        version: 'detect', // détecte automatiquement la version de React
      },
    },
    rules: {
      'react/prop-types': 'off', // désactive si tu n’utilises pas PropTypes
      'no-unused-vars': 'warn',
      'react/jsx-uses-react': 'off', // inutile avec React 17+
      'react/react-in-jsx-scope': 'off', // inutile avec React 17+
    },
  },
];
