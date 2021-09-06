/* globals chrome */
'use strict';

var background = {
  send: function (id, data) {
    id += '@account';
    chrome.runtime.sendMessage({method: id, data: data});
  },
  receive: function (id, callback) {
    id += '@account';
    chrome.runtime.onMessage.addListener(function (request, sender) {
      if (request.method === id && (!sender.url || sender.url.indexOf('background') !== -1)) {
        callback(request.data);
      }
    });
  }
};
