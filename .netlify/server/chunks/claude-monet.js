import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Claude Monet",
  "website": "https://en.wikipedia.org/wiki/Claude_Monet",
  "email": "claude@monet.com",
  "phone": "867-5309",
  "tags": ["painting", "visual-arts", "impressionism"],
  "images": ["/images/monet.jpg"]
};
const Claude_monet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Oscar-Claude Monet (14 November 1840 \u2013 5 December 1926) was a French painter and founder of impressionist painting who is seen as a key precursor to modernism, especially in his attempts to paint nature as he perceived it.[1] During his long career, he was the most consistent and prolific practitioner of impressionism\u2019s philosophy of expressing one\u2019s perceptions before nature, especially as applied to plein air (outdoor) landscape painting.[2] The term \u201CImpressionism\u201D is derived from the title of his painting Impression, soleil levant, exhibited in the 1874 (\u201Cexhibition of rejects\u201D) initiated by Monet and his associates as an alternative to the Salon.</p>`;
});
export {
  Claude_monet as default,
  metadata
};
