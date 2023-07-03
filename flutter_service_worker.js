'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/NOTICES": "262108398239540ae4cde95dcf81820a",
"assets/assets/json/minor/address_minor_17.json": "4f917cc3cb268368b9f0bcdc712858ad",
"assets/assets/json/minor/address_minor_13.json": "8216dd76d0a47efcabf8c35cdafd6460",
"assets/assets/json/minor/address_minor_1.json": "28694ed5865be9d77463a314c95872ba",
"assets/assets/json/minor/address_minor_11.json": "037233f249ac6e4b63fb362136399e4a",
"assets/assets/json/minor/address_minor_6.json": "d252319c20c028ca3dcadfe95ae3b9fd",
"assets/assets/json/minor/address_minor_14.json": "6b66a65ca7cd37ab5d7c4a226b377c45",
"assets/assets/json/minor/address_minor_7.json": "c0dde868b946beee40b8fb67bd519874",
"assets/assets/json/minor/address_minor_2.json": "51d9835bc90d80e270c59acdf180bb85",
"assets/assets/json/minor/address_minor_16.json": "60c6b0992548a4e2c044b14fe6b3d041",
"assets/assets/json/minor/address_minor_15.json": "974a8c45d13b2d8977a8b7b5356f3f8f",
"assets/assets/json/minor/address_minor_12.json": "9b173f6dcdb7434e6309f41fa009d0b5",
"assets/assets/json/minor/address_minor_8.json": "ddc42778328c06dd7b2a269e2a343c5a",
"assets/assets/json/minor/address_minor_10.json": "a419ee786dae174776d462b615ebc181",
"assets/assets/json/minor/address_minor_5.json": "edefd4dcda124bb77e28015832945a92",
"assets/assets/json/minor/address_minor_4.json": "f07fdba03f6423d1ff24cbe0d3f19523",
"assets/assets/json/minor/address_minor_9.json": "10bc382cce7954dc6123c60f34d595e0",
"assets/assets/json/minor/address_minor_3.json": "3f1f158ce56381a89caaf9b354cff690",
"assets/assets/json/address_major.json": "f1df9a267d42976f720e2b9d38af718b",
"assets/assets/images/marvel/marvel_03.jpg": "5e0b069067680c3269ec37836135ef8d",
"assets/assets/images/marvel/marvel_01.jpeg": "4ced8883beec91411cef350bbf2ef04f",
"assets/assets/images/marvel/marvel_04.jpeg": "54d150379b05f4a6df8a70df918cd063",
"assets/assets/images/marvel/marvel_06.png": "eac63c12518f465a8a659fcee39751c2",
"assets/assets/images/marvel/marvel_05.jpeg": "d70fd9dabde54deb6967ab9bd0dcbba0",
"assets/assets/images/marvel/marvel_02.jpeg": "86d3e51429752c9223f31c2802169ed1",
"assets/assets/images/koenigsegg/koenigsegg_07.jpeg": "80f2cd9361447513404bef43e7152fdf",
"assets/assets/images/koenigsegg/koenigsegg_02.jpeg": "ef004c13676af2dd7868662f16d39464",
"assets/assets/images/koenigsegg/koenigsegg_01.jpeg": "8a0906204efa03b2900758a42d281a02",
"assets/assets/images/koenigsegg/koenigsegg_06.jpeg": "915e77fb7bcde270effd0cb46f9ff8c0",
"assets/assets/images/koenigsegg/koenigsegg_08.jpeg": "13262ca1f0950dddfc5f304312236061",
"assets/assets/images/koenigsegg/koenigsegg_05.jpeg": "6433ee21e229da7a66f505ec4fd6091e",
"assets/assets/images/koenigsegg/koenigsegg_04.jpeg": "53d1ef9a5f0dbc6f173ce2c580a52a50",
"assets/assets/images/koenigsegg/koenigsegg_03.jpeg": "d3aee49fae290e566cf3aa71d886c10f",
"assets/assets/images/city/panorama_city.jpeg": "43872a12a47f5ffe1dc4d6e4b9e17288",
"assets/assets/images/porsche/porsche_911_06.png": "4ff35ea8d35181f5bbf0a2cc1c2e2a04",
"assets/assets/images/porsche/porsche_911_03.png": "546a1f4c0273f007c42b48cbb46f388e",
"assets/assets/images/porsche/porsche_911_05.png": "e3dbd3587db7fe060646e0b45bbe7df1",
"assets/assets/images/porsche/porsche_911_04.png": "5ff1241b0040d30de7593db11e97641e",
"assets/assets/images/porsche/porsche_911_02.png": "4f9782066e88975667e1640b61b602da",
"assets/assets/images/porsche/porsche_911_01.png": "6ce4b0f94d819f7bf01a83c23f2c1461",
"assets/assets/html/daum_postcode.html": "6a145eca8c335d2145688175965edee1",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "d667c7f9a96cc31c14dd6e75b41e25a2",
"assets/AssetManifest.json": "cadf5735063efff4017379633f8c9b2e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/daum_postcode_search/lib/assets/index.html": "6610107c2ae1ec1a2e1afe3c0209e3a1",
"/": "38f807de9e629fe154e51c5cbdbcccab",
"assets/packages/daum_postcode_search/lib/assets/daum_search.html": "eb5094cc599a1b505392bf684dd21f37",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/fonts/MaterialIcons-Regular.otf": "82ee0a8bfff71f02be56e5494ce3f856",
"index.html": "38f807de9e629fe154e51c5cbdbcccab",
"main.dart.js": "8eaf93f8d4c02b974707920154ec017e",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"version.json": "dc0db81207ac2e7cac5b302fa4881e08",
"manifest.json": "5b144f841c0c80164e55d961033a6f67",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
