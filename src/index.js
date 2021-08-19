function component () {
  const element = document.createElement('div');

  element.innerHTML = ['Hello', 'webpack', 'genesys-cloud-webrtc-sdk', 'testing'].join(' ');

  return element;
}

document.body.appendChild(component());

import GenesysCloudWebrtcSdk, { SessionTypes } from 'genesys-cloud-webrtc-sdk';

window.sdk = new GenesysCloudWebrtcSdk({
  accessToken: 'INSERT_TOKEN',
  environment: 'inindca.com',
  allowedSessionTypes: [SessionTypes.softphone]
});

sdk.initialize();
