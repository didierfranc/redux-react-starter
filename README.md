[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

### [Live](https://react.didierfranc.com/)

# redux-react-starter

This repository contains the minimal app to get started with `redux`, `react`, `hot-reloading`, `async function` and some other great stuffs.

## How to

[yarn](https://github.com/yarnpkg/yarn) 0.18+ must be present on your machine.

### Start

Run webpack-dev-server, get ready to code with hot reloading
```
yarn start
```

## Share

Share your localhost running app to anyone with an internet connection
```
yarn ngrok
```

### Build

Bundle your app. It will create `index.html`, `main.[hash].js`, `vendor.[hash].js` and `manifest.[hash].js`
```
yarn build
```

### Run your build
```
yarn prod
```

### Deploy

#### [Surge.sh](http://surge.sh)
```
surge ./dist -d subdomain.surge.sh
```

#### [Github Pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)
```
mv dist docs
git push upstream master
```

Then go to your repository, Settings -> Options -> Github Pages and select /docs folder

## What's inside ?

👉 [package.json](https://github.com/didierfranc/redux-react-starter/blob/master/package.json)

## Tools

If you have not already done so, move to **Chrome** and install [react-developer-tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) & [redux-devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

## Create-React-App

If you don't care about the process or you don't want to play with your config try [create-react-app](https://github.com/facebookincubator/create-react-app)

<img src="https://raw.githubusercontent.com/didierfranc/donate/master/qr.png" width="100" height="100">

