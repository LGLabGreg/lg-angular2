# Angular2 Starter Kit (Work in progress..)

### Prerequisites

*   [NodeJS](https://nodejs.org/)
*   [Gulp](gulpjs.com/)
*   [Typings](https://github.com/typings/typings)
*   [Typescript](https://www.typescriptlang.org/)
*   [ts-node](https://github.com/TypeStrong/ts-node)

### Installation

```sh
git clone https://github.com/LGLabGreg/lg-angular2.git
cd lg-angular2
npm install
```

### Development

```sh
npm start
```
App will be compiled in build folder with browsersynch serving the app. App will be watched for changed and recompiled.

### Production

```sh
gulp dist && node server.js
```
App will be compiled/bundled/minified for production in dist folder and server started in port 8080
