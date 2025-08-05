Absolutely, Nigel — you can totally set up these Docker commands in your `npm` workflow using custom scripts inside your `package.json`. This makes rebuilding and sharing smoother, especially if you're already using Node.js for your project. Here's how you can set it up:

---

### 📁 Step 1: Add Scripts to `package.json`

Open your `package.json` and add these under the `scripts` section:

```json
"scripts": {
  "docker:build": "docker build -t quiz-app .",
  "docker:build:v2": "docker build -t quiz-app:v2 .",
  "docker:save": "docker save -o quiz-app.tar quiz-app",
  "docker:save:v2": "docker save -o quiz-app-v2.tar quiz-app:v2",
  "docker:push:v2": "docker push yourusername/quiz-app:v2"
}
```

> Replace `yourusername` with your Docker Hub username.

---

### 🚀 Step 2: Run Commands with NPM

Once that’s in place, you can use:

- `npm run docker:build`
- `npm run docker:save`
- `npm run docker:push:v2`

---

### 🎯 Tip: Compose More Complex Tasks

Want to automate multiple steps in one shot? Chain them together like this:

```json
"scripts": {
  "docker:release": "npm run docker:build && npm run docker:save && npm run docker:push:v2"
}
```

Then you just type:

```bash
npm run docker:release
```

and boom 💥—it builds, saves, and pushes in one go.

---

I can help you tailor it even further, like using environment variables or integrating version bumping. Want to level it up with `Makefile`, `shell scripts`, or `npm-run-all` for even more automation? I've got tricks. 😄
