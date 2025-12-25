import { jsx as l, jsxs as g } from "react/jsx-runtime";
import * as c from "react";
import { cva as x } from "class-variance-authority";
import { c as d, S as i } from "./textarea-Bt2ohije.js";
import { a as dt, B as ot, F as st, I as nt, L as it, T as ct, d as ut, b as mt, f as ft, g as gt, h as xt } from "./textarea-Bt2ohije.js";
import * as u from "@radix-ui/react-avatar";
import { E as pt, d as ht, c as wt, a as Nt, e as vt, b as yt, S as kt } from "./skeleton-DV-2RvmZ.js";
import { Loader2Icon as b } from "lucide-react";
import { D as Tt, a as zt, b as Ct, f as Et, c as St, t as Rt } from "./format-C1ar8L1A.js";
import { toast as s } from "sonner";
const p = x(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), h = c.forwardRef(({ className: a, variant: t, ...r }, e) => /* @__PURE__ */ l("div", { ref: e, role: "alert", className: d(p({ variant: t }), a), ...r }));
h.displayName = "Alert";
const w = c.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ l(
    "h5",
    {
      ref: r,
      className: d("mb-1 font-medium leading-none tracking-tight", a),
      ...t
    }
  )
);
w.displayName = "AlertTitle";
const N = c.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ l("div", { ref: r, className: d("text-sm [&_p]:leading-relaxed", a), ...t }));
N.displayName = "AlertDescription";
function z({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    u.Root,
    {
      "data-slot": "avatar",
      className: d("relative flex size-8 shrink-0 overflow-hidden rounded-full", a),
      ...t
    }
  );
}
function C({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    u.Image,
    {
      "data-slot": "avatar-image",
      className: d("aspect-square size-full", a),
      ...t
    }
  );
}
function E({
  className: a,
  ...t
}) {
  return /* @__PURE__ */ l(
    u.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: d("bg-muted flex size-full items-center justify-center rounded-full", a),
      ...t
    }
  );
}
function S({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "card",
      className: d(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        a
      ),
      ...t
    }
  );
}
function R({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "card-header",
      className: d(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        a
      ),
      ...t
    }
  );
}
function _({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "card-title",
      className: d("leading-none font-semibold", a),
      ...t
    }
  );
}
function F({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "card-description",
      className: d("text-muted-foreground text-sm", a),
      ...t
    }
  );
}
function D({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "card-action",
      className: d("col-start-2 row-span-2 row-start-1 self-start justify-self-end", a),
      ...t
    }
  );
}
function I({ className: a, ...t }) {
  return /* @__PURE__ */ l("div", { "data-slot": "card-content", className: d("px-6", a), ...t });
}
function V({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "card-footer",
      className: d("flex items-center px-6 [.border-t]:pt-6", a),
      ...t
    }
  );
}
function $({ className: a, maxWidth: t = "xl", ...r }) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: d(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        {
          "max-w-screen-sm": t === "sm",
          "max-w-screen-md": t === "md",
          "max-w-screen-lg": t === "lg",
          "max-w-screen-xl": t === "xl",
          "max-w-screen-2xl": t === "2xl",
          "max-w-full": t === "full"
        },
        a
      ),
      ...r
    }
  );
}
function j({
  className: a,
  label: t,
  labelPosition: r = "center",
  orientation: e = "horizontal",
  ...o
}) {
  return t ? /* @__PURE__ */ g(
    "div",
    {
      className: d(
        "flex items-center",
        e === "horizontal" ? "w-full" : "h-full flex-col",
        a
      ),
      ...o,
      children: [
        r !== "left" && /* @__PURE__ */ l(
          i,
          {
            orientation: e,
            className: d(e === "horizontal" ? "flex-1" : "flex-1 w-px")
          }
        ),
        /* @__PURE__ */ l(
          "div",
          {
            className: d(
              "px-3 text-sm text-muted-foreground",
              e === "vertical" && "py-3 px-0"
            ),
            children: t
          }
        ),
        r !== "right" && /* @__PURE__ */ l(
          i,
          {
            orientation: e,
            className: d(e === "horizontal" ? "flex-1" : "flex-1 w-px")
          }
        )
      ]
    }
  ) : /* @__PURE__ */ l(i, { orientation: e, className: a, ...o });
}
function P({ className: a, cols: t = 1, gap: r = 4, responsive: e, ...o }) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: d(
        "grid",
        {
          "grid-cols-1": t === 1,
          "grid-cols-2": t === 2,
          "grid-cols-3": t === 3,
          "grid-cols-4": t === 4,
          "grid-cols-5": t === 5,
          "grid-cols-6": t === 6,
          "grid-cols-12": t === 12
        },
        e?.sm && {
          "sm:grid-cols-1": e.sm === 1,
          "sm:grid-cols-2": e.sm === 2,
          "sm:grid-cols-3": e.sm === 3,
          "sm:grid-cols-4": e.sm === 4,
          "sm:grid-cols-5": e.sm === 5,
          "sm:grid-cols-6": e.sm === 6,
          "sm:grid-cols-12": e.sm === 12
        },
        e?.md && {
          "md:grid-cols-1": e.md === 1,
          "md:grid-cols-2": e.md === 2,
          "md:grid-cols-3": e.md === 3,
          "md:grid-cols-4": e.md === 4,
          "md:grid-cols-5": e.md === 5,
          "md:grid-cols-6": e.md === 6,
          "md:grid-cols-12": e.md === 12
        },
        e?.lg && {
          "lg:grid-cols-1": e.lg === 1,
          "lg:grid-cols-2": e.lg === 2,
          "lg:grid-cols-3": e.lg === 3,
          "lg:grid-cols-4": e.lg === 4,
          "lg:grid-cols-5": e.lg === 5,
          "lg:grid-cols-6": e.lg === 6,
          "lg:grid-cols-12": e.lg === 12
        },
        e?.xl && {
          "xl:grid-cols-1": e.xl === 1,
          "xl:grid-cols-2": e.xl === 2,
          "xl:grid-cols-3": e.xl === 3,
          "xl:grid-cols-4": e.xl === 4,
          "xl:grid-cols-5": e.xl === 5,
          "xl:grid-cols-6": e.xl === 6,
          "xl:grid-cols-12": e.xl === 12
        },
        {
          "gap-0": r === 0,
          "gap-1": r === 1,
          "gap-2": r === 2,
          "gap-3": r === 3,
          "gap-4": r === 4,
          "gap-5": r === 5,
          "gap-6": r === 6,
          "gap-8": r === 8,
          "gap-10": r === 10,
          "gap-12": r === 12
        },
        a
      ),
      ...o
    }
  );
}
function B({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "kbd",
    {
      "data-slot": "kbd",
      className: d(
        "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        a
      ),
      ...t
    }
  );
}
function L({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "kbd",
    {
      "data-slot": "kbd-group",
      className: d("inline-flex items-center gap-1", a),
      ...t
    }
  );
}
function H({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    b,
    {
      role: "status",
      "aria-label": "Loading",
      className: d("size-4 animate-spin", a),
      ...t
    }
  );
}
function G({
  className: a,
  direction: t = "column",
  spacing: r = 2,
  align: e,
  justify: o,
  wrap: m = !1,
  ...f
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: d(
        "flex",
        t === "row" ? "flex-row" : "flex-col",
        m && "flex-wrap",
        {
          "gap-0": r === 0,
          "gap-1": r === 1,
          "gap-2": r === 2,
          "gap-3": r === 3,
          "gap-4": r === 4,
          "gap-5": r === 5,
          "gap-6": r === 6,
          "gap-8": r === 8,
          "gap-10": r === 10,
          "gap-12": r === 12
        },
        {
          "items-start": e === "start",
          "items-center": e === "center",
          "items-end": e === "end",
          "items-stretch": e === "stretch"
        },
        {
          "justify-start": o === "start",
          "justify-center": o === "center",
          "justify-end": o === "end",
          "justify-between": o === "between",
          "justify-around": o === "around",
          "justify-evenly": o === "evenly"
        },
        a
      ),
      ...f
    }
  );
}
function K({ className: a, ...t }) {
  return /* @__PURE__ */ l("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ l(
    "table",
    {
      "data-slot": "table",
      className: d("w-full caption-bottom text-sm", a),
      ...t
    }
  ) });
}
function M({ className: a, ...t }) {
  return /* @__PURE__ */ l("thead", { "data-slot": "table-header", className: d("[&_tr]:border-b", a), ...t });
}
function O({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "tbody",
    {
      "data-slot": "table-body",
      className: d("[&_tr:last-child]:border-0", a),
      ...t
    }
  );
}
function q({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: d("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", a),
      ...t
    }
  );
}
function U({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "tr",
    {
      "data-slot": "table-row",
      className: d(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        a
      ),
      ...t
    }
  );
}
function X({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "th",
    {
      "data-slot": "table-head",
      className: d(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        a
      ),
      ...t
    }
  );
}
function Z({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "td",
    {
      "data-slot": "table-cell",
      className: d(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        a
      ),
      ...t
    }
  );
}
function J({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "caption",
    {
      "data-slot": "table-caption",
      className: d("text-muted-foreground mt-4 text-sm", a),
      ...t
    }
  );
}
const Q = {
  /**
   * Show a success toast
   */
  success: (a, t) => s.success(a, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show an error toast
   */
  error: (a, t) => s.error(a, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a warning toast
   */
  warning: (a, t) => s.warning(a, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show an info toast
   */
  info: (a, t) => s.info(a, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a default toast
   */
  default: (a, t) => s(a, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a loading toast
   */
  loading: (a, t) => s.loading(a, {
    description: t?.description,
    duration: t?.duration
  }),
  /**
   * Show a promise toast (loading -> success/error)
   */
  promise: (a, t, r) => s.promise(a, {
    loading: t.loading,
    success: t.success,
    error: t.error,
    duration: r?.duration
  }),
  /**
   * Dismiss a toast by ID
   */
  dismiss: (a) => {
    s.dismiss(a);
  },
  /**
   * Dismiss all toasts
   */
  dismissAll: () => {
    s.dismiss();
  }
}, n = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[0-9]{10,11}$/,
  vietnamesePhone: /^(0|\+84)[1-9][0-9]{8,9}$/,
  url: /^https?:\/\/.+/,
  slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  hexColor: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
};
function Y(a) {
  return n.email.test(a);
}
function W(a) {
  return n.phone.test(a);
}
function tt(a) {
  return n.vietnamesePhone.test(a);
}
function at(a) {
  return n.url.test(a);
}
const et = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
};
export {
  h as Alert,
  N as AlertDescription,
  w as AlertTitle,
  z as Avatar,
  E as AvatarFallback,
  C as AvatarImage,
  et as BREAKPOINTS,
  dt as Badge,
  ot as Button,
  S as Card,
  D as CardAction,
  I as CardContent,
  F as CardDescription,
  V as CardFooter,
  R as CardHeader,
  _ as CardTitle,
  $ as Container,
  Tt as DATE_FORMATS,
  j as Divider,
  pt as Empty,
  ht as EmptyContent,
  wt as EmptyDescription,
  Nt as EmptyHeader,
  vt as EmptyMedia,
  yt as EmptyTitle,
  st as FORM_SIZES,
  P as Grid,
  nt as Input,
  B as Kbd,
  L as KbdGroup,
  it as Label,
  n as REGEX,
  i as Separator,
  kt as Skeleton,
  H as Spinner,
  G as Stack,
  K as Table,
  O as TableBody,
  J as TableCaption,
  Z as TableCell,
  q as TableFooter,
  X as TableHead,
  M as TableHeader,
  U as TableRow,
  ct as Textarea,
  ut as badgeVariants,
  mt as buttonVariants,
  d as cn,
  ft as formSizeVariants,
  zt as formatCurrency,
  Ct as formatDate,
  Et as formatFileSize,
  St as formatPhoneNumber,
  gt as get,
  xt as hasValue,
  Q as toast,
  Rt as truncate,
  Y as validateEmail,
  W as validatePhone,
  at as validateURL,
  tt as validateVietnamesePhone
};
//# sourceMappingURL=index-core.mjs.map
