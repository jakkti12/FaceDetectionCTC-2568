import { _ as __nuxt_component_1 } from "./FooterComponent-DyBxY8i_.js";
import axios from "axios";
import { g as getUser, V as VAlert } from "./VAlert-BV4vVzt_.js";
import { withCtx, createTextVNode, toDisplayString, useSSRContext, resolveComponent } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./NewLogo-BQlGcRu3.js";
import { _ as _export_sfc } from "../server.mjs";
import { d as VBtn } from "./VBtn-BQh1DFk2.js";
import "./createSimpleFunctional-34w8xNDu.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const _sfc_main$1 = {
  data() {
    return {
      username: "",
      password: "",
      error: null,
      success: null,
      user: {
        id: ""
      }
    };
  },
  mounted() {
    this.checkUser();
  },
  methods: {
    async checkUser() {
      const result = await getUser();
      if (result.is_logged_in) {
        this.$router.push("/");
      }
    },
    async login() {
      var _a, _b;
      this.error = null;
      this.success = null;
      try {
        const response = await axios.post("http://localhost:7000/auth/login", {
          username: this.username,
          password: this.password
        });
        localStorage.setItem("token", response.data.token);
        this.success = response.data.message;
        setTimeout(() => this.$router.push("/"), 2e3);
      } catch (err) {
        this.error = ((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "An error occurred";
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  if ($data.error || $data.success) {
    _push(ssrRenderComponent(VAlert, {
      type: $data.error ? "error" : "success",
      closable: "",
      title: $data.error ? "Login Failed" : "Login Successful",
      text: "",
      variant: "elevated",
      class: "alert-global"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate($data.error || $data.success)}`);
        } else {
          return [
            createTextVNode(toDisplayString($data.error || $data.success), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="container" data-v-82867e4b><div class="row text-center mt-5" data-v-82867e4b><div class="col" data-v-82867e4b><div class="p-2" data-v-82867e4b><img style="${ssrRenderStyle({ "width": "350px", "border-radius": "100%" })}"${ssrRenderAttr("src", _imports_0)} alt="Logo" data-v-82867e4b></div><h2 data-v-82867e4b>ลงชื่อเข้าใช้</h2><p data-v-82867e4b> หรือ <a href="/auth/register" class="" data-v-82867e4b>สมัครสมาชิก</a></p></div></div><div class="row mt-5 justify-content-center" data-v-82867e4b><div class="col-md-8 col-lg-6" data-v-82867e4b><div class="card" data-v-82867e4b><div class="card-body" data-v-82867e4b>`);
  if ($data.error) {
    _push(`<div class="error" data-v-82867e4b>${ssrInterpolate($data.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<form data-v-82867e4b><div class="mb-3" data-v-82867e4b><label for="inputEmail" class="form-label" data-v-82867e4b>ชื่อผู้ใช้</label><input${ssrRenderAttr("value", $data.username)} type="text" class="form-control" id="inputEmail" aria-describedby="emailHelp" required data-v-82867e4b></div><div class="mb-3" data-v-82867e4b><label for="inputPassword" class="form-label" data-v-82867e4b>รหัสผ่าน</label><input${ssrRenderAttr("value", $data.password)} type="password" class="form-control" id="inputPassword" required data-v-82867e4b></div><div class="d-flex w-100 justify-content-between mb-3" data-v-82867e4b><div class="form-check" data-v-82867e4b><input type="checkbox" name="remember" value="1" class="form-check-input" id="checkRememberMe" data-v-82867e4b><label class="form-check-label" for="checkRememberMe" data-v-82867e4b>จดจําฉัน</label></div><div data-v-82867e4b><a href="#" class="link-primary" data-v-82867e4b>ลืมรหัสผ่าน</a></div></div>`);
  _push(ssrRenderComponent(VBtn, {
    type: "submit",
    class: "w-100",
    color: "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` เข้าสู่ระบบ `);
      } else {
        return [
          createTextVNode(" เข้าสู่ระบบ ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</form><hr data-v-82867e4b><div class="text-center" data-v-82867e4b><a href="/" class="link-secondary" data-v-82867e4b>กลับสู่หน้าหลัก</a></div></div></div></div></div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/LoginComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LoginComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-82867e4b"]]);
const _sfc_main = {
  components: {
    LoginComponent,
    FooterComponent: __nuxt_component_1
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LoginComponent = resolveComponent("LoginComponent");
  const _component_FooterComponent = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_LoginComponent, null, null, _parent));
  _push(ssrRenderComponent(_component_FooterComponent, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  login as default
};
//# sourceMappingURL=login-Cn_UmFCY.js.map
