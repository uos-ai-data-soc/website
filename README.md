# University of Surrey AI and Data Science Society Website

Built with Astro.js

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.


## How to Contribute

1. **Fork the repository**: Click the "Fork" button at the top right of the repository page.

2. **Clone your fork**: Clone your forked repository to your local machine(git clone <repo-url>).

3. **Install dependencies**: Once you have cloned the repository and opened it in your favourite editor open up a new terminal in the folder and type:

   ```bash
   npm install
   ```
4. **Create a branch**: Create a new branch for your feature or bug fix.

   ```bash
   git checkout -b feature/your-feature-name
   ```
5. **Run the project**:
  ```bash
   npm run dev
   ```
6. **Make changes**: Implement your feature or bug fix.
   
8. **Commit changes**: Commit your changes with a clear and descriptive commit message.

   
   ```bash
   git add <files you have modified>
   ```
   then
   
   ```bash
   git commit -m "Add feature: your feature name"
   ```

10. **Push to your fork**: Push your changes to your forked repository.

   ```bash
   git push origin feature/your-feature-name
   ```

11. **Create a Pull Request**: Go to the original repository and create a pull request from your forked branch.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

