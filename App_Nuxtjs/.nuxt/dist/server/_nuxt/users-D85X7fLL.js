import { N as NDAdmin } from "./NDAdmin-C5RAPb5i.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./HeaderComponent-B3CWU5QU.js";
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
import "./VNavigationDrawer-CflmLKK7.js";
import "./VTextField-DYVwMBTO.js";
import "./VInput--HWDDWXB.js";
import "./ssrBoot-BtvJZs44.js";
import "./VChip-Dwxv34Zv.js";
import "./VMain-B0aKjWRH.js";
import "xlsx";
import "hookable";
import "./VDialog-CTYxqpGs.js";
import "./VFileInput-DQu0Y8pt.js";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "ufo";
const _sfc_main = {
  components: {
    NDAdmin
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NDAdmin = resolveComponent("NDAdmin");
  _push(ssrRenderComponent(_component_NDAdmin, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/users.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const users = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  users as default
};
//# sourceMappingURL=users-D85X7fLL.js.map
