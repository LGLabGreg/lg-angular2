# Angular2 Starter Kit

---

## Setup

### Prerequisites

*   [NodeJS](https://nodejs.org/)
*   [Gulp](gulpjs.com/)
*   [Typings](https://github.com/typings/typings)
*   [Typescript](https://www.typescriptlang.org/)
*   [ts-node](https://github.com/TypeStrong/ts-node)

### Installation

[Download the latest release][latest_release] of this project or Git clone this
repository to your local machine with:

```sh
git clone https://github.com/LGLabGreg/lg-angular2.git
```

Navigate to your `lg-angular2` directory,

Then install all the dependencies with:

```sh
npm install
```

`node_modules` and `typings` directories should be created during the install.

## Development

```sh
npm start
```
App will be compiled in build folder with browsersynch serving the app. App will be watched for changed and recompiled.

## Production

```sh
gulp dist && node server.js
```
App will be compiled/bundled/minified for production in dist folder and server started in port 8080
