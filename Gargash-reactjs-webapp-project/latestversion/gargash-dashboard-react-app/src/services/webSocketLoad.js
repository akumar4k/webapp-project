import atmosphere from 'atmosphere.js';

var subSocket;
let onDataReceivedCallback = null;

export function subscribeEvent(callback, hash) {
  const wrappedCallback = function (data) {
    callback(data, hash);
  };

  onDataReceivedCallback = wrappedCallback;

  if (hash) {
    subSocket.push(
      JSON.stringify({
        action: 'subscribe',
        hash: hash,
        requests: [
          {
            type: 'state_batch',
            target: {
              type: 'all'
            },
            format: 'compact'
          }
        ]
      })
    );
  }
}

var request = {
  url: 'https://api.us.navixy.com/v2/event/subscription',
  contentType: 'application/json',
  logLevel: 'debug',
  transport: 'websocket',
  trackMessageLength: false,
  reconnectInterval: 500,
  onOpen: function (r) {
    subscribeEvent();
  },
  onReopen: function (r) {
    subscribeEvent();
  },
  onMessage: function (msg) {
    const parsedMessage = JSON.parse(msg.responseBody);
    if (parsedMessage.type === 'event') {
      if (onDataReceivedCallback) {
        onDataReceivedCallback(parsedMessage.data);
      }
    }
  },
  onClientTimeout: function (r) {},
  onTransportFailure: function (errorMsg, request) {},
  onClose: function (r) {},
  onError: function (r) {},
  onReconnect: function (request, response) {}
};

subSocket = atmosphere.subscribe(request);
