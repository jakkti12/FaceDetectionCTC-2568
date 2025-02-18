import axios from "axios";
import { computed, toRef, createVNode, mergeProps } from "vue";
import { c as createSimpleFunctional } from "./createSimpleFunctional-34w8xNDu.js";
import { m as makeComponentProps, f as makeDensityProps, a as makeDimensionProps, g as makeElevationProps, h as makeLocationProps, i as makePositionProps, j as makeRoundedProps, b as makeTagProps, k as makeVariantProps, l as useVariant, n as useDensity, u as useDimension, o as useElevation, p as useLocation, q as usePosition, r as useRounded, s as useTextColor, t as genOverlays, V as VIcon, e as VDefaultsProvider, d as VBtn } from "./VBtn-BQh1DFk2.js";
import { p as propsFactory, I as IconValue, s as makeThemeProps, g as genericComponent, h as useProxiedModel, t as provideTheme, v as useLocale } from "../server.mjs";
async function getUser() {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return { is_logged_in: false };
    }
    const response = await axios.get("http://localhost:7000/get_data/users", {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    const user = {
      id: response.data.users.id,
      username: response.data.users.username,
      email: response.data.users.email,
      profile: `http://localhost:7000/uploads/profiles/${response.data.users.profile}`,
      user_type: response.data.users.user_type
    };
    return { ok: 1, user, is_logged_in: true };
  } catch (error) {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      localStorage.removeItem("token");
    }
  }
  return { ok: 0, is_logged_in: false };
}
async function getTeacher() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:7000/get_data/get-teacher", {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    return { ok: 1, teacher: response.data.teacher };
  } catch (error) {
  }
}
async function getUserTeacher() {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return { is_logged_in: false };
    }
    const response = await axios.get("http://localhost:7000/get_data/get-user-by-teacher", {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    const students = response.data.students;
    const studentCounts = response.data.studentCounts;
    return { ok: 1, students, studentCounts };
  } catch (error) {
    console.error("Error fetching user:", error);
  }
  return { ok: 0, is_logged_in: false };
}
async function getWeeks() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:7000/get_data/weeks", {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    if (Array.isArray(response.data.weeks)) {
      return { ok: 1, weeks: response.data.weeks };
    }
    return { ok: 1, weeks: [response.data.weeks], weekColumns: response.data.weekColumns };
  } catch (error) {
    console.error("Error fetching weeks:", error);
    return { ok: 0, weeks: [] };
  }
}
async function getCheckLine(week_id, day_id) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:7000/get_data/check-lines", {
      headers: {
        authorization: `Bearer ${token}`
      },
      params: {
        week_id,
        day_id
      }
    });
    if (Array.isArray(response.data.check_lines)) {
      return { ok: 1, check_lines: response.data.check_lines, check_lines_user: response.data.check_lines_user };
    }
    return { ok: 1, check_lines: [response.data.check_lines], check_lines_user: [response.data.check_lines_user] };
  } catch (error) {
    return { ok: 0, check_lines: [] };
  }
}
async function getCheckLineWeekDay(week_id, day_id) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:7000/get_data/check-lines-by-week-day", {
      headers: {
        authorization: `Bearer ${token}`
      },
      params: {
        week_id,
        day_id
      }
    });
    console.log(response.data.check_lines_by_id);
    return { ok: 1, check_lines_by_id: response.data.check_lines_by_id };
  } catch (error) {
    console.error("Error fetching weeks:", error);
    return { ok: 0, check_lines: [] };
  }
}
async function getCheckLineById(student_id) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:7000/get_data/check-lines-by-id", {
      headers: {
        authorization: `Bearer ${token}`
      },
      params: {
        student_id
      }
    });
    const check_lines_by_id = response.data.check_lines_by_id;
    return { ok: 1, check_lines_by_id };
  } catch (error) {
    console.error("Error fetching weeks:", error);
    return { ok: 0, check_lines: [] };
  }
}
async function updatedCheckLine(week_id, day_id, student_id, student_status) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post("http://localhost:7000/updated_data/update-student_status", {
      headers: {
        authorization: `Bearer ${token}`
      },
      params: {
        week_id,
        day_id,
        student_id,
        student_status
      }
    });
    return { ok: 1, massage: "อัพเดตข้อมูลสําเร็จ" };
  } catch (error) {
    console.error("Error fetching weeks:", error);
    return { ok: 0, check_lines: [] };
  }
}
async function getDayByweekId(week_id) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:7000/get_data/days", {
      params: {
        week_id
      },
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    if (Array.isArray(response.data.days)) {
      return { ok: 1, days: response.data.days };
    }
    return { ok: 1, days: [response.data.days], dayColumns: response.data.dayColumns };
  } catch (error) {
    console.error("Error fetching weeks:", error);
    return { ok: 0, days: [] };
  }
}
async function percentageIineup() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:7000/get_data/percentage-lineup", {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    const count = response.data.count;
    const columns = response.data.columns;
    return { ok: 1, count, columns };
  } catch (error) {
    return { ok: 0, count: [], columns: [] };
  }
}
async function percentageIineupTeacher() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:7000/get_data/percentage-lineup-teacher", {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    const studentCounts = response.data.studentCounts;
    return { ok: 1, studentCounts };
  } catch (error) {
    console.error("Error fetching weeks:", error);
    return { ok: 0, studentCounts: [] };
  }
}
const VAlertTitle = createSimpleFunctional("v-alert-title");
const allowedTypes = ["success", "info", "warning", "error"];
const makeVAlertProps = propsFactory({
  border: {
    type: [Boolean, String],
    validator: (val) => {
      return typeof val === "boolean" || ["top", "end", "bottom", "start"].includes(val);
    }
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: IconValue,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: true
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (val) => allowedTypes.includes(val)
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "VAlert");
const VAlert = genericComponent()({
  name: "VAlert",
  props: makeVAlertProps(),
  emits: {
    "click:close": (e) => true,
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const icon = computed(() => {
      if (props.icon === false) return void 0;
      if (!props.type) return props.icon;
      return props.icon ?? `$${props.type}`;
    });
    const variantProps = computed(() => ({
      color: props.color ?? props.type,
      variant: props.variant
    }));
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(variantProps);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "borderColor"));
    const {
      t
    } = useLocale();
    const closeProps = computed(() => ({
      "aria-label": t(props.closeLabel),
      onClick(e) {
        isActive.value = false;
        emit("click:close", e);
      }
    }));
    return () => {
      const hasPrepend = !!(slots.prepend || icon.value);
      const hasTitle = !!(slots.title || props.title);
      const hasClose = !!(slots.close || props.closable);
      return isActive.value && createVNode(props.tag, {
        "class": ["v-alert", props.border && {
          "v-alert--border": !!props.border,
          [`v-alert--border-${props.border === true ? "start" : props.border}`]: true
        }, {
          "v-alert--prominent": props.prominent
        }, themeClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
        "role": "alert"
      }, {
        default: () => {
          var _a, _b;
          return [genOverlays(false, "v-alert"), props.border && createVNode("div", {
            "key": "border",
            "class": ["v-alert__border", textColorClasses.value],
            "style": textColorStyles.value
          }, null), hasPrepend && createVNode("div", {
            "key": "prepend",
            "class": "v-alert__prepend"
          }, [!slots.prepend ? createVNode(VIcon, {
            "key": "prepend-icon",
            "density": props.density,
            "icon": icon.value,
            "size": props.prominent ? 44 : 28
          }, null) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !icon.value,
            "defaults": {
              VIcon: {
                density: props.density,
                icon: icon.value,
                size: props.prominent ? 44 : 28
              }
            }
          }, slots.prepend)]), createVNode("div", {
            "class": "v-alert__content"
          }, [hasTitle && createVNode(VAlertTitle, {
            "key": "title"
          }, {
            default: () => {
              var _a2;
              return [((_a2 = slots.title) == null ? void 0 : _a2.call(slots)) ?? props.title];
            }
          }), ((_a = slots.text) == null ? void 0 : _a.call(slots)) ?? props.text, (_b = slots.default) == null ? void 0 : _b.call(slots)]), slots.append && createVNode("div", {
            "key": "append",
            "class": "v-alert__append"
          }, [slots.append()]), hasClose && createVNode("div", {
            "key": "close",
            "class": "v-alert__close"
          }, [!slots.close ? createVNode(VBtn, mergeProps({
            "key": "close-btn",
            "icon": props.closeIcon,
            "size": "x-small",
            "variant": "text"
          }, closeProps.value), null) : createVNode(VDefaultsProvider, {
            "key": "close-defaults",
            "defaults": {
              VBtn: {
                icon: props.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var _a2;
              return [(_a2 = slots.close) == null ? void 0 : _a2.call(slots, {
                props: closeProps.value
              })];
            }
          })])];
        }
      });
    };
  }
});
export {
  VAlert as V,
  getTeacher as a,
  getDayByweekId as b,
  getUserTeacher as c,
  getCheckLineWeekDay as d,
  getWeeks as e,
  getCheckLine as f,
  getUser as g,
  getCheckLineById as h,
  percentageIineupTeacher as i,
  percentageIineup as p,
  updatedCheckLine as u
};
//# sourceMappingURL=VAlert-BV4vVzt_.js.map
