### Install
```
git clone https://github.com/manipvi20/Space-Launch-App.git
cd Space-Launch-App
npm i
```
### Deploying to Heroku:
```
git init
heroku login
heroku create
git add .
git commit -m "initial commit"
git push heroku master
heroku open
```
---

## Original Angular Universal Starter Readme:

> Server-Side Rendering for Angular

A minimal Angular starter for Universal JavaScript using TypeScript and Webpack

---

### Build Time Prerender(prerender) Vs. Server Side Rendering(ssr)
This repo demonstrates the use of 2 different forms of Server Side Rendering.

**Prerender(prerender)**
* Happens at build time
* Renders your application and replaces the dist index.html with a version rendered at the route `/`.

**Server-Side Rendering(ssr)**
* Happens at runtime
* Uses `ngExpressEngine` to render your application on the fly at the requested url.

---

### Installation
* `npm install`

### Development (Client-side only rendering)
* run `npm run start` which will start `ng serve`

### Production (also for testing SSR/Pre-rendering locally)
**`npm run build:ssr && npm run serve:ssr`** - Compiles your application and spins up a Node Express to serve your Universal application on `http://localhost:4000`.

**`npm run build:prerender && npm run serve:prerender`** - Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on `http://localhost:8080`
**Note**: To deploy your static site to a static hosting platform you will have to deploy the `dist/browser` folder, rather than the usual `dist`