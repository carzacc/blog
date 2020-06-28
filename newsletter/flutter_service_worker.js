'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/LICENSE": "0f4487efbb5c74897dcfd5fcc207c0c3",
"index.html": "a0624c0216cc44d72b1e3be8b11cab1f",
"/": "a0624c0216cc44d72b1e3be8b11cab1f",
"main.dart.js": "1757d509db8264fa9c960c0ddb35bbfb",
"main.dart.js.deps": "041b0da08ac15d237cae89ad98ec16b3"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
