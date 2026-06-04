# Our Story

A personal love story site built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy to GitHub Pages

This project is set up for GitHub Pages at:

`https://YOUR_USERNAME.github.io/our-story/`

### One-time setup

1. Create a GitHub repo named **`our-story`** (must match the `base` path in `vite.config.js`).

2. In your project folder, run:

```bash
cd C:\Users\Kai\Desktop\our-story
git init
git add .
git commit -m "Initial commit: our story site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/our-story.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

3. On GitHub, open the repo → **Settings** → **Pages**:
   - **Source**: GitHub Actions

4. After the workflow runs (about 1–2 minutes), your site will be live at:
   `https://YOUR_USERNAME.github.io/our-story/`

### If you use a different repo name

Edit `base` in `vite.config.js` to match:

```js
base: '/your-repo-name/',
```

Then commit and push again.

### If you want the root URL (`username.github.io` only)

Create a repo named **`YOUR_USERNAME.github.io`**, set `base: '/'` in `vite.config.js`, and push there instead.

## Edit the story

All chapter text is in `src/data/story.js`.
