// Service Worker for caching static resources
const CACHE_NAME = 'krishanthan-portfolio-v1';
const CACHE_URLS = [
    '/',
    '/style.css',
    '/contactStyle.css',
    '/script.js',
    '/photo1.jpeg',
    '/profile_photo_5.png',
    '/favicon.png'
];

// Install event - cache essential resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('📦 Caching essential resources');
                return cache.addAll(CACHE_URLS);
            })
            .catch(err => console.log('❌ Cache install failed:', err))
    );
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('🗑️ Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;
    
    // Skip external domains for CDN resources (let them load normally)
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version if available
                if (response) {
                    return response;
                }
                
                // Fetch from network and cache for future use
                return fetch(event.request)
                    .then(response => {
                        // Don't cache if not a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return response;
                    })
                    .catch(err => {
                        console.log('❌ Fetch failed:', err);
                        // Return a fallback for navigation requests
                        if (event.request.destination === 'document') {
                            return caches.match('/');
                        }
                    });
            })
    );
});