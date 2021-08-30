// install service worker
self.addEventListener('install', evnt => {
    console.log("Service worker was installed!");
});


self.addEventListener('activate', evnt => {
    console.log("Service worker was activated!");
});

self.addEventListener('fetch', evnt => {
    console.log("fetch", evnt);
});
