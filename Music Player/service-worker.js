const CACHE_NAME = 'music-player-v1';
const urlsToCache = [
  '/',
  '/index.html',
//   '/css/style.css',
//   '/js/main.js',
//   '/js/components/player.js',
//   '/assets/images/T.svg'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});


