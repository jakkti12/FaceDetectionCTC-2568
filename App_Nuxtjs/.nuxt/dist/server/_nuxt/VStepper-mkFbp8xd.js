import { createVNode, computed, withDirectives, resolveDirective, ref, shallowRef, watch, provide, inject, mergeProps, vShow, nextTick, toRef, toRefs, Fragment } from "vue";
import { c as useRender, e as VDefaultsProvider, d as VBtn, P as makeGroupItemProps, R as Ripple, Q as useGroupItem, t as genOverlays, V as VIcon, m as makeComponentProps, b as makeTagProps, O as useGroup, w as makeBorderProps, a as makeDimensionProps, g as makeElevationProps, h as makeLocationProps, i as makePositionProps, j as makeRoundedProps, v as useBackgroundColor, y as useBorder, u as useDimension, o as useElevation, p as useLocation, q as usePosition, r as useRounded, N as makeGroupProps } from "./VBtn-BQh1DFk2.js";
import { p as propsFactory, g as genericComponent, v as useLocale, af as keys, s as makeThemeProps, t as provideTheme, e as useRtl, o as omit, h as useProxiedModel, x as convertToUnit, R as makeDisplayProps, ad as only, z as useDisplay, L as getPropertyFromItem, y as provideDefaults } from "../server.mjs";
import { c as createSimpleFunctional } from "./createSimpleFunctional-34w8xNDu.js";
import { f as VAvatar, m as makeLazyProps, u as useLazy } from "./lazy-C5DRqCjO.js";
import { u as useSsrBoot } from "./ssrBoot-BtvJZs44.js";
import { M as MaybeTransition } from "./forwardRefs-B2cVIy3B.js";
import { V as VDivider } from "./VDivider-0mIWdu7a.js";
const VStepperSymbol = Symbol.for("vuetify:v-stepper");
const makeVStepperActionsProps = propsFactory({
  color: String,
  disabled: {
    type: [Boolean, String],
    default: false
  },
  prevText: {
    type: String,
    default: "$vuetify.stepper.prev"
  },
  nextText: {
    type: String,
    default: "$vuetify.stepper.next"
  }
}, "VStepperActions");
const VStepperActions = genericComponent()({
  name: "VStepperActions",
  props: makeVStepperActionsProps(),
  emits: {
    "click:prev": () => true,
    "click:next": () => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    function onClickPrev() {
      emit("click:prev");
    }
    function onClickNext() {
      emit("click:next");
    }
    useRender(() => {
      const prevSlotProps = {
        onClick: onClickPrev
      };
      const nextSlotProps = {
        onClick: onClickNext
      };
      return createVNode("div", {
        "class": "v-stepper-actions"
      }, [createVNode(VDefaultsProvider, {
        "defaults": {
          VBtn: {
            disabled: ["prev", true].includes(props.disabled),
            text: t(props.prevText),
            variant: "text"
          }
        }
      }, {
        default: () => {
          var _a;
          return [((_a = slots.prev) == null ? void 0 : _a.call(slots, {
            props: prevSlotProps
          })) ?? createVNode(VBtn, prevSlotProps, null)];
        }
      }), createVNode(VDefaultsProvider, {
        "defaults": {
          VBtn: {
            color: props.color,
            disabled: ["next", true].includes(props.disabled),
            text: t(props.nextText),
            variant: "tonal"
          }
        }
      }, {
        default: () => {
          var _a;
          return [((_a = slots.next) == null ? void 0 : _a.call(slots, {
            props: nextSlotProps
          })) ?? createVNode(VBtn, nextSlotProps, null)];
        }
      })]);
    });
    return {};
  }
});
const VStepperHeader = createSimpleFunctional("v-stepper-header");
const makeStepperItemProps = propsFactory({
  color: String,
  title: String,
  subtitle: String,
  complete: Boolean,
  completeIcon: {
    type: String,
    default: "$complete"
  },
  editable: Boolean,
  editIcon: {
    type: String,
    default: "$edit"
  },
  error: Boolean,
  errorIcon: {
    type: String,
    default: "$error"
  },
  icon: String,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  rules: {
    type: Array,
    default: () => []
  }
}, "StepperItem");
const makeVStepperItemProps = propsFactory({
  ...makeStepperItemProps(),
  ...makeGroupItemProps()
}, "VStepperItem");
const VStepperItem = genericComponent()({
  name: "VStepperItem",
  directives: {
    Ripple
  },
  props: makeVStepperItemProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const group = useGroupItem(props, VStepperSymbol, true);
    const step = computed(() => (group == null ? void 0 : group.value.value) ?? props.value);
    const isValid = computed(() => props.rules.every((handler) => handler() === true));
    const isClickable = computed(() => !props.disabled && props.editable);
    const canEdit = computed(() => !props.disabled && props.editable);
    const hasError = computed(() => props.error || !isValid.value);
    const hasCompleted = computed(() => props.complete || props.rules.length > 0 && isValid.value);
    const icon = computed(() => {
      if (hasError.value) return props.errorIcon;
      if (hasCompleted.value) return props.completeIcon;
      if (group.isSelected.value && props.editable) return props.editIcon;
      return props.icon;
    });
    const slotProps = computed(() => ({
      canEdit: canEdit.value,
      hasError: hasError.value,
      hasCompleted: hasCompleted.value,
      title: props.title,
      subtitle: props.subtitle,
      step: step.value,
      value: props.value
    }));
    useRender(() => {
      var _a, _b, _c;
      const hasColor = (!group || group.isSelected.value || hasCompleted.value || canEdit.value) && !hasError.value && !props.disabled;
      const hasTitle = !!(props.title != null || slots.title);
      const hasSubtitle = !!(props.subtitle != null || slots.subtitle);
      function onClick() {
        group == null ? void 0 : group.toggle();
      }
      return withDirectives(createVNode("button", {
        "class": ["v-stepper-item", {
          "v-stepper-item--complete": hasCompleted.value,
          "v-stepper-item--disabled": props.disabled,
          "v-stepper-item--error": hasError.value
        }, group == null ? void 0 : group.selectedClass.value],
        "disabled": !props.editable,
        "onClick": onClick
      }, [isClickable.value && genOverlays(true, "v-stepper-item"), createVNode(VAvatar, {
        "key": "stepper-avatar",
        "class": "v-stepper-item__avatar",
        "color": hasColor ? props.color : void 0,
        "size": 24
      }, {
        default: () => {
          var _a2;
          return [((_a2 = slots.icon) == null ? void 0 : _a2.call(slots, slotProps.value)) ?? (icon.value ? createVNode(VIcon, {
            "icon": icon.value
          }, null) : step.value)];
        }
      }), createVNode("div", {
        "class": "v-stepper-item__content"
      }, [hasTitle && createVNode("div", {
        "key": "title",
        "class": "v-stepper-item__title"
      }, [((_a = slots.title) == null ? void 0 : _a.call(slots, slotProps.value)) ?? props.title]), hasSubtitle && createVNode("div", {
        "key": "subtitle",
        "class": "v-stepper-item__subtitle"
      }, [((_b = slots.subtitle) == null ? void 0 : _b.call(slots, slotProps.value)) ?? props.subtitle]), (_c = slots.default) == null ? void 0 : _c.call(slots, slotProps.value)])]), [[resolveDirective("ripple"), props.ripple && props.editable, null]]);
    });
    return {};
  }
});
const handleGesture = (wrapper) => {
  const {
    touchstartX,
    touchendX,
    touchstartY,
    touchendY
  } = wrapper;
  const dirRatio = 0.5;
  const minDistance = 16;
  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;
  if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
    wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
    wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
  }
  if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
    wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
    wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
  }
};
function touchstart(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;
  (_a = wrapper.start) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function touchend(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;
  (_a = wrapper.end) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
  handleGesture(wrapper);
}
function touchmove(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;
  (_a = wrapper.move) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function createHandlers() {
  let value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };
  return {
    touchstart: (e) => touchstart(e, wrapper),
    touchend: (e) => touchend(e, wrapper),
    touchmove: (e) => touchmove(e, wrapper)
  };
}
function mounted(el, binding) {
  var _a;
  const value = binding.value;
  const target = (value == null ? void 0 : value.parent) ? el.parentElement : el;
  const options = (value == null ? void 0 : value.options) ?? {
    passive: true
  };
  const uid = (_a = binding.instance) == null ? void 0 : _a.$.uid;
  if (!target || !uid) return;
  const handlers = createHandlers(binding.value);
  target._touchHandlers = target._touchHandlers ?? /* @__PURE__ */ Object.create(null);
  target._touchHandlers[uid] = handlers;
  keys(handlers).forEach((eventName) => {
    target.addEventListener(eventName, handlers[eventName], options);
  });
}
function unmounted(el, binding) {
  var _a, _b;
  const target = ((_a = binding.value) == null ? void 0 : _a.parent) ? el.parentElement : el;
  const uid = (_b = binding.instance) == null ? void 0 : _b.$.uid;
  if (!(target == null ? void 0 : target._touchHandlers) || !uid) return;
  const handlers = target._touchHandlers[uid];
  keys(handlers).forEach((eventName) => {
    target.removeEventListener(eventName, handlers[eventName]);
  });
  delete target._touchHandlers[uid];
}
const Touch = {
  mounted,
  unmounted
};
const VWindowSymbol = Symbol.for("vuetify:v-window");
const VWindowGroupSymbol = Symbol.for("vuetify:v-window-group");
const makeVWindowProps = propsFactory({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (v) => typeof v === "boolean" || v === "hover"
  },
  touch: {
    type: [Object, Boolean],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  ...makeComponentProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VWindow");
const VWindow = genericComponent()({
  name: "VWindow",
  directives: {
    Touch
  },
  props: makeVWindowProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      isRtl
    } = useRtl();
    const {
      t
    } = useLocale();
    const group = useGroup(props, VWindowGroupSymbol);
    const rootRef = ref();
    const isRtlReverse = computed(() => isRtl.value ? !props.reverse : props.reverse);
    const isReversed = shallowRef(false);
    const transition = computed(() => {
      const axis = props.direction === "vertical" ? "y" : "x";
      const reverse = isRtlReverse.value ? !isReversed.value : isReversed.value;
      const direction = reverse ? "-reverse" : "";
      return `v-window-${axis}${direction}-transition`;
    });
    const transitionCount = shallowRef(0);
    const transitionHeight = ref(void 0);
    const activeIndex = computed(() => {
      return group.items.value.findIndex((item) => group.selected.value.includes(item.id));
    });
    watch(activeIndex, (newVal, oldVal) => {
      const itemsLength = group.items.value.length;
      const lastIndex = itemsLength - 1;
      if (itemsLength <= 2) {
        isReversed.value = newVal < oldVal;
      } else if (newVal === lastIndex && oldVal === 0) {
        isReversed.value = true;
      } else if (newVal === 0 && oldVal === lastIndex) {
        isReversed.value = false;
      } else {
        isReversed.value = newVal < oldVal;
      }
    });
    provide(VWindowSymbol, {
      transition,
      isReversed,
      transitionCount,
      transitionHeight,
      rootRef
    });
    const canMoveBack = computed(() => props.continuous || activeIndex.value !== 0);
    const canMoveForward = computed(() => props.continuous || activeIndex.value !== group.items.value.length - 1);
    function prev() {
      canMoveBack.value && group.prev();
    }
    function next() {
      canMoveForward.value && group.next();
    }
    const arrows = computed(() => {
      const arrows2 = [];
      const prevProps = {
        icon: isRtl.value ? props.nextIcon : props.prevIcon,
        class: `v-window__${isRtlReverse.value ? "right" : "left"}`,
        onClick: group.prev,
        "aria-label": t("$vuetify.carousel.prev")
      };
      arrows2.push(canMoveBack.value ? slots.prev ? slots.prev({
        props: prevProps
      }) : createVNode(VBtn, prevProps, null) : createVNode("div", null, null));
      const nextProps = {
        icon: isRtl.value ? props.prevIcon : props.nextIcon,
        class: `v-window__${isRtlReverse.value ? "left" : "right"}`,
        onClick: group.next,
        "aria-label": t("$vuetify.carousel.next")
      };
      arrows2.push(canMoveForward.value ? slots.next ? slots.next({
        props: nextProps
      }) : createVNode(VBtn, nextProps, null) : createVNode("div", null, null));
      return arrows2;
    });
    const touchOptions = computed(() => {
      if (props.touch === false) return props.touch;
      const options = {
        left: () => {
          isRtlReverse.value ? prev() : next();
        },
        right: () => {
          isRtlReverse.value ? next() : prev();
        },
        start: (_ref2) => {
          let {
            originalEvent
          } = _ref2;
          originalEvent.stopPropagation();
        }
      };
      return {
        ...options,
        ...props.touch === true ? {} : props.touch
      };
    });
    useRender(() => withDirectives(createVNode(props.tag, {
      "ref": rootRef,
      "class": ["v-window", {
        "v-window--show-arrows-on-hover": props.showArrows === "hover"
      }, themeClasses.value, props.class],
      "style": props.style
    }, {
      default: () => {
        var _a, _b;
        return [createVNode("div", {
          "class": "v-window__container",
          "style": {
            height: transitionHeight.value
          }
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
          group
        }), props.showArrows !== false && createVNode("div", {
          "class": "v-window__controls"
        }, [arrows.value])]), (_b = slots.additional) == null ? void 0 : _b.call(slots, {
          group
        })];
      }
    }), [[resolveDirective("touch"), touchOptions.value]]));
    return {
      group
    };
  }
});
const makeVStepperWindowProps = propsFactory({
  ...omit(makeVWindowProps(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VStepperWindow");
const VStepperWindow = genericComponent()({
  name: "VStepperWindow",
  props: makeVStepperWindowProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const group = inject(VStepperSymbol, null);
    const _model = useProxiedModel(props, "modelValue");
    const model = computed({
      get() {
        var _a;
        if (_model.value != null || !group) return _model.value;
        return (_a = group.items.value.find((item) => group.selected.value.includes(item.id))) == null ? void 0 : _a.value;
      },
      set(val) {
        _model.value = val;
      }
    });
    useRender(() => {
      const windowProps = VWindow.filterProps(props);
      return createVNode(VWindow, mergeProps({
        "_as": "VStepperWindow"
      }, windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-stepper-window", props.class],
        "style": props.style,
        "mandatory": false,
        "touch": false
      }), slots);
    });
    return {};
  }
});
const makeVWindowItemProps = propsFactory({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...makeComponentProps(),
  ...makeGroupItemProps(),
  ...makeLazyProps()
}, "VWindowItem");
const VWindowItem = genericComponent()({
  name: "VWindowItem",
  directives: {
    Touch
  },
  props: makeVWindowItemProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const window = inject(VWindowSymbol);
    const groupItem = useGroupItem(props, VWindowGroupSymbol);
    const {
      isBooted
    } = useSsrBoot();
    if (!window || !groupItem) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const isTransitioning = shallowRef(false);
    const hasTransition = computed(() => isBooted.value && (window.isReversed.value ? props.reverseTransition !== false : props.transition !== false));
    function onAfterTransition() {
      if (!isTransitioning.value || !window) {
        return;
      }
      isTransitioning.value = false;
      if (window.transitionCount.value > 0) {
        window.transitionCount.value -= 1;
        if (window.transitionCount.value === 0) {
          window.transitionHeight.value = void 0;
        }
      }
    }
    function onBeforeTransition() {
      var _a;
      if (isTransitioning.value || !window) {
        return;
      }
      isTransitioning.value = true;
      if (window.transitionCount.value === 0) {
        window.transitionHeight.value = convertToUnit((_a = window.rootRef.value) == null ? void 0 : _a.clientHeight);
      }
      window.transitionCount.value += 1;
    }
    function onTransitionCancelled() {
      onAfterTransition();
    }
    function onEnterTransition(el) {
      if (!isTransitioning.value) {
        return;
      }
      nextTick(() => {
        if (!hasTransition.value || !isTransitioning.value || !window) {
          return;
        }
        window.transitionHeight.value = convertToUnit(el.clientHeight);
      });
    }
    const transition = computed(() => {
      const name = window.isReversed.value ? props.reverseTransition : props.transition;
      return !hasTransition.value ? false : {
        name: typeof name !== "string" ? window.transition.value : name,
        onBeforeEnter: onBeforeTransition,
        onAfterEnter: onAfterTransition,
        onEnterCancelled: onTransitionCancelled,
        onBeforeLeave: onBeforeTransition,
        onAfterLeave: onAfterTransition,
        onLeaveCancelled: onTransitionCancelled,
        onEnter: onEnterTransition
      };
    });
    const {
      hasContent
    } = useLazy(props, groupItem.isSelected);
    useRender(() => createVNode(MaybeTransition, {
      "transition": transition.value,
      "disabled": !isBooted.value
    }, {
      default: () => {
        var _a;
        return [withDirectives(createVNode("div", {
          "class": ["v-window-item", groupItem.selectedClass.value, props.class],
          "style": props.style
        }, [hasContent.value && ((_a = slots.default) == null ? void 0 : _a.call(slots))]), [[vShow, groupItem.isSelected.value]])];
      }
    }));
    return {
      groupItem
    };
  }
});
const makeVStepperWindowItemProps = propsFactory({
  ...makeVWindowItemProps()
}, "VStepperWindowItem");
const VStepperWindowItem = genericComponent()({
  name: "VStepperWindowItem",
  props: makeVStepperWindowItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const windowItemProps = VWindowItem.filterProps(props);
      return createVNode(VWindowItem, mergeProps({
        "_as": "VStepperWindowItem"
      }, windowItemProps, {
        "class": ["v-stepper-window-item", props.class],
        "style": props.style
      }), slots);
    });
    return {};
  }
});
const makeVSheetProps = propsFactory({
  color: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VSheet");
const VSheet = genericComponent()({
  name: "VSheet",
  props: makeVSheetProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      borderClasses
    } = useBorder(props);
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
    useRender(() => createVNode(props.tag, {
      "class": ["v-sheet", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, props.class],
      "style": [backgroundColorStyles.value, dimensionStyles.value, locationStyles.value, props.style]
    }, slots));
    return {};
  }
});
const makeStepperProps = propsFactory({
  altLabels: Boolean,
  bgColor: String,
  completeIcon: String,
  editIcon: String,
  editable: Boolean,
  errorIcon: String,
  hideActions: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: String,
    default: "title"
  },
  itemValue: {
    type: String,
    default: "value"
  },
  nonLinear: Boolean,
  flat: Boolean,
  ...makeDisplayProps()
}, "Stepper");
const makeVStepperProps = propsFactory({
  ...makeStepperProps(),
  ...makeGroupProps({
    mandatory: "force",
    selectedClass: "v-stepper-item--selected"
  }),
  ...makeVSheetProps(),
  ...only(makeVStepperActionsProps(), ["prevText", "nextText"])
}, "VStepper");
const VStepper = genericComponent()({
  name: "VStepper",
  props: makeVStepperProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      items: _items,
      next,
      prev,
      selected
    } = useGroup(props, VStepperSymbol);
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const {
      completeIcon,
      editIcon,
      errorIcon,
      color,
      editable,
      prevText,
      nextText
    } = toRefs(props);
    const items = computed(() => props.items.map((item, index) => {
      const title = getPropertyFromItem(item, props.itemTitle, item);
      const value = getPropertyFromItem(item, props.itemValue, index + 1);
      return {
        title,
        value,
        raw: item
      };
    }));
    const activeIndex = computed(() => {
      return _items.value.findIndex((item) => selected.value.includes(item.id));
    });
    const disabled = computed(() => {
      if (props.disabled) return props.disabled;
      if (activeIndex.value === 0) return "prev";
      if (activeIndex.value === _items.value.length - 1) return "next";
      return false;
    });
    provideDefaults({
      VStepperItem: {
        editable,
        errorIcon,
        completeIcon,
        editIcon,
        prevText,
        nextText
      },
      VStepperActions: {
        color,
        disabled,
        prevText,
        nextText
      }
    });
    useRender(() => {
      const sheetProps = VSheet.filterProps(props);
      const hasHeader = !!(slots.header || props.items.length);
      const hasWindow = props.items.length > 0;
      const hasActions = !props.hideActions && !!(hasWindow || slots.actions);
      return createVNode(VSheet, mergeProps(sheetProps, {
        "color": props.bgColor,
        "class": ["v-stepper", {
          "v-stepper--alt-labels": props.altLabels,
          "v-stepper--flat": props.flat,
          "v-stepper--non-linear": props.nonLinear,
          "v-stepper--mobile": mobile.value
        }, displayClasses.value, props.class],
        "style": props.style
      }), {
        default: () => {
          var _a, _b;
          return [hasHeader && createVNode(VStepperHeader, {
            "key": "stepper-header"
          }, {
            default: () => [items.value.map((_ref2, index) => {
              let {
                raw,
                ...item
              } = _ref2;
              return createVNode(Fragment, null, [!!index && createVNode(VDivider, null, null), createVNode(VStepperItem, item, {
                default: slots[`header-item.${item.value}`] ?? slots.header,
                icon: slots.icon,
                title: slots.title,
                subtitle: slots.subtitle
              })]);
            })]
          }), hasWindow && createVNode(VStepperWindow, {
            "key": "stepper-window"
          }, {
            default: () => [items.value.map((item) => createVNode(VStepperWindowItem, {
              "value": item.value
            }, {
              default: () => {
                var _a2, _b2;
                return ((_a2 = slots[`item.${item.value}`]) == null ? void 0 : _a2.call(slots, item)) ?? ((_b2 = slots.item) == null ? void 0 : _b2.call(slots, item));
              }
            }))]
          }), (_a = slots.default) == null ? void 0 : _a.call(slots, {
            prev,
            next
          }), hasActions && (((_b = slots.actions) == null ? void 0 : _b.call(slots, {
            next,
            prev
          })) ?? createVNode(VStepperActions, {
            "key": "stepper-actions",
            "onClick:prev": prev,
            "onClick:next": next
          }, slots))];
        }
      });
    });
    return {
      prev,
      next
    };
  }
});
export {
  VStepper as V
};
//# sourceMappingURL=VStepper-mkFbp8xd.js.map
