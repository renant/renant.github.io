'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "8599af66a27dec94d00b030ca300dd26",
"manifest.json": "9203aa3cfc1de89088ea782602223ca3",
"assets/AssetManifest.json": "2b318f3ee5752a20e97b2da7967c2768",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/fonts/Audiowide-Regular.ttf": "e9ee108cd098321ac27b95ebcebfcdf6",
"assets/assets/images/dinoGreen.png": "7bc90bde13fe619cc63799e64275ea75",
"assets/assets/images/Bat/Ceiling%2520Out%2520(46x30).png": "25f70ccf6545e1142b2c71f54d231dd8",
"assets/assets/images/Bat/Flying%2520(46x30).png": "7986dfad436b4607994d3fe1ecced6ce",
"assets/assets/images/Bat/Idle%2520(46x30).png": "33ff43b920fb19d66c2b8ad6164fb2d0",
"assets/assets/images/Bat/Ceiling%2520In%2520(46x30).png": "7e10917c9db181457e409d9f1e176647",
"assets/assets/images/Bat/Hit%2520(46x30).png": "7eaa7663096d5491a7fd01167a78f577",
"assets/assets/images/AngryPig/Walk%2520(36x30).png": "ce06f2c96e2ac0c6cd14e854a870e3e8",
"assets/assets/images/AngryPig/Run%2520(36x30).png": "a69cd13d8345e6906c400416553f6042",
"assets/assets/images/AngryPig/Idle%2520(36x30).png": "7c68ecd6f8880776bb4ec3e5879be9a2",
"assets/assets/images/AngryPig/Hit%25202%2520(36x30).png": "551e92922393af72d2dcb0acb7b34141",
"assets/assets/images/AngryPig/Hit%25201%2520(36x30).png": "bb60d5ed56661d74486bd0e9a52895a2",
"assets/assets/images/background.png": "c7fb5895390cd6930ad39e69e4722590",
"assets/assets/images/icon.png": "97af43140ed5d21b78e67b33249e534f",
"assets/assets/images/DinoSprites_doux.gif": "7a68be57a07d4b3e95d41e277344f44c",
"assets/assets/images/dinoYellow.png": "b35f4dbe1513c61146da143674613790",
"assets/assets/images/coin/Gold_10.png": "5fb959c2a21230dd064fc98c63a994bf",
"assets/assets/images/coin/Gold_1.png": "750a9f0685aac981ddd729b120f42df0",
"assets/assets/images/coin/Gold_4.png": "4c05dea3b713d1a3d5029b305afa34b6",
"assets/assets/images/coin/Gold_7.png": "ee248b05814a6690d31e3645b93a96f6",
"assets/assets/images/coin/Gold_6.png": "9aed08b6858aa632ac2b1c2484123ed9",
"assets/assets/images/coin/Gold_8.png": "e278a13e0af8f65a1b71cb393174d25b",
"assets/assets/images/coin/Gold_3.png": "31c03a08a9f8cd6a1b105c8e8f6b3962",
"assets/assets/images/coin/Gold_2.png": "575517b8c79580e30331d312312c3bd8",
"assets/assets/images/coin/Gold_5.png": "f3bef87c64e22d0bd19f9db0621acf03",
"assets/assets/images/coin/Gold_9.png": "cc50d32133f41a81b0af20a6fc44ad03",
"assets/assets/images/dinoBlue.gif": "82dcf5f9e79a0264e115e8f3b234e11e",
"assets/assets/images/_dinoGreen.gif": "ee4a605e82cc14cdc4cebc562dd22ef7",
"assets/assets/images/dino.png": "0c1b2d3b5e6afe7c1cf54d6c5a26d9fd",
"assets/assets/images/dinoGreen.gif": "b41e77b25f7018f02320a34e55502a4d",
"assets/assets/images/dinoRed.gif": "a3bea669d199ab8fa855ae6a1024e98a",
"assets/assets/images/dinoRed.png": "20a8b62bdc420673355f186711baf695",
"assets/assets/images/Rino/Idle%2520(52x34).png": "f7f722ca434152f30908bf8dba89d843",
"assets/assets/images/Rino/Run%2520(52x34).png": "ec606d010f9bc60557b58c4ec855524e",
"assets/assets/images/Rino/Hit%2520Wall%2520(52x34).png": "35a772b435d59b7bc71a2b80126c6c84",
"assets/assets/images/Rino/Hit%2520(52x34).png": "ad515777809254cd120cef62fb37ac4b",
"assets/assets/images/dinoYellow.gif": "fe99596305a4f8079823f842bc58303e",
"assets/assets/images/parallax/plx-1.png": "25c49cc12aeed4d2799dc9fb52e3c213",
"assets/assets/images/parallax/plx-3.png": "b50ebfb91131365a479f229c0325c033",
"assets/assets/images/parallax/plx-5.png": "552941c58ccaa9782ebee6496e77e003",
"assets/assets/images/parallax/plx-4.png": "58662c8e1ed9bd74717dfa54df862788",
"assets/assets/images/parallax/plx-2.png": "53d9e937ac94613d7d408fcc50fa67c7",
"assets/assets/images/parallax/plx-6.png": "b72105ee8703602dae7451e35ca589fa",
"assets/assets/images/dinoBlue.png": "0c1b2d3b5e6afe7c1cf54d6c5a26d9fd",
"assets/assets/audio/hurt7.wav": "1d3abcc01a999fc13bbb91e75a15c72c",
"assets/assets/audio/coin.mp3": "d9c714c6038c675518310878d451d11d",
"assets/assets/audio/bgloop.wav": "f6b03e1f08c979b5ea451635495ab4c3",
"assets/assets/audio/jump14.wav": "117ba1ac434eaba4dc894b0bfe16e42e",
"assets/NOTICES": "cfcab26bad20a0ccb0879e47fbae6291",
"assets/FontManifest.json": "f70195a528059a5162e640c3e1789601",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "0796021a308597b89290b1d8c5291c40",
"index.html": "678a3a9772b1a532f1b8598edce534fc",
"/": "678a3a9772b1a532f1b8598edce534fc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
