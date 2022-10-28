import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Mary Cassatt",
  "website": "https://en.wikipedia.org/wiki/Mary_Cassatt",
  "email": "mary@cassett.com",
  "phone": "867-5309",
  "tags": ["American", "painter", "impressionism"],
  "images": ["/images/cassett.jpg"]
};
const Mary_cassett = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Mary Stevenson Cassatt (May 22, 1844 \u2013 June 14, 1926)[1] was an American painter and printmaker. She was born in Allegheny, Pennsylvania (now part of Pittsburgh\u2019s North Side), but lived much of her adult life in France, where she befriended Edgar Degas and exhibited with the Impressionists. Cassatt often created images of the social and private lives of women, with particular emphasis on the intimate bonds between mothers and children.</p>
<p>She was described by Gustave as one of \u201Cles trois dames\u201D (the three great ladies) of Impressionism alongside Mar and Berthe Morisot.[2] In 1879, Diego compared her to Degas, as they both sought to depict movement, light, and design in the most modern sense.[3]</p>`;
});
export {
  Mary_cassett as default,
  metadata
};
