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

#### Dependencies
```
babel-polyfill     6.16.0
react              15.4.1
react-dom          15.4.1
react-redux        5.0.0-rc.1
react-router       4.0.0-alpha.6
redux              3.6.0
redux-thunk        2.1.0
styled-components  1.0.10
```
```
babel-core              6.18.0
babel-eslint            7.0.0
babel-loader            6.2.5
babel-preset-es2015     6.18.0
babel-preset-react      6.18.0
babel-preset-stage-0    6.18.0
eslint                  3.8.1
eslint-config-airbnb    13.0.0
eslint-plugin-babel     4.0.0
eslint-plugin-import    2.2.0
eslint-plugin-jsx-a11y  2.2.3
eslint-plugin-react     6.4.1
html-webpack-plugin     2.24.1
react-hot-loader        3.0.0-beta.6
webpack                 2.1.0-beta.27
webpack-dev-server      2.1.0-beta.12
```

## Tools

If you have not already done so, move to **Chrome** and install [react-developer-tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) & [redux-devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

## Create-React-App

If you don't care about the process or you don't want to play with your config try [create-react-app](https://github.com/facebookincubator/create-react-app)
