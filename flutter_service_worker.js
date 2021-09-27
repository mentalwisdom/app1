'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8ed7f85094b2da843cad4e017ab1d5b1",
"index.html": "812ad5d96837b330e3099de9b5ee93d7",
"/": "812ad5d96837b330e3099de9b5ee93d7",
"main.dart.js": "5f16f0d02e876f8418651509292b6f63",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b83db8abe857e82ad75b160ff85c3a7f",
"assets/AssetManifest.json": "b0a148b5046fc53838af810aaf076492",
"assets/NOTICES": "bdee61dbd739a5fca5810f5d7b450b7c",
"assets/FontManifest.json": "0733e96fe603ee7e867146fd2ca834f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/app_crypto_icons/assets/usdc.svg": "54a68241c4a11df3e7bf5df648aec200",
"assets/packages/app_crypto_icons/assets/eun.svg": "e8a0690c34edb3471c7d3fb764001a00",
"assets/packages/app_crypto_icons/assets/yfi.svg": "039593bc27a7a47651b917fa8db8c149",
"assets/packages/app_crypto_icons/assets/usdt.svg": "c94eb1f6939dc924eec489b71a9782c0",
"assets/packages/app_crypto_icons/assets/eth.svg": "c1fe0fc8e6bb17cb46aae6fbf36aef41",
"assets/packages/app_crypto_icons/assets/husd.svg": "95b9e77733cef96eccd92ee5af868030",
"assets/packages/app_crypto_icons/assets/omg.svg": "c792f5e5510fae8eaed7fd250851928d",
"assets/packages/app_crypto_icons/assets/sxp.svg": "4fae9c6213a6a9cfc8a256e1dc98646b",
"assets/packages/app_crypto_icons/assets/wbtc.svg": "55cacf31d965791ec88258e3ccd5bac3",
"assets/packages/app_crypto_icons/assets/link.svg": "53ab3ca516f0ea24a17b4eaa17cc481f",
"assets/packages/app_crypto_icons/assets/dai.svg": "5e22d34aee8dba93d583d09626ed16ed",
"assets/packages/app_crypto_icons/assets/bnb.svg": "afba184b0da1d35c6f2aad8daae964ea",
"assets/packages/app_crypto_icons/assets/tusd.svg": "b565a7437510f632f52e5829a9ab7fb2",
"assets/packages/app_crypto_icons/assets/bal.svg": "a35e35215a7aa6bc19d5685df7688621",
"assets/packages/app_crypto_icons/assets/band.svg": "9b731f970b2a1936bb90937ea5dd4f52",
"assets/packages/app_crypto_icons/assets/okb.svg": "cd223625d1e50f490f89597db23762cc",
"assets/packages/app_crypto_icons/assets/zrx.svg": "89c9649555cf04f493044d3e07e9f6a1",
"assets/packages/app_crypto_icons/assets/busd.svg": "2c9fe249370ccc5f5a12a14520b02919",
"assets/packages/app_crypto_icons/assets/mkr.svg": "5dd6efcf4f0cd4dcc8cef2d74ae4a87b",
"assets/packages/app_crypto_icons/assets/ven.svg": "355b3df079680dfd10e4de046592fb4d",
"assets/packages/app_crypto_icons/assets/snx.svg": "bd70c74f9f83bf117a2e118873d5e96b",
"assets/packages/app_crypto_icons/assets/uni.svg": "266bc60a5cf1ee3df746497a588e4041",
"assets/packages/app_crypto_icons/assets/rsr.svg": "8ea9b3a5fb04767c1e407f273af6785d",
"assets/packages/app_crypto_icons/assets/zil.svg": "0f15d80dd82fc77b7d4178d8208bba8b",
"assets/packages/app_crypto_icons/assets/usdk.png": "2c48e011ce80325de422ef9c3b3b9cb5",
"assets/packages/app_crypto_icons/assets/cdai.svg": "1cf3e07ff31653abb4996755a22f0322",
"assets/packages/app_crypto_icons/assets/bat.svg": "88ec8e48fcd07a154ceb411e7338fad1",
"assets/packages/app_crypto_icons/assets/comp.svg": "0d9ec28151ac7d49ebfa7187182e761b",
"assets/packages/app_crypto_icons/assets/sushi.png": "1efce8b3bfdd0604550a68057ced54df",
"assets/packages/app_crypto_icons/assets/pax.svg": "2bd89d168ef7ec29d95884b167a9b592",
"assets/packages/app_crypto_icons/assets/aave.svg": "1a95974bb97db01a38f087a2a496f2d4",
"assets/packages/app_crypto_icons/assets/ht.svg": "681cb7516794c746f4853b208ef605b7",
"assets/packages/crypto_font_icons/font/cryptofont-webfont.ttf": "bda334582cf63e3bf621e6a710bd3fd9",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
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
