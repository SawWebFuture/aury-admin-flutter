'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1a89e47bf890f9be54a2531fd49c6e6f",
"version.json": "53112b275ad365491264d213cc1b615f",
"index.html": "c747893213bfa1549517dcce0b02efeb",
"/": "c747893213bfa1549517dcce0b02efeb",
"main.dart.js": "8e3bbe350e84cd74c4e38182e8f22a31",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"img/logo.png": "5ee4a09925dfbd0a30380e759a30c58a",
"favicon.png": "9a4d6cc96315e6ef48e0cd040655e4a5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "285058b0ed3e4748b593643f47781621",
"assets/AssetManifest.json": "0a64f8bb375ef9e64b68bac72bf56864",
"assets/NOTICES": "677b81de5386aac93d052cbde6e91646",
"assets/FontManifest.json": "95204935b8d19811d87fbae8f5d2c2d1",
"assets/AssetManifest.bin.json": "e59787d33959d55529d3ba0972b5393b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_lucide/lib/fonts/lucide.ttf": "db040bda0a933297dcf49611e1017802",
"assets/packages/timezone/data/latest_all.tzf": "df0e82dd729bbaca78b2aa3fd4efd50d",
"assets/packages/quill_native_bridge_linux/assets/xclip": "d37b0dbbc8341839cde83d351f96279e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3dabe0053c4c1f1608109849d277ebc1",
"assets/fonts/MaterialIcons-Regular.otf": "b8a1d7681784d49827dd2304d770e6ca",
"assets/assets/images/dummy_3.jpg": "c0046b1aff36425214975528e9903d14",
"assets/assets/images/dummy_2.jpg": "3ca6e96eb47151051b685a94943b1c57",
"assets/assets/images/dummy_1.jpg": "3056367c28b1b14456a639e153f1633c",
"assets/assets/images/dummy_5.jpg": "460f0829d49ca6982f07b6b03220ae8d",
"assets/assets/images/dummy_4.jpg": "bc216933913412088e0f97234a596c23",
"assets/assets/images/stores/store_1.jpg": "4c77add7e7717dc6bcaaff715123436a",
"assets/assets/images/stores/store_2.jpg": "4813fdb52ccc47202234d73543f5b52d",
"assets/assets/images/auth_background.jpg": "1cf01f3da0984bcf80dcf533497ad730",
"assets/assets/images/background.png": "b00bfd102d53413faef328d54ba7ec31",
"assets/assets/images/logo/logo-wide.png": "a92df7417db1323fdfaf2b820b37f179",
"assets/assets/images/logo/logo_old.png": "2fe697482f1d2b898a86fdbe5503caba",
"assets/assets/images/logo/img.png": "4a5de3fef24b78a774501f959db02247",
"assets/assets/images/logo/logo-white.png": "a4a52e33abee61e461fad55615ceced2",
"assets/assets/images/logo/logo.png": "5ee4a09925dfbd0a30380e759a30c58a",
"assets/assets/images/background_landing.jpg": "0e631b24068f1bb5111c1fc7c38414a7",
"assets/assets/images/graphics/graphic_2.png": "6a584c9acd22b43404e2698ba5efae6f",
"assets/assets/images/graphics/graphic_1.png": "09ebf3000caa5c9aa144fd4b5c22a187",
"assets/assets/images/apps/app_4.jpg": "4e80357094ec8ba2ef9bd6a0ac85329f",
"assets/assets/images/apps/app_1.jpg": "354bf4457a215008242d838237842d4e",
"assets/assets/images/apps/app_2.jpg": "65f0c77b0bd23928c722f50380798995",
"assets/assets/images/apps/app_3.jpg": "5ccddda4b6c6dd76a5a948a54c073c89",
"assets/assets/images/event/event_9.jpg": "1e30e4b13e4f8363f2e8bc6d958e8465",
"assets/assets/images/event/event_8.jpg": "768a383121f6a9f573783da4e9ccfca8",
"assets/assets/images/event/event_10.jpg": "6996284207902f99071cd03ec9a0b5e2",
"assets/assets/images/event/event_1.jpg": "1b9555076c37c2684334009f99c08f7f",
"assets/assets/images/event/event_3.jpg": "1769ad10c968d1b8de1818c0d20f2d32",
"assets/assets/images/event/event_2.jpg": "e10b9fc1291f76f43c4cbcd2a4bbbc96",
"assets/assets/images/event/event_6.jpg": "1f3255fc39aa81c74ded65898353c312",
"assets/assets/images/event/event_7.jpg": "9c30167c0fbf0d1ad2cd7fc1729c6862",
"assets/assets/images/event/event_5.jpg": "61d846df3fbe450181a85e76e90b6769",
"assets/assets/images/event/event_4.jpg": "ad841ee9f93452d79c5954d2a7db9dfa",
"assets/assets/images/companies/company_1.jpg": "483545ea688c955eb2eb64b6a7311ddb",
"assets/assets/images/companies/company_3.jpg": "6139d6a9583980f53eb6994792c51c90",
"assets/assets/images/companies/company_2.jpg": "4a5e6e638f263f69c4cfc3268a2fc75b",
"assets/assets/lang/ar.jpg": "9143f6bb9f70a7082b2d49a2fa2b0339",
"assets/assets/lang/en.jpg": "6dd96569bff0a5c5ada7d99222b9815d",
"assets/assets/lang/hi.jpg": "806b19b66156a2bfcb232d4f6518747a",
"assets/assets/lang/en.json": "ab6875cb360d40776e89dc3dfc2cf4b4",
"assets/assets/lang/fr.jpg": "ed28420a8f74b0631c24659a40511c2d",
"assets/assets/lang/es.jpg": "25d67fb418ce2623d770679b2fd4f575",
"assets/assets/lang/fr.json": "b3636aca89944180d4033fded7e35081",
"assets/assets/lang/hi.json": "e1f53fd0d994711b95ef1acaffc89204",
"assets/assets/lang/es.json": "d4f1619a23b6be7ec06383ab2affd4a2",
"assets/assets/lang/ar.json": "6e772c89432019cc901e28404b85559f",
"assets/assets/avatar/avatar_3.png": "4d0f8d18ea0eb476715ae9a4c38cea05",
"assets/assets/avatar/avatar_2.png": "eee2d9ed9028e99847373ffae8d6cc41",
"assets/assets/avatar/avatar_1.png": "ea88f2073bb78138f9c06b915f2bcbf1",
"assets/assets/avatar/avatar_5.png": "ddee4fd8c88c5ca46fea66358ad87714",
"assets/assets/avatar/avatar_4.png": "b30fe43a047dddf032eff937bd77858c",
"assets/assets/avatar/avatar_6.png": "fcb4cdcd6cbd0d41ecf1e64bd2426923",
"assets/assets/avatar/avatar_7.png": "83fec2d257a5366b31c5e709c732b1e2",
"assets/assets/avatar/avatar_9.png": "10018d0f6e572d62d526dec07523bf1a",
"assets/assets/avatar/avatar_8.png": "e40123f251639deba200614307b21102",
"assets/assets/avatar/avatar_10.png": "5b4b15a7c4a0ed76a028fec56e2de714",
"assets/assets/avatar/scott.jpg": "78d9e1b8b1917e93f93435bee02f2a2f",
"assets/assets/data/speaker_list.json": "ac9cc69e9c897ef911215d6d70dbdaba",
"assets/assets/data/schedule_list.json": "2b2c7f4b8e6bb4218072cf9433a0239b",
"assets/assets/data/visitors_by_channels_data.json": "5eac3c325717b8ee979c8bdd24caf210",
"assets/assets/data/attendant_list.json": "7c37671a0ec5385c5e42ce8b0cb35d5e",
"assets/assets/data/event_registration_user.json": "154dbc5c2a34de1e38eda4a505e6b25f",
"assets/assets/data/upcoming_event.json": "583f416530b98b591459f21956936a43",
"assets/assets/data/drag_n_drop_data.json": "386fce3d8ebfa695811884c3419fa7f3",
"assets/assets/data/chat_data.json": "21dc8f7ee0924e2b0c4cce28287da231",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
