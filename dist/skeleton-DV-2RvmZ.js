import { jsx as a } from "react/jsx-runtime";
import { cva as r } from "class-variance-authority";
import { c as n } from "./textarea-Bt2ohije.js";
function d({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty",
      className: n(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        e
      ),
      ...t
    }
  );
}
function c({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-header",
      className: n("flex max-w-sm flex-col items-center gap-2 text-center", e),
      ...t
    }
  );
}
const i = r(
  "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function u({
  className: e,
  variant: t = "default",
  ...s
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": t,
      className: n(i({ variant: t, className: e })),
      ...s
    }
  );
}
function f({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-title",
      className: n("text-lg font-medium tracking-tight", e),
      ...t
    }
  );
}
function p({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-description",
      className: n(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function x({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-content",
      className: n(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        e
      ),
      ...t
    }
  );
}
function y({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "skeleton",
      className: n("bg-accent animate-pulse rounded-md", e),
      ...t
    }
  );
}
export {
  d as E,
  y as S,
  c as a,
  f as b,
  p as c,
  x as d,
  u as e
};
//# sourceMappingURL=skeleton-DV-2RvmZ.js.map
