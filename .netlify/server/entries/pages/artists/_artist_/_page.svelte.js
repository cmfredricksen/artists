import { c as create_ssr_component, d as escape, b as add_attribute, e as each, v as validate_component } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".contact-info.svelte-1rnslp8.svelte-1rnslp8{display:flex;flex-direction:column;margin:1rem 0;justify-content:space-between;padding:1rem 0}.contact-info.svelte-1rnslp8 p.svelte-1rnslp8{font-weight:bold;color:#3bb3fe;margin:0.5rem 0}.text-box.svelte-1rnslp8.svelte-1rnslp8{width:50%}img.svelte-1rnslp8.svelte-1rnslp8{max-width:500px;padding:2rem 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { title, email, website, phone, tags, images, Content } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1xeo4f_START -->${$$result.title = `<title>Arts in Ely | ${escape(title)}</title>`, ""}<!-- HEAD_svelte-1xeo4f_END -->`, ""}

<h1>${escape(title)}</h1>

<div class="${"contact-info svelte-1rnslp8"}"><p class="${"svelte-1rnslp8"}">Phone: ${escape(phone)}</p>
	<p class="${"svelte-1rnslp8"}">Email: <a href="${"mailto:" + escape(email, true)}">${escape(email)}</a></p>
	<p class="${"svelte-1rnslp8"}">Website: <a${add_attribute("href", website, 0)}>${escape(title)}</a></p></div>

<div class="${"tag-box"}">${each(tags, (tag) => {
    return `<a href="${"/artists/tag/" + escape(tag, true)}">#${escape(tag)}</a>`;
  })}</div>

${each(images, (image) => {
    return `<img${add_attribute("src", image, 0)} alt="${"pic"}" class="${"svelte-1rnslp8"}">`;
  })}

<div class="${"text-box svelte-1rnslp8"}">${validate_component(Content, "Content").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
