import { jsx as a, jsxs as d, Fragment as Z } from "react/jsx-runtime";
import { Slot as R } from "@radix-ui/react-slot";
import { cva as D } from "class-variance-authority";
import { c as n, S as O, B, L as ee, I as te, T as be, a as Y } from "./textarea-Bt2ohije.js";
import { P as he, c as ve, d as xe, e as we, f as Ne, g as Ce, h as ye, i as ke, j as ze, C as Se } from "./date-range-picker-D-OnnMm4.js";
import { k as kr, l as zr, a as Sr, D as _r, b as Mr, M as Ir, m as Dr, S as Tr, n as Pr, T as Er } from "./date-range-picker-D-OnnMm4.js";
import _e from "embla-carousel-react";
import { ArrowRight as Me, ArrowLeft as Ie, CheckIcon as K, CircleIcon as ae, ChevronRightIcon as re, X as De, XCircle as Te, ChevronDown as J, XIcon as Pe, PanelLeftIcon as Ee } from "lucide-react";
import * as f from "react";
import { useMemo as Re } from "react";
import * as q from "recharts";
import * as v from "@radix-ui/react-context-menu";
import { Drawer as T } from "vaul";
import * as x from "@radix-ui/react-dropdown-menu";
import { S as Q } from "./skeleton-DV-2RvmZ.js";
import { E as Gr, d as jr, c as Br, a as Lr, e as Or, b as Ar } from "./skeleton-DV-2RvmZ.js";
import * as L from "@radix-ui/react-hover-card";
import * as I from "@radix-ui/react-dialog";
import * as G from "@radix-ui/react-tooltip";
import * as Ge from "@radix-ui/react-toggle";
import * as ne from "@radix-ui/react-toggle-group";
const je = D(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
  {
    variants: {
      orientation: {
        horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
      }
    },
    defaultVariants: {
      orientation: "horizontal"
    }
  }
);
function wt({
  className: e,
  orientation: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "button-group",
      "data-orientation": t,
      className: n(je({ orientation: t }), e),
      ...r
    }
  );
}
function Nt({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? R : "div",
    {
      className: n(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function Ct({
  className: e,
  orientation: t = "vertical",
  ...r
}) {
  return /* @__PURE__ */ a(
    O,
    {
      "data-slot": "button-group-separator",
      orientation: t,
      className: n(
        "bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
        e
      ),
      ...r
    }
  );
}
const oe = f.createContext(null);
function A() {
  const e = f.useContext(oe);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function yt({
  orientation: e = "horizontal",
  opts: t,
  setApi: r,
  plugins: o,
  className: s,
  children: l,
  ...i
}) {
  const [m, u] = _e(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    o
  ), [w, S] = f.useState(!1), [P, h] = f.useState(!1), b = f.useCallback((g) => {
    g && (S(g.canScrollPrev()), h(g.canScrollNext()));
  }, []), C = f.useCallback(() => {
    u?.scrollPrev();
  }, [u]), y = f.useCallback(() => {
    u?.scrollNext();
  }, [u]), p = f.useCallback(
    (g) => {
      g.key === "ArrowLeft" ? (g.preventDefault(), C()) : g.key === "ArrowRight" && (g.preventDefault(), y());
    },
    [C, y]
  );
  return f.useEffect(() => {
    !u || !r || r(u);
  }, [u, r]), f.useEffect(() => {
    if (u)
      return b(u), u.on("reInit", b), u.on("select", b), () => {
        u?.off("select", b);
      };
  }, [u, b]), /* @__PURE__ */ a(
    oe.Provider,
    {
      value: {
        carouselRef: m,
        api: u,
        opts: t,
        orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: C,
        scrollNext: y,
        canScrollPrev: w,
        canScrollNext: P
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          onKeyDownCapture: p,
          className: n("relative", s),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...i,
          children: l
        }
      )
    }
  );
}
function kt({ className: e, ...t }) {
  const { carouselRef: r, orientation: o } = A();
  return /* @__PURE__ */ a("div", { ref: r, className: "overflow-hidden", "data-slot": "carousel-content", children: /* @__PURE__ */ a(
    "div",
    {
      className: n("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t
    }
  ) });
}
function zt({ className: e, ...t }) {
  const { orientation: r } = A();
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: n(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
}
function St({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...o
}) {
  const { orientation: s, scrollPrev: l, canScrollPrev: i } = A();
  return /* @__PURE__ */ d(
    B,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: r,
      className: n(
        "absolute size-8 rounded-full",
        s === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: l,
      ...o,
      children: [
        /* @__PURE__ */ a(Ie, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function _t({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...o
}) {
  const { orientation: s, scrollNext: l, canScrollNext: i } = A();
  return /* @__PURE__ */ d(
    B,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: r,
      className: n(
        "absolute size-8 rounded-full",
        s === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: l,
      ...o,
      children: [
        /* @__PURE__ */ a(Me, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const Be = { light: "", dark: ".dark" }, se = f.createContext(null);
function ie() {
  const e = f.useContext(se);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function Mt({
  id: e,
  className: t,
  children: r,
  config: o,
  ...s
}) {
  const l = f.useId(), i = `chart-${e || l.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(se.Provider, { value: { config: o }, children: /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "chart",
      "data-chart": i,
      className: n(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...s,
      children: [
        /* @__PURE__ */ a(Le, { id: i, config: o }),
        /* @__PURE__ */ a(q.ResponsiveContainer, { children: r })
      ]
    }
  ) });
}
const Le = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([, o]) => o.theme || o.color);
  return r.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(Be).map(
          ([o, s]) => `
${s} [data-chart=${e}] {
${r.map(([l, i]) => {
            const m = i.theme?.[o] || i.color;
            return m ? `  --color-${l}: ${m};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, It = q.Tooltip;
function Dt({
  active: e,
  payload: t,
  className: r,
  indicator: o = "dot",
  hideLabel: s = !1,
  hideIndicator: l = !1,
  label: i,
  labelFormatter: m,
  labelClassName: u,
  formatter: w,
  color: S,
  nameKey: P,
  labelKey: h
}) {
  const { config: b } = ie(), C = f.useMemo(() => {
    if (s || !t?.length)
      return null;
    const [p] = t, g = `${h || p?.dataKey || p?.name || "value"}`, N = F(b, p, g), M = !h && typeof i == "string" ? b[i]?.label || i : N?.label;
    return m ? /* @__PURE__ */ a("div", { className: n("font-medium", u), children: m(M, t) }) : M ? /* @__PURE__ */ a("div", { className: n("font-medium", u), children: M }) : null;
  }, [i, m, t, s, u, b, h]);
  if (!e || !t?.length)
    return null;
  const y = t.length === 1 && o !== "dot";
  return /* @__PURE__ */ d(
    "div",
    {
      className: n(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        r
      ),
      children: [
        y ? null : C,
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: t.filter((p) => p.type !== "none").map((p, g) => {
          const N = `${P || p.name || p.dataKey || "value"}`, M = F(b, p, N), k = S || p.payload.fill || p.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: n(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                o === "dot" && "items-center"
              ),
              children: w && p?.value !== void 0 && p.name ? w(p.value, p.name, p, g, p.payload) : /* @__PURE__ */ d(Z, { children: [
                M?.icon ? /* @__PURE__ */ a(M.icon, {}) : !l && /* @__PURE__ */ a(
                  "div",
                  {
                    className: n(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": o === "dot",
                        "w-1": o === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": o === "dashed",
                        "my-0.5": y && o === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": k,
                      "--color-border": k
                    }
                  }
                ),
                /* @__PURE__ */ d(
                  "div",
                  {
                    className: n(
                      "flex flex-1 justify-between leading-none",
                      y ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ d("div", { className: "grid gap-1.5", children: [
                        y ? C : null,
                        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: M?.label || p.name })
                      ] }),
                      p.value && /* @__PURE__ */ a("span", { className: "text-foreground font-mono font-medium tabular-nums", children: p.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            p.dataKey
          );
        }) })
      ]
    }
  );
}
const Tt = q.Legend;
function Pt({
  className: e,
  hideIcon: t = !1,
  payload: r,
  verticalAlign: o = "bottom",
  nameKey: s
}) {
  const { config: l } = ie();
  return r?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: n(
        "flex items-center justify-center gap-4",
        o === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: r.filter((i) => i.type !== "none").map((i) => {
        const m = `${s || i.dataKey || "value"}`, u = F(l, i, m);
        return /* @__PURE__ */ d(
          "div",
          {
            className: n(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            ),
            children: [
              u?.icon && !t ? /* @__PURE__ */ a(u.icon, {}) : /* @__PURE__ */ a(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: i.color
                  }
                }
              ),
              u?.label
            ]
          },
          i.value
        );
      })
    }
  ) : null;
}
function F(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const o = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let s = r;
  return r in t && typeof t[r] == "string" ? s = t[r] : o && r in o && typeof o[r] == "string" && (s = o[r]), s in e ? e[s] : e[r];
}
function Et({ ...e }) {
  return /* @__PURE__ */ a(v.Root, { "data-slot": "context-menu", ...e });
}
function Rt({
  ...e
}) {
  return /* @__PURE__ */ a(v.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function Gt({ ...e }) {
  return /* @__PURE__ */ a(v.Group, { "data-slot": "context-menu-group", ...e });
}
function jt({ ...e }) {
  return /* @__PURE__ */ a(v.Portal, { "data-slot": "context-menu-portal", ...e });
}
function Bt({ ...e }) {
  return /* @__PURE__ */ a(v.Sub, { "data-slot": "context-menu-sub", ...e });
}
function Lt({
  ...e
}) {
  return /* @__PURE__ */ a(v.RadioGroup, { "data-slot": "context-menu-radio-group", ...e });
}
function Ot({
  className: e,
  inset: t,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ d(
    v.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": t,
      className: n(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ a(re, { className: "ml-auto" })
      ]
    }
  );
}
function At({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    v.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function Vt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(v.Portal, { children: /* @__PURE__ */ a(
    v.Content,
    {
      "data-slot": "context-menu-content",
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...t
    }
  ) });
}
function $t({
  className: e,
  inset: t,
  variant: r = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    v.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": t,
      "data-variant": r,
      className: n(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o
    }
  );
}
function Ht({
  className: e,
  children: t,
  checked: r,
  ...o
}) {
  return /* @__PURE__ */ d(
    v.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: n(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(v.ItemIndicator, { children: /* @__PURE__ */ a(K, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function Ft({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ d(
    v.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: n(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(v.ItemIndicator, { children: /* @__PURE__ */ a(ae, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Kt({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    v.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": t,
      className: n("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...r
    }
  );
}
function qt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    v.Separator,
    {
      "data-slot": "context-menu-separator",
      className: n("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Wt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: n("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function Xt({ ...e }) {
  return /* @__PURE__ */ a(T.Root, { "data-slot": "drawer", ...e });
}
function Ut({ ...e }) {
  return /* @__PURE__ */ a(T.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function Oe({ ...e }) {
  return /* @__PURE__ */ a(T.Portal, { "data-slot": "drawer-portal", ...e });
}
function Yt({ ...e }) {
  return /* @__PURE__ */ a(T.Close, { "data-slot": "drawer-close", ...e });
}
function Ae({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    T.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: n(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Jt({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ d(Oe, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ a(Ae, {}),
    /* @__PURE__ */ d(
      T.Content,
      {
        "data-slot": "drawer-content",
        className: n(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          e
        ),
        ...r,
        children: [
          /* @__PURE__ */ a("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          t
        ]
      }
    )
  ] });
}
function Qt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-header",
      className: n(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        e
      ),
      ...t
    }
  );
}
function Zt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-footer",
      className: n("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function ea({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    T.Title,
    {
      "data-slot": "drawer-title",
      className: n("text-foreground font-semibold", e),
      ...t
    }
  );
}
function ta({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    T.Description,
    {
      "data-slot": "drawer-description",
      className: n("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function aa({ ...e }) {
  return /* @__PURE__ */ a(x.Root, { "data-slot": "dropdown-menu", ...e });
}
function ra({
  ...e
}) {
  return /* @__PURE__ */ a(x.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function na({
  ...e
}) {
  return /* @__PURE__ */ a(x.Trigger, { "data-slot": "dropdown-menu-trigger", ...e });
}
function oa({
  className: e,
  sideOffset: t = 4,
  ...r
}) {
  return /* @__PURE__ */ a(x.Portal, { children: /* @__PURE__ */ a(
    x.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...r
    }
  ) });
}
function sa({ ...e }) {
  return /* @__PURE__ */ a(x.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function ia({
  className: e,
  inset: t,
  variant: r = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    x.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": r,
      className: n(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o
    }
  );
}
function da({
  className: e,
  children: t,
  checked: r,
  ...o
}) {
  return /* @__PURE__ */ d(
    x.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: n(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(x.ItemIndicator, { children: /* @__PURE__ */ a(K, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function la({
  ...e
}) {
  return /* @__PURE__ */ a(x.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...e });
}
function ca({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ d(
    x.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: n(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(x.ItemIndicator, { children: /* @__PURE__ */ a(ae, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function ua({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    x.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: n("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...r
    }
  );
}
function fa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    x.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: n("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function ma({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: n("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function pa({ ...e }) {
  return /* @__PURE__ */ a(x.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function ga({
  className: e,
  inset: t,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ d(
    x.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": t,
      className: n(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ a(re, { className: "ml-auto size-4" })
      ]
    }
  );
}
function ba({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    x.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function ha({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "fieldset",
    {
      "data-slot": "field-set",
      className: n(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        e
      ),
      ...t
    }
  );
}
function va({
  className: e,
  variant: t = "legend",
  ...r
}) {
  return /* @__PURE__ */ a(
    "legend",
    {
      "data-slot": "field-legend",
      "data-variant": t,
      className: n(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        e
      ),
      ...r
    }
  );
}
function xa({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-group",
      className: n(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        e
      ),
      ...t
    }
  );
}
const Ve = D("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", {
  variants: {
    orientation: {
      vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
      horizontal: [
        "flex-row items-center",
        "[&>[data-slot=field-label]]:flex-auto",
        "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
      ],
      responsive: [
        "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
        "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
        "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
      ]
    }
  },
  defaultVariants: {
    orientation: "vertical"
  }
});
function wa({
  className: e,
  orientation: t = "vertical",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": t,
      className: n(Ve({ orientation: t }), e),
      ...r
    }
  );
}
function Na({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-content",
      className: n("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", e),
      ...t
    }
  );
}
function Ca({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ee,
    {
      "data-slot": "field-label",
      className: n(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        e
      ),
      ...t
    }
  );
}
function ya({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-label",
      className: n(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        e
      ),
      ...t
    }
  );
}
function ka({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "field-description",
      className: n(
        "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function za({
  children: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "field-separator",
      "data-content": !!e,
      className: n(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        t
      ),
      ...r,
      children: [
        /* @__PURE__ */ a(O, { className: "absolute inset-0 top-1/2" }),
        e && /* @__PURE__ */ a(
          "span",
          {
            className: "bg-background text-muted-foreground relative mx-auto block w-fit px-2",
            "data-slot": "field-separator-content",
            children: e
          }
        )
      ]
    }
  );
}
function Sa({
  className: e,
  children: t,
  errors: r,
  ...o
}) {
  const s = Re(() => {
    if (t)
      return t;
    if (!r?.length)
      return null;
    const l = [...new Map(r.map((i) => [i?.message, i])).values()];
    return l?.length == 1 ? l[0]?.message : /* @__PURE__ */ a("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: l.map((i, m) => i?.message && /* @__PURE__ */ a("li", { children: i.message }, m)) });
  }, [t, r]);
  return s ? /* @__PURE__ */ a(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: n("text-destructive text-sm font-normal", e),
      ...o,
      children: s
    }
  ) : null;
}
function _a({ ...e }) {
  return /* @__PURE__ */ a(L.Root, { "data-slot": "hover-card", ...e });
}
function Ma({ ...e }) {
  return /* @__PURE__ */ a(L.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function Ia({
  className: e,
  align: t = "center",
  sideOffset: r = 4,
  ...o
}) {
  return /* @__PURE__ */ a(L.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ a(
    L.Content,
    {
      "data-slot": "hover-card-content",
      align: t,
      sideOffset: r,
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...o
    }
  ) });
}
function Da({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: n(
        "group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none",
        "h-9 min-w-0 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        e
      ),
      ...t
    }
  );
}
const $e = D(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
        "block-end": "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function Ta({
  className: e,
  align: t = "inline-start",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": t,
      className: n($e({ align: t }), e),
      onClick: (o) => {
        o.target.closest("button") || o.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...r
    }
  );
}
const He = D("text-sm shadow-none flex gap-2 items-center", {
  variants: {
    size: {
      xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
      sm: "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
      "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
      "icon-sm": "size-8 p-0 has-[>svg]:p-0"
    }
  },
  defaultVariants: {
    size: "xs"
  }
});
function Pa({
  className: e,
  type: t = "button",
  variant: r = "ghost",
  size: o = "xs",
  ...s
}) {
  return /* @__PURE__ */ a(
    B,
    {
      type: t,
      "data-size": o,
      variant: r,
      className: n(He({ size: o }), e),
      ...s
    }
  );
}
function Ea({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      className: n(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function Ra({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    te,
    {
      "data-slot": "input-group-control",
      className: n(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        e
      ),
      ...t
    }
  );
}
function Ga({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    be,
    {
      "data-slot": "input-group-control",
      className: n(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        e
      ),
      ...t
    }
  );
}
function ja({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "list",
      "data-slot": "item-group",
      className: n("group/item-group flex flex-col", e),
      ...t
    }
  );
}
function Ba({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    O,
    {
      "data-slot": "item-separator",
      orientation: "horizontal",
      className: n("my-0", e),
      ...t
    }
  );
}
const Fe = D(
  "group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50"
      },
      size: {
        default: "p-4 gap-4 ",
        sm: "py-3 px-4 gap-2.5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function La({
  className: e,
  variant: t = "default",
  size: r = "default",
  asChild: o = !1,
  ...s
}) {
  return /* @__PURE__ */ a(
    o ? R : "div",
    {
      "data-slot": "item",
      "data-variant": t,
      "data-size": r,
      className: n(Fe({ variant: t, size: r, className: e })),
      ...s
    }
  );
}
const Ke = D(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
        image: "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Oa({
  className: e,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-media",
      "data-variant": t,
      className: n(Ke({ variant: t, className: e })),
      ...r
    }
  );
}
function Aa({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-content",
      className: n("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", e),
      ...t
    }
  );
}
function Va({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-title",
      className: n("flex w-fit items-center gap-2 text-sm leading-snug font-medium", e),
      ...t
    }
  );
}
function $a({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "item-description",
      className: n(
        "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function Ha({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "item-actions", className: n("flex items-center gap-2", e), ...t });
}
function Fa({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-header",
      className: n("flex basis-full items-center justify-between gap-2", e),
      ...t
    }
  );
}
function Ka({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-footer",
      className: n("flex basis-full items-center justify-between gap-2", e),
      ...t
    }
  );
}
function qa({
  options: e,
  value: t = [],
  onChange: r,
  autoResize: o = !1,
  limitTags: s,
  showCode: l = !1,
  label: i,
  error: m,
  required: u,
  placeholder: w = "Select options...",
  searchPlaceholder: S = "Search...",
  emptyMessage: P = "No results found.",
  disabled: h = !1,
  readonly: b = !1,
  size: C = "md",
  className: y,
  triggerClassName: p,
  popoverClassName: g
}) {
  const [N, M] = f.useState(!1), k = f.useMemo(() => t || [], [t]), $ = f.useMemo(
    () => e.filter((c) => k.includes(c.id)),
    [e, k]
  ), W = (c) => {
    if (h || b) return;
    const _ = k.includes(c) ? k.filter((E) => E !== c) : [...k, c], j = e.filter((E) => _.includes(E.id));
    r?.(_, j.length > 0 ? j : void 0);
  }, fe = (c, z) => {
    if (z.preventDefault(), z.stopPropagation(), h || b) return;
    const _ = k.filter((E) => E !== c), j = e.filter((E) => _.includes(E.id));
    r?.(_, j.length > 0 ? j : void 0);
  }, me = (c) => {
    c.preventDefault(), c.stopPropagation(), !(h || b) && r?.([], void 0);
  }, pe = (c) => l && c.code !== void 0 ? `${c.code} - ${c.name}` : c.name, ge = s ? $.slice(0, s) : $, X = s ? Math.max(0, $.length - s) : 0, U = /* @__PURE__ */ d(he, { open: N, onOpenChange: M, children: [
    /* @__PURE__ */ a(ve, { asChild: !0, children: /* @__PURE__ */ d(
      B,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": N,
        disabled: h,
        size: C,
        className: n(
          "w-full justify-between group/combobox",
          !k.length && "text-muted-foreground",
          m && "border-destructive",
          o && "h-auto min-h-0",
          p
        ),
        children: [
          /* @__PURE__ */ a(
            "div",
            {
              className: n(
                "flex-1 flex items-center gap-1.5 min-w-0",
                o ? "flex-wrap" : "overflow-hidden"
              ),
              children: k.length === 0 ? /* @__PURE__ */ a("span", { className: "text-left truncate", children: w }) : /* @__PURE__ */ d(Z, { children: [
                ge.map((c) => /* @__PURE__ */ d(
                  Y,
                  {
                    variant: "secondary",
                    className: n(
                      "gap-1 shrink-0",
                      !o && "truncate max-w-[120px]",
                      (h || b) && "pr-2"
                    ),
                    children: [
                      /* @__PURE__ */ a("span", { className: "truncate", children: pe(c) }),
                      !h && !b && /* @__PURE__ */ a(
                        "button",
                        {
                          type: "button",
                          onMouseDown: (z) => {
                            z.preventDefault(), z.stopPropagation();
                          },
                          onClick: (z) => fe(c.id, z),
                          className: "ml-0.5 hover:bg-destructive/20 rounded-full p-0.5 -mr-1 shrink-0",
                          children: /* @__PURE__ */ a(De, { className: "h-2.5 w-2.5" })
                        }
                      )
                    ]
                  },
                  c.id
                )),
                X > 0 && /* @__PURE__ */ d(Y, { variant: "secondary", className: "shrink-0", children: [
                  "+",
                  X
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ a("div", { className: "flex items-center gap-1 shrink-0 ml-2", children: k.length > 0 && !h && !b ? /* @__PURE__ */ d(
            "span",
            {
              onMouseDown: (c) => {
                c.preventDefault(), c.stopPropagation();
              },
              onClick: me,
              className: "cursor-pointer",
              children: [
                /* @__PURE__ */ a(Te, { className: "text-muted-foreground hidden group-hover/combobox:block h-4 w-4" }),
                /* @__PURE__ */ a(J, { className: "text-muted-foreground block group-hover/combobox:hidden h-4 w-4" })
              ]
            }
          ) : /* @__PURE__ */ a(J, { className: "text-muted-foreground h-4 w-4" }) })
        ]
      }
    ) }),
    /* @__PURE__ */ a(
      xe,
      {
        className: n("w-(--radix-popover-trigger-width) p-0", g),
        align: "start",
        children: /* @__PURE__ */ d(we, { children: [
          /* @__PURE__ */ a(Ne, { placeholder: S }),
          /* @__PURE__ */ d(Ce, { children: [
            /* @__PURE__ */ a(ye, { children: P }),
            /* @__PURE__ */ a(ke, { children: e.map((c) => {
              const z = k.includes(c.id);
              return /* @__PURE__ */ d(
                ze,
                {
                  value: c.name,
                  disabled: c.disabled,
                  onSelect: () => {
                    W(c.id);
                  },
                  className: "flex items-center gap-2 cursor-pointer",
                  children: [
                    /* @__PURE__ */ a(
                      "div",
                      {
                        onMouseDown: (_) => _.preventDefault(),
                        onClick: (_) => {
                          _.preventDefault(), _.stopPropagation(), W(c.id);
                        },
                        className: "shrink-0",
                        children: /* @__PURE__ */ a(
                          Se,
                          {
                            checked: z,
                            disabled: c.disabled || h || b,
                            size: C
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ d("div", { className: "flex-1 flex items-center gap-2 min-w-0", children: [
                      l && c.code !== void 0 && /* @__PURE__ */ a("span", { className: "text-muted-foreground shrink-0", children: c.code }),
                      /* @__PURE__ */ a("span", { className: "flex-1 truncate", children: c.name })
                    ] }),
                    /* @__PURE__ */ a(
                      K,
                      {
                        className: n(
                          "h-4 w-4 shrink-0 text-primary",
                          z ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                c.id
              );
            }) })
          ] })
        ] })
      }
    )
  ] });
  return !i && !m ? /* @__PURE__ */ a("div", { className: n("w-full", y), children: U }) : /* @__PURE__ */ d("div", { className: n("w-full", y), children: [
    i && /* @__PURE__ */ d(ee, { className: "text-foreground leading-5 block", children: [
      i,
      u && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ a("div", { className: i ? "mt-1" : "", children: U }),
    m && /* @__PURE__ */ a("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: m })
  ] });
}
function qe({ ...e }) {
  return /* @__PURE__ */ a(I.Root, { "data-slot": "sheet", ...e });
}
function Wa({ ...e }) {
  return /* @__PURE__ */ a(I.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function Xa({ ...e }) {
  return /* @__PURE__ */ a(I.Close, { "data-slot": "sheet-close", ...e });
}
function We({ ...e }) {
  return /* @__PURE__ */ a(I.Portal, { "data-slot": "sheet-portal", ...e });
}
function Xe({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    I.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: n(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Ue({
  className: e,
  children: t,
  side: r = "right",
  ...o
}) {
  return /* @__PURE__ */ d(We, { children: [
    /* @__PURE__ */ a(Xe, {}),
    /* @__PURE__ */ d(
      I.Content,
      {
        "data-slot": "sheet-content",
        className: n(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          r === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          r === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          r === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          r === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          e
        ),
        ...o,
        children: [
          t,
          /* @__PURE__ */ d(I.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ a(Pe, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Ye({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: n("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function Ua({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-footer",
      className: n("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function Je({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    I.Title,
    {
      "data-slot": "sheet-title",
      className: n("text-foreground font-semibold", e),
      ...t
    }
  );
}
function Qe({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    I.Description,
    {
      "data-slot": "sheet-description",
      className: n("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const H = 768;
function Ze() {
  const [e, t] = f.useState(void 0);
  return f.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${H - 1}px)`), o = () => {
      t(window.innerWidth < H);
    };
    return r.addEventListener("change", o), t(window.innerWidth < H), () => r.removeEventListener("change", o);
  }, []), !!e;
}
function de({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ a(
    G.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function et({ ...e }) {
  return /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(G.Root, { "data-slot": "tooltip", ...e }) });
}
function tt({ ...e }) {
  return /* @__PURE__ */ a(G.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function at({
  className: e,
  sideOffset: t = 0,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ a(G.Portal, { children: /* @__PURE__ */ d(
    G.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: n(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ a(G.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const rt = "sidebar_state", nt = 3600 * 24 * 7, ot = "16rem", st = "18rem", it = "3rem", dt = "b", le = f.createContext(null);
function V() {
  const e = f.useContext(le);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function Ya({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: r,
  className: o,
  style: s,
  children: l,
  ...i
}) {
  const m = Ze(), [u, w] = f.useState(!1), [S, P] = f.useState(e), h = t ?? S, b = f.useCallback(
    (g) => {
      const N = typeof g == "function" ? g(h) : g;
      r ? r(N) : P(N), document.cookie = `${rt}=${N}; path=/; max-age=${nt}`;
    },
    [r, h]
  ), C = f.useCallback(() => m ? w((g) => !g) : b((g) => !g), [m, b, w]);
  f.useEffect(() => {
    const g = (N) => {
      N.key === dt && (N.metaKey || N.ctrlKey) && (N.preventDefault(), C());
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [C]);
  const y = h ? "expanded" : "collapsed", p = f.useMemo(
    () => ({
      state: y,
      open: h,
      setOpen: b,
      isMobile: m,
      openMobile: u,
      setOpenMobile: w,
      toggleSidebar: C
    }),
    [y, h, b, m, u, w, C]
  );
  return /* @__PURE__ */ a(le.Provider, { value: p, children: /* @__PURE__ */ a(de, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": ot,
        "--sidebar-width-icon": it,
        ...s
      },
      className: n(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        o
      ),
      ...i,
      children: l
    }
  ) }) });
}
function Ja({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: r = "offcanvas",
  className: o,
  children: s,
  ...l
}) {
  const { isMobile: i, state: m, openMobile: u, setOpenMobile: w } = V();
  return r === "none" ? /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar",
      className: n(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        o
      ),
      ...l,
      children: s
    }
  ) : i ? /* @__PURE__ */ a(qe, { open: u, onOpenChange: w, ...l, children: /* @__PURE__ */ d(
    Ue,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": st
      },
      side: e,
      children: [
        /* @__PURE__ */ d(Ye, { className: "sr-only", children: [
          /* @__PURE__ */ a(Je, { children: "Sidebar" }),
          /* @__PURE__ */ a(Qe, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex h-full w-full flex-col", children: s })
      ]
    }
  ) }) : /* @__PURE__ */ d(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": m,
      "data-collapsible": m === "collapsed" ? r : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: n(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "sidebar-container",
            className: n(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              o
            ),
            ...l,
            children: /* @__PURE__ */ a(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children: s
              }
            )
          }
        )
      ]
    }
  );
}
function Qa({ className: e, onClick: t, ...r }) {
  const { toggleSidebar: o } = V();
  return /* @__PURE__ */ d(
    B,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: n("size-7", e),
      onClick: (s) => {
        t?.(s), o();
      },
      ...r,
      children: [
        /* @__PURE__ */ a(Ee, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function Za({ className: e, ...t }) {
  const { toggleSidebar: r } = V();
  return /* @__PURE__ */ a(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: r,
      title: "Toggle Sidebar",
      className: n(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        e
      ),
      ...t
    }
  );
}
function er({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: n(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        e
      ),
      ...t
    }
  );
}
function tr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    te,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: n("bg-background h-8 w-full shadow-none", e),
      ...t
    }
  );
}
function ar({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: n("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function rr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: n("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function nr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    O,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: n("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function or({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: n(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function sr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: n("relative flex w-full min-w-0 flex-col p-2", e),
      ...t
    }
  );
}
function ir({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? R : "div",
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: n(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...r
    }
  );
}
function dr({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? R : "button",
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: n(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...r
    }
  );
}
function lr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: n("w-full text-sm", e),
      ...t
    }
  );
}
function cr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: n("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function ur({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: n("group/menu-item relative", e),
      ...t
    }
  );
}
const lt = D(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function fr({
  asChild: e = !1,
  isActive: t = !1,
  variant: r = "default",
  size: o = "default",
  tooltip: s,
  className: l,
  ...i
}) {
  const m = e ? R : "button", { isMobile: u, state: w } = V(), S = /* @__PURE__ */ a(
    m,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": o,
      "data-active": t,
      className: n(lt({ variant: r, size: o }), l),
      ...i
    }
  );
  return s ? (typeof s == "string" && (s = {
    children: s
  }), /* @__PURE__ */ d(et, { children: [
    /* @__PURE__ */ a(tt, { asChild: !0, children: S }),
    /* @__PURE__ */ a(
      at,
      {
        side: "right",
        align: "center",
        hidden: w !== "collapsed" || u,
        ...s
      }
    )
  ] })) : S;
}
function mr({
  className: e,
  asChild: t = !1,
  showOnHover: r = !1,
  ...o
}) {
  return /* @__PURE__ */ a(
    t ? R : "button",
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: n(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        r && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        e
      ),
      ...o
    }
  );
}
function pr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: n(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function gr({
  className: e,
  showIcon: t = !1,
  ...r
}) {
  const [o] = f.useState(() => `${Math.floor(Math.random() * 40) + 50}%`);
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: n("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...r,
      children: [
        t && /* @__PURE__ */ a(Q, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ a(
          Q,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": o
            }
          }
        )
      ]
    }
  );
}
function br({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: n(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function hr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: n("group/menu-sub-item relative", e),
      ...t
    }
  );
}
function vr({
  asChild: e = !1,
  size: t = "md",
  isActive: r = !1,
  className: o,
  ...s
}) {
  return /* @__PURE__ */ a(
    e ? R : "a",
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": t,
      "data-active": r,
      className: n(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        t === "sm" && "text-xs",
        t === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        o
      ),
      ...s
    }
  );
}
const ce = D(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function xr({
  className: e,
  variant: t,
  size: r,
  ...o
}) {
  return /* @__PURE__ */ a(
    Ge.Root,
    {
      "data-slot": "toggle",
      className: n(ce({ variant: t, size: r, className: e })),
      ...o
    }
  );
}
const ue = f.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function wr({
  className: e,
  variant: t,
  size: r,
  spacing: o = 0,
  children: s,
  ...l
}) {
  return /* @__PURE__ */ a(
    ne.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": r,
      "data-spacing": o,
      style: { "--gap": o },
      className: n(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        e
      ),
      ...l,
      children: /* @__PURE__ */ a(ue.Provider, { value: { variant: t, size: r, spacing: o }, children: s })
    }
  );
}
function Nr({
  className: e,
  children: t,
  variant: r,
  size: o,
  ...s
}) {
  const l = f.useContext(ue);
  return /* @__PURE__ */ a(
    ne.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": l.variant || r,
      "data-size": l.size || o,
      "data-spacing": l.spacing,
      className: n(
        ce({
          variant: l.variant || r,
          size: l.size || o
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l",
        e
      ),
      ...s,
      children: t
    }
  );
}
export {
  wt as ButtonGroup,
  Ct as ButtonGroupSeparator,
  Nt as ButtonGroupText,
  kr as Calendar,
  zr as CalendarDayButton,
  yt as Carousel,
  kt as CarouselContent,
  zt as CarouselItem,
  _t as CarouselNext,
  St as CarouselPrevious,
  Mt as ChartContainer,
  Tt as ChartLegend,
  Pt as ChartLegendContent,
  Le as ChartStyle,
  It as ChartTooltip,
  Dt as ChartTooltipContent,
  Sr as Combobox,
  Et as ContextMenu,
  Ht as ContextMenuCheckboxItem,
  Vt as ContextMenuContent,
  Gt as ContextMenuGroup,
  $t as ContextMenuItem,
  Kt as ContextMenuLabel,
  jt as ContextMenuPortal,
  Lt as ContextMenuRadioGroup,
  Ft as ContextMenuRadioItem,
  qt as ContextMenuSeparator,
  Wt as ContextMenuShortcut,
  Bt as ContextMenuSub,
  At as ContextMenuSubContent,
  Ot as ContextMenuSubTrigger,
  Rt as ContextMenuTrigger,
  _r as DatePicker,
  Mr as DateRangePicker,
  Xt as Drawer,
  Yt as DrawerClose,
  Jt as DrawerContent,
  ta as DrawerDescription,
  Zt as DrawerFooter,
  Qt as DrawerHeader,
  Ae as DrawerOverlay,
  Oe as DrawerPortal,
  ea as DrawerTitle,
  Ut as DrawerTrigger,
  aa as DropdownMenu,
  da as DropdownMenuCheckboxItem,
  oa as DropdownMenuContent,
  sa as DropdownMenuGroup,
  ia as DropdownMenuItem,
  ua as DropdownMenuLabel,
  ra as DropdownMenuPortal,
  la as DropdownMenuRadioGroup,
  ca as DropdownMenuRadioItem,
  fa as DropdownMenuSeparator,
  ma as DropdownMenuShortcut,
  pa as DropdownMenuSub,
  ba as DropdownMenuSubContent,
  ga as DropdownMenuSubTrigger,
  na as DropdownMenuTrigger,
  Gr as Empty,
  jr as EmptyContent,
  Br as EmptyDescription,
  Lr as EmptyHeader,
  Or as EmptyMedia,
  Ar as EmptyTitle,
  wa as Field,
  Na as FieldContent,
  ka as FieldDescription,
  Sa as FieldError,
  xa as FieldGroup,
  Ca as FieldLabel,
  va as FieldLegend,
  za as FieldSeparator,
  ha as FieldSet,
  ya as FieldTitle,
  _a as HoverCard,
  Ia as HoverCardContent,
  Ma as HoverCardTrigger,
  Da as InputGroup,
  Ta as InputGroupAddon,
  Pa as InputGroupButton,
  Ra as InputGroupInput,
  Ea as InputGroupText,
  Ga as InputGroupTextarea,
  La as Item,
  Ha as ItemActions,
  Aa as ItemContent,
  $a as ItemDescription,
  Ka as ItemFooter,
  ja as ItemGroup,
  Fa as ItemHeader,
  Oa as ItemMedia,
  Ba as ItemSeparator,
  Va as ItemTitle,
  Ir as MonthPicker,
  qa as MultipleCombobox,
  he as Popover,
  Dr as PopoverAnchor,
  xe as PopoverContent,
  ve as PopoverTrigger,
  Tr as ScrollArea,
  Pr as ScrollBar,
  qe as Sheet,
  Xa as SheetClose,
  Ue as SheetContent,
  Qe as SheetDescription,
  Ua as SheetFooter,
  Ye as SheetHeader,
  Je as SheetTitle,
  Wa as SheetTrigger,
  Ja as Sidebar,
  or as SidebarContent,
  rr as SidebarFooter,
  sr as SidebarGroup,
  dr as SidebarGroupAction,
  lr as SidebarGroupContent,
  ir as SidebarGroupLabel,
  ar as SidebarHeader,
  tr as SidebarInput,
  er as SidebarInset,
  cr as SidebarMenu,
  mr as SidebarMenuAction,
  pr as SidebarMenuBadge,
  fr as SidebarMenuButton,
  ur as SidebarMenuItem,
  gr as SidebarMenuSkeleton,
  br as SidebarMenuSub,
  vr as SidebarMenuSubButton,
  hr as SidebarMenuSubItem,
  Ya as SidebarProvider,
  Za as SidebarRail,
  nr as SidebarSeparator,
  Qa as SidebarTrigger,
  Er as TimePicker,
  xr as Toggle,
  wr as ToggleGroup,
  Nr as ToggleGroupItem,
  et as Tooltip,
  at as TooltipContent,
  de as TooltipProvider,
  tt as TooltipTrigger,
  je as buttonGroupVariants,
  ce as toggleVariants,
  V as useSidebar
};
//# sourceMappingURL=index-client.mjs.map
