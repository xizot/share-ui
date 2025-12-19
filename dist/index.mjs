import { jsx as o, jsxs as T, Fragment as Uo } from "react/jsx-runtime";
import * as _ from "react";
import ut, { useMemo as qc, useRef as Rc, useCallback as Mc, createRef as Sa } from "react";
import * as cn from "@radix-ui/react-accordion";
import { ChevronDownIcon as vn, ChevronRight as Dc, MoreHorizontal as Qi, ChevronLeftIcon as Ho, ChevronRightIcon as xn, ArrowLeft as Bc, ArrowRight as zc, CheckIcon as rr, XIcon as Go, SearchIcon as $c, XCircle as Vo, ChevronDown as ss, CircleIcon as fs, CalendarIcon as Ko, MinusIcon as Pc, X as Ji, MoreHorizontalIcon as jc, ChevronsLeft as Fc, ChevronsRight as Uc, GripVerticalIcon as Hc, ChevronUpIcon as Gc, PanelLeftIcon as Vc, Loader2Icon as Wo, OctagonXIcon as Kc, TriangleAlertIcon as Wc, InfoIcon as Zc, CircleCheckIcon as Yc, Upload as Zo, CheckCircle2 as Xc, AlertCircle as Yo, Image as Qc, File as Jc, ArrowUp as ed, ArrowDown as td, ArrowUpDown as rd } from "lucide-react";
import { clsx as nd } from "clsx";
import { twMerge as sd } from "tailwind-merge";
import { cva as $e } from "class-variance-authority";
import * as Ct from "@radix-ui/react-alert-dialog";
import { Slot as st } from "@radix-ui/react-slot";
import * as id from "@radix-ui/react-aspect-ratio";
import * as ea from "@radix-ui/react-avatar";
import * as ad from "@radix-ui/react-separator";
import { getDefaultClassNames as Xo, DayPicker as od } from "react-day-picker";
import ld from "embla-carousel-react";
import * as ta from "recharts";
import * as Ta from "@radix-ui/react-checkbox";
import * as ra from "@radix-ui/react-collapsible";
import { Command as nr } from "cmdk";
import * as we from "@radix-ui/react-dialog";
import * as cd from "@radix-ui/react-label";
import * as dn from "@radix-ui/react-popover";
import * as Te from "@radix-ui/react-context-menu";
import { startOfMonth as Xt, format as Nt, setSeconds as Ca, setMinutes as Aa, setHours as ka, endOfDay as dd, startOfDay as ud, endOfWeek as fd, startOfWeek as hd, endOfMonth as _a, subWeeks as La, subMonths as Gn } from "date-fns";
import * as nn from "@radix-ui/react-scroll-area";
import { Drawer as zt } from "vaul";
import * as Ce from "@radix-ui/react-dropdown-menu";
import { FormProvider as md, useFormContext as gd, useFormState as je, Controller as We, useController as pd } from "react-hook-form";
import * as is from "@radix-ui/react-hover-card";
import { OTPInput as bd, OTPInputContext as vd } from "input-otp";
import * as Ae from "@radix-ui/react-menubar";
import * as $t from "@radix-ui/react-navigation-menu";
import * as Ia from "@radix-ui/react-progress";
import * as Ri from "@radix-ui/react-radio-group";
import { Group as xd, Panel as yd, Separator as wd } from "react-resizable-panels";
import * as Me from "@radix-ui/react-select";
import { SelectGroup as Nd } from "@radix-ui/react-select";
import * as Ar from "@radix-ui/react-tooltip";
import * as Vn from "@radix-ui/react-slider";
import { useTheme as Ed } from "next-themes";
import { Toaster as Sd, toast as yt } from "sonner";
import * as Oa from "@radix-ui/react-switch";
import * as hs from "@radix-ui/react-tabs";
import * as Td from "@radix-ui/react-toggle";
import * as Qo from "@radix-ui/react-toggle-group";
import { useReactTable as Cd, getCoreRowModel as Ad, flexRender as qa } from "@tanstack/react-table";
function f(...r) {
  return sd(nd(r));
}
function Ze(r, e) {
  const t = e.split(".");
  let n = r;
  for (const s of t) {
    if (n == null || typeof n != "object")
      return;
    n = n[s];
  }
  return n;
}
function kd(r) {
  return !(r == null || typeof r == "string" && r.trim() === "");
}
function S1({ ...r }) {
  return /* @__PURE__ */ o(cn.Root, { "data-slot": "accordion", ...r });
}
function T1({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    cn.Item,
    {
      "data-slot": "accordion-item",
      className: f("border-b last:border-b-0", r),
      ...e
    }
  );
}
function C1({
  className: r,
  children: e,
  ...t
}) {
  return /* @__PURE__ */ o(cn.Header, { className: "flex", children: /* @__PURE__ */ T(
    cn.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: f(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        r
      ),
      ...t,
      children: [
        e,
        /* @__PURE__ */ o(vn, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function A1({
  className: r,
  children: e,
  ...t
}) {
  return /* @__PURE__ */ o(
    cn.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...t,
      children: /* @__PURE__ */ o("div", { className: f("pt-0 pb-4", r), children: e })
    }
  );
}
const _d = $e(
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
), Jo = _.forwardRef(({ className: r, variant: e, ...t }, n) => /* @__PURE__ */ o("div", { ref: n, role: "alert", className: f(_d({ variant: e }), r), ...t }));
Jo.displayName = "Alert";
const el = _.forwardRef(
  ({ className: r, ...e }, t) => /* @__PURE__ */ o(
    "h5",
    {
      ref: t,
      className: f("mb-1 font-medium leading-none tracking-tight", r),
      ...e
    }
  )
);
el.displayName = "AlertTitle";
const tl = _.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ o("div", { ref: t, className: f("text-sm [&_p]:leading-relaxed", r), ...e }));
tl.displayName = "AlertDescription";
const rl = $e("", {
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
}), te = {
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
}, Ir = $e(
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
        xxs: `${te.xxs.height} min-w-6 rounded-md gap-1 ${te.xxs.padding} ${te.xxs.text}`,
        xs: `${te.xs.height} min-w-8 rounded-md gap-1 ${te.xs.padding} ${te.xs.text}`,
        sm: `${te.sm.height} min-w-9 rounded-md gap-1.5 ${te.sm.padding}  ${te.sm.text}`,
        md: `${te.md.height} min-w-10 ${te.md.padding} ${te.md.text}`,
        lg: `${te.lg.height} min-w-11 rounded-md ${te.lg.padding} ${te.lg.text}`,
        xl: `${te.xl.height} min-w-12 rounded-md ${te.xl.padding} ${te.xl.text}`,
        xxl: `${te.xxl.height} min-w-14 rounded-md ${te.xxl.padding} ${te.xxl.text}`,
        "2xl": `${te.xxl.height} min-w-14 rounded-md ${te.xxl.padding} ${te.xxl.text}`,
        icon: te.md.iconButton,
        "icon-xxs": te.xxs.iconButton,
        "icon-xs": te.xs.iconButton,
        "icon-sm": te.sm.iconButton,
        "icon-md": te.md.iconButton,
        "icon-lg": te.lg.iconButton,
        "icon-xl": te.xl.iconButton,
        "icon-xxl": te.xxl.iconButton
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
function pe({
  className: r,
  variant: e = "default",
  size: t = "md",
  asChild: n = !1,
  ...s
}) {
  return /* @__PURE__ */ o(
    n ? st : "button",
    {
      "data-slot": "button",
      "data-variant": e,
      "data-size": t,
      className: f(Ir({ variant: e, size: t, className: r })),
      ...s
    }
  );
}
function k1({ ...r }) {
  return /* @__PURE__ */ o(Ct.Root, { "data-slot": "alert-dialog", ...r });
}
function _1({
  ...r
}) {
  return /* @__PURE__ */ o(Ct.Trigger, { "data-slot": "alert-dialog-trigger", ...r });
}
function Ld({ ...r }) {
  return /* @__PURE__ */ o(Ct.Portal, { "data-slot": "alert-dialog-portal", ...r });
}
function Id({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    Ct.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: f(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        r
      ),
      ...e
    }
  );
}
function L1({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ T(Ld, { children: [
    /* @__PURE__ */ o(Id, {}),
    /* @__PURE__ */ o(
      Ct.Content,
      {
        "data-slot": "alert-dialog-content",
        className: f(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          r
        ),
        ...e
      }
    )
  ] });
}
function I1({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: f("flex flex-col gap-2 text-center sm:text-left", r),
      ...e
    }
  );
}
function O1({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: f("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", r),
      ...e
    }
  );
}
function q1({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    Ct.Title,
    {
      "data-slot": "alert-dialog-title",
      className: f("text-lg font-semibold", r),
      ...e
    }
  );
}
function R1({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    Ct.Description,
    {
      "data-slot": "alert-dialog-description",
      className: f("text-muted-foreground text-sm", r),
      ...e
    }
  );
}
function M1({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(Ct.Action, { className: f(Ir(), r), ...e });
}
function D1({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    Ct.Cancel,
    {
      className: f(Ir({ variant: "outline" }), r),
      ...e
    }
  );
}
function B1({ ...r }) {
  return /* @__PURE__ */ o(id.Root, { "data-slot": "aspect-ratio", ...r });
}
function z1({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    ea.Root,
    {
      "data-slot": "avatar",
      className: f("relative flex size-8 shrink-0 overflow-hidden rounded-full", r),
      ...e
    }
  );
}
function $1({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    ea.Image,
    {
      "data-slot": "avatar-image",
      className: f("aspect-square size-full", r),
      ...e
    }
  );
}
function P1({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    ea.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: f("bg-muted flex size-full items-center justify-center rounded-full", r),
      ...e
    }
  );
}
const Od = $e(
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
function un({
  className: r,
  variant: e,
  asChild: t = !1,
  ...n
}) {
  return /* @__PURE__ */ o(t ? st : "span", { "data-slot": "badge", className: f(Od({ variant: e }), r), ...n });
}
function j1({ ...r }) {
  return /* @__PURE__ */ o("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...r });
}
function F1({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: f(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        r
      ),
      ...e
    }
  );
}
function U1({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: f("inline-flex items-center gap-1.5", r),
      ...e
    }
  );
}
function H1({
  asChild: r,
  className: e,
  ...t
}) {
  return /* @__PURE__ */ o(
    r ? st : "a",
    {
      "data-slot": "breadcrumb-link",
      className: f("hover:text-foreground transition-colors", e),
      ...t
    }
  );
}
function G1({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: f("text-foreground font-normal", r),
      ...e
    }
  );
}
function V1({ children: r, className: e, ...t }) {
  return /* @__PURE__ */ o(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: f("[&>svg]:size-3.5", e),
      ...t,
      children: r ?? /* @__PURE__ */ o(Dc, {})
    }
  );
}
function K1({ className: r, ...e }) {
  return /* @__PURE__ */ T(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: f("flex size-9 items-center justify-center", r),
      ...e,
      children: [
        /* @__PURE__ */ o(Qi, { className: "size-4" }),
        /* @__PURE__ */ o("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
function Et({
  className: r,
  orientation: e = "horizontal",
  decorative: t = !0,
  ...n
}) {
  return /* @__PURE__ */ o(
    ad.Root,
    {
      "data-slot": "separator",
      decorative: t,
      orientation: e,
      className: f(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        r
      ),
      ...n
    }
  );
}
const qd = $e(
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
function W1({
  className: r,
  orientation: e,
  ...t
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      role: "group",
      "data-slot": "button-group",
      "data-orientation": e,
      className: f(qd({ orientation: e }), r),
      ...t
    }
  );
}
function Z1({
  className: r,
  asChild: e = !1,
  ...t
}) {
  return /* @__PURE__ */ o(
    e ? st : "div",
    {
      className: f(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        r
      ),
      ...t
    }
  );
}
function Y1({
  className: r,
  orientation: e = "vertical",
  ...t
}) {
  return /* @__PURE__ */ o(
    Et,
    {
      "data-slot": "button-group-separator",
      orientation: e,
      className: f(
        "bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
        r
      ),
      ...t
    }
  );
}
function nl({
  className: r,
  classNames: e,
  showOutsideDays: t = !0,
  captionLayout: n = "label",
  buttonVariant: s = "ghost",
  formatters: i,
  components: a,
  ...c
}) {
  const d = Xo();
  return /* @__PURE__ */ o(
    od,
    {
      showOutsideDays: t,
      weekStartsOn: 1,
      className: f(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        r
      ),
      captionLayout: n,
      formatters: {
        formatMonthDropdown: (u) => {
          const g = c.locale ? typeof c.locale == "string" ? c.locale : c.locale.code || "default" : "default";
          return u.toLocaleString(g, { month: "short" });
        },
        ...i
      },
      classNames: {
        root: f("w-fit", d.root),
        months: f("flex gap-4 flex-col md:flex-row relative", d.months),
        month: f("flex flex-col w-full gap-4", d.month),
        nav: f(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          d.nav
        ),
        button_previous: f(
          Ir({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          d.button_previous
        ),
        button_next: f(
          Ir({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          d.button_next
        ),
        month_caption: f(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          d.month_caption
        ),
        dropdowns: f(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          d.dropdowns
        ),
        dropdown_root: f(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          d.dropdown_root
        ),
        dropdown: f("absolute bg-popover inset-0 opacity-0", d.dropdown),
        caption_label: f(
          "select-none font-medium",
          n === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          d.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: f("flex", d.weekdays),
        weekday: f(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          d.weekday
        ),
        week: f("flex w-full mt-1", d.week),
        week_number_header: f("select-none w-(--cell-size)", d.week_number_header),
        week_number: f(
          "text-[0.8rem] select-none text-muted-foreground",
          d.week_number
        ),
        day: f(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          c.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          d.day
        ),
        range_start: f("rounded-l-md bg-accent", d.range_start),
        range_middle: f("rounded-none", d.range_middle),
        range_end: f("rounded-r-md bg-accent", d.range_end),
        today: f("bg-accent text-accent-foreground !rounded-full", d.today),
        outside: f(
          "text-muted-foreground aria-selected:text-muted-foreground",
          d.outside
        ),
        disabled: f("text-muted-foreground opacity-50", d.disabled),
        hidden: f("invisible", d.hidden),
        ...e
      },
      components: {
        ...a,
        CaptionLabel: ({ className: u, ...g }) => /* @__PURE__ */ o("div", { className: f(u), ...g }),
        Root: ({ className: u, rootRef: g, ...b }) => /* @__PURE__ */ o("div", { "data-slot": "calendar", ref: g, className: f(u), ...b }),
        Chevron: ({ className: u, orientation: g, ...b }) => g === "left" ? /* @__PURE__ */ o(Ho, { className: f("size-4", u), ...b }) : g === "right" ? /* @__PURE__ */ o(xn, { className: f("size-4", u), ...b }) : /* @__PURE__ */ o(vn, { className: f("size-4", u), ...b }),
        DayButton: Rd,
        WeekNumber: ({ children: u, ...g }) => /* @__PURE__ */ o("td", { ...g, children: /* @__PURE__ */ o("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: u }) })
      },
      ...c
    }
  );
}
function Rd({
  className: r,
  day: e,
  modifiers: t,
  ...n
}) {
  const s = Xo(), i = _.useRef(null);
  _.useEffect(() => {
    t.focused && i.current?.focus();
  }, [t.focused]);
  const a = t.today, c = t.selected && !t.range_start && !t.range_end && !t.range_middle, d = t.range_start, u = t.range_end, g = t.range_middle;
  return /* @__PURE__ */ T(
    pe,
    {
      ref: i,
      variant: "ghost",
      size: "icon",
      "data-day": e.date.toLocaleDateString(),
      "data-selected-single": c,
      "data-range-start": d,
      "data-range-end": u,
      "data-range-middle": g,
      className: f(
        "data-[selected-single=true]:!bg-primary data-[selected-single=true]:!text-primary-foreground",
        "data-[range-middle=true]:!bg-accent data-[range-middle=true]:!text-accent-foreground",
        "data-[range-start=true]:!bg-primary data-[range-start=true]:!text-primary-foreground",
        "data-[range-end=true]:!bg-primary data-[range-end=true]:!text-primary-foreground",
        "dark:hover:text-accent-foreground",
        "flex aspect-square h-10 w-10 flex-col gap-0.5 leading-none font-normal text-sm p-1.5 group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 !rounded-full",
        "[&>span]:text-sm [&>span]:font-normal",
        s.day,
        r
      ),
      ...n,
      children: [
        /* @__PURE__ */ o("span", { children: n.children }),
        a && /* @__PURE__ */ o("div", { className: "h-1 w-1 rounded-full bg-current opacity-70" })
      ]
    }
  );
}
function X1({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "card",
      className: f(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        r
      ),
      ...e
    }
  );
}
function Q1({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "card-header",
      className: f(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        r
      ),
      ...e
    }
  );
}
function J1({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "card-title",
      className: f("leading-none font-semibold", r),
      ...e
    }
  );
}
function ev({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "card-description",
      className: f("text-muted-foreground text-sm", r),
      ...e
    }
  );
}
function tv({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "card-action",
      className: f("col-start-2 row-span-2 row-start-1 self-start justify-self-end", r),
      ...e
    }
  );
}
function rv({ className: r, ...e }) {
  return /* @__PURE__ */ o("div", { "data-slot": "card-content", className: f("px-6", r), ...e });
}
function nv({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "card-footer",
      className: f("flex items-center px-6 [.border-t]:pt-6", r),
      ...e
    }
  );
}
const sl = _.createContext(null);
function ms() {
  const r = _.useContext(sl);
  if (!r)
    throw new Error("useCarousel must be used within a <Carousel />");
  return r;
}
function sv({
  orientation: r = "horizontal",
  opts: e,
  setApi: t,
  plugins: n,
  className: s,
  children: i,
  ...a
}) {
  const [c, d] = ld(
    {
      ...e,
      axis: r === "horizontal" ? "x" : "y"
    },
    n
  ), [u, g] = _.useState(!1), [b, m] = _.useState(!1), p = _.useCallback((y) => {
    y && (g(y.canScrollPrev()), m(y.canScrollNext()));
  }, []), N = _.useCallback(() => {
    d?.scrollPrev();
  }, [d]), S = _.useCallback(() => {
    d?.scrollNext();
  }, [d]), C = _.useCallback(
    (y) => {
      y.key === "ArrowLeft" ? (y.preventDefault(), N()) : y.key === "ArrowRight" && (y.preventDefault(), S());
    },
    [N, S]
  );
  return _.useEffect(() => {
    !d || !t || t(d);
  }, [d, t]), _.useEffect(() => {
    if (d)
      return p(d), d.on("reInit", p), d.on("select", p), () => {
        d?.off("select", p);
      };
  }, [d, p]), /* @__PURE__ */ o(
    sl.Provider,
    {
      value: {
        carouselRef: c,
        api: d,
        opts: e,
        orientation: r || (e?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: N,
        scrollNext: S,
        canScrollPrev: u,
        canScrollNext: b
      },
      children: /* @__PURE__ */ o(
        "div",
        {
          onKeyDownCapture: C,
          className: f("relative", s),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...a,
          children: i
        }
      )
    }
  );
}
function iv({ className: r, ...e }) {
  const { carouselRef: t, orientation: n } = ms();
  return /* @__PURE__ */ o("div", { ref: t, className: "overflow-hidden", "data-slot": "carousel-content", children: /* @__PURE__ */ o(
    "div",
    {
      className: f("flex", n === "horizontal" ? "-ml-4" : "-mt-4 flex-col", r),
      ...e
    }
  ) });
}
function av({ className: r, ...e }) {
  const { orientation: t } = ms();
  return /* @__PURE__ */ o(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: f(
        "min-w-0 shrink-0 grow-0 basis-full",
        t === "horizontal" ? "pl-4" : "pt-4",
        r
      ),
      ...e
    }
  );
}
function ov({
  className: r,
  variant: e = "outline",
  size: t = "icon",
  ...n
}) {
  const { orientation: s, scrollPrev: i, canScrollPrev: a } = ms();
  return /* @__PURE__ */ T(
    pe,
    {
      "data-slot": "carousel-previous",
      variant: e,
      size: t,
      className: f(
        "absolute size-8 rounded-full",
        s === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        r
      ),
      disabled: !a,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ o(Bc, {}),
        /* @__PURE__ */ o("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function lv({
  className: r,
  variant: e = "outline",
  size: t = "icon",
  ...n
}) {
  const { orientation: s, scrollNext: i, canScrollNext: a } = ms();
  return /* @__PURE__ */ T(
    pe,
    {
      "data-slot": "carousel-next",
      variant: e,
      size: t,
      className: f(
        "absolute size-8 rounded-full",
        s === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        r
      ),
      disabled: !a,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ o(zc, {}),
        /* @__PURE__ */ o("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const Md = { light: "", dark: ".dark" }, il = _.createContext(null);
function al() {
  const r = _.useContext(il);
  if (!r)
    throw new Error("useChart must be used within a <ChartContainer />");
  return r;
}
function cv({
  id: r,
  className: e,
  children: t,
  config: n,
  ...s
}) {
  const i = _.useId(), a = `chart-${r || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ o(il.Provider, { value: { config: n }, children: /* @__PURE__ */ T(
    "div",
    {
      "data-slot": "chart",
      "data-chart": a,
      className: f(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        e
      ),
      ...s,
      children: [
        /* @__PURE__ */ o(Dd, { id: a, config: n }),
        /* @__PURE__ */ o(ta.ResponsiveContainer, { children: t })
      ]
    }
  ) });
}
const Dd = ({ id: r, config: e }) => {
  const t = Object.entries(e).filter(([, n]) => n.theme || n.color);
  return t.length ? /* @__PURE__ */ o(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(Md).map(
          ([n, s]) => `
${s} [data-chart=${r}] {
${t.map(([i, a]) => {
            const c = a.theme?.[n] || a.color;
            return c ? `  --color-${i}: ${c};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, dv = ta.Tooltip;
function uv({
  active: r,
  payload: e,
  className: t,
  indicator: n = "dot",
  hideLabel: s = !1,
  hideIndicator: i = !1,
  label: a,
  labelFormatter: c,
  labelClassName: d,
  formatter: u,
  color: g,
  nameKey: b,
  labelKey: m
}) {
  const { config: p } = al(), N = _.useMemo(() => {
    if (s || !e?.length)
      return null;
    const [C] = e, y = `${m || C?.dataKey || C?.name || "value"}`, E = Mi(p, C, y), I = !m && typeof a == "string" ? p[a]?.label || a : E?.label;
    return c ? /* @__PURE__ */ o("div", { className: f("font-medium", d), children: c(I, e) }) : I ? /* @__PURE__ */ o("div", { className: f("font-medium", d), children: I }) : null;
  }, [a, c, e, s, d, p, m]);
  if (!r || !e?.length)
    return null;
  const S = e.length === 1 && n !== "dot";
  return /* @__PURE__ */ T(
    "div",
    {
      className: f(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        t
      ),
      children: [
        S ? null : N,
        /* @__PURE__ */ o("div", { className: "grid gap-1.5", children: e.filter((C) => C.type !== "none").map((C, y) => {
          const E = `${b || C.name || C.dataKey || "value"}`, I = Mi(p, C, E), D = g || C.payload.fill || C.color;
          return /* @__PURE__ */ o(
            "div",
            {
              className: f(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                n === "dot" && "items-center"
              ),
              children: u && C?.value !== void 0 && C.name ? u(C.value, C.name, C, y, C.payload) : /* @__PURE__ */ T(Uo, { children: [
                I?.icon ? /* @__PURE__ */ o(I.icon, {}) : !i && /* @__PURE__ */ o(
                  "div",
                  {
                    className: f(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": n === "dot",
                        "w-1": n === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                        "my-0.5": S && n === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": D,
                      "--color-border": D
                    }
                  }
                ),
                /* @__PURE__ */ T(
                  "div",
                  {
                    className: f(
                      "flex flex-1 justify-between leading-none",
                      S ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ T("div", { className: "grid gap-1.5", children: [
                        S ? N : null,
                        /* @__PURE__ */ o("span", { className: "text-muted-foreground", children: I?.label || C.name })
                      ] }),
                      C.value && /* @__PURE__ */ o("span", { className: "text-foreground font-mono font-medium tabular-nums", children: C.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            C.dataKey
          );
        }) })
      ]
    }
  );
}
const fv = ta.Legend;
function hv({
  className: r,
  hideIcon: e = !1,
  payload: t,
  verticalAlign: n = "bottom",
  nameKey: s
}) {
  const { config: i } = al();
  return t?.length ? /* @__PURE__ */ o(
    "div",
    {
      className: f(
        "flex items-center justify-center gap-4",
        n === "top" ? "pb-3" : "pt-3",
        r
      ),
      children: t.filter((a) => a.type !== "none").map((a) => {
        const c = `${s || a.dataKey || "value"}`, d = Mi(i, a, c);
        return /* @__PURE__ */ T(
          "div",
          {
            className: f(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            ),
            children: [
              d?.icon && !e ? /* @__PURE__ */ o(d.icon, {}) : /* @__PURE__ */ o(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: a.color
                  }
                }
              ),
              d?.label
            ]
          },
          a.value
        );
      })
    }
  ) : null;
}
function Mi(r, e, t) {
  if (typeof e != "object" || e === null)
    return;
  const n = "payload" in e && typeof e.payload == "object" && e.payload !== null ? e.payload : void 0;
  let s = t;
  return t in e && typeof e[t] == "string" ? s = e[t] : n && t in n && typeof n[t] == "string" && (s = n[t]), s in r ? r[s] : r[t];
}
function ol({
  className: r,
  size: e = "md",
  ...t
}) {
  const n = te[e ?? "md"];
  return /* @__PURE__ */ o(
    Ta.Root,
    {
      "data-slot": "checkbox",
      "data-size": e,
      className: f(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.icon,
        r
      ),
      ...t,
      children: /* @__PURE__ */ o(
        Ta.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ o(rr, { className: n.icon })
        }
      )
    }
  );
}
function mv({ ...r }) {
  return /* @__PURE__ */ o(ra.Root, { "data-slot": "collapsible", ...r });
}
function gv({
  ...r
}) {
  return /* @__PURE__ */ o(ra.CollapsibleTrigger, { "data-slot": "collapsible-trigger", ...r });
}
function pv({
  ...r
}) {
  return /* @__PURE__ */ o(ra.CollapsibleContent, { "data-slot": "collapsible-content", ...r });
}
function ll({ ...r }) {
  return /* @__PURE__ */ o(we.Root, { "data-slot": "dialog", ...r });
}
function bv({ ...r }) {
  return /* @__PURE__ */ o(we.Trigger, { "data-slot": "dialog-trigger", ...r });
}
function Bd({ ...r }) {
  return /* @__PURE__ */ o(we.Portal, { "data-slot": "dialog-portal", ...r });
}
function vv({ ...r }) {
  return /* @__PURE__ */ o(we.Close, { "data-slot": "dialog-close", ...r });
}
function zd({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    we.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: f(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        r
      ),
      ...e
    }
  );
}
function cl({
  className: r,
  children: e,
  showCloseButton: t = !0,
  ...n
}) {
  return /* @__PURE__ */ T(Bd, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ o(zd, {}),
    /* @__PURE__ */ T(
      we.Content,
      {
        "data-slot": "dialog-content",
        className: f(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          r
        ),
        ...n,
        children: [
          e,
          t && /* @__PURE__ */ T(
            we.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ o(Go, {}),
                /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function dl({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "dialog-header",
      className: f("flex flex-col gap-2 text-center sm:text-left", r),
      ...e
    }
  );
}
function $d({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "dialog-footer",
      className: f("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", r),
      ...e
    }
  );
}
function ul({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    we.Title,
    {
      "data-slot": "dialog-title",
      className: f("text-lg leading-none font-semibold", r),
      ...e
    }
  );
}
function fl({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    we.Description,
    {
      "data-slot": "dialog-description",
      className: f("text-muted-foreground text-sm", r),
      ...e
    }
  );
}
function ye({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    cd.Root,
    {
      "data-slot": "label",
      className: f(
        "flex items-center gap-2 leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        r
      ),
      ...e
    }
  );
}
function na({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    nr,
    {
      "data-slot": "command",
      className: f(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        r
      ),
      ...e
    }
  );
}
function xv({
  title: r = "Command Palette",
  description: e = "Search for a command to run...",
  children: t,
  className: n,
  showCloseButton: s = !0,
  ...i
}) {
  return /* @__PURE__ */ T(ll, { ...i, children: [
    /* @__PURE__ */ T(dl, { className: "sr-only", children: [
      /* @__PURE__ */ o(ul, { children: r }),
      /* @__PURE__ */ o(fl, { children: e })
    ] }),
    /* @__PURE__ */ o(
      cl,
      {
        className: f("overflow-hidden p-0", n),
        showCloseButton: s,
        children: /* @__PURE__ */ o(na, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: t })
      }
    )
  ] });
}
function hl({
  className: r,
  label: e,
  error: t,
  required: n,
  id: s,
  ...i
}) {
  const a = e || t, c = /* @__PURE__ */ o("div", { className: "px-1 pt-1", children: /* @__PURE__ */ T(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: f(
        "flex h-9 items-center gap-2 rounded-md border px-3",
        t && "border-destructive"
      ),
      children: [
        /* @__PURE__ */ o($c, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ o(
          nr.Input,
          {
            id: s,
            "data-slot": "command-input",
            "aria-invalid": !!t,
            className: f(
              "placeholder:text-muted-foreground flex h-10 w-full bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              t && "focus-visible:ring-destructive",
              r
            ),
            ...i
          }
        )
      ]
    }
  ) });
  return a ? /* @__PURE__ */ T("div", { className: "flex flex-col gap-1", children: [
    e && /* @__PURE__ */ T(ye, { htmlFor: s, children: [
      e,
      n && /* @__PURE__ */ o("span", { className: "text-destructive", children: "*" })
    ] }),
    c,
    t && /* @__PURE__ */ o("div", { className: "text-destructive text-sm", role: "alert", children: t })
  ] }) : c;
}
function ml({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    nr.List,
    {
      "data-slot": "command-list",
      className: f("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", r),
      ...e
    }
  );
}
function gl({ ...r }) {
  return /* @__PURE__ */ o(
    nr.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...r
    }
  );
}
function pl({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    nr.Group,
    {
      "data-slot": "command-group",
      className: f(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        r
      ),
      ...e
    }
  );
}
function yv({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    nr.Separator,
    {
      "data-slot": "command-separator",
      className: f("bg-border -mx-1 h-px", r),
      ...e
    }
  );
}
function bl({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    nr.Item,
    {
      "data-slot": "command-item",
      className: f(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        r
      ),
      ...e
    }
  );
}
function wv({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "span",
    {
      "data-slot": "command-shortcut",
      className: f("text-muted-foreground ml-auto text-xs tracking-widest", r),
      ...e
    }
  );
}
function gs({ ...r }) {
  return /* @__PURE__ */ o(dn.Root, { "data-slot": "popover", ...r });
}
function ps({ ...r }) {
  return /* @__PURE__ */ o(dn.Trigger, { "data-slot": "popover-trigger", ...r });
}
function bs({
  className: r,
  align: e = "center",
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ o(dn.Portal, { children: /* @__PURE__ */ o(
    dn.Content,
    {
      "data-slot": "popover-content",
      align: e,
      sideOffset: t,
      className: f(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        r
      ),
      ...n
    }
  ) });
}
function Nv({ ...r }) {
  return /* @__PURE__ */ o(dn.Anchor, { "data-slot": "popover-anchor", ...r });
}
function Pd({
  options: r,
  value: e,
  onChange: t,
  label: n,
  error: s,
  required: i,
  placeholder: a = "Select option...",
  searchPlaceholder: c = "Search...",
  emptyMessage: d = "No results found.",
  disabled: u = !1,
  readonly: g = !1,
  size: b = "md",
  showClearIcon: m = !0,
  showArrowIcon: p = !0,
  suffix: N,
  className: S,
  triggerClassName: C,
  popoverClassName: y
}) {
  const [E, I] = _.useState(!1), D = _.useMemo(
    () => r.find((Y) => Y.id === e),
    [r, e]
  ), j = !u && !g && !!e, Z = (Y) => {
    t?.(Y.id, Y), I(!1);
  }, ee = (Y) => {
    Y.preventDefault(), Y.stopPropagation(), j && t?.("", void 0);
  }, se = /* @__PURE__ */ T(gs, { open: E, onOpenChange: I, children: [
    /* @__PURE__ */ o(ps, { asChild: !0, children: /* @__PURE__ */ T(
      pe,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": E,
        disabled: u,
        size: b,
        className: f(
          "w-full justify-between group/combobox",
          !e && "text-muted-foreground",
          s && "border-destructive",
          C
        ),
        children: [
          /* @__PURE__ */ o("span", { className: "flex-1 text-left truncate", children: D ? D.name : a }),
          /* @__PURE__ */ T("div", { className: "flex items-center gap-1 shrink-0 ml-2", children: [
            e && j ? /* @__PURE__ */ T(
              "span",
              {
                onMouseDown: (Y) => {
                  Y.preventDefault(), Y.stopPropagation();
                },
                onClick: ee,
                className: "cursor-pointer",
                children: [
                  m && /* @__PURE__ */ o(Vo, { className: "text-muted-foreground hidden group-hover/combobox:block h-4 w-4" }),
                  p && /* @__PURE__ */ o(ss, { className: "text-muted-foreground block group-hover/combobox:hidden h-4 w-4" })
                ]
              }
            ) : p && /* @__PURE__ */ o(ss, { className: "text-muted-foreground h-4 w-4" }),
            N
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ o(
      bs,
      {
        className: f("w-(--radix-popover-trigger-width) p-0", y),
        align: "start",
        children: /* @__PURE__ */ T(na, { children: [
          /* @__PURE__ */ o(hl, { placeholder: c }),
          /* @__PURE__ */ T(ml, { children: [
            /* @__PURE__ */ o(gl, { children: d }),
            /* @__PURE__ */ o(pl, { children: r.map((Y) => /* @__PURE__ */ T(
              bl,
              {
                value: Y.name,
                disabled: Y.disabled,
                onSelect: () => Z(Y),
                className: "flex items-center justify-between gap-2",
                children: [
                  /* @__PURE__ */ o("span", { className: "flex-1 truncate", children: Y.name }),
                  /* @__PURE__ */ o(
                    rr,
                    {
                      className: f(
                        "h-4 w-4 shrink-0 text-primary",
                        e === Y.id ? "opacity-100" : "opacity-0"
                      )
                    }
                  )
                ]
              },
              Y.id
            )) })
          ] })
        ] })
      }
    )
  ] });
  return !n && !s ? /* @__PURE__ */ o("div", { className: f("w-full", S), children: se }) : /* @__PURE__ */ T("div", { className: f("w-full", S), children: [
    n && /* @__PURE__ */ T(ye, { className: "text-foreground leading-5 block", children: [
      n,
      i && /* @__PURE__ */ o("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ o("div", { className: n ? "mt-1" : "", children: se }),
    s && /* @__PURE__ */ o("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: s })
  ] });
}
function Ev({ ...r }) {
  return /* @__PURE__ */ o(Te.Root, { "data-slot": "context-menu", ...r });
}
function Sv({
  ...r
}) {
  return /* @__PURE__ */ o(Te.Trigger, { "data-slot": "context-menu-trigger", ...r });
}
function Tv({ ...r }) {
  return /* @__PURE__ */ o(Te.Group, { "data-slot": "context-menu-group", ...r });
}
function Cv({ ...r }) {
  return /* @__PURE__ */ o(Te.Portal, { "data-slot": "context-menu-portal", ...r });
}
function Av({ ...r }) {
  return /* @__PURE__ */ o(Te.Sub, { "data-slot": "context-menu-sub", ...r });
}
function kv({
  ...r
}) {
  return /* @__PURE__ */ o(Te.RadioGroup, { "data-slot": "context-menu-radio-group", ...r });
}
function _v({
  className: r,
  inset: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ T(
    Te.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": e,
      className: f(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        r
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ o(xn, { className: "ml-auto" })
      ]
    }
  );
}
function Lv({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    Te.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: f(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        r
      ),
      ...e
    }
  );
}
function Iv({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(Te.Portal, { children: /* @__PURE__ */ o(
    Te.Content,
    {
      "data-slot": "context-menu-content",
      className: f(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        r
      ),
      ...e
    }
  ) });
}
function Ov({
  className: r,
  inset: e,
  variant: t = "default",
  ...n
}) {
  return /* @__PURE__ */ o(
    Te.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": e,
      "data-variant": t,
      className: f(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        r
      ),
      ...n
    }
  );
}
function qv({
  className: r,
  children: e,
  checked: t,
  ...n
}) {
  return /* @__PURE__ */ T(
    Te.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: f(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        r
      ),
      checked: t,
      ...n,
      children: [
        /* @__PURE__ */ o("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ o(Te.ItemIndicator, { children: /* @__PURE__ */ o(rr, { className: "size-4" }) }) }),
        e
      ]
    }
  );
}
function Rv({
  className: r,
  children: e,
  ...t
}) {
  return /* @__PURE__ */ T(
    Te.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: f(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        r
      ),
      ...t,
      children: [
        /* @__PURE__ */ o("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ o(Te.ItemIndicator, { children: /* @__PURE__ */ o(fs, { className: "size-2 fill-current" }) }) }),
        e
      ]
    }
  );
}
function Mv({
  className: r,
  inset: e,
  ...t
}) {
  return /* @__PURE__ */ o(
    Te.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": e,
      className: f("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", r),
      ...t
    }
  );
}
function Dv({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    Te.Separator,
    {
      "data-slot": "context-menu-separator",
      className: f("bg-border -mx-1 my-1 h-px", r),
      ...e
    }
  );
}
function Bv({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: f("text-muted-foreground ml-auto text-xs tracking-widest", r),
      ...e
    }
  );
}
function sn({
  className: r,
  children: e,
  ...t
}) {
  return /* @__PURE__ */ T(
    nn.Root,
    {
      "data-slot": "scroll-area",
      className: f("relative", r),
      ...t,
      children: [
        /* @__PURE__ */ o(
          nn.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: e
          }
        ),
        /* @__PURE__ */ o(jd, {}),
        /* @__PURE__ */ o(nn.Corner, {})
      ]
    }
  );
}
function jd({
  className: r,
  orientation: e = "vertical",
  ...t
}) {
  return /* @__PURE__ */ o(
    nn.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: e,
      className: f(
        "flex touch-none p-px transition-colors select-none",
        e === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        e === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        r
      ),
      ...t,
      children: /* @__PURE__ */ o(
        nn.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
function Fd({
  value: r,
  onChange: e,
  locale: t,
  monthNames: n,
  disabled: s,
  className: i
}) {
  const [a, c] = _.useState(() => r ? r.getFullYear() : (/* @__PURE__ */ new Date()).getFullYear()), [d, u] = _.useState(() => r ? r.getMonth() : (/* @__PURE__ */ new Date()).getMonth()), g = _.useRef(null), b = _.useRef(null);
  _.useEffect(() => {
    if (r) {
      const y = r.getFullYear(), E = r.getMonth();
      (a !== y || d !== E) && (c(y), u(E));
    } else {
      const y = /* @__PURE__ */ new Date(), E = y.getFullYear(), I = y.getMonth();
      (a !== E || d !== I) && (c(E), u(I));
    }
  }, [r]), _.useEffect(() => {
    if (!g.current) return;
    const y = setTimeout(() => {
      const E = g.current?.querySelector(
        `[data-month="${d}"]`
      );
      if (E && g.current) {
        const I = g.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (I) {
          const D = E.offsetTop;
          I.scrollTo({ top: D, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(y);
  }, [d]), _.useEffect(() => {
    if (!b.current) return;
    const y = setTimeout(() => {
      const E = b.current?.querySelector(
        `[data-year="${a}"]`
      );
      if (E && b.current) {
        const I = b.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (I) {
          const D = E.offsetTop;
          I.scrollTo({ top: D, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(y);
  }, [a]);
  const m = _.useCallback(
    (y) => {
      u(y);
      const E = new Date(a, y, 1);
      e(Xt(E));
    },
    [a, e]
  ), p = _.useCallback(
    (y) => {
      c(y);
      const E = new Date(y, d, 1);
      e(Xt(E));
    },
    [d, e]
  ), N = _.useMemo(() => {
    if (n && n.length === 12)
      return n;
    const y = typeof t == "string" ? t : t?.code || "en-US", E = new Intl.DateTimeFormat(y, { month: "long" });
    return Array.from({ length: 12 }, (I, D) => {
      const j = new Date(2024, D, 1);
      return E.format(j);
    });
  }, [t, n]), S = _.useMemo(
    () => Array.from({ length: 100 }, (y, E) => (/* @__PURE__ */ new Date()).getFullYear() - 50 + E),
    []
  ), C = _.useMemo(() => r ? `${N[d]} ${a}` : `${N[(/* @__PURE__ */ new Date()).getMonth()]} ${(/* @__PURE__ */ new Date()).getFullYear()}`, [r, N, d, a]);
  return /* @__PURE__ */ T("div", { className: f("flex flex-col h-full", i), children: [
    /* @__PURE__ */ o("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ o("div", { className: "font-medium text-lg", children: C }) }),
    /* @__PURE__ */ T("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ o(sn, { className: "w-30 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ o("div", { ref: g, className: "px-2", children: N.map((y, E) => {
        const I = d === E, D = s ? s(new Date(a, E, 1)) : !1;
        return /* @__PURE__ */ o(
          "div",
          {
            "data-month": E,
            onClick: () => !D && m(E),
            className: f(
              "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
              I ? "bg-secondary" : "hover:bg-accent",
              D && "opacity-50 cursor-not-allowed"
            ),
            children: y
          },
          E
        );
      }) }) }),
      /* @__PURE__ */ o(sn, { className: "flex-1 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ o("div", { ref: b, className: "px-2", children: S.map((y) => /* @__PURE__ */ o(
        "div",
        {
          "data-year": y,
          onClick: () => p(y),
          className: f(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            a === y ? "bg-secondary" : "hover:bg-accent"
          ),
          children: y
        },
        y
      )) }) })
    ] })
  ] });
}
function Ra({ value: r, onChange: e, showSeconds: t = !0, className: n }) {
  const s = _.useRef(null), i = _.useRef(null), a = _.useRef(null), c = parseInt(r.hour, 10) || 0, d = parseInt(r.minute, 10) || 0, u = parseInt(r.second, 10) || 0, g = Array.from({ length: 24 }, (y, E) => E), b = Array.from({ length: 60 }, (y, E) => E), m = Array.from({ length: 60 }, (y, E) => E);
  _.useEffect(() => {
    const y = setTimeout(() => {
      if (s.current) {
        const E = s.current.querySelector(
          `[data-hour="${c}"]`
        );
        if (E) {
          const I = s.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (I) {
            const D = E.offsetTop;
            I.scrollTo({ top: D, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(y);
  }, [c]), _.useEffect(() => {
    const y = setTimeout(() => {
      if (i.current) {
        const E = i.current.querySelector(
          `[data-minute="${d}"]`
        );
        if (E) {
          const I = i.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (I) {
            const D = E.offsetTop;
            I.scrollTo({ top: D, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(y);
  }, [d]), _.useEffect(() => {
    if (!t) return;
    const y = setTimeout(() => {
      if (a.current) {
        const E = a.current.querySelector(
          `[data-second="${u}"]`
        );
        if (E) {
          const I = a.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (I) {
            const D = E.offsetTop;
            I.scrollTo({ top: D, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(y);
  }, [u, t]);
  const p = (y) => {
    e({
      ...r,
      hour: y.toString().padStart(2, "0")
    });
  }, N = (y) => {
    e({
      ...r,
      minute: y.toString().padStart(2, "0")
    });
  }, S = (y) => {
    e({
      ...r,
      second: y.toString().padStart(2, "0")
    });
  }, C = `${r.hour}:${r.minute}${t ? `:${r.second}` : ""}`;
  return /* @__PURE__ */ T("div", { className: f("flex flex-col h-full border-l", n), children: [
    /* @__PURE__ */ o("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ o("div", { className: "font-medium text-lg", children: C }) }),
    /* @__PURE__ */ T("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ o(sn, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ o("div", { ref: s, className: "px-2", children: g.map((y) => /* @__PURE__ */ o(
        "div",
        {
          "data-hour": y,
          onClick: () => p(y),
          className: f(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            c === y ? "bg-secondary" : "hover:bg-accent"
          ),
          children: y.toString().padStart(2, "0")
        },
        y
      )) }) }),
      /* @__PURE__ */ o(sn, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:overflow-hidden", children: /* @__PURE__ */ o("div", { ref: i, className: "px-2", children: b.map((y) => /* @__PURE__ */ o(
        "div",
        {
          "data-minute": y,
          onClick: () => N(y),
          className: f(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            d === y ? "bg-secondary" : "hover:bg-accent"
          ),
          children: y.toString().padStart(2, "0")
        },
        y
      )) }) }),
      t && /* @__PURE__ */ o(sn, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ o("div", { ref: a, className: "px-2", children: m.map((y) => /* @__PURE__ */ o(
        "div",
        {
          "data-second": y,
          onClick: () => S(y),
          className: f(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            u === y ? "bg-secondary" : "hover:bg-accent"
          ),
          children: y.toString().padStart(2, "0")
        },
        y
      )) }) })
    ] })
  ] });
}
function Ud({
  value: r,
  onChange: e,
  placeholder: t = "Pick a date",
  dateFormat: n = "dd/MM/yyyy",
  showTime: s = !1,
  timeOnly: i = !1,
  mode: a = "single",
  label: c,
  error: d,
  required: u,
  disabled: g = !1,
  disabledPast: b = !1,
  disabledFuture: m = !1,
  onDisabled: p,
  size: N = "md",
  className: S,
  triggerClassName: C,
  popoverClassName: y,
  locale: E,
  cancelText: I,
  applyText: D,
  monthNames: j,
  ...Z
}) {
  const [ee, se] = _.useState(!1), [Y, re] = _.useState(r), [v, M] = _.useState(() => r || /* @__PURE__ */ new Date()), [w, A] = _.useState(() => r ? {
    hour: r.getHours().toString().padStart(2, "0"),
    minute: r.getMinutes().toString().padStart(2, "0"),
    second: r.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }), O = _.useRef(r), k = _.useRef(r || /* @__PURE__ */ new Date()), R = () => r ? {
    hour: r.getHours().toString().padStart(2, "0"),
    minute: r.getMinutes().toString().padStart(2, "0"),
    second: r.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }, z = _.useRef(R());
  _.useEffect(() => {
    ee && (O.current = r, k.current = r || /* @__PURE__ */ new Date(), z.current = r ? {
      hour: r.getHours().toString().padStart(2, "0"),
      minute: r.getMinutes().toString().padStart(2, "0"),
      second: r.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }, i ? A(r ? {
      hour: r.getHours().toString().padStart(2, "0"),
      minute: r.getMinutes().toString().padStart(2, "0"),
      second: r.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }) : a === "month" ? re(r ? Xt(r) : Xt(/* @__PURE__ */ new Date())) : (re(r), r ? (M(r), s && A({
      hour: r.getHours().toString().padStart(2, "0"),
      minute: r.getMinutes().toString().padStart(2, "0"),
      second: r.getSeconds().toString().padStart(2, "0")
    })) : (M(/* @__PURE__ */ new Date()), s && A({ hour: "00", minute: "00", second: "00" }))));
  }, [ee, r, s, i, a]), _.useEffect(() => {
    !ee && !i ? (re(r), r && (M(r), s && A({
      hour: r.getHours().toString().padStart(2, "0"),
      minute: r.getMinutes().toString().padStart(2, "0"),
      second: r.getSeconds().toString().padStart(2, "0")
    }))) : !ee && i && r && A({
      hour: r.getHours().toString().padStart(2, "0"),
      minute: r.getMinutes().toString().padStart(2, "0"),
      second: r.getSeconds().toString().padStart(2, "0")
    });
  }, [r, s, i, ee]);
  const B = () => {
    if (i) {
      const ne = Ca(
        Aa(ka(r || /* @__PURE__ */ new Date(), parseInt(w.hour, 10)), parseInt(w.minute, 10)),
        parseInt(w.second, 10)
      );
      e?.(ne);
    } else if (a === "month")
      e?.(Y ? Xt(Y) : void 0);
    else if (Y) {
      let P = Y;
      s && (P = ka(P, parseInt(w.hour, 10)), P = Aa(P, parseInt(w.minute, 10)), P = Ca(P, parseInt(w.second, 10))), e?.(P);
    } else
      e?.(void 0);
    se(!1);
  }, $ = () => {
    re(O.current), M(k.current), s && A(z.current), se(!1);
  }, W = _.useMemo(() => {
    if (!r) return t;
    const P = E && typeof E != "string" ? { locale: E } : void 0;
    if (i)
      return /[Hhms]/.test(n) ? Nt(r, n, P) : Nt(r, "HH:mm:ss", P);
    if (a === "month") {
      if (E) {
        const ne = typeof E == "string" ? E : E?.code || "en-US";
        return new Intl.DateTimeFormat(ne, { month: "2-digit", year: "numeric" }).format(r);
      }
      return Nt(r, "MM/yyyy", P);
    }
    return s ? /[Hhms]/.test(n) ? Nt(r, n, P) : Nt(r, `${n} HH:mm:ss`, P) : Nt(r, n, P);
  }, [r, n, s, i, a, t, E]), K = _.useCallback(
    (P) => {
      if (g) return !0;
      const ne = /* @__PURE__ */ new Date();
      ne.setHours(0, 0, 0, 0);
      const ue = new Date(P);
      return ue.setHours(0, 0, 0, 0), b && ue < ne || m && ue > ne ? !0 : p ? p(P) : !1;
    },
    [g, b, m, p]
  ), V = _.useMemo(
    () => ({
      ...Z,
      mode: "single",
      selected: Y,
      onSelect: re,
      defaultMonth: v,
      month: v,
      onMonthChange: M,
      captionLayout: "dropdown",
      disabled: K,
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: E
    }),
    [Z, Y, v, K, E]
  ), X = /* @__PURE__ */ T(gs, { open: ee, onOpenChange: se, children: [
    /* @__PURE__ */ o(ps, { asChild: !0, children: /* @__PURE__ */ T(
      pe,
      {
        variant: "outline",
        size: N,
        disabled: g,
        className: f(
          "group w-full justify-between",
          !r && "text-muted-foreground",
          d && "border-destructive",
          C
        ),
        children: [
          /* @__PURE__ */ o("span", { children: W }),
          /* @__PURE__ */ o(Ko, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ o(
      bs,
      {
        className: f("flex w-auto flex-col gap-2 p-0", y),
        align: "start",
        children: /* @__PURE__ */ T("div", { className: "flex flex-col gap-2 pb-2", children: [
          i ? /* @__PURE__ */ o("div", { className: "flex h-[350px]", children: /* @__PURE__ */ o(
            Ra,
            {
              value: w,
              onChange: A,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : a === "month" ? /* @__PURE__ */ o("div", { className: "flex h-[350px]", children: /* @__PURE__ */ o(
            Fd,
            {
              value: Y,
              onChange: re,
              locale: E,
              monthNames: j,
              disabled: K,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : /* @__PURE__ */ T("div", { className: f("flex h-[350px]", s && "overflow-hidden"), children: [
            /* @__PURE__ */ o(nl, { initialFocus: !0, ...V }),
            s && /* @__PURE__ */ o(
              Ra,
              {
                value: w,
                onChange: A,
                className: "min-h-0 h-full shrink-0"
              }
            )
          ] }),
          /* @__PURE__ */ o(Et, { className: "shrink-0" }),
          /* @__PURE__ */ T("div", { className: "flex justify-end gap-2 px-2 shrink-0", children: [
            /* @__PURE__ */ o(pe, { variant: "secondary", size: "sm", onClick: $, children: I || "Cancel" }),
            /* @__PURE__ */ o(pe, { size: "sm", onClick: B, children: D || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return c || d ? /* @__PURE__ */ T("div", { className: f("w-full", S), children: [
    c && /* @__PURE__ */ T(ye, { className: "text-foreground leading-5 block", children: [
      c,
      u && /* @__PURE__ */ o("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ o("div", { className: c ? "mt-1" : "", children: X }),
    d && /* @__PURE__ */ o("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: d })
  ] }) : /* @__PURE__ */ o("div", { className: f("w-full", S), children: X });
}
const Hd = () => {
  const r = /* @__PURE__ */ new Date();
  return [
    {
      label: "Hôm nay",
      range: {
        from: ud(r),
        to: dd(r)
      }
    },
    {
      label: "Tuần trước",
      range: {
        from: hd(La(r, 1), { weekStartsOn: 1 }),
        to: fd(La(r, 1), { weekStartsOn: 1 })
      }
    },
    {
      label: "Tháng trước",
      range: {
        from: Xt(Gn(r, 1)),
        to: _a(Gn(r, 1))
      }
    },
    {
      label: "3 tháng trước",
      range: {
        from: Xt(Gn(r, 3)),
        to: _a(Gn(r, 3))
      }
    }
  ];
};
function Gd({
  value: r,
  onChange: e,
  placeholder: t = { from: "From date", to: "To date" },
  dateFormat: n = "dd/MM/yyyy",
  presets: s,
  showPresets: i,
  label: a,
  error: c,
  required: d,
  disabled: u = !1,
  disabledPast: g = !1,
  disabledFuture: b = !1,
  onDisabled: m,
  size: p = "md",
  className: N,
  triggerClassName: S,
  popoverClassName: C,
  locale: y,
  cancelText: E,
  applyText: I,
  ...D
}) {
  const [j, Z] = _.useState(!1), [ee, se] = _.useState(r), [Y, re] = _.useState(() => r?.to || r?.from || /* @__PURE__ */ new Date()), v = _.useRef(r), M = _.useRef(r?.to || r?.from || /* @__PURE__ */ new Date());
  _.useEffect(() => {
    j && (v.current = r, M.current = r?.to || r?.from || /* @__PURE__ */ new Date(), se(r), r?.to ? re(r.to) : r?.from ? re(r.from) : re(/* @__PURE__ */ new Date()));
  }, [j, r]), _.useEffect(() => {
    se(r), r?.to ? re(r.to) : r?.from && re(r.from);
  }, [r]);
  const w = _.useCallback(
    (V) => {
      if (u) return !0;
      const X = /* @__PURE__ */ new Date();
      X.setHours(0, 0, 0, 0);
      const P = new Date(V);
      return P.setHours(0, 0, 0, 0), g && P < X || b && P > X ? !0 : m ? m(V) : !1;
    },
    [u, g, b, m]
  ), A = _.useMemo(() => Hd(), []), O = s ?? A, k = i !== void 0 ? i : O.length > 0, R = () => {
    e?.(ee), Z(!1);
  }, z = () => {
    se(v.current), re(M.current), Z(!1);
  }, B = (V) => {
    se(V.range), V.range.to ? re(V.range.to) : V.range.from && re(V.range.from);
  }, $ = _.useMemo(() => {
    if (!r?.from) return t.from || "Pick a date";
    const V = y && typeof y != "string" ? { locale: y } : void 0;
    return r.from && r.to ? `${Nt(r.from, n, V)} - ${Nt(r.to, n, V)}` : Nt(r.from, n, V);
  }, [r, n, t, y]), W = _.useMemo(
    () => ({
      ...D,
      mode: "range",
      selected: ee,
      onSelect: se,
      defaultMonth: Y,
      month: Y,
      onMonthChange: re,
      disabled: w,
      captionLayout: "dropdown",
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: y
    }),
    [D, ee, Y, w, y]
  ), K = /* @__PURE__ */ T(gs, { open: j, onOpenChange: Z, children: [
    /* @__PURE__ */ o(ps, { asChild: !0, children: /* @__PURE__ */ T(
      pe,
      {
        variant: "outline",
        size: p,
        disabled: u,
        className: f(
          "group w-full justify-between",
          !r?.from && "text-muted-foreground",
          c && "border-destructive",
          S
        ),
        children: [
          /* @__PURE__ */ o("span", { children: $ }),
          /* @__PURE__ */ o(Ko, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ o(
      bs,
      {
        className: f("flex w-auto flex-col gap-2 p-0 pb-2", C),
        align: "start",
        children: /* @__PURE__ */ T("div", { className: "flex flex-col gap-2 pb-2", children: [
          /* @__PURE__ */ T("div", { className: "flex", children: [
            k && /* @__PURE__ */ o("div", { className: "border-r p-2 w-fit", children: /* @__PURE__ */ o("div", { className: "space-y-1", children: O.map((V, X) => /* @__PURE__ */ o(
              pe,
              {
                variant: "ghost",
                size: "sm",
                className: "block text-left font-normal",
                onClick: () => B(V),
                children: V.label
              },
              X
            )) }) }),
            /* @__PURE__ */ o("div", { className: "flex-1", children: /* @__PURE__ */ o(nl, { initialFocus: !0, ...W }) })
          ] }),
          /* @__PURE__ */ o(Et, {}),
          /* @__PURE__ */ T("div", { className: "flex justify-end gap-2 px-2", children: [
            /* @__PURE__ */ o(pe, { variant: "secondary", onClick: z, children: E || "Cancel" }),
            /* @__PURE__ */ o(pe, { onClick: R, children: I || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return a || c ? /* @__PURE__ */ T("div", { className: f("w-full", N), children: [
    a && /* @__PURE__ */ T(ye, { className: "text-foreground leading-5 block", children: [
      a,
      d && /* @__PURE__ */ o("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ o("div", { className: a ? "mt-1" : "", children: K }),
    c && /* @__PURE__ */ o("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: c })
  ] }) : /* @__PURE__ */ o("div", { className: f("w-full", N), children: K });
}
function zv({ ...r }) {
  return /* @__PURE__ */ o(zt.Root, { "data-slot": "drawer", ...r });
}
function $v({ ...r }) {
  return /* @__PURE__ */ o(zt.Trigger, { "data-slot": "drawer-trigger", ...r });
}
function Vd({ ...r }) {
  return /* @__PURE__ */ o(zt.Portal, { "data-slot": "drawer-portal", ...r });
}
function Pv({ ...r }) {
  return /* @__PURE__ */ o(zt.Close, { "data-slot": "drawer-close", ...r });
}
function Kd({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    zt.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: f(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        r
      ),
      ...e
    }
  );
}
function jv({
  className: r,
  children: e,
  ...t
}) {
  return /* @__PURE__ */ T(Vd, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ o(Kd, {}),
    /* @__PURE__ */ T(
      zt.Content,
      {
        "data-slot": "drawer-content",
        className: f(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          r
        ),
        ...t,
        children: [
          /* @__PURE__ */ o("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          e
        ]
      }
    )
  ] });
}
function Fv({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "drawer-header",
      className: f(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        r
      ),
      ...e
    }
  );
}
function Uv({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "drawer-footer",
      className: f("mt-auto flex flex-col gap-2 p-4", r),
      ...e
    }
  );
}
function Hv({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    zt.Title,
    {
      "data-slot": "drawer-title",
      className: f("text-foreground font-semibold", r),
      ...e
    }
  );
}
function Gv({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    zt.Description,
    {
      "data-slot": "drawer-description",
      className: f("text-muted-foreground text-sm", r),
      ...e
    }
  );
}
function Vv({ ...r }) {
  return /* @__PURE__ */ o(Ce.Root, { "data-slot": "dropdown-menu", ...r });
}
function Kv({
  ...r
}) {
  return /* @__PURE__ */ o(Ce.Portal, { "data-slot": "dropdown-menu-portal", ...r });
}
function Wv({
  ...r
}) {
  return /* @__PURE__ */ o(Ce.Trigger, { "data-slot": "dropdown-menu-trigger", ...r });
}
function Zv({
  className: r,
  sideOffset: e = 4,
  ...t
}) {
  return /* @__PURE__ */ o(Ce.Portal, { children: /* @__PURE__ */ o(
    Ce.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: e,
      className: f(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        r
      ),
      ...t
    }
  ) });
}
function Yv({ ...r }) {
  return /* @__PURE__ */ o(Ce.Group, { "data-slot": "dropdown-menu-group", ...r });
}
function Xv({
  className: r,
  inset: e,
  variant: t = "default",
  ...n
}) {
  return /* @__PURE__ */ o(
    Ce.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": e,
      "data-variant": t,
      className: f(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        r
      ),
      ...n
    }
  );
}
function Qv({
  className: r,
  children: e,
  checked: t,
  ...n
}) {
  return /* @__PURE__ */ T(
    Ce.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: f(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        r
      ),
      checked: t,
      ...n,
      children: [
        /* @__PURE__ */ o("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ o(Ce.ItemIndicator, { children: /* @__PURE__ */ o(rr, { className: "size-4" }) }) }),
        e
      ]
    }
  );
}
function Jv({
  ...r
}) {
  return /* @__PURE__ */ o(Ce.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...r });
}
function ex({
  className: r,
  children: e,
  ...t
}) {
  return /* @__PURE__ */ T(
    Ce.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: f(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        r
      ),
      ...t,
      children: [
        /* @__PURE__ */ o("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ o(Ce.ItemIndicator, { children: /* @__PURE__ */ o(fs, { className: "size-2 fill-current" }) }) }),
        e
      ]
    }
  );
}
function tx({
  className: r,
  inset: e,
  ...t
}) {
  return /* @__PURE__ */ o(
    Ce.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": e,
      className: f("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", r),
      ...t
    }
  );
}
function rx({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    Ce.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: f("bg-border -mx-1 my-1 h-px", r),
      ...e
    }
  );
}
function nx({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: f("text-muted-foreground ml-auto text-xs tracking-widest", r),
      ...e
    }
  );
}
function sx({ ...r }) {
  return /* @__PURE__ */ o(Ce.Sub, { "data-slot": "dropdown-menu-sub", ...r });
}
function ix({
  className: r,
  inset: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ T(
    Ce.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": e,
      className: f(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        r
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ o(xn, { className: "ml-auto size-4" })
      ]
    }
  );
}
function ax({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    Ce.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: f(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        r
      ),
      ...e
    }
  );
}
function Wd({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "empty",
      className: f(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        r
      ),
      ...e
    }
  );
}
function Zd({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "empty-header",
      className: f("flex max-w-sm flex-col items-center gap-2 text-center", r),
      ...e
    }
  );
}
const Yd = $e(
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
function Xd({
  className: r,
  variant: e = "default",
  ...t
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": e,
      className: f(Yd({ variant: e, className: r })),
      ...t
    }
  );
}
function Qd({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "empty-title",
      className: f("text-lg font-medium tracking-tight", r),
      ...e
    }
  );
}
function Jd({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "empty-description",
      className: f(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        r
      ),
      ...e
    }
  );
}
function eu({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "empty-content",
      className: f(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        r
      ),
      ...e
    }
  );
}
function ox({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "fieldset",
    {
      "data-slot": "field-set",
      className: f(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        r
      ),
      ...e
    }
  );
}
function lx({
  className: r,
  variant: e = "legend",
  ...t
}) {
  return /* @__PURE__ */ o(
    "legend",
    {
      "data-slot": "field-legend",
      "data-variant": e,
      className: f(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        r
      ),
      ...t
    }
  );
}
function cx({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "field-group",
      className: f(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        r
      ),
      ...e
    }
  );
}
const tu = $e("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", {
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
function dx({
  className: r,
  orientation: e = "vertical",
  ...t
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": e,
      className: f(tu({ orientation: e }), r),
      ...t
    }
  );
}
function ux({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "field-content",
      className: f("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", r),
      ...e
    }
  );
}
function fx({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    ye,
    {
      "data-slot": "field-label",
      className: f(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        r
      ),
      ...e
    }
  );
}
function hx({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "field-label",
      className: f(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        r
      ),
      ...e
    }
  );
}
function mx({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "p",
    {
      "data-slot": "field-description",
      className: f(
        "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        r
      ),
      ...e
    }
  );
}
function gx({
  children: r,
  className: e,
  ...t
}) {
  return /* @__PURE__ */ T(
    "div",
    {
      "data-slot": "field-separator",
      "data-content": !!r,
      className: f(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        e
      ),
      ...t,
      children: [
        /* @__PURE__ */ o(Et, { className: "absolute inset-0 top-1/2" }),
        r && /* @__PURE__ */ o(
          "span",
          {
            className: "bg-background text-muted-foreground relative mx-auto block w-fit px-2",
            "data-slot": "field-separator-content",
            children: r
          }
        )
      ]
    }
  );
}
function px({
  className: r,
  children: e,
  errors: t,
  ...n
}) {
  const s = qc(() => {
    if (e)
      return e;
    if (!t?.length)
      return null;
    const i = [...new Map(t.map((a) => [a?.message, a])).values()];
    return i?.length == 1 ? i[0]?.message : /* @__PURE__ */ o("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: i.map((a, c) => a?.message && /* @__PURE__ */ o("li", { children: a.message }, c)) });
  }, [e, t]);
  return s ? /* @__PURE__ */ o(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: f("text-destructive text-sm font-normal", r),
      ...n,
      children: s
    }
  ) : null;
}
const bx = md, vl = _.createContext({}), vx = ({
  ...r
}) => /* @__PURE__ */ o(vl.Provider, { value: { name: r.name }, children: /* @__PURE__ */ o(We, { ...r }) }), vs = () => {
  const r = _.useContext(vl), e = _.useContext(xl), { getFieldState: t } = gd(), n = je({ name: r.name }), s = t(r.name, n);
  if (!r)
    throw new Error("useFormField should be used within <FormField>");
  const { id: i } = e;
  return {
    id: i,
    name: r.name,
    formItemId: `${i}-form-item`,
    formDescriptionId: `${i}-form-item-description`,
    formMessageId: `${i}-form-item-message`,
    ...s
  };
}, xl = _.createContext({});
function xx({ className: r, ...e }) {
  const t = _.useId();
  return /* @__PURE__ */ o(xl.Provider, { value: { id: t }, children: /* @__PURE__ */ o("div", { "data-slot": "form-item", className: f("grid gap-2", r), ...e }) });
}
function yx({ className: r, ...e }) {
  const { error: t, formItemId: n } = vs();
  return /* @__PURE__ */ o(
    ye,
    {
      "data-slot": "form-label",
      "data-error": !!t,
      className: f("data-[error=true]:text-destructive", r),
      htmlFor: n,
      ...e
    }
  );
}
function wx({ ...r }) {
  const { error: e, formItemId: t, formDescriptionId: n, formMessageId: s } = vs();
  return /* @__PURE__ */ o(
    st,
    {
      "data-slot": "form-control",
      id: t,
      "aria-describedby": e ? `${n} ${s}` : `${n}`,
      "aria-invalid": !!e,
      ...r
    }
  );
}
function Nx({ className: r, ...e }) {
  const { formDescriptionId: t } = vs();
  return /* @__PURE__ */ o(
    "p",
    {
      "data-slot": "form-description",
      id: t,
      className: f("text-muted-foreground text-sm", r),
      ...e
    }
  );
}
function Ex({ className: r, ...e }) {
  const { error: t, formMessageId: n } = vs(), s = t ? String(t?.message ?? "") : e.children;
  return s ? /* @__PURE__ */ o(
    "p",
    {
      "data-slot": "form-message",
      id: n,
      className: f("text-destructive text-sm", r),
      ...e,
      children: s
    }
  ) : null;
}
function Sx({ ...r }) {
  return /* @__PURE__ */ o(is.Root, { "data-slot": "hover-card", ...r });
}
function Tx({ ...r }) {
  return /* @__PURE__ */ o(is.Trigger, { "data-slot": "hover-card-trigger", ...r });
}
function Cx({
  className: r,
  align: e = "center",
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ o(is.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ o(
    is.Content,
    {
      "data-slot": "hover-card-content",
      align: e,
      sideOffset: t,
      className: f(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        r
      ),
      ...n
    }
  ) });
}
function Pt({ className: r, type: e, label: t, error: n, required: s, id: i, size: a = "md", ...c }) {
  const d = t || n, u = /* @__PURE__ */ o(
    "input",
    {
      type: e,
      id: i,
      "data-slot": "input",
      "data-size": a,
      "aria-invalid": !!n,
      className: f(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        rl({ size: a }),
        a && te[a]?.padding,
        a === "xxs" && "file:h-5 file:text-xs",
        a === "xs" && "file:h-6 file:text-xs",
        a === "sm" && "file:h-7 file:text-xs",
        a === "md" && "file:h-8 file:text-sm",
        a === "lg" && "file:h-9 file:text-sm",
        a === "xl" && "file:h-10 file:text-sm",
        a === "xxl" && "file:h-11 file:text-base",
        n ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        r
      ),
      ...c
    }
  );
  return d ? /* @__PURE__ */ T("div", { className: "flex flex-col gap-1", children: [
    t && /* @__PURE__ */ T(ye, { htmlFor: i, children: [
      t,
      s && /* @__PURE__ */ o("span", { className: "text-destructive", children: "*" })
    ] }),
    u,
    n && /* @__PURE__ */ o("div", { className: "text-destructive text-sm", role: "alert", children: n })
  ] }) : u;
}
function yl({ className: r, label: e, error: t, required: n, id: s, size: i = "md", ...a }) {
  const c = e || t, d = /* @__PURE__ */ o(
    "textarea",
    {
      id: s,
      "data-slot": "textarea",
      "data-size": i,
      "aria-invalid": !!t,
      className: f(
        "border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content w-full rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50",
        rl({ size: i }),
        i && te[i]?.padding,
        i === "xxs" && "min-h-16",
        i === "xs" && "min-h-20",
        i === "sm" && "min-h-24",
        i === "md" && "min-h-28",
        i === "lg" && "min-h-32",
        i === "xl" && "min-h-36",
        i === "xxl" && "min-h-40",
        t ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        r
      ),
      ...a
    }
  );
  return c ? /* @__PURE__ */ T("div", { className: "flex flex-col gap-1", children: [
    e && /* @__PURE__ */ T(ye, { htmlFor: s, children: [
      e,
      n && /* @__PURE__ */ o("span", { className: "text-destructive", children: "*" })
    ] }),
    d,
    t && /* @__PURE__ */ o("div", { className: "text-destructive text-sm", role: "alert", children: t })
  ] }) : d;
}
function Ax({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: f(
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
        r
      ),
      ...e
    }
  );
}
const ru = $e(
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
function kx({
  className: r,
  align: e = "inline-start",
  ...t
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": e,
      className: f(ru({ align: e }), r),
      onClick: (n) => {
        n.target.closest("button") || n.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...t
    }
  );
}
const nu = $e("text-sm shadow-none flex gap-2 items-center", {
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
function _x({
  className: r,
  type: e = "button",
  variant: t = "ghost",
  size: n = "xs",
  ...s
}) {
  return /* @__PURE__ */ o(
    pe,
    {
      type: e,
      "data-size": n,
      variant: t,
      className: f(nu({ size: n }), r),
      ...s
    }
  );
}
function Lx({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "span",
    {
      className: f(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        r
      ),
      ...e
    }
  );
}
function Ix({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    Pt,
    {
      "data-slot": "input-group-control",
      className: f(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        r
      ),
      ...e
    }
  );
}
function Ox({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    yl,
    {
      "data-slot": "input-group-control",
      className: f(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        r
      ),
      ...e
    }
  );
}
function qx({
  className: r,
  containerClassName: e,
  ...t
}) {
  return /* @__PURE__ */ o(
    bd,
    {
      "data-slot": "input-otp",
      containerClassName: f("flex items-center gap-2 has-disabled:opacity-50", e),
      className: f("disabled:cursor-not-allowed", r),
      ...t
    }
  );
}
function Rx({ className: r, ...e }) {
  return /* @__PURE__ */ o("div", { "data-slot": "input-otp-group", className: f("flex items-center", r), ...e });
}
function Mx({
  index: r,
  className: e,
  ...t
}) {
  const n = _.useContext(vd), { char: s, hasFakeCaret: i, isActive: a } = n?.slots[r] ?? {};
  return /* @__PURE__ */ T(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": a,
      className: f(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        e
      ),
      ...t,
      children: [
        s,
        i && /* @__PURE__ */ o("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ o("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function Dx({ ...r }) {
  return /* @__PURE__ */ o("div", { "data-slot": "input-otp-separator", role: "separator", ...r, children: /* @__PURE__ */ o(Pc, {}) });
}
function Bx({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      role: "list",
      "data-slot": "item-group",
      className: f("group/item-group flex flex-col", r),
      ...e
    }
  );
}
function zx({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    Et,
    {
      "data-slot": "item-separator",
      orientation: "horizontal",
      className: f("my-0", r),
      ...e
    }
  );
}
const su = $e(
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
function $x({
  className: r,
  variant: e = "default",
  size: t = "default",
  asChild: n = !1,
  ...s
}) {
  return /* @__PURE__ */ o(
    n ? st : "div",
    {
      "data-slot": "item",
      "data-variant": e,
      "data-size": t,
      className: f(su({ variant: e, size: t, className: r })),
      ...s
    }
  );
}
const iu = $e(
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
function Px({
  className: r,
  variant: e = "default",
  ...t
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "item-media",
      "data-variant": e,
      className: f(iu({ variant: e, className: r })),
      ...t
    }
  );
}
function jx({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "item-content",
      className: f("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", r),
      ...e
    }
  );
}
function Fx({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "item-title",
      className: f("flex w-fit items-center gap-2 text-sm leading-snug font-medium", r),
      ...e
    }
  );
}
function Ux({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "p",
    {
      "data-slot": "item-description",
      className: f(
        "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        r
      ),
      ...e
    }
  );
}
function Hx({ className: r, ...e }) {
  return /* @__PURE__ */ o("div", { "data-slot": "item-actions", className: f("flex items-center gap-2", r), ...e });
}
function Gx({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "item-header",
      className: f("flex basis-full items-center justify-between gap-2", r),
      ...e
    }
  );
}
function Vx({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "item-footer",
      className: f("flex basis-full items-center justify-between gap-2", r),
      ...e
    }
  );
}
function Kx({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "kbd",
    {
      "data-slot": "kbd",
      className: f(
        "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        r
      ),
      ...e
    }
  );
}
function Wx({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "kbd",
    {
      "data-slot": "kbd-group",
      className: f("inline-flex items-center gap-1", r),
      ...e
    }
  );
}
function Zx({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    Ae.Root,
    {
      "data-slot": "menubar",
      className: f(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        r
      ),
      ...e
    }
  );
}
function Yx({ ...r }) {
  return /* @__PURE__ */ o(Ae.Menu, { "data-slot": "menubar-menu", ...r });
}
function Xx({ ...r }) {
  return /* @__PURE__ */ o(Ae.Group, { "data-slot": "menubar-group", ...r });
}
function au({ ...r }) {
  return /* @__PURE__ */ o(Ae.Portal, { "data-slot": "menubar-portal", ...r });
}
function Qx({ ...r }) {
  return /* @__PURE__ */ o(Ae.RadioGroup, { "data-slot": "menubar-radio-group", ...r });
}
function Jx({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    Ae.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: f(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        r
      ),
      ...e
    }
  );
}
function ey({
  className: r,
  align: e = "start",
  alignOffset: t = -4,
  sideOffset: n = 8,
  ...s
}) {
  return /* @__PURE__ */ o(au, { children: /* @__PURE__ */ o(
    Ae.Content,
    {
      "data-slot": "menubar-content",
      align: e,
      alignOffset: t,
      sideOffset: n,
      className: f(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        r
      ),
      ...s
    }
  ) });
}
function ty({
  className: r,
  inset: e,
  variant: t = "default",
  ...n
}) {
  return /* @__PURE__ */ o(
    Ae.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": e,
      "data-variant": t,
      className: f(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        r
      ),
      ...n
    }
  );
}
function ry({
  className: r,
  children: e,
  checked: t,
  ...n
}) {
  return /* @__PURE__ */ T(
    Ae.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: f(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        r
      ),
      checked: t,
      ...n,
      children: [
        /* @__PURE__ */ o("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ o(Ae.ItemIndicator, { children: /* @__PURE__ */ o(rr, { className: "size-4" }) }) }),
        e
      ]
    }
  );
}
function ny({
  className: r,
  children: e,
  ...t
}) {
  return /* @__PURE__ */ T(
    Ae.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: f(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        r
      ),
      ...t,
      children: [
        /* @__PURE__ */ o("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ o(Ae.ItemIndicator, { children: /* @__PURE__ */ o(fs, { className: "size-2 fill-current" }) }) }),
        e
      ]
    }
  );
}
function sy({
  className: r,
  inset: e,
  ...t
}) {
  return /* @__PURE__ */ o(
    Ae.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": e,
      className: f("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", r),
      ...t
    }
  );
}
function iy({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    Ae.Separator,
    {
      "data-slot": "menubar-separator",
      className: f("bg-border -mx-1 my-1 h-px", r),
      ...e
    }
  );
}
function ay({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: f("text-muted-foreground ml-auto text-xs tracking-widest", r),
      ...e
    }
  );
}
function oy({ ...r }) {
  return /* @__PURE__ */ o(Ae.Sub, { "data-slot": "menubar-sub", ...r });
}
function ly({
  className: r,
  inset: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ T(
    Ae.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": e,
      className: f(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        r
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ o(xn, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function cy({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    Ae.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: f(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        r
      ),
      ...e
    }
  );
}
function dy({
  options: r,
  value: e = [],
  onChange: t,
  autoResize: n = !1,
  limitTags: s,
  showCode: i = !1,
  label: a,
  error: c,
  required: d,
  placeholder: u = "Select options...",
  searchPlaceholder: g = "Search...",
  emptyMessage: b = "No results found.",
  disabled: m = !1,
  readonly: p = !1,
  size: N = "md",
  className: S,
  triggerClassName: C,
  popoverClassName: y
}) {
  const [E, I] = _.useState(!1), D = _.useMemo(() => e || [], [e]), j = _.useMemo(
    () => r.filter((w) => D.includes(w.id)),
    [r, D]
  ), Z = (w) => {
    if (m || p) return;
    const O = D.includes(w) ? D.filter((R) => R !== w) : [...D, w], k = r.filter((R) => O.includes(R.id));
    t?.(O, k.length > 0 ? k : void 0);
  }, ee = (w, A) => {
    if (A.preventDefault(), A.stopPropagation(), m || p) return;
    const O = D.filter((R) => R !== w), k = r.filter((R) => O.includes(R.id));
    t?.(O, k.length > 0 ? k : void 0);
  }, se = (w) => {
    w.preventDefault(), w.stopPropagation(), !(m || p) && t?.([], void 0);
  }, Y = (w) => i && w.code !== void 0 ? `${w.code} - ${w.name}` : w.name, re = s ? j.slice(0, s) : j, v = s ? Math.max(0, j.length - s) : 0, M = /* @__PURE__ */ T(gs, { open: E, onOpenChange: I, children: [
    /* @__PURE__ */ o(ps, { asChild: !0, children: /* @__PURE__ */ T(
      pe,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": E,
        disabled: m,
        size: N,
        className: f(
          "w-full justify-between group/combobox",
          !D.length && "text-muted-foreground",
          c && "border-destructive",
          n && "h-auto min-h-0",
          C
        ),
        children: [
          /* @__PURE__ */ o(
            "div",
            {
              className: f(
                "flex-1 flex items-center gap-1.5 min-w-0",
                n ? "flex-wrap" : "overflow-hidden"
              ),
              children: D.length === 0 ? /* @__PURE__ */ o("span", { className: "text-left truncate", children: u }) : /* @__PURE__ */ T(Uo, { children: [
                re.map((w) => /* @__PURE__ */ T(
                  un,
                  {
                    variant: "secondary",
                    className: f(
                      "gap-1 shrink-0",
                      !n && "truncate max-w-[120px]",
                      (m || p) && "pr-2"
                    ),
                    children: [
                      /* @__PURE__ */ o("span", { className: "truncate", children: Y(w) }),
                      !m && !p && /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          onMouseDown: (A) => {
                            A.preventDefault(), A.stopPropagation();
                          },
                          onClick: (A) => ee(w.id, A),
                          className: "ml-0.5 hover:bg-destructive/20 rounded-full p-0.5 -mr-1 shrink-0",
                          children: /* @__PURE__ */ o(Ji, { className: "h-2.5 w-2.5" })
                        }
                      )
                    ]
                  },
                  w.id
                )),
                v > 0 && /* @__PURE__ */ T(un, { variant: "secondary", className: "shrink-0", children: [
                  "+",
                  v
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-1 shrink-0 ml-2", children: D.length > 0 && !m && !p ? /* @__PURE__ */ T(
            "span",
            {
              onMouseDown: (w) => {
                w.preventDefault(), w.stopPropagation();
              },
              onClick: se,
              className: "cursor-pointer",
              children: [
                /* @__PURE__ */ o(Vo, { className: "text-muted-foreground hidden group-hover/combobox:block h-4 w-4" }),
                /* @__PURE__ */ o(ss, { className: "text-muted-foreground block group-hover/combobox:hidden h-4 w-4" })
              ]
            }
          ) : /* @__PURE__ */ o(ss, { className: "text-muted-foreground h-4 w-4" }) })
        ]
      }
    ) }),
    /* @__PURE__ */ o(
      bs,
      {
        className: f("w-(--radix-popover-trigger-width) p-0", y),
        align: "start",
        children: /* @__PURE__ */ T(na, { children: [
          /* @__PURE__ */ o(hl, { placeholder: g }),
          /* @__PURE__ */ T(ml, { children: [
            /* @__PURE__ */ o(gl, { children: b }),
            /* @__PURE__ */ o(pl, { children: r.map((w) => {
              const A = D.includes(w.id);
              return /* @__PURE__ */ T(
                bl,
                {
                  value: w.name,
                  disabled: w.disabled,
                  onSelect: () => {
                    Z(w.id);
                  },
                  className: "flex items-center gap-2 cursor-pointer",
                  children: [
                    /* @__PURE__ */ o(
                      "div",
                      {
                        onMouseDown: (O) => O.preventDefault(),
                        onClick: (O) => {
                          O.preventDefault(), O.stopPropagation(), Z(w.id);
                        },
                        className: "shrink-0",
                        children: /* @__PURE__ */ o(
                          ol,
                          {
                            checked: A,
                            disabled: w.disabled || m || p,
                            size: N
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ T("div", { className: "flex-1 flex items-center gap-2 min-w-0", children: [
                      i && w.code !== void 0 && /* @__PURE__ */ o("span", { className: "text-muted-foreground shrink-0", children: w.code }),
                      /* @__PURE__ */ o("span", { className: "flex-1 truncate", children: w.name })
                    ] }),
                    /* @__PURE__ */ o(
                      rr,
                      {
                        className: f(
                          "h-4 w-4 shrink-0 text-primary",
                          A ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                w.id
              );
            }) })
          ] })
        ] })
      }
    )
  ] });
  return !a && !c ? /* @__PURE__ */ o("div", { className: f("w-full", S), children: M }) : /* @__PURE__ */ T("div", { className: f("w-full", S), children: [
    a && /* @__PURE__ */ T(ye, { className: "text-foreground leading-5 block", children: [
      a,
      d && /* @__PURE__ */ o("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ o("div", { className: a ? "mt-1" : "", children: M }),
    c && /* @__PURE__ */ o("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: c })
  ] });
}
function uy({
  className: r,
  children: e,
  viewport: t = !0,
  ...n
}) {
  return /* @__PURE__ */ T(
    $t.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": t,
      className: f(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        r
      ),
      ...n,
      children: [
        e,
        t && /* @__PURE__ */ o(lu, {})
      ]
    }
  );
}
function fy({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    $t.List,
    {
      "data-slot": "navigation-menu-list",
      className: f("group flex flex-1 list-none items-center justify-center gap-1", r),
      ...e
    }
  );
}
function hy({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    $t.Item,
    {
      "data-slot": "navigation-menu-item",
      className: f("relative", r),
      ...e
    }
  );
}
const ou = $e(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function my({
  className: r,
  children: e,
  ...t
}) {
  return /* @__PURE__ */ T(
    $t.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: f(ou(), "group", r),
      ...t,
      children: [
        e,
        " ",
        /* @__PURE__ */ o(
          vn,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function gy({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    $t.Content,
    {
      "data-slot": "navigation-menu-content",
      className: f(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        r
      ),
      ...e
    }
  );
}
function lu({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o("div", { className: f("absolute top-full left-0 isolate z-50 flex justify-center"), children: /* @__PURE__ */ o(
    $t.Viewport,
    {
      "data-slot": "navigation-menu-viewport",
      className: f(
        "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
        r
      ),
      ...e
    }
  ) });
}
function py({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    $t.Link,
    {
      "data-slot": "navigation-menu-link",
      className: f(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        r
      ),
      ...e
    }
  );
}
function by({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    $t.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: f(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        r
      ),
      ...e,
      children: /* @__PURE__ */ o("div", { className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" })
    }
  );
}
function cu({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: f("flex justify-center mx-auto w-full", r),
      ...e
    }
  );
}
function du({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "ul",
    {
      "data-slot": "pagination-content",
      className: f("flex flex-row gap-1 items-center", r),
      ...e
    }
  );
}
function an({ ...r }) {
  return /* @__PURE__ */ o("li", { "data-slot": "pagination-item", ...r });
}
function yn({
  className: r,
  isActive: e,
  disabled: t,
  size: n = "icon-sm",
  ...s
}) {
  return /* @__PURE__ */ o(
    "a",
    {
      "aria-current": e ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": e,
      className: f(
        Ir({
          variant: e ? "outline" : "ghost",
          size: n,
          className: f(
            "rounded-full",
            e && "!bg-primary/25 text-primary",
            t && "opacity-50 cursor-not-allowed",
            r
          )
        })
      ),
      ...s
    }
  );
}
function uu({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    yn,
    {
      "aria-label": "Go to previous page",
      size: "md",
      className: f("gap-1 px-2.5 sm:pl-2.5", r),
      ...e,
      children: /* @__PURE__ */ o(Ho, {})
    }
  );
}
function fu({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    yn,
    {
      "aria-label": "Go to next page",
      size: "md",
      className: f("gap-1 px-2.5 sm:pr-2.5", r),
      ...e,
      children: /* @__PURE__ */ o(xn, {})
    }
  );
}
function vy({ className: r, ...e }) {
  return /* @__PURE__ */ T(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: f("flex justify-center items-center size-9", r),
      ...e,
      children: [
        /* @__PURE__ */ o(jc, { className: "size-4" }),
        /* @__PURE__ */ o("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
const hu = (r, e, t = 1) => {
  const s = e, i = Math.max(r - t, 1), a = Math.min(r + t, s), c = i > 2, d = a < s - 1, u = [];
  u.push(1), c ? u.push("left-ellipsis") : 2 < i && u.push(2);
  for (let g = i; g <= a; g++)
    g !== 1 && g !== s && u.push(g);
  return d ? u.push("right-ellipsis") : a < s - 1 && u.push(s - 1), s !== 1 && u.push(s), u;
}, mu = ({ className: r, ...e }) => /* @__PURE__ */ T(
  yn,
  {
    className: f(
      "relative cursor-pointer group border-secondary-hover text-secondary-foreground hover:text-secondary-foreground-hover",
      r
    ),
    ...e,
    children: [
      /* @__PURE__ */ o(Qi, { className: "opacity-100 transition-opacity group-hover:opacity-0" }),
      /* @__PURE__ */ o(Fc, { className: "absolute opacity-0 transition-opacity text-brand-500 group-hover:opacity-100" })
    ]
  }
), gu = ({ className: r, ...e }) => /* @__PURE__ */ T(
  yn,
  {
    className: f(
      "relative cursor-pointer group border-secondary-hover text-secondary-foreground hover:text-secondary-foreground-hover",
      r
    ),
    ...e,
    children: [
      /* @__PURE__ */ o(Qi, { className: "opacity-100 transition-opacity group-hover:opacity-0" }),
      /* @__PURE__ */ o(Uc, { className: "absolute opacity-0 transition-opacity text-brand-500 group-hover:opacity-100 text-primary" })
    ]
  }
), pu = ({
  currentPage: r,
  totalPages: e,
  pageSize: t,
  siblingCount: n = 1,
  onPageChange: s
}) => {
  const i = _.useMemo(
    () => hu(r, e, n),
    [r, e, n]
  );
  return /* @__PURE__ */ T("div", { className: "flex gap-2 items-center", children: [
    /* @__PURE__ */ o(
      uu,
      {
        onClick: () => r > 1 && s(r - 1, t),
        disabled: r === 1,
        "aria-disabled": r === 1,
        className: "cursor-pointer"
      }
    ),
    i.map((a, c) => a === "left-ellipsis" ? /* @__PURE__ */ o(an, { children: /* @__PURE__ */ o(mu, { onClick: () => s(r - n, t) }) }, `ellipsis-${c}`) : a === "right-ellipsis" ? /* @__PURE__ */ o(an, { children: /* @__PURE__ */ o(gu, { onClick: () => s(r + n, t) }) }, `ellipsis-${c}`) : /* @__PURE__ */ o(an, { children: /* @__PURE__ */ o(
      yn,
      {
        isActive: r === a,
        onClick: () => a !== r && s(a, t),
        className: "cursor-pointer",
        children: a
      }
    ) }, a)),
    /* @__PURE__ */ o(
      fu,
      {
        onClick: () => r < e && s(r + 1, t),
        disabled: r === e,
        "aria-disabled": r === e,
        className: "cursor-pointer"
      }
    )
  ] });
};
function bu({
  className: r,
  value: e,
  ...t
}) {
  return /* @__PURE__ */ o(
    Ia.Root,
    {
      "data-slot": "progress",
      className: f("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", r),
      ...t,
      children: /* @__PURE__ */ o(
        Ia.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (e || 0)}%)` }
        }
      )
    }
  );
}
function vu({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    Ri.Root,
    {
      "data-slot": "radio-group",
      className: f("grid gap-3", r),
      ...e
    }
  );
}
function xy({
  className: r,
  size: e = "md",
  ...t
}) {
  const n = te[e ?? "md"], s = {
    xxs: "size-1",
    xs: "size-1.5",
    sm: "size-1.5",
    md: "size-2",
    lg: "size-2.5",
    xl: "size-2.5",
    xxl: "size-3"
  }[e ?? "md"];
  return /* @__PURE__ */ o(
    Ri.Item,
    {
      "data-slot": "radio-group-item",
      "data-size": e,
      className: f(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.icon,
        r
      ),
      ...t,
      children: /* @__PURE__ */ o(
        Ri.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ o(
            fs,
            {
              className: f(
                "fill-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                s
              )
            }
          )
        }
      )
    }
  );
}
function yy({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    xd,
    {
      "data-slot": "resizable-panel-group",
      className: f("flex h-full w-full data-[orientation=vertical]:flex-col", r),
      ...e
    }
  );
}
function wy({ ...r }) {
  return /* @__PURE__ */ o(yd, { "data-slot": "resizable-panel", ...r });
}
function Ny({
  withHandle: r,
  className: e,
  ...t
}) {
  return /* @__PURE__ */ o(
    wd,
    {
      "data-slot": "resizable-handle",
      className: f(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:translate-x-0 data-[orientation=vertical]:after:-translate-y-1/2 [&[data-orientation=vertical]>div]:rotate-90",
        e
      ),
      ...t,
      children: r && /* @__PURE__ */ o("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ o(Hc, { className: "size-2.5" }) })
    }
  );
}
function wl({ ...r }) {
  return /* @__PURE__ */ o(Me.Root, { "data-slot": "select", ...r });
}
function Ey({ ...r }) {
  return /* @__PURE__ */ o(Me.Group, { "data-slot": "select-group", ...r });
}
function Nl({ ...r }) {
  return /* @__PURE__ */ o(Me.Value, { "data-slot": "select-value", ...r });
}
function El({
  className: r,
  size: e = "md",
  children: t,
  label: n,
  error: s,
  required: i,
  id: a,
  ...c
}) {
  const d = n || s, u = te[e ?? "md"], g = /* @__PURE__ */ T(
    Me.Trigger,
    {
      id: a,
      "data-slot": "select-trigger",
      "data-size": e,
      "aria-invalid": !!s,
      className: f(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-transparent whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        u.height,
        u.text,
        u.padding,
        {
          "[&_svg:not([class*='size-'])]:size-3": e === "xxs",
          "[&_svg:not([class*='size-'])]:size-3.5": e === "xs",
          "[&_svg:not([class*='size-'])]:size-4": e === "sm" || e === "md",
          "[&_svg:not([class*='size-'])]:size-5": e === "lg" || e === "xl",
          "[&_svg:not([class*='size-'])]:size-6": e === "xxl"
        },
        s ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        r
      ),
      ...c,
      children: [
        t,
        /* @__PURE__ */ o(Me.Icon, { asChild: !0, children: /* @__PURE__ */ o(vn, { className: f("opacity-50", u.icon) }) })
      ]
    }
  );
  return d ? /* @__PURE__ */ T("div", { className: "flex flex-col gap-1", children: [
    n && /* @__PURE__ */ T(ye, { htmlFor: a, children: [
      n,
      i && /* @__PURE__ */ o("span", { className: "text-destructive", children: "*" })
    ] }),
    g,
    s && /* @__PURE__ */ o("div", { className: "text-sm text-destructive", role: "alert", children: s })
  ] }) : g;
}
function Sl({
  className: r,
  children: e,
  position: t = "item-aligned",
  align: n = "center",
  ...s
}) {
  return /* @__PURE__ */ o(Me.Portal, { children: /* @__PURE__ */ T(
    Me.Content,
    {
      "data-slot": "select-content",
      className: f(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        t === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        r
      ),
      position: t,
      align: n,
      ...s,
      children: [
        /* @__PURE__ */ o(xu, {}),
        /* @__PURE__ */ o(
          Me.Viewport,
          {
            className: f(
              "p-1",
              t === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: e
          }
        ),
        /* @__PURE__ */ o(yu, {})
      ]
    }
  ) });
}
function Sy({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    Me.Label,
    {
      "data-slot": "select-label",
      className: f("text-muted-foreground px-2 py-1.5 text-xs", r),
      ...e
    }
  );
}
function Tl({
  className: r,
  children: e,
  ...t
}) {
  return /* @__PURE__ */ T(
    Me.Item,
    {
      "data-slot": "select-item",
      className: f(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        r
      ),
      ...t,
      children: [
        /* @__PURE__ */ o(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ o(Me.ItemIndicator, { children: /* @__PURE__ */ o(rr, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ o(Me.ItemText, { children: e })
      ]
    }
  );
}
function Ty({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    Me.Separator,
    {
      "data-slot": "select-separator",
      className: f("-mx-1 my-1 h-px pointer-events-none bg-border", r),
      ...e
    }
  );
}
function xu({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    Me.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: f("flex justify-center items-center py-1 cursor-default", r),
      ...e,
      children: /* @__PURE__ */ o(Gc, { className: "size-4" })
    }
  );
}
function yu({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    Me.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: f("flex justify-center items-center py-1 cursor-default", r),
      ...e,
      children: /* @__PURE__ */ o(vn, { className: "size-4" })
    }
  );
}
function wu({ ...r }) {
  return /* @__PURE__ */ o(we.Root, { "data-slot": "sheet", ...r });
}
function Cy({ ...r }) {
  return /* @__PURE__ */ o(we.Trigger, { "data-slot": "sheet-trigger", ...r });
}
function Ay({ ...r }) {
  return /* @__PURE__ */ o(we.Close, { "data-slot": "sheet-close", ...r });
}
function Nu({ ...r }) {
  return /* @__PURE__ */ o(we.Portal, { "data-slot": "sheet-portal", ...r });
}
function Eu({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    we.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: f(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        r
      ),
      ...e
    }
  );
}
function Su({
  className: r,
  children: e,
  side: t = "right",
  ...n
}) {
  return /* @__PURE__ */ T(Nu, { children: [
    /* @__PURE__ */ o(Eu, {}),
    /* @__PURE__ */ T(
      we.Content,
      {
        "data-slot": "sheet-content",
        className: f(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          t === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          t === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          t === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          t === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          r
        ),
        ...n,
        children: [
          e,
          /* @__PURE__ */ T(we.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ o(Go, { className: "size-4" }),
            /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Tu({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "sheet-header",
      className: f("flex flex-col gap-1.5 p-4", r),
      ...e
    }
  );
}
function ky({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "sheet-footer",
      className: f("mt-auto flex flex-col gap-2 p-4", r),
      ...e
    }
  );
}
function Cu({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    we.Title,
    {
      "data-slot": "sheet-title",
      className: f("text-foreground font-semibold", r),
      ...e
    }
  );
}
function Au({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    we.Description,
    {
      "data-slot": "sheet-description",
      className: f("text-muted-foreground text-sm", r),
      ...e
    }
  );
}
const bi = 768;
function ku() {
  const [r, e] = _.useState(void 0);
  return _.useEffect(() => {
    const t = window.matchMedia(`(max-width: ${bi - 1}px)`), n = () => {
      e(window.innerWidth < bi);
    };
    return t.addEventListener("change", n), e(window.innerWidth < bi), () => t.removeEventListener("change", n);
  }, []), !!r;
}
function Pe({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "skeleton",
      className: f("bg-accent animate-pulse rounded-md", r),
      ...e
    }
  );
}
function Cl({
  delayDuration: r = 0,
  ...e
}) {
  return /* @__PURE__ */ o(
    Ar.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: r,
      ...e
    }
  );
}
function _u({ ...r }) {
  return /* @__PURE__ */ o(Cl, { children: /* @__PURE__ */ o(Ar.Root, { "data-slot": "tooltip", ...r }) });
}
function Lu({ ...r }) {
  return /* @__PURE__ */ o(Ar.Trigger, { "data-slot": "tooltip-trigger", ...r });
}
function Iu({
  className: r,
  sideOffset: e = 0,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ o(Ar.Portal, { children: /* @__PURE__ */ T(
    Ar.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: e,
      className: f(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        r
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ o(Ar.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const Ou = "sidebar_state", qu = 3600 * 24 * 7, Ru = "16rem", Mu = "18rem", Du = "3rem", Bu = "b", Al = _.createContext(null);
function xs() {
  const r = _.useContext(Al);
  if (!r)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return r;
}
function _y({
  defaultOpen: r = !0,
  open: e,
  onOpenChange: t,
  className: n,
  style: s,
  children: i,
  ...a
}) {
  const c = ku(), [d, u] = _.useState(!1), [g, b] = _.useState(r), m = e ?? g, p = _.useCallback(
    (y) => {
      const E = typeof y == "function" ? y(m) : y;
      t ? t(E) : b(E), document.cookie = `${Ou}=${E}; path=/; max-age=${qu}`;
    },
    [t, m]
  ), N = _.useCallback(() => c ? u((y) => !y) : p((y) => !y), [c, p, u]);
  _.useEffect(() => {
    const y = (E) => {
      E.key === Bu && (E.metaKey || E.ctrlKey) && (E.preventDefault(), N());
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [N]);
  const S = m ? "expanded" : "collapsed", C = _.useMemo(
    () => ({
      state: S,
      open: m,
      setOpen: p,
      isMobile: c,
      openMobile: d,
      setOpenMobile: u,
      toggleSidebar: N
    }),
    [S, m, p, c, d, u, N]
  );
  return /* @__PURE__ */ o(Al.Provider, { value: C, children: /* @__PURE__ */ o(Cl, { delayDuration: 0, children: /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": Ru,
        "--sidebar-width-icon": Du,
        ...s
      },
      className: f(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        n
      ),
      ...a,
      children: i
    }
  ) }) });
}
function Ly({
  side: r = "left",
  variant: e = "sidebar",
  collapsible: t = "offcanvas",
  className: n,
  children: s,
  ...i
}) {
  const { isMobile: a, state: c, openMobile: d, setOpenMobile: u } = xs();
  return t === "none" ? /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "sidebar",
      className: f(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        n
      ),
      ...i,
      children: s
    }
  ) : a ? /* @__PURE__ */ o(wu, { open: d, onOpenChange: u, ...i, children: /* @__PURE__ */ T(
    Su,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": Mu
      },
      side: r,
      children: [
        /* @__PURE__ */ T(Tu, { className: "sr-only", children: [
          /* @__PURE__ */ o(Cu, { children: "Sidebar" }),
          /* @__PURE__ */ o(Au, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex h-full w-full flex-col", children: s })
      ]
    }
  ) }) : /* @__PURE__ */ T(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": c,
      "data-collapsible": c === "collapsed" ? t : "",
      "data-variant": e,
      "data-side": r,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: f(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              e === "floating" || e === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            "data-slot": "sidebar-container",
            className: f(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              r === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              e === "floating" || e === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              n
            ),
            ...i,
            children: /* @__PURE__ */ o(
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
function Iy({ className: r, onClick: e, ...t }) {
  const { toggleSidebar: n } = xs();
  return /* @__PURE__ */ T(
    pe,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: f("size-7", r),
      onClick: (s) => {
        e?.(s), n();
      },
      ...t,
      children: [
        /* @__PURE__ */ o(Vc, {}),
        /* @__PURE__ */ o("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function Oy({ className: r, ...e }) {
  const { toggleSidebar: t } = xs();
  return /* @__PURE__ */ o(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: t,
      title: "Toggle Sidebar",
      className: f(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        r
      ),
      ...e
    }
  );
}
function qy({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: f(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        r
      ),
      ...e
    }
  );
}
function Ry({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    Pt,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: f("bg-background h-8 w-full shadow-none", r),
      ...e
    }
  );
}
function My({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: f("flex flex-col gap-2 p-2", r),
      ...e
    }
  );
}
function Dy({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: f("flex flex-col gap-2 p-2", r),
      ...e
    }
  );
}
function By({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    Et,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: f("bg-sidebar-border mx-2 w-auto", r),
      ...e
    }
  );
}
function zy({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: f(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        r
      ),
      ...e
    }
  );
}
function $y({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: f("relative flex w-full min-w-0 flex-col p-2", r),
      ...e
    }
  );
}
function Py({
  className: r,
  asChild: e = !1,
  ...t
}) {
  return /* @__PURE__ */ o(
    e ? st : "div",
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: f(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        r
      ),
      ...t
    }
  );
}
function jy({
  className: r,
  asChild: e = !1,
  ...t
}) {
  return /* @__PURE__ */ o(
    e ? st : "button",
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: f(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        r
      ),
      ...t
    }
  );
}
function Fy({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: f("w-full text-sm", r),
      ...e
    }
  );
}
function Uy({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: f("flex w-full min-w-0 flex-col gap-1", r),
      ...e
    }
  );
}
function Hy({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: f("group/menu-item relative", r),
      ...e
    }
  );
}
const zu = $e(
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
function Gy({
  asChild: r = !1,
  isActive: e = !1,
  variant: t = "default",
  size: n = "default",
  tooltip: s,
  className: i,
  ...a
}) {
  const c = r ? st : "button", { isMobile: d, state: u } = xs(), g = /* @__PURE__ */ o(
    c,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": n,
      "data-active": e,
      className: f(zu({ variant: t, size: n }), i),
      ...a
    }
  );
  return s ? (typeof s == "string" && (s = {
    children: s
  }), /* @__PURE__ */ T(_u, { children: [
    /* @__PURE__ */ o(Lu, { asChild: !0, children: g }),
    /* @__PURE__ */ o(
      Iu,
      {
        side: "right",
        align: "center",
        hidden: u !== "collapsed" || d,
        ...s
      }
    )
  ] })) : g;
}
function Vy({
  className: r,
  asChild: e = !1,
  showOnHover: t = !1,
  ...n
}) {
  return /* @__PURE__ */ o(
    e ? st : "button",
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: f(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        t && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        r
      ),
      ...n
    }
  );
}
function Ky({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: f(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        r
      ),
      ...e
    }
  );
}
function Wy({
  className: r,
  showIcon: e = !1,
  ...t
}) {
  const [n] = _.useState(() => `${Math.floor(Math.random() * 40) + 50}%`);
  return /* @__PURE__ */ T(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: f("flex h-8 items-center gap-2 rounded-md px-2", r),
      ...t,
      children: [
        e && /* @__PURE__ */ o(Pe, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ o(
          Pe,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": n
            }
          }
        )
      ]
    }
  );
}
function Zy({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: f(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        r
      ),
      ...e
    }
  );
}
function Yy({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: f("group/menu-sub-item relative", r),
      ...e
    }
  );
}
function Xy({
  asChild: r = !1,
  size: e = "md",
  isActive: t = !1,
  className: n,
  ...s
}) {
  return /* @__PURE__ */ o(
    r ? st : "a",
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": e,
      "data-active": t,
      className: f(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        e === "sm" && "text-xs",
        e === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        n
      ),
      ...s
    }
  );
}
function Qy({
  className: r,
  defaultValue: e,
  value: t,
  min: n = 0,
  max: s = 100,
  ...i
}) {
  const a = _.useMemo(
    () => Array.isArray(t) ? t : Array.isArray(e) ? e : [n, s],
    [t, e, n, s]
  );
  return /* @__PURE__ */ T(
    Vn.Root,
    {
      "data-slot": "slider",
      defaultValue: e,
      value: t,
      min: n,
      max: s,
      className: f(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        r
      ),
      ...i,
      children: [
        /* @__PURE__ */ o(
          Vn.Track,
          {
            "data-slot": "slider-track",
            className: f(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ o(
              Vn.Range,
              {
                "data-slot": "slider-range",
                className: f(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: a.length }, (c, d) => /* @__PURE__ */ o(
          Vn.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          d
        ))
      ]
    }
  );
}
const Jy = ({ ...r }) => {
  const { theme: e = "system" } = Ed();
  return /* @__PURE__ */ o(
    Sd,
    {
      theme: e,
      position: "top-right",
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ o(Yc, { className: "size-5 text-green-700 dark:text-green-400" }),
        info: /* @__PURE__ */ o(Zc, { className: "size-5 text-blue-700 dark:text-blue-400" }),
        warning: /* @__PURE__ */ o(Wc, { className: "size-5 text-amber-700 dark:text-amber-400" }),
        error: /* @__PURE__ */ o(Kc, { className: "size-5 text-red-700 dark:text-red-400" }),
        loading: /* @__PURE__ */ o(Wo, { className: "size-5 animate-spin text-foreground" })
      },
      toastOptions: {
        classNames: {
          toast: "!bg-background !text-foreground !border-border !shadow-lg",
          success: "!bg-green-50 !text-green-950 !border-green-700 !border-2 dark:!bg-green-950 dark:!text-green-50 dark:!border-green-600",
          error: "!bg-red-50 !text-red-950 !border-red-700 !border-2 dark:!bg-red-950 dark:!text-red-50 dark:!border-red-600",
          warning: "!bg-amber-50 !text-amber-950 !border-amber-700 !border-2 dark:!bg-amber-950 dark:!text-amber-50 dark:!border-amber-600",
          info: "!bg-blue-50 !text-blue-950 !border-blue-700 !border-2 dark:!bg-blue-950 dark:!text-blue-50 dark:!border-blue-600",
          description: "!text-inherit !opacity-90"
        }
      },
      ...r
    }
  );
};
function $u({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    Wo,
    {
      role: "status",
      "aria-label": "Loading",
      className: f("size-4 animate-spin", r),
      ...e
    }
  );
}
function Pu({
  className: r,
  size: e = "md",
  ...t
}) {
  const n = te[e ?? "md"], s = {
    xxs: { height: "h-3.5", width: "w-6", thumb: n.icon },
    xs: { height: "h-4", width: "w-7", thumb: n.icon },
    sm: { height: "h-4.5", width: "w-8", thumb: n.icon },
    md: { height: "h-5", width: "w-9", thumb: n.icon },
    lg: { height: "h-6", width: "w-11", thumb: n.icon },
    xl: { height: "h-6", width: "w-12", thumb: n.icon },
    xxl: { height: "h-7", width: "w-14", thumb: n.icon }
  }[e ?? "md"];
  return /* @__PURE__ */ o(
    Oa.Root,
    {
      "data-slot": "switch",
      "data-size": e,
      className: f(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        s.height,
        s.width,
        r
      ),
      ...t,
      children: /* @__PURE__ */ o(
        Oa.Thumb,
        {
          "data-slot": "switch-thumb",
          className: f(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
            s.thumb
          )
        }
      )
    }
  );
}
function ju({ className: r, ...e }) {
  return /* @__PURE__ */ o("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ o(
    "table",
    {
      "data-slot": "table",
      className: f("w-full caption-bottom text-sm", r),
      ...e
    }
  ) });
}
function Fu({ className: r, ...e }) {
  return /* @__PURE__ */ o("thead", { "data-slot": "table-header", className: f("[&_tr]:border-b", r), ...e });
}
function Uu({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "tbody",
    {
      "data-slot": "table-body",
      className: f("[&_tr:last-child]:border-0", r),
      ...e
    }
  );
}
function ew({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: f("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", r),
      ...e
    }
  );
}
function vi({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "tr",
    {
      "data-slot": "table-row",
      className: f(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        r
      ),
      ...e
    }
  );
}
function Hu({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "th",
    {
      "data-slot": "table-head",
      className: f(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        r
      ),
      ...e
    }
  );
}
function Ma({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "td",
    {
      "data-slot": "table-cell",
      className: f(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        r
      ),
      ...e
    }
  );
}
function tw({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    "caption",
    {
      "data-slot": "table-caption",
      className: f("text-muted-foreground mt-4 text-sm", r),
      ...e
    }
  );
}
function rw({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    hs.Root,
    {
      "data-slot": "tabs",
      className: f("flex flex-col gap-2", r),
      ...e
    }
  );
}
function nw({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    hs.List,
    {
      "data-slot": "tabs-list",
      className: f(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        r
      ),
      ...e
    }
  );
}
function sw({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    hs.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: f(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        r
      ),
      ...e
    }
  );
}
function iw({ className: r, ...e }) {
  return /* @__PURE__ */ o(
    hs.Content,
    {
      "data-slot": "tabs-content",
      className: f("flex-1 outline-none", r),
      ...e
    }
  );
}
const kl = $e(
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
function aw({
  className: r,
  variant: e,
  size: t,
  ...n
}) {
  return /* @__PURE__ */ o(
    Td.Root,
    {
      "data-slot": "toggle",
      className: f(kl({ variant: e, size: t, className: r })),
      ...n
    }
  );
}
const _l = _.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function ow({
  className: r,
  variant: e,
  size: t,
  spacing: n = 0,
  children: s,
  ...i
}) {
  return /* @__PURE__ */ o(
    Qo.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": e,
      "data-size": t,
      "data-spacing": n,
      style: { "--gap": n },
      className: f(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        r
      ),
      ...i,
      children: /* @__PURE__ */ o(_l.Provider, { value: { variant: e, size: t, spacing: n }, children: s })
    }
  );
}
function lw({
  className: r,
  children: e,
  variant: t,
  size: n,
  ...s
}) {
  const i = _.useContext(_l);
  return /* @__PURE__ */ o(
    Qo.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": i.variant || t,
      "data-size": i.size || n,
      "data-spacing": i.spacing,
      className: f(
        kl({
          variant: i.variant || t,
          size: i.size || n
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l",
        r
      ),
      ...s,
      children: e
    }
  );
}
const Da = {
  short: "dd/MM/yyyy",
  long: "dd MMMM yyyy",
  datetime: "dd/MM/yyyy HH:mm",
  datetimeLong: "dd MMMM yyyy HH:mm",
  time: "HH:mm",
  iso: "yyyy-MM-dd",
  isoDateTime: "yyyy-MM-dd'T'HH:mm:ss"
};
function cw(r, e = "en-US", t = "USD") {
  return new Intl.NumberFormat(e, {
    style: "currency",
    currency: t
  }).format(r);
}
function dw(r, e = "short") {
  const t = typeof r == "string" || typeof r == "number" ? new Date(r) : r;
  if (isNaN(t.getTime()))
    return "";
  if (e in Da) {
    const n = Da[e];
    return Ba(t, n);
  }
  return Ba(t, e);
}
function Ba(r, e) {
  const t = r.getDate().toString().padStart(2, "0"), n = (r.getMonth() + 1).toString().padStart(2, "0"), s = r.getFullYear(), i = r.getHours().toString().padStart(2, "0"), a = r.getMinutes().toString().padStart(2, "0"), c = r.getSeconds().toString().padStart(2, "0"), d = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return e.replace(/dd/g, t).replace(/MM/g, n).replace(/yyyy/g, s.toString()).replace(/MMMM/g, d[r.getMonth()]).replace(/MMM/g, d[r.getMonth()].substring(0, 3)).replace(/HH/g, i).replace(/mm/g, a).replace(/ss/g, c);
}
function uw(r) {
  const e = r.replace(/\D/g, "");
  return e.length === 10 ? `${e.slice(0, 4)} ${e.slice(4, 7)} ${e.slice(7)}` : e.length === 11 ? `${e.slice(0, 4)} ${e.slice(4, 7)} ${e.slice(7)}` : r;
}
function xi(r) {
  if (r === 0) return "0 Bytes";
  const e = 1024, t = ["Bytes", "KB", "MB", "GB", "TB", "PB"], n = Math.floor(Math.log(r) / Math.log(e));
  return Math.round(r / Math.pow(e, n) * 100) / 100 + " " + t[n];
}
function fw(r, e, t = "...") {
  return r.length <= e ? r : r.slice(0, e) + t;
}
const hw = {
  /**
   * Show a success toast
   */
  success: (r, e) => yt.success(r, {
    description: e?.description,
    duration: e?.duration,
    action: e?.action
  }),
  /**
   * Show an error toast
   */
  error: (r, e) => yt.error(r, {
    description: e?.description,
    duration: e?.duration,
    action: e?.action
  }),
  /**
   * Show a warning toast
   */
  warning: (r, e) => yt.warning(r, {
    description: e?.description,
    duration: e?.duration,
    action: e?.action
  }),
  /**
   * Show an info toast
   */
  info: (r, e) => yt.info(r, {
    description: e?.description,
    duration: e?.duration,
    action: e?.action
  }),
  /**
   * Show a default toast
   */
  default: (r, e) => yt(r, {
    description: e?.description,
    duration: e?.duration,
    action: e?.action
  }),
  /**
   * Show a loading toast
   */
  loading: (r, e) => yt.loading(r, {
    description: e?.description,
    duration: e?.duration
  }),
  /**
   * Show a promise toast (loading -> success/error)
   */
  promise: (r, e, t) => yt.promise(r, {
    loading: e.loading,
    success: e.success,
    error: e.error,
    duration: t?.duration
  }),
  /**
   * Dismiss a toast by ID
   */
  dismiss: (r) => {
    yt.dismiss(r);
  },
  /**
   * Dismiss all toasts
   */
  dismissAll: () => {
    yt.dismiss();
  }
}, ys = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[0-9]{10,11}$/,
  vietnamesePhone: /^(0|\+84)[1-9][0-9]{8,9}$/,
  url: /^https?:\/\/.+/,
  slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  hexColor: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
};
function mw(r) {
  return ys.email.test(r);
}
function gw(r) {
  return ys.phone.test(r);
}
function pw(r) {
  return ys.vietnamesePhone.test(r);
}
function bw(r) {
  return ys.url.test(r);
}
function wr(r) {
  const [e, t] = _.useState(() => typeof window > "u" ? !1 : window.matchMedia(r).matches);
  return _.useEffect(() => {
    if (typeof window > "u") return;
    const n = window.matchMedia(r), s = (i) => {
      t(i.matches);
    };
    return n.addEventListener ? (n.addEventListener("change", s), () => n.removeEventListener("change", s)) : (n.addListener(s), () => n.removeListener(s));
  }, [r]), e;
}
const Yt = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
};
function vw() {
  const r = wr(`(min-width: ${Yt["2xl"]}px)`), e = wr(`(min-width: ${Yt.xl}px)`), t = wr(`(min-width: ${Yt.lg}px)`), n = wr(`(min-width: ${Yt.md}px)`), s = wr(`(min-width: ${Yt.sm}px)`);
  return r ? "2xl" : e ? "xl" : t ? "lg" : n ? "md" : s ? "sm" : null;
}
function xw() {
  const [r, e] = _.useState(() => typeof window > "u" ? { width: 0, height: 0 } : {
    width: window.innerWidth,
    height: window.innerHeight
  });
  return _.useEffect(() => {
    if (typeof window > "u") return;
    const t = () => {
      e({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []), r;
}
function yw() {
  return wr(`(min-width: ${Yt.md}px) and (max-width: ${Yt.lg - 1}px)`);
}
function ww(r, e) {
  const [t, n] = _.useState(r);
  return _.useEffect(() => {
    const s = setTimeout(() => {
      n(r);
    }, e);
    return () => {
      clearTimeout(s);
    };
  }, [r, e]), t;
}
function Nw(r, e) {
  const t = Rc(void 0), n = Mc(
    (...s) => {
      t.current && clearTimeout(t.current), t.current = setTimeout(() => {
        r(...s);
      }, e);
    },
    [r, e]
  );
  return _.useEffect(() => () => {
    t.current && clearTimeout(t.current);
  }, []), n;
}
function Ew(r, e) {
  const [t, n] = _.useState(r), s = _.useRef(void 0);
  return _.useEffect(() => {
    s.current === void 0 && (s.current = Date.now());
  }, []), _.useEffect(() => {
    if (s.current === void 0)
      return;
    const i = setTimeout(
      () => {
        const a = Date.now();
        s.current !== void 0 && a - s.current >= e && (n(r), s.current = a);
      },
      s.current !== void 0 ? e - (Date.now() - s.current) : e
    );
    return () => {
      clearTimeout(i);
    };
  }, [r, e]), t;
}
function Sw(r, e) {
  _.useEffect(() => {
    const t = (n) => {
      const s = r?.current;
      !s || s.contains(n.target) || e(n);
    };
    return document.addEventListener("mousedown", t), document.addEventListener("touchstart", t), () => {
      document.removeEventListener("mousedown", t), document.removeEventListener("touchstart", t);
    };
  }, [r, e]);
}
function Tw(r, e) {
  const [t, n] = _.useState(() => {
    if (typeof window > "u")
      return e;
    try {
      const a = window.localStorage.getItem(r);
      return a ? JSON.parse(a) : e;
    } catch (a) {
      return console.error(`Error reading localStorage key "${r}":`, a), e;
    }
  }), s = _.useCallback(
    (a) => {
      try {
        const c = a instanceof Function ? a(t) : a;
        n(c), typeof window < "u" && window.localStorage.setItem(r, JSON.stringify(c));
      } catch (c) {
        console.error(`Error setting localStorage key "${r}":`, c);
      }
    },
    [r, t]
  ), i = _.useCallback(() => {
    try {
      n(e), typeof window < "u" && window.localStorage.removeItem(r);
    } catch (a) {
      console.error(`Error removing localStorage key "${r}":`, a);
    }
  }, [r, e]);
  return [t, s, i];
}
function Cw(r, e) {
  const [t, n] = _.useState(() => {
    if (typeof window > "u")
      return e;
    try {
      const a = window.sessionStorage.getItem(r);
      return a ? JSON.parse(a) : e;
    } catch (a) {
      return console.error(`Error reading sessionStorage key "${r}":`, a), e;
    }
  }), s = _.useCallback(
    (a) => {
      try {
        const c = a instanceof Function ? a(t) : a;
        n(c), typeof window < "u" && window.sessionStorage.setItem(r, JSON.stringify(c));
      } catch (c) {
        console.error(`Error setting sessionStorage key "${r}":`, c);
      }
    },
    [r, t]
  ), i = _.useCallback(() => {
    try {
      n(e), typeof window < "u" && window.sessionStorage.removeItem(r);
    } catch (a) {
      console.error(`Error removing sessionStorage key "${r}":`, a);
    }
  }, [r, e]);
  return [t, s, i];
}
function Aw() {
  const [r, e] = _.useState(!1), [t, n] = _.useState(null);
  return { copy: _.useCallback(async (i) => {
    if (!navigator?.clipboard)
      return n(new Error("Clipboard API not available")), !1;
    try {
      return await navigator.clipboard.writeText(i), e(!0), n(null), setTimeout(() => {
        e(!1);
      }, 2e3), !0;
    } catch (a) {
      return n(a instanceof Error ? a : new Error("Failed to copy")), e(!1), !1;
    }
  }, []), copied: r, error: t };
}
function kw(r = !1) {
  const [e, t] = _.useState(r), n = _.useCallback(() => {
    t((s) => !s);
  }, []);
  return [e, n, t];
}
function _w(r) {
  const [e, t] = _.useState(void 0), n = _.useRef(r);
  return _.useEffect(() => {
    n.current !== r && (t(n.current), n.current = r);
  }, [r]), e;
}
function Lw(r, e) {
  return _.useCallback(r, e);
}
function Iw(r, e = !0) {
  _.useEffect(() => {
    if (!e || !r.current) return;
    const t = r.current, n = t.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ), s = n[0], i = n[n.length - 1], a = (c) => {
      c.key === "Tab" && (c.shiftKey ? document.activeElement === s && (c.preventDefault(), i?.focus()) : document.activeElement === i && (c.preventDefault(), s?.focus()));
    };
    return t.addEventListener("keydown", a), s?.focus(), () => {
      t.removeEventListener("keydown", a);
    };
  }, [e, r]);
}
function Ow(r, e = {}) {
  const { direction: t = "both", loop: n = !1, onNavigate: s } = e, [i, a] = _.useState(0), c = _.useCallback(
    (d) => {
      let u = i;
      (t === "horizontal" || t === "both") && (d.key === "ArrowLeft" ? (d.preventDefault(), u = i > 0 ? i - 1 : n ? r - 1 : i) : d.key === "ArrowRight" && (d.preventDefault(), u = i < r - 1 ? i + 1 : n ? 0 : i)), (t === "vertical" || t === "both") && (d.key === "ArrowUp" ? (d.preventDefault(), u = i > 0 ? i - 1 : n ? r - 1 : i) : d.key === "ArrowDown" && (d.preventDefault(), u = i < r - 1 ? i + 1 : n ? 0 : i)), u !== i && (a(u), s?.(u));
    },
    [i, r, t, n, s]
  );
  return { currentIndex: i, setCurrentIndex: a, handleKeyDown: c };
}
function qw(r = {}) {
  const { label: e, labelledBy: t, describedBy: n } = r;
  return _.useMemo(
    () => ({
      "aria-label": e,
      "aria-labelledby": t,
      "aria-describedby": n
    }),
    [e, t, n]
  );
}
function Rw({
  control: r,
  name: e,
  options: t,
  label: n,
  error: s,
  required: i = !1,
  wrapperClassName: a,
  orientation: c = "vertical"
}) {
  const d = je({ control: r, name: e }), u = s || Ze(d.errors, `${e}.message`);
  return /* @__PURE__ */ T("div", { className: f("w-full", a), children: [
    n && /* @__PURE__ */ T(ye, { htmlFor: e, className: "mb-2 block", children: [
      n,
      i && /* @__PURE__ */ o("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ o(
      We,
      {
        control: r,
        name: e,
        render: ({ field: g }) => /* @__PURE__ */ o("div", { className: f("flex gap-4", c === "horizontal" ? "flex-row" : "flex-col"), children: t.map((b) => /* @__PURE__ */ T("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ o(
            ol,
            {
              id: `${e}-${b.value}`,
              checked: Array.isArray(g.value) && g.value.includes(b.value),
              onCheckedChange: (m) => {
                const p = Array.isArray(g.value) ? g.value : [];
                m ? g.onChange([...p, b.value]) : g.onChange(p.filter((N) => N !== b.value));
              },
              disabled: b.disabled
            }
          ),
          /* @__PURE__ */ o(ye, { htmlFor: `${e}-${b.value}`, className: "font-normal cursor-pointer", children: b.label })
        ] }, b.value)) })
      }
    ),
    u && /* @__PURE__ */ o("p", { className: "text-sm text-destructive mt-1", children: u })
  ] });
}
function Mw({
  control: r,
  name: e,
  label: t,
  required: n,
  callback: s = () => {
  },
  className: i,
  ...a
}) {
  const c = je({ control: r, name: e }), d = Ze(c.errors, `${e}.message`);
  return /* @__PURE__ */ o(
    We,
    {
      control: r,
      name: e,
      render: ({ field: u }) => /* @__PURE__ */ o(
        Pd,
        {
          ...a,
          value: u.value,
          onChange: (g, b) => {
            u.onChange(g), s(g, b);
          },
          label: t,
          error: d,
          required: n,
          className: f("w-full", i)
        }
      )
    }
  );
}
function Dw({
  control: r,
  name: e,
  label: t,
  required: n,
  error: s,
  className: i,
  callback: a = () => {
  },
  ...c
}) {
  return /* @__PURE__ */ o(
    We,
    {
      control: r,
      name: e,
      render: ({ field: d, fieldState: { error: u } }) => {
        const g = s || u?.message;
        return /* @__PURE__ */ o(
          Ud,
          {
            ...c,
            value: d.value,
            onChange: (b) => {
              d.onChange(b), a(b);
            },
            label: t,
            error: g,
            required: n,
            className: f("w-full", i)
          }
        );
      }
    }
  );
}
function Bw({
  control: r,
  name: e,
  label: t,
  required: n,
  error: s,
  className: i,
  callback: a = () => {
  },
  ...c
}) {
  return /* @__PURE__ */ o(
    We,
    {
      control: r,
      name: e,
      render: ({ field: d, fieldState: { error: u } }) => {
        const g = s || u?.message;
        return /* @__PURE__ */ o(
          Gd,
          {
            ...c,
            value: d.value,
            onChange: (b) => {
              d.onChange(b), a(b);
            },
            label: t,
            error: g,
            required: n,
            className: f("w-full", i)
          }
        );
      }
    }
  );
}
var Ll = typeof global == "object" && global && global.Object === Object && global, Gu = typeof self == "object" && self && self.Object === Object && self, mt = Ll || Gu || Function("return this")(), Bt = mt.Symbol, Il = Object.prototype, Vu = Il.hasOwnProperty, Ku = Il.toString, Qr = Bt ? Bt.toStringTag : void 0;
function Wu(r) {
  var e = Vu.call(r, Qr), t = r[Qr];
  try {
    r[Qr] = void 0;
    var n = !0;
  } catch {
  }
  var s = Ku.call(r);
  return n && (e ? r[Qr] = t : delete r[Qr]), s;
}
var Zu = Object.prototype, Yu = Zu.toString;
function Xu(r) {
  return Yu.call(r);
}
var Qu = "[object Null]", Ju = "[object Undefined]", za = Bt ? Bt.toStringTag : void 0;
function Rr(r) {
  return r == null ? r === void 0 ? Ju : Qu : za && za in Object(r) ? Wu(r) : Xu(r);
}
function St(r) {
  return r != null && typeof r == "object";
}
var Qt = Array.isArray;
function jt(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
function Ol(r) {
  return r;
}
var ef = "[object AsyncFunction]", tf = "[object Function]", rf = "[object GeneratorFunction]", nf = "[object Proxy]";
function sa(r) {
  if (!jt(r))
    return !1;
  var e = Rr(r);
  return e == tf || e == rf || e == ef || e == nf;
}
var yi = mt["__core-js_shared__"], $a = (function() {
  var r = /[^.]+$/.exec(yi && yi.keys && yi.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
})();
function sf(r) {
  return !!$a && $a in r;
}
var af = Function.prototype, of = af.toString;
function sr(r) {
  if (r != null) {
    try {
      return of.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
var lf = /[\\^$.*+?()[\]{}|]/g, cf = /^\[object .+?Constructor\]$/, df = Function.prototype, uf = Object.prototype, ff = df.toString, hf = uf.hasOwnProperty, mf = RegExp(
  "^" + ff.call(hf).replace(lf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function gf(r) {
  if (!jt(r) || sf(r))
    return !1;
  var e = sa(r) ? mf : cf;
  return e.test(sr(r));
}
function pf(r, e) {
  return r?.[e];
}
function ir(r, e) {
  var t = pf(r, e);
  return gf(t) ? t : void 0;
}
var Di = ir(mt, "WeakMap"), Pa = Object.create, bf = /* @__PURE__ */ (function() {
  function r() {
  }
  return function(e) {
    if (!jt(e))
      return {};
    if (Pa)
      return Pa(e);
    r.prototype = e;
    var t = new r();
    return r.prototype = void 0, t;
  };
})();
function vf(r, e, t) {
  switch (t.length) {
    case 0:
      return r.call(e);
    case 1:
      return r.call(e, t[0]);
    case 2:
      return r.call(e, t[0], t[1]);
    case 3:
      return r.call(e, t[0], t[1], t[2]);
  }
  return r.apply(e, t);
}
function xf(r, e) {
  var t = -1, n = r.length;
  for (e || (e = Array(n)); ++t < n; )
    e[t] = r[t];
  return e;
}
var yf = 800, wf = 16, Nf = Date.now;
function Ef(r) {
  var e = 0, t = 0;
  return function() {
    var n = Nf(), s = wf - (n - t);
    if (t = n, s > 0) {
      if (++e >= yf)
        return arguments[0];
    } else
      e = 0;
    return r.apply(void 0, arguments);
  };
}
function Sf(r) {
  return function() {
    return r;
  };
}
var as = (function() {
  try {
    var r = ir(Object, "defineProperty");
    return r({}, "", {}), r;
  } catch {
  }
})(), Tf = as ? function(r, e) {
  return as(r, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Sf(e),
    writable: !0
  });
} : Ol, Cf = Ef(Tf);
function Af(r, e) {
  for (var t = -1, n = r == null ? 0 : r.length; ++t < n && e(r[t], t, r) !== !1; )
    ;
  return r;
}
var kf = 9007199254740991, _f = /^(?:0|[1-9]\d*)$/;
function ql(r, e) {
  var t = typeof r;
  return e = e ?? kf, !!e && (t == "number" || t != "symbol" && _f.test(r)) && r > -1 && r % 1 == 0 && r < e;
}
function ia(r, e, t) {
  e == "__proto__" && as ? as(r, e, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : r[e] = t;
}
function wn(r, e) {
  return r === e || r !== r && e !== e;
}
var Lf = Object.prototype, If = Lf.hasOwnProperty;
function Rl(r, e, t) {
  var n = r[e];
  (!(If.call(r, e) && wn(n, t)) || t === void 0 && !(e in r)) && ia(r, e, t);
}
function Of(r, e, t, n) {
  var s = !t;
  t || (t = {});
  for (var i = -1, a = e.length; ++i < a; ) {
    var c = e[i], d = void 0;
    d === void 0 && (d = r[c]), s ? ia(t, c, d) : Rl(t, c, d);
  }
  return t;
}
var ja = Math.max;
function qf(r, e, t) {
  return e = ja(e === void 0 ? r.length - 1 : e, 0), function() {
    for (var n = arguments, s = -1, i = ja(n.length - e, 0), a = Array(i); ++s < i; )
      a[s] = n[e + s];
    s = -1;
    for (var c = Array(e + 1); ++s < e; )
      c[s] = n[s];
    return c[e] = t(a), vf(r, this, c);
  };
}
function Rf(r, e) {
  return Cf(qf(r, e, Ol), r + "");
}
var Mf = 9007199254740991;
function Ml(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= Mf;
}
function ws(r) {
  return r != null && Ml(r.length) && !sa(r);
}
function Df(r, e, t) {
  if (!jt(t))
    return !1;
  var n = typeof e;
  return (n == "number" ? ws(t) && ql(e, t.length) : n == "string" && e in t) ? wn(t[e], r) : !1;
}
function Bf(r) {
  return Rf(function(e, t) {
    var n = -1, s = t.length, i = s > 1 ? t[s - 1] : void 0, a = s > 2 ? t[2] : void 0;
    for (i = r.length > 3 && typeof i == "function" ? (s--, i) : void 0, a && Df(t[0], t[1], a) && (i = s < 3 ? void 0 : i, s = 1), e = Object(e); ++n < s; ) {
      var c = t[n];
      c && r(e, c, n, i);
    }
    return e;
  });
}
var zf = Object.prototype;
function aa(r) {
  var e = r && r.constructor, t = typeof e == "function" && e.prototype || zf;
  return r === t;
}
function $f(r, e) {
  for (var t = -1, n = Array(r); ++t < r; )
    n[t] = e(t);
  return n;
}
var Pf = "[object Arguments]";
function Fa(r) {
  return St(r) && Rr(r) == Pf;
}
var Dl = Object.prototype, jf = Dl.hasOwnProperty, Ff = Dl.propertyIsEnumerable, Bi = Fa(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Fa : function(r) {
  return St(r) && jf.call(r, "callee") && !Ff.call(r, "callee");
};
function Uf() {
  return !1;
}
var Bl = typeof exports == "object" && exports && !exports.nodeType && exports, Ua = Bl && typeof module == "object" && module && !module.nodeType && module, Hf = Ua && Ua.exports === Bl, Ha = Hf ? mt.Buffer : void 0, Gf = Ha ? Ha.isBuffer : void 0, fn = Gf || Uf, Vf = "[object Arguments]", Kf = "[object Array]", Wf = "[object Boolean]", Zf = "[object Date]", Yf = "[object Error]", Xf = "[object Function]", Qf = "[object Map]", Jf = "[object Number]", eh = "[object Object]", th = "[object RegExp]", rh = "[object Set]", nh = "[object String]", sh = "[object WeakMap]", ih = "[object ArrayBuffer]", ah = "[object DataView]", oh = "[object Float32Array]", lh = "[object Float64Array]", ch = "[object Int8Array]", dh = "[object Int16Array]", uh = "[object Int32Array]", fh = "[object Uint8Array]", hh = "[object Uint8ClampedArray]", mh = "[object Uint16Array]", gh = "[object Uint32Array]", ge = {};
ge[oh] = ge[lh] = ge[ch] = ge[dh] = ge[uh] = ge[fh] = ge[hh] = ge[mh] = ge[gh] = !0;
ge[Vf] = ge[Kf] = ge[ih] = ge[Wf] = ge[ah] = ge[Zf] = ge[Yf] = ge[Xf] = ge[Qf] = ge[Jf] = ge[eh] = ge[th] = ge[rh] = ge[nh] = ge[sh] = !1;
function ph(r) {
  return St(r) && Ml(r.length) && !!ge[Rr(r)];
}
function oa(r) {
  return function(e) {
    return r(e);
  };
}
var zl = typeof exports == "object" && exports && !exports.nodeType && exports, on = zl && typeof module == "object" && module && !module.nodeType && module, bh = on && on.exports === zl, wi = bh && Ll.process, Or = (function() {
  try {
    var r = on && on.require && on.require("util").types;
    return r || wi && wi.binding && wi.binding("util");
  } catch {
  }
})(), Ga = Or && Or.isTypedArray, la = Ga ? oa(Ga) : ph, vh = Object.prototype, xh = vh.hasOwnProperty;
function $l(r, e) {
  var t = Qt(r), n = !t && Bi(r), s = !t && !n && fn(r), i = !t && !n && !s && la(r), a = t || n || s || i, c = a ? $f(r.length, String) : [], d = c.length;
  for (var u in r)
    (e || xh.call(r, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ql(u, d))) && c.push(u);
  return c;
}
function Pl(r, e) {
  return function(t) {
    return r(e(t));
  };
}
var yh = Pl(Object.keys, Object), wh = Object.prototype, Nh = wh.hasOwnProperty;
function Eh(r) {
  if (!aa(r))
    return yh(r);
  var e = [];
  for (var t in Object(r))
    Nh.call(r, t) && t != "constructor" && e.push(t);
  return e;
}
function Sh(r) {
  return ws(r) ? $l(r) : Eh(r);
}
function Th(r) {
  var e = [];
  if (r != null)
    for (var t in Object(r))
      e.push(t);
  return e;
}
var Ch = Object.prototype, Ah = Ch.hasOwnProperty;
function kh(r) {
  if (!jt(r))
    return Th(r);
  var e = aa(r), t = [];
  for (var n in r)
    n == "constructor" && (e || !Ah.call(r, n)) || t.push(n);
  return t;
}
function jl(r) {
  return ws(r) ? $l(r, !0) : kh(r);
}
var hn = ir(Object, "create");
function _h() {
  this.__data__ = hn ? hn(null) : {}, this.size = 0;
}
function Lh(r) {
  var e = this.has(r) && delete this.__data__[r];
  return this.size -= e ? 1 : 0, e;
}
var Ih = "__lodash_hash_undefined__", Oh = Object.prototype, qh = Oh.hasOwnProperty;
function Rh(r) {
  var e = this.__data__;
  if (hn) {
    var t = e[r];
    return t === Ih ? void 0 : t;
  }
  return qh.call(e, r) ? e[r] : void 0;
}
var Mh = Object.prototype, Dh = Mh.hasOwnProperty;
function Bh(r) {
  var e = this.__data__;
  return hn ? e[r] !== void 0 : Dh.call(e, r);
}
var zh = "__lodash_hash_undefined__";
function $h(r, e) {
  var t = this.__data__;
  return this.size += this.has(r) ? 0 : 1, t[r] = hn && e === void 0 ? zh : e, this;
}
function Jt(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
Jt.prototype.clear = _h;
Jt.prototype.delete = Lh;
Jt.prototype.get = Rh;
Jt.prototype.has = Bh;
Jt.prototype.set = $h;
function Ph() {
  this.__data__ = [], this.size = 0;
}
function Ns(r, e) {
  for (var t = r.length; t--; )
    if (wn(r[t][0], e))
      return t;
  return -1;
}
var jh = Array.prototype, Fh = jh.splice;
function Uh(r) {
  var e = this.__data__, t = Ns(e, r);
  if (t < 0)
    return !1;
  var n = e.length - 1;
  return t == n ? e.pop() : Fh.call(e, t, 1), --this.size, !0;
}
function Hh(r) {
  var e = this.__data__, t = Ns(e, r);
  return t < 0 ? void 0 : e[t][1];
}
function Gh(r) {
  return Ns(this.__data__, r) > -1;
}
function Vh(r, e) {
  var t = this.__data__, n = Ns(t, r);
  return n < 0 ? (++this.size, t.push([r, e])) : t[n][1] = e, this;
}
function At(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
At.prototype.clear = Ph;
At.prototype.delete = Uh;
At.prototype.get = Hh;
At.prototype.has = Gh;
At.prototype.set = Vh;
var mn = ir(mt, "Map");
function Kh() {
  this.size = 0, this.__data__ = {
    hash: new Jt(),
    map: new (mn || At)(),
    string: new Jt()
  };
}
function Wh(r) {
  var e = typeof r;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null;
}
function Es(r, e) {
  var t = r.__data__;
  return Wh(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
function Zh(r) {
  var e = Es(this, r).delete(r);
  return this.size -= e ? 1 : 0, e;
}
function Yh(r) {
  return Es(this, r).get(r);
}
function Xh(r) {
  return Es(this, r).has(r);
}
function Qh(r, e) {
  var t = Es(this, r), n = t.size;
  return t.set(r, e), this.size += t.size == n ? 0 : 1, this;
}
function ar(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
ar.prototype.clear = Kh;
ar.prototype.delete = Zh;
ar.prototype.get = Yh;
ar.prototype.has = Xh;
ar.prototype.set = Qh;
function Jh(r, e) {
  for (var t = -1, n = e.length, s = r.length; ++t < n; )
    r[s + t] = e[t];
  return r;
}
var Fl = Pl(Object.getPrototypeOf, Object), em = "[object Object]", tm = Function.prototype, rm = Object.prototype, Ul = tm.toString, nm = rm.hasOwnProperty, sm = Ul.call(Object);
function im(r) {
  if (!St(r) || Rr(r) != em)
    return !1;
  var e = Fl(r);
  if (e === null)
    return !0;
  var t = nm.call(e, "constructor") && e.constructor;
  return typeof t == "function" && t instanceof t && Ul.call(t) == sm;
}
function am() {
  this.__data__ = new At(), this.size = 0;
}
function om(r) {
  var e = this.__data__, t = e.delete(r);
  return this.size = e.size, t;
}
function lm(r) {
  return this.__data__.get(r);
}
function cm(r) {
  return this.__data__.has(r);
}
var dm = 200;
function um(r, e) {
  var t = this.__data__;
  if (t instanceof At) {
    var n = t.__data__;
    if (!mn || n.length < dm - 1)
      return n.push([r, e]), this.size = ++t.size, this;
    t = this.__data__ = new ar(n);
  }
  return t.set(r, e), this.size = t.size, this;
}
function ft(r) {
  var e = this.__data__ = new At(r);
  this.size = e.size;
}
ft.prototype.clear = am;
ft.prototype.delete = om;
ft.prototype.get = lm;
ft.prototype.has = cm;
ft.prototype.set = um;
var Hl = typeof exports == "object" && exports && !exports.nodeType && exports, Va = Hl && typeof module == "object" && module && !module.nodeType && module, fm = Va && Va.exports === Hl, Ka = fm ? mt.Buffer : void 0, Wa = Ka ? Ka.allocUnsafe : void 0;
function Gl(r, e) {
  if (e)
    return r.slice();
  var t = r.length, n = Wa ? Wa(t) : new r.constructor(t);
  return r.copy(n), n;
}
function hm(r, e) {
  for (var t = -1, n = r == null ? 0 : r.length, s = 0, i = []; ++t < n; ) {
    var a = r[t];
    e(a, t, r) && (i[s++] = a);
  }
  return i;
}
function mm() {
  return [];
}
var gm = Object.prototype, pm = gm.propertyIsEnumerable, Za = Object.getOwnPropertySymbols, bm = Za ? function(r) {
  return r == null ? [] : (r = Object(r), hm(Za(r), function(e) {
    return pm.call(r, e);
  }));
} : mm;
function vm(r, e, t) {
  var n = e(r);
  return Qt(r) ? n : Jh(n, t(r));
}
function zi(r) {
  return vm(r, Sh, bm);
}
var $i = ir(mt, "DataView"), Pi = ir(mt, "Promise"), ji = ir(mt, "Set"), Ya = "[object Map]", xm = "[object Object]", Xa = "[object Promise]", Qa = "[object Set]", Ja = "[object WeakMap]", eo = "[object DataView]", ym = sr($i), wm = sr(mn), Nm = sr(Pi), Em = sr(ji), Sm = sr(Di), Je = Rr;
($i && Je(new $i(new ArrayBuffer(1))) != eo || mn && Je(new mn()) != Ya || Pi && Je(Pi.resolve()) != Xa || ji && Je(new ji()) != Qa || Di && Je(new Di()) != Ja) && (Je = function(r) {
  var e = Rr(r), t = e == xm ? r.constructor : void 0, n = t ? sr(t) : "";
  if (n)
    switch (n) {
      case ym:
        return eo;
      case wm:
        return Ya;
      case Nm:
        return Xa;
      case Em:
        return Qa;
      case Sm:
        return Ja;
    }
  return e;
});
var Tm = Object.prototype, Cm = Tm.hasOwnProperty;
function Am(r) {
  var e = r.length, t = new r.constructor(e);
  return e && typeof r[0] == "string" && Cm.call(r, "index") && (t.index = r.index, t.input = r.input), t;
}
var os = mt.Uint8Array;
function ca(r) {
  var e = new r.constructor(r.byteLength);
  return new os(e).set(new os(r)), e;
}
function km(r, e) {
  var t = ca(r.buffer);
  return new r.constructor(t, r.byteOffset, r.byteLength);
}
var _m = /\w*$/;
function Lm(r) {
  var e = new r.constructor(r.source, _m.exec(r));
  return e.lastIndex = r.lastIndex, e;
}
var to = Bt ? Bt.prototype : void 0, ro = to ? to.valueOf : void 0;
function Im(r) {
  return ro ? Object(ro.call(r)) : {};
}
function Vl(r, e) {
  var t = e ? ca(r.buffer) : r.buffer;
  return new r.constructor(t, r.byteOffset, r.length);
}
var Om = "[object Boolean]", qm = "[object Date]", Rm = "[object Map]", Mm = "[object Number]", Dm = "[object RegExp]", Bm = "[object Set]", zm = "[object String]", $m = "[object Symbol]", Pm = "[object ArrayBuffer]", jm = "[object DataView]", Fm = "[object Float32Array]", Um = "[object Float64Array]", Hm = "[object Int8Array]", Gm = "[object Int16Array]", Vm = "[object Int32Array]", Km = "[object Uint8Array]", Wm = "[object Uint8ClampedArray]", Zm = "[object Uint16Array]", Ym = "[object Uint32Array]";
function Xm(r, e, t) {
  var n = r.constructor;
  switch (e) {
    case Pm:
      return ca(r);
    case Om:
    case qm:
      return new n(+r);
    case jm:
      return km(r);
    case Fm:
    case Um:
    case Hm:
    case Gm:
    case Vm:
    case Km:
    case Wm:
    case Zm:
    case Ym:
      return Vl(r, t);
    case Rm:
      return new n();
    case Mm:
    case zm:
      return new n(r);
    case Dm:
      return Lm(r);
    case Bm:
      return new n();
    case $m:
      return Im(r);
  }
}
function Kl(r) {
  return typeof r.constructor == "function" && !aa(r) ? bf(Fl(r)) : {};
}
var Qm = "[object Map]";
function Jm(r) {
  return St(r) && Je(r) == Qm;
}
var no = Or && Or.isMap, eg = no ? oa(no) : Jm, tg = "[object Set]";
function rg(r) {
  return St(r) && Je(r) == tg;
}
var so = Or && Or.isSet, ng = so ? oa(so) : rg, sg = 1, Wl = "[object Arguments]", ig = "[object Array]", ag = "[object Boolean]", og = "[object Date]", lg = "[object Error]", Zl = "[object Function]", cg = "[object GeneratorFunction]", dg = "[object Map]", ug = "[object Number]", Yl = "[object Object]", fg = "[object RegExp]", hg = "[object Set]", mg = "[object String]", gg = "[object Symbol]", pg = "[object WeakMap]", bg = "[object ArrayBuffer]", vg = "[object DataView]", xg = "[object Float32Array]", yg = "[object Float64Array]", wg = "[object Int8Array]", Ng = "[object Int16Array]", Eg = "[object Int32Array]", Sg = "[object Uint8Array]", Tg = "[object Uint8ClampedArray]", Cg = "[object Uint16Array]", Ag = "[object Uint32Array]", me = {};
me[Wl] = me[ig] = me[bg] = me[vg] = me[ag] = me[og] = me[xg] = me[yg] = me[wg] = me[Ng] = me[Eg] = me[dg] = me[ug] = me[Yl] = me[fg] = me[hg] = me[mg] = me[gg] = me[Sg] = me[Tg] = me[Cg] = me[Ag] = !0;
me[lg] = me[Zl] = me[pg] = !1;
function ns(r, e, t, n, s, i) {
  var a, c = e & sg;
  if (a !== void 0)
    return a;
  if (!jt(r))
    return r;
  var d = Qt(r);
  if (d)
    a = Am(r);
  else {
    var u = Je(r), g = u == Zl || u == cg;
    if (fn(r))
      return Gl(r, c);
    if (u == Yl || u == Wl || g && !s)
      a = g ? {} : Kl(r);
    else {
      if (!me[u])
        return s ? r : {};
      a = Xm(r, u, c);
    }
  }
  i || (i = new ft());
  var b = i.get(r);
  if (b)
    return b;
  i.set(r, a), ng(r) ? r.forEach(function(N) {
    a.add(ns(N, e, t, N, r, i));
  }) : eg(r) && r.forEach(function(N, S) {
    a.set(S, ns(N, e, t, S, r, i));
  });
  var m = zi, p = d ? void 0 : m(r);
  return Af(p || r, function(N, S) {
    p && (S = N, N = r[S]), Rl(a, S, ns(N, e, t, S, r, i));
  }), a;
}
var kg = 1, _g = 4;
function kr(r) {
  return ns(r, kg | _g);
}
var Lg = "__lodash_hash_undefined__";
function Ig(r) {
  return this.__data__.set(r, Lg), this;
}
function Og(r) {
  return this.__data__.has(r);
}
function ls(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.__data__ = new ar(); ++e < t; )
    this.add(r[e]);
}
ls.prototype.add = ls.prototype.push = Ig;
ls.prototype.has = Og;
function qg(r, e) {
  for (var t = -1, n = r == null ? 0 : r.length; ++t < n; )
    if (e(r[t], t, r))
      return !0;
  return !1;
}
function Rg(r, e) {
  return r.has(e);
}
var Mg = 1, Dg = 2;
function Xl(r, e, t, n, s, i) {
  var a = t & Mg, c = r.length, d = e.length;
  if (c != d && !(a && d > c))
    return !1;
  var u = i.get(r), g = i.get(e);
  if (u && g)
    return u == e && g == r;
  var b = -1, m = !0, p = t & Dg ? new ls() : void 0;
  for (i.set(r, e), i.set(e, r); ++b < c; ) {
    var N = r[b], S = e[b];
    if (n)
      var C = a ? n(S, N, b, e, r, i) : n(N, S, b, r, e, i);
    if (C !== void 0) {
      if (C)
        continue;
      m = !1;
      break;
    }
    if (p) {
      if (!qg(e, function(y, E) {
        if (!Rg(p, E) && (N === y || s(N, y, t, n, i)))
          return p.push(E);
      })) {
        m = !1;
        break;
      }
    } else if (!(N === S || s(N, S, t, n, i))) {
      m = !1;
      break;
    }
  }
  return i.delete(r), i.delete(e), m;
}
function Bg(r) {
  var e = -1, t = Array(r.size);
  return r.forEach(function(n, s) {
    t[++e] = [s, n];
  }), t;
}
function zg(r) {
  var e = -1, t = Array(r.size);
  return r.forEach(function(n) {
    t[++e] = n;
  }), t;
}
var $g = 1, Pg = 2, jg = "[object Boolean]", Fg = "[object Date]", Ug = "[object Error]", Hg = "[object Map]", Gg = "[object Number]", Vg = "[object RegExp]", Kg = "[object Set]", Wg = "[object String]", Zg = "[object Symbol]", Yg = "[object ArrayBuffer]", Xg = "[object DataView]", io = Bt ? Bt.prototype : void 0, Ni = io ? io.valueOf : void 0;
function Qg(r, e, t, n, s, i, a) {
  switch (t) {
    case Xg:
      if (r.byteLength != e.byteLength || r.byteOffset != e.byteOffset)
        return !1;
      r = r.buffer, e = e.buffer;
    case Yg:
      return !(r.byteLength != e.byteLength || !i(new os(r), new os(e)));
    case jg:
    case Fg:
    case Gg:
      return wn(+r, +e);
    case Ug:
      return r.name == e.name && r.message == e.message;
    case Vg:
    case Wg:
      return r == e + "";
    case Hg:
      var c = Bg;
    case Kg:
      var d = n & $g;
      if (c || (c = zg), r.size != e.size && !d)
        return !1;
      var u = a.get(r);
      if (u)
        return u == e;
      n |= Pg, a.set(r, e);
      var g = Xl(c(r), c(e), n, s, i, a);
      return a.delete(r), g;
    case Zg:
      if (Ni)
        return Ni.call(r) == Ni.call(e);
  }
  return !1;
}
var Jg = 1, ep = Object.prototype, tp = ep.hasOwnProperty;
function rp(r, e, t, n, s, i) {
  var a = t & Jg, c = zi(r), d = c.length, u = zi(e), g = u.length;
  if (d != g && !a)
    return !1;
  for (var b = d; b--; ) {
    var m = c[b];
    if (!(a ? m in e : tp.call(e, m)))
      return !1;
  }
  var p = i.get(r), N = i.get(e);
  if (p && N)
    return p == e && N == r;
  var S = !0;
  i.set(r, e), i.set(e, r);
  for (var C = a; ++b < d; ) {
    m = c[b];
    var y = r[m], E = e[m];
    if (n)
      var I = a ? n(E, y, m, e, r, i) : n(y, E, m, r, e, i);
    if (!(I === void 0 ? y === E || s(y, E, t, n, i) : I)) {
      S = !1;
      break;
    }
    C || (C = m == "constructor");
  }
  if (S && !C) {
    var D = r.constructor, j = e.constructor;
    D != j && "constructor" in r && "constructor" in e && !(typeof D == "function" && D instanceof D && typeof j == "function" && j instanceof j) && (S = !1);
  }
  return i.delete(r), i.delete(e), S;
}
var np = 1, ao = "[object Arguments]", oo = "[object Array]", Kn = "[object Object]", sp = Object.prototype, lo = sp.hasOwnProperty;
function ip(r, e, t, n, s, i) {
  var a = Qt(r), c = Qt(e), d = a ? oo : Je(r), u = c ? oo : Je(e);
  d = d == ao ? Kn : d, u = u == ao ? Kn : u;
  var g = d == Kn, b = u == Kn, m = d == u;
  if (m && fn(r)) {
    if (!fn(e))
      return !1;
    a = !0, g = !1;
  }
  if (m && !g)
    return i || (i = new ft()), a || la(r) ? Xl(r, e, t, n, s, i) : Qg(r, e, d, t, n, s, i);
  if (!(t & np)) {
    var p = g && lo.call(r, "__wrapped__"), N = b && lo.call(e, "__wrapped__");
    if (p || N) {
      var S = p ? r.value() : r, C = N ? e.value() : e;
      return i || (i = new ft()), s(S, C, t, n, i);
    }
  }
  return m ? (i || (i = new ft()), rp(r, e, t, n, s, i)) : !1;
}
function Ql(r, e, t, n, s) {
  return r === e ? !0 : r == null || e == null || !St(r) && !St(e) ? r !== r && e !== e : ip(r, e, t, n, Ql, s);
}
function ap(r) {
  return function(e, t, n) {
    for (var s = -1, i = Object(e), a = n(e), c = a.length; c--; ) {
      var d = a[++s];
      if (t(i[d], d, i) === !1)
        break;
    }
    return e;
  };
}
var op = ap();
function Fi(r, e, t) {
  (t !== void 0 && !wn(r[e], t) || t === void 0 && !(e in r)) && ia(r, e, t);
}
function lp(r) {
  return St(r) && ws(r);
}
function Ui(r, e) {
  if (!(e === "constructor" && typeof r[e] == "function") && e != "__proto__")
    return r[e];
}
function cp(r) {
  return Of(r, jl(r));
}
function dp(r, e, t, n, s, i, a) {
  var c = Ui(r, t), d = Ui(e, t), u = a.get(d);
  if (u) {
    Fi(r, t, u);
    return;
  }
  var g = i ? i(c, d, t + "", r, e, a) : void 0, b = g === void 0;
  if (b) {
    var m = Qt(d), p = !m && fn(d), N = !m && !p && la(d);
    g = d, m || p || N ? Qt(c) ? g = c : lp(c) ? g = xf(c) : p ? (b = !1, g = Gl(d, !0)) : N ? (b = !1, g = Vl(d, !0)) : g = [] : im(d) || Bi(d) ? (g = c, Bi(c) ? g = cp(c) : (!jt(c) || sa(c)) && (g = Kl(d))) : b = !1;
  }
  b && (a.set(d, g), s(g, d, n, i, a), a.delete(d)), Fi(r, t, g);
}
function Jl(r, e, t, n, s) {
  r !== e && op(e, function(i, a) {
    if (s || (s = new ft()), jt(i))
      dp(r, e, a, t, Jl, n, s);
    else {
      var c = n ? n(Ui(r, a), i, a + "", r, e, s) : void 0;
      c === void 0 && (c = i), Fi(r, a, c);
    }
  }, jl);
}
function Ot(r, e) {
  return Ql(r, e);
}
var Mt = Bf(function(r, e, t) {
  Jl(r, e, t);
}), H = /* @__PURE__ */ ((r) => (r[r.TYPE = 3] = "TYPE", r[r.LEVEL = 12] = "LEVEL", r[r.ATTRIBUTE = 13] = "ATTRIBUTE", r[r.BLOT = 14] = "BLOT", r[r.INLINE = 7] = "INLINE", r[r.BLOCK = 11] = "BLOCK", r[r.BLOCK_BLOT = 10] = "BLOCK_BLOT", r[r.INLINE_BLOT = 6] = "INLINE_BLOT", r[r.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", r[r.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", r[r.ANY = 15] = "ANY", r))(H || {});
class ht {
  constructor(e, t, n = {}) {
    this.attrName = e, this.keyName = t;
    const s = H.TYPE & H.ATTRIBUTE;
    this.scope = n.scope != null ? (
      // Ignore type bits, force attribute bit
      n.scope & H.LEVEL | s
    ) : H.ATTRIBUTE, n.whitelist != null && (this.whitelist = n.whitelist);
  }
  static keys(e) {
    return Array.from(e.attributes).map((t) => t.name);
  }
  add(e, t) {
    return this.canAdd(e, t) ? (e.setAttribute(this.keyName, t), !0) : !1;
  }
  canAdd(e, t) {
    return this.whitelist == null ? !0 : typeof t == "string" ? this.whitelist.indexOf(t.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(t) > -1;
  }
  remove(e) {
    e.removeAttribute(this.keyName);
  }
  value(e) {
    const t = e.getAttribute(this.keyName);
    return this.canAdd(e, t) && t ? t : "";
  }
}
class _r extends Error {
  constructor(e) {
    e = "[Parchment] " + e, super(e), this.message = e, this.name = this.constructor.name;
  }
}
const ec = class Hi {
  constructor() {
    this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
  }
  static find(e, t = !1) {
    if (e == null)
      return null;
    if (this.blots.has(e))
      return this.blots.get(e) || null;
    if (t) {
      let n = null;
      try {
        n = e.parentNode;
      } catch {
        return null;
      }
      return this.find(n, t);
    }
    return null;
  }
  create(e, t, n) {
    const s = this.query(t);
    if (s == null)
      throw new _r(`Unable to create ${t} blot`);
    const i = s, a = (
      // @ts-expect-error Fix me later
      t instanceof Node || t.nodeType === Node.TEXT_NODE ? t : i.create(n)
    ), c = new i(e, a, n);
    return Hi.blots.set(c.domNode, c), c;
  }
  find(e, t = !1) {
    return Hi.find(e, t);
  }
  query(e, t = H.ANY) {
    let n;
    return typeof e == "string" ? n = this.types[e] || this.attributes[e] : e instanceof Text || e.nodeType === Node.TEXT_NODE ? n = this.types.text : typeof e == "number" ? e & H.LEVEL & H.BLOCK ? n = this.types.block : e & H.LEVEL & H.INLINE && (n = this.types.inline) : e instanceof Element && ((e.getAttribute("class") || "").split(/\s+/).some((s) => (n = this.classes[s], !!n)), n = n || this.tags[e.tagName]), n == null ? null : "scope" in n && t & H.LEVEL & n.scope && t & H.TYPE & n.scope ? n : null;
  }
  register(...e) {
    return e.map((t) => {
      const n = "blotName" in t, s = "attrName" in t;
      if (!n && !s)
        throw new _r("Invalid definition");
      if (n && t.blotName === "abstract")
        throw new _r("Cannot register abstract class");
      const i = n ? t.blotName : s ? t.attrName : void 0;
      return this.types[i] = t, s ? typeof t.keyName == "string" && (this.attributes[t.keyName] = t) : n && (t.className && (this.classes[t.className] = t), t.tagName && (Array.isArray(t.tagName) ? t.tagName = t.tagName.map((a) => a.toUpperCase()) : t.tagName = t.tagName.toUpperCase(), (Array.isArray(t.tagName) ? t.tagName : [t.tagName]).forEach((a) => {
        (this.tags[a] == null || t.className == null) && (this.tags[a] = t);
      }))), t;
    });
  }
};
ec.blots = /* @__PURE__ */ new WeakMap();
let qr = ec;
function co(r, e) {
  return (r.getAttribute("class") || "").split(/\s+/).filter((t) => t.indexOf(`${e}-`) === 0);
}
class up extends ht {
  static keys(e) {
    return (e.getAttribute("class") || "").split(/\s+/).map((t) => t.split("-").slice(0, -1).join("-"));
  }
  add(e, t) {
    return this.canAdd(e, t) ? (this.remove(e), e.classList.add(`${this.keyName}-${t}`), !0) : !1;
  }
  remove(e) {
    co(e, this.keyName).forEach((t) => {
      e.classList.remove(t);
    }), e.classList.length === 0 && e.removeAttribute("class");
  }
  value(e) {
    const t = (co(e, this.keyName)[0] || "").slice(this.keyName.length + 1);
    return this.canAdd(e, t) ? t : "";
  }
}
const it = up;
function Ei(r) {
  const e = r.split("-"), t = e.slice(1).map((n) => n[0].toUpperCase() + n.slice(1)).join("");
  return e[0] + t;
}
class fp extends ht {
  static keys(e) {
    return (e.getAttribute("style") || "").split(";").map((t) => t.split(":")[0].trim());
  }
  add(e, t) {
    return this.canAdd(e, t) ? (e.style[Ei(this.keyName)] = t, !0) : !1;
  }
  remove(e) {
    e.style[Ei(this.keyName)] = "", e.getAttribute("style") || e.removeAttribute("style");
  }
  value(e) {
    const t = e.style[Ei(this.keyName)];
    return this.canAdd(e, t) ? t : "";
  }
}
const Ft = fp;
class hp {
  constructor(e) {
    this.attributes = {}, this.domNode = e, this.build();
  }
  attribute(e, t) {
    t ? e.add(this.domNode, t) && (e.value(this.domNode) != null ? this.attributes[e.attrName] = e : delete this.attributes[e.attrName]) : (e.remove(this.domNode), delete this.attributes[e.attrName]);
  }
  build() {
    this.attributes = {};
    const e = qr.find(this.domNode);
    if (e == null)
      return;
    const t = ht.keys(this.domNode), n = it.keys(this.domNode), s = Ft.keys(this.domNode);
    t.concat(n).concat(s).forEach((i) => {
      const a = e.scroll.query(i, H.ATTRIBUTE);
      a instanceof ht && (this.attributes[a.attrName] = a);
    });
  }
  copy(e) {
    Object.keys(this.attributes).forEach((t) => {
      const n = this.attributes[t].value(this.domNode);
      e.format(t, n);
    });
  }
  move(e) {
    this.copy(e), Object.keys(this.attributes).forEach((t) => {
      this.attributes[t].remove(this.domNode);
    }), this.attributes = {};
  }
  values() {
    return Object.keys(this.attributes).reduce(
      (e, t) => (e[t] = this.attributes[t].value(this.domNode), e),
      {}
    );
  }
}
const Ss = hp, tc = class {
  constructor(e, t) {
    this.scroll = e, this.domNode = t, qr.blots.set(t, this), this.prev = null, this.next = null;
  }
  static create(e) {
    if (this.tagName == null)
      throw new _r("Blot definition missing tagName");
    let t, n;
    return Array.isArray(this.tagName) ? (typeof e == "string" ? (n = e.toUpperCase(), parseInt(n, 10).toString() === n && (n = parseInt(n, 10))) : typeof e == "number" && (n = e), typeof n == "number" ? t = document.createElement(this.tagName[n - 1]) : n && this.tagName.indexOf(n) > -1 ? t = document.createElement(n) : t = document.createElement(this.tagName[0])) : t = document.createElement(this.tagName), this.className && t.classList.add(this.className), t;
  }
  // Hack for accessing inherited static methods
  get statics() {
    return this.constructor;
  }
  attach() {
  }
  clone() {
    const e = this.domNode.cloneNode(!1);
    return this.scroll.create(e);
  }
  detach() {
    this.parent != null && this.parent.removeChild(this), qr.blots.delete(this.domNode);
  }
  deleteAt(e, t) {
    this.isolate(e, t).remove();
  }
  formatAt(e, t, n, s) {
    const i = this.isolate(e, t);
    if (this.scroll.query(n, H.BLOT) != null && s)
      i.wrap(n, s);
    else if (this.scroll.query(n, H.ATTRIBUTE) != null) {
      const a = this.scroll.create(this.statics.scope);
      i.wrap(a), a.format(n, s);
    }
  }
  insertAt(e, t, n) {
    const s = n == null ? this.scroll.create("text", t) : this.scroll.create(t, n), i = this.split(e);
    this.parent.insertBefore(s, i || void 0);
  }
  isolate(e, t) {
    const n = this.split(e);
    if (n == null)
      throw new Error("Attempt to isolate at end");
    return n.split(t), n;
  }
  length() {
    return 1;
  }
  offset(e = this.parent) {
    return this.parent == null || this === e ? 0 : this.parent.children.offset(this) + this.parent.offset(e);
  }
  optimize(e) {
    this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
  }
  remove() {
    this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
  }
  replaceWith(e, t) {
    const n = typeof e == "string" ? this.scroll.create(e, t) : e;
    return this.parent != null && (this.parent.insertBefore(n, this.next || void 0), this.remove()), n;
  }
  split(e, t) {
    return e === 0 ? this : this.next;
  }
  update(e, t) {
  }
  wrap(e, t) {
    const n = typeof e == "string" ? this.scroll.create(e, t) : e;
    if (this.parent != null && this.parent.insertBefore(n, this.next || void 0), typeof n.appendChild != "function")
      throw new _r(`Cannot wrap ${e}`);
    return n.appendChild(this), n;
  }
};
tc.blotName = "abstract";
let rc = tc;
const nc = class extends rc {
  /**
   * Returns the value represented by domNode if it is this Blot's type
   * No checking that domNode can represent this Blot type is required so
   * applications needing it should check externally before calling.
   */
  static value(e) {
    return !0;
  }
  /**
   * Given location represented by node and offset from DOM Selection Range,
   * return index to that location.
   */
  index(e, t) {
    return this.domNode === e || this.domNode.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(t, 1) : -1;
  }
  /**
   * Given index to location within blot, return node and offset representing
   * that location, consumable by DOM Selection Range
   */
  position(e, t) {
    let n = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
    return e > 0 && (n += 1), [this.parent.domNode, n];
  }
  /**
   * Return value represented by this blot
   * Should not change without interaction from API or
   * user change detectable by update()
   */
  value() {
    return {
      [this.statics.blotName]: this.statics.value(this.domNode) || !0
    };
  }
};
nc.scope = H.INLINE_BLOT;
let mp = nc;
const Oe = mp;
class gp {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  append(...e) {
    if (this.insertBefore(e[0], null), e.length > 1) {
      const t = e.slice(1);
      this.append(...t);
    }
  }
  at(e) {
    const t = this.iterator();
    let n = t();
    for (; n && e > 0; )
      e -= 1, n = t();
    return n;
  }
  contains(e) {
    const t = this.iterator();
    let n = t();
    for (; n; ) {
      if (n === e)
        return !0;
      n = t();
    }
    return !1;
  }
  indexOf(e) {
    const t = this.iterator();
    let n = t(), s = 0;
    for (; n; ) {
      if (n === e)
        return s;
      s += 1, n = t();
    }
    return -1;
  }
  insertBefore(e, t) {
    e != null && (this.remove(e), e.next = t, t != null ? (e.prev = t.prev, t.prev != null && (t.prev.next = e), t.prev = e, t === this.head && (this.head = e)) : this.tail != null ? (this.tail.next = e, e.prev = this.tail, this.tail = e) : (e.prev = null, this.head = this.tail = e), this.length += 1);
  }
  offset(e) {
    let t = 0, n = this.head;
    for (; n != null; ) {
      if (n === e)
        return t;
      t += n.length(), n = n.next;
    }
    return -1;
  }
  remove(e) {
    this.contains(e) && (e.prev != null && (e.prev.next = e.next), e.next != null && (e.next.prev = e.prev), e === this.head && (this.head = e.next), e === this.tail && (this.tail = e.prev), this.length -= 1);
  }
  iterator(e = this.head) {
    return () => {
      const t = e;
      return e != null && (e = e.next), t;
    };
  }
  find(e, t = !1) {
    const n = this.iterator();
    let s = n();
    for (; s; ) {
      const i = s.length();
      if (e < i || t && e === i && (s.next == null || s.next.length() !== 0))
        return [s, e];
      e -= i, s = n();
    }
    return [null, 0];
  }
  forEach(e) {
    const t = this.iterator();
    let n = t();
    for (; n; )
      e(n), n = t();
  }
  forEachAt(e, t, n) {
    if (t <= 0)
      return;
    const [s, i] = this.find(e);
    let a = e - i;
    const c = this.iterator(s);
    let d = c();
    for (; d && a < e + t; ) {
      const u = d.length();
      e > a ? n(
        d,
        e - a,
        Math.min(t, a + u - e)
      ) : n(d, 0, Math.min(u, e + t - a)), a += u, d = c();
    }
  }
  map(e) {
    return this.reduce((t, n) => (t.push(e(n)), t), []);
  }
  reduce(e, t) {
    const n = this.iterator();
    let s = n();
    for (; s; )
      t = e(t, s), s = n();
    return t;
  }
}
function uo(r, e) {
  const t = e.find(r);
  if (t)
    return t;
  try {
    return e.create(r);
  } catch {
    const n = e.create(H.INLINE);
    return Array.from(r.childNodes).forEach((s) => {
      n.domNode.appendChild(s);
    }), r.parentNode && r.parentNode.replaceChild(n.domNode, r), n.attach(), n;
  }
}
const sc = class It extends rc {
  constructor(e, t) {
    super(e, t), this.uiNode = null, this.build();
  }
  appendChild(e) {
    this.insertBefore(e);
  }
  attach() {
    super.attach(), this.children.forEach((e) => {
      e.attach();
    });
  }
  attachUI(e) {
    this.uiNode != null && this.uiNode.remove(), this.uiNode = e, It.uiClass && this.uiNode.classList.add(It.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
  }
  /**
   * Called during construction, should fill its own children LinkedList.
   */
  build() {
    this.children = new gp(), Array.from(this.domNode.childNodes).filter((e) => e !== this.uiNode).reverse().forEach((e) => {
      try {
        const t = uo(e, this.scroll);
        this.insertBefore(t, this.children.head || void 0);
      } catch (t) {
        if (t instanceof _r)
          return;
        throw t;
      }
    });
  }
  deleteAt(e, t) {
    if (e === 0 && t === this.length())
      return this.remove();
    this.children.forEachAt(e, t, (n, s, i) => {
      n.deleteAt(s, i);
    });
  }
  descendant(e, t = 0) {
    const [n, s] = this.children.find(t);
    return e.blotName == null && e(n) || e.blotName != null && n instanceof e ? [n, s] : n instanceof It ? n.descendant(e, s) : [null, -1];
  }
  descendants(e, t = 0, n = Number.MAX_VALUE) {
    let s = [], i = n;
    return this.children.forEachAt(
      t,
      n,
      (a, c, d) => {
        (e.blotName == null && e(a) || e.blotName != null && a instanceof e) && s.push(a), a instanceof It && (s = s.concat(
          a.descendants(e, c, i)
        )), i -= d;
      }
    ), s;
  }
  detach() {
    this.children.forEach((e) => {
      e.detach();
    }), super.detach();
  }
  enforceAllowedChildren() {
    let e = !1;
    this.children.forEach((t) => {
      e || this.statics.allowedChildren.some(
        (n) => t instanceof n
      ) || (t.statics.scope === H.BLOCK_BLOT ? (t.next != null && this.splitAfter(t), t.prev != null && this.splitAfter(t.prev), t.parent.unwrap(), e = !0) : t instanceof It ? t.unwrap() : t.remove());
    });
  }
  formatAt(e, t, n, s) {
    this.children.forEachAt(e, t, (i, a, c) => {
      i.formatAt(a, c, n, s);
    });
  }
  insertAt(e, t, n) {
    const [s, i] = this.children.find(e);
    if (s)
      s.insertAt(i, t, n);
    else {
      const a = n == null ? this.scroll.create("text", t) : this.scroll.create(t, n);
      this.appendChild(a);
    }
  }
  insertBefore(e, t) {
    e.parent != null && e.parent.children.remove(e);
    let n = null;
    this.children.insertBefore(e, t || null), e.parent = this, t != null && (n = t.domNode), (this.domNode.parentNode !== e.domNode || this.domNode.nextSibling !== n) && this.domNode.insertBefore(e.domNode, n), e.attach();
  }
  length() {
    return this.children.reduce((e, t) => e + t.length(), 0);
  }
  moveChildren(e, t) {
    this.children.forEach((n) => {
      e.insertBefore(n, t);
    });
  }
  optimize(e) {
    if (super.optimize(e), this.enforceAllowedChildren(), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0)
      if (this.statics.defaultChild != null) {
        const t = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(t);
      } else
        this.remove();
  }
  path(e, t = !1) {
    const [n, s] = this.children.find(e, t), i = [[this, e]];
    return n instanceof It ? i.concat(n.path(s, t)) : (n != null && i.push([n, s]), i);
  }
  removeChild(e) {
    this.children.remove(e);
  }
  replaceWith(e, t) {
    const n = typeof e == "string" ? this.scroll.create(e, t) : e;
    return n instanceof It && this.moveChildren(n), super.replaceWith(n);
  }
  split(e, t = !1) {
    if (!t) {
      if (e === 0)
        return this;
      if (e === this.length())
        return this.next;
    }
    const n = this.clone();
    return this.parent && this.parent.insertBefore(n, this.next || void 0), this.children.forEachAt(e, this.length(), (s, i, a) => {
      const c = s.split(i, t);
      c != null && n.appendChild(c);
    }), n;
  }
  splitAfter(e) {
    const t = this.clone();
    for (; e.next != null; )
      t.appendChild(e.next);
    return this.parent && this.parent.insertBefore(t, this.next || void 0), t;
  }
  unwrap() {
    this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
  }
  update(e, t) {
    const n = [], s = [];
    e.forEach((i) => {
      i.target === this.domNode && i.type === "childList" && (n.push(...i.addedNodes), s.push(...i.removedNodes));
    }), s.forEach((i) => {
      if (i.parentNode != null && // @ts-expect-error Fix me later
      i.tagName !== "IFRAME" && document.body.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY)
        return;
      const a = this.scroll.find(i);
      a != null && (a.domNode.parentNode == null || a.domNode.parentNode === this.domNode) && a.detach();
    }), n.filter((i) => i.parentNode === this.domNode && i !== this.uiNode).sort((i, a) => i === a ? 0 : i.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach((i) => {
      let a = null;
      i.nextSibling != null && (a = this.scroll.find(i.nextSibling));
      const c = uo(i, this.scroll);
      (c.next !== a || c.next == null) && (c.parent != null && c.parent.removeChild(this), this.insertBefore(c, a || void 0));
    }), this.enforceAllowedChildren();
  }
};
sc.uiClass = "";
let pp = sc;
const rt = pp;
function bp(r, e) {
  if (Object.keys(r).length !== Object.keys(e).length)
    return !1;
  for (const t in r)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
const Nr = class Er extends rt {
  static create(e) {
    return super.create(e);
  }
  static formats(e, t) {
    const n = t.query(Er.blotName);
    if (!(n != null && e.tagName === n.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return e.tagName.toLowerCase();
    }
  }
  constructor(e, t) {
    super(e, t), this.attributes = new Ss(this.domNode);
  }
  format(e, t) {
    if (e === this.statics.blotName && !t)
      this.children.forEach((n) => {
        n instanceof Er || (n = n.wrap(Er.blotName, !0)), this.attributes.copy(n);
      }), this.unwrap();
    else {
      const n = this.scroll.query(e, H.INLINE);
      if (n == null)
        return;
      n instanceof ht ? this.attributes.attribute(n, t) : t && (e !== this.statics.blotName || this.formats()[e] !== t) && this.replaceWith(e, t);
    }
  }
  formats() {
    const e = this.attributes.values(), t = this.statics.formats(this.domNode, this.scroll);
    return t != null && (e[this.statics.blotName] = t), e;
  }
  formatAt(e, t, n, s) {
    this.formats()[n] != null || this.scroll.query(n, H.ATTRIBUTE) ? this.isolate(e, t).format(n, s) : super.formatAt(e, t, n, s);
  }
  optimize(e) {
    super.optimize(e);
    const t = this.formats();
    if (Object.keys(t).length === 0)
      return this.unwrap();
    const n = this.next;
    n instanceof Er && n.prev === this && bp(t, n.formats()) && (n.moveChildren(this), n.remove());
  }
  replaceWith(e, t) {
    const n = super.replaceWith(e, t);
    return this.attributes.copy(n), n;
  }
  update(e, t) {
    super.update(e, t), e.some(
      (n) => n.target === this.domNode && n.type === "attributes"
    ) && this.attributes.build();
  }
  wrap(e, t) {
    const n = super.wrap(e, t);
    return n instanceof Er && this.attributes.move(n), n;
  }
};
Nr.allowedChildren = [Nr, Oe], Nr.blotName = "inline", Nr.scope = H.INLINE_BLOT, Nr.tagName = "SPAN";
let vp = Nr;
const da = vp, Sr = class Gi extends rt {
  static create(e) {
    return super.create(e);
  }
  static formats(e, t) {
    const n = t.query(Gi.blotName);
    if (!(n != null && e.tagName === n.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return e.tagName.toLowerCase();
    }
  }
  constructor(e, t) {
    super(e, t), this.attributes = new Ss(this.domNode);
  }
  format(e, t) {
    const n = this.scroll.query(e, H.BLOCK);
    n != null && (n instanceof ht ? this.attributes.attribute(n, t) : e === this.statics.blotName && !t ? this.replaceWith(Gi.blotName) : t && (e !== this.statics.blotName || this.formats()[e] !== t) && this.replaceWith(e, t));
  }
  formats() {
    const e = this.attributes.values(), t = this.statics.formats(this.domNode, this.scroll);
    return t != null && (e[this.statics.blotName] = t), e;
  }
  formatAt(e, t, n, s) {
    this.scroll.query(n, H.BLOCK) != null ? this.format(n, s) : super.formatAt(e, t, n, s);
  }
  insertAt(e, t, n) {
    if (n == null || this.scroll.query(t, H.INLINE) != null)
      super.insertAt(e, t, n);
    else {
      const s = this.split(e);
      if (s != null) {
        const i = this.scroll.create(t, n);
        s.parent.insertBefore(i, s);
      } else
        throw new Error("Attempt to insertAt after block boundaries");
    }
  }
  replaceWith(e, t) {
    const n = super.replaceWith(e, t);
    return this.attributes.copy(n), n;
  }
  update(e, t) {
    super.update(e, t), e.some(
      (n) => n.target === this.domNode && n.type === "attributes"
    ) && this.attributes.build();
  }
};
Sr.blotName = "block", Sr.scope = H.BLOCK_BLOT, Sr.tagName = "P", Sr.allowedChildren = [
  da,
  Sr,
  Oe
];
let xp = Sr;
const gn = xp, Vi = class extends rt {
  checkMerge() {
    return this.next !== null && this.next.statics.blotName === this.statics.blotName;
  }
  deleteAt(e, t) {
    super.deleteAt(e, t), this.enforceAllowedChildren();
  }
  formatAt(e, t, n, s) {
    super.formatAt(e, t, n, s), this.enforceAllowedChildren();
  }
  insertAt(e, t, n) {
    super.insertAt(e, t, n), this.enforceAllowedChildren();
  }
  optimize(e) {
    super.optimize(e), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
  }
};
Vi.blotName = "container", Vi.scope = H.BLOCK_BLOT;
let yp = Vi;
const Ts = yp;
class wp extends Oe {
  static formats(e, t) {
  }
  format(e, t) {
    super.formatAt(0, this.length(), e, t);
  }
  formatAt(e, t, n, s) {
    e === 0 && t === this.length() ? this.format(n, s) : super.formatAt(e, t, n, s);
  }
  formats() {
    return this.statics.formats(this.domNode, this.scroll);
  }
}
const Fe = wp, Np = {
  attributes: !0,
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
}, Ep = 100, Tr = class extends rt {
  constructor(e, t) {
    super(null, t), this.registry = e, this.scroll = this, this.build(), this.observer = new MutationObserver((n) => {
      this.update(n);
    }), this.observer.observe(this.domNode, Np), this.attach();
  }
  create(e, t) {
    return this.registry.create(this, e, t);
  }
  find(e, t = !1) {
    const n = this.registry.find(e, t);
    return n ? n.scroll === this ? n : t ? this.find(n.scroll.domNode.parentNode, !0) : null : null;
  }
  query(e, t = H.ANY) {
    return this.registry.query(e, t);
  }
  register(...e) {
    return this.registry.register(...e);
  }
  build() {
    this.scroll != null && super.build();
  }
  detach() {
    super.detach(), this.observer.disconnect();
  }
  deleteAt(e, t) {
    this.update(), e === 0 && t === this.length() ? this.children.forEach((n) => {
      n.remove();
    }) : super.deleteAt(e, t);
  }
  formatAt(e, t, n, s) {
    this.update(), super.formatAt(e, t, n, s);
  }
  insertAt(e, t, n) {
    this.update(), super.insertAt(e, t, n);
  }
  optimize(e = [], t = {}) {
    super.optimize(t);
    const n = t.mutationsMap || /* @__PURE__ */ new WeakMap();
    let s = Array.from(this.observer.takeRecords());
    for (; s.length > 0; )
      e.push(s.pop());
    const i = (d, u = !0) => {
      d == null || d === this || d.domNode.parentNode != null && (n.has(d.domNode) || n.set(d.domNode, []), u && i(d.parent));
    }, a = (d) => {
      n.has(d.domNode) && (d instanceof rt && d.children.forEach(a), n.delete(d.domNode), d.optimize(t));
    };
    let c = e;
    for (let d = 0; c.length > 0; d += 1) {
      if (d >= Ep)
        throw new Error("[Parchment] Maximum optimize iterations reached");
      for (c.forEach((u) => {
        const g = this.find(u.target, !0);
        g != null && (g.domNode === u.target && (u.type === "childList" ? (i(this.find(u.previousSibling, !1)), Array.from(u.addedNodes).forEach((b) => {
          const m = this.find(b, !1);
          i(m, !1), m instanceof rt && m.children.forEach((p) => {
            i(p, !1);
          });
        })) : u.type === "attributes" && i(g.prev)), i(g));
      }), this.children.forEach(a), c = Array.from(this.observer.takeRecords()), s = c.slice(); s.length > 0; )
        e.push(s.pop());
    }
  }
  update(e, t = {}) {
    e = e || this.observer.takeRecords();
    const n = /* @__PURE__ */ new WeakMap();
    e.map((s) => {
      const i = this.find(s.target, !0);
      return i == null ? null : n.has(i.domNode) ? (n.get(i.domNode).push(s), null) : (n.set(i.domNode, [s]), i);
    }).forEach((s) => {
      s != null && s !== this && n.has(s.domNode) && s.update(n.get(s.domNode) || [], t);
    }), t.mutationsMap = n, n.has(this.domNode) && super.update(n.get(this.domNode), t), this.optimize(e, t);
  }
};
Tr.blotName = "scroll", Tr.defaultChild = gn, Tr.allowedChildren = [gn, Ts], Tr.scope = H.BLOCK_BLOT, Tr.tagName = "DIV";
let Sp = Tr;
const ua = Sp, Ki = class ic extends Oe {
  static create(e) {
    return document.createTextNode(e);
  }
  static value(e) {
    return e.data;
  }
  constructor(e, t) {
    super(e, t), this.text = this.statics.value(this.domNode);
  }
  deleteAt(e, t) {
    this.domNode.data = this.text = this.text.slice(0, e) + this.text.slice(e + t);
  }
  index(e, t) {
    return this.domNode === e ? t : -1;
  }
  insertAt(e, t, n) {
    n == null ? (this.text = this.text.slice(0, e) + t + this.text.slice(e), this.domNode.data = this.text) : super.insertAt(e, t, n);
  }
  length() {
    return this.text.length;
  }
  optimize(e) {
    super.optimize(e), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof ic && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
  }
  position(e, t = !1) {
    return [this.domNode, e];
  }
  split(e, t = !1) {
    if (!t) {
      if (e === 0)
        return this;
      if (e === this.length())
        return this.next;
    }
    const n = this.scroll.create(this.domNode.splitText(e));
    return this.parent.insertBefore(n, this.next || void 0), this.text = this.statics.value(this.domNode), n;
  }
  update(e, t) {
    e.some((n) => n.type === "characterData" && n.target === this.domNode) && (this.text = this.statics.value(this.domNode));
  }
  value() {
    return this.text;
  }
};
Ki.blotName = "text", Ki.scope = H.INLINE_BLOT;
let Tp = Ki;
const cs = Tp, Cp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Attributor: ht,
  AttributorStore: Ss,
  BlockBlot: gn,
  ClassAttributor: it,
  ContainerBlot: Ts,
  EmbedBlot: Fe,
  InlineBlot: da,
  LeafBlot: Oe,
  ParentBlot: rt,
  Registry: qr,
  Scope: H,
  ScrollBlot: ua,
  StyleAttributor: Ft,
  TextBlot: cs
}, Symbol.toStringTag, { value: "Module" }));
var qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ac(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Wn = { exports: {} }, Si, fo;
function Ap() {
  if (fo) return Si;
  fo = 1;
  var r = -1, e = 1, t = 0;
  function n(v, M, w, A, O) {
    if (v === M)
      return v ? [[t, v]] : [];
    if (w != null) {
      var k = Y(v, M, w);
      if (k)
        return k;
    }
    var R = c(v, M), z = v.substring(0, R);
    v = v.substring(R), M = M.substring(R), R = u(v, M);
    var B = v.substring(v.length - R);
    v = v.substring(0, v.length - R), M = M.substring(0, M.length - R);
    var $ = s(v, M);
    return z && $.unshift([t, z]), B && $.push([t, B]), E($, O), A && b($), $;
  }
  function s(v, M) {
    var w;
    if (!v)
      return [[e, M]];
    if (!M)
      return [[r, v]];
    var A = v.length > M.length ? v : M, O = v.length > M.length ? M : v, k = A.indexOf(O);
    if (k !== -1)
      return w = [
        [e, A.substring(0, k)],
        [t, O],
        [e, A.substring(k + O.length)]
      ], v.length > M.length && (w[0][0] = w[2][0] = r), w;
    if (O.length === 1)
      return [
        [r, v],
        [e, M]
      ];
    var R = g(v, M);
    if (R) {
      var z = R[0], B = R[1], $ = R[2], W = R[3], K = R[4], V = n(z, $), X = n(B, W);
      return V.concat([[t, K]], X);
    }
    return i(v, M);
  }
  function i(v, M) {
    for (var w = v.length, A = M.length, O = Math.ceil((w + A) / 2), k = O, R = 2 * O, z = new Array(R), B = new Array(R), $ = 0; $ < R; $++)
      z[$] = -1, B[$] = -1;
    z[k + 1] = 0, B[k + 1] = 0;
    for (var W = w - A, K = W % 2 !== 0, V = 0, X = 0, P = 0, ne = 0, ue = 0; ue < O; ue++) {
      for (var J = -ue + V; J <= ue - X; J += 2) {
        var le = k + J, oe;
        J === -ue || J !== ue && z[le - 1] < z[le + 1] ? oe = z[le + 1] : oe = z[le - 1] + 1;
        for (var ce = oe - J; oe < w && ce < A && v.charAt(oe) === M.charAt(ce); )
          oe++, ce++;
        if (z[le] = oe, oe > w)
          X += 2;
        else if (ce > A)
          V += 2;
        else if (K) {
          var fe = k + W - J;
          if (fe >= 0 && fe < R && B[fe] !== -1) {
            var he = w - B[fe];
            if (oe >= he)
              return a(v, M, oe, ce);
          }
        }
      }
      for (var be = -ue + P; be <= ue - ne; be += 2) {
        var fe = k + be, he;
        be === -ue || be !== ue && B[fe - 1] < B[fe + 1] ? he = B[fe + 1] : he = B[fe - 1] + 1;
        for (var ke = he - be; he < w && ke < A && v.charAt(w - he - 1) === M.charAt(A - ke - 1); )
          he++, ke++;
        if (B[fe] = he, he > w)
          ne += 2;
        else if (ke > A)
          P += 2;
        else if (!K) {
          var le = k + W - be;
          if (le >= 0 && le < R && z[le] !== -1) {
            var oe = z[le], ce = k + oe - le;
            if (he = w - he, oe >= he)
              return a(v, M, oe, ce);
          }
        }
      }
    }
    return [
      [r, v],
      [e, M]
    ];
  }
  function a(v, M, w, A) {
    var O = v.substring(0, w), k = M.substring(0, A), R = v.substring(w), z = M.substring(A), B = n(O, k), $ = n(R, z);
    return B.concat($);
  }
  function c(v, M) {
    if (!v || !M || v.charAt(0) !== M.charAt(0))
      return 0;
    for (var w = 0, A = Math.min(v.length, M.length), O = A, k = 0; w < O; )
      v.substring(k, O) == M.substring(k, O) ? (w = O, k = w) : A = O, O = Math.floor((A - w) / 2 + w);
    return I(v.charCodeAt(O - 1)) && O--, O;
  }
  function d(v, M) {
    var w = v.length, A = M.length;
    if (w == 0 || A == 0)
      return 0;
    w > A ? v = v.substring(w - A) : w < A && (M = M.substring(0, w));
    var O = Math.min(w, A);
    if (v == M)
      return O;
    for (var k = 0, R = 1; ; ) {
      var z = v.substring(O - R), B = M.indexOf(z);
      if (B == -1)
        return k;
      R += B, (B == 0 || v.substring(O - R) == M.substring(0, R)) && (k = R, R++);
    }
  }
  function u(v, M) {
    if (!v || !M || v.slice(-1) !== M.slice(-1))
      return 0;
    for (var w = 0, A = Math.min(v.length, M.length), O = A, k = 0; w < O; )
      v.substring(v.length - O, v.length - k) == M.substring(M.length - O, M.length - k) ? (w = O, k = w) : A = O, O = Math.floor((A - w) / 2 + w);
    return D(v.charCodeAt(v.length - O)) && O--, O;
  }
  function g(v, M) {
    var w = v.length > M.length ? v : M, A = v.length > M.length ? M : v;
    if (w.length < 4 || A.length * 2 < w.length)
      return null;
    function O(X, P, ne) {
      for (var ue = X.substring(ne, ne + Math.floor(X.length / 4)), J = -1, le = "", oe, ce, fe, he; (J = P.indexOf(ue, J + 1)) !== -1; ) {
        var be = c(
          X.substring(ne),
          P.substring(J)
        ), ke = u(
          X.substring(0, ne),
          P.substring(0, J)
        );
        le.length < ke + be && (le = P.substring(J - ke, J) + P.substring(J, J + be), oe = X.substring(0, ne - ke), ce = X.substring(ne + be), fe = P.substring(0, J - ke), he = P.substring(J + be));
      }
      return le.length * 2 >= X.length ? [
        oe,
        ce,
        fe,
        he,
        le
      ] : null;
    }
    var k = O(
      w,
      A,
      Math.ceil(w.length / 4)
    ), R = O(
      w,
      A,
      Math.ceil(w.length / 2)
    ), z;
    if (!k && !R)
      return null;
    R ? k ? z = k[4].length > R[4].length ? k : R : z = R : z = k;
    var B, $, W, K;
    v.length > M.length ? (B = z[0], $ = z[1], W = z[2], K = z[3]) : (W = z[0], K = z[1], B = z[2], $ = z[3]);
    var V = z[4];
    return [B, $, W, K, V];
  }
  function b(v) {
    for (var M = !1, w = [], A = 0, O = null, k = 0, R = 0, z = 0, B = 0, $ = 0; k < v.length; )
      v[k][0] == t ? (w[A++] = k, R = B, z = $, B = 0, $ = 0, O = v[k][1]) : (v[k][0] == e ? B += v[k][1].length : $ += v[k][1].length, O && O.length <= Math.max(R, z) && O.length <= Math.max(B, $) && (v.splice(w[A - 1], 0, [
        r,
        O
      ]), v[w[A - 1] + 1][0] = e, A--, A--, k = A > 0 ? w[A - 1] : -1, R = 0, z = 0, B = 0, $ = 0, O = null, M = !0)), k++;
    for (M && E(v), y(v), k = 1; k < v.length; ) {
      if (v[k - 1][0] == r && v[k][0] == e) {
        var W = v[k - 1][1], K = v[k][1], V = d(W, K), X = d(K, W);
        V >= X ? (V >= W.length / 2 || V >= K.length / 2) && (v.splice(k, 0, [
          t,
          K.substring(0, V)
        ]), v[k - 1][1] = W.substring(
          0,
          W.length - V
        ), v[k + 1][1] = K.substring(V), k++) : (X >= W.length / 2 || X >= K.length / 2) && (v.splice(k, 0, [
          t,
          W.substring(0, X)
        ]), v[k - 1][0] = e, v[k - 1][1] = K.substring(
          0,
          K.length - X
        ), v[k + 1][0] = r, v[k + 1][1] = W.substring(X), k++), k++;
      }
      k++;
    }
  }
  var m = /[^a-zA-Z0-9]/, p = /\s/, N = /[\r\n]/, S = /\n\r?\n$/, C = /^\r?\n\r?\n/;
  function y(v) {
    function M(X, P) {
      if (!X || !P)
        return 6;
      var ne = X.charAt(X.length - 1), ue = P.charAt(0), J = ne.match(m), le = ue.match(m), oe = J && ne.match(p), ce = le && ue.match(p), fe = oe && ne.match(N), he = ce && ue.match(N), be = fe && X.match(S), ke = he && P.match(C);
      return be || ke ? 5 : fe || he ? 4 : J && !oe && ce ? 3 : oe || ce ? 2 : J || le ? 1 : 0;
    }
    for (var w = 1; w < v.length - 1; ) {
      if (v[w - 1][0] == t && v[w + 1][0] == t) {
        var A = v[w - 1][1], O = v[w][1], k = v[w + 1][1], R = u(A, O);
        if (R) {
          var z = O.substring(O.length - R);
          A = A.substring(0, A.length - R), O = z + O.substring(0, O.length - R), k = z + k;
        }
        for (var B = A, $ = O, W = k, K = M(A, O) + M(O, k); O.charAt(0) === k.charAt(0); ) {
          A += O.charAt(0), O = O.substring(1) + k.charAt(0), k = k.substring(1);
          var V = M(A, O) + M(O, k);
          V >= K && (K = V, B = A, $ = O, W = k);
        }
        v[w - 1][1] != B && (B ? v[w - 1][1] = B : (v.splice(w - 1, 1), w--), v[w][1] = $, W ? v[w + 1][1] = W : (v.splice(w + 1, 1), w--));
      }
      w++;
    }
  }
  function E(v, M) {
    v.push([t, ""]);
    for (var w = 0, A = 0, O = 0, k = "", R = "", z; w < v.length; ) {
      if (w < v.length - 1 && !v[w][1]) {
        v.splice(w, 1);
        continue;
      }
      switch (v[w][0]) {
        case e:
          O++, R += v[w][1], w++;
          break;
        case r:
          A++, k += v[w][1], w++;
          break;
        case t:
          var B = w - O - A - 1;
          if (M) {
            if (B >= 0 && Z(v[B][1])) {
              var $ = v[B][1].slice(-1);
              if (v[B][1] = v[B][1].slice(
                0,
                -1
              ), k = $ + k, R = $ + R, !v[B][1]) {
                v.splice(B, 1), w--;
                var W = B - 1;
                v[W] && v[W][0] === e && (O++, R = v[W][1] + R, W--), v[W] && v[W][0] === r && (A++, k = v[W][1] + k, W--), B = W;
              }
            }
            if (j(v[w][1])) {
              var $ = v[w][1].charAt(0);
              v[w][1] = v[w][1].slice(1), k += $, R += $;
            }
          }
          if (w < v.length - 1 && !v[w][1]) {
            v.splice(w, 1);
            break;
          }
          if (k.length > 0 || R.length > 0) {
            k.length > 0 && R.length > 0 && (z = c(R, k), z !== 0 && (B >= 0 ? v[B][1] += R.substring(
              0,
              z
            ) : (v.splice(0, 0, [
              t,
              R.substring(0, z)
            ]), w++), R = R.substring(z), k = k.substring(z)), z = u(R, k), z !== 0 && (v[w][1] = R.substring(R.length - z) + v[w][1], R = R.substring(
              0,
              R.length - z
            ), k = k.substring(
              0,
              k.length - z
            )));
            var K = O + A;
            k.length === 0 && R.length === 0 ? (v.splice(w - K, K), w = w - K) : k.length === 0 ? (v.splice(w - K, K, [e, R]), w = w - K + 1) : R.length === 0 ? (v.splice(w - K, K, [r, k]), w = w - K + 1) : (v.splice(
              w - K,
              K,
              [r, k],
              [e, R]
            ), w = w - K + 2);
          }
          w !== 0 && v[w - 1][0] === t ? (v[w - 1][1] += v[w][1], v.splice(w, 1)) : w++, O = 0, A = 0, k = "", R = "";
          break;
      }
    }
    v[v.length - 1][1] === "" && v.pop();
    var V = !1;
    for (w = 1; w < v.length - 1; )
      v[w - 1][0] === t && v[w + 1][0] === t && (v[w][1].substring(
        v[w][1].length - v[w - 1][1].length
      ) === v[w - 1][1] ? (v[w][1] = v[w - 1][1] + v[w][1].substring(
        0,
        v[w][1].length - v[w - 1][1].length
      ), v[w + 1][1] = v[w - 1][1] + v[w + 1][1], v.splice(w - 1, 1), V = !0) : v[w][1].substring(0, v[w + 1][1].length) == v[w + 1][1] && (v[w - 1][1] += v[w + 1][1], v[w][1] = v[w][1].substring(v[w + 1][1].length) + v[w + 1][1], v.splice(w + 1, 1), V = !0)), w++;
    V && E(v, M);
  }
  function I(v) {
    return v >= 55296 && v <= 56319;
  }
  function D(v) {
    return v >= 56320 && v <= 57343;
  }
  function j(v) {
    return D(v.charCodeAt(0));
  }
  function Z(v) {
    return I(v.charCodeAt(v.length - 1));
  }
  function ee(v) {
    for (var M = [], w = 0; w < v.length; w++)
      v[w][1].length > 0 && M.push(v[w]);
    return M;
  }
  function se(v, M, w, A) {
    return Z(v) || j(A) ? null : ee([
      [t, v],
      [r, M],
      [e, w],
      [t, A]
    ]);
  }
  function Y(v, M, w) {
    var A = typeof w == "number" ? { index: w, length: 0 } : w.oldRange, O = typeof w == "number" ? null : w.newRange, k = v.length, R = M.length;
    if (A.length === 0 && (O === null || O.length === 0)) {
      var z = A.index, B = v.slice(0, z), $ = v.slice(z), W = O ? O.index : null;
      e: {
        var K = z + R - k;
        if (W !== null && W !== K || K < 0 || K > R)
          break e;
        var V = M.slice(0, K), X = M.slice(K);
        if (X !== $)
          break e;
        var P = Math.min(z, K), ne = B.slice(0, P), ue = V.slice(0, P);
        if (ne !== ue)
          break e;
        var J = B.slice(P), le = V.slice(P);
        return se(ne, J, le, $);
      }
      e: {
        if (W !== null && W !== z)
          break e;
        var oe = z, V = M.slice(0, oe), X = M.slice(oe);
        if (V !== B)
          break e;
        var ce = Math.min(k - oe, R - oe), fe = $.slice($.length - ce), he = X.slice(X.length - ce);
        if (fe !== he)
          break e;
        var J = $.slice(0, $.length - ce), le = X.slice(0, X.length - ce);
        return se(B, J, le, fe);
      }
    }
    if (A.length > 0 && O && O.length === 0)
      e: {
        var ne = v.slice(0, A.index), fe = v.slice(A.index + A.length), P = ne.length, ce = fe.length;
        if (R < P + ce)
          break e;
        var ue = M.slice(0, P), he = M.slice(R - ce);
        if (ne !== ue || fe !== he)
          break e;
        var J = v.slice(P, k - ce), le = M.slice(P, R - ce);
        return se(ne, J, le, fe);
      }
    return null;
  }
  function re(v, M, w, A) {
    return n(v, M, w, A, !0);
  }
  return re.INSERT = e, re.DELETE = r, re.EQUAL = t, Si = re, Si;
}
var en = { exports: {} };
en.exports;
var ho;
function oc() {
  return ho || (ho = 1, (function(r, e) {
    var t = 200, n = "__lodash_hash_undefined__", s = 9007199254740991, i = "[object Arguments]", a = "[object Array]", c = "[object Boolean]", d = "[object Date]", u = "[object Error]", g = "[object Function]", b = "[object GeneratorFunction]", m = "[object Map]", p = "[object Number]", N = "[object Object]", S = "[object Promise]", C = "[object RegExp]", y = "[object Set]", E = "[object String]", I = "[object Symbol]", D = "[object WeakMap]", j = "[object ArrayBuffer]", Z = "[object DataView]", ee = "[object Float32Array]", se = "[object Float64Array]", Y = "[object Int8Array]", re = "[object Int16Array]", v = "[object Int32Array]", M = "[object Uint8Array]", w = "[object Uint8ClampedArray]", A = "[object Uint16Array]", O = "[object Uint32Array]", k = /[\\^$.*+?()[\]{}|]/g, R = /\w*$/, z = /^\[object .+?Constructor\]$/, B = /^(?:0|[1-9]\d*)$/, $ = {};
    $[i] = $[a] = $[j] = $[Z] = $[c] = $[d] = $[ee] = $[se] = $[Y] = $[re] = $[v] = $[m] = $[p] = $[N] = $[C] = $[y] = $[E] = $[I] = $[M] = $[w] = $[A] = $[O] = !0, $[u] = $[g] = $[D] = !1;
    var W = typeof qt == "object" && qt && qt.Object === Object && qt, K = typeof self == "object" && self && self.Object === Object && self, V = W || K || Function("return this")(), X = e && !e.nodeType && e, P = X && !0 && r && !r.nodeType && r, ne = P && P.exports === X;
    function ue(l, h) {
      return l.set(h[0], h[1]), l;
    }
    function J(l, h) {
      return l.add(h), l;
    }
    function le(l, h) {
      for (var x = -1, L = l ? l.length : 0; ++x < L && h(l[x], x, l) !== !1; )
        ;
      return l;
    }
    function oe(l, h) {
      for (var x = -1, L = h.length, Q = l.length; ++x < L; )
        l[Q + x] = h[x];
      return l;
    }
    function ce(l, h, x, L) {
      for (var Q = -1, G = l ? l.length : 0; ++Q < G; )
        x = h(x, l[Q], Q, l);
      return x;
    }
    function fe(l, h) {
      for (var x = -1, L = Array(l); ++x < l; )
        L[x] = h(x);
      return L;
    }
    function he(l, h) {
      return l?.[h];
    }
    function be(l) {
      var h = !1;
      if (l != null && typeof l.toString != "function")
        try {
          h = !!(l + "");
        } catch {
        }
      return h;
    }
    function ke(l) {
      var h = -1, x = Array(l.size);
      return l.forEach(function(L, Q) {
        x[++h] = [Q, L];
      }), x;
    }
    function Dr(l, h) {
      return function(x) {
        return l(h(x));
      };
    }
    function Cn(l) {
      var h = -1, x = Array(l.size);
      return l.forEach(function(L) {
        x[++h] = L;
      }), x;
    }
    var Ls = Array.prototype, Is = Function.prototype, dr = Object.prototype, Br = V["__core-js_shared__"], An = (function() {
      var l = /[^.]+$/.exec(Br && Br.keys && Br.keys.IE_PROTO || "");
      return l ? "Symbol(src)_1." + l : "";
    })(), kn = Is.toString, ot = dr.hasOwnProperty, ur = dr.toString, Os = RegExp(
      "^" + kn.call(ot).replace(k, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), Ut = ne ? V.Buffer : void 0, fr = V.Symbol, zr = V.Uint8Array, Ue = Dr(Object.getPrototypeOf, Object), _n = Object.create, Ln = dr.propertyIsEnumerable, qs = Ls.splice, $r = Object.getOwnPropertySymbols, hr = Ut ? Ut.isBuffer : void 0, In = Dr(Object.keys, Object), mr = Xe(V, "DataView"), Ht = Xe(V, "Map"), Ye = Xe(V, "Promise"), gr = Xe(V, "Set"), Pr = Xe(V, "WeakMap"), Gt = Xe(Object, "create"), jr = qe(mr), Vt = qe(Ht), Fr = qe(Ye), Ur = qe(gr), Hr = qe(Pr), _t = fr ? fr.prototype : void 0, On = _t ? _t.valueOf : void 0;
    function pt(l) {
      var h = -1, x = l ? l.length : 0;
      for (this.clear(); ++h < x; ) {
        var L = l[h];
        this.set(L[0], L[1]);
      }
    }
    function Rs() {
      this.__data__ = Gt ? Gt(null) : {};
    }
    function Ms(l) {
      return this.has(l) && delete this.__data__[l];
    }
    function Ds(l) {
      var h = this.__data__;
      if (Gt) {
        var x = h[l];
        return x === n ? void 0 : x;
      }
      return ot.call(h, l) ? h[l] : void 0;
    }
    function qn(l) {
      var h = this.__data__;
      return Gt ? h[l] !== void 0 : ot.call(h, l);
    }
    function Gr(l, h) {
      var x = this.__data__;
      return x[l] = Gt && h === void 0 ? n : h, this;
    }
    pt.prototype.clear = Rs, pt.prototype.delete = Ms, pt.prototype.get = Ds, pt.prototype.has = qn, pt.prototype.set = Gr;
    function Ne(l) {
      var h = -1, x = l ? l.length : 0;
      for (this.clear(); ++h < x; ) {
        var L = l[h];
        this.set(L[0], L[1]);
      }
    }
    function Bs() {
      this.__data__ = [];
    }
    function zs(l) {
      var h = this.__data__, x = br(h, l);
      if (x < 0)
        return !1;
      var L = h.length - 1;
      return x == L ? h.pop() : qs.call(h, x, 1), !0;
    }
    function $s(l) {
      var h = this.__data__, x = br(h, l);
      return x < 0 ? void 0 : h[x][1];
    }
    function Ps(l) {
      return br(this.__data__, l) > -1;
    }
    function js(l, h) {
      var x = this.__data__, L = br(x, l);
      return L < 0 ? x.push([l, h]) : x[L][1] = h, this;
    }
    Ne.prototype.clear = Bs, Ne.prototype.delete = zs, Ne.prototype.get = $s, Ne.prototype.has = Ps, Ne.prototype.set = js;
    function _e(l) {
      var h = -1, x = l ? l.length : 0;
      for (this.clear(); ++h < x; ) {
        var L = l[h];
        this.set(L[0], L[1]);
      }
    }
    function Fs() {
      this.__data__ = {
        hash: new pt(),
        map: new (Ht || Ne)(),
        string: new pt()
      };
    }
    function Us(l) {
      return Wt(this, l).delete(l);
    }
    function Hs(l) {
      return Wt(this, l).get(l);
    }
    function Gs(l) {
      return Wt(this, l).has(l);
    }
    function Vs(l, h) {
      return Wt(this, l).set(l, h), this;
    }
    _e.prototype.clear = Fs, _e.prototype.delete = Us, _e.prototype.get = Hs, _e.prototype.has = Gs, _e.prototype.set = Vs;
    function Be(l) {
      this.__data__ = new Ne(l);
    }
    function Ks() {
      this.__data__ = new Ne();
    }
    function Ws(l) {
      return this.__data__.delete(l);
    }
    function Zs(l) {
      return this.__data__.get(l);
    }
    function Ys(l) {
      return this.__data__.has(l);
    }
    function Xs(l, h) {
      var x = this.__data__;
      if (x instanceof Ne) {
        var L = x.__data__;
        if (!Ht || L.length < t - 1)
          return L.push([l, h]), this;
        x = this.__data__ = new _e(L);
      }
      return x.set(l, h), this;
    }
    Be.prototype.clear = Ks, Be.prototype.delete = Ws, Be.prototype.get = Zs, Be.prototype.has = Ys, Be.prototype.set = Xs;
    function pr(l, h) {
      var x = Zr(l) || xr(l) ? fe(l.length, String) : [], L = x.length, Q = !!L;
      for (var G in l)
        ot.call(l, G) && !(Q && (G == "length" || ui(G, L))) && x.push(G);
      return x;
    }
    function Rn(l, h, x) {
      var L = l[h];
      (!(ot.call(l, h) && $n(L, x)) || x === void 0 && !(h in l)) && (l[h] = x);
    }
    function br(l, h) {
      for (var x = l.length; x--; )
        if ($n(l[x][0], h))
          return x;
      return -1;
    }
    function lt(l, h) {
      return l && Wr(h, Xr(h), l);
    }
    function Vr(l, h, x, L, Q, G, ae) {
      var ie;
      if (L && (ie = G ? L(l, Q, G, ae) : L(l)), ie !== void 0)
        return ie;
      if (!dt(l))
        return l;
      var ve = Zr(l);
      if (ve) {
        if (ie = ci(l), !h)
          return ai(l, ie);
      } else {
        var de = vt(l), Le = de == g || de == b;
        if (Pn(l))
          return vr(l, h);
        if (de == N || de == i || Le && !G) {
          if (be(l))
            return G ? l : {};
          if (ie = ct(Le ? {} : l), !h)
            return oi(l, lt(ie, l));
        } else {
          if (!$[de])
            return G ? l : {};
          ie = di(l, de, Vr, h);
        }
      }
      ae || (ae = new Be());
      var ze = ae.get(l);
      if (ze)
        return ze;
      if (ae.set(l, ie), !ve)
        var xe = x ? li(l) : Xr(l);
      return le(xe || l, function(Ie, Ee) {
        xe && (Ee = Ie, Ie = l[Ee]), Rn(ie, Ee, Vr(Ie, h, x, L, Ee, l, ae));
      }), ie;
    }
    function Qs(l) {
      return dt(l) ? _n(l) : {};
    }
    function Js(l, h, x) {
      var L = h(l);
      return Zr(l) ? L : oe(L, x(l));
    }
    function ei(l) {
      return ur.call(l);
    }
    function ti(l) {
      if (!dt(l) || hi(l))
        return !1;
      var h = Yr(l) || be(l) ? Os : z;
      return h.test(qe(l));
    }
    function ri(l) {
      if (!Bn(l))
        return In(l);
      var h = [];
      for (var x in Object(l))
        ot.call(l, x) && x != "constructor" && h.push(x);
      return h;
    }
    function vr(l, h) {
      if (h)
        return l.slice();
      var x = new l.constructor(l.length);
      return l.copy(x), x;
    }
    function Kr(l) {
      var h = new l.constructor(l.byteLength);
      return new zr(h).set(new zr(l)), h;
    }
    function Kt(l, h) {
      var x = h ? Kr(l.buffer) : l.buffer;
      return new l.constructor(x, l.byteOffset, l.byteLength);
    }
    function Mn(l, h, x) {
      var L = h ? x(ke(l), !0) : ke(l);
      return ce(L, ue, new l.constructor());
    }
    function Dn(l) {
      var h = new l.constructor(l.source, R.exec(l));
      return h.lastIndex = l.lastIndex, h;
    }
    function ni(l, h, x) {
      var L = h ? x(Cn(l), !0) : Cn(l);
      return ce(L, J, new l.constructor());
    }
    function si(l) {
      return On ? Object(On.call(l)) : {};
    }
    function ii(l, h) {
      var x = h ? Kr(l.buffer) : l.buffer;
      return new l.constructor(x, l.byteOffset, l.length);
    }
    function ai(l, h) {
      var x = -1, L = l.length;
      for (h || (h = Array(L)); ++x < L; )
        h[x] = l[x];
      return h;
    }
    function Wr(l, h, x, L) {
      x || (x = {});
      for (var Q = -1, G = h.length; ++Q < G; ) {
        var ae = h[Q], ie = void 0;
        Rn(x, ae, ie === void 0 ? l[ae] : ie);
      }
      return x;
    }
    function oi(l, h) {
      return Wr(l, bt(l), h);
    }
    function li(l) {
      return Js(l, Xr, bt);
    }
    function Wt(l, h) {
      var x = l.__data__;
      return fi(h) ? x[typeof h == "string" ? "string" : "hash"] : x.map;
    }
    function Xe(l, h) {
      var x = he(l, h);
      return ti(x) ? x : void 0;
    }
    var bt = $r ? Dr($r, Object) : gi, vt = ei;
    (mr && vt(new mr(new ArrayBuffer(1))) != Z || Ht && vt(new Ht()) != m || Ye && vt(Ye.resolve()) != S || gr && vt(new gr()) != y || Pr && vt(new Pr()) != D) && (vt = function(l) {
      var h = ur.call(l), x = h == N ? l.constructor : void 0, L = x ? qe(x) : void 0;
      if (L)
        switch (L) {
          case jr:
            return Z;
          case Vt:
            return m;
          case Fr:
            return S;
          case Ur:
            return y;
          case Hr:
            return D;
        }
      return h;
    });
    function ci(l) {
      var h = l.length, x = l.constructor(h);
      return h && typeof l[0] == "string" && ot.call(l, "index") && (x.index = l.index, x.input = l.input), x;
    }
    function ct(l) {
      return typeof l.constructor == "function" && !Bn(l) ? Qs(Ue(l)) : {};
    }
    function di(l, h, x, L) {
      var Q = l.constructor;
      switch (h) {
        case j:
          return Kr(l);
        case c:
        case d:
          return new Q(+l);
        case Z:
          return Kt(l, L);
        case ee:
        case se:
        case Y:
        case re:
        case v:
        case M:
        case w:
        case A:
        case O:
          return ii(l, L);
        case m:
          return Mn(l, L, x);
        case p:
        case E:
          return new Q(l);
        case C:
          return Dn(l);
        case y:
          return ni(l, L, x);
        case I:
          return si(l);
      }
    }
    function ui(l, h) {
      return h = h ?? s, !!h && (typeof l == "number" || B.test(l)) && l > -1 && l % 1 == 0 && l < h;
    }
    function fi(l) {
      var h = typeof l;
      return h == "string" || h == "number" || h == "symbol" || h == "boolean" ? l !== "__proto__" : l === null;
    }
    function hi(l) {
      return !!An && An in l;
    }
    function Bn(l) {
      var h = l && l.constructor, x = typeof h == "function" && h.prototype || dr;
      return l === x;
    }
    function qe(l) {
      if (l != null) {
        try {
          return kn.call(l);
        } catch {
        }
        try {
          return l + "";
        } catch {
        }
      }
      return "";
    }
    function zn(l) {
      return Vr(l, !0, !0);
    }
    function $n(l, h) {
      return l === h || l !== l && h !== h;
    }
    function xr(l) {
      return mi(l) && ot.call(l, "callee") && (!Ln.call(l, "callee") || ur.call(l) == i);
    }
    var Zr = Array.isArray;
    function yr(l) {
      return l != null && jn(l.length) && !Yr(l);
    }
    function mi(l) {
      return Fn(l) && yr(l);
    }
    var Pn = hr || pi;
    function Yr(l) {
      var h = dt(l) ? ur.call(l) : "";
      return h == g || h == b;
    }
    function jn(l) {
      return typeof l == "number" && l > -1 && l % 1 == 0 && l <= s;
    }
    function dt(l) {
      var h = typeof l;
      return !!l && (h == "object" || h == "function");
    }
    function Fn(l) {
      return !!l && typeof l == "object";
    }
    function Xr(l) {
      return yr(l) ? pr(l) : ri(l);
    }
    function gi() {
      return [];
    }
    function pi() {
      return !1;
    }
    r.exports = zn;
  })(en, en.exports)), en.exports;
}
var tn = { exports: {} };
tn.exports;
var mo;
function lc() {
  return mo || (mo = 1, (function(r, e) {
    var t = 200, n = "__lodash_hash_undefined__", s = 1, i = 2, a = 9007199254740991, c = "[object Arguments]", d = "[object Array]", u = "[object AsyncFunction]", g = "[object Boolean]", b = "[object Date]", m = "[object Error]", p = "[object Function]", N = "[object GeneratorFunction]", S = "[object Map]", C = "[object Number]", y = "[object Null]", E = "[object Object]", I = "[object Promise]", D = "[object Proxy]", j = "[object RegExp]", Z = "[object Set]", ee = "[object String]", se = "[object Symbol]", Y = "[object Undefined]", re = "[object WeakMap]", v = "[object ArrayBuffer]", M = "[object DataView]", w = "[object Float32Array]", A = "[object Float64Array]", O = "[object Int8Array]", k = "[object Int16Array]", R = "[object Int32Array]", z = "[object Uint8Array]", B = "[object Uint8ClampedArray]", $ = "[object Uint16Array]", W = "[object Uint32Array]", K = /[\\^$.*+?()[\]{}|]/g, V = /^\[object .+?Constructor\]$/, X = /^(?:0|[1-9]\d*)$/, P = {};
    P[w] = P[A] = P[O] = P[k] = P[R] = P[z] = P[B] = P[$] = P[W] = !0, P[c] = P[d] = P[v] = P[g] = P[M] = P[b] = P[m] = P[p] = P[S] = P[C] = P[E] = P[j] = P[Z] = P[ee] = P[re] = !1;
    var ne = typeof qt == "object" && qt && qt.Object === Object && qt, ue = typeof self == "object" && self && self.Object === Object && self, J = ne || ue || Function("return this")(), le = e && !e.nodeType && e, oe = le && !0 && r && !r.nodeType && r, ce = oe && oe.exports === le, fe = ce && ne.process, he = (function() {
      try {
        return fe && fe.binding && fe.binding("util");
      } catch {
      }
    })(), be = he && he.isTypedArray;
    function ke(l, h) {
      for (var x = -1, L = l == null ? 0 : l.length, Q = 0, G = []; ++x < L; ) {
        var ae = l[x];
        h(ae, x, l) && (G[Q++] = ae);
      }
      return G;
    }
    function Dr(l, h) {
      for (var x = -1, L = h.length, Q = l.length; ++x < L; )
        l[Q + x] = h[x];
      return l;
    }
    function Cn(l, h) {
      for (var x = -1, L = l == null ? 0 : l.length; ++x < L; )
        if (h(l[x], x, l))
          return !0;
      return !1;
    }
    function Ls(l, h) {
      for (var x = -1, L = Array(l); ++x < l; )
        L[x] = h(x);
      return L;
    }
    function Is(l) {
      return function(h) {
        return l(h);
      };
    }
    function dr(l, h) {
      return l.has(h);
    }
    function Br(l, h) {
      return l?.[h];
    }
    function An(l) {
      var h = -1, x = Array(l.size);
      return l.forEach(function(L, Q) {
        x[++h] = [Q, L];
      }), x;
    }
    function kn(l, h) {
      return function(x) {
        return l(h(x));
      };
    }
    function ot(l) {
      var h = -1, x = Array(l.size);
      return l.forEach(function(L) {
        x[++h] = L;
      }), x;
    }
    var ur = Array.prototype, Os = Function.prototype, Ut = Object.prototype, fr = J["__core-js_shared__"], zr = Os.toString, Ue = Ut.hasOwnProperty, _n = (function() {
      var l = /[^.]+$/.exec(fr && fr.keys && fr.keys.IE_PROTO || "");
      return l ? "Symbol(src)_1." + l : "";
    })(), Ln = Ut.toString, qs = RegExp(
      "^" + zr.call(Ue).replace(K, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), $r = ce ? J.Buffer : void 0, hr = J.Symbol, In = J.Uint8Array, mr = Ut.propertyIsEnumerable, Ht = ur.splice, Ye = hr ? hr.toStringTag : void 0, gr = Object.getOwnPropertySymbols, Pr = $r ? $r.isBuffer : void 0, Gt = kn(Object.keys, Object), jr = bt(J, "DataView"), Vt = bt(J, "Map"), Fr = bt(J, "Promise"), Ur = bt(J, "Set"), Hr = bt(J, "WeakMap"), _t = bt(Object, "create"), On = qe(jr), pt = qe(Vt), Rs = qe(Fr), Ms = qe(Ur), Ds = qe(Hr), qn = hr ? hr.prototype : void 0, Gr = qn ? qn.valueOf : void 0;
    function Ne(l) {
      var h = -1, x = l == null ? 0 : l.length;
      for (this.clear(); ++h < x; ) {
        var L = l[h];
        this.set(L[0], L[1]);
      }
    }
    function Bs() {
      this.__data__ = _t ? _t(null) : {}, this.size = 0;
    }
    function zs(l) {
      var h = this.has(l) && delete this.__data__[l];
      return this.size -= h ? 1 : 0, h;
    }
    function $s(l) {
      var h = this.__data__;
      if (_t) {
        var x = h[l];
        return x === n ? void 0 : x;
      }
      return Ue.call(h, l) ? h[l] : void 0;
    }
    function Ps(l) {
      var h = this.__data__;
      return _t ? h[l] !== void 0 : Ue.call(h, l);
    }
    function js(l, h) {
      var x = this.__data__;
      return this.size += this.has(l) ? 0 : 1, x[l] = _t && h === void 0 ? n : h, this;
    }
    Ne.prototype.clear = Bs, Ne.prototype.delete = zs, Ne.prototype.get = $s, Ne.prototype.has = Ps, Ne.prototype.set = js;
    function _e(l) {
      var h = -1, x = l == null ? 0 : l.length;
      for (this.clear(); ++h < x; ) {
        var L = l[h];
        this.set(L[0], L[1]);
      }
    }
    function Fs() {
      this.__data__ = [], this.size = 0;
    }
    function Us(l) {
      var h = this.__data__, x = vr(h, l);
      if (x < 0)
        return !1;
      var L = h.length - 1;
      return x == L ? h.pop() : Ht.call(h, x, 1), --this.size, !0;
    }
    function Hs(l) {
      var h = this.__data__, x = vr(h, l);
      return x < 0 ? void 0 : h[x][1];
    }
    function Gs(l) {
      return vr(this.__data__, l) > -1;
    }
    function Vs(l, h) {
      var x = this.__data__, L = vr(x, l);
      return L < 0 ? (++this.size, x.push([l, h])) : x[L][1] = h, this;
    }
    _e.prototype.clear = Fs, _e.prototype.delete = Us, _e.prototype.get = Hs, _e.prototype.has = Gs, _e.prototype.set = Vs;
    function Be(l) {
      var h = -1, x = l == null ? 0 : l.length;
      for (this.clear(); ++h < x; ) {
        var L = l[h];
        this.set(L[0], L[1]);
      }
    }
    function Ks() {
      this.size = 0, this.__data__ = {
        hash: new Ne(),
        map: new (Vt || _e)(),
        string: new Ne()
      };
    }
    function Ws(l) {
      var h = Xe(this, l).delete(l);
      return this.size -= h ? 1 : 0, h;
    }
    function Zs(l) {
      return Xe(this, l).get(l);
    }
    function Ys(l) {
      return Xe(this, l).has(l);
    }
    function Xs(l, h) {
      var x = Xe(this, l), L = x.size;
      return x.set(l, h), this.size += x.size == L ? 0 : 1, this;
    }
    Be.prototype.clear = Ks, Be.prototype.delete = Ws, Be.prototype.get = Zs, Be.prototype.has = Ys, Be.prototype.set = Xs;
    function pr(l) {
      var h = -1, x = l == null ? 0 : l.length;
      for (this.__data__ = new Be(); ++h < x; )
        this.add(l[h]);
    }
    function Rn(l) {
      return this.__data__.set(l, n), this;
    }
    function br(l) {
      return this.__data__.has(l);
    }
    pr.prototype.add = pr.prototype.push = Rn, pr.prototype.has = br;
    function lt(l) {
      var h = this.__data__ = new _e(l);
      this.size = h.size;
    }
    function Vr() {
      this.__data__ = new _e(), this.size = 0;
    }
    function Qs(l) {
      var h = this.__data__, x = h.delete(l);
      return this.size = h.size, x;
    }
    function Js(l) {
      return this.__data__.get(l);
    }
    function ei(l) {
      return this.__data__.has(l);
    }
    function ti(l, h) {
      var x = this.__data__;
      if (x instanceof _e) {
        var L = x.__data__;
        if (!Vt || L.length < t - 1)
          return L.push([l, h]), this.size = ++x.size, this;
        x = this.__data__ = new Be(L);
      }
      return x.set(l, h), this.size = x.size, this;
    }
    lt.prototype.clear = Vr, lt.prototype.delete = Qs, lt.prototype.get = Js, lt.prototype.has = ei, lt.prototype.set = ti;
    function ri(l, h) {
      var x = xr(l), L = !x && $n(l), Q = !x && !L && yr(l), G = !x && !L && !Q && Fn(l), ae = x || L || Q || G, ie = ae ? Ls(l.length, String) : [], ve = ie.length;
      for (var de in l)
        Ue.call(l, de) && !(ae && // Safari 9 has enumerable `arguments.length` in strict mode.
        (de == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        Q && (de == "offset" || de == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        G && (de == "buffer" || de == "byteLength" || de == "byteOffset") || // Skip index properties.
        di(de, ve))) && ie.push(de);
      return ie;
    }
    function vr(l, h) {
      for (var x = l.length; x--; )
        if (zn(l[x][0], h))
          return x;
      return -1;
    }
    function Kr(l, h, x) {
      var L = h(l);
      return xr(l) ? L : Dr(L, x(l));
    }
    function Kt(l) {
      return l == null ? l === void 0 ? Y : y : Ye && Ye in Object(l) ? vt(l) : Bn(l);
    }
    function Mn(l) {
      return dt(l) && Kt(l) == c;
    }
    function Dn(l, h, x, L, Q) {
      return l === h ? !0 : l == null || h == null || !dt(l) && !dt(h) ? l !== l && h !== h : ni(l, h, x, L, Dn, Q);
    }
    function ni(l, h, x, L, Q, G) {
      var ae = xr(l), ie = xr(h), ve = ae ? d : ct(l), de = ie ? d : ct(h);
      ve = ve == c ? E : ve, de = de == c ? E : de;
      var Le = ve == E, ze = de == E, xe = ve == de;
      if (xe && yr(l)) {
        if (!yr(h))
          return !1;
        ae = !0, Le = !1;
      }
      if (xe && !Le)
        return G || (G = new lt()), ae || Fn(l) ? Wr(l, h, x, L, Q, G) : oi(l, h, ve, x, L, Q, G);
      if (!(x & s)) {
        var Ie = Le && Ue.call(l, "__wrapped__"), Ee = ze && Ue.call(h, "__wrapped__");
        if (Ie || Ee) {
          var Lt = Ie ? l.value() : l, xt = Ee ? h.value() : h;
          return G || (G = new lt()), Q(Lt, xt, x, L, G);
        }
      }
      return xe ? (G || (G = new lt()), li(l, h, x, L, Q, G)) : !1;
    }
    function si(l) {
      if (!jn(l) || fi(l))
        return !1;
      var h = Pn(l) ? qs : V;
      return h.test(qe(l));
    }
    function ii(l) {
      return dt(l) && Yr(l.length) && !!P[Kt(l)];
    }
    function ai(l) {
      if (!hi(l))
        return Gt(l);
      var h = [];
      for (var x in Object(l))
        Ue.call(l, x) && x != "constructor" && h.push(x);
      return h;
    }
    function Wr(l, h, x, L, Q, G) {
      var ae = x & s, ie = l.length, ve = h.length;
      if (ie != ve && !(ae && ve > ie))
        return !1;
      var de = G.get(l);
      if (de && G.get(h))
        return de == h;
      var Le = -1, ze = !0, xe = x & i ? new pr() : void 0;
      for (G.set(l, h), G.set(h, l); ++Le < ie; ) {
        var Ie = l[Le], Ee = h[Le];
        if (L)
          var Lt = ae ? L(Ee, Ie, Le, h, l, G) : L(Ie, Ee, Le, l, h, G);
        if (Lt !== void 0) {
          if (Lt)
            continue;
          ze = !1;
          break;
        }
        if (xe) {
          if (!Cn(h, function(xt, Zt) {
            if (!dr(xe, Zt) && (Ie === xt || Q(Ie, xt, x, L, G)))
              return xe.push(Zt);
          })) {
            ze = !1;
            break;
          }
        } else if (!(Ie === Ee || Q(Ie, Ee, x, L, G))) {
          ze = !1;
          break;
        }
      }
      return G.delete(l), G.delete(h), ze;
    }
    function oi(l, h, x, L, Q, G, ae) {
      switch (x) {
        case M:
          if (l.byteLength != h.byteLength || l.byteOffset != h.byteOffset)
            return !1;
          l = l.buffer, h = h.buffer;
        case v:
          return !(l.byteLength != h.byteLength || !G(new In(l), new In(h)));
        case g:
        case b:
        case C:
          return zn(+l, +h);
        case m:
          return l.name == h.name && l.message == h.message;
        case j:
        case ee:
          return l == h + "";
        case S:
          var ie = An;
        case Z:
          var ve = L & s;
          if (ie || (ie = ot), l.size != h.size && !ve)
            return !1;
          var de = ae.get(l);
          if (de)
            return de == h;
          L |= i, ae.set(l, h);
          var Le = Wr(ie(l), ie(h), L, Q, G, ae);
          return ae.delete(l), Le;
        case se:
          if (Gr)
            return Gr.call(l) == Gr.call(h);
      }
      return !1;
    }
    function li(l, h, x, L, Q, G) {
      var ae = x & s, ie = Wt(l), ve = ie.length, de = Wt(h), Le = de.length;
      if (ve != Le && !ae)
        return !1;
      for (var ze = ve; ze--; ) {
        var xe = ie[ze];
        if (!(ae ? xe in h : Ue.call(h, xe)))
          return !1;
      }
      var Ie = G.get(l);
      if (Ie && G.get(h))
        return Ie == h;
      var Ee = !0;
      G.set(l, h), G.set(h, l);
      for (var Lt = ae; ++ze < ve; ) {
        xe = ie[ze];
        var xt = l[xe], Zt = h[xe];
        if (L)
          var Ea = ae ? L(Zt, xt, xe, h, l, G) : L(xt, Zt, xe, l, h, G);
        if (!(Ea === void 0 ? xt === Zt || Q(xt, Zt, x, L, G) : Ea)) {
          Ee = !1;
          break;
        }
        Lt || (Lt = xe == "constructor");
      }
      if (Ee && !Lt) {
        var Un = l.constructor, Hn = h.constructor;
        Un != Hn && "constructor" in l && "constructor" in h && !(typeof Un == "function" && Un instanceof Un && typeof Hn == "function" && Hn instanceof Hn) && (Ee = !1);
      }
      return G.delete(l), G.delete(h), Ee;
    }
    function Wt(l) {
      return Kr(l, Xr, ci);
    }
    function Xe(l, h) {
      var x = l.__data__;
      return ui(h) ? x[typeof h == "string" ? "string" : "hash"] : x.map;
    }
    function bt(l, h) {
      var x = Br(l, h);
      return si(x) ? x : void 0;
    }
    function vt(l) {
      var h = Ue.call(l, Ye), x = l[Ye];
      try {
        l[Ye] = void 0;
        var L = !0;
      } catch {
      }
      var Q = Ln.call(l);
      return L && (h ? l[Ye] = x : delete l[Ye]), Q;
    }
    var ci = gr ? function(l) {
      return l == null ? [] : (l = Object(l), ke(gr(l), function(h) {
        return mr.call(l, h);
      }));
    } : gi, ct = Kt;
    (jr && ct(new jr(new ArrayBuffer(1))) != M || Vt && ct(new Vt()) != S || Fr && ct(Fr.resolve()) != I || Ur && ct(new Ur()) != Z || Hr && ct(new Hr()) != re) && (ct = function(l) {
      var h = Kt(l), x = h == E ? l.constructor : void 0, L = x ? qe(x) : "";
      if (L)
        switch (L) {
          case On:
            return M;
          case pt:
            return S;
          case Rs:
            return I;
          case Ms:
            return Z;
          case Ds:
            return re;
        }
      return h;
    });
    function di(l, h) {
      return h = h ?? a, !!h && (typeof l == "number" || X.test(l)) && l > -1 && l % 1 == 0 && l < h;
    }
    function ui(l) {
      var h = typeof l;
      return h == "string" || h == "number" || h == "symbol" || h == "boolean" ? l !== "__proto__" : l === null;
    }
    function fi(l) {
      return !!_n && _n in l;
    }
    function hi(l) {
      var h = l && l.constructor, x = typeof h == "function" && h.prototype || Ut;
      return l === x;
    }
    function Bn(l) {
      return Ln.call(l);
    }
    function qe(l) {
      if (l != null) {
        try {
          return zr.call(l);
        } catch {
        }
        try {
          return l + "";
        } catch {
        }
      }
      return "";
    }
    function zn(l, h) {
      return l === h || l !== l && h !== h;
    }
    var $n = Mn(/* @__PURE__ */ (function() {
      return arguments;
    })()) ? Mn : function(l) {
      return dt(l) && Ue.call(l, "callee") && !mr.call(l, "callee");
    }, xr = Array.isArray;
    function Zr(l) {
      return l != null && Yr(l.length) && !Pn(l);
    }
    var yr = Pr || pi;
    function mi(l, h) {
      return Dn(l, h);
    }
    function Pn(l) {
      if (!jn(l))
        return !1;
      var h = Kt(l);
      return h == p || h == N || h == u || h == D;
    }
    function Yr(l) {
      return typeof l == "number" && l > -1 && l % 1 == 0 && l <= a;
    }
    function jn(l) {
      var h = typeof l;
      return l != null && (h == "object" || h == "function");
    }
    function dt(l) {
      return l != null && typeof l == "object";
    }
    var Fn = be ? Is(be) : ii;
    function Xr(l) {
      return Zr(l) ? ri(l) : ai(l);
    }
    function gi() {
      return [];
    }
    function pi() {
      return !1;
    }
    r.exports = mi;
  })(tn, tn.exports)), tn.exports;
}
var Zn = {}, go;
function kp() {
  if (go) return Zn;
  go = 1, Object.defineProperty(Zn, "__esModule", { value: !0 });
  const r = oc(), e = lc();
  var t;
  return (function(n) {
    function s(d = {}, u = {}, g = !1) {
      typeof d != "object" && (d = {}), typeof u != "object" && (u = {});
      let b = r(u);
      g || (b = Object.keys(b).reduce((m, p) => (b[p] != null && (m[p] = b[p]), m), {}));
      for (const m in d)
        d[m] !== void 0 && u[m] === void 0 && (b[m] = d[m]);
      return Object.keys(b).length > 0 ? b : void 0;
    }
    n.compose = s;
    function i(d = {}, u = {}) {
      typeof d != "object" && (d = {}), typeof u != "object" && (u = {});
      const g = Object.keys(d).concat(Object.keys(u)).reduce((b, m) => (e(d[m], u[m]) || (b[m] = u[m] === void 0 ? null : u[m]), b), {});
      return Object.keys(g).length > 0 ? g : void 0;
    }
    n.diff = i;
    function a(d = {}, u = {}) {
      d = d || {};
      const g = Object.keys(u).reduce((b, m) => (u[m] !== d[m] && d[m] !== void 0 && (b[m] = u[m]), b), {});
      return Object.keys(d).reduce((b, m) => (d[m] !== u[m] && u[m] === void 0 && (b[m] = null), b), g);
    }
    n.invert = a;
    function c(d, u, g = !1) {
      if (typeof d != "object")
        return u;
      if (typeof u != "object")
        return;
      if (!g)
        return u;
      const b = Object.keys(u).reduce((m, p) => (d[p] === void 0 && (m[p] = u[p]), m), {});
      return Object.keys(b).length > 0 ? b : void 0;
    }
    n.transform = c;
  })(t || (t = {})), Zn.default = t, Zn;
}
var Yn = {}, po;
function cc() {
  if (po) return Yn;
  po = 1, Object.defineProperty(Yn, "__esModule", { value: !0 });
  var r;
  return (function(e) {
    function t(n) {
      return typeof n.delete == "number" ? n.delete : typeof n.retain == "number" ? n.retain : typeof n.retain == "object" && n.retain !== null ? 1 : typeof n.insert == "string" ? n.insert.length : 1;
    }
    e.length = t;
  })(r || (r = {})), Yn.default = r, Yn;
}
var Xn = {}, bo;
function _p() {
  if (bo) return Xn;
  bo = 1, Object.defineProperty(Xn, "__esModule", { value: !0 });
  const r = cc();
  class e {
    constructor(n) {
      this.ops = n, this.index = 0, this.offset = 0;
    }
    hasNext() {
      return this.peekLength() < 1 / 0;
    }
    next(n) {
      n || (n = 1 / 0);
      const s = this.ops[this.index];
      if (s) {
        const i = this.offset, a = r.default.length(s);
        if (n >= a - i ? (n = a - i, this.index += 1, this.offset = 0) : this.offset += n, typeof s.delete == "number")
          return { delete: n };
        {
          const c = {};
          return s.attributes && (c.attributes = s.attributes), typeof s.retain == "number" ? c.retain = n : typeof s.retain == "object" && s.retain !== null ? c.retain = s.retain : typeof s.insert == "string" ? c.insert = s.insert.substr(i, n) : c.insert = s.insert, c;
        }
      } else
        return { retain: 1 / 0 };
    }
    peek() {
      return this.ops[this.index];
    }
    peekLength() {
      return this.ops[this.index] ? r.default.length(this.ops[this.index]) - this.offset : 1 / 0;
    }
    peekType() {
      const n = this.ops[this.index];
      return n ? typeof n.delete == "number" ? "delete" : typeof n.retain == "number" || typeof n.retain == "object" && n.retain !== null ? "retain" : "insert" : "retain";
    }
    rest() {
      if (this.hasNext()) {
        if (this.offset === 0)
          return this.ops.slice(this.index);
        {
          const n = this.offset, s = this.index, i = this.next(), a = this.ops.slice(this.index);
          return this.offset = n, this.index = s, [i].concat(a);
        }
      } else return [];
    }
  }
  return Xn.default = e, Xn;
}
var vo;
function Lp() {
  return vo || (vo = 1, (function(r, e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AttributeMap = e.OpIterator = e.Op = void 0;
    const t = Ap(), n = oc(), s = lc(), i = kp();
    e.AttributeMap = i.default;
    const a = cc();
    e.Op = a.default;
    const c = _p();
    e.OpIterator = c.default;
    const d = "\0", u = (b, m) => {
      if (typeof b != "object" || b === null)
        throw new Error(`cannot retain a ${typeof b}`);
      if (typeof m != "object" || m === null)
        throw new Error(`cannot retain a ${typeof m}`);
      const p = Object.keys(b)[0];
      if (!p || p !== Object.keys(m)[0])
        throw new Error(`embed types not matched: ${p} != ${Object.keys(m)[0]}`);
      return [p, b[p], m[p]];
    };
    class g {
      constructor(m) {
        Array.isArray(m) ? this.ops = m : m != null && Array.isArray(m.ops) ? this.ops = m.ops : this.ops = [];
      }
      static registerEmbed(m, p) {
        this.handlers[m] = p;
      }
      static unregisterEmbed(m) {
        delete this.handlers[m];
      }
      static getHandler(m) {
        const p = this.handlers[m];
        if (!p)
          throw new Error(`no handlers for embed type "${m}"`);
        return p;
      }
      insert(m, p) {
        const N = {};
        return typeof m == "string" && m.length === 0 ? this : (N.insert = m, p != null && typeof p == "object" && Object.keys(p).length > 0 && (N.attributes = p), this.push(N));
      }
      delete(m) {
        return m <= 0 ? this : this.push({ delete: m });
      }
      retain(m, p) {
        if (typeof m == "number" && m <= 0)
          return this;
        const N = { retain: m };
        return p != null && typeof p == "object" && Object.keys(p).length > 0 && (N.attributes = p), this.push(N);
      }
      push(m) {
        let p = this.ops.length, N = this.ops[p - 1];
        if (m = n(m), typeof N == "object") {
          if (typeof m.delete == "number" && typeof N.delete == "number")
            return this.ops[p - 1] = { delete: N.delete + m.delete }, this;
          if (typeof N.delete == "number" && m.insert != null && (p -= 1, N = this.ops[p - 1], typeof N != "object"))
            return this.ops.unshift(m), this;
          if (s(m.attributes, N.attributes)) {
            if (typeof m.insert == "string" && typeof N.insert == "string")
              return this.ops[p - 1] = { insert: N.insert + m.insert }, typeof m.attributes == "object" && (this.ops[p - 1].attributes = m.attributes), this;
            if (typeof m.retain == "number" && typeof N.retain == "number")
              return this.ops[p - 1] = { retain: N.retain + m.retain }, typeof m.attributes == "object" && (this.ops[p - 1].attributes = m.attributes), this;
          }
        }
        return p === this.ops.length ? this.ops.push(m) : this.ops.splice(p, 0, m), this;
      }
      chop() {
        const m = this.ops[this.ops.length - 1];
        return m && typeof m.retain == "number" && !m.attributes && this.ops.pop(), this;
      }
      filter(m) {
        return this.ops.filter(m);
      }
      forEach(m) {
        this.ops.forEach(m);
      }
      map(m) {
        return this.ops.map(m);
      }
      partition(m) {
        const p = [], N = [];
        return this.forEach((S) => {
          (m(S) ? p : N).push(S);
        }), [p, N];
      }
      reduce(m, p) {
        return this.ops.reduce(m, p);
      }
      changeLength() {
        return this.reduce((m, p) => p.insert ? m + a.default.length(p) : p.delete ? m - p.delete : m, 0);
      }
      length() {
        return this.reduce((m, p) => m + a.default.length(p), 0);
      }
      slice(m = 0, p = 1 / 0) {
        const N = [], S = new c.default(this.ops);
        let C = 0;
        for (; C < p && S.hasNext(); ) {
          let y;
          C < m ? y = S.next(m - C) : (y = S.next(p - C), N.push(y)), C += a.default.length(y);
        }
        return new g(N);
      }
      compose(m) {
        const p = new c.default(this.ops), N = new c.default(m.ops), S = [], C = N.peek();
        if (C != null && typeof C.retain == "number" && C.attributes == null) {
          let E = C.retain;
          for (; p.peekType() === "insert" && p.peekLength() <= E; )
            E -= p.peekLength(), S.push(p.next());
          C.retain - E > 0 && N.next(C.retain - E);
        }
        const y = new g(S);
        for (; p.hasNext() || N.hasNext(); )
          if (N.peekType() === "insert")
            y.push(N.next());
          else if (p.peekType() === "delete")
            y.push(p.next());
          else {
            const E = Math.min(p.peekLength(), N.peekLength()), I = p.next(E), D = N.next(E);
            if (D.retain) {
              const j = {};
              if (typeof I.retain == "number")
                j.retain = typeof D.retain == "number" ? E : D.retain;
              else if (typeof D.retain == "number")
                I.retain == null ? j.insert = I.insert : j.retain = I.retain;
              else {
                const ee = I.retain == null ? "insert" : "retain", [se, Y, re] = u(I[ee], D.retain), v = g.getHandler(se);
                j[ee] = {
                  [se]: v.compose(Y, re, ee === "retain")
                };
              }
              const Z = i.default.compose(I.attributes, D.attributes, typeof I.retain == "number");
              if (Z && (j.attributes = Z), y.push(j), !N.hasNext() && s(y.ops[y.ops.length - 1], j)) {
                const ee = new g(p.rest());
                return y.concat(ee).chop();
              }
            } else typeof D.delete == "number" && (typeof I.retain == "number" || typeof I.retain == "object" && I.retain !== null) && y.push(D);
          }
        return y.chop();
      }
      concat(m) {
        const p = new g(this.ops.slice());
        return m.ops.length > 0 && (p.push(m.ops[0]), p.ops = p.ops.concat(m.ops.slice(1))), p;
      }
      diff(m, p) {
        if (this.ops === m.ops)
          return new g();
        const N = [this, m].map((I) => I.map((D) => {
          if (D.insert != null)
            return typeof D.insert == "string" ? D.insert : d;
          const j = I === m ? "on" : "with";
          throw new Error("diff() called " + j + " non-document");
        }).join("")), S = new g(), C = t(N[0], N[1], p, !0), y = new c.default(this.ops), E = new c.default(m.ops);
        return C.forEach((I) => {
          let D = I[1].length;
          for (; D > 0; ) {
            let j = 0;
            switch (I[0]) {
              case t.INSERT:
                j = Math.min(E.peekLength(), D), S.push(E.next(j));
                break;
              case t.DELETE:
                j = Math.min(D, y.peekLength()), y.next(j), S.delete(j);
                break;
              case t.EQUAL:
                j = Math.min(y.peekLength(), E.peekLength(), D);
                const Z = y.next(j), ee = E.next(j);
                s(Z.insert, ee.insert) ? S.retain(j, i.default.diff(Z.attributes, ee.attributes)) : S.push(ee).delete(j);
                break;
            }
            D -= j;
          }
        }), S.chop();
      }
      eachLine(m, p = `
`) {
        const N = new c.default(this.ops);
        let S = new g(), C = 0;
        for (; N.hasNext(); ) {
          if (N.peekType() !== "insert")
            return;
          const y = N.peek(), E = a.default.length(y) - N.peekLength(), I = typeof y.insert == "string" ? y.insert.indexOf(p, E) - E : -1;
          if (I < 0)
            S.push(N.next());
          else if (I > 0)
            S.push(N.next(I));
          else {
            if (m(S, N.next(1).attributes || {}, C) === !1)
              return;
            C += 1, S = new g();
          }
        }
        S.length() > 0 && m(S, {}, C);
      }
      invert(m) {
        const p = new g();
        return this.reduce((N, S) => {
          if (S.insert)
            p.delete(a.default.length(S));
          else {
            if (typeof S.retain == "number" && S.attributes == null)
              return p.retain(S.retain), N + S.retain;
            if (S.delete || typeof S.retain == "number") {
              const C = S.delete || S.retain;
              return m.slice(N, N + C).forEach((E) => {
                S.delete ? p.push(E) : S.retain && S.attributes && p.retain(a.default.length(E), i.default.invert(S.attributes, E.attributes));
              }), N + C;
            } else if (typeof S.retain == "object" && S.retain !== null) {
              const C = m.slice(N, N + 1), y = new c.default(C.ops).next(), [E, I, D] = u(S.retain, y.insert), j = g.getHandler(E);
              return p.retain({ [E]: j.invert(I, D) }, i.default.invert(S.attributes, y.attributes)), N + 1;
            }
          }
          return N;
        }, 0), p.chop();
      }
      transform(m, p = !1) {
        if (p = !!p, typeof m == "number")
          return this.transformPosition(m, p);
        const N = m, S = new c.default(this.ops), C = new c.default(N.ops), y = new g();
        for (; S.hasNext() || C.hasNext(); )
          if (S.peekType() === "insert" && (p || C.peekType() !== "insert"))
            y.retain(a.default.length(S.next()));
          else if (C.peekType() === "insert")
            y.push(C.next());
          else {
            const E = Math.min(S.peekLength(), C.peekLength()), I = S.next(E), D = C.next(E);
            if (I.delete)
              continue;
            if (D.delete)
              y.push(D);
            else {
              const j = I.retain, Z = D.retain;
              let ee = typeof Z == "object" && Z !== null ? Z : E;
              if (typeof j == "object" && j !== null && typeof Z == "object" && Z !== null) {
                const se = Object.keys(j)[0];
                if (se === Object.keys(Z)[0]) {
                  const Y = g.getHandler(se);
                  Y && (ee = {
                    [se]: Y.transform(j[se], Z[se], p)
                  });
                }
              }
              y.retain(ee, i.default.transform(I.attributes, D.attributes, p));
            }
          }
        return y.chop();
      }
      transformPosition(m, p = !1) {
        p = !!p;
        const N = new c.default(this.ops);
        let S = 0;
        for (; N.hasNext() && S <= m; ) {
          const C = N.peekLength(), y = N.peekType();
          if (N.next(), y === "delete") {
            m -= Math.min(C, m - S);
            continue;
          } else y === "insert" && (S < m || !p) && (m += C);
          S += C;
        }
        return m;
      }
    }
    g.Op = a.default, g.OpIterator = c.default, g.AttributeMap = i.default, g.handlers = {}, e.default = g, r.exports = g, r.exports.default = g;
  })(Wn, Wn.exports)), Wn.exports;
}
var Ke = Lp();
const U = /* @__PURE__ */ ac(Ke);
class at extends Fe {
  static value() {
  }
  optimize() {
    (this.prev || this.next) && this.remove();
  }
  length() {
    return 0;
  }
  value() {
    return "";
  }
}
at.blotName = "break";
at.tagName = "BR";
let nt = class extends cs {
};
const Ip = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function Cs(r) {
  return r.replace(/[&<>"']/g, (e) => Ip[e]);
}
class Re extends da {
  static allowedChildren = [Re, at, Fe, nt];
  // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
  static order = [
    "cursor",
    "inline",
    // Must be lower
    "link",
    // Chrome wants <a> to be lower
    "underline",
    "strike",
    "italic",
    "bold",
    "script",
    "code"
    // Must be higher
  ];
  static compare(e, t) {
    const n = Re.order.indexOf(e), s = Re.order.indexOf(t);
    return n >= 0 || s >= 0 ? n - s : e === t ? 0 : e < t ? -1 : 1;
  }
  formatAt(e, t, n, s) {
    if (Re.compare(this.statics.blotName, n) < 0 && this.scroll.query(n, H.BLOT)) {
      const i = this.isolate(e, t);
      s && i.wrap(n, s);
    } else
      super.formatAt(e, t, n, s);
  }
  optimize(e) {
    if (super.optimize(e), this.parent instanceof Re && Re.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
      const t = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(t), t.wrap(this);
    }
  }
}
const xo = 1;
class Se extends gn {
  cache = {};
  delta() {
    return this.cache.delta == null && (this.cache.delta = dc(this)), this.cache.delta;
  }
  deleteAt(e, t) {
    super.deleteAt(e, t), this.cache = {};
  }
  formatAt(e, t, n, s) {
    t <= 0 || (this.scroll.query(n, H.BLOCK) ? e + t === this.length() && this.format(n, s) : super.formatAt(e, Math.min(t, this.length() - e - 1), n, s), this.cache = {});
  }
  insertAt(e, t, n) {
    if (n != null) {
      super.insertAt(e, t, n), this.cache = {};
      return;
    }
    if (t.length === 0) return;
    const s = t.split(`
`), i = s.shift();
    i.length > 0 && (e < this.length() - 1 || this.children.tail == null ? super.insertAt(Math.min(e, this.length() - 1), i) : this.children.tail.insertAt(this.children.tail.length(), i), this.cache = {});
    let a = this;
    s.reduce((c, d) => (a = a.split(c, !0), a.insertAt(0, d), d.length), e + i.length);
  }
  insertBefore(e, t) {
    const {
      head: n
    } = this.children;
    super.insertBefore(e, t), n instanceof at && n.remove(), this.cache = {};
  }
  length() {
    return this.cache.length == null && (this.cache.length = super.length() + xo), this.cache.length;
  }
  moveChildren(e, t) {
    super.moveChildren(e, t), this.cache = {};
  }
  optimize(e) {
    super.optimize(e), this.cache = {};
  }
  path(e) {
    return super.path(e, !0);
  }
  removeChild(e) {
    super.removeChild(e), this.cache = {};
  }
  split(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (t && (e === 0 || e >= this.length() - xo)) {
      const s = this.clone();
      return e === 0 ? (this.parent.insertBefore(s, this), this) : (this.parent.insertBefore(s, this.next), s);
    }
    const n = super.split(e, t);
    return this.cache = {}, n;
  }
}
Se.blotName = "block";
Se.tagName = "P";
Se.defaultChild = at;
Se.allowedChildren = [at, Re, Fe, nt];
class Ve extends Fe {
  attach() {
    super.attach(), this.attributes = new Ss(this.domNode);
  }
  delta() {
    return new U().insert(this.value(), {
      ...this.formats(),
      ...this.attributes.values()
    });
  }
  format(e, t) {
    const n = this.scroll.query(e, H.BLOCK_ATTRIBUTE);
    n != null && this.attributes.attribute(n, t);
  }
  formatAt(e, t, n, s) {
    this.format(n, s);
  }
  insertAt(e, t, n) {
    if (n != null) {
      super.insertAt(e, t, n);
      return;
    }
    const s = t.split(`
`), i = s.pop(), a = s.map((d) => {
      const u = this.scroll.create(Se.blotName);
      return u.insertAt(0, d), u;
    }), c = this.split(e);
    a.forEach((d) => {
      this.parent.insertBefore(d, c);
    }), i && this.parent.insertBefore(this.scroll.create("text", i), c);
  }
}
Ve.scope = H.BLOCK_BLOT;
function dc(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return r.descendants(Oe).reduce((t, n) => n.length() === 0 ? t : t.insert(n.value(), He(n, {}, e)), new U()).insert(`
`, He(r));
}
function He(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return r == null || ("formats" in r && typeof r.formats == "function" && (e = {
    ...e,
    ...r.formats()
  }, t && delete e["code-token"]), r.parent == null || r.parent.statics.blotName === "scroll" || r.parent.statics.scope !== r.statics.scope) ? e : He(r.parent, e, t);
}
class et extends Fe {
  static blotName = "cursor";
  static className = "ql-cursor";
  static tagName = "span";
  static CONTENTS = "\uFEFF";
  // Zero width no break space
  static value() {
  }
  constructor(e, t, n) {
    super(e, t), this.selection = n, this.textNode = document.createTextNode(et.CONTENTS), this.domNode.appendChild(this.textNode), this.savedLength = 0;
  }
  detach() {
    this.parent != null && this.parent.removeChild(this);
  }
  format(e, t) {
    if (this.savedLength !== 0) {
      super.format(e, t);
      return;
    }
    let n = this, s = 0;
    for (; n != null && n.statics.scope !== H.BLOCK_BLOT; )
      s += n.offset(n.parent), n = n.parent;
    n != null && (this.savedLength = et.CONTENTS.length, n.optimize(), n.formatAt(s, et.CONTENTS.length, e, t), this.savedLength = 0);
  }
  index(e, t) {
    return e === this.textNode ? 0 : super.index(e, t);
  }
  length() {
    return this.savedLength;
  }
  position() {
    return [this.textNode, this.textNode.data.length];
  }
  remove() {
    super.remove(), this.parent = null;
  }
  restore() {
    if (this.selection.composing || this.parent == null) return null;
    const e = this.selection.getNativeRange();
    for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
    const t = this.prev instanceof nt ? this.prev : null, n = t ? t.length() : 0, s = this.next instanceof nt ? this.next : null, i = s ? s.text : "", {
      textNode: a
    } = this, c = a.data.split(et.CONTENTS).join("");
    a.data = et.CONTENTS;
    let d;
    if (t)
      d = t, (c || s) && (t.insertAt(t.length(), c + i), s && s.remove());
    else if (s)
      d = s, s.insertAt(0, c);
    else {
      const u = document.createTextNode(c);
      d = this.scroll.create(u), this.parent.insertBefore(d, this);
    }
    if (this.remove(), e) {
      const u = (m, p) => t && m === t.domNode ? p : m === a ? n + p - 1 : s && m === s.domNode ? n + c.length + p : null, g = u(e.start.node, e.start.offset), b = u(e.end.node, e.end.offset);
      if (g !== null && b !== null)
        return {
          startNode: d.domNode,
          startOffset: g,
          endNode: d.domNode,
          endOffset: b
        };
    }
    return null;
  }
  update(e, t) {
    if (e.some((n) => n.type === "characterData" && n.target === this.textNode)) {
      const n = this.restore();
      n && (t.range = n);
    }
  }
  // Avoid .ql-cursor being a descendant of `<a/>`.
  // The reason is Safari pushes down `<a/>` on text insertion.
  // That will cause DOM nodes not sync with the model.
  //
  // For example ({I} is the caret), given the markup:
  //    <a><span class="ql-cursor">\uFEFF{I}</span></a>
  // When typing a char "x", `<a/>` will be pushed down inside the `<span>` first:
  //    <span class="ql-cursor"><a>\uFEFF{I}</a></span>
  // And then "x" will be inserted after `<a/>`:
  //    <span class="ql-cursor"><a>\uFEFF</a>d{I}</span>
  optimize(e) {
    super.optimize(e);
    let {
      parent: t
    } = this;
    for (; t; ) {
      if (t.domNode.tagName === "A") {
        this.savedLength = et.CONTENTS.length, t.isolate(this.offset(t), this.length()).unwrap(), this.savedLength = 0;
        break;
      }
      t = t.parent;
    }
  }
  value() {
    return "";
  }
}
var Ti = { exports: {} }, yo;
function Op() {
  return yo || (yo = 1, (function(r) {
    var e = Object.prototype.hasOwnProperty, t = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (t = !1));
    function s(d, u, g) {
      this.fn = d, this.context = u, this.once = g || !1;
    }
    function i(d, u, g, b, m) {
      if (typeof g != "function")
        throw new TypeError("The listener must be a function");
      var p = new s(g, b || d, m), N = t ? t + u : u;
      return d._events[N] ? d._events[N].fn ? d._events[N] = [d._events[N], p] : d._events[N].push(p) : (d._events[N] = p, d._eventsCount++), d;
    }
    function a(d, u) {
      --d._eventsCount === 0 ? d._events = new n() : delete d._events[u];
    }
    function c() {
      this._events = new n(), this._eventsCount = 0;
    }
    c.prototype.eventNames = function() {
      var u = [], g, b;
      if (this._eventsCount === 0) return u;
      for (b in g = this._events)
        e.call(g, b) && u.push(t ? b.slice(1) : b);
      return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(g)) : u;
    }, c.prototype.listeners = function(u) {
      var g = t ? t + u : u, b = this._events[g];
      if (!b) return [];
      if (b.fn) return [b.fn];
      for (var m = 0, p = b.length, N = new Array(p); m < p; m++)
        N[m] = b[m].fn;
      return N;
    }, c.prototype.listenerCount = function(u) {
      var g = t ? t + u : u, b = this._events[g];
      return b ? b.fn ? 1 : b.length : 0;
    }, c.prototype.emit = function(u, g, b, m, p, N) {
      var S = t ? t + u : u;
      if (!this._events[S]) return !1;
      var C = this._events[S], y = arguments.length, E, I;
      if (C.fn) {
        switch (C.once && this.removeListener(u, C.fn, void 0, !0), y) {
          case 1:
            return C.fn.call(C.context), !0;
          case 2:
            return C.fn.call(C.context, g), !0;
          case 3:
            return C.fn.call(C.context, g, b), !0;
          case 4:
            return C.fn.call(C.context, g, b, m), !0;
          case 5:
            return C.fn.call(C.context, g, b, m, p), !0;
          case 6:
            return C.fn.call(C.context, g, b, m, p, N), !0;
        }
        for (I = 1, E = new Array(y - 1); I < y; I++)
          E[I - 1] = arguments[I];
        C.fn.apply(C.context, E);
      } else {
        var D = C.length, j;
        for (I = 0; I < D; I++)
          switch (C[I].once && this.removeListener(u, C[I].fn, void 0, !0), y) {
            case 1:
              C[I].fn.call(C[I].context);
              break;
            case 2:
              C[I].fn.call(C[I].context, g);
              break;
            case 3:
              C[I].fn.call(C[I].context, g, b);
              break;
            case 4:
              C[I].fn.call(C[I].context, g, b, m);
              break;
            default:
              if (!E) for (j = 1, E = new Array(y - 1); j < y; j++)
                E[j - 1] = arguments[j];
              C[I].fn.apply(C[I].context, E);
          }
      }
      return !0;
    }, c.prototype.on = function(u, g, b) {
      return i(this, u, g, b, !1);
    }, c.prototype.once = function(u, g, b) {
      return i(this, u, g, b, !0);
    }, c.prototype.removeListener = function(u, g, b, m) {
      var p = t ? t + u : u;
      if (!this._events[p]) return this;
      if (!g)
        return a(this, p), this;
      var N = this._events[p];
      if (N.fn)
        N.fn === g && (!m || N.once) && (!b || N.context === b) && a(this, p);
      else {
        for (var S = 0, C = [], y = N.length; S < y; S++)
          (N[S].fn !== g || m && !N[S].once || b && N[S].context !== b) && C.push(N[S]);
        C.length ? this._events[p] = C.length === 1 ? C[0] : C : a(this, p);
      }
      return this;
    }, c.prototype.removeAllListeners = function(u) {
      var g;
      return u ? (g = t ? t + u : u, this._events[g] && a(this, g)) : (this._events = new n(), this._eventsCount = 0), this;
    }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = t, c.EventEmitter = c, r.exports = c;
  })(Ti)), Ti.exports;
}
var qp = Op();
const Rp = /* @__PURE__ */ ac(qp), Wi = /* @__PURE__ */ new WeakMap(), Zi = ["error", "warn", "log", "info"];
let Yi = "warn";
function uc(r) {
  if (Yi && Zi.indexOf(r) <= Zi.indexOf(Yi)) {
    for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
      t[n - 1] = arguments[n];
    console[r](...t);
  }
}
function kt(r) {
  return Zi.reduce((e, t) => (e[t] = uc.bind(console, t, r), e), {});
}
kt.level = (r) => {
  Yi = r;
};
uc.level = kt.level;
const Ci = kt("quill:events"), Mp = ["selectionchange", "mousedown", "mouseup", "click"];
Mp.forEach((r) => {
  document.addEventListener(r, function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    Array.from(document.querySelectorAll(".ql-container")).forEach((s) => {
      const i = Wi.get(s);
      i && i.emitter && i.emitter.handleDOM(...t);
    });
  });
});
class F extends Rp {
  static events = {
    EDITOR_CHANGE: "editor-change",
    SCROLL_BEFORE_UPDATE: "scroll-before-update",
    SCROLL_BLOT_MOUNT: "scroll-blot-mount",
    SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
    SCROLL_OPTIMIZE: "scroll-optimize",
    SCROLL_UPDATE: "scroll-update",
    SCROLL_EMBED_UPDATE: "scroll-embed-update",
    SELECTION_CHANGE: "selection-change",
    TEXT_CHANGE: "text-change",
    COMPOSITION_BEFORE_START: "composition-before-start",
    COMPOSITION_START: "composition-start",
    COMPOSITION_BEFORE_END: "composition-before-end",
    COMPOSITION_END: "composition-end"
  };
  static sources = {
    API: "api",
    SILENT: "silent",
    USER: "user"
  };
  constructor() {
    super(), this.domListeners = {}, this.on("error", Ci.error);
  }
  emit() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return Ci.log.call(Ci, ...t), super.emit(...t);
  }
  handleDOM(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
      n[s - 1] = arguments[s];
    (this.domListeners[e.type] || []).forEach((i) => {
      let {
        node: a,
        handler: c
      } = i;
      (e.target === a || a.contains(e.target)) && c(e, ...n);
    });
  }
  listenDOM(e, t, n) {
    this.domListeners[e] || (this.domListeners[e] = []), this.domListeners[e].push({
      node: t,
      handler: n
    });
  }
}
const Ai = kt("quill:selection");
class er {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    this.index = e, this.length = t;
  }
}
class Dp {
  constructor(e, t) {
    this.emitter = t, this.scroll = e, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new er(0, 0), this.lastRange = this.savedRange, this.lastNative = null, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, () => {
      !this.mouseDown && !this.composing && setTimeout(this.update.bind(this, F.sources.USER), 1);
    }), this.emitter.on(F.events.SCROLL_BEFORE_UPDATE, () => {
      if (!this.hasFocus()) return;
      const n = this.getNativeRange();
      n != null && n.start.node !== this.cursor.textNode && this.emitter.once(F.events.SCROLL_UPDATE, (s, i) => {
        try {
          this.root.contains(n.start.node) && this.root.contains(n.end.node) && this.setNativeRange(n.start.node, n.start.offset, n.end.node, n.end.offset);
          const a = i.some((c) => c.type === "characterData" || c.type === "childList" || c.type === "attributes" && c.target === this.root);
          this.update(a ? F.sources.SILENT : s);
        } catch {
        }
      });
    }), this.emitter.on(F.events.SCROLL_OPTIMIZE, (n, s) => {
      if (s.range) {
        const {
          startNode: i,
          startOffset: a,
          endNode: c,
          endOffset: d
        } = s.range;
        this.setNativeRange(i, a, c, d), this.update(F.sources.SILENT);
      }
    }), this.update(F.sources.SILENT);
  }
  handleComposition() {
    this.emitter.on(F.events.COMPOSITION_BEFORE_START, () => {
      this.composing = !0;
    }), this.emitter.on(F.events.COMPOSITION_END, () => {
      if (this.composing = !1, this.cursor.parent) {
        const e = this.cursor.restore();
        if (!e) return;
        setTimeout(() => {
          this.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset);
        }, 1);
      }
    });
  }
  handleDragging() {
    this.emitter.listenDOM("mousedown", document.body, () => {
      this.mouseDown = !0;
    }), this.emitter.listenDOM("mouseup", document.body, () => {
      this.mouseDown = !1, this.update(F.sources.USER);
    });
  }
  focus() {
    this.hasFocus() || (this.root.focus({
      preventScroll: !0
    }), this.setRange(this.savedRange));
  }
  format(e, t) {
    this.scroll.update();
    const n = this.getNativeRange();
    if (!(n == null || !n.native.collapsed || this.scroll.query(e, H.BLOCK))) {
      if (n.start.node !== this.cursor.textNode) {
        const s = this.scroll.find(n.start.node, !1);
        if (s == null) return;
        if (s instanceof Oe) {
          const i = s.split(n.start.offset);
          s.parent.insertBefore(this.cursor, i);
        } else
          s.insertBefore(this.cursor, n.start.node);
        this.cursor.attach();
      }
      this.cursor.format(e, t), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
    }
  }
  getBounds(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const n = this.scroll.length();
    e = Math.min(e, n - 1), t = Math.min(e + t, n - 1) - e;
    let s, [i, a] = this.scroll.leaf(e);
    if (i == null) return null;
    if (t > 0 && a === i.length()) {
      const [g] = this.scroll.leaf(e + 1);
      if (g) {
        const [b] = this.scroll.line(e), [m] = this.scroll.line(e + 1);
        b === m && (i = g, a = 0);
      }
    }
    [s, a] = i.position(a, !0);
    const c = document.createRange();
    if (t > 0)
      return c.setStart(s, a), [i, a] = this.scroll.leaf(e + t), i == null ? null : ([s, a] = i.position(a, !0), c.setEnd(s, a), c.getBoundingClientRect());
    let d = "left", u;
    if (s instanceof Text) {
      if (!s.data.length)
        return null;
      a < s.data.length ? (c.setStart(s, a), c.setEnd(s, a + 1)) : (c.setStart(s, a - 1), c.setEnd(s, a), d = "right"), u = c.getBoundingClientRect();
    } else {
      if (!(i.domNode instanceof Element)) return null;
      u = i.domNode.getBoundingClientRect(), a > 0 && (d = "right");
    }
    return {
      bottom: u.top + u.height,
      height: u.height,
      left: u[d],
      right: u[d],
      top: u.top,
      width: 0
    };
  }
  getNativeRange() {
    const e = document.getSelection();
    if (e == null || e.rangeCount <= 0) return null;
    const t = e.getRangeAt(0);
    if (t == null) return null;
    const n = this.normalizeNative(t);
    return Ai.info("getNativeRange", n), n;
  }
  getRange() {
    const e = this.scroll.domNode;
    if ("isConnected" in e && !e.isConnected)
      return [null, null];
    const t = this.getNativeRange();
    return t == null ? [null, null] : [this.normalizedToRange(t), t];
  }
  hasFocus() {
    return document.activeElement === this.root || document.activeElement != null && ki(this.root, document.activeElement);
  }
  normalizedToRange(e) {
    const t = [[e.start.node, e.start.offset]];
    e.native.collapsed || t.push([e.end.node, e.end.offset]);
    const n = t.map((a) => {
      const [c, d] = a, u = this.scroll.find(c, !0), g = u.offset(this.scroll);
      return d === 0 ? g : u instanceof Oe ? g + u.index(c, d) : g + u.length();
    }), s = Math.min(Math.max(...n), this.scroll.length() - 1), i = Math.min(s, ...n);
    return new er(i, s - i);
  }
  normalizeNative(e) {
    if (!ki(this.root, e.startContainer) || !e.collapsed && !ki(this.root, e.endContainer))
      return null;
    const t = {
      start: {
        node: e.startContainer,
        offset: e.startOffset
      },
      end: {
        node: e.endContainer,
        offset: e.endOffset
      },
      native: e
    };
    return [t.start, t.end].forEach((n) => {
      let {
        node: s,
        offset: i
      } = n;
      for (; !(s instanceof Text) && s.childNodes.length > 0; )
        if (s.childNodes.length > i)
          s = s.childNodes[i], i = 0;
        else if (s.childNodes.length === i)
          s = s.lastChild, s instanceof Text ? i = s.data.length : s.childNodes.length > 0 ? i = s.childNodes.length : i = s.childNodes.length + 1;
        else
          break;
      n.node = s, n.offset = i;
    }), t;
  }
  rangeToNative(e) {
    const t = this.scroll.length(), n = (s, i) => {
      s = Math.min(t - 1, s);
      const [a, c] = this.scroll.leaf(s);
      return a ? a.position(c, i) : [null, -1];
    };
    return [...n(e.index, !1), ...n(e.index + e.length, !0)];
  }
  setNativeRange(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : t, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
    if (Ai.info("setNativeRange", e, t, n, s), e != null && (this.root.parentNode == null || e.parentNode == null || // @ts-expect-error Fix me later
    n.parentNode == null))
      return;
    const a = document.getSelection();
    if (a != null)
      if (e != null) {
        this.hasFocus() || this.root.focus({
          preventScroll: !0
        });
        const {
          native: c
        } = this.getNativeRange() || {};
        if (c == null || i || e !== c.startContainer || t !== c.startOffset || n !== c.endContainer || s !== c.endOffset) {
          e instanceof Element && e.tagName === "BR" && (t = Array.from(e.parentNode.childNodes).indexOf(e), e = e.parentNode), n instanceof Element && n.tagName === "BR" && (s = Array.from(n.parentNode.childNodes).indexOf(n), n = n.parentNode);
          const d = document.createRange();
          d.setStart(e, t), d.setEnd(n, s), a.removeAllRanges(), a.addRange(d);
        }
      } else
        a.removeAllRanges(), this.root.blur();
  }
  setRange(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : F.sources.API;
    if (typeof t == "string" && (n = t, t = !1), Ai.info("setRange", e), e != null) {
      const s = this.rangeToNative(e);
      this.setNativeRange(...s, t);
    } else
      this.setNativeRange(null);
    this.update(n);
  }
  update() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : F.sources.USER;
    const t = this.lastRange, [n, s] = this.getRange();
    if (this.lastRange = n, this.lastNative = s, this.lastRange != null && (this.savedRange = this.lastRange), !Ot(t, this.lastRange)) {
      if (!this.composing && s != null && s.native.collapsed && s.start.node !== this.cursor.textNode) {
        const a = this.cursor.restore();
        a && this.setNativeRange(a.startNode, a.startOffset, a.endNode, a.endOffset);
      }
      const i = [F.events.SELECTION_CHANGE, kr(this.lastRange), kr(t), e];
      this.emitter.emit(F.events.EDITOR_CHANGE, ...i), e !== F.sources.SILENT && this.emitter.emit(...i);
    }
  }
}
function ki(r, e) {
  try {
    e.parentNode;
  } catch {
    return !1;
  }
  return r.contains(e);
}
const Bp = /^[ -~]*$/;
let zp = class {
  constructor(e) {
    this.scroll = e, this.delta = this.getDelta();
  }
  applyDelta(e) {
    this.scroll.update();
    let t = this.scroll.length();
    this.scroll.batchStart();
    const n = wo(e), s = new U();
    return Pp(n.ops.slice()).reduce((a, c) => {
      const d = Ke.Op.length(c);
      let u = c.attributes || {}, g = !1, b = !1;
      if (c.insert != null) {
        if (s.retain(d), typeof c.insert == "string") {
          const N = c.insert;
          b = !N.endsWith(`
`) && (t <= a || !!this.scroll.descendant(Ve, a)[0]), this.scroll.insertAt(a, N);
          const [S, C] = this.scroll.line(a);
          let y = Mt({}, He(S));
          if (S instanceof Se) {
            const [E] = S.descendant(Oe, C);
            E && (y = Mt(y, He(E)));
          }
          u = Ke.AttributeMap.diff(y, u) || {};
        } else if (typeof c.insert == "object") {
          const N = Object.keys(c.insert)[0];
          if (N == null) return a;
          const S = this.scroll.query(N, H.INLINE) != null;
          if (S)
            (t <= a || this.scroll.descendant(Ve, a)[0]) && (b = !0);
          else if (a > 0) {
            const [C, y] = this.scroll.descendant(Oe, a - 1);
            C instanceof nt ? C.value()[y] !== `
` && (g = !0) : C instanceof Fe && C.statics.scope === H.INLINE_BLOT && (g = !0);
          }
          if (this.scroll.insertAt(a, N, c.insert[N]), S) {
            const [C] = this.scroll.descendant(Oe, a);
            if (C) {
              const y = Mt({}, He(C));
              u = Ke.AttributeMap.diff(y, u) || {};
            }
          }
        }
        t += d;
      } else if (s.push(c), c.retain !== null && typeof c.retain == "object") {
        const N = Object.keys(c.retain)[0];
        if (N == null) return a;
        this.scroll.updateEmbedAt(a, N, c.retain[N]);
      }
      Object.keys(u).forEach((N) => {
        this.scroll.formatAt(a, d, N, u[N]);
      });
      const m = g ? 1 : 0, p = b ? 1 : 0;
      return t += m + p, s.retain(m), s.delete(p), a + d + m + p;
    }, 0), s.reduce((a, c) => typeof c.delete == "number" ? (this.scroll.deleteAt(a, c.delete), a) : a + Ke.Op.length(c), 0), this.scroll.batchEnd(), this.scroll.optimize(), this.update(n);
  }
  deleteText(e, t) {
    return this.scroll.deleteAt(e, t), this.update(new U().retain(e).delete(t));
  }
  formatLine(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.scroll.update(), Object.keys(n).forEach((i) => {
      this.scroll.lines(e, Math.max(t, 1)).forEach((a) => {
        a.format(i, n[i]);
      });
    }), this.scroll.optimize();
    const s = new U().retain(e).retain(t, kr(n));
    return this.update(s);
  }
  formatText(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Object.keys(n).forEach((i) => {
      this.scroll.formatAt(e, t, i, n[i]);
    });
    const s = new U().retain(e).retain(t, kr(n));
    return this.update(s);
  }
  getContents(e, t) {
    return this.delta.slice(e, e + t);
  }
  getDelta() {
    return this.scroll.lines().reduce((e, t) => e.concat(t.delta()), new U());
  }
  getFormat(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = [], s = [];
    t === 0 ? this.scroll.path(e).forEach((c) => {
      const [d] = c;
      d instanceof Se ? n.push(d) : d instanceof Oe && s.push(d);
    }) : (n = this.scroll.lines(e, t), s = this.scroll.descendants(Oe, e, t));
    const [i, a] = [n, s].map((c) => {
      const d = c.shift();
      if (d == null) return {};
      let u = He(d);
      for (; Object.keys(u).length > 0; ) {
        const g = c.shift();
        if (g == null) return u;
        u = $p(He(g), u);
      }
      return u;
    });
    return {
      ...i,
      ...a
    };
  }
  getHTML(e, t) {
    const [n, s] = this.scroll.line(e);
    if (n) {
      const i = n.length();
      return n.length() >= s + t && !(s === 0 && t === i) ? pn(n, s, t, !0) : pn(this.scroll, e, t, !0);
    }
    return "";
  }
  getText(e, t) {
    return this.getContents(e, t).filter((n) => typeof n.insert == "string").map((n) => n.insert).join("");
  }
  insertContents(e, t) {
    const n = wo(t), s = new U().retain(e).concat(n);
    return this.scroll.insertContents(e, n), this.update(s);
  }
  insertEmbed(e, t, n) {
    return this.scroll.insertAt(e, t, n), this.update(new U().retain(e).insert({
      [t]: n
    }));
  }
  insertText(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return t = t.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(e, t), Object.keys(n).forEach((s) => {
      this.scroll.formatAt(e, t.length, s, n[s]);
    }), this.update(new U().retain(e).insert(t, kr(n)));
  }
  isBlank() {
    if (this.scroll.children.length === 0) return !0;
    if (this.scroll.children.length > 1) return !1;
    const e = this.scroll.children.head;
    if (e?.statics.blotName !== Se.blotName) return !1;
    const t = e;
    return t.children.length > 1 ? !1 : t.children.head instanceof at;
  }
  removeFormat(e, t) {
    const n = this.getText(e, t), [s, i] = this.scroll.line(e + t);
    let a = 0, c = new U();
    s != null && (a = s.length() - i, c = s.delta().slice(i, i + a - 1).insert(`
`));
    const u = this.getContents(e, t + a).diff(new U().insert(n).concat(c)), g = new U().retain(e).concat(u);
    return this.applyDelta(g);
  }
  update(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    const s = this.delta;
    if (t.length === 1 && t[0].type === "characterData" && // @ts-expect-error Fix me later
    t[0].target.data.match(Bp) && this.scroll.find(t[0].target)) {
      const i = this.scroll.find(t[0].target), a = He(i), c = i.offset(this.scroll), d = t[0].oldValue.replace(et.CONTENTS, ""), u = new U().insert(d), g = new U().insert(i.value()), b = n && {
        oldRange: No(n.oldRange, -c),
        newRange: No(n.newRange, -c)
      };
      e = new U().retain(c).concat(u.diff(g, b)).reduce((p, N) => N.insert ? p.insert(N.insert, a) : p.push(N), new U()), this.delta = s.compose(e);
    } else
      this.delta = this.getDelta(), (!e || !Ot(s.compose(e), this.delta)) && (e = s.diff(this.delta, n));
    return e;
  }
};
function Cr(r, e, t) {
  if (r.length === 0) {
    const [p] = _i(t.pop());
    return e <= 0 ? `</li></${p}>` : `</li></${p}>${Cr([], e - 1, t)}`;
  }
  const [{
    child: n,
    offset: s,
    length: i,
    indent: a,
    type: c
  }, ...d] = r, [u, g] = _i(c);
  if (a > e)
    return t.push(c), a === e + 1 ? `<${u}><li${g}>${pn(n, s, i)}${Cr(d, a, t)}` : `<${u}><li>${Cr(r, e + 1, t)}`;
  const b = t[t.length - 1];
  if (a === e && c === b)
    return `</li><li${g}>${pn(n, s, i)}${Cr(d, a, t)}`;
  const [m] = _i(t.pop());
  return `</li></${m}>${Cr(r, e - 1, t)}`;
}
function pn(r, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if ("html" in r && typeof r.html == "function")
    return r.html(e, t);
  if (r instanceof nt)
    return Cs(r.value().slice(e, e + t)).replaceAll(" ", "&nbsp;");
  if (r instanceof rt) {
    if (r.statics.blotName === "list-container") {
      const u = [];
      return r.children.forEachAt(e, t, (g, b, m) => {
        const p = "formats" in g && typeof g.formats == "function" ? g.formats() : {};
        u.push({
          child: g,
          offset: b,
          length: m,
          indent: p.indent || 0,
          type: p.list
        });
      }), Cr(u, -1, []);
    }
    const s = [];
    if (r.children.forEachAt(e, t, (u, g, b) => {
      s.push(pn(u, g, b));
    }), n || r.statics.blotName === "list")
      return s.join("");
    const {
      outerHTML: i,
      innerHTML: a
    } = r.domNode, [c, d] = i.split(`>${a}<`);
    return c === "<table" ? `<table style="border: 1px solid #000;">${s.join("")}<${d}` : `${c}>${s.join("")}<${d}`;
  }
  return r.domNode instanceof Element ? r.domNode.outerHTML : "";
}
function $p(r, e) {
  return Object.keys(e).reduce((t, n) => {
    if (r[n] == null) return t;
    const s = e[n];
    return s === r[n] ? t[n] = s : Array.isArray(s) ? s.indexOf(r[n]) < 0 ? t[n] = s.concat([r[n]]) : t[n] = s : t[n] = [s, r[n]], t;
  }, {});
}
function _i(r) {
  const e = r === "ordered" ? "ol" : "ul";
  switch (r) {
    case "checked":
      return [e, ' data-list="checked"'];
    case "unchecked":
      return [e, ' data-list="unchecked"'];
    default:
      return [e, ""];
  }
}
function wo(r) {
  return r.reduce((e, t) => {
    if (typeof t.insert == "string") {
      const n = t.insert.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
      return e.insert(n, t.attributes);
    }
    return e.push(t);
  }, new U());
}
function No(r, e) {
  let {
    index: t,
    length: n
  } = r;
  return new er(t + e, n);
}
function Pp(r) {
  const e = [];
  return r.forEach((t) => {
    typeof t.insert == "string" ? t.insert.split(`
`).forEach((s, i) => {
      i && e.push({
        insert: `
`,
        attributes: t.attributes
      }), s && e.push({
        insert: s,
        attributes: t.attributes
      });
    }) : e.push(t);
  }), e;
}
class gt {
  static DEFAULTS = {};
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.quill = e, this.options = t;
  }
}
const Qn = "\uFEFF";
class fa extends Fe {
  constructor(e, t) {
    super(e, t), this.contentNode = document.createElement("span"), this.contentNode.setAttribute("contenteditable", "false"), Array.from(this.domNode.childNodes).forEach((n) => {
      this.contentNode.appendChild(n);
    }), this.leftGuard = document.createTextNode(Qn), this.rightGuard = document.createTextNode(Qn), this.domNode.appendChild(this.leftGuard), this.domNode.appendChild(this.contentNode), this.domNode.appendChild(this.rightGuard);
  }
  index(e, t) {
    return e === this.leftGuard ? 0 : e === this.rightGuard ? 1 : super.index(e, t);
  }
  restore(e) {
    let t = null, n;
    const s = e.data.split(Qn).join("");
    if (e === this.leftGuard)
      if (this.prev instanceof nt) {
        const i = this.prev.length();
        this.prev.insertAt(i, s), t = {
          startNode: this.prev.domNode,
          startOffset: i + s.length
        };
      } else
        n = document.createTextNode(s), this.parent.insertBefore(this.scroll.create(n), this), t = {
          startNode: n,
          startOffset: s.length
        };
    else e === this.rightGuard && (this.next instanceof nt ? (this.next.insertAt(0, s), t = {
      startNode: this.next.domNode,
      startOffset: s.length
    }) : (n = document.createTextNode(s), this.parent.insertBefore(this.scroll.create(n), this.next), t = {
      startNode: n,
      startOffset: s.length
    }));
    return e.data = Qn, t;
  }
  update(e, t) {
    e.forEach((n) => {
      if (n.type === "characterData" && (n.target === this.leftGuard || n.target === this.rightGuard)) {
        const s = this.restore(n.target);
        s && (t.range = s);
      }
    });
  }
}
class jp {
  isComposing = !1;
  constructor(e, t) {
    this.scroll = e, this.emitter = t, this.setupListeners();
  }
  setupListeners() {
    this.scroll.domNode.addEventListener("compositionstart", (e) => {
      this.isComposing || this.handleCompositionStart(e);
    }), this.scroll.domNode.addEventListener("compositionend", (e) => {
      this.isComposing && queueMicrotask(() => {
        this.handleCompositionEnd(e);
      });
    });
  }
  handleCompositionStart(e) {
    const t = e.target instanceof Node ? this.scroll.find(e.target, !0) : null;
    t && !(t instanceof fa) && (this.emitter.emit(F.events.COMPOSITION_BEFORE_START, e), this.scroll.batchStart(), this.emitter.emit(F.events.COMPOSITION_START, e), this.isComposing = !0);
  }
  handleCompositionEnd(e) {
    this.emitter.emit(F.events.COMPOSITION_BEFORE_END, e), this.scroll.batchEnd(), this.emitter.emit(F.events.COMPOSITION_END, e), this.isComposing = !1;
  }
}
class Mr {
  static DEFAULTS = {
    modules: {}
  };
  static themes = {
    default: Mr
  };
  modules = {};
  constructor(e, t) {
    this.quill = e, this.options = t;
  }
  init() {
    Object.keys(this.options.modules).forEach((e) => {
      this.modules[e] == null && this.addModule(e);
    });
  }
  addModule(e) {
    const t = this.quill.constructor.import(`modules/${e}`);
    return this.modules[e] = new t(this.quill, this.options.modules[e] || {}), this.modules[e];
  }
}
const Fp = (r) => r.parentElement || r.getRootNode().host || null, Up = (r) => {
  const e = r.getBoundingClientRect(), t = "offsetWidth" in r && Math.abs(e.width) / r.offsetWidth || 1, n = "offsetHeight" in r && Math.abs(e.height) / r.offsetHeight || 1;
  return {
    top: e.top,
    right: e.left + r.clientWidth * t,
    bottom: e.top + r.clientHeight * n,
    left: e.left
  };
}, Jn = (r) => {
  const e = parseInt(r, 10);
  return Number.isNaN(e) ? 0 : e;
}, Eo = (r, e, t, n, s, i) => r < t && e > n ? 0 : r < t ? -(t - r + s) : e > n ? e - r > n - t ? r + s - t : e - n + i : 0, Hp = (r, e) => {
  const t = r.ownerDocument;
  let n = e, s = r;
  for (; s; ) {
    const i = s === t.body, a = i ? {
      top: 0,
      right: window.visualViewport?.width ?? t.documentElement.clientWidth,
      bottom: window.visualViewport?.height ?? t.documentElement.clientHeight,
      left: 0
    } : Up(s), c = getComputedStyle(s), d = Eo(n.left, n.right, a.left, a.right, Jn(c.scrollPaddingLeft), Jn(c.scrollPaddingRight)), u = Eo(n.top, n.bottom, a.top, a.bottom, Jn(c.scrollPaddingTop), Jn(c.scrollPaddingBottom));
    if (d || u)
      if (i)
        t.defaultView?.scrollBy(d, u);
      else {
        const {
          scrollLeft: g,
          scrollTop: b
        } = s;
        u && (s.scrollTop += u), d && (s.scrollLeft += d);
        const m = s.scrollLeft - g, p = s.scrollTop - b;
        n = {
          left: n.left - m,
          top: n.top - p,
          right: n.right - m,
          bottom: n.bottom - p
        };
      }
    s = i || c.position === "fixed" ? null : Fp(s);
  }
}, Gp = 100, Vp = ["block", "break", "cursor", "inline", "scroll", "text"], Kp = (r, e, t) => {
  const n = new qr();
  return Vp.forEach((s) => {
    const i = e.query(s);
    i && n.register(i);
  }), r.forEach((s) => {
    let i = e.query(s);
    i || t.error(`Cannot register "${s}" specified in "formats" config. Are you sure it was registered?`);
    let a = 0;
    for (; i; )
      if (n.register(i), i = "blotName" in i ? i.requiredContainer ?? null : null, a += 1, a > Gp) {
        t.error(`Cycle detected in registering blot requiredContainer: "${s}"`);
        break;
      }
  }), n;
}, Lr = kt("quill"), es = new qr();
rt.uiClass = "ql-ui";
class q {
  static DEFAULTS = {
    bounds: null,
    modules: {
      clipboard: !0,
      keyboard: !0,
      history: !0,
      uploader: !0
    },
    placeholder: "",
    readOnly: !1,
    registry: es,
    theme: "default"
  };
  static events = F.events;
  static sources = F.sources;
  static version = "2.0.3";
  static imports = {
    delta: U,
    parchment: Cp,
    "core/module": gt,
    "core/theme": Mr
  };
  static debug(e) {
    e === !0 && (e = "log"), kt.level(e);
  }
  static find(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return Wi.get(e) || es.find(e, t);
  }
  static import(e) {
    return this.imports[e] == null && Lr.error(`Cannot import ${e}. Are you sure it was registered?`), this.imports[e];
  }
  static register() {
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) != "string") {
      const e = arguments.length <= 0 ? void 0 : arguments[0], t = !!(!(arguments.length <= 1) && arguments[1]), n = "attrName" in e ? e.attrName : e.blotName;
      typeof n == "string" ? this.register(`formats/${n}`, e, t) : Object.keys(e).forEach((s) => {
        this.register(s, e[s], t);
      });
    } else {
      const e = arguments.length <= 0 ? void 0 : arguments[0], t = arguments.length <= 1 ? void 0 : arguments[1], n = !!(!(arguments.length <= 2) && arguments[2]);
      this.imports[e] != null && !n && Lr.warn(`Overwriting ${e} with`, t), this.imports[e] = t, (e.startsWith("blots/") || e.startsWith("formats/")) && t && typeof t != "boolean" && t.blotName !== "abstract" && es.register(t), typeof t.register == "function" && t.register(es);
    }
  }
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.options = Wp(e, t), this.container = this.options.container, this.container == null) {
      Lr.error("Invalid Quill container", e);
      return;
    }
    this.options.debug && q.debug(this.options.debug);
    const n = this.container.innerHTML.trim();
    this.container.classList.add("ql-container"), this.container.innerHTML = "", Wi.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.emitter = new F();
    const s = ua.blotName, i = this.options.registry.query(s);
    if (!i || !("blotName" in i))
      throw new Error(`Cannot initialize Quill without "${s}" blot`);
    if (this.scroll = new i(this.options.registry, this.root, {
      emitter: this.emitter
    }), this.editor = new zp(this.scroll), this.selection = new Dp(this.scroll, this.emitter), this.composition = new jp(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.addModule("input"), this.theme.addModule("uiNode"), this.theme.init(), this.emitter.on(F.events.EDITOR_CHANGE, (a) => {
      a === F.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
    }), this.emitter.on(F.events.SCROLL_UPDATE, (a, c) => {
      const d = this.selection.lastRange, [u] = this.selection.getRange(), g = d && u ? {
        oldRange: d,
        newRange: u
      } : void 0;
      Qe.call(this, () => this.editor.update(null, c, g), a);
    }), this.emitter.on(F.events.SCROLL_EMBED_UPDATE, (a, c) => {
      const d = this.selection.lastRange, [u] = this.selection.getRange(), g = d && u ? {
        oldRange: d,
        newRange: u
      } : void 0;
      Qe.call(this, () => {
        const b = new U().retain(a.offset(this)).retain({
          [a.statics.blotName]: c
        });
        return this.editor.update(b, [], g);
      }, q.sources.USER);
    }), n) {
      const a = this.clipboard.convert({
        html: `${n}<p><br></p>`,
        text: `
`
      });
      this.setContents(a);
    }
    this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable(), this.allowReadOnlyEdits = !1;
  }
  addContainer(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (typeof e == "string") {
      const n = e;
      e = document.createElement("div"), e.classList.add(n);
    }
    return this.container.insertBefore(e, t), e;
  }
  blur() {
    this.selection.setRange(null);
  }
  deleteText(e, t, n) {
    return [e, t, , n] = wt(e, t, n), Qe.call(this, () => this.editor.deleteText(e, t), n, e, -1 * t);
  }
  disable() {
    this.enable(!1);
  }
  editReadOnly(e) {
    this.allowReadOnlyEdits = !0;
    const t = e();
    return this.allowReadOnlyEdits = !1, t;
  }
  enable() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.scroll.enable(e), this.container.classList.toggle("ql-disabled", !e);
  }
  focus() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.selection.focus(), e.preventScroll || this.scrollSelectionIntoView();
  }
  format(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : F.sources.API;
    return Qe.call(this, () => {
      const s = this.getSelection(!0);
      let i = new U();
      if (s == null) return i;
      if (this.scroll.query(e, H.BLOCK))
        i = this.editor.formatLine(s.index, s.length, {
          [e]: t
        });
      else {
        if (s.length === 0)
          return this.selection.format(e, t), i;
        i = this.editor.formatText(s.index, s.length, {
          [e]: t
        });
      }
      return this.setSelection(s, F.sources.SILENT), i;
    }, n);
  }
  formatLine(e, t, n, s, i) {
    let a;
    return [e, t, a, i] = wt(
      e,
      t,
      // @ts-expect-error
      n,
      s,
      i
    ), Qe.call(this, () => this.editor.formatLine(e, t, a), i, e, 0);
  }
  formatText(e, t, n, s, i) {
    let a;
    return [e, t, a, i] = wt(
      // @ts-expect-error
      e,
      t,
      n,
      s,
      i
    ), Qe.call(this, () => this.editor.formatText(e, t, a), i, e, 0);
  }
  getBounds(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = null;
    if (typeof e == "number" ? n = this.selection.getBounds(e, t) : n = this.selection.getBounds(e.index, e.length), !n) return null;
    const s = this.container.getBoundingClientRect();
    return {
      bottom: n.bottom - s.top,
      height: n.height,
      left: n.left - s.left,
      right: n.right - s.left,
      top: n.top - s.top,
      width: n.width
    };
  }
  getContents() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - e;
    return [e, t] = wt(e, t), this.editor.getContents(e, t);
  }
  getFormat() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return typeof e == "number" ? this.editor.getFormat(e, t) : this.editor.getFormat(e.index, e.length);
  }
  getIndex(e) {
    return e.offset(this.scroll);
  }
  getLength() {
    return this.scroll.length();
  }
  getLeaf(e) {
    return this.scroll.leaf(e);
  }
  getLine(e) {
    return this.scroll.line(e);
  }
  getLines() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    return typeof e != "number" ? this.scroll.lines(e.index, e.length) : this.scroll.lines(e, t);
  }
  getModule(e) {
    return this.theme.modules[e];
  }
  getSelection() {
    return arguments.length > 0 && arguments[0] !== void 0 && arguments[0] && this.focus(), this.update(), this.selection.getRange()[0];
  }
  getSemanticHTML() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
    return typeof e == "number" && (t = t ?? this.getLength() - e), [e, t] = wt(e, t), this.editor.getHTML(e, t);
  }
  getText() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
    return typeof e == "number" && (t = t ?? this.getLength() - e), [e, t] = wt(e, t), this.editor.getText(e, t);
  }
  hasFocus() {
    return this.selection.hasFocus();
  }
  insertEmbed(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : q.sources.API;
    return Qe.call(this, () => this.editor.insertEmbed(e, t, n), s, e);
  }
  insertText(e, t, n, s, i) {
    let a;
    return [e, , a, i] = wt(e, 0, n, s, i), Qe.call(this, () => this.editor.insertText(e, t, a), i, e, t.length);
  }
  isEnabled() {
    return this.scroll.isEnabled();
  }
  off() {
    return this.emitter.off(...arguments);
  }
  on() {
    return this.emitter.on(...arguments);
  }
  once() {
    return this.emitter.once(...arguments);
  }
  removeFormat(e, t, n) {
    return [e, t, , n] = wt(e, t, n), Qe.call(this, () => this.editor.removeFormat(e, t), n, e);
  }
  scrollRectIntoView(e) {
    Hp(this.root, e);
  }
  /**
   * @deprecated Use Quill#scrollSelectionIntoView() instead.
   */
  scrollIntoView() {
    console.warn("Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead."), this.scrollSelectionIntoView();
  }
  /**
   * Scroll the current selection into the visible area.
   * If the selection is already visible, no scrolling will occur.
   */
  scrollSelectionIntoView() {
    const e = this.selection.lastRange, t = e && this.selection.getBounds(e.index, e.length);
    t && this.scrollRectIntoView(t);
  }
  setContents(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : F.sources.API;
    return Qe.call(this, () => {
      e = new U(e);
      const n = this.getLength(), s = this.editor.deleteText(0, n), i = this.editor.insertContents(0, e), a = this.editor.deleteText(this.getLength() - 1, 1);
      return s.compose(i).compose(a);
    }, t);
  }
  setSelection(e, t, n) {
    e == null ? this.selection.setRange(null, t || q.sources.API) : ([e, t, , n] = wt(e, t, n), this.selection.setRange(new er(Math.max(0, e), t), n), n !== F.sources.SILENT && this.scrollSelectionIntoView());
  }
  setText(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : F.sources.API;
    const n = new U().insert(e);
    return this.setContents(n, t);
  }
  update() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : F.sources.USER;
    const t = this.scroll.update(e);
    return this.selection.update(e), t;
  }
  updateContents(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : F.sources.API;
    return Qe.call(this, () => (e = new U(e), this.editor.applyDelta(e)), t, !0);
  }
}
function So(r) {
  return typeof r == "string" ? document.querySelector(r) : r;
}
function Li(r) {
  return Object.entries(r ?? {}).reduce((e, t) => {
    let [n, s] = t;
    return {
      ...e,
      [n]: s === !0 ? {} : s
    };
  }, {});
}
function To(r) {
  return Object.fromEntries(Object.entries(r).filter((e) => e[1] !== void 0));
}
function Wp(r, e) {
  const t = So(r);
  if (!t)
    throw new Error("Invalid Quill container");
  const s = !e.theme || e.theme === q.DEFAULTS.theme ? Mr : q.import(`themes/${e.theme}`);
  if (!s)
    throw new Error(`Invalid theme ${e.theme}. Did you register it?`);
  const {
    modules: i,
    ...a
  } = q.DEFAULTS, {
    modules: c,
    ...d
  } = s.DEFAULTS;
  let u = Li(e.modules);
  u != null && u.toolbar && u.toolbar.constructor !== Object && (u = {
    ...u,
    toolbar: {
      container: u.toolbar
    }
  });
  const g = Mt({}, Li(i), Li(c), u), b = {
    ...a,
    ...To(d),
    ...To(e)
  };
  let m = e.registry;
  return m ? e.formats && Lr.warn('Ignoring "formats" option because "registry" is specified') : m = e.formats ? Kp(e.formats, b.registry, Lr) : b.registry, {
    ...b,
    registry: m,
    container: t,
    theme: s,
    modules: Object.entries(g).reduce((p, N) => {
      let [S, C] = N;
      if (!C) return p;
      const y = q.import(`modules/${S}`);
      return y == null ? (Lr.error(`Cannot load ${S} module. Are you sure you registered it?`), p) : {
        ...p,
        // @ts-expect-error
        [S]: Mt({}, y.DEFAULTS || {}, C)
      };
    }, {}),
    bounds: So(b.bounds)
  };
}
function Qe(r, e, t, n) {
  if (!this.isEnabled() && e === F.sources.USER && !this.allowReadOnlyEdits)
    return new U();
  let s = t == null ? null : this.getSelection();
  const i = this.editor.delta, a = r();
  if (s != null && (t === !0 && (t = s.index), n == null ? s = Co(s, a, e) : n !== 0 && (s = Co(s, t, n, e)), this.setSelection(s, F.sources.SILENT)), a.length() > 0) {
    const c = [F.events.TEXT_CHANGE, a, i, e];
    this.emitter.emit(F.events.EDITOR_CHANGE, ...c), e !== F.sources.SILENT && this.emitter.emit(...c);
  }
  return a;
}
function wt(r, e, t, n, s) {
  let i = {};
  return typeof r.index == "number" && typeof r.length == "number" ? typeof e != "number" ? (s = n, n = t, t = e, e = r.length, r = r.index) : (e = r.length, r = r.index) : typeof e != "number" && (s = n, n = t, t = e, e = 0), typeof t == "object" ? (i = t, s = n) : typeof t == "string" && (n != null ? i[t] = n : s = t), s = s || F.sources.API, [r, e, i, s];
}
function Co(r, e, t, n) {
  const s = typeof t == "number" ? t : 0;
  if (r == null) return null;
  let i, a;
  return e && typeof e.transformPosition == "function" ? [i, a] = [r.index, r.index + r.length].map((c) => (
    // @ts-expect-error -- TODO: add a better type guard around `index`
    e.transformPosition(c, n !== F.sources.USER)
  )) : [i, a] = [r.index, r.index + r.length].map((c) => c < e || c === e && n === F.sources.USER ? c : s >= 0 ? c + s : Math.max(e, c + s)), new er(i, a - i);
}
let or = class extends Ts {
};
function Ao(r) {
  return r instanceof Se || r instanceof Ve;
}
function ko(r) {
  return typeof r.updateContent == "function";
}
class Zp extends ua {
  static blotName = "scroll";
  static className = "ql-editor";
  static tagName = "DIV";
  static defaultChild = Se;
  static allowedChildren = [Se, Ve, or];
  constructor(e, t, n) {
    let {
      emitter: s
    } = n;
    super(e, t), this.emitter = s, this.batch = !1, this.optimize(), this.enable(), this.domNode.addEventListener("dragstart", (i) => this.handleDragStart(i));
  }
  batchStart() {
    Array.isArray(this.batch) || (this.batch = []);
  }
  batchEnd() {
    if (!this.batch) return;
    const e = this.batch;
    this.batch = !1, this.update(e);
  }
  emitMount(e) {
    this.emitter.emit(F.events.SCROLL_BLOT_MOUNT, e);
  }
  emitUnmount(e) {
    this.emitter.emit(F.events.SCROLL_BLOT_UNMOUNT, e);
  }
  emitEmbedUpdate(e, t) {
    this.emitter.emit(F.events.SCROLL_EMBED_UPDATE, e, t);
  }
  deleteAt(e, t) {
    const [n, s] = this.line(e), [i] = this.line(e + t);
    if (super.deleteAt(e, t), i != null && n !== i && s > 0) {
      if (n instanceof Ve || i instanceof Ve) {
        this.optimize();
        return;
      }
      const a = i.children.head instanceof at ? null : i.children.head;
      n.moveChildren(i, a), n.remove();
    }
    this.optimize();
  }
  enable() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.domNode.setAttribute("contenteditable", e ? "true" : "false");
  }
  formatAt(e, t, n, s) {
    super.formatAt(e, t, n, s), this.optimize();
  }
  insertAt(e, t, n) {
    if (e >= this.length())
      if (n == null || this.scroll.query(t, H.BLOCK) == null) {
        const s = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(s), n == null && t.endsWith(`
`) ? s.insertAt(0, t.slice(0, -1), n) : s.insertAt(0, t, n);
      } else {
        const s = this.scroll.create(t, n);
        this.appendChild(s);
      }
    else
      super.insertAt(e, t, n);
    this.optimize();
  }
  insertBefore(e, t) {
    if (e.statics.scope === H.INLINE_BLOT) {
      const n = this.scroll.create(this.statics.defaultChild.blotName);
      n.appendChild(e), super.insertBefore(n, t);
    } else
      super.insertBefore(e, t);
  }
  insertContents(e, t) {
    const n = this.deltaToRenderBlocks(t.concat(new U().insert(`
`))), s = n.pop();
    if (s == null) return;
    this.batchStart();
    const i = n.shift();
    if (i) {
      const d = i.type === "block" && (i.delta.length() === 0 || !this.descendant(Ve, e)[0] && e < this.length()), u = i.type === "block" ? i.delta : new U().insert({
        [i.key]: i.value
      });
      Ii(this, e, u);
      const g = i.type === "block" ? 1 : 0, b = e + u.length() + g;
      d && this.insertAt(b - 1, `
`);
      const m = He(this.line(e)[0]), p = Ke.AttributeMap.diff(m, i.attributes) || {};
      Object.keys(p).forEach((N) => {
        this.formatAt(b - 1, 1, N, p[N]);
      }), e = b;
    }
    let [a, c] = this.children.find(e);
    if (n.length && (a && (a = a.split(c), c = 0), n.forEach((d) => {
      if (d.type === "block") {
        const u = this.createBlock(d.attributes, a || void 0);
        Ii(u, 0, d.delta);
      } else {
        const u = this.create(d.key, d.value);
        this.insertBefore(u, a || void 0), Object.keys(d.attributes).forEach((g) => {
          u.format(g, d.attributes[g]);
        });
      }
    })), s.type === "block" && s.delta.length()) {
      const d = a ? a.offset(a.scroll) + c : this.length();
      Ii(this, d, s.delta);
    }
    this.batchEnd(), this.optimize();
  }
  isEnabled() {
    return this.domNode.getAttribute("contenteditable") === "true";
  }
  leaf(e) {
    const t = this.path(e).pop();
    if (!t)
      return [null, -1];
    const [n, s] = t;
    return n instanceof Oe ? [n, s] : [null, -1];
  }
  line(e) {
    return e === this.length() ? this.line(e - 1) : this.descendant(Ao, e);
  }
  lines() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    const n = (s, i, a) => {
      let c = [], d = a;
      return s.children.forEachAt(i, a, (u, g, b) => {
        Ao(u) ? c.push(u) : u instanceof Ts && (c = c.concat(n(u, g, d))), d -= b;
      }), c;
    };
    return n(this, e, t);
  }
  optimize() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.batch || (super.optimize(e, t), e.length > 0 && this.emitter.emit(F.events.SCROLL_OPTIMIZE, e, t));
  }
  path(e) {
    return super.path(e).slice(1);
  }
  remove() {
  }
  update(e) {
    if (this.batch) {
      Array.isArray(e) && (this.batch = this.batch.concat(e));
      return;
    }
    let t = F.sources.USER;
    typeof e == "string" && (t = e), Array.isArray(e) || (e = this.observer.takeRecords()), e = e.filter((n) => {
      let {
        target: s
      } = n;
      const i = this.find(s, !0);
      return i && !ko(i);
    }), e.length > 0 && this.emitter.emit(F.events.SCROLL_BEFORE_UPDATE, t, e), super.update(e.concat([])), e.length > 0 && this.emitter.emit(F.events.SCROLL_UPDATE, t, e);
  }
  updateEmbedAt(e, t, n) {
    const [s] = this.descendant((i) => i instanceof Ve, e);
    s && s.statics.blotName === t && ko(s) && s.updateContent(n);
  }
  handleDragStart(e) {
    e.preventDefault();
  }
  deltaToRenderBlocks(e) {
    const t = [];
    let n = new U();
    return e.forEach((s) => {
      const i = s?.insert;
      if (i)
        if (typeof i == "string") {
          const a = i.split(`
`);
          a.slice(0, -1).forEach((d) => {
            n.insert(d, s.attributes), t.push({
              type: "block",
              delta: n,
              attributes: s.attributes ?? {}
            }), n = new U();
          });
          const c = a[a.length - 1];
          c && n.insert(c, s.attributes);
        } else {
          const a = Object.keys(i)[0];
          if (!a) return;
          this.query(a, H.INLINE) ? n.push(s) : (n.length() && t.push({
            type: "block",
            delta: n,
            attributes: {}
          }), n = new U(), t.push({
            type: "blockEmbed",
            key: a,
            value: i[a],
            attributes: s.attributes ?? {}
          }));
        }
    }), n.length() && t.push({
      type: "block",
      delta: n,
      attributes: {}
    }), t;
  }
  createBlock(e, t) {
    let n;
    const s = {};
    Object.entries(e).forEach((c) => {
      let [d, u] = c;
      this.query(d, H.BLOCK & H.BLOT) != null ? n = d : s[d] = u;
    });
    const i = this.create(n || this.statics.defaultChild.blotName, n ? e[n] : void 0);
    this.insertBefore(i, t || void 0);
    const a = i.length();
    return Object.entries(s).forEach((c) => {
      let [d, u] = c;
      i.formatAt(0, a, d, u);
    }), i;
  }
}
function Ii(r, e, t) {
  t.reduce((n, s) => {
    const i = Ke.Op.length(s);
    let a = s.attributes || {};
    if (s.insert != null) {
      if (typeof s.insert == "string") {
        const c = s.insert;
        r.insertAt(n, c);
        const [d] = r.descendant(Oe, n), u = He(d);
        a = Ke.AttributeMap.diff(u, a) || {};
      } else if (typeof s.insert == "object") {
        const c = Object.keys(s.insert)[0];
        if (c == null) return n;
        if (r.insertAt(n, c, s.insert[c]), r.scroll.query(c, H.INLINE) != null) {
          const [u] = r.descendant(Oe, n), g = He(u);
          a = Ke.AttributeMap.diff(g, a) || {};
        }
      }
    }
    return Object.keys(a).forEach((c) => {
      r.formatAt(n, i, c, a[c]);
    }), n + i;
  }, e);
}
const ha = {
  scope: H.BLOCK,
  whitelist: ["right", "center", "justify"]
}, Yp = new ht("align", "align", ha), fc = new it("align", "ql-align", ha), hc = new Ft("align", "text-align", ha);
class mc extends Ft {
  value(e) {
    let t = super.value(e);
    return t.startsWith("rgb(") ? (t = t.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), `#${t.split(",").map((s) => `00${parseInt(s, 10).toString(16)}`.slice(-2)).join("")}`) : t;
  }
}
const Xp = new it("color", "ql-color", {
  scope: H.INLINE
}), ma = new mc("color", "color", {
  scope: H.INLINE
}), Qp = new it("background", "ql-bg", {
  scope: H.INLINE
}), ga = new mc("background", "background-color", {
  scope: H.INLINE
});
class lr extends or {
  static create(e) {
    const t = super.create(e);
    return t.setAttribute("spellcheck", "false"), t;
  }
  code(e, t) {
    return this.children.map((n) => n.length() <= 1 ? "" : n.domNode.innerText).join(`
`).slice(e, e + t);
  }
  html(e, t) {
    return `<pre>
${Cs(this.code(e, t))}
</pre>`;
  }
}
class De extends Se {
  static TAB = "  ";
  static register() {
    q.register(lr);
  }
}
class pa extends Re {
}
pa.blotName = "code";
pa.tagName = "CODE";
De.blotName = "code-block";
De.className = "ql-code-block";
De.tagName = "DIV";
lr.blotName = "code-block-container";
lr.className = "ql-code-block-container";
lr.tagName = "DIV";
lr.allowedChildren = [De];
De.allowedChildren = [nt, at, et];
De.requiredContainer = lr;
const ba = {
  scope: H.BLOCK,
  whitelist: ["rtl"]
}, gc = new ht("direction", "dir", ba), pc = new it("direction", "ql-direction", ba), bc = new Ft("direction", "direction", ba), vc = {
  scope: H.INLINE,
  whitelist: ["serif", "monospace"]
}, xc = new it("font", "ql-font", vc);
class Jp extends Ft {
  value(e) {
    return super.value(e).replace(/["']/g, "");
  }
}
const yc = new Jp("font", "font-family", vc), wc = new it("size", "ql-size", {
  scope: H.INLINE,
  whitelist: ["small", "large", "huge"]
}), Nc = new Ft("size", "font-size", {
  scope: H.INLINE,
  whitelist: ["10px", "18px", "32px"]
}), eb = kt("quill:keyboard"), tb = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
class As extends gt {
  static match(e, t) {
    return ["altKey", "ctrlKey", "metaKey", "shiftKey"].some((n) => !!t[n] !== e[n] && t[n] !== null) ? !1 : t.key === e.key || t.key === e.which;
  }
  constructor(e, t) {
    super(e, t), this.bindings = {}, Object.keys(this.options.bindings).forEach((n) => {
      this.options.bindings[n] && this.addBinding(this.options.bindings[n]);
    }), this.addBinding({
      key: "Enter",
      shiftKey: null
    }, this.handleEnter), this.addBinding({
      key: "Enter",
      metaKey: null,
      ctrlKey: null,
      altKey: null
    }, () => {
    }), /Firefox/i.test(navigator.userAgent) ? (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !0
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !0
    }, this.handleDelete)) : (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !0,
      prefix: /^.?$/
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !0,
      suffix: /^.?$/
    }, this.handleDelete)), this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !1
    }, this.handleDeleteRange), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !1
    }, this.handleDeleteRange), this.addBinding({
      key: "Backspace",
      altKey: null,
      ctrlKey: null,
      metaKey: null,
      shiftKey: null
    }, {
      collapsed: !0,
      offset: 0
    }, this.handleBackspace), this.listen();
  }
  addBinding(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = nb(e);
    if (s == null) {
      eb.warn("Attempted to add invalid keyboard binding", s);
      return;
    }
    typeof t == "function" && (t = {
      handler: t
    }), typeof n == "function" && (n = {
      handler: n
    }), (Array.isArray(s.key) ? s.key : [s.key]).forEach((a) => {
      const c = {
        ...s,
        key: a,
        ...t,
        ...n
      };
      this.bindings[c.key] = this.bindings[c.key] || [], this.bindings[c.key].push(c);
    });
  }
  listen() {
    this.quill.root.addEventListener("keydown", (e) => {
      if (e.defaultPrevented || e.isComposing || e.keyCode === 229 && (e.key === "Enter" || e.key === "Backspace")) return;
      const s = (this.bindings[e.key] || []).concat(this.bindings[e.which] || []).filter((y) => As.match(e, y));
      if (s.length === 0) return;
      const i = q.find(e.target, !0);
      if (i && i.scroll !== this.quill.scroll) return;
      const a = this.quill.getSelection();
      if (a == null || !this.quill.hasFocus()) return;
      const [c, d] = this.quill.getLine(a.index), [u, g] = this.quill.getLeaf(a.index), [b, m] = a.length === 0 ? [u, g] : this.quill.getLeaf(a.index + a.length), p = u instanceof cs ? u.value().slice(0, g) : "", N = b instanceof cs ? b.value().slice(m) : "", S = {
        collapsed: a.length === 0,
        // @ts-expect-error Fix me later
        empty: a.length === 0 && c.length() <= 1,
        format: this.quill.getFormat(a),
        line: c,
        offset: d,
        prefix: p,
        suffix: N,
        event: e
      };
      s.some((y) => {
        if (y.collapsed != null && y.collapsed !== S.collapsed || y.empty != null && y.empty !== S.empty || y.offset != null && y.offset !== S.offset)
          return !1;
        if (Array.isArray(y.format)) {
          if (y.format.every((E) => S.format[E] == null))
            return !1;
        } else if (typeof y.format == "object" && !Object.keys(y.format).every((E) => y.format[E] === !0 ? S.format[E] != null : y.format[E] === !1 ? S.format[E] == null : Ot(y.format[E], S.format[E])))
          return !1;
        return y.prefix != null && !y.prefix.test(S.prefix) || y.suffix != null && !y.suffix.test(S.suffix) ? !1 : y.handler.call(this, a, S, y) !== !0;
      }) && e.preventDefault();
    });
  }
  handleBackspace(e, t) {
    const n = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(t.prefix) ? 2 : 1;
    if (e.index === 0 || this.quill.getLength() <= 1) return;
    let s = {};
    const [i] = this.quill.getLine(e.index);
    let a = new U().retain(e.index - n).delete(n);
    if (t.offset === 0) {
      const [c] = this.quill.getLine(e.index - 1);
      if (c && !(c.statics.blotName === "block" && c.length() <= 1)) {
        const u = i.formats(), g = this.quill.getFormat(e.index - 1, 1);
        if (s = Ke.AttributeMap.diff(u, g) || {}, Object.keys(s).length > 0) {
          const b = new U().retain(e.index + i.length() - 2).retain(1, s);
          a = a.compose(b);
        }
      }
    }
    this.quill.updateContents(a, q.sources.USER), this.quill.focus();
  }
  handleDelete(e, t) {
    const n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(t.suffix) ? 2 : 1;
    if (e.index >= this.quill.getLength() - n) return;
    let s = {};
    const [i] = this.quill.getLine(e.index);
    let a = new U().retain(e.index).delete(n);
    if (t.offset >= i.length() - 1) {
      const [c] = this.quill.getLine(e.index + 1);
      if (c) {
        const d = i.formats(), u = this.quill.getFormat(e.index, 1);
        s = Ke.AttributeMap.diff(d, u) || {}, Object.keys(s).length > 0 && (a = a.retain(c.length() - 1).retain(1, s));
      }
    }
    this.quill.updateContents(a, q.sources.USER), this.quill.focus();
  }
  handleDeleteRange(e) {
    va({
      range: e,
      quill: this.quill
    }), this.quill.focus();
  }
  handleEnter(e, t) {
    const n = Object.keys(t.format).reduce((i, a) => (this.quill.scroll.query(a, H.BLOCK) && !Array.isArray(t.format[a]) && (i[a] = t.format[a]), i), {}), s = new U().retain(e.index).delete(e.length).insert(`
`, n);
    this.quill.updateContents(s, q.sources.USER), this.quill.setSelection(e.index + 1, q.sources.SILENT), this.quill.focus();
  }
}
const rb = {
  bindings: {
    bold: Oi("bold"),
    italic: Oi("italic"),
    underline: Oi("underline"),
    indent: {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: "Tab",
      format: ["blockquote", "indent", "list"],
      handler(r, e) {
        return e.collapsed && e.offset !== 0 ? !0 : (this.quill.format("indent", "+1", q.sources.USER), !1);
      }
    },
    outdent: {
      key: "Tab",
      shiftKey: !0,
      format: ["blockquote", "indent", "list"],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler(r, e) {
        return e.collapsed && e.offset !== 0 ? !0 : (this.quill.format("indent", "-1", q.sources.USER), !1);
      }
    },
    "outdent backspace": {
      key: "Backspace",
      collapsed: !0,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ["indent", "list"],
      offset: 0,
      handler(r, e) {
        e.format.indent != null ? this.quill.format("indent", "-1", q.sources.USER) : e.format.list != null && this.quill.format("list", !1, q.sources.USER);
      }
    },
    "indent code-block": _o(!0),
    "outdent code-block": _o(!1),
    "remove tab": {
      key: "Tab",
      shiftKey: !0,
      collapsed: !0,
      prefix: /\t$/,
      handler(r) {
        this.quill.deleteText(r.index - 1, 1, q.sources.USER);
      }
    },
    tab: {
      key: "Tab",
      handler(r, e) {
        if (e.format.table) return !0;
        this.quill.history.cutoff();
        const t = new U().retain(r.index).delete(r.length).insert("	");
        return this.quill.updateContents(t, q.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(r.index + 1, q.sources.SILENT), !1;
      }
    },
    "blockquote empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["blockquote"],
      empty: !0,
      handler() {
        this.quill.format("blockquote", !1, q.sources.USER);
      }
    },
    "list empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["list"],
      empty: !0,
      handler(r, e) {
        const t = {
          list: !1
        };
        e.format.indent && (t.indent = !1), this.quill.formatLine(r.index, r.length, t, q.sources.USER);
      }
    },
    "checklist enter": {
      key: "Enter",
      collapsed: !0,
      format: {
        list: "checked"
      },
      handler(r) {
        const [e, t] = this.quill.getLine(r.index), n = {
          // @ts-expect-error Fix me later
          ...e.formats(),
          list: "checked"
        }, s = new U().retain(r.index).insert(`
`, n).retain(e.length() - t - 1).retain(1, {
          list: "unchecked"
        });
        this.quill.updateContents(s, q.sources.USER), this.quill.setSelection(r.index + 1, q.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "header enter": {
      key: "Enter",
      collapsed: !0,
      format: ["header"],
      suffix: /^$/,
      handler(r, e) {
        const [t, n] = this.quill.getLine(r.index), s = new U().retain(r.index).insert(`
`, e.format).retain(t.length() - n - 1).retain(1, {
          header: null
        });
        this.quill.updateContents(s, q.sources.USER), this.quill.setSelection(r.index + 1, q.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "table backspace": {
      key: "Backspace",
      format: ["table"],
      collapsed: !0,
      offset: 0,
      handler() {
      }
    },
    "table delete": {
      key: "Delete",
      format: ["table"],
      collapsed: !0,
      suffix: /^$/,
      handler() {
      }
    },
    "table enter": {
      key: "Enter",
      shiftKey: null,
      format: ["table"],
      handler(r) {
        const e = this.quill.getModule("table");
        if (e) {
          const [t, n, s, i] = e.getTable(r), a = sb(t, n, s, i);
          if (a == null) return;
          let c = t.offset();
          if (a < 0) {
            const d = new U().retain(c).insert(`
`);
            this.quill.updateContents(d, q.sources.USER), this.quill.setSelection(r.index + 1, r.length, q.sources.SILENT);
          } else if (a > 0) {
            c += t.length();
            const d = new U().retain(c).insert(`
`);
            this.quill.updateContents(d, q.sources.USER), this.quill.setSelection(c, q.sources.USER);
          }
        }
      }
    },
    "table tab": {
      key: "Tab",
      shiftKey: null,
      format: ["table"],
      handler(r, e) {
        const {
          event: t,
          line: n
        } = e, s = n.offset(this.quill.scroll);
        t.shiftKey ? this.quill.setSelection(s - 1, q.sources.USER) : this.quill.setSelection(s + n.length(), q.sources.USER);
      }
    },
    "list autofill": {
      key: " ",
      shiftKey: null,
      collapsed: !0,
      format: {
        "code-block": !1,
        blockquote: !1,
        table: !1
      },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler(r, e) {
        if (this.quill.scroll.query("list") == null) return !0;
        const {
          length: t
        } = e.prefix, [n, s] = this.quill.getLine(r.index);
        if (s > t) return !0;
        let i;
        switch (e.prefix.trim()) {
          case "[]":
          case "[ ]":
            i = "unchecked";
            break;
          case "[x]":
            i = "checked";
            break;
          case "-":
          case "*":
            i = "bullet";
            break;
          default:
            i = "ordered";
        }
        this.quill.insertText(r.index, " ", q.sources.USER), this.quill.history.cutoff();
        const a = new U().retain(r.index - s).delete(t + 1).retain(n.length() - 2 - s).retain(1, {
          list: i
        });
        return this.quill.updateContents(a, q.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(r.index - t, q.sources.SILENT), !1;
      }
    },
    "code exit": {
      key: "Enter",
      collapsed: !0,
      format: ["code-block"],
      prefix: /^$/,
      suffix: /^\s*$/,
      handler(r) {
        const [e, t] = this.quill.getLine(r.index);
        let n = 2, s = e;
        for (; s != null && s.length() <= 1 && s.formats()["code-block"]; )
          if (s = s.prev, n -= 1, n <= 0) {
            const i = new U().retain(r.index + e.length() - t - 2).retain(1, {
              "code-block": null
            }).delete(1);
            return this.quill.updateContents(i, q.sources.USER), this.quill.setSelection(r.index - 1, q.sources.SILENT), !1;
          }
        return !0;
      }
    },
    "embed left": ts("ArrowLeft", !1),
    "embed left shift": ts("ArrowLeft", !0),
    "embed right": ts("ArrowRight", !1),
    "embed right shift": ts("ArrowRight", !0),
    "table down": Lo(!1),
    "table up": Lo(!0)
  }
};
As.DEFAULTS = rb;
function _o(r) {
  return {
    key: "Tab",
    shiftKey: !r,
    format: {
      "code-block": !0
    },
    handler(e, t) {
      let {
        event: n
      } = t;
      const s = this.quill.scroll.query("code-block"), {
        TAB: i
      } = s;
      if (e.length === 0 && !n.shiftKey) {
        this.quill.insertText(e.index, i, q.sources.USER), this.quill.setSelection(e.index + i.length, q.sources.SILENT);
        return;
      }
      const a = e.length === 0 ? this.quill.getLines(e.index, 1) : this.quill.getLines(e);
      let {
        index: c,
        length: d
      } = e;
      a.forEach((u, g) => {
        r ? (u.insertAt(0, i), g === 0 ? c += i.length : d += i.length) : u.domNode.textContent.startsWith(i) && (u.deleteAt(0, i.length), g === 0 ? c -= i.length : d -= i.length);
      }), this.quill.update(q.sources.USER), this.quill.setSelection(c, d, q.sources.SILENT);
    }
  };
}
function ts(r, e) {
  return {
    key: r,
    shiftKey: e,
    altKey: null,
    [r === "ArrowLeft" ? "prefix" : "suffix"]: /^$/,
    handler(n) {
      let {
        index: s
      } = n;
      r === "ArrowRight" && (s += n.length + 1);
      const [i] = this.quill.getLeaf(s);
      return i instanceof Fe ? (r === "ArrowLeft" ? e ? this.quill.setSelection(n.index - 1, n.length + 1, q.sources.USER) : this.quill.setSelection(n.index - 1, q.sources.USER) : e ? this.quill.setSelection(n.index, n.length + 1, q.sources.USER) : this.quill.setSelection(n.index + n.length + 1, q.sources.USER), !1) : !0;
    }
  };
}
function Oi(r) {
  return {
    key: r[0],
    shortKey: !0,
    handler(e, t) {
      this.quill.format(r, !t.format[r], q.sources.USER);
    }
  };
}
function Lo(r) {
  return {
    key: r ? "ArrowUp" : "ArrowDown",
    collapsed: !0,
    format: ["table"],
    handler(e, t) {
      const n = r ? "prev" : "next", s = t.line, i = s.parent[n];
      if (i != null) {
        if (i.statics.blotName === "table-row") {
          let a = i.children.head, c = s;
          for (; c.prev != null; )
            c = c.prev, a = a.next;
          const d = a.offset(this.quill.scroll) + Math.min(t.offset, a.length() - 1);
          this.quill.setSelection(d, 0, q.sources.USER);
        }
      } else {
        const a = s.table()[n];
        a != null && (r ? this.quill.setSelection(a.offset(this.quill.scroll) + a.length() - 1, 0, q.sources.USER) : this.quill.setSelection(a.offset(this.quill.scroll), 0, q.sources.USER));
      }
      return !1;
    }
  };
}
function nb(r) {
  if (typeof r == "string" || typeof r == "number")
    r = {
      key: r
    };
  else if (typeof r == "object")
    r = kr(r);
  else
    return null;
  return r.shortKey && (r[tb] = r.shortKey, delete r.shortKey), r;
}
function va(r) {
  let {
    quill: e,
    range: t
  } = r;
  const n = e.getLines(t);
  let s = {};
  if (n.length > 1) {
    const i = n[0].formats(), a = n[n.length - 1].formats();
    s = Ke.AttributeMap.diff(a, i) || {};
  }
  e.deleteText(t, q.sources.USER), Object.keys(s).length > 0 && e.formatLine(t.index, 1, s, q.sources.USER), e.setSelection(t.index, q.sources.SILENT);
}
function sb(r, e, t, n) {
  return e.prev == null && e.next == null ? t.prev == null && t.next == null ? n === 0 ? -1 : 1 : t.prev == null ? -1 : 1 : e.prev == null ? -1 : e.next == null ? 1 : null;
}
const ib = /font-weight:\s*normal/, ab = ["P", "OL", "UL"], Io = (r) => r && ab.includes(r.tagName), ob = (r) => {
  Array.from(r.querySelectorAll("br")).filter((e) => Io(e.previousElementSibling) && Io(e.nextElementSibling)).forEach((e) => {
    e.parentNode?.removeChild(e);
  });
}, lb = (r) => {
  Array.from(r.querySelectorAll('b[style*="font-weight"]')).filter((e) => e.getAttribute("style")?.match(ib)).forEach((e) => {
    const t = r.createDocumentFragment();
    t.append(...e.childNodes), e.parentNode?.replaceChild(t, e);
  });
};
function cb(r) {
  r.querySelector('[id^="docs-internal-guid-"]') && (lb(r), ob(r));
}
const db = /\bmso-list:[^;]*ignore/i, ub = /\bmso-list:[^;]*\bl(\d+)/i, fb = /\bmso-list:[^;]*\blevel(\d+)/i, hb = (r, e) => {
  const t = r.getAttribute("style"), n = t?.match(ub);
  if (!n)
    return null;
  const s = Number(n[1]), i = t?.match(fb), a = i ? Number(i[1]) : 1, c = new RegExp(`@list l${s}:level${a}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, "i"), d = e.match(c), u = d && d[1] === "bullet" ? "bullet" : "ordered";
  return {
    id: s,
    indent: a,
    type: u,
    element: r
  };
}, mb = (r) => {
  const e = Array.from(r.querySelectorAll("[style*=mso-list]")), t = [], n = [];
  e.forEach((a) => {
    (a.getAttribute("style") || "").match(db) ? t.push(a) : n.push(a);
  }), t.forEach((a) => a.parentNode?.removeChild(a));
  const s = r.documentElement.innerHTML, i = n.map((a) => hb(a, s)).filter((a) => a);
  for (; i.length; ) {
    const a = [];
    let c = i.shift();
    for (; c; )
      a.push(c), c = i.length && i[0]?.element === c.element.nextElementSibling && // Different id means the next item doesn't belong to this group.
      i[0].id === c.id ? i.shift() : null;
    const d = document.createElement("ul");
    a.forEach((b) => {
      const m = document.createElement("li");
      m.setAttribute("data-list", b.type), b.indent > 1 && m.setAttribute("class", `ql-indent-${b.indent - 1}`), m.innerHTML = b.element.innerHTML, d.appendChild(m);
    });
    const u = a[0]?.element, {
      parentNode: g
    } = u ?? {};
    u && g?.replaceChild(d, u), a.slice(1).forEach((b) => {
      let {
        element: m
      } = b;
      g?.removeChild(m);
    });
  }
};
function gb(r) {
  r.documentElement.getAttribute("xmlns:w") === "urn:schemas-microsoft-com:office:word" && mb(r);
}
const pb = [gb, cb], bb = (r) => {
  r.documentElement && pb.forEach((e) => {
    e(r);
  });
}, vb = kt("quill:clipboard"), xb = [[Node.TEXT_NODE, Ob], [Node.TEXT_NODE, qo], ["br", Tb], [Node.ELEMENT_NODE, qo], [Node.ELEMENT_NODE, Sb], [Node.ELEMENT_NODE, Eb], [Node.ELEMENT_NODE, Lb], ["li", kb], ["ol, ul", _b], ["pre", Cb], ["tr", Ib], ["b", qi("bold")], ["i", qi("italic")], ["strike", qi("strike")], ["style", Ab]], yb = [Yp, gc].reduce((r, e) => (r[e.keyName] = e, r), {}), Oo = [hc, ga, ma, bc, yc, Nc].reduce((r, e) => (r[e.keyName] = e, r), {});
class wb extends gt {
  static DEFAULTS = {
    matchers: []
  };
  constructor(e, t) {
    super(e, t), this.quill.root.addEventListener("copy", (n) => this.onCaptureCopy(n, !1)), this.quill.root.addEventListener("cut", (n) => this.onCaptureCopy(n, !0)), this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)), this.matchers = [], xb.concat(this.options.matchers ?? []).forEach((n) => {
      let [s, i] = n;
      this.addMatcher(s, i);
    });
  }
  addMatcher(e, t) {
    this.matchers.push([e, t]);
  }
  convert(e) {
    let {
      html: t,
      text: n
    } = e, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (s[De.blotName])
      return new U().insert(n || "", {
        [De.blotName]: s[De.blotName]
      });
    if (!t)
      return new U().insert(n || "", s);
    const i = this.convertHTML(t);
    return Nn(i, `
`) && (i.ops[i.ops.length - 1].attributes == null || s.table) ? i.compose(new U().retain(i.length() - 1).delete(1)) : i;
  }
  normalizeHTML(e) {
    bb(e);
  }
  convertHTML(e) {
    const t = new DOMParser().parseFromString(e, "text/html");
    this.normalizeHTML(t);
    const n = t.body, s = /* @__PURE__ */ new WeakMap(), [i, a] = this.prepareMatching(n, s);
    return xa(this.quill.scroll, n, i, a, s);
  }
  dangerouslyPasteHTML(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : q.sources.API;
    if (typeof e == "string") {
      const s = this.convert({
        html: e,
        text: ""
      });
      this.quill.setContents(s, t), this.quill.setSelection(0, q.sources.SILENT);
    } else {
      const s = this.convert({
        html: t,
        text: ""
      });
      this.quill.updateContents(new U().retain(e).concat(s), n), this.quill.setSelection(e + s.length(), q.sources.SILENT);
    }
  }
  onCaptureCopy(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (e.defaultPrevented) return;
    e.preventDefault();
    const [n] = this.quill.selection.getRange();
    if (n == null) return;
    const {
      html: s,
      text: i
    } = this.onCopy(n, t);
    e.clipboardData?.setData("text/plain", i), e.clipboardData?.setData("text/html", s), t && va({
      range: n,
      quill: this.quill
    });
  }
  /*
   * https://www.iana.org/assignments/media-types/text/uri-list
   */
  normalizeURIList(e) {
    return e.split(/\r?\n/).filter((t) => t[0] !== "#").join(`
`);
  }
  onCapturePaste(e) {
    if (e.defaultPrevented || !this.quill.isEnabled()) return;
    e.preventDefault();
    const t = this.quill.getSelection(!0);
    if (t == null) return;
    const n = e.clipboardData?.getData("text/html");
    let s = e.clipboardData?.getData("text/plain");
    if (!n && !s) {
      const a = e.clipboardData?.getData("text/uri-list");
      a && (s = this.normalizeURIList(a));
    }
    const i = Array.from(e.clipboardData?.files || []);
    if (!n && i.length > 0) {
      this.quill.uploader.upload(t, i);
      return;
    }
    if (n && i.length > 0) {
      const a = new DOMParser().parseFromString(n, "text/html");
      if (a.body.childElementCount === 1 && a.body.firstElementChild?.tagName === "IMG") {
        this.quill.uploader.upload(t, i);
        return;
      }
    }
    this.onPaste(t, {
      html: n,
      text: s
    });
  }
  onCopy(e) {
    const t = this.quill.getText(e);
    return {
      html: this.quill.getSemanticHTML(e),
      text: t
    };
  }
  onPaste(e, t) {
    let {
      text: n,
      html: s
    } = t;
    const i = this.quill.getFormat(e.index), a = this.convert({
      text: n,
      html: s
    }, i);
    vb.log("onPaste", a, {
      text: n,
      html: s
    });
    const c = new U().retain(e.index).delete(e.length).concat(a);
    this.quill.updateContents(c, q.sources.USER), this.quill.setSelection(c.length() - e.length, q.sources.SILENT), this.quill.scrollSelectionIntoView();
  }
  prepareMatching(e, t) {
    const n = [], s = [];
    return this.matchers.forEach((i) => {
      const [a, c] = i;
      switch (a) {
        case Node.TEXT_NODE:
          s.push(c);
          break;
        case Node.ELEMENT_NODE:
          n.push(c);
          break;
        default:
          Array.from(e.querySelectorAll(a)).forEach((d) => {
            t.has(d) ? t.get(d)?.push(c) : t.set(d, [c]);
          });
          break;
      }
    }), [n, s];
  }
}
function cr(r, e, t, n) {
  return n.query(e) ? r.reduce((s, i) => {
    if (!i.insert) return s;
    if (i.attributes && i.attributes[e])
      return s.push(i);
    const a = t ? {
      [e]: t
    } : {};
    return s.insert(i.insert, {
      ...a,
      ...i.attributes
    });
  }, new U()) : r;
}
function Nn(r, e) {
  let t = "";
  for (let n = r.ops.length - 1; n >= 0 && t.length < e.length; --n) {
    const s = r.ops[n];
    if (typeof s.insert != "string") break;
    t = s.insert + t;
  }
  return t.slice(-1 * e.length) === e;
}
function Rt(r, e) {
  if (!(r instanceof Element)) return !1;
  const t = e.query(r);
  return t && t.prototype instanceof Fe ? !1 : ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(r.tagName.toLowerCase());
}
function Nb(r, e) {
  return r.previousElementSibling && r.nextElementSibling && !Rt(r.previousElementSibling, e) && !Rt(r.nextElementSibling, e);
}
const rs = /* @__PURE__ */ new WeakMap();
function Ec(r) {
  return r == null ? !1 : (rs.has(r) || (r.tagName === "PRE" ? rs.set(r, !0) : rs.set(r, Ec(r.parentNode))), rs.get(r));
}
function xa(r, e, t, n, s) {
  return e.nodeType === e.TEXT_NODE ? n.reduce((i, a) => a(e, i, r), new U()) : e.nodeType === e.ELEMENT_NODE ? Array.from(e.childNodes || []).reduce((i, a) => {
    let c = xa(r, a, t, n, s);
    return a.nodeType === e.ELEMENT_NODE && (c = t.reduce((d, u) => u(a, d, r), c), c = (s.get(a) || []).reduce((d, u) => u(a, d, r), c)), i.concat(c);
  }, new U()) : new U();
}
function qi(r) {
  return (e, t, n) => cr(t, r, !0, n);
}
function Eb(r, e, t) {
  const n = ht.keys(r), s = it.keys(r), i = Ft.keys(r), a = {};
  return n.concat(s).concat(i).forEach((c) => {
    let d = t.query(c, H.ATTRIBUTE);
    d != null && (a[d.attrName] = d.value(r), a[d.attrName]) || (d = yb[c], d != null && (d.attrName === c || d.keyName === c) && (a[d.attrName] = d.value(r) || void 0), d = Oo[c], d != null && (d.attrName === c || d.keyName === c) && (d = Oo[c], a[d.attrName] = d.value(r) || void 0));
  }), Object.entries(a).reduce((c, d) => {
    let [u, g] = d;
    return cr(c, u, g, t);
  }, e);
}
function Sb(r, e, t) {
  const n = t.query(r);
  if (n == null) return e;
  if (n.prototype instanceof Fe) {
    const s = {}, i = n.value(r);
    if (i != null)
      return s[n.blotName] = i, new U().insert(s, n.formats(r, t));
  } else if (n.prototype instanceof gn && !Nn(e, `
`) && e.insert(`
`), "blotName" in n && "formats" in n && typeof n.formats == "function")
    return cr(e, n.blotName, n.formats(r, t), t);
  return e;
}
function Tb(r, e) {
  return Nn(e, `
`) || e.insert(`
`), e;
}
function Cb(r, e, t) {
  const n = t.query("code-block"), s = n && "formats" in n && typeof n.formats == "function" ? n.formats(r, t) : !0;
  return cr(e, "code-block", s, t);
}
function Ab() {
  return new U();
}
function kb(r, e, t) {
  const n = t.query(r);
  if (n == null || // @ts-expect-error
  n.blotName !== "list" || !Nn(e, `
`))
    return e;
  let s = -1, i = r.parentNode;
  for (; i != null; )
    ["OL", "UL"].includes(i.tagName) && (s += 1), i = i.parentNode;
  return s <= 0 ? e : e.reduce((a, c) => c.insert ? c.attributes && typeof c.attributes.indent == "number" ? a.push(c) : a.insert(c.insert, {
    indent: s,
    ...c.attributes || {}
  }) : a, new U());
}
function _b(r, e, t) {
  const n = r;
  let s = n.tagName === "OL" ? "ordered" : "bullet";
  const i = n.getAttribute("data-checked");
  return i && (s = i === "true" ? "checked" : "unchecked"), cr(e, "list", s, t);
}
function qo(r, e, t) {
  if (!Nn(e, `
`)) {
    if (Rt(r, t) && (r.childNodes.length > 0 || r instanceof HTMLParagraphElement))
      return e.insert(`
`);
    if (e.length() > 0 && r.nextSibling) {
      let n = r.nextSibling;
      for (; n != null; ) {
        if (Rt(n, t))
          return e.insert(`
`);
        const s = t.query(n);
        if (s && s.prototype instanceof Ve)
          return e.insert(`
`);
        n = n.firstChild;
      }
    }
  }
  return e;
}
function Lb(r, e, t) {
  const n = {}, s = r.style || {};
  return s.fontStyle === "italic" && (n.italic = !0), s.textDecoration === "underline" && (n.underline = !0), s.textDecoration === "line-through" && (n.strike = !0), (s.fontWeight?.startsWith("bold") || // @ts-expect-error Fix me later
  parseInt(s.fontWeight, 10) >= 700) && (n.bold = !0), e = Object.entries(n).reduce((i, a) => {
    let [c, d] = a;
    return cr(i, c, d, t);
  }, e), parseFloat(s.textIndent || 0) > 0 ? new U().insert("	").concat(e) : e;
}
function Ib(r, e, t) {
  const n = r.parentElement?.tagName === "TABLE" ? r.parentElement : r.parentElement?.parentElement;
  if (n != null) {
    const i = Array.from(n.querySelectorAll("tr")).indexOf(r) + 1;
    return cr(e, "table", i, t);
  }
  return e;
}
function Ob(r, e, t) {
  let n = r.data;
  if (r.parentElement?.tagName === "O:P")
    return e.insert(n.trim());
  if (!Ec(r)) {
    if (n.trim().length === 0 && n.includes(`
`) && !Nb(r, t))
      return e;
    n = n.replace(/[^\S\u00a0]/g, " "), n = n.replace(/ {2,}/g, " "), (r.previousSibling == null && r.parentElement != null && Rt(r.parentElement, t) || r.previousSibling instanceof Element && Rt(r.previousSibling, t)) && (n = n.replace(/^ /, "")), (r.nextSibling == null && r.parentElement != null && Rt(r.parentElement, t) || r.nextSibling instanceof Element && Rt(r.nextSibling, t)) && (n = n.replace(/ $/, "")), n = n.replaceAll(" ", " ");
  }
  return e.insert(n);
}
class qb extends gt {
  static DEFAULTS = {
    delay: 1e3,
    maxStack: 100,
    userOnly: !1
  };
  lastRecorded = 0;
  ignoreChange = !1;
  stack = {
    undo: [],
    redo: []
  };
  currentRange = null;
  constructor(e, t) {
    super(e, t), this.quill.on(q.events.EDITOR_CHANGE, (n, s, i, a) => {
      n === q.events.SELECTION_CHANGE ? s && a !== q.sources.SILENT && (this.currentRange = s) : n === q.events.TEXT_CHANGE && (this.ignoreChange || (!this.options.userOnly || a === q.sources.USER ? this.record(s, i) : this.transform(s)), this.currentRange = Xi(this.currentRange, s));
    }), this.quill.keyboard.addBinding({
      key: "z",
      shortKey: !0
    }, this.undo.bind(this)), this.quill.keyboard.addBinding({
      key: ["z", "Z"],
      shortKey: !0,
      shiftKey: !0
    }, this.redo.bind(this)), /Win/i.test(navigator.platform) && this.quill.keyboard.addBinding({
      key: "y",
      shortKey: !0
    }, this.redo.bind(this)), this.quill.root.addEventListener("beforeinput", (n) => {
      n.inputType === "historyUndo" ? (this.undo(), n.preventDefault()) : n.inputType === "historyRedo" && (this.redo(), n.preventDefault());
    });
  }
  change(e, t) {
    if (this.stack[e].length === 0) return;
    const n = this.stack[e].pop();
    if (!n) return;
    const s = this.quill.getContents(), i = n.delta.invert(s);
    this.stack[t].push({
      delta: i,
      range: Xi(n.range, i)
    }), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(n.delta, q.sources.USER), this.ignoreChange = !1, this.restoreSelection(n);
  }
  clear() {
    this.stack = {
      undo: [],
      redo: []
    };
  }
  cutoff() {
    this.lastRecorded = 0;
  }
  record(e, t) {
    if (e.ops.length === 0) return;
    this.stack.redo = [];
    let n = e.invert(t), s = this.currentRange;
    const i = Date.now();
    if (
      // @ts-expect-error Fix me later
      this.lastRecorded + this.options.delay > i && this.stack.undo.length > 0
    ) {
      const a = this.stack.undo.pop();
      a && (n = n.compose(a.delta), s = a.range);
    } else
      this.lastRecorded = i;
    n.length() !== 0 && (this.stack.undo.push({
      delta: n,
      range: s
    }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift());
  }
  redo() {
    this.change("redo", "undo");
  }
  transform(e) {
    Ro(this.stack.undo, e), Ro(this.stack.redo, e);
  }
  undo() {
    this.change("undo", "redo");
  }
  restoreSelection(e) {
    if (e.range)
      this.quill.setSelection(e.range, q.sources.USER);
    else {
      const t = Mb(this.quill.scroll, e.delta);
      this.quill.setSelection(t, q.sources.USER);
    }
  }
}
function Ro(r, e) {
  let t = e;
  for (let n = r.length - 1; n >= 0; n -= 1) {
    const s = r[n];
    r[n] = {
      delta: t.transform(s.delta, !0),
      range: s.range && Xi(s.range, t)
    }, t = s.delta.transform(t), r[n].delta.length() === 0 && r.splice(n, 1);
  }
}
function Rb(r, e) {
  const t = e.ops[e.ops.length - 1];
  return t == null ? !1 : t.insert != null ? typeof t.insert == "string" && t.insert.endsWith(`
`) : t.attributes != null ? Object.keys(t.attributes).some((n) => r.query(n, H.BLOCK) != null) : !1;
}
function Mb(r, e) {
  const t = e.reduce((s, i) => s + (i.delete || 0), 0);
  let n = e.length() - t;
  return Rb(r, e) && (n -= 1), n;
}
function Xi(r, e) {
  if (!r) return r;
  const t = e.transformPosition(r.index), n = e.transformPosition(r.index + r.length);
  return {
    index: t,
    length: n - t
  };
}
class Sc extends gt {
  constructor(e, t) {
    super(e, t), e.root.addEventListener("drop", (n) => {
      n.preventDefault();
      let s = null;
      if (document.caretRangeFromPoint)
        s = document.caretRangeFromPoint(n.clientX, n.clientY);
      else if (document.caretPositionFromPoint) {
        const a = document.caretPositionFromPoint(n.clientX, n.clientY);
        s = document.createRange(), s.setStart(a.offsetNode, a.offset), s.setEnd(a.offsetNode, a.offset);
      }
      const i = s && e.selection.normalizeNative(s);
      if (i) {
        const a = e.selection.normalizedToRange(i);
        n.dataTransfer?.files && this.upload(a, n.dataTransfer.files);
      }
    });
  }
  upload(e, t) {
    const n = [];
    Array.from(t).forEach((s) => {
      s && this.options.mimetypes?.includes(s.type) && n.push(s);
    }), n.length > 0 && this.options.handler.call(this, e, n);
  }
}
Sc.DEFAULTS = {
  mimetypes: ["image/png", "image/jpeg"],
  handler(r, e) {
    if (!this.quill.scroll.query("image"))
      return;
    const t = e.map((n) => new Promise((s) => {
      const i = new FileReader();
      i.onload = () => {
        s(i.result);
      }, i.readAsDataURL(n);
    }));
    Promise.all(t).then((n) => {
      const s = n.reduce((i, a) => i.insert({
        image: a
      }), new U().retain(r.index).delete(r.length));
      this.quill.updateContents(s, F.sources.USER), this.quill.setSelection(r.index + n.length, F.sources.SILENT);
    });
  }
};
const Db = ["insertText", "insertReplacementText"];
class Bb extends gt {
  constructor(e, t) {
    super(e, t), e.root.addEventListener("beforeinput", (n) => {
      this.handleBeforeInput(n);
    }), /Android/i.test(navigator.userAgent) || e.on(q.events.COMPOSITION_BEFORE_START, () => {
      this.handleCompositionStart();
    });
  }
  deleteRange(e) {
    va({
      range: e,
      quill: this.quill
    });
  }
  replaceText(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    if (e.length === 0) return !1;
    if (t) {
      const n = this.quill.getFormat(e.index, 1);
      this.deleteRange(e), this.quill.updateContents(new U().retain(e.index).insert(t, n), q.sources.USER);
    } else
      this.deleteRange(e);
    return this.quill.setSelection(e.index + t.length, 0, q.sources.SILENT), !0;
  }
  handleBeforeInput(e) {
    if (this.quill.composition.isComposing || e.defaultPrevented || !Db.includes(e.inputType))
      return;
    const t = e.getTargetRanges ? e.getTargetRanges()[0] : null;
    if (!t || t.collapsed === !0)
      return;
    const n = zb(e);
    if (n == null)
      return;
    const s = this.quill.selection.normalizeNative(t), i = s ? this.quill.selection.normalizedToRange(s) : null;
    i && this.replaceText(i, n) && e.preventDefault();
  }
  handleCompositionStart() {
    const e = this.quill.getSelection();
    e && this.replaceText(e);
  }
}
function zb(r) {
  return typeof r.data == "string" ? r.data : r.dataTransfer?.types.includes("text/plain") ? r.dataTransfer.getData("text/plain") : null;
}
const $b = /Mac/i.test(navigator.platform), Pb = 100, jb = (r) => !!(r.key === "ArrowLeft" || r.key === "ArrowRight" || // RTL scripts or moving from the end of the previous line
r.key === "ArrowUp" || r.key === "ArrowDown" || r.key === "Home" || $b && r.key === "a" && r.ctrlKey === !0);
class Fb extends gt {
  isListening = !1;
  selectionChangeDeadline = 0;
  constructor(e, t) {
    super(e, t), this.handleArrowKeys(), this.handleNavigationShortcuts();
  }
  handleArrowKeys() {
    this.quill.keyboard.addBinding({
      key: ["ArrowLeft", "ArrowRight"],
      offset: 0,
      shiftKey: null,
      handler(e, t) {
        let {
          line: n,
          event: s
        } = t;
        if (!(n instanceof rt) || !n.uiNode)
          return !0;
        const i = getComputedStyle(n.domNode).direction === "rtl";
        return i && s.key !== "ArrowRight" || !i && s.key !== "ArrowLeft" ? !0 : (this.quill.setSelection(e.index - 1, e.length + (s.shiftKey ? 1 : 0), q.sources.USER), !1);
      }
    });
  }
  handleNavigationShortcuts() {
    this.quill.root.addEventListener("keydown", (e) => {
      !e.defaultPrevented && jb(e) && this.ensureListeningToSelectionChange();
    });
  }
  /**
   * We only listen to the `selectionchange` event when
   * there is an intention of moving the caret to the beginning using shortcuts.
   * This is primarily implemented to prevent infinite loops, as we are changing
   * the selection within the handler of a `selectionchange` event.
   */
  ensureListeningToSelectionChange() {
    if (this.selectionChangeDeadline = Date.now() + Pb, this.isListening) return;
    this.isListening = !0;
    const e = () => {
      this.isListening = !1, Date.now() <= this.selectionChangeDeadline && this.handleSelectionChange();
    };
    document.addEventListener("selectionchange", e, {
      once: !0
    });
  }
  handleSelectionChange() {
    const e = document.getSelection();
    if (!e) return;
    const t = e.getRangeAt(0);
    if (t.collapsed !== !0 || t.startOffset !== 0) return;
    const n = this.quill.scroll.find(t.startContainer);
    if (!(n instanceof rt) || !n.uiNode) return;
    const s = document.createRange();
    s.setStartAfter(n.uiNode), s.setEndAfter(n.uiNode), e.removeAllRanges(), e.addRange(s);
  }
}
q.register({
  "blots/block": Se,
  "blots/block/embed": Ve,
  "blots/break": at,
  "blots/container": or,
  "blots/cursor": et,
  "blots/embed": fa,
  "blots/inline": Re,
  "blots/scroll": Zp,
  "blots/text": nt,
  "modules/clipboard": wb,
  "modules/history": qb,
  "modules/keyboard": As,
  "modules/uploader": Sc,
  "modules/input": Bb,
  "modules/uiNode": Fb
});
class Ub extends it {
  add(e, t) {
    let n = 0;
    if (t === "+1" || t === "-1") {
      const s = this.value(e) || 0;
      n = t === "+1" ? s + 1 : s - 1;
    } else typeof t == "number" && (n = t);
    return n === 0 ? (this.remove(e), !0) : super.add(e, n.toString());
  }
  canAdd(e, t) {
    return super.canAdd(e, t) || super.canAdd(e, parseInt(t, 10));
  }
  value(e) {
    return parseInt(super.value(e), 10) || void 0;
  }
}
const Hb = new Ub("indent", "ql-indent", {
  scope: H.BLOCK,
  // @ts-expect-error
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});
class Gb extends Se {
  static blotName = "blockquote";
  static tagName = "blockquote";
}
class Vb extends Se {
  static blotName = "header";
  static tagName = ["H1", "H2", "H3", "H4", "H5", "H6"];
  static formats(e) {
    return this.tagName.indexOf(e.tagName) + 1;
  }
}
class En extends or {
}
En.blotName = "list-container";
En.tagName = "OL";
class Sn extends Se {
  static create(e) {
    const t = super.create();
    return t.setAttribute("data-list", e), t;
  }
  static formats(e) {
    return e.getAttribute("data-list") || void 0;
  }
  static register() {
    q.register(En);
  }
  constructor(e, t) {
    super(e, t);
    const n = t.ownerDocument.createElement("span"), s = (i) => {
      if (!e.isEnabled()) return;
      const a = this.statics.formats(t, e);
      a === "checked" ? (this.format("list", "unchecked"), i.preventDefault()) : a === "unchecked" && (this.format("list", "checked"), i.preventDefault());
    };
    n.addEventListener("mousedown", s), n.addEventListener("touchstart", s), this.attachUI(n);
  }
  format(e, t) {
    e === this.statics.blotName && t ? this.domNode.setAttribute("data-list", t) : super.format(e, t);
  }
}
Sn.blotName = "list";
Sn.tagName = "LI";
En.allowedChildren = [Sn];
Sn.requiredContainer = En;
class ya extends Re {
  static blotName = "bold";
  static tagName = ["STRONG", "B"];
  static create() {
    return super.create();
  }
  static formats() {
    return !0;
  }
  optimize(e) {
    super.optimize(e), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
  }
}
class Kb extends ya {
  static blotName = "italic";
  static tagName = ["EM", "I"];
}
class ds extends Re {
  static blotName = "link";
  static tagName = "A";
  static SANITIZED_URL = "about:blank";
  static PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel", "sms"];
  static create(e) {
    const t = super.create(e);
    return t.setAttribute("href", this.sanitize(e)), t.setAttribute("rel", "noopener noreferrer"), t.setAttribute("target", "_blank"), t;
  }
  static formats(e) {
    return e.getAttribute("href");
  }
  static sanitize(e) {
    return Tc(e, this.PROTOCOL_WHITELIST) ? e : this.SANITIZED_URL;
  }
  format(e, t) {
    e !== this.statics.blotName || !t ? super.format(e, t) : this.domNode.setAttribute("href", this.constructor.sanitize(t));
  }
}
function Tc(r, e) {
  const t = document.createElement("a");
  t.href = r;
  const n = t.href.slice(0, t.href.indexOf(":"));
  return e.indexOf(n) > -1;
}
class Wb extends Re {
  static blotName = "script";
  static tagName = ["SUB", "SUP"];
  static create(e) {
    return e === "super" ? document.createElement("sup") : e === "sub" ? document.createElement("sub") : super.create(e);
  }
  static formats(e) {
    if (e.tagName === "SUB") return "sub";
    if (e.tagName === "SUP") return "super";
  }
}
class Zb extends ya {
  static blotName = "strike";
  static tagName = ["S", "STRIKE"];
}
class Yb extends Re {
  static blotName = "underline";
  static tagName = "U";
}
class Xb extends fa {
  static blotName = "formula";
  static className = "ql-formula";
  static tagName = "SPAN";
  static create(e) {
    if (window.katex == null)
      throw new Error("Formula module requires KaTeX.");
    const t = super.create(e);
    return typeof e == "string" && (window.katex.render(e, t, {
      throwOnError: !1,
      errorColor: "#f00"
    }), t.setAttribute("data-value", e)), t;
  }
  static value(e) {
    return e.getAttribute("data-value");
  }
  html() {
    const {
      formula: e
    } = this.value();
    return `<span>${e}</span>`;
  }
}
const Mo = ["alt", "height", "width"];
class Qb extends Fe {
  static blotName = "image";
  static tagName = "IMG";
  static create(e) {
    const t = super.create(e);
    return typeof e == "string" && t.setAttribute("src", this.sanitize(e)), t;
  }
  static formats(e) {
    return Mo.reduce((t, n) => (e.hasAttribute(n) && (t[n] = e.getAttribute(n)), t), {});
  }
  static match(e) {
    return /\.(jpe?g|gif|png)$/.test(e) || /^data:image\/.+;base64/.test(e);
  }
  static sanitize(e) {
    return Tc(e, ["http", "https", "data"]) ? e : "//:0";
  }
  static value(e) {
    return e.getAttribute("src");
  }
  format(e, t) {
    Mo.indexOf(e) > -1 ? t ? this.domNode.setAttribute(e, t) : this.domNode.removeAttribute(e) : super.format(e, t);
  }
}
const Do = ["height", "width"];
class Jb extends Ve {
  static blotName = "video";
  static className = "ql-video";
  static tagName = "IFRAME";
  static create(e) {
    const t = super.create(e);
    return t.setAttribute("frameborder", "0"), t.setAttribute("allowfullscreen", "true"), t.setAttribute("src", this.sanitize(e)), t;
  }
  static formats(e) {
    return Do.reduce((t, n) => (e.hasAttribute(n) && (t[n] = e.getAttribute(n)), t), {});
  }
  static sanitize(e) {
    return ds.sanitize(e);
  }
  static value(e) {
    return e.getAttribute("src");
  }
  format(e, t) {
    Do.indexOf(e) > -1 ? t ? this.domNode.setAttribute(e, t) : this.domNode.removeAttribute(e) : super.format(e, t);
  }
  html() {
    const {
      video: e
    } = this.value();
    return `<a href="${e}">${e}</a>`;
  }
}
const rn = new it("code-token", "hljs", {
  scope: H.INLINE
});
class Tt extends Re {
  static formats(e, t) {
    for (; e != null && e !== t.domNode; ) {
      if (e.classList && e.classList.contains(De.className))
        return super.formats(e, t);
      e = e.parentNode;
    }
  }
  constructor(e, t, n) {
    super(e, t, n), rn.add(this.domNode, n);
  }
  format(e, t) {
    e !== Tt.blotName ? super.format(e, t) : t ? rn.add(this.domNode, t) : (rn.remove(this.domNode), this.domNode.classList.remove(this.statics.className));
  }
  optimize() {
    super.optimize(...arguments), rn.value(this.domNode) || this.unwrap();
  }
}
Tt.blotName = "code-token";
Tt.className = "ql-token";
class Ge extends De {
  static create(e) {
    const t = super.create(e);
    return typeof e == "string" && t.setAttribute("data-language", e), t;
  }
  static formats(e) {
    return e.getAttribute("data-language") || "plain";
  }
  static register() {
  }
  // Syntax module will register
  format(e, t) {
    e === this.statics.blotName && t ? this.domNode.setAttribute("data-language", t) : super.format(e, t);
  }
  replaceWith(e, t) {
    return this.formatAt(0, this.length(), Tt.blotName, !1), super.replaceWith(e, t);
  }
}
class ln extends lr {
  attach() {
    super.attach(), this.forceNext = !1, this.scroll.emitMount(this);
  }
  format(e, t) {
    e === Ge.blotName && (this.forceNext = !0, this.children.forEach((n) => {
      n.format(e, t);
    }));
  }
  formatAt(e, t, n, s) {
    n === Ge.blotName && (this.forceNext = !0), super.formatAt(e, t, n, s);
  }
  highlight(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.children.head == null) return;
    const s = `${Array.from(this.domNode.childNodes).filter((a) => a !== this.uiNode).map((a) => a.textContent).join(`
`)}
`, i = Ge.formats(this.children.head.domNode);
    if (t || this.forceNext || this.cachedText !== s) {
      if (s.trim().length > 0 || this.cachedText == null) {
        const a = this.children.reduce((d, u) => d.concat(dc(u, !1)), new U()), c = e(s, i);
        a.diff(c).reduce((d, u) => {
          let {
            retain: g,
            attributes: b
          } = u;
          return g ? (b && Object.keys(b).forEach((m) => {
            [Ge.blotName, Tt.blotName].includes(m) && this.formatAt(d, g, m, b[m]);
          }), d + g) : d;
        }, 0);
      }
      this.cachedText = s, this.forceNext = !1;
    }
  }
  html(e, t) {
    const [n] = this.children.find(e);
    return `<pre data-language="${n ? Ge.formats(n.domNode) : "plain"}">
${Cs(this.code(e, t))}
</pre>`;
  }
  optimize(e) {
    if (super.optimize(e), this.parent != null && this.children.head != null && this.uiNode != null) {
      const t = Ge.formats(this.children.head.domNode);
      t !== this.uiNode.value && (this.uiNode.value = t);
    }
  }
}
ln.allowedChildren = [Ge];
Ge.requiredContainer = ln;
Ge.allowedChildren = [Tt, et, nt, at];
const e0 = (r, e, t) => {
  if (typeof r.versionString == "string") {
    const n = r.versionString.split(".")[0];
    if (parseInt(n, 10) >= 11)
      return r.highlight(t, {
        language: e
      }).value;
  }
  return r.highlight(e, t).value;
};
class Cc extends gt {
  static register() {
    q.register(Tt, !0), q.register(Ge, !0), q.register(ln, !0);
  }
  constructor(e, t) {
    if (super(e, t), this.options.hljs == null)
      throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
    this.languages = this.options.languages.reduce((n, s) => {
      let {
        key: i
      } = s;
      return n[i] = !0, n;
    }, {}), this.highlightBlot = this.highlightBlot.bind(this), this.initListener(), this.initTimer();
  }
  initListener() {
    this.quill.on(q.events.SCROLL_BLOT_MOUNT, (e) => {
      if (!(e instanceof ln)) return;
      const t = this.quill.root.ownerDocument.createElement("select");
      this.options.languages.forEach((n) => {
        let {
          key: s,
          label: i
        } = n;
        const a = t.ownerDocument.createElement("option");
        a.textContent = i, a.setAttribute("value", s), t.appendChild(a);
      }), t.addEventListener("change", () => {
        e.format(Ge.blotName, t.value), this.quill.root.focus(), this.highlight(e, !0);
      }), e.uiNode == null && (e.attachUI(t), e.children.head && (t.value = Ge.formats(e.children.head.domNode)));
    });
  }
  initTimer() {
    let e = null;
    this.quill.on(q.events.SCROLL_OPTIMIZE, () => {
      e && clearTimeout(e), e = setTimeout(() => {
        this.highlight(), e = null;
      }, this.options.interval);
    });
  }
  highlight() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.quill.selection.composing) return;
    this.quill.update(q.sources.USER);
    const n = this.quill.getSelection();
    (e == null ? this.quill.scroll.descendants(ln) : [e]).forEach((i) => {
      i.highlight(this.highlightBlot, t);
    }), this.quill.update(q.sources.SILENT), n != null && this.quill.setSelection(n, q.sources.SILENT);
  }
  highlightBlot(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "plain";
    if (t = this.languages[t] ? t : "plain", t === "plain")
      return Cs(e).split(`
`).reduce((s, i, a) => (a !== 0 && s.insert(`
`, {
        [De.blotName]: t
      }), s.insert(i)), new U());
    const n = this.quill.root.ownerDocument.createElement("div");
    return n.classList.add(De.className), n.innerHTML = e0(this.options.hljs, t, e), xa(this.quill.scroll, n, [(s, i) => {
      const a = rn.value(s);
      return a ? i.compose(new U().retain(i.length(), {
        [Tt.blotName]: a
      })) : i;
    }], [(s, i) => s.data.split(`
`).reduce((a, c, d) => (d !== 0 && a.insert(`
`, {
      [De.blotName]: t
    }), a.insert(c)), i)], /* @__PURE__ */ new WeakMap());
  }
}
Cc.DEFAULTS = {
  hljs: window.hljs,
  interval: 1e3,
  languages: [{
    key: "plain",
    label: "Plain"
  }, {
    key: "bash",
    label: "Bash"
  }, {
    key: "cpp",
    label: "C++"
  }, {
    key: "cs",
    label: "C#"
  }, {
    key: "css",
    label: "CSS"
  }, {
    key: "diff",
    label: "Diff"
  }, {
    key: "xml",
    label: "HTML/XML"
  }, {
    key: "java",
    label: "Java"
  }, {
    key: "javascript",
    label: "JavaScript"
  }, {
    key: "markdown",
    label: "Markdown"
  }, {
    key: "php",
    label: "PHP"
  }, {
    key: "python",
    label: "Python"
  }, {
    key: "ruby",
    label: "Ruby"
  }, {
    key: "sql",
    label: "SQL"
  }]
};
class tt extends Se {
  static blotName = "table";
  static tagName = "TD";
  static create(e) {
    const t = super.create();
    return e ? t.setAttribute("data-row", e) : t.setAttribute("data-row", wa()), t;
  }
  static formats(e) {
    if (e.hasAttribute("data-row"))
      return e.getAttribute("data-row");
  }
  cellOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  format(e, t) {
    e === tt.blotName && t ? this.domNode.setAttribute("data-row", t) : super.format(e, t);
  }
  row() {
    return this.parent;
  }
  rowOffset() {
    return this.row() ? this.row().rowOffset() : -1;
  }
  table() {
    return this.row() && this.row().table();
  }
}
class tr extends or {
  static blotName = "table-row";
  static tagName = "TR";
  checkMerge() {
    if (super.checkMerge() && this.next.children.head != null) {
      const e = this.children.head.formats(), t = this.children.tail.formats(), n = this.next.children.head.formats(), s = this.next.children.tail.formats();
      return e.table === t.table && e.table === n.table && e.table === s.table;
    }
    return !1;
  }
  optimize(e) {
    super.optimize(e), this.children.forEach((t) => {
      if (t.next == null) return;
      const n = t.formats(), s = t.next.formats();
      if (n.table !== s.table) {
        const i = this.splitAfter(t);
        i && i.optimize(), this.prev && this.prev.optimize();
      }
    });
  }
  rowOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  table() {
    return this.parent && this.parent.parent;
  }
}
class Dt extends or {
  static blotName = "table-body";
  static tagName = "TBODY";
}
class us extends or {
  static blotName = "table-container";
  static tagName = "TABLE";
  balanceCells() {
    const e = this.descendants(tr), t = e.reduce((n, s) => Math.max(s.children.length, n), 0);
    e.forEach((n) => {
      new Array(t - n.children.length).fill(0).forEach(() => {
        let s;
        n.children.head != null && (s = tt.formats(n.children.head.domNode));
        const i = this.scroll.create(tt.blotName, s);
        n.appendChild(i), i.optimize();
      });
    });
  }
  cells(e) {
    return this.rows().map((t) => t.children.at(e));
  }
  deleteColumn(e) {
    const [t] = this.descendant(Dt);
    t == null || t.children.head == null || t.children.forEach((n) => {
      const s = n.children.at(e);
      s?.remove();
    });
  }
  insertColumn(e) {
    const [t] = this.descendant(Dt);
    t == null || t.children.head == null || t.children.forEach((n) => {
      const s = n.children.at(e), i = tt.formats(n.children.head.domNode), a = this.scroll.create(tt.blotName, i);
      n.insertBefore(a, s);
    });
  }
  insertRow(e) {
    const [t] = this.descendant(Dt);
    if (t == null || t.children.head == null) return;
    const n = wa(), s = this.scroll.create(tr.blotName);
    t.children.head.children.forEach(() => {
      const a = this.scroll.create(tt.blotName, n);
      s.appendChild(a);
    });
    const i = t.children.at(e);
    t.insertBefore(s, i);
  }
  rows() {
    const e = this.children.head;
    return e == null ? [] : e.children.map((t) => t);
  }
}
us.allowedChildren = [Dt];
Dt.requiredContainer = us;
Dt.allowedChildren = [tr];
tr.requiredContainer = Dt;
tr.allowedChildren = [tt];
tt.requiredContainer = tr;
function wa() {
  return `row-${Math.random().toString(36).slice(2, 6)}`;
}
class t0 extends gt {
  static register() {
    q.register(tt), q.register(tr), q.register(Dt), q.register(us);
  }
  constructor() {
    super(...arguments), this.listenBalanceCells();
  }
  balanceTables() {
    this.quill.scroll.descendants(us).forEach((e) => {
      e.balanceCells();
    });
  }
  deleteColumn() {
    const [e, , t] = this.getTable();
    t != null && (e.deleteColumn(t.cellOffset()), this.quill.update(q.sources.USER));
  }
  deleteRow() {
    const [, e] = this.getTable();
    e != null && (e.remove(), this.quill.update(q.sources.USER));
  }
  deleteTable() {
    const [e] = this.getTable();
    if (e == null) return;
    const t = e.offset();
    e.remove(), this.quill.update(q.sources.USER), this.quill.setSelection(t, q.sources.SILENT);
  }
  getTable() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.quill.getSelection();
    if (e == null) return [null, null, null, -1];
    const [t, n] = this.quill.getLine(e.index);
    if (t == null || t.statics.blotName !== tt.blotName)
      return [null, null, null, -1];
    const s = t.parent;
    return [s.parent.parent, s, t, n];
  }
  insertColumn(e) {
    const t = this.quill.getSelection();
    if (!t) return;
    const [n, s, i] = this.getTable(t);
    if (i == null) return;
    const a = i.cellOffset();
    n.insertColumn(a + e), this.quill.update(q.sources.USER);
    let c = s.rowOffset();
    e === 0 && (c += 1), this.quill.setSelection(t.index + c, t.length, q.sources.SILENT);
  }
  insertColumnLeft() {
    this.insertColumn(0);
  }
  insertColumnRight() {
    this.insertColumn(1);
  }
  insertRow(e) {
    const t = this.quill.getSelection();
    if (!t) return;
    const [n, s, i] = this.getTable(t);
    if (i == null) return;
    const a = s.rowOffset();
    n.insertRow(a + e), this.quill.update(q.sources.USER), e > 0 ? this.quill.setSelection(t, q.sources.SILENT) : this.quill.setSelection(t.index + s.children.length, t.length, q.sources.SILENT);
  }
  insertRowAbove() {
    this.insertRow(0);
  }
  insertRowBelow() {
    this.insertRow(1);
  }
  insertTable(e, t) {
    const n = this.quill.getSelection();
    if (n == null) return;
    const s = new Array(e).fill(0).reduce((i) => {
      const a = new Array(t).fill(`
`).join("");
      return i.insert(a, {
        table: wa()
      });
    }, new U().retain(n.index));
    this.quill.updateContents(s, q.sources.USER), this.quill.setSelection(n.index, q.sources.SILENT), this.balanceTables();
  }
  listenBalanceCells() {
    this.quill.on(q.events.SCROLL_OPTIMIZE, (e) => {
      e.some((t) => ["TD", "TR", "TBODY", "TABLE"].includes(t.target.tagName) ? (this.quill.once(q.events.TEXT_CHANGE, (n, s, i) => {
        i === q.sources.USER && this.balanceTables();
      }), !0) : !1);
    });
  }
}
const Bo = kt("quill:toolbar");
class Na extends gt {
  constructor(e, t) {
    if (super(e, t), Array.isArray(this.options.container)) {
      const n = document.createElement("div");
      n.setAttribute("role", "toolbar"), r0(n, this.options.container), e.container?.parentNode?.insertBefore(n, e.container), this.container = n;
    } else typeof this.options.container == "string" ? this.container = document.querySelector(this.options.container) : this.container = this.options.container;
    if (!(this.container instanceof HTMLElement)) {
      Bo.error("Container required for toolbar", this.options);
      return;
    }
    this.container.classList.add("ql-toolbar"), this.controls = [], this.handlers = {}, this.options.handlers && Object.keys(this.options.handlers).forEach((n) => {
      const s = this.options.handlers?.[n];
      s && this.addHandler(n, s);
    }), Array.from(this.container.querySelectorAll("button, select")).forEach((n) => {
      this.attach(n);
    }), this.quill.on(q.events.EDITOR_CHANGE, () => {
      const [n] = this.quill.selection.getRange();
      this.update(n);
    });
  }
  addHandler(e, t) {
    this.handlers[e] = t;
  }
  attach(e) {
    let t = Array.from(e.classList).find((s) => s.indexOf("ql-") === 0);
    if (!t) return;
    if (t = t.slice(3), e.tagName === "BUTTON" && e.setAttribute("type", "button"), this.handlers[t] == null && this.quill.scroll.query(t) == null) {
      Bo.warn("ignoring attaching to nonexistent format", t, e);
      return;
    }
    const n = e.tagName === "SELECT" ? "change" : "click";
    e.addEventListener(n, (s) => {
      let i;
      if (e.tagName === "SELECT") {
        if (e.selectedIndex < 0) return;
        const c = e.options[e.selectedIndex];
        c.hasAttribute("selected") ? i = !1 : i = c.value || !1;
      } else
        e.classList.contains("ql-active") ? i = !1 : i = e.value || !e.hasAttribute("value"), s.preventDefault();
      this.quill.focus();
      const [a] = this.quill.selection.getRange();
      if (this.handlers[t] != null)
        this.handlers[t].call(this, i);
      else if (
        // @ts-expect-error
        this.quill.scroll.query(t).prototype instanceof Fe
      ) {
        if (i = prompt(`Enter ${t}`), !i) return;
        this.quill.updateContents(new U().retain(a.index).delete(a.length).insert({
          [t]: i
        }), q.sources.USER);
      } else
        this.quill.format(t, i, q.sources.USER);
      this.update(a);
    }), this.controls.push([t, e]);
  }
  update(e) {
    const t = e == null ? {} : this.quill.getFormat(e);
    this.controls.forEach((n) => {
      const [s, i] = n;
      if (i.tagName === "SELECT") {
        let a = null;
        if (e == null)
          a = null;
        else if (t[s] == null)
          a = i.querySelector("option[selected]");
        else if (!Array.isArray(t[s])) {
          let c = t[s];
          typeof c == "string" && (c = c.replace(/"/g, '\\"')), a = i.querySelector(`option[value="${c}"]`);
        }
        a == null ? (i.value = "", i.selectedIndex = -1) : a.selected = !0;
      } else if (e == null)
        i.classList.remove("ql-active"), i.setAttribute("aria-pressed", "false");
      else if (i.hasAttribute("value")) {
        const a = t[s], c = a === i.getAttribute("value") || a != null && a.toString() === i.getAttribute("value") || a == null && !i.getAttribute("value");
        i.classList.toggle("ql-active", c), i.setAttribute("aria-pressed", c.toString());
      } else {
        const a = t[s] != null;
        i.classList.toggle("ql-active", a), i.setAttribute("aria-pressed", a.toString());
      }
    });
  }
}
Na.DEFAULTS = {};
function zo(r, e, t) {
  const n = document.createElement("button");
  n.setAttribute("type", "button"), n.classList.add(`ql-${e}`), n.setAttribute("aria-pressed", "false"), t != null ? (n.value = t, n.setAttribute("aria-label", `${e}: ${t}`)) : n.setAttribute("aria-label", e), r.appendChild(n);
}
function r0(r, e) {
  Array.isArray(e[0]) || (e = [e]), e.forEach((t) => {
    const n = document.createElement("span");
    n.classList.add("ql-formats"), t.forEach((s) => {
      if (typeof s == "string")
        zo(n, s);
      else {
        const i = Object.keys(s)[0], a = s[i];
        Array.isArray(a) ? n0(n, i, a) : zo(n, i, a);
      }
    }), r.appendChild(n);
  });
}
function n0(r, e, t) {
  const n = document.createElement("select");
  n.classList.add(`ql-${e}`), t.forEach((s) => {
    const i = document.createElement("option");
    s !== !1 ? i.setAttribute("value", String(s)) : i.setAttribute("selected", "selected"), n.appendChild(i);
  }), r.appendChild(n);
}
Na.DEFAULTS = {
  container: null,
  handlers: {
    clean() {
      const r = this.quill.getSelection();
      if (r != null)
        if (r.length === 0) {
          const e = this.quill.getFormat();
          Object.keys(e).forEach((t) => {
            this.quill.scroll.query(t, H.INLINE) != null && this.quill.format(t, !1, q.sources.USER);
          });
        } else
          this.quill.removeFormat(r.index, r.length, q.sources.USER);
    },
    direction(r) {
      const {
        align: e
      } = this.quill.getFormat();
      r === "rtl" && e == null ? this.quill.format("align", "right", q.sources.USER) : !r && e === "right" && this.quill.format("align", !1, q.sources.USER), this.quill.format("direction", r, q.sources.USER);
    },
    indent(r) {
      const e = this.quill.getSelection(), t = this.quill.getFormat(e), n = parseInt(t.indent || 0, 10);
      if (r === "+1" || r === "-1") {
        let s = r === "+1" ? 1 : -1;
        t.direction === "rtl" && (s *= -1), this.quill.format("indent", n + s, q.sources.USER);
      }
    },
    link(r) {
      r === !0 && (r = prompt("Enter link URL:")), this.quill.format("link", r, q.sources.USER);
    },
    list(r) {
      const e = this.quill.getSelection(), t = this.quill.getFormat(e);
      r === "check" ? t.list === "checked" || t.list === "unchecked" ? this.quill.format("list", !1, q.sources.USER) : this.quill.format("list", "unchecked", q.sources.USER) : this.quill.format("list", r, q.sources.USER);
    }
  }
};
const s0 = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>', i0 = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>', a0 = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>', o0 = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>', l0 = '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>', c0 = '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>', d0 = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>', u0 = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>', $o = '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>', f0 = '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>', h0 = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>', m0 = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>', g0 = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>', p0 = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>', b0 = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', v0 = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', x0 = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>', y0 = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', w0 = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>', N0 = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>', E0 = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>', S0 = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>', T0 = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>', C0 = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>', A0 = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>', k0 = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>', _0 = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>', L0 = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>', I0 = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>', O0 = '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>', q0 = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>', R0 = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>', M0 = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>', bn = {
  align: {
    "": s0,
    center: i0,
    right: a0,
    justify: o0
  },
  background: l0,
  blockquote: c0,
  bold: d0,
  clean: u0,
  code: $o,
  "code-block": $o,
  color: f0,
  direction: {
    "": h0,
    rtl: m0
  },
  formula: g0,
  header: {
    1: p0,
    2: b0,
    3: v0,
    4: x0,
    5: y0,
    6: w0
  },
  italic: N0,
  image: E0,
  indent: {
    "+1": S0,
    "-1": T0
  },
  link: C0,
  list: {
    bullet: A0,
    check: k0,
    ordered: _0
  },
  script: {
    sub: L0,
    super: I0
  },
  strike: O0,
  table: q0,
  underline: R0,
  video: M0
}, D0 = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>';
let Po = 0;
function jo(r, e) {
  r.setAttribute(e, `${r.getAttribute(e) !== "true"}`);
}
class ks {
  constructor(e) {
    this.select = e, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", () => {
      this.togglePicker();
    }), this.label.addEventListener("keydown", (t) => {
      switch (t.key) {
        case "Enter":
          this.togglePicker();
          break;
        case "Escape":
          this.escape(), t.preventDefault();
          break;
      }
    }), this.select.addEventListener("change", this.update.bind(this));
  }
  togglePicker() {
    this.container.classList.toggle("ql-expanded"), jo(this.label, "aria-expanded"), jo(this.options, "aria-hidden");
  }
  buildItem(e) {
    const t = document.createElement("span");
    t.tabIndex = "0", t.setAttribute("role", "button"), t.classList.add("ql-picker-item");
    const n = e.getAttribute("value");
    return n && t.setAttribute("data-value", n), e.textContent && t.setAttribute("data-label", e.textContent), t.addEventListener("click", () => {
      this.selectItem(t, !0);
    }), t.addEventListener("keydown", (s) => {
      switch (s.key) {
        case "Enter":
          this.selectItem(t, !0), s.preventDefault();
          break;
        case "Escape":
          this.escape(), s.preventDefault();
          break;
      }
    }), t;
  }
  buildLabel() {
    const e = document.createElement("span");
    return e.classList.add("ql-picker-label"), e.innerHTML = D0, e.tabIndex = "0", e.setAttribute("role", "button"), e.setAttribute("aria-expanded", "false"), this.container.appendChild(e), e;
  }
  buildOptions() {
    const e = document.createElement("span");
    e.classList.add("ql-picker-options"), e.setAttribute("aria-hidden", "true"), e.tabIndex = "-1", e.id = `ql-picker-options-${Po}`, Po += 1, this.label.setAttribute("aria-controls", e.id), this.options = e, Array.from(this.select.options).forEach((t) => {
      const n = this.buildItem(t);
      e.appendChild(n), t.selected === !0 && this.selectItem(n);
    }), this.container.appendChild(e);
  }
  buildPicker() {
    Array.from(this.select.attributes).forEach((e) => {
      this.container.setAttribute(e.name, e.value);
    }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
  }
  escape() {
    this.close(), setTimeout(() => this.label.focus(), 1);
  }
  close() {
    this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
  }
  selectItem(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const n = this.container.querySelector(".ql-selected");
    e !== n && (n?.classList.remove("ql-selected"), e != null && (e.classList.add("ql-selected"), this.select.selectedIndex = Array.from(e.parentNode.children).indexOf(e), e.hasAttribute("data-value") ? this.label.setAttribute("data-value", e.getAttribute("data-value")) : this.label.removeAttribute("data-value"), e.hasAttribute("data-label") ? this.label.setAttribute("data-label", e.getAttribute("data-label")) : this.label.removeAttribute("data-label"), t && (this.select.dispatchEvent(new Event("change")), this.close())));
  }
  update() {
    let e;
    if (this.select.selectedIndex > -1) {
      const n = (
        // @ts-expect-error Fix me later
        this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex]
      );
      e = this.select.options[this.select.selectedIndex], this.selectItem(n);
    } else
      this.selectItem(null);
    const t = e != null && e !== this.select.querySelector("option[selected]");
    this.label.classList.toggle("ql-active", t);
  }
}
class Ac extends ks {
  constructor(e, t) {
    super(e), this.label.innerHTML = t, this.container.classList.add("ql-color-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0, 7).forEach((n) => {
      n.classList.add("ql-primary");
    });
  }
  buildItem(e) {
    const t = super.buildItem(e);
    return t.style.backgroundColor = e.getAttribute("value") || "", t;
  }
  selectItem(e, t) {
    super.selectItem(e, t);
    const n = this.label.querySelector(".ql-color-label"), s = e && e.getAttribute("data-value") || "";
    n && (n.tagName === "line" ? n.style.stroke = s : n.style.fill = s);
  }
}
class kc extends ks {
  constructor(e, t) {
    super(e), this.container.classList.add("ql-icon-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach((n) => {
      n.innerHTML = t[n.getAttribute("data-value") || ""];
    }), this.defaultItem = this.container.querySelector(".ql-selected"), this.selectItem(this.defaultItem);
  }
  selectItem(e, t) {
    super.selectItem(e, t);
    const n = e || this.defaultItem;
    if (n != null) {
      if (this.label.innerHTML === n.innerHTML) return;
      this.label.innerHTML = n.innerHTML;
    }
  }
}
const B0 = (r) => {
  const {
    overflowY: e
  } = getComputedStyle(r, null);
  return e !== "visible" && e !== "clip";
};
class _c {
  constructor(e, t) {
    this.quill = e, this.boundsContainer = t || document.body, this.root = e.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, B0(this.quill.root) && this.quill.root.addEventListener("scroll", () => {
      this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
    }), this.hide();
  }
  hide() {
    this.root.classList.add("ql-hidden");
  }
  position(e) {
    const t = e.left + e.width / 2 - this.root.offsetWidth / 2, n = e.bottom + this.quill.root.scrollTop;
    this.root.style.left = `${t}px`, this.root.style.top = `${n}px`, this.root.classList.remove("ql-flip");
    const s = this.boundsContainer.getBoundingClientRect(), i = this.root.getBoundingClientRect();
    let a = 0;
    if (i.right > s.right && (a = s.right - i.right, this.root.style.left = `${t + a}px`), i.left < s.left && (a = s.left - i.left, this.root.style.left = `${t + a}px`), i.bottom > s.bottom) {
      const c = i.bottom - i.top, d = e.bottom - e.top + c;
      this.root.style.top = `${n - d}px`, this.root.classList.add("ql-flip");
    }
    return a;
  }
  show() {
    this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
  }
}
const z0 = [!1, "center", "right", "justify"], $0 = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], P0 = [!1, "serif", "monospace"], j0 = ["1", "2", "3", !1], F0 = ["small", !1, "large", "huge"];
class Tn extends Mr {
  constructor(e, t) {
    super(e, t);
    const n = (s) => {
      if (!document.body.contains(e.root)) {
        document.body.removeEventListener("click", n);
        return;
      }
      this.tooltip != null && // @ts-expect-error
      !this.tooltip.root.contains(s.target) && // @ts-expect-error
      document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus() && this.tooltip.hide(), this.pickers != null && this.pickers.forEach((i) => {
        i.container.contains(s.target) || i.close();
      });
    };
    e.emitter.listenDOM("click", document.body, n);
  }
  addModule(e) {
    const t = super.addModule(e);
    return e === "toolbar" && this.extendToolbar(t), t;
  }
  buildButtons(e, t) {
    Array.from(e).forEach((n) => {
      (n.getAttribute("class") || "").split(/\s+/).forEach((i) => {
        if (i.startsWith("ql-") && (i = i.slice(3), t[i] != null))
          if (i === "direction")
            n.innerHTML = t[i][""] + t[i].rtl;
          else if (typeof t[i] == "string")
            n.innerHTML = t[i];
          else {
            const a = n.value || "";
            a != null && t[i][a] && (n.innerHTML = t[i][a]);
          }
      });
    });
  }
  buildPickers(e, t) {
    this.pickers = Array.from(e).map((s) => {
      if (s.classList.contains("ql-align") && (s.querySelector("option") == null && Jr(s, z0), typeof t.align == "object"))
        return new kc(s, t.align);
      if (s.classList.contains("ql-background") || s.classList.contains("ql-color")) {
        const i = s.classList.contains("ql-background") ? "background" : "color";
        return s.querySelector("option") == null && Jr(s, $0, i === "background" ? "#ffffff" : "#000000"), new Ac(s, t[i]);
      }
      return s.querySelector("option") == null && (s.classList.contains("ql-font") ? Jr(s, P0) : s.classList.contains("ql-header") ? Jr(s, j0) : s.classList.contains("ql-size") && Jr(s, F0)), new ks(s);
    });
    const n = () => {
      this.pickers.forEach((s) => {
        s.update();
      });
    };
    this.quill.on(F.events.EDITOR_CHANGE, n);
  }
}
Tn.DEFAULTS = Mt({}, Mr.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula() {
          this.quill.theme.tooltip.edit("formula");
        },
        image() {
          let r = this.container.querySelector("input.ql-image[type=file]");
          r == null && (r = document.createElement("input"), r.setAttribute("type", "file"), r.setAttribute("accept", this.quill.uploader.options.mimetypes.join(", ")), r.classList.add("ql-image"), r.addEventListener("change", () => {
            const e = this.quill.getSelection(!0);
            this.quill.uploader.upload(e, r.files), r.value = "";
          }), this.container.appendChild(r)), r.click();
        },
        video() {
          this.quill.theme.tooltip.edit("video");
        }
      }
    }
  }
});
class Lc extends _c {
  constructor(e, t) {
    super(e, t), this.textbox = this.root.querySelector('input[type="text"]'), this.listen();
  }
  listen() {
    this.textbox.addEventListener("keydown", (e) => {
      e.key === "Enter" ? (this.save(), e.preventDefault()) : e.key === "Escape" && (this.cancel(), e.preventDefault());
    });
  }
  cancel() {
    this.hide(), this.restoreFocus();
  }
  edit() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), this.textbox == null) return;
    t != null ? this.textbox.value = t : e !== this.root.getAttribute("data-mode") && (this.textbox.value = "");
    const n = this.quill.getBounds(this.quill.selection.savedRange);
    n != null && this.position(n), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute(`data-${e}`) || ""), this.root.setAttribute("data-mode", e);
  }
  restoreFocus() {
    this.quill.focus({
      preventScroll: !0
    });
  }
  save() {
    let {
      value: e
    } = this.textbox;
    switch (this.root.getAttribute("data-mode")) {
      case "link": {
        const {
          scrollTop: t
        } = this.quill.root;
        this.linkRange ? (this.quill.formatText(this.linkRange, "link", e, F.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", e, F.sources.USER)), this.quill.root.scrollTop = t;
        break;
      }
      case "video":
        e = U0(e);
      // eslint-disable-next-line no-fallthrough
      case "formula": {
        if (!e) break;
        const t = this.quill.getSelection(!0);
        if (t != null) {
          const n = t.index + t.length;
          this.quill.insertEmbed(
            n,
            // @ts-expect-error Fix me later
            this.root.getAttribute("data-mode"),
            e,
            F.sources.USER
          ), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(n + 1, " ", F.sources.USER), this.quill.setSelection(n + 2, F.sources.USER);
        }
        break;
      }
    }
    this.textbox.value = "", this.hide();
  }
}
function U0(r) {
  let e = r.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || r.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  return e ? `${e[1] || "https"}://www.youtube.com/embed/${e[2]}?showinfo=0` : (e = r.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? `${e[1] || "https"}://player.vimeo.com/video/${e[2]}/` : r;
}
function Jr(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  e.forEach((n) => {
    const s = document.createElement("option");
    n === t ? s.setAttribute("selected", "selected") : s.setAttribute("value", String(n)), r.appendChild(s);
  });
}
const H0 = [["bold", "italic", "link"], [{
  header: 1
}, {
  header: 2
}, "blockquote"]];
class G0 extends Lc {
  static TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join("");
  constructor(e, t) {
    super(e, t), this.quill.on(F.events.EDITOR_CHANGE, (n, s, i, a) => {
      if (n === F.events.SELECTION_CHANGE)
        if (s != null && s.length > 0 && a === F.sources.USER) {
          this.show(), this.root.style.left = "0px", this.root.style.width = "", this.root.style.width = `${this.root.offsetWidth}px`;
          const c = this.quill.getLines(s.index, s.length);
          if (c.length === 1) {
            const d = this.quill.getBounds(s);
            d != null && this.position(d);
          } else {
            const d = c[c.length - 1], u = this.quill.getIndex(d), g = Math.min(d.length() - 1, s.index + s.length - u), b = this.quill.getBounds(new er(u, g));
            b != null && this.position(b);
          }
        } else document.activeElement !== this.textbox && this.quill.hasFocus() && this.hide();
    });
  }
  listen() {
    super.listen(), this.root.querySelector(".ql-close").addEventListener("click", () => {
      this.root.classList.remove("ql-editing");
    }), this.quill.on(F.events.SCROLL_OPTIMIZE, () => {
      setTimeout(() => {
        if (this.root.classList.contains("ql-hidden")) return;
        const e = this.quill.getSelection();
        if (e != null) {
          const t = this.quill.getBounds(e);
          t != null && this.position(t);
        }
      }, 1);
    });
  }
  cancel() {
    this.show();
  }
  position(e) {
    const t = super.position(e), n = this.root.querySelector(".ql-tooltip-arrow");
    return n.style.marginLeft = "", t !== 0 && (n.style.marginLeft = `${-1 * t - n.offsetWidth / 2}px`), t;
  }
}
class Ic extends Tn {
  constructor(e, t) {
    t.modules.toolbar != null && t.modules.toolbar.container == null && (t.modules.toolbar.container = H0), super(e, t), this.quill.container.classList.add("ql-bubble");
  }
  extendToolbar(e) {
    this.tooltip = new G0(this.quill, this.options.bounds), e.container != null && (this.tooltip.root.appendChild(e.container), this.buildButtons(e.container.querySelectorAll("button"), bn), this.buildPickers(e.container.querySelectorAll("select"), bn));
  }
}
Ic.DEFAULTS = Mt({}, Tn.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(r) {
          r ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1, q.sources.USER);
        }
      }
    }
  }
});
const V0 = [[{
  header: ["1", "2", "3", !1]
}], ["bold", "italic", "underline", "link"], [{
  list: "ordered"
}, {
  list: "bullet"
}], ["clean"]];
class K0 extends Lc {
  static TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join("");
  preview = this.root.querySelector("a.ql-preview");
  listen() {
    super.listen(), this.root.querySelector("a.ql-action").addEventListener("click", (e) => {
      this.root.classList.contains("ql-editing") ? this.save() : this.edit("link", this.preview.textContent), e.preventDefault();
    }), this.root.querySelector("a.ql-remove").addEventListener("click", (e) => {
      if (this.linkRange != null) {
        const t = this.linkRange;
        this.restoreFocus(), this.quill.formatText(t, "link", !1, F.sources.USER), delete this.linkRange;
      }
      e.preventDefault(), this.hide();
    }), this.quill.on(F.events.SELECTION_CHANGE, (e, t, n) => {
      if (e != null) {
        if (e.length === 0 && n === F.sources.USER) {
          const [s, i] = this.quill.scroll.descendant(ds, e.index);
          if (s != null) {
            this.linkRange = new er(e.index - i, s.length());
            const a = ds.formats(s.domNode);
            this.preview.textContent = a, this.preview.setAttribute("href", a), this.show();
            const c = this.quill.getBounds(this.linkRange);
            c != null && this.position(c);
            return;
          }
        } else
          delete this.linkRange;
        this.hide();
      }
    });
  }
  show() {
    super.show(), this.root.removeAttribute("data-mode");
  }
}
class Oc extends Tn {
  constructor(e, t) {
    t.modules.toolbar != null && t.modules.toolbar.container == null && (t.modules.toolbar.container = V0), super(e, t), this.quill.container.classList.add("ql-snow");
  }
  extendToolbar(e) {
    e.container != null && (e.container.classList.add("ql-snow"), this.buildButtons(e.container.querySelectorAll("button"), bn), this.buildPickers(e.container.querySelectorAll("select"), bn), this.tooltip = new K0(this.quill, this.options.bounds), e.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
      key: "k",
      shortKey: !0
    }, (t, n) => {
      e.handlers.link.call(e, !n.format.link);
    }));
  }
}
Oc.DEFAULTS = Mt({}, Tn.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(r) {
          if (r) {
            const e = this.quill.getSelection();
            if (e == null || e.length === 0) return;
            let t = this.quill.getText(e);
            /^\S+@\S+\.\S+$/.test(t) && t.indexOf("mailto:") !== 0 && (t = `mailto:${t}`);
            const {
              tooltip: n
            } = this.quill.theme;
            n.edit("link", t);
          } else
            this.quill.format("link", !1, q.sources.USER);
        }
      }
    }
  }
});
q.register({
  "attributors/attribute/direction": gc,
  "attributors/class/align": fc,
  "attributors/class/background": Qp,
  "attributors/class/color": Xp,
  "attributors/class/direction": pc,
  "attributors/class/font": xc,
  "attributors/class/size": wc,
  "attributors/style/align": hc,
  "attributors/style/background": ga,
  "attributors/style/color": ma,
  "attributors/style/direction": bc,
  "attributors/style/font": yc,
  "attributors/style/size": Nc
}, !0);
q.register({
  "formats/align": fc,
  "formats/direction": pc,
  "formats/indent": Hb,
  "formats/background": ga,
  "formats/color": ma,
  "formats/font": xc,
  "formats/size": wc,
  "formats/blockquote": Gb,
  "formats/code-block": De,
  "formats/header": Vb,
  "formats/list": Sn,
  "formats/bold": ya,
  "formats/code": pa,
  "formats/italic": Kb,
  "formats/link": ds,
  "formats/script": Wb,
  "formats/strike": Zb,
  "formats/underline": Yb,
  "formats/formula": Xb,
  "formats/image": Qb,
  "formats/video": Jb,
  "modules/syntax": Cc,
  "modules/table": t0,
  "modules/toolbar": Na,
  "themes/bubble": Ic,
  "themes/snow": Oc,
  "ui/icons": bn,
  "ui/picker": ks,
  "ui/icon-picker": kc,
  "ui/color-picker": Ac,
  "ui/tooltip": _c
}, !0);
class _s extends ut.Component {
  constructor(e) {
    super(e), this.editingAreaRef = Sa(), this.containerRef = Sa(), this.dirtyProps = [
      "modules",
      "formats",
      "bounds",
      "theme",
      "children"
    ], this.cleanProps = [
      "id",
      "className",
      "style",
      "placeholder",
      "tabIndex",
      "onChange",
      "onChangeSelection",
      "onFocus",
      "onBlur",
      "onKeyPress",
      "onKeyDown",
      "onKeyUp"
    ], this.state = {
      generation: 0
    }, this.selection = null, this.onEditorChange = (n, s, i, a) => {
      n === "text-change" ? this.onEditorChangeText?.(this.editor.getSemanticHTML(), s, a, this.unprivilegedEditor) : n === "selection-change" && this.onEditorChangeSelection?.(s, a, this.unprivilegedEditor);
    };
    const t = this.isControlled() ? e.value : e.defaultValue;
    this.value = t ?? "";
  }
  validateProps(e) {
    if (ut.Children.count(e.children) > 1)
      throw new Error("The Quill editing area can only be composed of a single React element.");
    if (ut.Children.count(e.children) && ut.Children.only(e.children)?.type === "textarea")
      throw new Error("Quill does not support editing on a <textarea>. Use a <div> instead.");
    if (this.lastDeltaChangeSet && e.value === this.lastDeltaChangeSet)
      throw new Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas");
  }
  shouldComponentUpdate(e, t) {
    if (this.validateProps(e), !this.editor || this.state.generation !== t.generation)
      return !0;
    if ("value" in e) {
      const n = this.getEditorContents(), s = e.value ?? "";
      this.isEqualValue(s, n) || this.setEditorContents(this.editor, s);
    }
    return e.readOnly !== this.props.readOnly && this.setEditorReadOnly(this.editor, e.readOnly), [...this.cleanProps, ...this.dirtyProps].some((n) => !Ot(e[n], this.props[n]));
  }
  shouldComponentRegenerate(e) {
    return this.dirtyProps.some((t) => !Ot(e[t], this.props[t]));
  }
  componentDidMount() {
    this.instantiateEditor(), this.setEditorContents(this.editor, this.getEditorContents());
  }
  componentWillUnmount() {
    this.destroyEditor();
  }
  componentDidUpdate(e, t) {
    if (this.editor && this.shouldComponentRegenerate(e)) {
      const n = this.editor.getContents(), s = this.editor.getSelection();
      this.regenerationSnapshot = { delta: n, selection: s }, this.setState({ generation: this.state.generation + 1 }), this.destroyEditor();
    }
    if (this.editor && e.placeholder !== this.props.placeholder && (this.editor.root.dataset.placeholder = this.props.placeholder || ""), this.state.generation !== t.generation) {
      const { delta: n, selection: s } = this.regenerationSnapshot;
      delete this.regenerationSnapshot, this.instantiateEditor();
      const i = this.editor;
      i.setContents(n), Fo(() => this.setEditorSelection(i, s));
    }
  }
  instantiateEditor() {
    this.editor ? this.hookEditor(this.editor) : this.editor = this.createEditor(this.getEditingArea(), this.getEditorConfig());
  }
  destroyEditor() {
    if (!this.editor)
      return;
    this.unhookEditor(this.editor);
    const e = this.props.modules?.toolbar;
    if (!(typeof e == "object" && e && "container" in e && typeof e.container == "string" || typeof e == "string")) {
      const n = this.containerRef.current?.querySelector(".ql-toolbar");
      n && n.remove();
    }
    delete this.editor;
  }
  /*
  We consider the component to be controlled if `value` is being sent in props.
  */
  isControlled() {
    return "value" in this.props;
  }
  getEditorConfig() {
    return {
      bounds: this.props.bounds,
      formats: this.props.formats,
      modules: this.props.modules,
      placeholder: this.props.placeholder,
      readOnly: this.props.readOnly,
      tabIndex: this.props.tabIndex,
      theme: this.props.theme
    };
  }
  getEditor() {
    if (!this.editor)
      throw new Error("Accessing non-instantiated editor");
    return this.editor;
  }
  /**
  Creates an editor on the given element. The editor will be passed the
  configuration, have its events bound,
  */
  createEditor(e, t) {
    const n = new q(e, t);
    return t.tabIndex != null && this.setEditorTabIndex(n, t.tabIndex), this.hookEditor(n), n;
  }
  hookEditor(e) {
    this.unprivilegedEditor = this.makeUnprivilegedEditor(e), e.on("editor-change", this.onEditorChange);
  }
  unhookEditor(e) {
    e.off("editor-change", this.onEditorChange);
  }
  getEditorContents() {
    return this.value;
  }
  getEditorSelection() {
    return this.selection;
  }
  /*
  True if the value is a Delta instance or a Delta look-alike.
  */
  isDelta(e) {
    return e && e.ops;
  }
  /*
  Special comparison function that knows how to compare Deltas.
  */
  isEqualValue(e, t) {
    return this.isDelta(e) && this.isDelta(t) ? Ot(e.ops, t.ops) : Ot(e, t);
  }
  /*
  Replace the contents of the editor, but keep the previous selection hanging
  around so that the cursor won't move.
  */
  setEditorContents(e, t) {
    this.value = t;
    const n = this.getEditorSelection();
    typeof t == "string" ? e.setContents(e.clipboard.convert({ html: t })) : e.setContents(t), Fo(() => this.setEditorSelection(e, n));
  }
  setEditorSelection(e, t) {
    if (this.selection = t, t) {
      const n = e.getLength();
      t.index = Math.max(0, Math.min(t.index, n - 1)), t.length = Math.max(0, Math.min(t.length, n - 1 - t.index)), e.setSelection(t);
    }
  }
  setEditorTabIndex(e, t) {
    e?.scroll?.domNode && (e.scroll.domNode.tabIndex = t);
  }
  setEditorReadOnly(e, t) {
    t ? e.disable() : e.enable();
  }
  /*
  Returns a weaker, unprivileged proxy object that only exposes read-only
  accessors found on the editor instance, without any state-modifying methods.
  */
  makeUnprivilegedEditor(e) {
    const t = e;
    return {
      getHTML: () => t.root.innerHTML,
      getSemanticHTML: t.getSemanticHTML.bind(t),
      getLength: t.getLength.bind(t),
      getText: t.getText.bind(t),
      getContents: t.getContents.bind(t),
      getSelection: t.getSelection.bind(t),
      getBounds: t.getBounds.bind(t)
    };
  }
  getEditingArea() {
    const e = this.editingAreaRef.current;
    if (!e)
      throw new Error("Cannot find element for editing area");
    if (e.nodeType === 3)
      throw new Error("Editing area cannot be a text node");
    return e;
  }
  /*
  Renders an editor area, unless it has been provided one to clone.
  */
  renderEditingArea() {
    const { children: e, preserveWhitespace: t } = this.props, { generation: n } = this.state, s = {
      key: n,
      ref: this.editingAreaRef
    };
    return ut.Children.count(e) ? ut.cloneElement(ut.Children.only(e), s) : t ? ut.createElement("pre", { ...s }) : ut.createElement("div", { ...s });
  }
  render() {
    return ut.createElement("div", { ref: this.containerRef, id: this.props.id, style: this.props.style, key: this.state.generation, className: `quill ${this.props.className ?? ""}`, onKeyPress: this.props.onKeyPress, onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp }, this.renderEditingArea());
  }
  onEditorChangeText(e, t, n, s) {
    if (!this.editor)
      return;
    const i = this.isDelta(this.value) ? s.getContents() : s.getSemanticHTML();
    i !== this.getEditorContents() && (this.lastDeltaChangeSet = t, this.value = i, this.props.onChange?.(e, t, n, s));
  }
  onEditorChangeSelection(e, t, n) {
    if (!this.editor)
      return;
    const s = this.getEditorSelection(), i = !s && e, a = s && !e;
    Ot(e, s) || (this.selection = e, this.props.onChangeSelection?.(e, t, n), i ? this.props.onFocus?.(e, t, n) : a && this.props.onBlur?.(s, t, n));
  }
  focus() {
    this.editor && this.editor.focus();
  }
  blur() {
    this.editor && (this.selection = null, this.editor.blur());
  }
}
_s.displayName = "React Quill";
_s.Quill = q;
_s.defaultProps = {
  theme: "snow",
  modules: {},
  readOnly: !1
};
function Fo(r) {
  Promise.resolve().then(r);
}
const W0 = {
  toolbar: [
    [{ header: [1, 2, 3, !1] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    ["link", "image", "code-block"],
    ["blockquote"],
    [{ script: "sub" }, { script: "super" }],
    ["clean"]
  ],
  clipboard: {
    matchVisual: !1
  },
  history: {
    delay: 1e3,
    maxStack: 50,
    userOnly: !0
  }
}, Z0 = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "align",
  "color",
  "background",
  "link",
  "image",
  "code-block",
  "blockquote",
  "script"
];
function Y0({
  className: r,
  label: e,
  error: t,
  required: n,
  id: s,
  size: i = "md",
  modules: a,
  formats: c,
  placeholder: d,
  value: u,
  onChange: g,
  readOnly: b,
  ...m
}) {
  const p = _.useId(), N = s || p, S = e || t, E = /* @__PURE__ */ o("div", { className: "relative w-full", children: /* @__PURE__ */ o(
    _s,
    {
      id: N,
      "data-slot": "editor",
      "data-size": i,
      "aria-invalid": !!t,
      theme: "snow",
      modules: a || W0,
      formats: c || Z0,
      placeholder: d,
      value: u,
      onChange: g,
      readOnly: b,
      className: f(
        "editor-wrapper",
        "[&_.ql-container]:border-input [&_.ql-container]:dark:bg-input/30 [&_.ql-container]:rounded-b-md [&_.ql-container]:border [&_.ql-container]:shadow-xs",
        "[&_.ql-toolbar]:border-input [&_.ql-toolbar]:dark:bg-input/30 [&_.ql-toolbar]:rounded-t-md [&_.ql-toolbar]:border [&_.ql-toolbar]:border-b-0 [&_.ql-toolbar]:bg-transparent",
        "[&_.ql-editor]:min-h-[200px] [&_.ql-editor]:text-foreground",
        "[&_.ql-editor.ql-blank::before]:text-muted-foreground [&_.ql-editor.ql-blank::before]:italic",
        "[&_.ql-stroke]:stroke-foreground [&_.ql-fill]:fill-foreground",
        "[&_.ql-picker-label]:text-foreground [&_.ql-picker-options]:bg-popover [&_.ql-picker-options]:text-popover-foreground [&_.ql-picker-options]:border-border",
        "[&_.ql-snow.ql-toolbar_button:hover]:bg-accent [&_.ql-snow.ql-toolbar_button.ql-active]:bg-accent",
        "[&_.ql-snow.ql-toolbar]:dark:bg-input/30",
        t && "[&_.ql-container]:border-destructive [&_.ql-container]:focus-within:border-destructive [&_.ql-container]:focus-within:ring-destructive [&_.ql-container]:focus-within:ring-[3px] [&_.ql-toolbar]:border-destructive",
        !t && "[&_.ql-container]:focus-within:border-ring [&_.ql-container]:focus-within:ring-ring/50 [&_.ql-container]:focus-within:ring-[3px]",
        b && "[&_.ql-toolbar]:pointer-events-none [&_.ql-toolbar]:opacity-50 [&_.ql-toolbar_button]:cursor-not-allowed",
        r
      ),
      ...m
    }
  ) });
  return S ? /* @__PURE__ */ T("div", { className: "flex flex-col gap-1", children: [
    e && /* @__PURE__ */ T(ye, { htmlFor: N, children: [
      e,
      n && /* @__PURE__ */ o("span", { className: "text-destructive", children: "*" })
    ] }),
    E,
    t && /* @__PURE__ */ o("div", { className: "text-destructive text-sm", role: "alert", children: t })
  ] }) : E;
}
function Gw({
  control: r,
  name: e,
  label: t,
  className: n,
  wrapperClassName: s,
  required: i = !1,
  callback: a = () => {
  },
  ...c
}) {
  const d = je({ control: r, name: e }), u = Ze(d.errors, `${e}.message`);
  return /* @__PURE__ */ o("div", { className: f("w-full", s), children: /* @__PURE__ */ o(
    We,
    {
      control: r,
      name: e,
      render: ({ field: g }) => /* @__PURE__ */ o(
        Y0,
        {
          ...c,
          value: g.value || "",
          onChange: (b) => {
            g.onChange(b), a(b);
          },
          label: t,
          error: u,
          required: i,
          className: n
        }
      )
    }
  ) });
}
function Vw({
  name: r,
  control: e
}) {
  const t = je({
    control: e,
    name: r
  }), n = Ze(t.errors, `${r}.message`);
  return /* @__PURE__ */ o(
    "p",
    {
      className: f(
        "text-xs text-destructive hidden",
        kd(n) && "input-error block mt-1.5"
      ),
      children: n
    }
  );
}
function X0({
  value: r = [],
  onChange: e,
  accept: t,
  multiple: n = !1,
  maxSize: s,
  maxFiles: i,
  disabled: a = !1,
  onError: c,
  showPreview: d = !0,
  showProgress: u = !1,
  className: g,
  dropzoneClassName: b,
  placeholder: m,
  uploadText: p
}) {
  const [N, S] = _.useState(!1), C = (A) => A && typeof A == "object" && "name" in A && "size" in A && "type" in A && "lastModified" in A && !("file" in A), [y, E] = _.useState(() => !r || r.length === 0 ? [] : r.map((A) => C(A) ? {
    file: A,
    preview: A.type.startsWith("image/") ? URL.createObjectURL(A) : void 0,
    status: "success"
  } : A)), I = _.useRef(null), D = _.useRef(y);
  _.useEffect(() => {
    D.current = y;
  }, [y]), _.useEffect(() => () => {
    D.current.forEach((A) => {
      A.preview && URL.revokeObjectURL(A.preview);
    });
  }, []), _.useEffect(() => {
    if (!r || r.length === 0) {
      D.current.forEach(($) => {
        $.preview && URL.revokeObjectURL($.preview);
      }), D.current.length > 0 && E([]);
      return;
    }
    const A = r.map((B) => C(B) ? B : B.file), O = D.current.map((B) => B.file), k = A.map((B) => `${B.name}-${B.size}`).join(","), R = O.map((B) => `${B.name}-${B.size}`).join(",");
    if (k === R && A.length === O.length)
      return;
    D.current.forEach((B) => {
      B.preview && URL.revokeObjectURL(B.preview);
    });
    const z = r.map((B) => C(B) ? {
      file: B,
      preview: B.type.startsWith("image/") ? URL.createObjectURL(B) : void 0,
      status: "success"
    } : B);
    E(z);
  }, [r]);
  const j = (A) => {
    if (s && A.size > s)
      return `File size exceeds ${xi(s)}`;
    if (t) {
      const O = t.split(",").map((B) => B.trim()), k = A.type, R = A.name.toLowerCase();
      if (!(O.some((B) => B.startsWith(".") ? R.endsWith(B.toLowerCase()) : B.endsWith("/*") ? k.startsWith(B.slice(0, -1)) : k === B || k.match(B.replace("*", ".*"))) || O.some((B) => R.endsWith(B.toLowerCase()))))
        return `File type not allowed. Accepted types: ${t}`;
    }
    return null;
  }, Z = (A) => {
    const O = [], k = [];
    if (i && y.length + A.length > i) {
      const z = `Maximum ${i} file(s) allowed`;
      O.push(z), c?.(z);
      return;
    }
    if (A.forEach((z) => {
      const B = j(z);
      if (B)
        O.push(`${z.name}: ${B}`), c?.(B);
      else {
        const $ = {
          file: z,
          preview: z.type.startsWith("image/") ? URL.createObjectURL(z) : void 0,
          status: "success"
        };
        k.push($);
      }
    }), O.length > 0 && k.length === 0)
      return;
    const R = n ? [...y, ...k] : k;
    E(R), e?.(R.map((z) => z.file));
  }, ee = (A) => {
    if (A.preventDefault(), A.stopPropagation(), S(!1), a) return;
    const O = Array.from(A.dataTransfer.files);
    O.length > 0 && Z(O);
  }, se = (A) => {
    A.preventDefault(), A.stopPropagation(), a || S(!0);
  }, Y = (A) => {
    A.preventDefault(), A.stopPropagation(), S(!1);
  }, re = (A) => {
    const O = Array.from(A.target.files || []);
    O.length > 0 && Z(O), I.current && (I.current.value = "");
  }, v = (A) => {
    const O = y[A];
    O.preview && URL.revokeObjectURL(O.preview);
    const k = y.filter((R, z) => z !== A);
    E(k), e?.(k.map((R) => R.file));
  }, M = () => {
    !a && I.current && I.current.click();
  }, w = (A) => A.type.startsWith("image/") ? /* @__PURE__ */ o(Qc, { className: "h-8 w-8 text-muted-foreground" }) : /* @__PURE__ */ o(Jc, { className: "h-8 w-8 text-muted-foreground" });
  return /* @__PURE__ */ T("div", { className: f("w-full space-y-4", g), "data-slot": "file-upload", children: [
    /* @__PURE__ */ T(
      "div",
      {
        onClick: M,
        onDrop: ee,
        onDragOver: se,
        onDragLeave: Y,
        className: f(
          "relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
          N && !a && "border-primary bg-primary/5",
          !N && !a && "border-input hover:border-primary/50 hover:bg-accent/50",
          a && "cursor-not-allowed opacity-50",
          b
        ),
        "data-slot": "file-upload-dropzone",
        children: [
          /* @__PURE__ */ o(
            "input",
            {
              ref: I,
              type: "file",
              accept: t,
              multiple: n,
              disabled: a,
              onChange: re,
              className: "hidden",
              "data-slot": "file-upload-input"
            }
          ),
          /* @__PURE__ */ T("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
            /* @__PURE__ */ o(Zo, { className: f("h-8 w-8 mb-2", a ? "text-muted-foreground" : "text-primary") }),
            /* @__PURE__ */ T("p", { className: "mb-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ o("span", { className: "font-semibold", children: p || "Click to upload" }),
              !a && " or drag and drop"
            ] }),
            /* @__PURE__ */ T("p", { className: "text-xs text-muted-foreground", children: [
              m || t || "Any file",
              n && " (multiple files allowed)",
              s && ` (max ${xi(s)})`
            ] })
          ] })
        ]
      }
    ),
    d && y.length > 0 && /* @__PURE__ */ o("div", { className: "space-y-2", "data-slot": "file-upload-list", children: y.map((A, O) => {
      const { file: k, preview: R, progress: z, status: B, error: $ } = A, W = k.type.startsWith("image/");
      return /* @__PURE__ */ T(
        "div",
        {
          className: "flex items-center gap-3 p-3 border rounded-lg bg-card",
          "data-slot": "file-upload-item",
          children: [
            /* @__PURE__ */ o("div", { className: "flex-shrink-0", children: W && R ? /* @__PURE__ */ o(
              "img",
              {
                src: R,
                alt: k.name,
                className: "h-12 w-12 object-cover rounded",
                "data-slot": "file-upload-preview"
              }
            ) : /* @__PURE__ */ o("div", { className: "h-12 w-12 flex items-center justify-center bg-muted rounded", children: w(k) }) }),
            /* @__PURE__ */ T("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ T("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ o("p", { className: "text-sm font-medium truncate", "data-slot": "file-upload-name", children: k.name }),
                B === "success" && /* @__PURE__ */ o(Xc, { className: "h-4 w-4 text-green-500 flex-shrink-0" }),
                B === "error" && /* @__PURE__ */ o(Yo, { className: "h-4 w-4 text-destructive flex-shrink-0" })
              ] }),
              /* @__PURE__ */ o("p", { className: "text-xs text-muted-foreground", "data-slot": "file-upload-size", children: xi(k.size) }),
              $ && /* @__PURE__ */ o("p", { className: "text-xs text-destructive mt-1", "data-slot": "file-upload-error", children: $ }),
              u && z !== void 0 && /* @__PURE__ */ o("div", { className: "mt-2", "data-slot": "file-upload-progress", children: /* @__PURE__ */ o(bu, { value: z, className: "h-1" }) })
            ] }),
            !a && /* @__PURE__ */ T(
              pe,
              {
                type: "button",
                variant: "ghost",
                size: "icon",
                className: "h-8 w-8 flex-shrink-0",
                onClick: (K) => {
                  K.stopPropagation(), v(O);
                },
                "data-slot": "file-upload-remove",
                children: [
                  /* @__PURE__ */ o(Ji, { className: "h-4 w-4" }),
                  /* @__PURE__ */ o("span", { className: "sr-only", children: "Remove file" })
                ]
              }
            )
          ]
        },
        `${k.name}-${O}`
      );
    }) })
  ] });
}
function Kw({
  control: r,
  name: e,
  label: t,
  error: n,
  required: s = !1,
  wrapperClassName: i,
  ...a
}) {
  const c = je({ control: r, name: e }), d = n || Ze(c.errors, `${e}.message`);
  return /* @__PURE__ */ T("div", { className: f("w-full", i), "data-slot": "rhf-file-upload", children: [
    t && /* @__PURE__ */ T(ye, { htmlFor: e, className: "mb-2 block", children: [
      t,
      s && /* @__PURE__ */ o("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ o(
      We,
      {
        control: r,
        name: e,
        render: ({ field: { onChange: u, value: g, ...b } }) => {
          const m = g ? (Array.isArray(g) ? g : [g]).filter(Boolean) : [];
          return /* @__PURE__ */ o(
            X0,
            {
              ...a,
              ...b,
              value: m,
              onChange: (p) => {
                a.multiple ? u(p) : u(p.length > 0 ? p[0] : void 0);
              },
              onError: (p) => {
                console.error("File upload error:", p);
              },
              disabled: a.disabled
            }
          );
        }
      }
    ),
    d && /* @__PURE__ */ o("p", { className: "text-sm text-destructive mt-1", "data-slot": "rhf-file-upload-error", children: d })
  ] });
}
const Q0 = (r, e) => e === "text" || !r ? r : e === "integer" || e === "currency" ? r.replace(/\D/g, "") : e === "decimal" ? r.replace(/[^\d.,]/g, "").replace(/\./g, ",") : r;
function Ww({
  control: r,
  name: e,
  label: t,
  format: n = "text",
  required: s,
  wrapperClassName: i,
  callback: a = () => {
  },
  ...c
}) {
  const d = je({ control: r, name: e }), u = Ze(d.errors, `${e}.message`);
  return /* @__PURE__ */ o(
    We,
    {
      control: r,
      name: e,
      render: ({ field: g }) => /* @__PURE__ */ o("div", { className: f("w-full", i), children: /* @__PURE__ */ o(
        Pt,
        {
          ...c,
          ...g,
          type: "text",
          label: t,
          error: u,
          required: s,
          value: g.value || "",
          onChange: (b) => {
            const m = Q0(b.target.value, n);
            g.onChange(m), a(m);
          }
        }
      ) })
    }
  );
}
function Zw({
  control: r,
  register: e,
  name: t,
  label: n,
  placeholder: s,
  className: i,
  wrapperClassName: a,
  required: c = !1,
  ...d
}) {
  const u = je({ control: r, name: t }), g = Ze(u.errors, `${t}.message`);
  return /* @__PURE__ */ o("div", { className: f("w-full", a), children: /* @__PURE__ */ o(
    Pt,
    {
      ...d,
      ...e(t),
      label: n,
      error: g,
      required: c,
      className: i,
      placeholder: s
    }
  ) });
}
function Yw({
  control: r,
  name: e,
  options: t,
  label: n,
  error: s,
  required: i = !1,
  placeholder: a = "Select options...",
  wrapperClassName: c
}) {
  const d = je({ control: r, name: e }), u = s || Ze(d.errors, `${e}.message`);
  return /* @__PURE__ */ T("div", { className: f("w-full", c), children: [
    n && /* @__PURE__ */ T(ye, { htmlFor: e, className: "mb-2 block", children: [
      n,
      i && /* @__PURE__ */ o("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ o(
      We,
      {
        control: r,
        name: e,
        render: ({ field: g }) => {
          const b = Array.isArray(g.value) ? g.value : [];
          return /* @__PURE__ */ T("div", { className: "space-y-2", children: [
            /* @__PURE__ */ T(
              wl,
              {
                value: "",
                onValueChange: (m) => {
                  b.includes(m) || g.onChange([...b, m]);
                },
                children: [
                  /* @__PURE__ */ o(El, { className: f(u && "border-destructive"), children: /* @__PURE__ */ o(Nl, { placeholder: a }) }),
                  /* @__PURE__ */ o(Sl, { children: t.map((m) => /* @__PURE__ */ o(
                    Tl,
                    {
                      value: m.value,
                      disabled: m.disabled || b.includes(m.value),
                      children: m.label
                    },
                    m.value
                  )) })
                ]
              }
            ),
            b.length > 0 && /* @__PURE__ */ o("div", { className: "flex flex-wrap gap-2", children: b.map((m) => {
              const p = t.find((N) => N.value === m);
              return /* @__PURE__ */ T(un, { variant: "secondary", className: "gap-1", children: [
                p?.label || m,
                /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      g.onChange(b.filter((N) => N !== m));
                    },
                    className: "ml-1 hover:bg-destructive/20 rounded-full p-0.5",
                    children: /* @__PURE__ */ o(Ji, { className: "h-3 w-3" })
                  }
                )
              ] }, m);
            }) })
          ] });
        }
      }
    ),
    u && /* @__PURE__ */ o("p", { className: "text-sm text-destructive mt-1", children: u })
  ] });
}
function Xw({
  control: r,
  register: e,
  name: t,
  label: n,
  placeholder: s,
  className: i,
  wrapperClassName: a,
  required: c = !1,
  min: d,
  max: u,
  step: g,
  ...b
}) {
  const m = je({ control: r, name: t }), p = Ze(m.errors, `${t}.message`);
  return /* @__PURE__ */ o("div", { className: f("w-full", a), children: /* @__PURE__ */ o(
    Pt,
    {
      ...b,
      ...e(t, { valueAsNumber: !0 }),
      type: "number",
      label: n,
      error: p,
      required: c,
      className: i,
      placeholder: s,
      min: d,
      max: u,
      step: g
    }
  ) });
}
function Qw({
  control: r,
  name: e,
  label: t,
  required: n,
  children: s,
  className: i,
  callback: a = () => {
  },
  onBeforeChange: c,
  ...d
}) {
  const u = (g, b) => {
    const m = () => {
      b.onChange(g), a(g);
    };
    c ? c(g, b.value, m) : m();
  };
  return /* @__PURE__ */ o(
    We,
    {
      control: r,
      name: e,
      render: ({ field: g, fieldState: { error: b } }) => /* @__PURE__ */ T("div", { className: "space-y-1.5 w-full", children: [
        t && /* @__PURE__ */ T(
          ye,
          {
            htmlFor: d.id || e,
            className: "text-foreground leading-5 cursor-pointer select-none flex-1",
            children: [
              t,
              n && /* @__PURE__ */ o("span", { className: "font-semibold text-destructive ml-1", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ o(
          vu,
          {
            ...d,
            id: d.id || e,
            className: f("flex flex-row gap-4", i),
            onValueChange: (m) => {
              u(m, g);
            },
            value: g.value?.toString(),
            children: s
          }
        ),
        b && /* @__PURE__ */ o("p", { className: "text-xs text-destructive", children: b.message })
      ] })
    }
  );
}
function Jw({
  control: r,
  name: e,
  label: t,
  required: n,
  callback: s = () => {
  },
  onBeforeChange: i,
  className: a,
  ...c
}) {
  const d = (u, g) => {
    const b = () => {
      g.onChange(u), s(u);
    };
    i ? i(u, g.value, b) : b();
  };
  return /* @__PURE__ */ o(
    We,
    {
      control: r,
      name: e,
      render: ({ field: u, fieldState: { error: g } }) => /* @__PURE__ */ T("div", { className: "space-y-1.5 w-full", children: [
        /* @__PURE__ */ T("div", { className: f("flex items-center gap-3", a), children: [
          t && /* @__PURE__ */ T(
            ye,
            {
              htmlFor: c.id || e,
              className: "text-foreground leading-5 cursor-pointer select-none flex-1",
              children: [
                t,
                n && /* @__PURE__ */ o("span", { className: "font-semibold text-destructive ml-1", children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ o(
            Pu,
            {
              ...c,
              id: c.id || e,
              checked: !!u.value,
              onCheckedChange: (b) => {
                d(b, u);
              }
            }
          )
        ] }),
        g && /* @__PURE__ */ o("p", { className: "text-xs text-destructive", children: g.message })
      ] })
    }
  );
}
function eN({
  control: r,
  register: e,
  name: t,
  label: n,
  placeholder: s,
  className: i,
  wrapperClassName: a,
  required: c = !1,
  showMaxLength: d = !0,
  maxLength: u = 512,
  rows: g = 5,
  ...b
}) {
  const m = je({ control: r, name: t }), p = Ze(m.errors, `${t}.message`);
  return /* @__PURE__ */ T("div", { className: f("relative w-full", a), children: [
    /* @__PURE__ */ o(
      yl,
      {
        ...b,
        ...e(t),
        label: n,
        error: p,
        required: c,
        className: i,
        placeholder: s,
        maxLength: u,
        rows: g
      }
    ),
    d && /* @__PURE__ */ o(J0, { control: r, name: t, maxLength: u })
  ] });
}
const J0 = ({
  control: r,
  name: e,
  maxLength: t
}) => {
  const { field: n } = pd({ control: r, name: e });
  return /* @__PURE__ */ T(un, { variant: "secondary", className: "absolute rounded-sm right-3 bottom-2 text-[8px]", children: [
    n.value?.length || 0,
    "/",
    t
  ] });
};
function tN({
  control: r,
  register: e,
  name: t,
  label: n,
  placeholder: s = "HH:mm",
  className: i,
  wrapperClassName: a,
  required: c = !1,
  ...d
}) {
  const u = je({ control: r, name: t }), g = Ze(u.errors, `${t}.message`);
  return /* @__PURE__ */ o("div", { className: f("w-full", a), children: /* @__PURE__ */ o(
    Pt,
    {
      ...d,
      ...e(t),
      type: "time",
      label: n,
      error: g,
      required: c,
      className: i,
      placeholder: s
    }
  ) });
}
function rN({
  control: r,
  name: e,
  label: t,
  error: n,
  required: s = !1,
  accept: i,
  multiple: a = !1,
  wrapperClassName: c,
  className: d
}) {
  const u = je({ control: r, name: e }), g = n || Ze(u.errors, `${e}.message`);
  return /* @__PURE__ */ T("div", { className: f("w-full", c), children: [
    t && /* @__PURE__ */ T(ye, { htmlFor: e, className: "mb-2 block", children: [
      t,
      s && /* @__PURE__ */ o("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ o(
      We,
      {
        control: r,
        name: e,
        render: ({ field: { onChange: b, value: m, ...p } }) => /* @__PURE__ */ T("div", { className: "space-y-2", children: [
          /* @__PURE__ */ T(
            ye,
            {
              htmlFor: e,
              className: f(
                "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent transition-colors",
                g && "border-destructive",
                d
              ),
              children: [
                /* @__PURE__ */ T("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
                  /* @__PURE__ */ o(Zo, { className: "w-8 h-8 mb-2 text-muted-foreground" }),
                  /* @__PURE__ */ T("p", { className: "mb-2 text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ o("span", { className: "font-semibold", children: "Click to upload" }),
                    " or drag and drop"
                  ] }),
                  /* @__PURE__ */ T("p", { className: "text-xs text-muted-foreground", children: [
                    i || "Any file",
                    a && " (multiple files allowed)"
                  ] })
                ] }),
                /* @__PURE__ */ o(
                  Pt,
                  {
                    ...p,
                    id: e,
                    type: "file",
                    accept: i,
                    multiple: a,
                    className: "hidden",
                    onChange: (N) => {
                      const S = N.target.files;
                      S && b(a ? Array.from(S) : S[0]);
                    }
                  }
                )
              ]
            }
          ),
          m && /* @__PURE__ */ o("p", { className: "text-sm text-muted-foreground", children: a ? `${Array.isArray(m) ? m.length : 0} file(s) selected` : typeof m == "string" ? m : m?.name || "File selected" })
        ] })
      }
    ),
    g && /* @__PURE__ */ o("p", { className: "text-sm text-destructive mt-1", children: g })
  ] });
}
function e1({
  open: r,
  onOpenChange: e,
  title: t,
  description: n,
  confirmText: s = "Confirm",
  cancelText: i = "Cancel",
  onConfirm: a,
  variant: c = "default",
  loading: d = !1
}) {
  const [u, g] = _.useState(!1);
  return /* @__PURE__ */ o(ll, { open: r, onOpenChange: e, children: /* @__PURE__ */ T(cl, { children: [
    /* @__PURE__ */ T(dl, { children: [
      /* @__PURE__ */ o(ul, { children: t }),
      n && /* @__PURE__ */ o(fl, { children: n })
    ] }),
    /* @__PURE__ */ T($d, { children: [
      /* @__PURE__ */ o(
        pe,
        {
          variant: "outline",
          onClick: () => e(!1),
          disabled: u || d,
          children: i
        }
      ),
      /* @__PURE__ */ o(pe, { variant: c, onClick: async () => {
        g(!0);
        try {
          await a(), e(!1);
        } finally {
          g(!1);
        }
      }, disabled: u || d, children: u || d ? "Loading..." : s })
    ] })
  ] }) });
}
function nN({ className: r, maxWidth: e = "xl", ...t }) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: f(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        {
          "max-w-screen-sm": e === "sm",
          "max-w-screen-md": e === "md",
          "max-w-screen-lg": e === "lg",
          "max-w-screen-xl": e === "xl",
          "max-w-screen-2xl": e === "2xl",
          "max-w-full": e === "full"
        },
        r
      ),
      ...t
    }
  );
}
const t1 = [
  { id: 10, name: "10/trang" },
  { id: 20, name: "20/trang" },
  { id: 50, name: "50/trang" },
  { id: 100, name: "100/trang" }
];
function sN({
  data: r,
  paginationOptions: e,
  columns: t,
  totalPages: n = 0,
  searchable: s = !1,
  searchPlaceholder: i,
  searchKey: a,
  emptyMessage: c,
  className: d,
  enableGlobalFilter: u = !0,
  globalFilterFn: g,
  pagination: b,
  onRowClick: m,
  rowClassName: p
}) {
  const [N, S] = _.useState([]), [C, y] = _.useState(""), E = Cd({
    data: r,
    columns: t,
    getRowId: (I, D) => "id" in I && I.id != null ? String(I.id) : String(D),
    getCoreRowModel: Ad(),
    onSortingChange: S,
    manualFiltering: !0,
    manualSorting: !0,
    manualPagination: !0,
    globalFilterFn: g || ((I, D, j) => {
      if (!a)
        return Object.values(I.original).some(
          (ee) => String(ee).toLowerCase().includes(String(j).toLowerCase())
        );
      const Z = I.original[a];
      return String(Z).toLowerCase().includes(String(j).toLowerCase());
    }),
    enableGlobalFilter: s && u,
    state: {
      sorting: N,
      pagination: b,
      columnPinning: {
        right: ["actions"]
      }
    },
    ...e
  });
  return /* @__PURE__ */ T("div", { className: f("space-y-4", d), children: [
    s && /* @__PURE__ */ o(
      Pt,
      {
        placeholder: i || "Search...",
        value: C ?? "",
        onChange: (I) => y(I.target.value),
        className: "max-w-sm"
      }
    ),
    /* @__PURE__ */ o("div", { className: "rounded-md border", children: /* @__PURE__ */ T(ju, { children: [
      /* @__PURE__ */ o(Fu, { children: E.getHeaderGroups().map((I) => /* @__PURE__ */ o(vi, { children: I.headers.map((D) => {
        const j = D.column.getCanSort(), Z = D.column.getIsSorted();
        return /* @__PURE__ */ o(Hu, { children: D.isPlaceholder ? null : /* @__PURE__ */ T("div", { className: "flex gap-2 items-center", children: [
          /* @__PURE__ */ o(
            "div",
            {
              className: f(
                j && "cursor-pointer select-none hover:text-foreground"
              ),
              onClick: j ? D.column.getToggleSortingHandler() : void 0,
              children: qa(D.column.columnDef.header, D.getContext())
            }
          ),
          j && /* @__PURE__ */ o(
            pe,
            {
              variant: "ghost",
              size: "icon",
              className: "w-4 h-4",
              onClick: D.column.getToggleSortingHandler(),
              children: Z === "asc" ? /* @__PURE__ */ o(ed, { className: "size-3.5 text-primary" }) : Z === "desc" ? /* @__PURE__ */ o(td, { className: "size-3.5 text-primary" }) : /* @__PURE__ */ o(rd, { className: "size-3.5" })
            }
          )
        ] }) }, D.id);
      }) }, I.id)) }),
      /* @__PURE__ */ o(Uu, { children: E.getRowModel().rows?.length ? E.getRowModel().rows.map((I) => /* @__PURE__ */ o(
        vi,
        {
          "data-state": I.getIsSelected() && "selected",
          className: f(
            m && "cursor-pointer",
            p && p(I.original)
          ),
          onClick: () => m?.(I.original),
          children: I.getVisibleCells().map((D) => /* @__PURE__ */ o(Ma, { children: qa(D.column.columnDef.cell, D.getContext()) }, D.id))
        },
        I.id
      )) : /* @__PURE__ */ o(vi, { children: /* @__PURE__ */ o(Ma, { colSpan: E.getAllColumns().length, className: "py-8 text-center", children: c || "No data available" }) }) })
    ] }) }),
    typeof n == "number" && n > 1 && /* @__PURE__ */ o(r1, { table: E, totalPages: n })
  ] });
}
function r1({ table: r, totalPages: e }) {
  return /* @__PURE__ */ o(cu, { children: /* @__PURE__ */ T(du, { className: "flex-1 gap-4 justify-end", children: [
    /* @__PURE__ */ o(an, { children: /* @__PURE__ */ o(
      pu,
      {
        currentPage: r.getState().pagination.pageIndex + 1,
        pageSize: r.getState().pagination.pageSize,
        totalPages: e,
        isGroupButton: !0,
        onPageChange: (t) => {
          r.setPageIndex(t - 1);
        }
      }
    ) }),
    /* @__PURE__ */ o(an, { children: /* @__PURE__ */ T(
      wl,
      {
        onValueChange: (t) => {
          r.setPageSize(Number(t));
        },
        value: r.getState().pagination.pageSize.toString(),
        children: [
          /* @__PURE__ */ o(El, { className: "w-[130px]", size: "sm", children: /* @__PURE__ */ o(Nl, { placeholder: "Chọn" }) }),
          /* @__PURE__ */ o(Sl, { children: /* @__PURE__ */ o(Nd, { children: t1.map((t) => /* @__PURE__ */ o(Tl, { value: t.id.toString(), children: t.name }, t.id)) }) })
        ]
      }
    ) })
  ] }) });
}
function iN({
  open: r,
  onOpenChange: e,
  title: t,
  description: n,
  itemName: s,
  onConfirm: i,
  loading: a = !1
}) {
  return /* @__PURE__ */ o(
    e1,
    {
      open: r,
      onOpenChange: e,
      title: t || "Delete Confirmation",
      description: n || (s ? `Are you sure you want to delete "${s}"? This action cannot be undone.` : "Are you sure you want to delete this item? This action cannot be undone."),
      confirmText: "Delete",
      cancelText: "Cancel",
      onConfirm: i,
      variant: "destructive",
      loading: a
    }
  );
}
function aN({
  className: r,
  label: e,
  labelPosition: t = "center",
  orientation: n = "horizontal",
  ...s
}) {
  return e ? /* @__PURE__ */ T(
    "div",
    {
      className: f(
        "flex items-center",
        n === "horizontal" ? "w-full" : "h-full flex-col",
        r
      ),
      ...s,
      children: [
        t !== "left" && /* @__PURE__ */ o(
          Et,
          {
            orientation: n,
            className: f(n === "horizontal" ? "flex-1" : "flex-1 w-px")
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: f(
              "px-3 text-sm text-muted-foreground",
              n === "vertical" && "py-3 px-0"
            ),
            children: e
          }
        ),
        t !== "right" && /* @__PURE__ */ o(
          Et,
          {
            orientation: n,
            className: f(n === "horizontal" ? "flex-1" : "flex-1 w-px")
          }
        )
      ]
    }
  ) : /* @__PURE__ */ o(Et, { orientation: n, className: r, ...s });
}
function oN({
  className: r,
  icon: e,
  title: t = "No data",
  description: n,
  action: s,
  children: i,
  ...a
}) {
  return /* @__PURE__ */ T(Wd, { className: f(r), ...a, children: [
    /* @__PURE__ */ T(Zd, { children: [
      e && /* @__PURE__ */ o(Xd, { variant: "icon", children: e }),
      /* @__PURE__ */ o(Qd, { children: t }),
      n && /* @__PURE__ */ o(Jd, { children: n })
    ] }),
    i && /* @__PURE__ */ o(eu, { children: i }),
    s && /* @__PURE__ */ o(pe, { onClick: s.onClick, variant: "outline", children: s.label })
  ] });
}
class lN extends _.Component {
  constructor(e) {
    super(e), this.state = { hasError: !1, error: null };
  }
  static getDerivedStateFromError(e) {
    return { hasError: !0, error: e };
  }
  componentDidCatch(e, t) {
    this.props.onError?.(e, t);
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const e = this.props.fallback;
        return /* @__PURE__ */ o(e, { ...this.state });
      }
      return /* @__PURE__ */ o(
        n1,
        {
          error: this.state.error,
          resetError: () => this.setState({ hasError: !1, error: null })
        }
      );
    }
    return this.props.children;
  }
}
function n1({ error: r, resetError: e }) {
  return /* @__PURE__ */ o("div", { className: "flex items-center justify-center min-h-[200px] p-4", children: /* @__PURE__ */ T(Jo, { variant: "destructive", className: "max-w-md", children: [
    /* @__PURE__ */ o(Yo, { className: "h-4 w-4" }),
    /* @__PURE__ */ o(el, { children: "Something went wrong" }),
    /* @__PURE__ */ o(tl, { children: r?.message || "An unexpected error occurred" }),
    /* @__PURE__ */ o(pe, { variant: "outline", size: "sm", onClick: e, className: "mt-4", children: "Try again" })
  ] }) });
}
function cN({ className: r, cols: e = 1, gap: t = 4, responsive: n, ...s }) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: f(
        "grid",
        {
          "grid-cols-1": e === 1,
          "grid-cols-2": e === 2,
          "grid-cols-3": e === 3,
          "grid-cols-4": e === 4,
          "grid-cols-5": e === 5,
          "grid-cols-6": e === 6,
          "grid-cols-12": e === 12
        },
        n?.sm && {
          "sm:grid-cols-1": n.sm === 1,
          "sm:grid-cols-2": n.sm === 2,
          "sm:grid-cols-3": n.sm === 3,
          "sm:grid-cols-4": n.sm === 4,
          "sm:grid-cols-5": n.sm === 5,
          "sm:grid-cols-6": n.sm === 6,
          "sm:grid-cols-12": n.sm === 12
        },
        n?.md && {
          "md:grid-cols-1": n.md === 1,
          "md:grid-cols-2": n.md === 2,
          "md:grid-cols-3": n.md === 3,
          "md:grid-cols-4": n.md === 4,
          "md:grid-cols-5": n.md === 5,
          "md:grid-cols-6": n.md === 6,
          "md:grid-cols-12": n.md === 12
        },
        n?.lg && {
          "lg:grid-cols-1": n.lg === 1,
          "lg:grid-cols-2": n.lg === 2,
          "lg:grid-cols-3": n.lg === 3,
          "lg:grid-cols-4": n.lg === 4,
          "lg:grid-cols-5": n.lg === 5,
          "lg:grid-cols-6": n.lg === 6,
          "lg:grid-cols-12": n.lg === 12
        },
        n?.xl && {
          "xl:grid-cols-1": n.xl === 1,
          "xl:grid-cols-2": n.xl === 2,
          "xl:grid-cols-3": n.xl === 3,
          "xl:grid-cols-4": n.xl === 4,
          "xl:grid-cols-5": n.xl === 5,
          "xl:grid-cols-6": n.xl === 6,
          "xl:grid-cols-12": n.xl === 12
        },
        {
          "gap-0": t === 0,
          "gap-1": t === 1,
          "gap-2": t === 2,
          "gap-3": t === 3,
          "gap-4": t === 4,
          "gap-5": t === 5,
          "gap-6": t === 6,
          "gap-8": t === 8,
          "gap-10": t === 10,
          "gap-12": t === 12
        },
        r
      ),
      ...s
    }
  );
}
function dN({
  className: r,
  loading: e = !1,
  loadingText: t,
  children: n,
  disabled: s,
  ...i
}) {
  return /* @__PURE__ */ T(pe, { className: f(r), disabled: s || e, ...i, children: [
    e && /* @__PURE__ */ o($u, { className: "mr-2 h-4 w-4" }),
    e && t || n
  ] });
}
function uN({ className: r, count: e = 3, variant: t = "default", ...n }) {
  return t === "card" ? /* @__PURE__ */ o("div", { className: f("space-y-4", r), ...n, children: Array.from({ length: e }).map((s, i) => /* @__PURE__ */ T("div", { className: "space-y-2 p-4 border rounded-lg", children: [
    /* @__PURE__ */ o(Pe, { className: "h-4 w-3/4" }),
    /* @__PURE__ */ o(Pe, { className: "h-4 w-1/2" }),
    /* @__PURE__ */ o(Pe, { className: "h-4 w-2/3" })
  ] }, i)) }) : t === "list" ? /* @__PURE__ */ o("div", { className: f("space-y-2", r), ...n, children: Array.from({ length: e }).map((s, i) => /* @__PURE__ */ o(Pe, { className: "h-12 w-full" }, i)) }) : t === "table" ? /* @__PURE__ */ T("div", { className: f("space-y-2", r), ...n, children: [
    /* @__PURE__ */ T("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ o(Pe, { className: "h-10 flex-1" }),
      /* @__PURE__ */ o(Pe, { className: "h-10 flex-1" }),
      /* @__PURE__ */ o(Pe, { className: "h-10 flex-1" })
    ] }),
    Array.from({ length: e }).map((s, i) => /* @__PURE__ */ T("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ o(Pe, { className: "h-12 flex-1" }),
      /* @__PURE__ */ o(Pe, { className: "h-12 flex-1" }),
      /* @__PURE__ */ o(Pe, { className: "h-12 flex-1" })
    ] }, i))
  ] }) : /* @__PURE__ */ o("div", { className: f("space-y-2", r), ...n, children: Array.from({ length: e }).map((s, i) => /* @__PURE__ */ o(Pe, { className: "h-4 w-full" }, i)) });
}
function fN({
  className: r,
  direction: e = "column",
  spacing: t = 2,
  align: n,
  justify: s,
  wrap: i = !1,
  ...a
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: f(
        "flex",
        e === "row" ? "flex-row" : "flex-col",
        i && "flex-wrap",
        {
          "gap-0": t === 0,
          "gap-1": t === 1,
          "gap-2": t === 2,
          "gap-3": t === 3,
          "gap-4": t === 4,
          "gap-5": t === 5,
          "gap-6": t === 6,
          "gap-8": t === 8,
          "gap-10": t === 10,
          "gap-12": t === 12
        },
        {
          "items-start": n === "start",
          "items-center": n === "center",
          "items-end": n === "end",
          "items-stretch": n === "stretch"
        },
        {
          "justify-start": s === "start",
          "justify-center": s === "center",
          "justify-end": s === "end",
          "justify-between": s === "between",
          "justify-around": s === "around",
          "justify-evenly": s === "evenly"
        },
        r
      ),
      ...a
    }
  );
}
const s1 = {
  success: {
    label: "Success",
    className: "bg-green-500/10 text-green-700 border-green-500/20 dark:text-green-400 dark:bg-green-500/20"
  },
  error: {
    label: "Error",
    className: "bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-400 dark:bg-red-500/20"
  },
  warning: {
    label: "Warning",
    className: "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-400 dark:bg-amber-500/20"
  },
  info: {
    label: "Info",
    className: "bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-blue-400 dark:bg-blue-500/20"
  },
  pending: {
    label: "Pending",
    className: "bg-gray-500/10 text-gray-700 border-gray-500/20 dark:text-gray-400 dark:bg-gray-500/20"
  },
  default: {
    label: "Default",
    className: ""
  }
};
function hN({ className: r, status: e, label: t, ...n }) {
  const s = s1[e];
  return /* @__PURE__ */ o(un, { variant: "outline", className: f(s.className, r), ...n, children: t || s.label });
}
export {
  S1 as Accordion,
  A1 as AccordionContent,
  T1 as AccordionItem,
  C1 as AccordionTrigger,
  Jo as Alert,
  tl as AlertDescription,
  k1 as AlertDialog,
  M1 as AlertDialogAction,
  D1 as AlertDialogCancel,
  L1 as AlertDialogContent,
  R1 as AlertDialogDescription,
  O1 as AlertDialogFooter,
  I1 as AlertDialogHeader,
  Id as AlertDialogOverlay,
  Ld as AlertDialogPortal,
  q1 as AlertDialogTitle,
  _1 as AlertDialogTrigger,
  el as AlertTitle,
  B1 as AspectRatio,
  z1 as Avatar,
  P1 as AvatarFallback,
  $1 as AvatarImage,
  Yt as BREAKPOINTS,
  un as Badge,
  j1 as Breadcrumb,
  K1 as BreadcrumbEllipsis,
  U1 as BreadcrumbItem,
  H1 as BreadcrumbLink,
  F1 as BreadcrumbList,
  G1 as BreadcrumbPage,
  V1 as BreadcrumbSeparator,
  pe as Button,
  W1 as ButtonGroup,
  Y1 as ButtonGroupSeparator,
  Z1 as ButtonGroupText,
  nl as Calendar,
  Rd as CalendarDayButton,
  X1 as Card,
  tv as CardAction,
  rv as CardContent,
  ev as CardDescription,
  nv as CardFooter,
  Q1 as CardHeader,
  J1 as CardTitle,
  sv as Carousel,
  iv as CarouselContent,
  av as CarouselItem,
  lv as CarouselNext,
  ov as CarouselPrevious,
  cv as ChartContainer,
  fv as ChartLegend,
  hv as ChartLegendContent,
  Dd as ChartStyle,
  dv as ChartTooltip,
  uv as ChartTooltipContent,
  ol as Checkbox,
  mv as Collapsible,
  pv as CollapsibleContent,
  gv as CollapsibleTrigger,
  Pd as Combobox,
  na as Command,
  xv as CommandDialog,
  gl as CommandEmpty,
  pl as CommandGroup,
  hl as CommandInput,
  bl as CommandItem,
  ml as CommandList,
  yv as CommandSeparator,
  wv as CommandShortcut,
  e1 as ConfirmDialog,
  nN as Container,
  Ev as ContextMenu,
  qv as ContextMenuCheckboxItem,
  Iv as ContextMenuContent,
  Tv as ContextMenuGroup,
  Ov as ContextMenuItem,
  Mv as ContextMenuLabel,
  Cv as ContextMenuPortal,
  kv as ContextMenuRadioGroup,
  Rv as ContextMenuRadioItem,
  Dv as ContextMenuSeparator,
  Bv as ContextMenuShortcut,
  Av as ContextMenuSub,
  Lv as ContextMenuSubContent,
  _v as ContextMenuSubTrigger,
  Sv as ContextMenuTrigger,
  Da as DATE_FORMATS,
  sN as DataTable,
  Ud as DatePicker,
  Gd as DateRangePicker,
  iN as DeleteConfirmDialog,
  ll as Dialog,
  vv as DialogClose,
  cl as DialogContent,
  fl as DialogDescription,
  $d as DialogFooter,
  dl as DialogHeader,
  zd as DialogOverlay,
  Bd as DialogPortal,
  ul as DialogTitle,
  bv as DialogTrigger,
  aN as Divider,
  zv as Drawer,
  Pv as DrawerClose,
  jv as DrawerContent,
  Gv as DrawerDescription,
  Uv as DrawerFooter,
  Fv as DrawerHeader,
  Kd as DrawerOverlay,
  Vd as DrawerPortal,
  Hv as DrawerTitle,
  $v as DrawerTrigger,
  Vv as DropdownMenu,
  Qv as DropdownMenuCheckboxItem,
  Zv as DropdownMenuContent,
  Yv as DropdownMenuGroup,
  Xv as DropdownMenuItem,
  tx as DropdownMenuLabel,
  Kv as DropdownMenuPortal,
  Jv as DropdownMenuRadioGroup,
  ex as DropdownMenuRadioItem,
  rx as DropdownMenuSeparator,
  nx as DropdownMenuShortcut,
  sx as DropdownMenuSub,
  ax as DropdownMenuSubContent,
  ix as DropdownMenuSubTrigger,
  Wv as DropdownMenuTrigger,
  Wd as Empty,
  eu as EmptyContent,
  Jd as EmptyDescription,
  Zd as EmptyHeader,
  Xd as EmptyMedia,
  oN as EmptyState,
  Qd as EmptyTitle,
  lN as ErrorBoundary,
  te as FORM_SIZES,
  dx as Field,
  ux as FieldContent,
  mx as FieldDescription,
  px as FieldError,
  cx as FieldGroup,
  fx as FieldLabel,
  lx as FieldLegend,
  gx as FieldSeparator,
  ox as FieldSet,
  hx as FieldTitle,
  bx as Form,
  wx as FormControl,
  Nx as FormDescription,
  vx as FormField,
  xx as FormItem,
  yx as FormLabel,
  Ex as FormMessage,
  cN as Grid,
  Sx as HoverCard,
  Cx as HoverCardContent,
  Tx as HoverCardTrigger,
  Pt as Input,
  Ax as InputGroup,
  kx as InputGroupAddon,
  _x as InputGroupButton,
  Ix as InputGroupInput,
  Lx as InputGroupText,
  Ox as InputGroupTextarea,
  qx as InputOTP,
  Rx as InputOTPGroup,
  Dx as InputOTPSeparator,
  Mx as InputOTPSlot,
  $x as Item,
  Hx as ItemActions,
  jx as ItemContent,
  Ux as ItemDescription,
  Vx as ItemFooter,
  Bx as ItemGroup,
  Gx as ItemHeader,
  Px as ItemMedia,
  zx as ItemSeparator,
  Fx as ItemTitle,
  Kx as Kbd,
  Wx as KbdGroup,
  ye as Label,
  dN as LoadingButton,
  uN as LoadingState,
  Zx as Menubar,
  ry as MenubarCheckboxItem,
  ey as MenubarContent,
  Xx as MenubarGroup,
  ty as MenubarItem,
  sy as MenubarLabel,
  Yx as MenubarMenu,
  au as MenubarPortal,
  Qx as MenubarRadioGroup,
  ny as MenubarRadioItem,
  iy as MenubarSeparator,
  ay as MenubarShortcut,
  oy as MenubarSub,
  cy as MenubarSubContent,
  ly as MenubarSubTrigger,
  Jx as MenubarTrigger,
  dy as MultipleCombobox,
  uy as NavigationMenu,
  gy as NavigationMenuContent,
  by as NavigationMenuIndicator,
  hy as NavigationMenuItem,
  py as NavigationMenuLink,
  fy as NavigationMenuList,
  my as NavigationMenuTrigger,
  lu as NavigationMenuViewport,
  cu as Pagination,
  du as PaginationContent,
  vy as PaginationEllipsis,
  an as PaginationItem,
  yn as PaginationLink,
  fu as PaginationNext,
  uu as PaginationPrevious,
  pu as PaginationRange,
  gs as Popover,
  Nv as PopoverAnchor,
  bs as PopoverContent,
  ps as PopoverTrigger,
  bu as Progress,
  ys as REGEX,
  Rw as RHFCheckboxGroup,
  Mw as RHFCombobox,
  Dw as RHFDatePicker,
  Bw as RHFDateRangePicker,
  Gw as RHFEditor,
  Vw as RHFErrorMessage,
  Kw as RHFFileUpload,
  Ww as RHFFormattedInput,
  Zw as RHFInput,
  Yw as RHFMultiSelect,
  Xw as RHFNumberInput,
  Qw as RHFRadioGroup,
  Jw as RHFSwitch,
  eN as RHFTextArea,
  tN as RHFTimePicker,
  rN as RHFUpload,
  vu as RadioGroup,
  xy as RadioGroupItem,
  Ny as ResizableHandle,
  wy as ResizablePanel,
  yy as ResizablePanelGroup,
  sn as ScrollArea,
  jd as ScrollBar,
  wl as Select,
  Sl as SelectContent,
  Ey as SelectGroup,
  Tl as SelectItem,
  Sy as SelectLabel,
  yu as SelectScrollDownButton,
  xu as SelectScrollUpButton,
  Ty as SelectSeparator,
  El as SelectTrigger,
  Nl as SelectValue,
  Et as Separator,
  wu as Sheet,
  Ay as SheetClose,
  Su as SheetContent,
  Au as SheetDescription,
  ky as SheetFooter,
  Tu as SheetHeader,
  Cu as SheetTitle,
  Cy as SheetTrigger,
  Ly as Sidebar,
  zy as SidebarContent,
  Dy as SidebarFooter,
  $y as SidebarGroup,
  jy as SidebarGroupAction,
  Fy as SidebarGroupContent,
  Py as SidebarGroupLabel,
  My as SidebarHeader,
  Ry as SidebarInput,
  qy as SidebarInset,
  Uy as SidebarMenu,
  Vy as SidebarMenuAction,
  Ky as SidebarMenuBadge,
  Gy as SidebarMenuButton,
  Hy as SidebarMenuItem,
  Wy as SidebarMenuSkeleton,
  Zy as SidebarMenuSub,
  Xy as SidebarMenuSubButton,
  Yy as SidebarMenuSubItem,
  _y as SidebarProvider,
  Oy as SidebarRail,
  By as SidebarSeparator,
  Iy as SidebarTrigger,
  Pe as Skeleton,
  Qy as Slider,
  $u as Spinner,
  fN as Stack,
  hN as StatusBadge,
  Pu as Switch,
  ju as Table,
  Uu as TableBody,
  tw as TableCaption,
  Ma as TableCell,
  ew as TableFooter,
  Hu as TableHead,
  Fu as TableHeader,
  vi as TableRow,
  rw as Tabs,
  iw as TabsContent,
  nw as TabsList,
  sw as TabsTrigger,
  yl as Textarea,
  Ra as TimePicker,
  Jy as Toaster,
  aw as Toggle,
  ow as ToggleGroup,
  lw as ToggleGroupItem,
  _u as Tooltip,
  Iu as TooltipContent,
  Cl as TooltipProvider,
  Lu as TooltipTrigger,
  Od as badgeVariants,
  qd as buttonGroupVariants,
  Ir as buttonVariants,
  f as cn,
  rl as formSizeVariants,
  cw as formatCurrency,
  dw as formatDate,
  xi as formatFileSize,
  uw as formatPhoneNumber,
  Ze as get,
  kd as hasValue,
  ou as navigationMenuTriggerStyle,
  hw as toast,
  kl as toggleVariants,
  fw as truncate,
  qw as useAriaLabel,
  vw as useBreakpoint,
  Sw as useClickOutside,
  Aw as useCopyToClipboard,
  ww as useDebounce,
  Nw as useDebouncedCallback,
  Iw as useFocusTrap,
  vs as useFormField,
  ku as useIsMobile,
  yw as useIsTablet,
  Ow as useKeyboardNavigation,
  Tw as useLocalStorage,
  wr as useMediaQuery,
  Lw as useMemoizedCallback,
  _w as usePrevious,
  Cw as useSessionStorage,
  xs as useSidebar,
  Ew as useThrottle,
  kw as useToggle,
  xw as useWindowSize,
  mw as validateEmail,
  gw as validatePhone,
  bw as validateURL,
  pw as validateVietnamesePhone
};
//# sourceMappingURL=index.mjs.map
