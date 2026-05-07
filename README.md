# Marcus Yau Portfolio
My <a href="https://marcus-y.github.io/portfolio/">personal site</a> to showcase projects.

## Stack Used
<ul>
  <li>React + Vite</li>
  <li>TailwindCSS</li>
  <li>DaisyUI</li>
</ul>

## Future Plans
* Create individual showcases for each projects.
* Add more details
* Create a backend to interact with my Personal Job Tracker.

# 📝 Documentations for others to use
In case if anyone wants to build their own React + Vite or ran into the same problems I had.

## 👟 Setup Steps to get a working React + Vite on GitHub Pages

### 1️⃣ Step 1: Build and Deploy your Project
You need the `gh-pages` package to help with your deployment.
```bash
npm install gh-pages --save-dev
```
Go to your `package.json` and add this to the scripts:
```JSON
"scripts": {
  "homepage": "https:/<github-username>.github.io/<your-github-repo-name>/",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
<em>**Note that I am using React + Vite so deploy might differ from ReactJS**</em>

If not React + Vite it might look something like this:
```JSON
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
Then go into `vite.config.js` and add `base`
```JS
export default defineConfig({
  plugins: [tailwindcss(),react()],
  base: "/<your-github-repo-name>/",
})
```

### 2️⃣ Step 2: Commit and Push
Commit and push your latest save onto your main branch using which ever git method you want.

### 3️⃣ Step 3: Run the Deployment
```
npm run deploy
```
This will automatically create a new branch caled `gh-pages` on your repo.

### 4️⃣ Step 4: Activate GitHub Pages
Make sure you are running `gh-pages` instead of `main`.

Now wait for GitHub Pages to finish its action and visit your website.

## 🐛 Common React + Vite and GitHub Pages Problems and Solutions
These are some problem I have personally ran into.

### 1. Blank images in `<img>` tag
When you have image tags that link to a local image, it might not show it.

Make sure to create an `/images` folder and move it under the `/public` folder
```
/public
  ->  /images
      ->  img1.png
      ->  img2.png
      ->  img3.png
      ->  etc...
```
then you can simply source it:
```HTML
<img src="./images/img1.png" alt='img1'/>
```

### 2. Linking to index.html / landing page
When working in a localhost website, usually your link tags are:
```HTML
<a href="/">Home</>
```
You need to change it to `/<your-github-repo-name>/`, the one in <a href="https://github.com/Marcus-Y/portfolio#1%EF%B8%8F%E2%83%A3-step-1-build-and-deploy-your-project">`Setup Step 1`</a>
```HTML
<a href="/<your-github-repo-name>/">Home</>
```
