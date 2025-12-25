import { jsx as s, jsxs as x } from "react/jsx-runtime";
import { Slot as m } from "@radix-ui/react-slot";
import { cva as g } from "class-variance-authority";
import "react";
import * as h from "@radix-ui/react-separator";
import * as b from "@radix-ui/react-label";
import { clsx as y } from "clsx";
import { twMerge as w } from "tailwind-merge";
const f = g("", {
  variants: {
    size: {
      xxs: "h-6 text-xs",
      xs: "h-8 text-xs",
      sm: "h-9 text-sm",
      md: "h-10 text-base",
      lg: "h-11 text-base",
      xl: "h-12 text-base",
      xxl: "h-14 text-lg"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), e = {
  xxs: {
    height: "h-6",
    text: "text-xs",
    padding: "px-2 py-1",
    icon: "size-3.5",
    iconButton: "size-6"
  },
  xs: {
    height: "h-8",
    text: "text-xs",
    padding: "px-2.5 py-1.5",
    icon: "size-4",
    iconButton: "size-8"
  },
  sm: {
    height: "h-9",
    text: "text-sm",
    padding: "px-3 py-2",
    icon: "size-5",
    iconButton: "size-9"
  },
  md: {
    height: "h-10",
    text: "text-base",
    padding: "px-4 py-2",
    icon: "size-5",
    iconButton: "size-10"
  },
  lg: {
    height: "h-11",
    text: "text-base",
    padding: "px-4 py-2.5",
    icon: "size-6",
    iconButton: "size-11"
  },
  xl: {
    height: "h-12",
    text: "text-base",
    padding: "px-5 py-3",
    icon: "size-6",
    iconButton: "size-12"
  },
  xxl: {
    height: "h-14",
    text: "text-lg",
    padding: "px-6 py-3.5",
    icon: "size-7",
    iconButton: "size-14"
  }
};
function l(...t) {
  return w(y(t));
}
function E(t, n) {
  const r = n.split(".");
  let i = t;
  for (const d of r) {
    if (i == null || typeof i != "object")
      return;
    i = i[d];
  }
  return i;
}
function L(t) {
  return !(t == null || typeof t == "string" && t.trim() === "");
}
function v({ className: t, ...n }) {
  return /* @__PURE__ */ s(
    b.Root,
    {
      "data-slot": "label",
      className: l(
        "flex items-center gap-2 leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        t
      ),
      ...n
    }
  );
}
const $ = g(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        xxs: `${e.xxs.height} min-w-6 rounded-md gap-1 ${e.xxs.padding} ${e.xxs.text}`,
        xs: `${e.xs.height} min-w-8 rounded-md gap-1 ${e.xs.padding} ${e.xs.text}`,
        sm: `${e.sm.height} min-w-9 rounded-md gap-1.5 ${e.sm.padding}  ${e.sm.text}`,
        md: `${e.md.height} min-w-10 ${e.md.padding} ${e.md.text}`,
        lg: `${e.lg.height} min-w-11 rounded-md ${e.lg.padding} ${e.lg.text}`,
        xl: `${e.xl.height} min-w-12 rounded-md ${e.xl.padding} ${e.xl.text}`,
        xxl: `${e.xxl.height} min-w-14 rounded-md ${e.xxl.padding} ${e.xxl.text}`,
        "2xl": `${e.xxl.height} min-w-14 rounded-md ${e.xxl.padding} ${e.xxl.text}`,
        icon: e.md.iconButton,
        "icon-xxs": e.xxs.iconButton,
        "icon-xs": e.xs.iconButton,
        "icon-sm": e.sm.iconButton,
        "icon-md": e.md.iconButton,
        "icon-lg": e.lg.iconButton,
        "icon-xl": e.xl.iconButton,
        "icon-xxl": e.xxl.iconButton
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
function C({
  className: t,
  variant: n = "default",
  size: r = "md",
  asChild: i = !1,
  ...d
}) {
  return /* @__PURE__ */ s(
    i ? m : "button",
    {
      "data-slot": "button",
      "data-variant": n,
      "data-size": r,
      className: l($({ variant: n, size: r, className: t })),
      ...d
    }
  );
}
function F({
  className: t,
  orientation: n = "horizontal",
  decorative: r = !0,
  ...i
}) {
  return /* @__PURE__ */ s(
    h.Root,
    {
      "data-slot": "separator",
      decorative: r,
      orientation: n,
      className: l(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        t
      ),
      ...i
    }
  );
}
function _({ className: t, type: n, label: r, error: i, required: d, id: a, size: o = "md", ...u }) {
  const c = r || i, p = /* @__PURE__ */ s(
    "input",
    {
      type: n,
      id: a,
      "data-slot": "input",
      "data-size": o,
      "aria-invalid": !!i,
      className: l(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        f({ size: o }),
        o && e[o]?.padding,
        o === "xxs" && "file:h-5 file:text-xs",
        o === "xs" && "file:h-6 file:text-xs",
        o === "sm" && "file:h-7 file:text-xs",
        o === "md" && "file:h-8 file:text-sm",
        o === "lg" && "file:h-9 file:text-sm",
        o === "xl" && "file:h-10 file:text-sm",
        o === "xxl" && "file:h-11 file:text-base",
        i ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        t
      ),
      ...u
    }
  );
  return c ? /* @__PURE__ */ x("div", { className: "flex flex-col gap-1", children: [
    r && /* @__PURE__ */ x(v, { htmlFor: a, children: [
      r,
      d && /* @__PURE__ */ s("span", { className: "text-destructive", children: "*" })
    ] }),
    p,
    i && /* @__PURE__ */ s("div", { className: "text-destructive text-sm", role: "alert", children: i })
  ] }) : p;
}
const k = g(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function I({
  className: t,
  variant: n,
  asChild: r = !1,
  ...i
}) {
  return /* @__PURE__ */ s(r ? m : "span", { "data-slot": "badge", className: l(k({ variant: n }), t), ...i });
}
function O({ className: t, label: n, error: r, required: i, id: d, size: a = "md", ...o }) {
  const u = n || r, c = /* @__PURE__ */ s(
    "textarea",
    {
      id: d,
      "data-slot": "textarea",
      "data-size": a,
      "aria-invalid": !!r,
      className: l(
        "border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content w-full rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50",
        f({ size: a }),
        a && e[a]?.padding,
        a === "xxs" && "min-h-16",
        a === "xs" && "min-h-20",
        a === "sm" && "min-h-24",
        a === "md" && "min-h-28",
        a === "lg" && "min-h-32",
        a === "xl" && "min-h-36",
        a === "xxl" && "min-h-40",
        r ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        t
      ),
      ...o
    }
  );
  return u ? /* @__PURE__ */ x("div", { className: "flex flex-col gap-1", children: [
    n && /* @__PURE__ */ x(v, { htmlFor: d, children: [
      n,
      i && /* @__PURE__ */ s("span", { className: "text-destructive", children: "*" })
    ] }),
    c,
    r && /* @__PURE__ */ s("div", { className: "text-destructive text-sm", role: "alert", children: r })
  ] }) : c;
}
export {
  C as B,
  e as F,
  _ as I,
  v as L,
  F as S,
  O as T,
  I as a,
  $ as b,
  l as c,
  k as d,
  f,
  E as g,
  L as h
};
//# sourceMappingURL=textarea-Bt2ohije.js.map
