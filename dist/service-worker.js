if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]}))},e=(e,a)=>{Promise.all(e.map(s)).then((s=>a(1===s.length?s[0]:s)))},a={require:Promise.resolve(e)};self.define=(e,c,i)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+e.slice(1)};return Promise.all(c.map((e=>{switch(e){case"exports":return a;case"module":return d;default:return s(e)}}))).then((s=>{const e=i(...s);return a.default||(a.default=e),a}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"./index.html",revision:"02d53bbaf8f7b37b0fc29c53ce721b80"},{url:"assets/icons/a01d.svg",revision:"f640a588313dd598f59b2a34f6c64a4e"},{url:"assets/icons/a01n.svg",revision:"f640a588313dd598f59b2a34f6c64a4e"},{url:"assets/icons/a02d.svg",revision:"f640a588313dd598f59b2a34f6c64a4e"},{url:"assets/icons/a02n.svg",revision:"f640a588313dd598f59b2a34f6c64a4e"},{url:"assets/icons/a03d.svg",revision:"f640a588313dd598f59b2a34f6c64a4e"},{url:"assets/icons/a03n.svg",revision:"f640a588313dd598f59b2a34f6c64a4e"},{url:"assets/icons/a04d.svg",revision:"f640a588313dd598f59b2a34f6c64a4e"},{url:"assets/icons/a04n.svg",revision:"f640a588313dd598f59b2a34f6c64a4e"},{url:"assets/icons/a05d.svg",revision:"d4db296d45ad7137c9d3d9c298c0193c"},{url:"assets/icons/a05n.svg",revision:"d4db296d45ad7137c9d3d9c298c0193c"},{url:"assets/icons/a06d.svg",revision:"d4db296d45ad7137c9d3d9c298c0193c"},{url:"assets/icons/a06n.svg",revision:"d4db296d45ad7137c9d3d9c298c0193c"},{url:"assets/icons/c01d.svg",revision:"a0404ecc88c32292dd3defd0e344cca0"},{url:"assets/icons/c01n.svg",revision:"06bbd270b3664b35b31ef98cf321552e"},{url:"assets/icons/c02d.svg",revision:"8e5d988eea2cdf0eb2e6ed1b6d6e31a7"},{url:"assets/icons/c02n.svg",revision:"249c8dada6668e048eb94724ad63a2aa"},{url:"assets/icons/c03d.svg",revision:"8e5d988eea2cdf0eb2e6ed1b6d6e31a7"},{url:"assets/icons/c03n.svg",revision:"249c8dada6668e048eb94724ad63a2aa"},{url:"assets/icons/c04d.svg",revision:"ce2b30bf0a16dba8a9893c6af820751a"},{url:"assets/icons/c04n.svg",revision:"ce2b30bf0a16dba8a9893c6af820751a"},{url:"assets/icons/d01d.svg",revision:"b79d37ff79df9ad0dc4db14386c2da9a"},{url:"assets/icons/d01n.svg",revision:"b79d37ff79df9ad0dc4db14386c2da9a"},{url:"assets/icons/d02d.svg",revision:"b79d37ff79df9ad0dc4db14386c2da9a"},{url:"assets/icons/d02n.svg",revision:"b79d37ff79df9ad0dc4db14386c2da9a"},{url:"assets/icons/d03d.svg",revision:"b79d37ff79df9ad0dc4db14386c2da9a"},{url:"assets/icons/d03n.svg",revision:"b79d37ff79df9ad0dc4db14386c2da9a"},{url:"assets/icons/r01d.svg",revision:"c2d0aafe5356fbcf85f3c9d95392159b"},{url:"assets/icons/r01n.svg",revision:"c2d0aafe5356fbcf85f3c9d95392159b"},{url:"assets/icons/r02d.svg",revision:"d6fe62553554d2249b3185873c28be3c"},{url:"assets/icons/r02n.svg",revision:"d6fe62553554d2249b3185873c28be3c"},{url:"assets/icons/r03d.svg",revision:"d6fe62553554d2249b3185873c28be3c"},{url:"assets/icons/r03n.svg",revision:"d6fe62553554d2249b3185873c28be3c"},{url:"assets/icons/r04d.svg",revision:"d6fe62553554d2249b3185873c28be3c"},{url:"assets/icons/r04n.svg",revision:"d6fe62553554d2249b3185873c28be3c"},{url:"assets/icons/r05d.svg",revision:"d6fe62553554d2249b3185873c28be3c"},{url:"assets/icons/r05n.svg",revision:"d6fe62553554d2249b3185873c28be3c"},{url:"assets/icons/r06d.svg",revision:"d6fe62553554d2249b3185873c28be3c"},{url:"assets/icons/r06n.svg",revision:"d6fe62553554d2249b3185873c28be3c"},{url:"assets/icons/s01d.svg",revision:"95051580db34c1f4a6f99fe52413a0f4"},{url:"assets/icons/s01n.svg",revision:"95051580db34c1f4a6f99fe52413a0f4"},{url:"assets/icons/s02d.svg",revision:"95051580db34c1f4a6f99fe52413a0f4"},{url:"assets/icons/s02n.svg",revision:"95051580db34c1f4a6f99fe52413a0f4"},{url:"assets/icons/s03d.svg",revision:"041ad5ed49d37fd746212b6ec596c359"},{url:"assets/icons/s03n.svg",revision:"041ad5ed49d37fd746212b6ec596c359"},{url:"assets/icons/s04d.svg",revision:"041ad5ed49d37fd746212b6ec596c359"},{url:"assets/icons/s04n.svg",revision:"041ad5ed49d37fd746212b6ec596c359"},{url:"assets/icons/s05d.svg",revision:"74994f6454d4e602435bfa6c3f91a7f9"},{url:"assets/icons/s05n.svg",revision:"74994f6454d4e602435bfa6c3f91a7f9"},{url:"assets/icons/s06d.svg",revision:"5e579a66c4580798640d145b2736021b"},{url:"assets/icons/s06n.svg",revision:"5e579a66c4580798640d145b2736021b"},{url:"assets/icons/t01d.svg",revision:"af17c67fbf2a4cadb69e6adca891f68e"},{url:"assets/icons/t01n.svg",revision:"af17c67fbf2a4cadb69e6adca891f68e"},{url:"assets/icons/t02d.svg",revision:"80c607638524750412e4c4510e0af1b7"},{url:"assets/icons/t02n.svg",revision:"80c607638524750412e4c4510e0af1b7"},{url:"assets/icons/t03d.svg",revision:"80c607638524750412e4c4510e0af1b7"},{url:"assets/icons/t03n.svg",revision:"80c607638524750412e4c4510e0af1b7"},{url:"assets/icons/t04d.svg",revision:"af17c67fbf2a4cadb69e6adca891f68e"},{url:"assets/icons/t04n.svg",revision:"af17c67fbf2a4cadb69e6adca891f68e"},{url:"assets/icons/t05d.svg",revision:"af17c67fbf2a4cadb69e6adca891f68e"},{url:"assets/icons/t05n.svg",revision:"af17c67fbf2a4cadb69e6adca891f68e"},{url:"assets/icons/unknown.svg",revision:"06cdd28b1fae35b20c730136ec0c9465"},{url:"main.css",revision:"6f9b341e9451f01528200f3a11c1bc71"},{url:"main.js",revision:"c7bdecca87c4a42077a737441e6f9e7a"}],{})}));