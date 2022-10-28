import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Frieda Kahlo",
  "website": "https://en.wikipedia.org/wiki/Frida_Kahlo",
  "email": "frieda@kahlo.com",
  "phone": "867-5309",
  "tags": ["painter", "surrealism"],
  "images": ["/images/kahlo.jpg"]
};
const Frieda_kahlo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Magdalena Carmen Frida Kahlo y Calder\xF3n (Spanish pronunciation:; 6 July 1907 \u2013 13 July 1954[1]) was a Mexican painter known for her many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico. Inspired by the country\u2019s popular culture, she employed a na\xEFve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican society.[2] Her paintings often had strong autobiographical elements and mixed realism with fantasy. In addition to belonging to the post-revolutionary movement, which sought to define a Mexican identity, Kahlo has been described as a surrealist or magical realist.[3] She is known for painting about her experience of chronic pain.[4]</p>`;
});
export {
  Frieda_kahlo as default,
  metadata
};
