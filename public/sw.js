if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,c,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/E8W9V_3PbJ2IQWUwgKoPe/_buildManifest.js",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/E8W9V_3PbJ2IQWUwgKoPe/_ssgManifest.js",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/chunks/802da10bf390c1ef6e413d20b5ec5d017748109b.53c8040f9593e1c80719.js",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/chunks/commons.244760ad2d8f6fc5d42d.js",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/chunks/dee5c6f280b6e840466a8933c60e2338e04fd22b.ff13c82637fc107eb2c3.js",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/chunks/framework.4b81eedf2fcdb09bf521.js",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/chunks/main-3f919a40c00faa1a6549.js",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/chunks/pages/_app-47fa5fc6ad1b9016d50a.js",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/chunks/pages/_error-92990e890814ddbc78c9.js",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/chunks/pages/blog-ef538db17f54e6234f02.js",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/chunks/pages/blog/%5Bid%5D-f1c7d84c81e319c28416.js",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/chunks/pages/cart-45622721671cdeea6435.js",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/chunks/pages/checkout-d03ed10ea4b082a78d04.js",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/chunks/pages/index-654575e275fc24bdf9ff.js",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/chunks/pages/shop-0e35c5e343c1b039aaa4.js",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/chunks/pages/shop/%5Bid%5D-9b2496940a3448ee820c.js",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/chunks/polyfills-28654a8145d7603786fc.js",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/css/2f9c1920f855eef483c2.css",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/css/559ad345d5ef3c120eb6.css",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/css/6aca972ac00160517bdc.css",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/css/6b549637200dc5b5f0d9.css",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/css/a91a7a20760cc4cbdc18.css",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/css/b06fadf2502a3c6b8e45.css",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/_next/static/css/d826d52c3f29957dd90a.css",revision:"E8W9V_3PbJ2IQWUwgKoPe"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/iconx128.png",revision:"6846210612b00013682219ce89902f6d"},{url:"/icons/iconx144.png",revision:"af67fcce7795751698d28d4f2e6085e4"},{url:"/icons/iconx152.png",revision:"9b5542d096fcc6485aef1907f1120443"},{url:"/icons/iconx192.png",revision:"578773eedf47074053d1c047635e8761"},{url:"/icons/iconx384.png",revision:"51453fd9d6a6bf52ef2b738ac463c266"},{url:"/icons/iconx512.png",revision:"dcaa7353cc292217b284b6d53ae36a80"},{url:"/icons/iconx72.png",revision:"68031ceb7403d3f710a16e1e6e48a9f7"},{url:"/icons/iconx96.png",revision:"d7ee926f52831865514cc86ac524ce20"},{url:"/manifest.json",revision:"6448e453abe8eb9d5ccff238757e678f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
