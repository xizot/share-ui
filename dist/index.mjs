import { jsx as a, jsxs as s, Fragment as xe } from "react/jsx-runtime";
import * as p from "react";
import { useMemo as Oe, useState as we } from "react";
import * as q from "@radix-ui/react-accordion";
import { ChevronDownIcon as H, ChevronRight as He, MoreHorizontal as Be, ChevronLeftIcon as Ne, ChevronRightIcon as U, ArrowLeft as $e, ArrowRight as Ve, CheckIcon as B, XIcon as ye, SearchIcon as Ke, CircleIcon as Z, MinusIcon as qe, MoreHorizontalIcon as We, GripVerticalIcon as Ue, ChevronUpIcon as Xe, PanelLeftIcon as Ye, Loader2Icon as ke, OctagonXIcon as Je, TriangleAlertIcon as Qe, InfoIcon as Ze, CircleCheckIcon as et, CalendarIcon as Ce } from "lucide-react";
import { clsx as tt } from "clsx";
import { twMerge as at } from "tailwind-merge";
import { cva as T } from "class-variance-authority";
import * as R from "@radix-ui/react-alert-dialog";
import { Slot as M } from "@radix-ui/react-slot";
import * as rt from "@radix-ui/react-aspect-ratio";
import * as le from "@radix-ui/react-avatar";
import * as nt from "@radix-ui/react-separator";
import { getDefaultClassNames as ze, DayPicker as ot } from "react-day-picker";
import it from "embla-carousel-react";
import * as ce from "recharts";
import * as pe from "@radix-ui/react-checkbox";
import * as ue from "@radix-ui/react-collapsible";
import { Command as L } from "cmdk";
import * as C from "@radix-ui/react-dialog";
import * as st from "@radix-ui/react-label";
import * as W from "@radix-ui/react-popover";
import * as z from "@radix-ui/react-context-menu";
import { Drawer as j } from "vaul";
import * as _ from "@radix-ui/react-dropdown-menu";
import { FormProvider as dt, useFormContext as lt, useFormState as $, Controller as E, useController as ct } from "react-hook-form";
import * as Q from "@radix-ui/react-hover-card";
import { OTPInput as ut, OTPInputContext as mt } from "input-otp";
import * as S from "@radix-ui/react-menubar";
import * as A from "@radix-ui/react-navigation-menu";
import * as be from "@radix-ui/react-progress";
import * as se from "@radix-ui/react-radio-group";
import { Group as ft, Panel as gt, Separator as pt } from "react-resizable-panels";
import * as K from "@radix-ui/react-scroll-area";
import * as I from "@radix-ui/react-select";
import * as G from "@radix-ui/react-tooltip";
import * as Y from "@radix-ui/react-slider";
import { useTheme as bt } from "next-themes";
import { Toaster as vt, toast as P } from "sonner";
import * as ve from "@radix-ui/react-switch";
import * as ee from "@radix-ui/react-tabs";
import * as ht from "@radix-ui/react-toggle";
import * as _e from "@radix-ui/react-toggle-group";
import { format as J } from "date-fns";
function r(...e) {
  return at(tt(e));
}
function X(e, t) {
  const n = t.split(".");
  let o = e;
  for (const i of n) {
    if (o == null || typeof o != "object")
      return;
    o = o[i];
  }
  return o;
}
function xt(e) {
  return !(e == null || typeof e == "string" && e.trim() === "");
}
function Va({
  ...e
}) {
  return /* @__PURE__ */ a(q.Root, { "data-slot": "accordion", ...e });
}
function Ka({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    q.Item,
    {
      "data-slot": "accordion-item",
      className: r("border-b last:border-b-0", e),
      ...t
    }
  );
}
function qa({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ a(q.Header, { className: "flex", children: /* @__PURE__ */ s(
    q.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: r(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ a(H, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function Wa({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    q.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...n,
      children: /* @__PURE__ */ a("div", { className: r("pt-0 pb-4", e), children: t })
    }
  );
}
const wt = T(
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
), Nt = p.forwardRef(({ className: e, variant: t, ...n }, o) => /* @__PURE__ */ a(
  "div",
  {
    ref: o,
    role: "alert",
    className: r(wt({ variant: t }), e),
    ...n
  }
));
Nt.displayName = "Alert";
const yt = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "h5",
  {
    ref: n,
    className: r("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
yt.displayName = "AlertTitle";
const kt = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "div",
  {
    ref: n,
    className: r("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
kt.displayName = "AlertDescription";
const O = T(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
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
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function F({
  className: e,
  variant: t = "default",
  size: n = "default",
  asChild: o = !1,
  ...i
}) {
  return /* @__PURE__ */ a(
    o ? M : "button",
    {
      "data-slot": "button",
      "data-variant": t,
      "data-size": n,
      className: r(O({ variant: t, size: n, className: e })),
      ...i
    }
  );
}
function Ua({
  ...e
}) {
  return /* @__PURE__ */ a(R.Root, { "data-slot": "alert-dialog", ...e });
}
function Xa({
  ...e
}) {
  return /* @__PURE__ */ a(R.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function Ct({
  ...e
}) {
  return /* @__PURE__ */ a(R.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function zt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: r(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Ya({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ s(Ct, { children: [
    /* @__PURE__ */ a(zt, {}),
    /* @__PURE__ */ a(
      R.Content,
      {
        "data-slot": "alert-dialog-content",
        className: r(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...t
      }
    )
  ] });
}
function Ja({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: r("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function Qa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: r(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        e
      ),
      ...t
    }
  );
}
function Za({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Title,
    {
      "data-slot": "alert-dialog-title",
      className: r("text-lg font-semibold", e),
      ...t
    }
  );
}
function er({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Description,
    {
      "data-slot": "alert-dialog-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function tr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Action,
    {
      className: r(O(), e),
      ...t
    }
  );
}
function ar({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Cancel,
    {
      className: r(O({ variant: "outline" }), e),
      ...t
    }
  );
}
function rr({
  ...e
}) {
  return /* @__PURE__ */ a(rt.Root, { "data-slot": "aspect-ratio", ...e });
}
function nr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    le.Root,
    {
      "data-slot": "avatar",
      className: r(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        e
      ),
      ...t
    }
  );
}
function or({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    le.Image,
    {
      "data-slot": "avatar-image",
      className: r("aspect-square size-full", e),
      ...t
    }
  );
}
function ir({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    le.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: r(
        "bg-muted flex size-full items-center justify-center rounded-full",
        e
      ),
      ...t
    }
  );
}
const _t = T(
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
function St({
  className: e,
  variant: t,
  asChild: n = !1,
  ...o
}) {
  return /* @__PURE__ */ a(
    n ? M : "span",
    {
      "data-slot": "badge",
      className: r(_t({ variant: t }), e),
      ...o
    }
  );
}
function sr({ ...e }) {
  return /* @__PURE__ */ a("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function dr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: r(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        e
      ),
      ...t
    }
  );
}
function lr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: r("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function cr({
  asChild: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    e ? M : "a",
    {
      "data-slot": "breadcrumb-link",
      className: r("hover:text-foreground transition-colors", t),
      ...n
    }
  );
}
function ur({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: r("text-foreground font-normal", e),
      ...t
    }
  );
}
function mr({
  children: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: r("[&>svg]:size-3.5", t),
      ...n,
      children: e ?? /* @__PURE__ */ a(He, {})
    }
  );
}
function fr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ s(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: r("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ a(Be, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
function te({
  className: e,
  orientation: t = "horizontal",
  decorative: n = !0,
  ...o
}) {
  return /* @__PURE__ */ a(
    nt.Root,
    {
      "data-slot": "separator",
      decorative: n,
      orientation: t,
      className: r(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...o
    }
  );
}
const It = T(
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
function gr({
  className: e,
  orientation: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "button-group",
      "data-orientation": t,
      className: r(It({ orientation: t }), e),
      ...n
    }
  );
}
function pr({
  className: e,
  asChild: t = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    t ? M : "div",
    {
      className: r(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function br({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ a(
    te,
    {
      "data-slot": "button-group-separator",
      orientation: t,
      className: r(
        "bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
        e
      ),
      ...n
    }
  );
}
function Se({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  captionLayout: o = "label",
  buttonVariant: i = "ghost",
  formatters: l,
  components: c,
  ...u
}) {
  const d = ze();
  return /* @__PURE__ */ a(
    ot,
    {
      showOutsideDays: n,
      className: r(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: o,
      formatters: {
        formatMonthDropdown: (m) => m.toLocaleString("default", { month: "short" }),
        ...l
      },
      classNames: {
        root: r("w-fit", d.root),
        months: r(
          "flex gap-4 flex-col md:flex-row relative",
          d.months
        ),
        month: r("flex flex-col w-full gap-4", d.month),
        nav: r(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          d.nav
        ),
        button_previous: r(
          O({ variant: i }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          d.button_previous
        ),
        button_next: r(
          O({ variant: i }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          d.button_next
        ),
        month_caption: r(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          d.month_caption
        ),
        dropdowns: r(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          d.dropdowns
        ),
        dropdown_root: r(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          d.dropdown_root
        ),
        dropdown: r(
          "absolute bg-popover inset-0 opacity-0",
          d.dropdown
        ),
        caption_label: r(
          "select-none font-medium",
          o === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          d.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: r("flex", d.weekdays),
        weekday: r(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          d.weekday
        ),
        week: r("flex w-full mt-2", d.week),
        week_number_header: r(
          "select-none w-(--cell-size)",
          d.week_number_header
        ),
        week_number: r(
          "text-[0.8rem] select-none text-muted-foreground",
          d.week_number
        ),
        day: r(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          u.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          d.day
        ),
        range_start: r(
          "rounded-l-md bg-accent",
          d.range_start
        ),
        range_middle: r("rounded-none", d.range_middle),
        range_end: r("rounded-r-md bg-accent", d.range_end),
        today: r(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          d.today
        ),
        outside: r(
          "text-muted-foreground aria-selected:text-muted-foreground",
          d.outside
        ),
        disabled: r(
          "text-muted-foreground opacity-50",
          d.disabled
        ),
        hidden: r("invisible", d.hidden),
        ...t
      },
      components: {
        Root: ({ className: m, rootRef: f, ...h }) => /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "calendar",
            ref: f,
            className: r(m),
            ...h
          }
        ),
        Chevron: ({ className: m, orientation: f, ...h }) => f === "left" ? /* @__PURE__ */ a(Ne, { className: r("size-4", m), ...h }) : f === "right" ? /* @__PURE__ */ a(
          U,
          {
            className: r("size-4", m),
            ...h
          }
        ) : /* @__PURE__ */ a(H, { className: r("size-4", m), ...h }),
        DayButton: Tt,
        WeekNumber: ({ children: m, ...f }) => /* @__PURE__ */ a("td", { ...f, children: /* @__PURE__ */ a("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: m }) }),
        ...c
      },
      ...u
    }
  );
}
function Tt({
  className: e,
  day: t,
  modifiers: n,
  ...o
}) {
  const i = ze(), l = p.useRef(null);
  return p.useEffect(() => {
    n.focused && l.current?.focus();
  }, [n.focused]), /* @__PURE__ */ a(
    F,
    {
      ref: l,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(),
      "data-selected-single": n.selected && !n.range_start && !n.range_end && !n.range_middle,
      "data-range-start": n.range_start,
      "data-range-end": n.range_end,
      "data-range-middle": n.range_middle,
      className: r(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        i.day,
        e
      ),
      ...o
    }
  );
}
function vr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card",
      className: r(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function hr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-header",
      className: r(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function xr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-title",
      className: r("leading-none font-semibold", e),
      ...t
    }
  );
}
function wr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Nr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-action",
      className: r(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        e
      ),
      ...t
    }
  );
}
function yr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-content",
      className: r("px-6", e),
      ...t
    }
  );
}
function kr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-footer",
      className: r("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const Ie = p.createContext(null);
function ae() {
  const e = p.useContext(Ie);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function Cr({
  orientation: e = "horizontal",
  opts: t,
  setApi: n,
  plugins: o,
  className: i,
  children: l,
  ...c
}) {
  const [u, d] = it(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    o
  ), [m, f] = p.useState(!1), [h, x] = p.useState(!1), w = p.useCallback((v) => {
    v && (f(v.canScrollPrev()), x(v.canScrollNext()));
  }, []), N = p.useCallback(() => {
    d?.scrollPrev();
  }, [d]), k = p.useCallback(() => {
    d?.scrollNext();
  }, [d]), g = p.useCallback(
    (v) => {
      v.key === "ArrowLeft" ? (v.preventDefault(), N()) : v.key === "ArrowRight" && (v.preventDefault(), k());
    },
    [N, k]
  );
  return p.useEffect(() => {
    !d || !n || n(d);
  }, [d, n]), p.useEffect(() => {
    if (d)
      return w(d), d.on("reInit", w), d.on("select", w), () => {
        d?.off("select", w);
      };
  }, [d, w]), /* @__PURE__ */ a(
    Ie.Provider,
    {
      value: {
        carouselRef: u,
        api: d,
        opts: t,
        orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: N,
        scrollNext: k,
        canScrollPrev: m,
        canScrollNext: h
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          onKeyDownCapture: g,
          className: r("relative", i),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...c,
          children: l
        }
      )
    }
  );
}
function zr({ className: e, ...t }) {
  const { carouselRef: n, orientation: o } = ae();
  return /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ a(
        "div",
        {
          className: r(
            "flex",
            o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            e
          ),
          ...t
        }
      )
    }
  );
}
function _r({ className: e, ...t }) {
  const { orientation: n } = ae();
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: r(
        "min-w-0 shrink-0 grow-0 basis-full",
        n === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
}
function Sr({
  className: e,
  variant: t = "outline",
  size: n = "icon",
  ...o
}) {
  const { orientation: i, scrollPrev: l, canScrollPrev: c } = ae();
  return /* @__PURE__ */ s(
    F,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: n,
      className: r(
        "absolute size-8 rounded-full",
        i === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !c,
      onClick: l,
      ...o,
      children: [
        /* @__PURE__ */ a($e, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function Ir({
  className: e,
  variant: t = "outline",
  size: n = "icon",
  ...o
}) {
  const { orientation: i, scrollNext: l, canScrollNext: c } = ae();
  return /* @__PURE__ */ s(
    F,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: n,
      className: r(
        "absolute size-8 rounded-full",
        i === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !c,
      onClick: l,
      ...o,
      children: [
        /* @__PURE__ */ a(Ve, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const Mt = { light: "", dark: ".dark" }, Te = p.createContext(null);
function Me() {
  const e = p.useContext(Te);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function Tr({
  id: e,
  className: t,
  children: n,
  config: o,
  ...i
}) {
  const l = p.useId(), c = `chart-${e || l.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(Te.Provider, { value: { config: o }, children: /* @__PURE__ */ s(
    "div",
    {
      "data-slot": "chart",
      "data-chart": c,
      className: r(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...i,
      children: [
        /* @__PURE__ */ a(Dt, { id: c, config: o }),
        /* @__PURE__ */ a(ce.ResponsiveContainer, { children: n })
      ]
    }
  ) });
}
const Dt = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(
    ([, o]) => o.theme || o.color
  );
  return n.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(Mt).map(
          ([o, i]) => `
${i} [data-chart=${e}] {
${n.map(([l, c]) => {
            const u = c.theme?.[o] || c.color;
            return u ? `  --color-${l}: ${u};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, Mr = ce.Tooltip;
function Dr({
  active: e,
  payload: t,
  className: n,
  indicator: o = "dot",
  hideLabel: i = !1,
  hideIndicator: l = !1,
  label: c,
  labelFormatter: u,
  labelClassName: d,
  formatter: m,
  color: f,
  nameKey: h,
  labelKey: x
}) {
  const { config: w } = Me(), N = p.useMemo(() => {
    if (i || !t?.length)
      return null;
    const [g] = t, v = `${x || g?.dataKey || g?.name || "value"}`, b = de(w, g, v), y = !x && typeof c == "string" ? w[c]?.label || c : b?.label;
    return u ? /* @__PURE__ */ a("div", { className: r("font-medium", d), children: u(y, t) }) : y ? /* @__PURE__ */ a("div", { className: r("font-medium", d), children: y }) : null;
  }, [
    c,
    u,
    t,
    i,
    d,
    w,
    x
  ]);
  if (!e || !t?.length)
    return null;
  const k = t.length === 1 && o !== "dot";
  return /* @__PURE__ */ s(
    "div",
    {
      className: r(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        n
      ),
      children: [
        k ? null : N,
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: t.filter((g) => g.type !== "none").map((g, v) => {
          const b = `${h || g.name || g.dataKey || "value"}`, y = de(w, g, b), V = f || g.payload.fill || g.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: r(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                o === "dot" && "items-center"
              ),
              children: m && g?.value !== void 0 && g.name ? m(g.value, g.name, g, v, g.payload) : /* @__PURE__ */ s(xe, { children: [
                y?.icon ? /* @__PURE__ */ a(y.icon, {}) : !l && /* @__PURE__ */ a(
                  "div",
                  {
                    className: r(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": o === "dot",
                        "w-1": o === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": o === "dashed",
                        "my-0.5": k && o === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": V,
                      "--color-border": V
                    }
                  }
                ),
                /* @__PURE__ */ s(
                  "div",
                  {
                    className: r(
                      "flex flex-1 justify-between leading-none",
                      k ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ s("div", { className: "grid gap-1.5", children: [
                        k ? N : null,
                        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: y?.label || g.name })
                      ] }),
                      g.value && /* @__PURE__ */ a("span", { className: "text-foreground font-mono font-medium tabular-nums", children: g.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            g.dataKey
          );
        }) })
      ]
    }
  );
}
const Pr = ce.Legend;
function Rr({
  className: e,
  hideIcon: t = !1,
  payload: n,
  verticalAlign: o = "bottom",
  nameKey: i
}) {
  const { config: l } = Me();
  return n?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: r(
        "flex items-center justify-center gap-4",
        o === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: n.filter((c) => c.type !== "none").map((c) => {
        const u = `${i || c.dataKey || "value"}`, d = de(l, c, u);
        return /* @__PURE__ */ s(
          "div",
          {
            className: r(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            ),
            children: [
              d?.icon && !t ? /* @__PURE__ */ a(d.icon, {}) : /* @__PURE__ */ a(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: c.color
                  }
                }
              ),
              d?.label
            ]
          },
          c.value
        );
      })
    }
  ) : null;
}
function de(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const o = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let i = n;
  return n in t && typeof t[n] == "string" ? i = t[n] : o && n in o && typeof o[n] == "string" && (i = o[n]), i in e ? e[i] : e[n];
}
function jr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    pe.Root,
    {
      "data-slot": "checkbox",
      className: r(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        pe.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ a(B, { className: "size-3.5" })
        }
      )
    }
  );
}
function Ar({
  ...e
}) {
  return /* @__PURE__ */ a(ue.Root, { "data-slot": "collapsible", ...e });
}
function Fr({
  ...e
}) {
  return /* @__PURE__ */ a(
    ue.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...e
    }
  );
}
function Lr({
  ...e
}) {
  return /* @__PURE__ */ a(
    ue.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...e
    }
  );
}
function Pt({
  ...e
}) {
  return /* @__PURE__ */ a(C.Root, { "data-slot": "dialog", ...e });
}
function Er({
  ...e
}) {
  return /* @__PURE__ */ a(C.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function Rt({
  ...e
}) {
  return /* @__PURE__ */ a(C.Portal, { "data-slot": "dialog-portal", ...e });
}
function Gr({
  ...e
}) {
  return /* @__PURE__ */ a(C.Close, { "data-slot": "dialog-close", ...e });
}
function jt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    C.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: r(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function At({
  className: e,
  children: t,
  showCloseButton: n = !0,
  ...o
}) {
  return /* @__PURE__ */ s(Rt, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a(jt, {}),
    /* @__PURE__ */ s(
      C.Content,
      {
        "data-slot": "dialog-content",
        className: r(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          e
        ),
        ...o,
        children: [
          t,
          n && /* @__PURE__ */ s(
            C.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ a(ye, {}),
                /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function Ft({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: r("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function Or({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-footer",
      className: r(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        e
      ),
      ...t
    }
  );
}
function Lt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    C.Title,
    {
      "data-slot": "dialog-title",
      className: r("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function Et({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    C.Description,
    {
      "data-slot": "dialog-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function D({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    st.Root,
    {
      "data-slot": "label",
      className: r(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
function De({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L,
    {
      "data-slot": "command",
      className: r(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...t
    }
  );
}
function Hr({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: n,
  className: o,
  showCloseButton: i = !0,
  ...l
}) {
  return /* @__PURE__ */ s(Pt, { ...l, children: [
    /* @__PURE__ */ s(Ft, { className: "sr-only", children: [
      /* @__PURE__ */ a(Lt, { children: e }),
      /* @__PURE__ */ a(Et, { children: t })
    ] }),
    /* @__PURE__ */ a(
      At,
      {
        className: r("overflow-hidden p-0", o),
        showCloseButton: i,
        children: /* @__PURE__ */ a(De, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: n })
      }
    )
  ] });
}
function Gt({
  className: e,
  label: t,
  error: n,
  required: o,
  id: i,
  ...l
}) {
  const c = t || n, u = /* @__PURE__ */ s(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: r(
        "flex h-9 items-center gap-2 border-b px-3",
        n && "border-destructive"
      ),
      children: [
        /* @__PURE__ */ a(Ke, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ a(
          L.Input,
          {
            id: i,
            "data-slot": "command-input",
            "aria-invalid": !!n,
            className: r(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              n && "focus-visible:ring-destructive",
              e
            ),
            ...l
          }
        )
      ]
    }
  );
  return c ? /* @__PURE__ */ s("div", { className: "flex flex-col gap-1", children: [
    t && /* @__PURE__ */ s(D, { htmlFor: i, children: [
      t,
      o && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    u,
    n && /* @__PURE__ */ a("div", { className: "text-destructive text-sm", role: "alert", children: n })
  ] }) : u;
}
function Ot({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L.List,
    {
      "data-slot": "command-list",
      className: r(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        e
      ),
      ...t
    }
  );
}
function Ht({
  ...e
}) {
  return /* @__PURE__ */ a(
    L.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function Bt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L.Group,
    {
      "data-slot": "command-group",
      className: r(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...t
    }
  );
}
function Br({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L.Separator,
    {
      "data-slot": "command-separator",
      className: r("bg-border -mx-1 h-px", e),
      ...t
    }
  );
}
function $t({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L.Item,
    {
      "data-slot": "command-item",
      className: r(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function $r({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "command-shortcut",
      className: r(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function me({
  ...e
}) {
  return /* @__PURE__ */ a(W.Root, { "data-slot": "popover", ...e });
}
function fe({
  ...e
}) {
  return /* @__PURE__ */ a(W.Trigger, { "data-slot": "popover-trigger", ...e });
}
function ge({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...o
}) {
  return /* @__PURE__ */ a(W.Portal, { children: /* @__PURE__ */ a(
    W.Content,
    {
      "data-slot": "popover-content",
      align: t,
      sideOffset: n,
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...o
    }
  ) });
}
function Vr({
  ...e
}) {
  return /* @__PURE__ */ a(W.Anchor, { "data-slot": "popover-anchor", ...e });
}
function Vt({
  options: e,
  value: t,
  onChange: n,
  label: o,
  error: i,
  required: l,
  placeholder: c = "Select option...",
  searchPlaceholder: u = "Search...",
  emptyMessage: d = "No results found.",
  disabled: m = !1,
  className: f,
  triggerClassName: h,
  popoverClassName: x
}) {
  const [w, N] = p.useState(!1), k = p.useMemo(
    () => e.find((b) => b.id === t),
    [e, t]
  ), g = (b) => {
    n?.(b.id, b), N(!1);
  }, v = /* @__PURE__ */ s(me, { open: w, onOpenChange: N, children: [
    /* @__PURE__ */ a(fe, { asChild: !0, children: /* @__PURE__ */ s(
      F,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": w,
        disabled: m,
        className: r(
          "w-full justify-between",
          !t && "text-muted-foreground",
          i && "border-destructive",
          h
        ),
        children: [
          k ? k.name : c,
          /* @__PURE__ */ a(H, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ a(ge, { className: r("w-full p-0", x), align: "start", children: /* @__PURE__ */ s(De, { children: [
      /* @__PURE__ */ a(Gt, { placeholder: u }),
      /* @__PURE__ */ s(Ot, { children: [
        /* @__PURE__ */ a(Ht, { children: d }),
        /* @__PURE__ */ a(Bt, { children: e.map((b) => /* @__PURE__ */ s(
          $t,
          {
            value: b.name,
            disabled: b.disabled,
            onSelect: () => g(b),
            children: [
              /* @__PURE__ */ a(
                B,
                {
                  className: r(
                    "mr-2 h-4 w-4",
                    t === b.id ? "opacity-100" : "opacity-0"
                  )
                }
              ),
              b.name
            ]
          },
          b.id
        )) })
      ] })
    ] }) })
  ] });
  return !o && !i ? /* @__PURE__ */ a("div", { className: r("w-full", f), children: v }) : /* @__PURE__ */ s("div", { className: r("w-full", f), children: [
    o && /* @__PURE__ */ s(D, { className: "text-foreground leading-5 block", children: [
      o,
      l && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ a("div", { className: o ? "mt-1" : "", children: v }),
    i && /* @__PURE__ */ a("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: i })
  ] });
}
function Kr({
  ...e
}) {
  return /* @__PURE__ */ a(z.Root, { "data-slot": "context-menu", ...e });
}
function qr({
  ...e
}) {
  return /* @__PURE__ */ a(z.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function Wr({
  ...e
}) {
  return /* @__PURE__ */ a(z.Group, { "data-slot": "context-menu-group", ...e });
}
function Ur({
  ...e
}) {
  return /* @__PURE__ */ a(z.Portal, { "data-slot": "context-menu-portal", ...e });
}
function Xr({
  ...e
}) {
  return /* @__PURE__ */ a(z.Sub, { "data-slot": "context-menu-sub", ...e });
}
function Yr({
  ...e
}) {
  return /* @__PURE__ */ a(
    z.RadioGroup,
    {
      "data-slot": "context-menu-radio-group",
      ...e
    }
  );
}
function Jr({
  className: e,
  inset: t,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ s(
    z.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": t,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ a(U, { className: "ml-auto" })
      ]
    }
  );
}
function Qr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    z.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function Zr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(z.Portal, { children: /* @__PURE__ */ a(
    z.Content,
    {
      "data-slot": "context-menu-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...t
    }
  ) });
}
function en({
  className: e,
  inset: t,
  variant: n = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    z.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o
    }
  );
}
function tn({
  className: e,
  children: t,
  checked: n,
  ...o
}) {
  return /* @__PURE__ */ s(
    z.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(z.ItemIndicator, { children: /* @__PURE__ */ a(B, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function an({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ s(
    z.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(z.ItemIndicator, { children: /* @__PURE__ */ a(Z, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function rn({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    z.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": t,
      className: r(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...n
    }
  );
}
function nn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    z.Separator,
    {
      "data-slot": "context-menu-separator",
      className: r("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function on({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: r(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function sn({
  ...e
}) {
  return /* @__PURE__ */ a(j.Root, { "data-slot": "drawer", ...e });
}
function dn({
  ...e
}) {
  return /* @__PURE__ */ a(j.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function Kt({
  ...e
}) {
  return /* @__PURE__ */ a(j.Portal, { "data-slot": "drawer-portal", ...e });
}
function ln({
  ...e
}) {
  return /* @__PURE__ */ a(j.Close, { "data-slot": "drawer-close", ...e });
}
function qt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: r(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function cn({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ s(Kt, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ a(qt, {}),
    /* @__PURE__ */ s(
      j.Content,
      {
        "data-slot": "drawer-content",
        className: r(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          e
        ),
        ...n,
        children: [
          /* @__PURE__ */ a("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          t
        ]
      }
    )
  ] });
}
function un({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-header",
      className: r(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        e
      ),
      ...t
    }
  );
}
function mn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-footer",
      className: r("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function fn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Title,
    {
      "data-slot": "drawer-title",
      className: r("text-foreground font-semibold", e),
      ...t
    }
  );
}
function gn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Description,
    {
      "data-slot": "drawer-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function pn({
  ...e
}) {
  return /* @__PURE__ */ a(_.Root, { "data-slot": "dropdown-menu", ...e });
}
function bn({
  ...e
}) {
  return /* @__PURE__ */ a(_.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function vn({
  ...e
}) {
  return /* @__PURE__ */ a(
    _.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function hn({
  className: e,
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ a(_.Portal, { children: /* @__PURE__ */ a(
    _.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...n
    }
  ) });
}
function xn({
  ...e
}) {
  return /* @__PURE__ */ a(_.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function wn({
  className: e,
  inset: t,
  variant: n = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    _.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o
    }
  );
}
function Nn({
  className: e,
  children: t,
  checked: n,
  ...o
}) {
  return /* @__PURE__ */ s(
    _.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(_.ItemIndicator, { children: /* @__PURE__ */ a(B, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function yn({
  ...e
}) {
  return /* @__PURE__ */ a(
    _.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...e
    }
  );
}
function kn({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ s(
    _.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(_.ItemIndicator, { children: /* @__PURE__ */ a(Z, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Cn({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    _.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: r(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...n
    }
  );
}
function zn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    _.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: r("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function _n({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: r(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function Sn({
  ...e
}) {
  return /* @__PURE__ */ a(_.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function In({
  className: e,
  inset: t,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ s(
    _.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": t,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ a(U, { className: "ml-auto size-4" })
      ]
    }
  );
}
function Tn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    _.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function Mn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty",
      className: r(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        e
      ),
      ...t
    }
  );
}
function Dn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-header",
      className: r(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        e
      ),
      ...t
    }
  );
}
const Wt = T(
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
function Pn({
  className: e,
  variant: t = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": t,
      className: r(Wt({ variant: t, className: e })),
      ...n
    }
  );
}
function Rn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-title",
      className: r("text-lg font-medium tracking-tight", e),
      ...t
    }
  );
}
function jn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-description",
      className: r(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function An({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-content",
      className: r(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        e
      ),
      ...t
    }
  );
}
function Fn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "fieldset",
    {
      "data-slot": "field-set",
      className: r(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        e
      ),
      ...t
    }
  );
}
function Ln({
  className: e,
  variant: t = "legend",
  ...n
}) {
  return /* @__PURE__ */ a(
    "legend",
    {
      "data-slot": "field-legend",
      "data-variant": t,
      className: r(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        e
      ),
      ...n
    }
  );
}
function En({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-group",
      className: r(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        e
      ),
      ...t
    }
  );
}
const Ut = T(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
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
  }
);
function Gn({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": t,
      className: r(Ut({ orientation: t }), e),
      ...n
    }
  );
}
function On({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-content",
      className: r(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        e
      ),
      ...t
    }
  );
}
function Hn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    D,
    {
      "data-slot": "field-label",
      className: r(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        e
      ),
      ...t
    }
  );
}
function Bn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-label",
      className: r(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        e
      ),
      ...t
    }
  );
}
function $n({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "field-description",
      className: r(
        "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function Vn({
  children: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ s(
    "div",
    {
      "data-slot": "field-separator",
      "data-content": !!e,
      className: r(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        t
      ),
      ...n,
      children: [
        /* @__PURE__ */ a(te, { className: "absolute inset-0 top-1/2" }),
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
function Kn({
  className: e,
  children: t,
  errors: n,
  ...o
}) {
  const i = Oe(() => {
    if (t)
      return t;
    if (!n?.length)
      return null;
    const l = [
      ...new Map(n.map((c) => [c?.message, c])).values()
    ];
    return l?.length == 1 ? l[0]?.message : /* @__PURE__ */ a("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: l.map(
      (c, u) => c?.message && /* @__PURE__ */ a("li", { children: c.message }, u)
    ) });
  }, [t, n]);
  return i ? /* @__PURE__ */ a(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: r("text-destructive text-sm font-normal", e),
      ...o,
      children: i
    }
  ) : null;
}
const qn = dt, Pe = p.createContext(
  {}
), Wn = ({
  ...e
}) => /* @__PURE__ */ a(Pe.Provider, { value: { name: e.name }, children: /* @__PURE__ */ a(E, { ...e }) }), re = () => {
  const e = p.useContext(Pe), t = p.useContext(Re), { getFieldState: n } = lt(), o = $({ name: e.name }), i = n(e.name, o);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: l } = t;
  return {
    id: l,
    name: e.name,
    formItemId: `${l}-form-item`,
    formDescriptionId: `${l}-form-item-description`,
    formMessageId: `${l}-form-item-message`,
    ...i
  };
}, Re = p.createContext(
  {}
);
function Un({ className: e, ...t }) {
  const n = p.useId();
  return /* @__PURE__ */ a(Re.Provider, { value: { id: n }, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "form-item",
      className: r("grid gap-2", e),
      ...t
    }
  ) });
}
function Xn({
  className: e,
  ...t
}) {
  const { error: n, formItemId: o } = re();
  return /* @__PURE__ */ a(
    D,
    {
      "data-slot": "form-label",
      "data-error": !!n,
      className: r("data-[error=true]:text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
}
function Yn({ ...e }) {
  const { error: t, formItemId: n, formDescriptionId: o, formMessageId: i } = re();
  return /* @__PURE__ */ a(
    M,
    {
      "data-slot": "form-control",
      id: n,
      "aria-describedby": t ? `${o} ${i}` : `${o}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function Jn({ className: e, ...t }) {
  const { formDescriptionId: n } = re();
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "form-description",
      id: n,
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Qn({ className: e, ...t }) {
  const { error: n, formMessageId: o } = re(), i = n ? String(n?.message ?? "") : t.children;
  return i ? /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "form-message",
      id: o,
      className: r("text-destructive text-sm", e),
      ...t,
      children: i
    }
  ) : null;
}
function Zn({
  ...e
}) {
  return /* @__PURE__ */ a(Q.Root, { "data-slot": "hover-card", ...e });
}
function eo({
  ...e
}) {
  return /* @__PURE__ */ a(Q.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function to({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...o
}) {
  return /* @__PURE__ */ a(Q.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ a(
    Q.Content,
    {
      "data-slot": "hover-card-content",
      align: t,
      sideOffset: n,
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...o
    }
  ) });
}
function ne({
  className: e,
  type: t,
  label: n,
  error: o,
  required: i,
  id: l,
  ...c
}) {
  const u = n || o, d = /* @__PURE__ */ a(
    "input",
    {
      type: t,
      id: l,
      "data-slot": "input",
      "aria-invalid": !!o,
      className: r(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        o ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...c
    }
  );
  return u ? /* @__PURE__ */ s("div", { className: "flex flex-col gap-1", children: [
    n && /* @__PURE__ */ s(D, { htmlFor: l, children: [
      n,
      i && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    d,
    o && /* @__PURE__ */ a("div", { className: "text-destructive text-sm", role: "alert", children: o })
  ] }) : d;
}
function je({
  className: e,
  label: t,
  error: n,
  required: o,
  id: i,
  ...l
}) {
  const c = t || n, u = /* @__PURE__ */ a(
    "textarea",
    {
      id: i,
      "data-slot": "textarea",
      "aria-invalid": !!n,
      className: r(
        "border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        n ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...l
    }
  );
  return c ? /* @__PURE__ */ s("div", { className: "flex flex-col gap-1", children: [
    t && /* @__PURE__ */ s(D, { htmlFor: i, children: [
      t,
      o && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    u,
    n && /* @__PURE__ */ a("div", { className: "text-destructive text-sm", role: "alert", children: n })
  ] }) : u;
}
function ao({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: r(
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
const Xt = T(
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
function ro({
  className: e,
  align: t = "inline-start",
  ...n
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": t,
      className: r(Xt({ align: t }), e),
      onClick: (o) => {
        o.target.closest("button") || o.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...n
    }
  );
}
const Yt = T(
  "text-sm shadow-none flex gap-2 items-center",
  {
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
  }
);
function no({
  className: e,
  type: t = "button",
  variant: n = "ghost",
  size: o = "xs",
  ...i
}) {
  return /* @__PURE__ */ a(
    F,
    {
      type: t,
      "data-size": o,
      variant: n,
      className: r(Yt({ size: o }), e),
      ...i
    }
  );
}
function oo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      className: r(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function io({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ne,
    {
      "data-slot": "input-group-control",
      className: r(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        e
      ),
      ...t
    }
  );
}
function so({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    je,
    {
      "data-slot": "input-group-control",
      className: r(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        e
      ),
      ...t
    }
  );
}
function lo({
  className: e,
  containerClassName: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    ut,
    {
      "data-slot": "input-otp",
      containerClassName: r(
        "flex items-center gap-2 has-disabled:opacity-50",
        t
      ),
      className: r("disabled:cursor-not-allowed", e),
      ...n
    }
  );
}
function co({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-otp-group",
      className: r("flex items-center", e),
      ...t
    }
  );
}
function uo({
  index: e,
  className: t,
  ...n
}) {
  const o = p.useContext(mt), { char: i, hasFakeCaret: l, isActive: c } = o?.slots[e] ?? {};
  return /* @__PURE__ */ s(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": c,
      className: r(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        t
      ),
      ...n,
      children: [
        i,
        l && /* @__PURE__ */ a("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ a("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function mo({ ...e }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ a(qe, {}) });
}
function fo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "list",
      "data-slot": "item-group",
      className: r("group/item-group flex flex-col", e),
      ...t
    }
  );
}
function go({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    te,
    {
      "data-slot": "item-separator",
      orientation: "horizontal",
      className: r("my-0", e),
      ...t
    }
  );
}
const Jt = T(
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
function po({
  className: e,
  variant: t = "default",
  size: n = "default",
  asChild: o = !1,
  ...i
}) {
  return /* @__PURE__ */ a(
    o ? M : "div",
    {
      "data-slot": "item",
      "data-variant": t,
      "data-size": n,
      className: r(Jt({ variant: t, size: n, className: e })),
      ...i
    }
  );
}
const Qt = T(
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
function bo({
  className: e,
  variant: t = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-media",
      "data-variant": t,
      className: r(Qt({ variant: t, className: e })),
      ...n
    }
  );
}
function vo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-content",
      className: r(
        "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
        e
      ),
      ...t
    }
  );
}
function ho({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-title",
      className: r(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
        e
      ),
      ...t
    }
  );
}
function xo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "item-description",
      className: r(
        "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function wo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-actions",
      className: r("flex items-center gap-2", e),
      ...t
    }
  );
}
function No({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-header",
      className: r(
        "flex basis-full items-center justify-between gap-2",
        e
      ),
      ...t
    }
  );
}
function yo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-footer",
      className: r(
        "flex basis-full items-center justify-between gap-2",
        e
      ),
      ...t
    }
  );
}
function ko({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "kbd",
    {
      "data-slot": "kbd",
      className: r(
        "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        e
      ),
      ...t
    }
  );
}
function Co({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "kbd",
    {
      "data-slot": "kbd-group",
      className: r("inline-flex items-center gap-1", e),
      ...t
    }
  );
}
function zo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    S.Root,
    {
      "data-slot": "menubar",
      className: r(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        e
      ),
      ...t
    }
  );
}
function _o({
  ...e
}) {
  return /* @__PURE__ */ a(S.Menu, { "data-slot": "menubar-menu", ...e });
}
function So({
  ...e
}) {
  return /* @__PURE__ */ a(S.Group, { "data-slot": "menubar-group", ...e });
}
function Zt({
  ...e
}) {
  return /* @__PURE__ */ a(S.Portal, { "data-slot": "menubar-portal", ...e });
}
function Io({
  ...e
}) {
  return /* @__PURE__ */ a(S.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function To({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    S.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        e
      ),
      ...t
    }
  );
}
function Mo({
  className: e,
  align: t = "start",
  alignOffset: n = -4,
  sideOffset: o = 8,
  ...i
}) {
  return /* @__PURE__ */ a(Zt, { children: /* @__PURE__ */ a(
    S.Content,
    {
      "data-slot": "menubar-content",
      align: t,
      alignOffset: n,
      sideOffset: o,
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        e
      ),
      ...i
    }
  ) });
}
function Do({
  className: e,
  inset: t,
  variant: n = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    S.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": t,
      "data-variant": n,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o
    }
  );
}
function Po({
  className: e,
  children: t,
  checked: n,
  ...o
}) {
  return /* @__PURE__ */ s(
    S.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(S.ItemIndicator, { children: /* @__PURE__ */ a(B, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function Ro({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ s(
    S.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(S.ItemIndicator, { children: /* @__PURE__ */ a(Z, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function jo({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    S.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": t,
      className: r(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...n
    }
  );
}
function Ao({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    S.Separator,
    {
      "data-slot": "menubar-separator",
      className: r("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Fo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: r(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function Lo({
  ...e
}) {
  return /* @__PURE__ */ a(S.Sub, { "data-slot": "menubar-sub", ...e });
}
function Eo({
  className: e,
  inset: t,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ s(
    S.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": t,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ a(U, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function Go({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    S.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function Oo({
  className: e,
  children: t,
  viewport: n = !0,
  ...o
}) {
  return /* @__PURE__ */ s(
    A.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": n,
      className: r(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        e
      ),
      ...o,
      children: [
        t,
        n && /* @__PURE__ */ a(ta, {})
      ]
    }
  );
}
function Ho({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    A.List,
    {
      "data-slot": "navigation-menu-list",
      className: r(
        "group flex flex-1 list-none items-center justify-center gap-1",
        e
      ),
      ...t
    }
  );
}
function Bo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    A.Item,
    {
      "data-slot": "navigation-menu-item",
      className: r("relative", e),
      ...t
    }
  );
}
const ea = T(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function $o({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ s(
    A.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: r(ea(), "group", e),
      ...n,
      children: [
        t,
        " ",
        /* @__PURE__ */ a(
          H,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function Vo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    A.Content,
    {
      "data-slot": "navigation-menu-content",
      className: r(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        e
      ),
      ...t
    }
  );
}
function ta({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: r(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ a(
        A.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: r(
            "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
            e
          ),
          ...t
        }
      )
    }
  );
}
function Ko({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    A.Link,
    {
      "data-slot": "navigation-menu-link",
      className: r(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function qo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    A.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: r(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a("div", { className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" })
    }
  );
}
function Wo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: r("mx-auto flex w-full justify-center", e),
      ...t
    }
  );
}
function Uo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "pagination-content",
      className: r("flex flex-row items-center gap-1", e),
      ...t
    }
  );
}
function Xo({ ...e }) {
  return /* @__PURE__ */ a("li", { "data-slot": "pagination-item", ...e });
}
function Ae({
  className: e,
  isActive: t,
  size: n = "icon",
  ...o
}) {
  return /* @__PURE__ */ a(
    "a",
    {
      "aria-current": t ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": t,
      className: r(
        O({
          variant: t ? "outline" : "ghost",
          size: n
        }),
        e
      ),
      ...o
    }
  );
}
function Yo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ s(
    Ae,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: r("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a(Ne, {}),
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function Jo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ s(
    Ae,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: r("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ a(U, {})
      ]
    }
  );
}
function Qo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ s(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: r("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ a(We, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
function Zo({
  className: e,
  value: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    be.Root,
    {
      "data-slot": "progress",
      className: r(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...n,
      children: /* @__PURE__ */ a(
        be.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function aa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    se.Root,
    {
      "data-slot": "radio-group",
      className: r("grid gap-3", e),
      ...t
    }
  );
}
function ei({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    se.Item,
    {
      "data-slot": "radio-group-item",
      className: r(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        se.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ a(Z, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
function ti({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ft,
    {
      "data-slot": "resizable-panel-group",
      className: r(
        "flex h-full w-full data-[orientation=vertical]:flex-col",
        e
      ),
      ...t
    }
  );
}
function ai({
  ...e
}) {
  return /* @__PURE__ */ a(gt, { "data-slot": "resizable-panel", ...e });
}
function ri({
  withHandle: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    pt,
    {
      "data-slot": "resizable-handle",
      className: r(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:translate-x-0 data-[orientation=vertical]:after:-translate-y-1/2 [&[data-orientation=vertical]>div]:rotate-90",
        t
      ),
      ...n,
      children: e && /* @__PURE__ */ a("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ a(Ue, { className: "size-2.5" }) })
    }
  );
}
function ni({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ s(
    K.Root,
    {
      "data-slot": "scroll-area",
      className: r("relative", e),
      ...n,
      children: [
        /* @__PURE__ */ a(
          K.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ a(ra, {}),
        /* @__PURE__ */ a(K.Corner, {})
      ]
    }
  );
}
function ra({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ a(
    K.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: t,
      className: r(
        "flex touch-none p-px transition-colors select-none",
        t === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...n,
      children: /* @__PURE__ */ a(
        K.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
function oi({
  ...e
}) {
  return /* @__PURE__ */ a(I.Root, { "data-slot": "select", ...e });
}
function ii({
  ...e
}) {
  return /* @__PURE__ */ a(I.Group, { "data-slot": "select-group", ...e });
}
function si({
  ...e
}) {
  return /* @__PURE__ */ a(I.Value, { "data-slot": "select-value", ...e });
}
function di({
  className: e,
  size: t = "default",
  children: n,
  label: o,
  error: i,
  required: l,
  id: c,
  ...u
}) {
  const d = o || i, m = /* @__PURE__ */ s(
    I.Trigger,
    {
      id: c,
      "data-slot": "select-trigger",
      "data-size": t,
      "aria-invalid": !!i,
      className: r(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        i ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...u,
      children: [
        n,
        /* @__PURE__ */ a(I.Icon, { asChild: !0, children: /* @__PURE__ */ a(H, { className: "size-4 opacity-50" }) })
      ]
    }
  );
  return d ? /* @__PURE__ */ s("div", { className: "flex flex-col gap-1", children: [
    o && /* @__PURE__ */ s(D, { htmlFor: c, children: [
      o,
      l && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    m,
    i && /* @__PURE__ */ a("div", { className: "text-destructive text-sm", role: "alert", children: i })
  ] }) : m;
}
function li({
  className: e,
  children: t,
  position: n = "item-aligned",
  align: o = "center",
  ...i
}) {
  return /* @__PURE__ */ a(I.Portal, { children: /* @__PURE__ */ s(
    I.Content,
    {
      "data-slot": "select-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      align: o,
      ...i,
      children: [
        /* @__PURE__ */ a(na, {}),
        /* @__PURE__ */ a(
          I.Viewport,
          {
            className: r(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ a(oa, {})
      ]
    }
  ) });
}
function ci({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    I.Label,
    {
      "data-slot": "select-label",
      className: r("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...t
    }
  );
}
function ui({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ s(
    I.Item,
    {
      "data-slot": "select-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ a(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ a(I.ItemIndicator, { children: /* @__PURE__ */ a(B, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ a(I.ItemText, { children: t })
      ]
    }
  );
}
function mi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    I.Separator,
    {
      "data-slot": "select-separator",
      className: r("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function na({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    I.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: r(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(Xe, { className: "size-4" })
    }
  );
}
function oa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    I.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: r(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(H, { className: "size-4" })
    }
  );
}
function ia({ ...e }) {
  return /* @__PURE__ */ a(C.Root, { "data-slot": "sheet", ...e });
}
function fi({
  ...e
}) {
  return /* @__PURE__ */ a(C.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function gi({
  ...e
}) {
  return /* @__PURE__ */ a(C.Close, { "data-slot": "sheet-close", ...e });
}
function sa({
  ...e
}) {
  return /* @__PURE__ */ a(C.Portal, { "data-slot": "sheet-portal", ...e });
}
function da({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    C.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: r(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function la({
  className: e,
  children: t,
  side: n = "right",
  ...o
}) {
  return /* @__PURE__ */ s(sa, { children: [
    /* @__PURE__ */ a(da, {}),
    /* @__PURE__ */ s(
      C.Content,
      {
        "data-slot": "sheet-content",
        className: r(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          n === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          n === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          n === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          n === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          e
        ),
        ...o,
        children: [
          t,
          /* @__PURE__ */ s(C.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ a(ye, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function ca({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: r("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function pi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-footer",
      className: r("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function ua({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    C.Title,
    {
      "data-slot": "sheet-title",
      className: r("text-foreground font-semibold", e),
      ...t
    }
  );
}
function ma({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    C.Description,
    {
      "data-slot": "sheet-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const ie = 768;
function fa() {
  const [e, t] = p.useState(void 0);
  return p.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${ie - 1}px)`), o = () => {
      t(window.innerWidth < ie);
    };
    return n.addEventListener("change", o), t(window.innerWidth < ie), () => n.removeEventListener("change", o);
  }, []), !!e;
}
function he({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "skeleton",
      className: r("bg-accent animate-pulse rounded-md", e),
      ...t
    }
  );
}
function Fe({
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
function ga({
  ...e
}) {
  return /* @__PURE__ */ a(Fe, { children: /* @__PURE__ */ a(G.Root, { "data-slot": "tooltip", ...e }) });
}
function pa({
  ...e
}) {
  return /* @__PURE__ */ a(G.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function ba({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ a(G.Portal, { children: /* @__PURE__ */ s(
    G.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: r(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ a(G.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const va = "sidebar_state", ha = 3600 * 24 * 7, xa = "16rem", wa = "18rem", Na = "3rem", ya = "b", Le = p.createContext(null);
function oe() {
  const e = p.useContext(Le);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function bi({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: o,
  style: i,
  children: l,
  ...c
}) {
  const u = fa(), [d, m] = p.useState(!1), [f, h] = p.useState(e), x = t ?? f, w = p.useCallback(
    (v) => {
      const b = typeof v == "function" ? v(x) : v;
      n ? n(b) : h(b), document.cookie = `${va}=${b}; path=/; max-age=${ha}`;
    },
    [n, x]
  ), N = p.useCallback(() => u ? m((v) => !v) : w((v) => !v), [u, w, m]);
  p.useEffect(() => {
    const v = (b) => {
      b.key === ya && (b.metaKey || b.ctrlKey) && (b.preventDefault(), N());
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [N]);
  const k = x ? "expanded" : "collapsed", g = p.useMemo(
    () => ({
      state: k,
      open: x,
      setOpen: w,
      isMobile: u,
      openMobile: d,
      setOpenMobile: m,
      toggleSidebar: N
    }),
    [k, x, w, u, d, m, N]
  );
  return /* @__PURE__ */ a(Le.Provider, { value: g, children: /* @__PURE__ */ a(Fe, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": xa,
        "--sidebar-width-icon": Na,
        ...i
      },
      className: r(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        o
      ),
      ...c,
      children: l
    }
  ) }) });
}
function vi({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: n = "offcanvas",
  className: o,
  children: i,
  ...l
}) {
  const { isMobile: c, state: u, openMobile: d, setOpenMobile: m } = oe();
  return n === "none" ? /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar",
      className: r(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        o
      ),
      ...l,
      children: i
    }
  ) : c ? /* @__PURE__ */ a(ia, { open: d, onOpenChange: m, ...l, children: /* @__PURE__ */ s(
    la,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": wa
      },
      side: e,
      children: [
        /* @__PURE__ */ s(ca, { className: "sr-only", children: [
          /* @__PURE__ */ a(ua, { children: "Sidebar" }),
          /* @__PURE__ */ a(ma, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex h-full w-full flex-col", children: i })
      ]
    }
  ) }) : /* @__PURE__ */ s(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": u,
      "data-collapsible": u === "collapsed" ? n : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: r(
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
            className: r(
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
                children: i
              }
            )
          }
        )
      ]
    }
  );
}
function hi({
  className: e,
  onClick: t,
  ...n
}) {
  const { toggleSidebar: o } = oe();
  return /* @__PURE__ */ s(
    F,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: r("size-7", e),
      onClick: (i) => {
        t?.(i), o();
      },
      ...n,
      children: [
        /* @__PURE__ */ a(Ye, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function xi({ className: e, ...t }) {
  const { toggleSidebar: n } = oe();
  return /* @__PURE__ */ a(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: n,
      title: "Toggle Sidebar",
      className: r(
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
function wi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: r(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        e
      ),
      ...t
    }
  );
}
function Ni({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ne,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: r("bg-background h-8 w-full shadow-none", e),
      ...t
    }
  );
}
function yi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: r("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function ki({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: r("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function Ci({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    te,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: r("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function zi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: r(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function _i({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: r("relative flex w-full min-w-0 flex-col p-2", e),
      ...t
    }
  );
}
function Si({
  className: e,
  asChild: t = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    t ? M : "div",
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: r(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...n
    }
  );
}
function Ii({
  className: e,
  asChild: t = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    t ? M : "button",
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: r(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...n
    }
  );
}
function Ti({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: r("w-full text-sm", e),
      ...t
    }
  );
}
function Mi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: r("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function Di({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: r("group/menu-item relative", e),
      ...t
    }
  );
}
const ka = T(
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
function Pi({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: o = "default",
  tooltip: i,
  className: l,
  ...c
}) {
  const u = e ? M : "button", { isMobile: d, state: m } = oe(), f = /* @__PURE__ */ a(
    u,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": o,
      "data-active": t,
      className: r(ka({ variant: n, size: o }), l),
      ...c
    }
  );
  return i ? (typeof i == "string" && (i = {
    children: i
  }), /* @__PURE__ */ s(ga, { children: [
    /* @__PURE__ */ a(pa, { asChild: !0, children: f }),
    /* @__PURE__ */ a(
      ba,
      {
        side: "right",
        align: "center",
        hidden: m !== "collapsed" || d,
        ...i
      }
    )
  ] })) : f;
}
function Ri({
  className: e,
  asChild: t = !1,
  showOnHover: n = !1,
  ...o
}) {
  return /* @__PURE__ */ a(
    t ? M : "button",
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: r(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        n && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        e
      ),
      ...o
    }
  );
}
function ji({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: r(
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
function Ai({
  className: e,
  showIcon: t = !1,
  ...n
}) {
  const o = p.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ s(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: r("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...n,
      children: [
        t && /* @__PURE__ */ a(
          he,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ a(
          he,
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
function Fi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: r(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function Li({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: r("group/menu-sub-item relative", e),
      ...t
    }
  );
}
function Ei({
  asChild: e = !1,
  size: t = "md",
  isActive: n = !1,
  className: o,
  ...i
}) {
  return /* @__PURE__ */ a(
    e ? M : "a",
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": t,
      "data-active": n,
      className: r(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        t === "sm" && "text-xs",
        t === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        o
      ),
      ...i
    }
  );
}
function Gi({
  className: e,
  defaultValue: t,
  value: n,
  min: o = 0,
  max: i = 100,
  ...l
}) {
  const c = p.useMemo(
    () => Array.isArray(n) ? n : Array.isArray(t) ? t : [o, i],
    [n, t, o, i]
  );
  return /* @__PURE__ */ s(
    Y.Root,
    {
      "data-slot": "slider",
      defaultValue: t,
      value: n,
      min: o,
      max: i,
      className: r(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        e
      ),
      ...l,
      children: [
        /* @__PURE__ */ a(
          Y.Track,
          {
            "data-slot": "slider-track",
            className: r(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ a(
              Y.Range,
              {
                "data-slot": "slider-range",
                className: r(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: c.length }, (u, d) => /* @__PURE__ */ a(
          Y.Thumb,
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
const Oi = ({ ...e }) => {
  const { theme: t = "system" } = bt();
  return /* @__PURE__ */ a(
    vt,
    {
      theme: t,
      position: "top-right",
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ a(et, { className: "size-5 text-green-700 dark:text-green-400" }),
        info: /* @__PURE__ */ a(Ze, { className: "size-5 text-blue-700 dark:text-blue-400" }),
        warning: /* @__PURE__ */ a(Qe, { className: "size-5 text-amber-700 dark:text-amber-400" }),
        error: /* @__PURE__ */ a(Je, { className: "size-5 text-red-700 dark:text-red-400" }),
        loading: /* @__PURE__ */ a(ke, { className: "size-5 animate-spin text-foreground" })
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
      ...e
    }
  );
};
function Hi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ke,
    {
      role: "status",
      "aria-label": "Loading",
      className: r("size-4 animate-spin", e),
      ...t
    }
  );
}
function Ca({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ve.Root,
    {
      "data-slot": "switch",
      className: r(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        ve.Thumb,
        {
          "data-slot": "switch-thumb",
          className: r(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
function Bi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ a(
        "table",
        {
          "data-slot": "table",
          className: r("w-full caption-bottom text-sm", e),
          ...t
        }
      )
    }
  );
}
function $i({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "thead",
    {
      "data-slot": "table-header",
      className: r("[&_tr]:border-b", e),
      ...t
    }
  );
}
function Vi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "table-body",
      className: r("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function Ki({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: r(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        e
      ),
      ...t
    }
  );
}
function qi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tr",
    {
      "data-slot": "table-row",
      className: r(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        e
      ),
      ...t
    }
  );
}
function Wi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "th",
    {
      "data-slot": "table-head",
      className: r(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function Ui({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "td",
    {
      "data-slot": "table-cell",
      className: r(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function Xi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "caption",
    {
      "data-slot": "table-caption",
      className: r("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
function Yi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ee.Root,
    {
      "data-slot": "tabs",
      className: r("flex flex-col gap-2", e),
      ...t
    }
  );
}
function Ji({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ee.List,
    {
      "data-slot": "tabs-list",
      className: r(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        e
      ),
      ...t
    }
  );
}
function Qi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ee.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: r(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function Zi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ee.Content,
    {
      "data-slot": "tabs-content",
      className: r("flex-1 outline-none", e),
      ...t
    }
  );
}
const Ee = T(
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
function es({
  className: e,
  variant: t,
  size: n,
  ...o
}) {
  return /* @__PURE__ */ a(
    ht.Root,
    {
      "data-slot": "toggle",
      className: r(Ee({ variant: t, size: n, className: e })),
      ...o
    }
  );
}
const Ge = p.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function ts({
  className: e,
  variant: t,
  size: n,
  spacing: o = 0,
  children: i,
  ...l
}) {
  return /* @__PURE__ */ a(
    _e.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": n,
      "data-spacing": o,
      style: { "--gap": o },
      className: r(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        e
      ),
      ...l,
      children: /* @__PURE__ */ a(Ge.Provider, { value: { variant: t, size: n, spacing: o }, children: i })
    }
  );
}
function as({
  className: e,
  children: t,
  variant: n,
  size: o,
  ...i
}) {
  const l = p.useContext(Ge);
  return /* @__PURE__ */ a(
    _e.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": l.variant || n,
      "data-size": l.size || o,
      "data-spacing": l.spacing,
      className: r(
        Ee({
          variant: l.variant || n,
          size: l.size || o
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l",
        e
      ),
      ...i,
      children: t
    }
  );
}
const rs = {
  /**
   * Show a success toast
   */
  success: (e, t) => P.success(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show an error toast
   */
  error: (e, t) => P.error(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a warning toast
   */
  warning: (e, t) => P.warning(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show an info toast
   */
  info: (e, t) => P.info(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a default toast
   */
  default: (e, t) => P(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a loading toast
   */
  loading: (e, t) => P.loading(e, {
    description: t?.description,
    duration: t?.duration
  }),
  /**
   * Show a promise toast (loading -> success/error)
   */
  promise: (e, t, n) => P.promise(e, {
    loading: t.loading,
    success: t.success,
    error: t.error,
    duration: n?.duration
  }),
  /**
   * Dismiss a toast by ID
   */
  dismiss: (e) => {
    P.dismiss(e);
  },
  /**
   * Dismiss all toasts
   */
  dismissAll: () => {
    P.dismiss();
  }
};
function ns({
  control: e,
  name: t,
  label: n,
  required: o,
  callback: i = () => {
  },
  className: l,
  ...c
}) {
  const u = $({ control: e, name: t }), d = X(u.errors, `${t}.message`);
  return /* @__PURE__ */ a(
    E,
    {
      control: e,
      name: t,
      render: ({ field: m }) => /* @__PURE__ */ a(
        Vt,
        {
          ...c,
          value: m.value,
          onChange: (f, h) => {
            m.onChange(f), i(f, h);
          },
          label: n,
          error: d,
          required: o,
          className: r("w-full", l)
        }
      )
    }
  );
}
function os({
  control: e,
  name: t,
  label: n,
  placeholder: o = "Pick a date",
  required: i,
  error: l,
  disabled: c,
  disabledPast: u = !1,
  disabledFuture: d = !1,
  onDisabled: m,
  className: f,
  callback: h = () => {
  },
  ...x
}) {
  const [w, N] = we(!1), k = (g) => {
    if (c) return !0;
    const v = /* @__PURE__ */ new Date();
    v.setHours(0, 0, 0, 0);
    const b = new Date(g);
    return b.setHours(0, 0, 0, 0), u && b < v || d && b > v ? !0 : m ? m(g) : !1;
  };
  return /* @__PURE__ */ a(
    E,
    {
      control: e,
      name: t,
      render: ({ field: g, fieldState: { error: v } }) => {
        const b = l || v?.message;
        return /* @__PURE__ */ s("div", { className: r("space-y-1.5 w-full", f), children: [
          n && /* @__PURE__ */ s(D, { className: "text-foreground leading-5 block", children: [
            n,
            " ",
            i && /* @__PURE__ */ a("span", { className: "font-semibold text-destructive", children: "*" })
          ] }),
          /* @__PURE__ */ s(me, { open: w, onOpenChange: N, children: [
            /* @__PURE__ */ a(fe, { asChild: !0, children: /* @__PURE__ */ s(
              F,
              {
                variant: "outline",
                disabled: c,
                className: r(
                  "w-full justify-start text-left font-normal",
                  !g.value && "text-muted-foreground",
                  b && "border-destructive"
                ),
                children: [
                  /* @__PURE__ */ a(Ce, { className: "mr-2 h-4 w-4" }),
                  g.value ? J(g.value, "PPP") : /* @__PURE__ */ a("span", { children: o })
                ]
              }
            ) }),
            /* @__PURE__ */ a(ge, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ a(
              Se,
              {
                mode: "single",
                selected: g.value,
                onSelect: (y) => {
                  g.onChange(y), h(y), N(!1);
                },
                disabled: k,
                initialFocus: !0,
                ...x
              }
            ) })
          ] }),
          b && /* @__PURE__ */ a("p", { className: "text-xs text-destructive mt-1.5", children: b })
        ] });
      }
    }
  );
}
function is({
  control: e,
  name: t,
  label: n,
  placeholder: o = { from: "From date", to: "To date" },
  required: i,
  error: l,
  disabled: c,
  disabledPast: u = !1,
  disabledFuture: d = !1,
  onDisabled: m,
  className: f,
  callback: h = () => {
  },
  ...x
}) {
  const [w, N] = we(!1), k = (g) => {
    if (c) return !0;
    const v = /* @__PURE__ */ new Date();
    v.setHours(0, 0, 0, 0);
    const b = new Date(g);
    return b.setHours(0, 0, 0, 0), u && b < v || d && b > v ? !0 : m ? m(g) : !1;
  };
  return /* @__PURE__ */ a(
    E,
    {
      control: e,
      name: t,
      render: ({ field: g, fieldState: { error: v } }) => {
        const b = l || v?.message, y = g.value;
        return /* @__PURE__ */ s("div", { className: r("space-y-1.5 w-full", f), children: [
          n && /* @__PURE__ */ s(D, { className: "text-foreground leading-5 block", children: [
            n,
            " ",
            i && /* @__PURE__ */ a("span", { className: "font-semibold text-destructive", children: "*" })
          ] }),
          /* @__PURE__ */ s(me, { open: w, onOpenChange: N, children: [
            /* @__PURE__ */ a(fe, { asChild: !0, children: /* @__PURE__ */ s(
              F,
              {
                variant: "outline",
                disabled: c,
                className: r(
                  "w-full justify-start text-left font-normal",
                  !y?.from && "text-muted-foreground",
                  b && "border-destructive"
                ),
                children: [
                  /* @__PURE__ */ a(Ce, { className: "mr-2 h-4 w-4" }),
                  y?.from ? y.to ? /* @__PURE__ */ s(xe, { children: [
                    J(y.from, "LLL dd, y"),
                    " - ",
                    J(y.to, "LLL dd, y")
                  ] }) : J(y.from, "LLL dd, y") : /* @__PURE__ */ s("span", { children: [
                    o.from,
                    " - ",
                    o.to
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ a(ge, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ a(
              Se,
              {
                initialFocus: !0,
                mode: "range",
                defaultMonth: y?.from,
                selected: y,
                onSelect: (V) => {
                  g.onChange(V), h(V);
                },
                numberOfMonths: 2,
                disabled: k,
                ...x
              }
            ) })
          ] }),
          b && /* @__PURE__ */ a("p", { className: "text-xs text-destructive mt-1.5", children: b })
        ] });
      }
    }
  );
}
const za = (e, t) => t === "text" || !e ? e : t === "integer" || t === "currency" ? e.replace(/\D/g, "") : t === "decimal" ? e.replace(/[^\d.,]/g, "").replace(/\./g, ",") : e;
function ss({
  control: e,
  name: t,
  label: n,
  format: o = "text",
  required: i,
  wrapperClassName: l,
  callback: c = () => {
  },
  ...u
}) {
  const d = $({ control: e, name: t }), m = X(d.errors, `${t}.message`);
  return /* @__PURE__ */ a(
    E,
    {
      control: e,
      name: t,
      render: ({ field: f }) => /* @__PURE__ */ a("div", { className: r("w-full", l), children: /* @__PURE__ */ a(
        ne,
        {
          ...u,
          ...f,
          type: "text",
          label: n,
          error: m,
          required: i,
          value: f.value || "",
          onChange: (h) => {
            const x = za(h.target.value, o);
            f.onChange(x), c(x);
          }
        }
      ) })
    }
  );
}
function ds({
  control: e,
  register: t,
  name: n,
  label: o,
  placeholder: i,
  className: l,
  wrapperClassName: c,
  required: u = !1,
  ...d
}) {
  const m = $({ control: e, name: n }), f = X(m.errors, `${n}.message`);
  return /* @__PURE__ */ a("div", { className: r("w-full", c), children: /* @__PURE__ */ a(
    ne,
    {
      ...d,
      ...t(n),
      label: o,
      error: f,
      required: u,
      className: l,
      placeholder: i
    }
  ) });
}
function ls({
  control: e,
  name: t,
  label: n,
  required: o,
  children: i,
  className: l,
  callback: c = () => {
  },
  onBeforeChange: u,
  ...d
}) {
  const m = (f, h) => {
    const x = () => {
      h.onChange(f), c(f);
    };
    u ? u(f, h.value, x) : x();
  };
  return /* @__PURE__ */ a(
    E,
    {
      control: e,
      name: t,
      render: ({ field: f, fieldState: { error: h } }) => /* @__PURE__ */ s("div", { className: "space-y-1.5 w-full", children: [
        n && /* @__PURE__ */ s(
          D,
          {
            htmlFor: d.id || t,
            className: "text-foreground leading-5 cursor-pointer select-none flex-1",
            children: [
              n,
              o && /* @__PURE__ */ a("span", { className: "font-semibold text-destructive ml-1", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ a(
          aa,
          {
            ...d,
            id: d.id || t,
            className: r("flex flex-row gap-4", l),
            onValueChange: (x) => {
              m(x, f);
            },
            value: f.value?.toString(),
            children: i
          }
        ),
        h && /* @__PURE__ */ a("p", { className: "text-xs text-destructive", children: h.message })
      ] })
    }
  );
}
function cs({
  control: e,
  name: t,
  label: n,
  required: o,
  callback: i = () => {
  },
  onBeforeChange: l,
  className: c,
  ...u
}) {
  const d = (m, f) => {
    const h = () => {
      f.onChange(m), i(m);
    };
    l ? l(m, f.value, h) : h();
  };
  return /* @__PURE__ */ a(
    E,
    {
      control: e,
      name: t,
      render: ({ field: m, fieldState: { error: f } }) => /* @__PURE__ */ s("div", { className: "space-y-1.5 w-full", children: [
        /* @__PURE__ */ s("div", { className: r("flex items-center gap-3", c), children: [
          n && /* @__PURE__ */ s(
            D,
            {
              htmlFor: u.id || t,
              className: "text-foreground leading-5 cursor-pointer select-none flex-1",
              children: [
                n,
                o && /* @__PURE__ */ a("span", { className: "font-semibold text-destructive ml-1", children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ a(
            Ca,
            {
              ...u,
              id: u.id || t,
              checked: !!m.value,
              onCheckedChange: (h) => {
                d(h, m);
              }
            }
          )
        ] }),
        f && /* @__PURE__ */ a("p", { className: "text-xs text-destructive", children: f.message })
      ] })
    }
  );
}
function us({
  control: e,
  register: t,
  name: n,
  label: o,
  placeholder: i,
  className: l,
  wrapperClassName: c,
  required: u = !1,
  showMaxLength: d = !0,
  maxLength: m = 512,
  rows: f = 5,
  ...h
}) {
  const x = $({ control: e, name: n }), w = X(x.errors, `${n}.message`);
  return /* @__PURE__ */ s("div", { className: r("relative w-full", c), children: [
    /* @__PURE__ */ a(
      je,
      {
        ...h,
        ...t(n),
        label: o,
        error: w,
        required: u,
        className: l,
        placeholder: i,
        maxLength: m,
        rows: f
      }
    ),
    d && /* @__PURE__ */ a(_a, { control: e, name: n, maxLength: m })
  ] });
}
const _a = ({
  control: e,
  name: t,
  maxLength: n
}) => {
  const { field: o } = ct({ control: e, name: t });
  return /* @__PURE__ */ s(St, { variant: "secondary", className: "absolute rounded-sm right-3 bottom-2 text-[8px]", children: [
    o.value?.length || 0,
    "/",
    n
  ] });
}, ms = ({
  name: e,
  control: t
}) => {
  const n = $({
    control: t,
    name: e
  }), o = X(n.errors, `${e}.message`);
  return /* @__PURE__ */ a(
    "p",
    {
      className: r("text-xs text-destructive hidden", xt(o) && "input-error block mt-1.5"),
      children: o
    }
  );
};
export {
  Va as Accordion,
  Wa as AccordionContent,
  Ka as AccordionItem,
  qa as AccordionTrigger,
  Nt as Alert,
  kt as AlertDescription,
  Ua as AlertDialog,
  tr as AlertDialogAction,
  ar as AlertDialogCancel,
  Ya as AlertDialogContent,
  er as AlertDialogDescription,
  Qa as AlertDialogFooter,
  Ja as AlertDialogHeader,
  zt as AlertDialogOverlay,
  Ct as AlertDialogPortal,
  Za as AlertDialogTitle,
  Xa as AlertDialogTrigger,
  yt as AlertTitle,
  rr as AspectRatio,
  nr as Avatar,
  ir as AvatarFallback,
  or as AvatarImage,
  St as Badge,
  sr as Breadcrumb,
  fr as BreadcrumbEllipsis,
  lr as BreadcrumbItem,
  cr as BreadcrumbLink,
  dr as BreadcrumbList,
  ur as BreadcrumbPage,
  mr as BreadcrumbSeparator,
  F as Button,
  gr as ButtonGroup,
  br as ButtonGroupSeparator,
  pr as ButtonGroupText,
  Se as Calendar,
  Tt as CalendarDayButton,
  vr as Card,
  Nr as CardAction,
  yr as CardContent,
  wr as CardDescription,
  kr as CardFooter,
  hr as CardHeader,
  xr as CardTitle,
  Cr as Carousel,
  zr as CarouselContent,
  _r as CarouselItem,
  Ir as CarouselNext,
  Sr as CarouselPrevious,
  Tr as ChartContainer,
  Pr as ChartLegend,
  Rr as ChartLegendContent,
  Dt as ChartStyle,
  Mr as ChartTooltip,
  Dr as ChartTooltipContent,
  jr as Checkbox,
  Ar as Collapsible,
  Lr as CollapsibleContent,
  Fr as CollapsibleTrigger,
  Vt as Combobox,
  De as Command,
  Hr as CommandDialog,
  Ht as CommandEmpty,
  Bt as CommandGroup,
  Gt as CommandInput,
  $t as CommandItem,
  Ot as CommandList,
  Br as CommandSeparator,
  $r as CommandShortcut,
  Kr as ContextMenu,
  tn as ContextMenuCheckboxItem,
  Zr as ContextMenuContent,
  Wr as ContextMenuGroup,
  en as ContextMenuItem,
  rn as ContextMenuLabel,
  Ur as ContextMenuPortal,
  Yr as ContextMenuRadioGroup,
  an as ContextMenuRadioItem,
  nn as ContextMenuSeparator,
  on as ContextMenuShortcut,
  Xr as ContextMenuSub,
  Qr as ContextMenuSubContent,
  Jr as ContextMenuSubTrigger,
  qr as ContextMenuTrigger,
  Pt as Dialog,
  Gr as DialogClose,
  At as DialogContent,
  Et as DialogDescription,
  Or as DialogFooter,
  Ft as DialogHeader,
  jt as DialogOverlay,
  Rt as DialogPortal,
  Lt as DialogTitle,
  Er as DialogTrigger,
  sn as Drawer,
  ln as DrawerClose,
  cn as DrawerContent,
  gn as DrawerDescription,
  mn as DrawerFooter,
  un as DrawerHeader,
  qt as DrawerOverlay,
  Kt as DrawerPortal,
  fn as DrawerTitle,
  dn as DrawerTrigger,
  pn as DropdownMenu,
  Nn as DropdownMenuCheckboxItem,
  hn as DropdownMenuContent,
  xn as DropdownMenuGroup,
  wn as DropdownMenuItem,
  Cn as DropdownMenuLabel,
  bn as DropdownMenuPortal,
  yn as DropdownMenuRadioGroup,
  kn as DropdownMenuRadioItem,
  zn as DropdownMenuSeparator,
  _n as DropdownMenuShortcut,
  Sn as DropdownMenuSub,
  Tn as DropdownMenuSubContent,
  In as DropdownMenuSubTrigger,
  vn as DropdownMenuTrigger,
  Mn as Empty,
  An as EmptyContent,
  jn as EmptyDescription,
  Dn as EmptyHeader,
  Pn as EmptyMedia,
  Rn as EmptyTitle,
  Gn as Field,
  On as FieldContent,
  $n as FieldDescription,
  Kn as FieldError,
  En as FieldGroup,
  Hn as FieldLabel,
  Ln as FieldLegend,
  Vn as FieldSeparator,
  Fn as FieldSet,
  Bn as FieldTitle,
  qn as Form,
  Yn as FormControl,
  Jn as FormDescription,
  Wn as FormField,
  Un as FormItem,
  Xn as FormLabel,
  Qn as FormMessage,
  Zn as HoverCard,
  to as HoverCardContent,
  eo as HoverCardTrigger,
  ne as Input,
  ao as InputGroup,
  ro as InputGroupAddon,
  no as InputGroupButton,
  io as InputGroupInput,
  oo as InputGroupText,
  so as InputGroupTextarea,
  lo as InputOTP,
  co as InputOTPGroup,
  mo as InputOTPSeparator,
  uo as InputOTPSlot,
  po as Item,
  wo as ItemActions,
  vo as ItemContent,
  xo as ItemDescription,
  yo as ItemFooter,
  fo as ItemGroup,
  No as ItemHeader,
  bo as ItemMedia,
  go as ItemSeparator,
  ho as ItemTitle,
  ko as Kbd,
  Co as KbdGroup,
  D as Label,
  zo as Menubar,
  Po as MenubarCheckboxItem,
  Mo as MenubarContent,
  So as MenubarGroup,
  Do as MenubarItem,
  jo as MenubarLabel,
  _o as MenubarMenu,
  Zt as MenubarPortal,
  Io as MenubarRadioGroup,
  Ro as MenubarRadioItem,
  Ao as MenubarSeparator,
  Fo as MenubarShortcut,
  Lo as MenubarSub,
  Go as MenubarSubContent,
  Eo as MenubarSubTrigger,
  To as MenubarTrigger,
  Oo as NavigationMenu,
  Vo as NavigationMenuContent,
  qo as NavigationMenuIndicator,
  Bo as NavigationMenuItem,
  Ko as NavigationMenuLink,
  Ho as NavigationMenuList,
  $o as NavigationMenuTrigger,
  ta as NavigationMenuViewport,
  Wo as Pagination,
  Uo as PaginationContent,
  Qo as PaginationEllipsis,
  Xo as PaginationItem,
  Ae as PaginationLink,
  Jo as PaginationNext,
  Yo as PaginationPrevious,
  me as Popover,
  Vr as PopoverAnchor,
  ge as PopoverContent,
  fe as PopoverTrigger,
  Zo as Progress,
  ns as RHFCombobox,
  os as RHFDatePicker,
  is as RHFDateRangePicker,
  ms as RHFErrorMessage,
  ss as RHFFormattedInput,
  ds as RHFInput,
  ls as RHFRadioGroup,
  cs as RHFSwitch,
  us as RHFTextarea,
  aa as RadioGroup,
  ei as RadioGroupItem,
  ri as ResizableHandle,
  ai as ResizablePanel,
  ti as ResizablePanelGroup,
  ni as ScrollArea,
  ra as ScrollBar,
  oi as Select,
  li as SelectContent,
  ii as SelectGroup,
  ui as SelectItem,
  ci as SelectLabel,
  oa as SelectScrollDownButton,
  na as SelectScrollUpButton,
  mi as SelectSeparator,
  di as SelectTrigger,
  si as SelectValue,
  te as Separator,
  ia as Sheet,
  gi as SheetClose,
  la as SheetContent,
  ma as SheetDescription,
  pi as SheetFooter,
  ca as SheetHeader,
  ua as SheetTitle,
  fi as SheetTrigger,
  vi as Sidebar,
  zi as SidebarContent,
  ki as SidebarFooter,
  _i as SidebarGroup,
  Ii as SidebarGroupAction,
  Ti as SidebarGroupContent,
  Si as SidebarGroupLabel,
  yi as SidebarHeader,
  Ni as SidebarInput,
  wi as SidebarInset,
  Mi as SidebarMenu,
  Ri as SidebarMenuAction,
  ji as SidebarMenuBadge,
  Pi as SidebarMenuButton,
  Di as SidebarMenuItem,
  Ai as SidebarMenuSkeleton,
  Fi as SidebarMenuSub,
  Ei as SidebarMenuSubButton,
  Li as SidebarMenuSubItem,
  bi as SidebarProvider,
  xi as SidebarRail,
  Ci as SidebarSeparator,
  hi as SidebarTrigger,
  he as Skeleton,
  Gi as Slider,
  Hi as Spinner,
  Ca as Switch,
  Bi as Table,
  Vi as TableBody,
  Xi as TableCaption,
  Ui as TableCell,
  Ki as TableFooter,
  Wi as TableHead,
  $i as TableHeader,
  qi as TableRow,
  Yi as Tabs,
  Zi as TabsContent,
  Ji as TabsList,
  Qi as TabsTrigger,
  je as Textarea,
  Oi as Toaster,
  es as Toggle,
  ts as ToggleGroup,
  as as ToggleGroupItem,
  ga as Tooltip,
  ba as TooltipContent,
  Fe as TooltipProvider,
  pa as TooltipTrigger,
  _t as badgeVariants,
  It as buttonGroupVariants,
  O as buttonVariants,
  r as cn,
  ea as navigationMenuTriggerStyle,
  rs as toast,
  Ee as toggleVariants,
  re as useFormField,
  fa as useIsMobile,
  oe as useSidebar
};
//# sourceMappingURL=index.mjs.map
