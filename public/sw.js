if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise((async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},s=(s,c)=>{Promise.all(s.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(s)};self.define=(s,n,a)=>{c[s]||(c[s]=Promise.resolve().then((()=>{let c={};const t={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return c;case"module":return t;default:return e(s)}}))).then((e=>{const s=a(...e);return c.default||(c.default=s),c}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Z0c_Mj1OORrj1atQx42Mw/_buildManifest.js",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/Z0c_Mj1OORrj1atQx42Mw/_ssgManifest.js",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/chunks/802da10bf390c1ef6e413d20b5ec5d017748109b.8d3cabac8a695e65d463.js",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/chunks/c271c79dc3487857381d8cc096f974d4921b2bd3.2748fdcbc481b8a421a2.js",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/chunks/commons.244760ad2d8f6fc5d42d.js",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/chunks/framework.4b81eedf2fcdb09bf521.js",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/chunks/main-3f919a40c00faa1a6549.js",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/chunks/pages/_app-2cacebaccc69382e5cd9.js",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/chunks/pages/_error-92990e890814ddbc78c9.js",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/chunks/pages/blog-f0fdc8b6ec8d80b8bc43.js",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/chunks/pages/cart-cea52d94865ae4af9f24.js",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/chunks/pages/checkout-d740b778c9a00f8ef4a8.js",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/chunks/pages/index-d8c166ca658035cc1278.js",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/chunks/pages/shop-e9b732b2c990edb294b3.js",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/chunks/pages/shop/%5Bid%5D-bdc2f2e7bd1871cae28a.js",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/chunks/polyfills-4f4acd756cef4fe6da1b.js",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/css/26fc89a0fa1b3f7cad93.css",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/css/352587d16b5a0b9ed410.css",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/css/61e6946062a9fe037083.css",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/css/8515158ca2b3f9ba37e6.css",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/_next/static/css/a87a8d79f3a3b0f50c7b.css",revision:"Z0c_Mj1OORrj1atQx42Mw"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/iconx128.png",revision:"6846210612b00013682219ce89902f6d"},{url:"/icons/iconx144.png",revision:"af67fcce7795751698d28d4f2e6085e4"},{url:"/icons/iconx152.png",revision:"9b5542d096fcc6485aef1907f1120443"},{url:"/icons/iconx192.png",revision:"578773eedf47074053d1c047635e8761"},{url:"/icons/iconx384.png",revision:"51453fd9d6a6bf52ef2b738ac463c266"},{url:"/icons/iconx512.png",revision:"dcaa7353cc292217b284b6d53ae36a80"},{url:"/icons/iconx72.png",revision:"68031ceb7403d3f710a16e1e6e48a9f7"},{url:"/icons/iconx96.png",revision:"d7ee926f52831865514cc86ac524ce20"},{url:"/manifest.json",revision:"2fd78238e9e9ae78ce606bc32d507c0a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));