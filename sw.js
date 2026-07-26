// Ticket To-Do — minimal service worker
// Just enough for the browser to consider this app "installable",
// plus basic offline caching so it still opens without a connection.

const CACHE_NAME = 'ticket-todo-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Network-first for the Gemini API calls (never cache those), cache-first for everything else.
  if (event.request.url.includes('generativelanguage.googleapis.com')) {
    return; // let it go straight to network
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          // Only cache same-origin, successful GET responses
          if (
            event.request.method === 'GET' &&
            response.ok &&
            response.type === 'basic'
          ) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached); // offline fallback (no-op if nothing cached)
    })
  );
});
