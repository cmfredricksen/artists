import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Chris Fredricksen",
  "tags": ["watercolor", "pen-and-ink"],
  "phone": "218-504-9155",
  "email": "cmfredricksen@gmail.com",
  "website": "https://cmfred-dev.netlify.app",
  "images": ["/images/valley.png"]
};
const Chris_fredricksen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Chris is an artist and a web developer living and working in Ely Minnesota.</p>`;
});
export {
  Chris_fredricksen as default,
  metadata
};
