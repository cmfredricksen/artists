import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Cecilia Rolando",
  "tags": ["watercolor", "pen-and-ink", "acrylics", "fabrics"],
  "phone": "218-504-9155",
  "email": "crolando@gmail.com",
  "website": "https://cmfred-dev.netlify.app",
  "images": ["/images/Cecilia-Rolando.jpg"]
};
const Cecilia_rolando = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Cecilia is an artist who lives and works in Ely MN.</p>`;
});
export {
  Cecilia_rolando as default,
  metadata
};
