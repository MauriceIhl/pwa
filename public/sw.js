if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,r,n)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const a={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return i;case"module":return a;default:return e(s)}}))).then((e=>{const s=n(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts("fallback-ZTiuaeI88D95p8vl6hzDh.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/ZTiuaeI88D95p8vl6hzDh/_buildManifest.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/ZTiuaeI88D95p8vl6hzDh/_ssgManifest.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/107-1379f97223bfad63c665.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/288-b4e6f246f634342b1ff7.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/302-ef9526b09f7dc440a9e2.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/597-b729b6ef3fb55a2e8045.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/61-5e35d5db3f852b734f17.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/framework-6374b3a91b6bc64d9c04.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/main-7713a1ef2965e1d091b8.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/pages/_app-880fdddba114c13194b7.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/pages/_error-0363974a06cb2ddba14e.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/pages/blog-d5e8ccf2ed307dc772d3.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/pages/blog/%5Bid%5D-0b1ae59b6bd5db0981ca.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/pages/cart-3d29a260b3f6bd081871.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/pages/checkout-8db281c2931263dc227f.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/pages/index-320e8489d122c3387624.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/pages/offline-f7d555475e243ce2c8c1.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/pages/shop-63469343f36c8a4b6528.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/pages/shop/%5Bid%5D-97d89fe7a9b9d08f7111.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/polyfills-8683bd742a84c1edd48c.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/chunks/webpack-b997f5f3efd4f1a1337c.js",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/css/096d327791feddc5cd8f.css",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/css/15a997c1d1a2fda59909.css",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/css/4f6c8d8f04ab4a66804c.css",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/css/54abecf9cb76fdf90342.css",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/css/65f3f6a7d48ac5049446.css",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/css/9a2b7d289cb6a32ac474.css",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/_next/static/css/c624ec29503451b282d7.css",revision:"ZTiuaeI88D95p8vl6hzDh"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/iconx128.png",revision:"6846210612b00013682219ce89902f6d"},{url:"/icons/iconx144.png",revision:"af67fcce7795751698d28d4f2e6085e4"},{url:"/icons/iconx152.png",revision:"9b5542d096fcc6485aef1907f1120443"},{url:"/icons/iconx192.png",revision:"578773eedf47074053d1c047635e8761"},{url:"/icons/iconx384.png",revision:"51453fd9d6a6bf52ef2b738ac463c266"},{url:"/icons/iconx512.png",revision:"dcaa7353cc292217b284b6d53ae36a80"},{url:"/icons/iconx72.png",revision:"68031ceb7403d3f710a16e1e6e48a9f7"},{url:"/icons/iconx96.png",revision:"d7ee926f52831865514cc86ac524ce20"},{url:"/manifest.json",revision:"6448e453abe8eb9d5ccff238757e678f"},{url:"/offline",revision:"ZTiuaeI88D95p8vl6hzDh"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:r})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
