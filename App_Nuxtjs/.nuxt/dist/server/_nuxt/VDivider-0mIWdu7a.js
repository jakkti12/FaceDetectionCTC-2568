import { toRef, computed, createVNode } from "vue";
import { m as makeComponentProps, s as useTextColor, c as useRender } from "./VBtn-BQh1DFk2.js";
import { p as propsFactory, s as makeThemeProps, g as genericComponent, t as provideTheme, x as convertToUnit } from "../server.mjs";
const makeVDividerProps = propsFactory({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...makeComponentProps(),
  ...makeThemeProps()
}, "VDivider");
const VDivider = genericComponent()({
  name: "VDivider",
  props: makeVDividerProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    const dividerStyles = computed(() => {
      const styles = {};
      if (props.length) {
        styles[props.vertical ? "height" : "width"] = convertToUnit(props.length);
      }
      if (props.thickness) {
        styles[props.vertical ? "borderRightWidth" : "borderTopWidth"] = convertToUnit(props.thickness);
      }
      return styles;
    });
    useRender(() => {
      const divider = createVNode("hr", {
        "class": [{
          "v-divider": true,
          "v-divider--inset": props.inset,
          "v-divider--vertical": props.vertical
        }, themeClasses.value, textColorClasses.value, props.class],
        "style": [dividerStyles.value, textColorStyles.value, {
          "--v-border-opacity": props.opacity
        }, props.style],
        "aria-orientation": !attrs.role || attrs.role === "separator" ? props.vertical ? "vertical" : "horizontal" : void 0,
        "role": `${attrs.role || "separator"}`
      }, null);
      if (!slots.default) return divider;
      return createVNode("div", {
        "class": ["v-divider__wrapper", {
          "v-divider__wrapper--vertical": props.vertical,
          "v-divider__wrapper--inset": props.inset
        }]
      }, [divider, createVNode("div", {
        "class": "v-divider__content"
      }, [slots.default()]), divider]);
    });
    return {};
  }
});
export {
  VDivider as V
};
//# sourceMappingURL=VDivider-0mIWdu7a.js.map
