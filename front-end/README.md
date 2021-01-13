# Install Tailwind CSS with Create React App - Tailwind CSS

##### Main article link: [https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app)


Start by creating a new Create React App project if you don't have one set up already. The most common approach is to use [Create React App](https://create-react-app.dev/):

```
npx create-react-app my-project
cd my-project
```

Install Tailwind and its peer-dependencies using `npm`:

```
npm install tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

Create React App doesn't support PostCSS 8 yet so you need to install [the Tailwind CSS v2.0 PostCSS 7 compatibility build](https://tailwindcss.com/docs/installation) for now as we've shown above.

Since Create React App doesn't let you override the PostCSS configuration natively, we also need to install [CRACO](https://github.com/gsoft-inc/craco) to be able to configure Tailwind:

```
npm install @craco/craco
```

Once it's installed, update your `scripts` in your `package.json` file to use `craco` instead of `react-scripts` for all scripts except `eject`:

```
 {
    // ...
    "scripts": {
-     "start": "react-scripts start",
-     "build": "react-scripts build",
-     "test": "react-scripts test",
+     "start": "craco start",
+     "build": "craco build",
+     "test": "craco test",
     "eject": "react-scripts eject"
    },
  }
```

Next, create a `craco.config.js` at the root of our project and add the `tailwindcss` and `autoprefixer` as PostCSS plugins:

```
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

If you're planning to use any other PostCSS plugins, you should read our documentation on [using PostCSS as your preprocessor](https://tailwindcss.com/docs/using-with-preprocessors) for more details about the best way to order them alongside Tailwind.

Next, generate your `tailwind.config.js` file:

```
npx tailwindcss init
```

This will create a minimal `tailwind.config.js` file at the root of your project:

```
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

Learn more about configuring Tailwind in the [configuration documentation](https://tailwindcss.com/docs/configuration).

In your `tailwind.config.js` file, configure the `purge` option with the paths to all of your components so Tailwind can tree-shake unused styles in production builds:

```
 // tailwind.config.js
  module.exports = {
-   purge: [],
+   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
```

Read our separate guide on [optimizing for production](https://tailwindcss.com/docs/optimizing-for-production) to learn more about tree-shaking unused styles for best performance.

Open the `./src/index.css` file that Create React App generates for you by default and use the `@tailwind` directive to include Tailwind's `base`, `components`, and `utilities` styles, replacing the original file contents:

```
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind will swap these directives out at build-time with all of the styles it generates based on your configured design system.

Read our documentation on [adding base styles](https://tailwindcss.com/docs/adding-base-styles), [extracting components](https://tailwindcss.com/docs/extracting-components), and [adding new utilities](https://tailwindcss.com/docs/adding-new-utilities) for best practices on extending Tailwind with your own custom CSS.

Finally, ensure your CSS file is being imported in your `./src/index.js` file:

```
 // src/index.js
  import React from 'react';
  import ReactDOM from 'react-dom';
+ import './index.css';
 import App from './App';
  import reportWebVitals from './reportWebVitals';

 ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

 // ...
```

You're finished! Now when you run `npm run start`, Tailwind CSS will be ready to use in your Create React App project.

[Next learn about the utility-first workflow →](https://tailwindcss.com/docs/utility-first)