import { _ as __nuxt_component_0 } from "./HeaderComponent-B3CWU5QU.js";
import { _ as __nuxt_component_1 } from "./FooterComponent-DyBxY8i_.js";
import { P as ProfileComponent } from "./ProfileComponent-CaL55cVd.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "axios";
import "vue-router";
import "./VAlert-BV4vVzt_.js";
import "./createSimpleFunctional-34w8xNDu.js";
import "./VBtn-BQh1DFk2.js";
import "./NewLogo-BQlGcRu3.js";
import "./VOverlay-Bq6vi5Fa.js";
import "./forwardRefs-B2cVIy3B.js";
import "./lazy-C5DRqCjO.js";
import "./VDivider-0mIWdu7a.js";
import "./VApp-Dy1gUNa7.js";
import "./VMain-B0aKjWRH.js";
import "./ssrBoot-BtvJZs44.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "ufo";
const _sfc_main = {
  components: {
    HeaderComponent: __nuxt_component_0,
    ProfileComponent,
    FooterComponent: __nuxt_component_1
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderComponent = __nuxt_component_0;
  const _component_ProfileComponent = resolveComponent("ProfileComponent");
  const _component_FooterComponent = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_HeaderComponent, null, null, _parent));
  _push(ssrRenderComponent(_component_ProfileComponent, null, null, _parent));
  _push(ssrRenderComponent(_component_FooterComponent, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  profile as default
};
//# sourceMappingURL=profile-CIG3jWkg.js.map
