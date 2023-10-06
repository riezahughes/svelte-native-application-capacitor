# A simple svelte native application

- Set to build on ios/android using capacitor
- npm i
- npm run cap:deploy
- npx cap run android
- android studio should open and start loadin the project

I had an issue where the naative functiions (the geolocation for example) didn't work in either the emulator or on a device. I also couldn't get hot reloadign to work. Every change meant runniing cap:deploy and resarting the emulator (frustrating). I will look into this at a later date.

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
