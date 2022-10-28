import { c as create_ssr_component, e as each, b as add_attribute, d as escape, v as validate_component } from "../../chunks/index.js";
const global = "";
const nav_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "a.svelte-6kqqy8{margin:0 1rem}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    {
      title: "Home",
      path: "https://artsinely.org/"
    },
    {
      title: "Directory",
      path: "https://artsinely.org/arts-directory/"
    },
    { title: "API", path: "/api/artists" },
    { title: "Artists", path: "/artists" }
  ];
  $$result.css.add(css$3);
  return `<nav>${each(links, ({ title, path }) => {
    return `<a${add_attribute("href", path, 0)} class="${"svelte-6kqqy8"}">${escape(title)}</a>`;
  })}
</nav>`;
});
const header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-1i798gt{display:flex;justify-content:space-between;align-items:baseline;padding:1rem;background-color:#3bb3fe;color:#fff}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="${"svelte-1i798gt"}"><h1>Arts in Ely</h1>
	${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
</header>`;
});
const footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-1vnw6tz{padding:2rem 0;text-align:center}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-1vnw6tz"}"><p>\xA9 2022 cmfred \xB7 All Rights Reserved \u2665</p>
</footer>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-1chzi8k{width:80%;padding:2rem 0;margin:0 auto}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-4ng58w_START -->${$$result.title = `<title>Arts In Ely | Home</title>`, ""}<!-- HEAD_svelte-4ng58w_END -->`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<div class="${"wrapper svelte-1chzi8k"}">${slots.default ? slots.default({}) : ``}</div>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
