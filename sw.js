const staticCachesName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/javascript/app.js',
    '/style.css',
    '/image.jpg',
    '/icons',
    '/manifest.json',
    'https://use.fontawesome.com/releases/v5.15.3/css/all.css',
]; 


// install service worker
self.addEventListener('install', evnt => {
    // console.log("Service worker was installed!");
    evnt.waitUntil(
        caches.open(staticCachesName).then(caches =>{
            console.log("caching shell assets");
            caches.addAll(assets);
        })
    );
});


self.addEventListener('activate', evnt => {
    // console.log("Service worker was activated!");
});

self.addEventListener('fetch', evnt => {
    // console.log("fetch", evnt);
});
