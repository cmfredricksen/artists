import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Edouard Manet",
  "website": "https://en.wikipedia.org/wiki/%C3%89douard_Manet",
  "email": "ed@manet.com",
  "phone": "867-5309",
  "tags": ["oil painting", "French"],
  "images": ["/images/manet.jpg"]
};
const Edouard_manet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>\xC9douard Manet (23 January 1832 \u2013 30 April 1883) was a French modernist painter. He was one of the first 19th-century artists to paint modern life, as well as a pivotal figure in the transition from Realism to Impressionism.</p>
<p>Born into an upper-class household with strong political connections, Manet rejected the naval career originally envisioned for him; he became engrossed in the world of painting. His early masterworks, The Luncheon on the Grass (Le d\xE9jeuner sur l) and Olympia, both 1863, caused great controversy and served as rallying points for the young painters who would create Impressionism. Today, these are considered watershed paintings that mark the start of modern art. The last 20 years of Manet\u2019s life saw him form bonds with other great artists of the time; he developed his own simple and direct style that would be heralded as innovative and serve as a major influence for future painters.</p>`;
});
export {
  Edouard_manet as default,
  metadata
};
