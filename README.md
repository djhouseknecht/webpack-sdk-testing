# webpack-sdk-testing
This is a testing repo for:
* https://github.com/MyPureCloud/genesys-cloud-webrtc-sdk/issues/576
* https://github.com/MyPureCloud/genesys-cloud-webrtc-sdk/issues/618

## Getting Started
Install deps:

``` sh
npm install
```

Grab an access token and paste it into `src/index.js` where it says _**INSERT_TOKEN**_. Start the app:
``` sh
npm start
```

Wait a few seconds for webpack to build. Then open:

```
http://localhost:8080
```

Open devTools console and check for errors. If v6.1.1 does _not_ fix the barrel export, then you will see errors like: `Cannot read 'softphone' of undefined`