// install service worker
self.addEventListener('install', evnt => {
    console.log("Service worker was installed!");
});


// activate service worker
self.addEventListener('activate', evnt => {
    console.log("Service worker was activated!");
});