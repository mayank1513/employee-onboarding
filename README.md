# JsonForms + MaterialUI renderers Demo with React + TypeScript + Vite

> Supports system color-scheme preference. Dark/Light theme is automatically applied.

## JSONForm + MaterialUI

### Pros

- Excellent UI
- Quick to build

### Cons

- Requires patching up for most common need such as not showing error message until touched
- Difficult to get great lighthouse scores as ton of JS runs to render the UI

> Managed to get 99% performance score for Desktop - [Pagespeed Insights](https://pagespeed.web.dev/analysis/https-employee-onboarding-livid-vercel-app/hr80zu0o4p?form_factor=desktop)

# Chore

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
