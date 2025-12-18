import { jsx as a, jsxs as l, Fragment as _e } from "react/jsx-runtime";
import * as u from "react";
import { useMemo as Se } from "react";
import * as E from "@radix-ui/react-accordion";
import { ChevronDownIcon as B, ChevronRight as Ie, MoreHorizontal as Te, ChevronLeftIcon as le, ChevronRightIcon as O, ArrowLeft as Me, ArrowRight as Pe, CheckIcon as V, XIcon as ce, SearchIcon as De, CircleIcon as q, MinusIcon as Re, MoreHorizontalIcon as je, GripVerticalIcon as Ae, ChevronUpIcon as Ge, PanelLeftIcon as Le, Loader2Icon as ue, OctagonXIcon as Ee, TriangleAlertIcon as Fe, InfoIcon as Be, CircleCheckIcon as Oe } from "lucide-react";
import { clsx as Ve } from "clsx";
import { twMerge as $e } from "tailwind-merge";
import { cva as k } from "class-variance-authority";
import * as M from "@radix-ui/react-alert-dialog";
import { Slot as T } from "@radix-ui/react-slot";
import * as He from "@radix-ui/react-aspect-ratio";
import * as te from "@radix-ui/react-avatar";
import * as Ke from "@radix-ui/react-separator";
import { getDefaultClassNames as me, DayPicker as qe } from "react-day-picker";
import We from "embla-carousel-react";
import * as ae from "recharts";
import * as ne from "@radix-ui/react-checkbox";
import * as re from "@radix-ui/react-collapsible";
import { Command as j } from "cmdk";
import * as b from "@radix-ui/react-dialog";
import * as v from "@radix-ui/react-context-menu";
import { Drawer as P } from "vaul";
import * as x from "@radix-ui/react-dropdown-menu";
import * as Ue from "@radix-ui/react-label";
import { FormProvider as Xe, useFormContext as Ye, useFormState as Je, Controller as Qe } from "react-hook-form";
import * as K from "@radix-ui/react-hover-card";
import { OTPInput as Ze, OTPInputContext as et } from "input-otp";
import * as h from "@radix-ui/react-menubar";
import * as D from "@radix-ui/react-navigation-menu";
import * as F from "@radix-ui/react-popover";
import * as ie from "@radix-ui/react-progress";
import * as Z from "@radix-ui/react-radio-group";
import { Group as tt, Panel as at, Separator as rt } from "react-resizable-panels";
import * as L from "@radix-ui/react-scroll-area";
import * as y from "@radix-ui/react-select";
import * as A from "@radix-ui/react-tooltip";
import * as H from "@radix-ui/react-slider";
import { useTheme as ot } from "next-themes";
import { Toaster as nt } from "sonner";
import * as se from "@radix-ui/react-switch";
import * as W from "@radix-ui/react-tabs";
import * as it from "@radix-ui/react-toggle";
import * as fe from "@radix-ui/react-toggle-group";
function r(...e) {
  return $e(Ve(e));
}
function Na({
  ...e
}) {
  return /* @__PURE__ */ a(E.Root, { "data-slot": "accordion", ...e });
}
function ya({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    E.Item,
    {
      "data-slot": "accordion-item",
      className: r("border-b last:border-b-0", e),
      ...t
    }
  );
}
function ka({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ a(E.Header, { className: "flex", children: /* @__PURE__ */ l(
    E.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: r(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...o,
      children: [
        t,
        /* @__PURE__ */ a(B, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function za({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    E.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...o,
      children: /* @__PURE__ */ a("div", { className: r("pt-0 pb-4", e), children: t })
    }
  );
}
const st = k(
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
), dt = u.forwardRef(({ className: e, variant: t, ...o }, n) => /* @__PURE__ */ a(
  "div",
  {
    ref: n,
    role: "alert",
    className: r(st({ variant: t }), e),
    ...o
  }
));
dt.displayName = "Alert";
const lt = u.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ a(
  "h5",
  {
    ref: o,
    className: r("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
lt.displayName = "AlertTitle";
const ct = u.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ a(
  "div",
  {
    ref: o,
    className: r("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
ct.displayName = "AlertDescription";
const G = k(
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
function $({
  className: e,
  variant: t = "default",
  size: o = "default",
  asChild: n = !1,
  ...i
}) {
  return /* @__PURE__ */ a(
    n ? T : "button",
    {
      "data-slot": "button",
      "data-variant": t,
      "data-size": o,
      className: r(G({ variant: t, size: o, className: e })),
      ...i
    }
  );
}
function Ca({
  ...e
}) {
  return /* @__PURE__ */ a(M.Root, { "data-slot": "alert-dialog", ...e });
}
function _a({
  ...e
}) {
  return /* @__PURE__ */ a(M.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function ut({
  ...e
}) {
  return /* @__PURE__ */ a(M.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function mt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    M.Overlay,
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
function Sa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(ut, { children: [
    /* @__PURE__ */ a(mt, {}),
    /* @__PURE__ */ a(
      M.Content,
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
function Ia({
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
function Ta({
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
function Ma({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    M.Title,
    {
      "data-slot": "alert-dialog-title",
      className: r("text-lg font-semibold", e),
      ...t
    }
  );
}
function Pa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    M.Description,
    {
      "data-slot": "alert-dialog-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Da({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    M.Action,
    {
      className: r(G(), e),
      ...t
    }
  );
}
function Ra({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    M.Cancel,
    {
      className: r(G({ variant: "outline" }), e),
      ...t
    }
  );
}
function ja({
  ...e
}) {
  return /* @__PURE__ */ a(He.Root, { "data-slot": "aspect-ratio", ...e });
}
function Aa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    te.Root,
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
function Ga({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    te.Image,
    {
      "data-slot": "avatar-image",
      className: r("aspect-square size-full", e),
      ...t
    }
  );
}
function La({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    te.Fallback,
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
const ft = k(
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
function Ea({
  className: e,
  variant: t,
  asChild: o = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    o ? T : "span",
    {
      "data-slot": "badge",
      className: r(ft({ variant: t }), e),
      ...n
    }
  );
}
function Fa({ ...e }) {
  return /* @__PURE__ */ a("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function Ba({ className: e, ...t }) {
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
function Oa({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: r("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function Va({
  asChild: e,
  className: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    e ? T : "a",
    {
      "data-slot": "breadcrumb-link",
      className: r("hover:text-foreground transition-colors", t),
      ...o
    }
  );
}
function $a({ className: e, ...t }) {
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
function Ha({
  children: e,
  className: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: r("[&>svg]:size-3.5", t),
      ...o,
      children: e ?? /* @__PURE__ */ a(Ie, {})
    }
  );
}
function Ka({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: r("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ a(Te, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
function U({
  className: e,
  orientation: t = "horizontal",
  decorative: o = !0,
  ...n
}) {
  return /* @__PURE__ */ a(
    Ke.Root,
    {
      "data-slot": "separator",
      decorative: o,
      orientation: t,
      className: r(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...n
    }
  );
}
const pt = k(
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
function qa({
  className: e,
  orientation: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "button-group",
      "data-orientation": t,
      className: r(pt({ orientation: t }), e),
      ...o
    }
  );
}
function Wa({
  className: e,
  asChild: t = !1,
  ...o
}) {
  return /* @__PURE__ */ a(
    t ? T : "div",
    {
      className: r(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o
    }
  );
}
function Ua({
  className: e,
  orientation: t = "vertical",
  ...o
}) {
  return /* @__PURE__ */ a(
    U,
    {
      "data-slot": "button-group-separator",
      orientation: t,
      className: r(
        "bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
        e
      ),
      ...o
    }
  );
}
function Xa({
  className: e,
  classNames: t,
  showOutsideDays: o = !0,
  captionLayout: n = "label",
  buttonVariant: i = "ghost",
  formatters: d,
  components: c,
  ...m
}) {
  const s = me();
  return /* @__PURE__ */ a(
    qe,
    {
      showOutsideDays: o,
      className: r(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: n,
      formatters: {
        formatMonthDropdown: (p) => p.toLocaleString("default", { month: "short" }),
        ...d
      },
      classNames: {
        root: r("w-fit", s.root),
        months: r(
          "flex gap-4 flex-col md:flex-row relative",
          s.months
        ),
        month: r("flex flex-col w-full gap-4", s.month),
        nav: r(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          s.nav
        ),
        button_previous: r(
          G({ variant: i }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          s.button_previous
        ),
        button_next: r(
          G({ variant: i }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          s.button_next
        ),
        month_caption: r(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          s.month_caption
        ),
        dropdowns: r(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          s.dropdowns
        ),
        dropdown_root: r(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          s.dropdown_root
        ),
        dropdown: r(
          "absolute bg-popover inset-0 opacity-0",
          s.dropdown
        ),
        caption_label: r(
          "select-none font-medium",
          n === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          s.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: r("flex", s.weekdays),
        weekday: r(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          s.weekday
        ),
        week: r("flex w-full mt-2", s.week),
        week_number_header: r(
          "select-none w-(--cell-size)",
          s.week_number_header
        ),
        week_number: r(
          "text-[0.8rem] select-none text-muted-foreground",
          s.week_number
        ),
        day: r(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          m.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          s.day
        ),
        range_start: r(
          "rounded-l-md bg-accent",
          s.range_start
        ),
        range_middle: r("rounded-none", s.range_middle),
        range_end: r("rounded-r-md bg-accent", s.range_end),
        today: r(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          s.today
        ),
        outside: r(
          "text-muted-foreground aria-selected:text-muted-foreground",
          s.outside
        ),
        disabled: r(
          "text-muted-foreground opacity-50",
          s.disabled
        ),
        hidden: r("invisible", s.hidden),
        ...t
      },
      components: {
        Root: ({ className: p, rootRef: w, ...C }) => /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "calendar",
            ref: w,
            className: r(p),
            ...C
          }
        ),
        Chevron: ({ className: p, orientation: w, ...C }) => w === "left" ? /* @__PURE__ */ a(le, { className: r("size-4", p), ...C }) : w === "right" ? /* @__PURE__ */ a(
          O,
          {
            className: r("size-4", p),
            ...C
          }
        ) : /* @__PURE__ */ a(B, { className: r("size-4", p), ...C }),
        DayButton: gt,
        WeekNumber: ({ children: p, ...w }) => /* @__PURE__ */ a("td", { ...w, children: /* @__PURE__ */ a("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: p }) }),
        ...c
      },
      ...m
    }
  );
}
function gt({
  className: e,
  day: t,
  modifiers: o,
  ...n
}) {
  const i = me(), d = u.useRef(null);
  return u.useEffect(() => {
    o.focused && d.current?.focus();
  }, [o.focused]), /* @__PURE__ */ a(
    $,
    {
      ref: d,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(),
      "data-selected-single": o.selected && !o.range_start && !o.range_end && !o.range_middle,
      "data-range-start": o.range_start,
      "data-range-end": o.range_end,
      "data-range-middle": o.range_middle,
      className: r(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        i.day,
        e
      ),
      ...n
    }
  );
}
function Ya({ className: e, ...t }) {
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
function Ja({ className: e, ...t }) {
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
function Qa({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-title",
      className: r("leading-none font-semibold", e),
      ...t
    }
  );
}
function Za({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function er({ className: e, ...t }) {
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
function tr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-content",
      className: r("px-6", e),
      ...t
    }
  );
}
function ar({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-footer",
      className: r("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const pe = u.createContext(null);
function X() {
  const e = u.useContext(pe);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function rr({
  orientation: e = "horizontal",
  opts: t,
  setApi: o,
  plugins: n,
  className: i,
  children: d,
  ...c
}) {
  const [m, s] = We(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    n
  ), [p, w] = u.useState(!1), [C, _] = u.useState(!1), N = u.useCallback((g) => {
    g && (w(g.canScrollPrev()), _(g.canScrollNext()));
  }, []), S = u.useCallback(() => {
    s?.scrollPrev();
  }, [s]), I = u.useCallback(() => {
    s?.scrollNext();
  }, [s]), f = u.useCallback(
    (g) => {
      g.key === "ArrowLeft" ? (g.preventDefault(), S()) : g.key === "ArrowRight" && (g.preventDefault(), I());
    },
    [S, I]
  );
  return u.useEffect(() => {
    !s || !o || o(s);
  }, [s, o]), u.useEffect(() => {
    if (s)
      return N(s), s.on("reInit", N), s.on("select", N), () => {
        s?.off("select", N);
      };
  }, [s, N]), /* @__PURE__ */ a(
    pe.Provider,
    {
      value: {
        carouselRef: m,
        api: s,
        opts: t,
        orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: S,
        scrollNext: I,
        canScrollPrev: p,
        canScrollNext: C
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          onKeyDownCapture: f,
          className: r("relative", i),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...c,
          children: d
        }
      )
    }
  );
}
function or({ className: e, ...t }) {
  const { carouselRef: o, orientation: n } = X();
  return /* @__PURE__ */ a(
    "div",
    {
      ref: o,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ a(
        "div",
        {
          className: r(
            "flex",
            n === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            e
          ),
          ...t
        }
      )
    }
  );
}
function nr({ className: e, ...t }) {
  const { orientation: o } = X();
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: r(
        "min-w-0 shrink-0 grow-0 basis-full",
        o === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
}
function ir({
  className: e,
  variant: t = "outline",
  size: o = "icon",
  ...n
}) {
  const { orientation: i, scrollPrev: d, canScrollPrev: c } = X();
  return /* @__PURE__ */ l(
    $,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: o,
      className: r(
        "absolute size-8 rounded-full",
        i === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !c,
      onClick: d,
      ...n,
      children: [
        /* @__PURE__ */ a(Me, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function sr({
  className: e,
  variant: t = "outline",
  size: o = "icon",
  ...n
}) {
  const { orientation: i, scrollNext: d, canScrollNext: c } = X();
  return /* @__PURE__ */ l(
    $,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: o,
      className: r(
        "absolute size-8 rounded-full",
        i === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !c,
      onClick: d,
      ...n,
      children: [
        /* @__PURE__ */ a(Pe, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const bt = { light: "", dark: ".dark" }, ge = u.createContext(null);
function be() {
  const e = u.useContext(ge);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function dr({
  id: e,
  className: t,
  children: o,
  config: n,
  ...i
}) {
  const d = u.useId(), c = `chart-${e || d.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(ge.Provider, { value: { config: n }, children: /* @__PURE__ */ l(
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
        /* @__PURE__ */ a(vt, { id: c, config: n }),
        /* @__PURE__ */ a(ae.ResponsiveContainer, { children: o })
      ]
    }
  ) });
}
const vt = ({ id: e, config: t }) => {
  const o = Object.entries(t).filter(
    ([, n]) => n.theme || n.color
  );
  return o.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(bt).map(
          ([n, i]) => `
${i} [data-chart=${e}] {
${o.map(([d, c]) => {
            const m = c.theme?.[n] || c.color;
            return m ? `  --color-${d}: ${m};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, lr = ae.Tooltip;
function cr({
  active: e,
  payload: t,
  className: o,
  indicator: n = "dot",
  hideLabel: i = !1,
  hideIndicator: d = !1,
  label: c,
  labelFormatter: m,
  labelClassName: s,
  formatter: p,
  color: w,
  nameKey: C,
  labelKey: _
}) {
  const { config: N } = be(), S = u.useMemo(() => {
    if (i || !t?.length)
      return null;
    const [f] = t, g = `${_ || f?.dataKey || f?.name || "value"}`, z = ee(N, f, g), R = !_ && typeof c == "string" ? N[c]?.label || c : z?.label;
    return m ? /* @__PURE__ */ a("div", { className: r("font-medium", s), children: m(R, t) }) : R ? /* @__PURE__ */ a("div", { className: r("font-medium", s), children: R }) : null;
  }, [
    c,
    m,
    t,
    i,
    s,
    N,
    _
  ]);
  if (!e || !t?.length)
    return null;
  const I = t.length === 1 && n !== "dot";
  return /* @__PURE__ */ l(
    "div",
    {
      className: r(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        o
      ),
      children: [
        I ? null : S,
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: t.filter((f) => f.type !== "none").map((f, g) => {
          const z = `${C || f.name || f.dataKey || "value"}`, R = ee(N, f, z), oe = w || f.payload.fill || f.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: r(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                n === "dot" && "items-center"
              ),
              children: p && f?.value !== void 0 && f.name ? p(f.value, f.name, f, g, f.payload) : /* @__PURE__ */ l(_e, { children: [
                R?.icon ? /* @__PURE__ */ a(R.icon, {}) : !d && /* @__PURE__ */ a(
                  "div",
                  {
                    className: r(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": n === "dot",
                        "w-1": n === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                        "my-0.5": I && n === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": oe,
                      "--color-border": oe
                    }
                  }
                ),
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: r(
                      "flex flex-1 justify-between leading-none",
                      I ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ l("div", { className: "grid gap-1.5", children: [
                        I ? S : null,
                        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: R?.label || f.name })
                      ] }),
                      f.value && /* @__PURE__ */ a("span", { className: "text-foreground font-mono font-medium tabular-nums", children: f.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            f.dataKey
          );
        }) })
      ]
    }
  );
}
const ur = ae.Legend;
function mr({
  className: e,
  hideIcon: t = !1,
  payload: o,
  verticalAlign: n = "bottom",
  nameKey: i
}) {
  const { config: d } = be();
  return o?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: r(
        "flex items-center justify-center gap-4",
        n === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: o.filter((c) => c.type !== "none").map((c) => {
        const m = `${i || c.dataKey || "value"}`, s = ee(d, c, m);
        return /* @__PURE__ */ l(
          "div",
          {
            className: r(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            ),
            children: [
              s?.icon && !t ? /* @__PURE__ */ a(s.icon, {}) : /* @__PURE__ */ a(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: c.color
                  }
                }
              ),
              s?.label
            ]
          },
          c.value
        );
      })
    }
  ) : null;
}
function ee(e, t, o) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let i = o;
  return o in t && typeof t[o] == "string" ? i = t[o] : n && o in n && typeof n[o] == "string" && (i = n[o]), i in e ? e[i] : e[o];
}
function fr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ne.Root,
    {
      "data-slot": "checkbox",
      className: r(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        ne.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ a(V, { className: "size-3.5" })
        }
      )
    }
  );
}
function pr({
  ...e
}) {
  return /* @__PURE__ */ a(re.Root, { "data-slot": "collapsible", ...e });
}
function gr({
  ...e
}) {
  return /* @__PURE__ */ a(
    re.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...e
    }
  );
}
function br({
  ...e
}) {
  return /* @__PURE__ */ a(
    re.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...e
    }
  );
}
function xt({
  ...e
}) {
  return /* @__PURE__ */ a(b.Root, { "data-slot": "dialog", ...e });
}
function vr({
  ...e
}) {
  return /* @__PURE__ */ a(b.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function ht({
  ...e
}) {
  return /* @__PURE__ */ a(b.Portal, { "data-slot": "dialog-portal", ...e });
}
function xr({
  ...e
}) {
  return /* @__PURE__ */ a(b.Close, { "data-slot": "dialog-close", ...e });
}
function wt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    b.Overlay,
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
function Nt({
  className: e,
  children: t,
  showCloseButton: o = !0,
  ...n
}) {
  return /* @__PURE__ */ l(ht, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a(wt, {}),
    /* @__PURE__ */ l(
      b.Content,
      {
        "data-slot": "dialog-content",
        className: r(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          e
        ),
        ...n,
        children: [
          t,
          o && /* @__PURE__ */ l(
            b.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ a(ce, {}),
                /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function yt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: r("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function hr({ className: e, ...t }) {
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
function kt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    b.Title,
    {
      "data-slot": "dialog-title",
      className: r("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function zt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    b.Description,
    {
      "data-slot": "dialog-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Ct({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j,
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
function wr({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: o,
  className: n,
  showCloseButton: i = !0,
  ...d
}) {
  return /* @__PURE__ */ l(xt, { ...d, children: [
    /* @__PURE__ */ l(yt, { className: "sr-only", children: [
      /* @__PURE__ */ a(kt, { children: e }),
      /* @__PURE__ */ a(zt, { children: t })
    ] }),
    /* @__PURE__ */ a(
      Nt,
      {
        className: r("overflow-hidden p-0", n),
        showCloseButton: i,
        children: /* @__PURE__ */ a(Ct, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: o })
      }
    )
  ] });
}
function Nr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ a(De, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ a(
          j.Input,
          {
            "data-slot": "command-input",
            className: r(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              e
            ),
            ...t
          }
        )
      ]
    }
  );
}
function yr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.List,
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
function kr({
  ...e
}) {
  return /* @__PURE__ */ a(
    j.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function zr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Group,
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
function Cr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Separator,
    {
      "data-slot": "command-separator",
      className: r("bg-border -mx-1 h-px", e),
      ...t
    }
  );
}
function _r({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Item,
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
function Sr({
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
function Ir({
  ...e
}) {
  return /* @__PURE__ */ a(v.Root, { "data-slot": "context-menu", ...e });
}
function Tr({
  ...e
}) {
  return /* @__PURE__ */ a(v.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function Mr({
  ...e
}) {
  return /* @__PURE__ */ a(v.Group, { "data-slot": "context-menu-group", ...e });
}
function Pr({
  ...e
}) {
  return /* @__PURE__ */ a(v.Portal, { "data-slot": "context-menu-portal", ...e });
}
function Dr({
  ...e
}) {
  return /* @__PURE__ */ a(v.Sub, { "data-slot": "context-menu-sub", ...e });
}
function Rr({
  ...e
}) {
  return /* @__PURE__ */ a(
    v.RadioGroup,
    {
      "data-slot": "context-menu-radio-group",
      ...e
    }
  );
}
function jr({
  className: e,
  inset: t,
  children: o,
  ...n
}) {
  return /* @__PURE__ */ l(
    v.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": t,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        o,
        /* @__PURE__ */ a(O, { className: "ml-auto" })
      ]
    }
  );
}
function Ar({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    v.SubContent,
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
function Gr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(v.Portal, { children: /* @__PURE__ */ a(
    v.Content,
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
function Lr({
  className: e,
  inset: t,
  variant: o = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    v.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": t,
      "data-variant": o,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function Er({
  className: e,
  children: t,
  checked: o,
  ...n
}) {
  return /* @__PURE__ */ l(
    v.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: o,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(v.ItemIndicator, { children: /* @__PURE__ */ a(V, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function Fr({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ l(
    v.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(v.ItemIndicator, { children: /* @__PURE__ */ a(q, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Br({
  className: e,
  inset: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    v.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": t,
      className: r(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...o
    }
  );
}
function Or({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    v.Separator,
    {
      "data-slot": "context-menu-separator",
      className: r("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Vr({
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
function $r({
  ...e
}) {
  return /* @__PURE__ */ a(P.Root, { "data-slot": "drawer", ...e });
}
function Hr({
  ...e
}) {
  return /* @__PURE__ */ a(P.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function _t({
  ...e
}) {
  return /* @__PURE__ */ a(P.Portal, { "data-slot": "drawer-portal", ...e });
}
function Kr({
  ...e
}) {
  return /* @__PURE__ */ a(P.Close, { "data-slot": "drawer-close", ...e });
}
function St({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    P.Overlay,
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
function qr({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ l(_t, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ a(St, {}),
    /* @__PURE__ */ l(
      P.Content,
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
        ...o,
        children: [
          /* @__PURE__ */ a("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          t
        ]
      }
    )
  ] });
}
function Wr({ className: e, ...t }) {
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
function Ur({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-footer",
      className: r("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function Xr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    P.Title,
    {
      "data-slot": "drawer-title",
      className: r("text-foreground font-semibold", e),
      ...t
    }
  );
}
function Yr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    P.Description,
    {
      "data-slot": "drawer-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Jr({
  ...e
}) {
  return /* @__PURE__ */ a(x.Root, { "data-slot": "dropdown-menu", ...e });
}
function Qr({
  ...e
}) {
  return /* @__PURE__ */ a(x.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function Zr({
  ...e
}) {
  return /* @__PURE__ */ a(
    x.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function eo({
  className: e,
  sideOffset: t = 4,
  ...o
}) {
  return /* @__PURE__ */ a(x.Portal, { children: /* @__PURE__ */ a(
    x.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...o
    }
  ) });
}
function to({
  ...e
}) {
  return /* @__PURE__ */ a(x.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function ao({
  className: e,
  inset: t,
  variant: o = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    x.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": o,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function ro({
  className: e,
  children: t,
  checked: o,
  ...n
}) {
  return /* @__PURE__ */ l(
    x.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: o,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(x.ItemIndicator, { children: /* @__PURE__ */ a(V, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function oo({
  ...e
}) {
  return /* @__PURE__ */ a(
    x.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...e
    }
  );
}
function no({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ l(
    x.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(x.ItemIndicator, { children: /* @__PURE__ */ a(q, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function io({
  className: e,
  inset: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    x.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: r(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...o
    }
  );
}
function so({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    x.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: r("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function lo({
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
function co({
  ...e
}) {
  return /* @__PURE__ */ a(x.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function uo({
  className: e,
  inset: t,
  children: o,
  ...n
}) {
  return /* @__PURE__ */ l(
    x.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": t,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        o,
        /* @__PURE__ */ a(O, { className: "ml-auto size-4" })
      ]
    }
  );
}
function mo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    x.SubContent,
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
function fo({ className: e, ...t }) {
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
function po({ className: e, ...t }) {
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
const It = k(
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
function go({
  className: e,
  variant: t = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": t,
      className: r(It({ variant: t, className: e })),
      ...o
    }
  );
}
function bo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-title",
      className: r("text-lg font-medium tracking-tight", e),
      ...t
    }
  );
}
function vo({ className: e, ...t }) {
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
function xo({ className: e, ...t }) {
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
function ve({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Ue.Root,
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
function ho({ className: e, ...t }) {
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
function wo({
  className: e,
  variant: t = "legend",
  ...o
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
      ...o
    }
  );
}
function No({ className: e, ...t }) {
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
const Tt = k(
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
function yo({
  className: e,
  orientation: t = "vertical",
  ...o
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": t,
      className: r(Tt({ orientation: t }), e),
      ...o
    }
  );
}
function ko({ className: e, ...t }) {
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
function zo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ve,
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
function Co({ className: e, ...t }) {
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
function _o({ className: e, ...t }) {
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
function So({
  children: e,
  className: t,
  ...o
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "field-separator",
      "data-content": !!e,
      className: r(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ a(U, { className: "absolute inset-0 top-1/2" }),
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
function Io({
  className: e,
  children: t,
  errors: o,
  ...n
}) {
  const i = Se(() => {
    if (t)
      return t;
    if (!o?.length)
      return null;
    const d = [
      ...new Map(o.map((c) => [c?.message, c])).values()
    ];
    return d?.length == 1 ? d[0]?.message : /* @__PURE__ */ a("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: d.map(
      (c, m) => c?.message && /* @__PURE__ */ a("li", { children: c.message }, m)
    ) });
  }, [t, o]);
  return i ? /* @__PURE__ */ a(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: r("text-destructive text-sm font-normal", e),
      ...n,
      children: i
    }
  ) : null;
}
const To = Xe, xe = u.createContext(
  {}
), Mo = ({
  ...e
}) => /* @__PURE__ */ a(xe.Provider, { value: { name: e.name }, children: /* @__PURE__ */ a(Qe, { ...e }) }), Y = () => {
  const e = u.useContext(xe), t = u.useContext(he), { getFieldState: o } = Ye(), n = Je({ name: e.name }), i = o(e.name, n);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: d } = t;
  return {
    id: d,
    name: e.name,
    formItemId: `${d}-form-item`,
    formDescriptionId: `${d}-form-item-description`,
    formMessageId: `${d}-form-item-message`,
    ...i
  };
}, he = u.createContext(
  {}
);
function Po({ className: e, ...t }) {
  const o = u.useId();
  return /* @__PURE__ */ a(he.Provider, { value: { id: o }, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "form-item",
      className: r("grid gap-2", e),
      ...t
    }
  ) });
}
function Do({
  className: e,
  ...t
}) {
  const { error: o, formItemId: n } = Y();
  return /* @__PURE__ */ a(
    ve,
    {
      "data-slot": "form-label",
      "data-error": !!o,
      className: r("data-[error=true]:text-destructive", e),
      htmlFor: n,
      ...t
    }
  );
}
function Ro({ ...e }) {
  const { error: t, formItemId: o, formDescriptionId: n, formMessageId: i } = Y();
  return /* @__PURE__ */ a(
    T,
    {
      "data-slot": "form-control",
      id: o,
      "aria-describedby": t ? `${n} ${i}` : `${n}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function jo({ className: e, ...t }) {
  const { formDescriptionId: o } = Y();
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "form-description",
      id: o,
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Ao({ className: e, ...t }) {
  const { error: o, formMessageId: n } = Y(), i = o ? String(o?.message ?? "") : t.children;
  return i ? /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "form-message",
      id: n,
      className: r("text-destructive text-sm", e),
      ...t,
      children: i
    }
  ) : null;
}
function Go({
  ...e
}) {
  return /* @__PURE__ */ a(K.Root, { "data-slot": "hover-card", ...e });
}
function Lo({
  ...e
}) {
  return /* @__PURE__ */ a(K.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function Eo({
  className: e,
  align: t = "center",
  sideOffset: o = 4,
  ...n
}) {
  return /* @__PURE__ */ a(K.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ a(
    K.Content,
    {
      "data-slot": "hover-card-content",
      align: t,
      sideOffset: o,
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...n
    }
  ) });
}
function we({ className: e, type: t, ...o }) {
  return /* @__PURE__ */ a(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: r(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...o
    }
  );
}
function Mt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "textarea",
    {
      "data-slot": "textarea",
      className: r(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ...t
    }
  );
}
function Fo({ className: e, ...t }) {
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
const Pt = k(
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
function Bo({
  className: e,
  align: t = "inline-start",
  ...o
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": t,
      className: r(Pt({ align: t }), e),
      onClick: (n) => {
        n.target.closest("button") || n.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...o
    }
  );
}
const Dt = k(
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
function Oo({
  className: e,
  type: t = "button",
  variant: o = "ghost",
  size: n = "xs",
  ...i
}) {
  return /* @__PURE__ */ a(
    $,
    {
      type: t,
      "data-size": n,
      variant: o,
      className: r(Dt({ size: n }), e),
      ...i
    }
  );
}
function Vo({ className: e, ...t }) {
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
function $o({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    we,
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
function Ho({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Mt,
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
function Ko({
  className: e,
  containerClassName: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    Ze,
    {
      "data-slot": "input-otp",
      containerClassName: r(
        "flex items-center gap-2 has-disabled:opacity-50",
        t
      ),
      className: r("disabled:cursor-not-allowed", e),
      ...o
    }
  );
}
function qo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-otp-group",
      className: r("flex items-center", e),
      ...t
    }
  );
}
function Wo({
  index: e,
  className: t,
  ...o
}) {
  const n = u.useContext(et), { char: i, hasFakeCaret: d, isActive: c } = n?.slots[e] ?? {};
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": c,
      className: r(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        t
      ),
      ...o,
      children: [
        i,
        d && /* @__PURE__ */ a("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ a("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function Uo({ ...e }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ a(Re, {}) });
}
function Xo({ className: e, ...t }) {
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
function Yo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    U,
    {
      "data-slot": "item-separator",
      orientation: "horizontal",
      className: r("my-0", e),
      ...t
    }
  );
}
const Rt = k(
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
function Jo({
  className: e,
  variant: t = "default",
  size: o = "default",
  asChild: n = !1,
  ...i
}) {
  return /* @__PURE__ */ a(
    n ? T : "div",
    {
      "data-slot": "item",
      "data-variant": t,
      "data-size": o,
      className: r(Rt({ variant: t, size: o, className: e })),
      ...i
    }
  );
}
const jt = k(
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
function Qo({
  className: e,
  variant: t = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-media",
      "data-variant": t,
      className: r(jt({ variant: t, className: e })),
      ...o
    }
  );
}
function Zo({ className: e, ...t }) {
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
function en({ className: e, ...t }) {
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
function tn({ className: e, ...t }) {
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
function an({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-actions",
      className: r("flex items-center gap-2", e),
      ...t
    }
  );
}
function rn({ className: e, ...t }) {
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
function on({ className: e, ...t }) {
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
function nn({ className: e, ...t }) {
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
function sn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "kbd",
    {
      "data-slot": "kbd-group",
      className: r("inline-flex items-center gap-1", e),
      ...t
    }
  );
}
function dn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    h.Root,
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
function ln({
  ...e
}) {
  return /* @__PURE__ */ a(h.Menu, { "data-slot": "menubar-menu", ...e });
}
function cn({
  ...e
}) {
  return /* @__PURE__ */ a(h.Group, { "data-slot": "menubar-group", ...e });
}
function At({
  ...e
}) {
  return /* @__PURE__ */ a(h.Portal, { "data-slot": "menubar-portal", ...e });
}
function un({
  ...e
}) {
  return /* @__PURE__ */ a(h.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function mn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    h.Trigger,
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
function fn({
  className: e,
  align: t = "start",
  alignOffset: o = -4,
  sideOffset: n = 8,
  ...i
}) {
  return /* @__PURE__ */ a(At, { children: /* @__PURE__ */ a(
    h.Content,
    {
      "data-slot": "menubar-content",
      align: t,
      alignOffset: o,
      sideOffset: n,
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        e
      ),
      ...i
    }
  ) });
}
function pn({
  className: e,
  inset: t,
  variant: o = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    h.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": t,
      "data-variant": o,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function gn({
  className: e,
  children: t,
  checked: o,
  ...n
}) {
  return /* @__PURE__ */ l(
    h.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: o,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(h.ItemIndicator, { children: /* @__PURE__ */ a(V, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function bn({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ l(
    h.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(h.ItemIndicator, { children: /* @__PURE__ */ a(q, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function vn({
  className: e,
  inset: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    h.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": t,
      className: r(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...o
    }
  );
}
function xn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    h.Separator,
    {
      "data-slot": "menubar-separator",
      className: r("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function hn({
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
function wn({
  ...e
}) {
  return /* @__PURE__ */ a(h.Sub, { "data-slot": "menubar-sub", ...e });
}
function Nn({
  className: e,
  inset: t,
  children: o,
  ...n
}) {
  return /* @__PURE__ */ l(
    h.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": t,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        e
      ),
      ...n,
      children: [
        o,
        /* @__PURE__ */ a(O, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function yn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    h.SubContent,
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
function kn({
  className: e,
  children: t,
  viewport: o = !0,
  ...n
}) {
  return /* @__PURE__ */ l(
    D.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": o,
      className: r(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        e
      ),
      ...n,
      children: [
        t,
        o && /* @__PURE__ */ a(Lt, {})
      ]
    }
  );
}
function zn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    D.List,
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
function Cn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    D.Item,
    {
      "data-slot": "navigation-menu-item",
      className: r("relative", e),
      ...t
    }
  );
}
const Gt = k(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function _n({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ l(
    D.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: r(Gt(), "group", e),
      ...o,
      children: [
        t,
        " ",
        /* @__PURE__ */ a(
          B,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function Sn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    D.Content,
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
function Lt({
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
        D.Viewport,
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
function In({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    D.Link,
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
function Tn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    D.Indicator,
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
function Mn({ className: e, ...t }) {
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
function Pn({
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
function Dn({ ...e }) {
  return /* @__PURE__ */ a("li", { "data-slot": "pagination-item", ...e });
}
function Ne({
  className: e,
  isActive: t,
  size: o = "icon",
  ...n
}) {
  return /* @__PURE__ */ a(
    "a",
    {
      "aria-current": t ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": t,
      className: r(
        G({
          variant: t ? "outline" : "ghost",
          size: o
        }),
        e
      ),
      ...n
    }
  );
}
function Rn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    Ne,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: r("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a(le, {}),
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function jn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    Ne,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: r("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ a(O, {})
      ]
    }
  );
}
function An({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: r("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ a(je, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
function Gn({
  ...e
}) {
  return /* @__PURE__ */ a(F.Root, { "data-slot": "popover", ...e });
}
function Ln({
  ...e
}) {
  return /* @__PURE__ */ a(F.Trigger, { "data-slot": "popover-trigger", ...e });
}
function En({
  className: e,
  align: t = "center",
  sideOffset: o = 4,
  ...n
}) {
  return /* @__PURE__ */ a(F.Portal, { children: /* @__PURE__ */ a(
    F.Content,
    {
      "data-slot": "popover-content",
      align: t,
      sideOffset: o,
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...n
    }
  ) });
}
function Fn({
  ...e
}) {
  return /* @__PURE__ */ a(F.Anchor, { "data-slot": "popover-anchor", ...e });
}
function Bn({
  className: e,
  value: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    ie.Root,
    {
      "data-slot": "progress",
      className: r(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...o,
      children: /* @__PURE__ */ a(
        ie.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function On({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Z.Root,
    {
      "data-slot": "radio-group",
      className: r("grid gap-3", e),
      ...t
    }
  );
}
function Vn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Z.Item,
    {
      "data-slot": "radio-group-item",
      className: r(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        Z.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ a(q, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
function $n({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    tt,
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
function Hn({
  ...e
}) {
  return /* @__PURE__ */ a(at, { "data-slot": "resizable-panel", ...e });
}
function Kn({
  withHandle: e,
  className: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    rt,
    {
      "data-slot": "resizable-handle",
      className: r(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:translate-x-0 data-[orientation=vertical]:after:-translate-y-1/2 [&[data-orientation=vertical]>div]:rotate-90",
        t
      ),
      ...o,
      children: e && /* @__PURE__ */ a("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ a(Ae, { className: "size-2.5" }) })
    }
  );
}
function qn({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ l(
    L.Root,
    {
      "data-slot": "scroll-area",
      className: r("relative", e),
      ...o,
      children: [
        /* @__PURE__ */ a(
          L.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ a(Et, {}),
        /* @__PURE__ */ a(L.Corner, {})
      ]
    }
  );
}
function Et({
  className: e,
  orientation: t = "vertical",
  ...o
}) {
  return /* @__PURE__ */ a(
    L.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: t,
      className: r(
        "flex touch-none p-px transition-colors select-none",
        t === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...o,
      children: /* @__PURE__ */ a(
        L.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
function Wn({
  ...e
}) {
  return /* @__PURE__ */ a(y.Root, { "data-slot": "select", ...e });
}
function Un({
  ...e
}) {
  return /* @__PURE__ */ a(y.Group, { "data-slot": "select-group", ...e });
}
function Xn({
  ...e
}) {
  return /* @__PURE__ */ a(y.Value, { "data-slot": "select-value", ...e });
}
function Yn({
  className: e,
  size: t = "default",
  children: o,
  ...n
}) {
  return /* @__PURE__ */ l(
    y.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: r(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        o,
        /* @__PURE__ */ a(y.Icon, { asChild: !0, children: /* @__PURE__ */ a(B, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function Jn({
  className: e,
  children: t,
  position: o = "item-aligned",
  align: n = "center",
  ...i
}) {
  return /* @__PURE__ */ a(y.Portal, { children: /* @__PURE__ */ l(
    y.Content,
    {
      "data-slot": "select-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: o,
      align: n,
      ...i,
      children: [
        /* @__PURE__ */ a(Ft, {}),
        /* @__PURE__ */ a(
          y.Viewport,
          {
            className: r(
              "p-1",
              o === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ a(Bt, {})
      ]
    }
  ) });
}
function Qn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    y.Label,
    {
      "data-slot": "select-label",
      className: r("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...t
    }
  );
}
function Zn({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ l(
    y.Item,
    {
      "data-slot": "select-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ a(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ a(y.ItemIndicator, { children: /* @__PURE__ */ a(V, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ a(y.ItemText, { children: t })
      ]
    }
  );
}
function ei({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    y.Separator,
    {
      "data-slot": "select-separator",
      className: r("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Ft({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    y.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: r(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(Ge, { className: "size-4" })
    }
  );
}
function Bt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    y.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: r(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(B, { className: "size-4" })
    }
  );
}
function Ot({ ...e }) {
  return /* @__PURE__ */ a(b.Root, { "data-slot": "sheet", ...e });
}
function ti({
  ...e
}) {
  return /* @__PURE__ */ a(b.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function ai({
  ...e
}) {
  return /* @__PURE__ */ a(b.Close, { "data-slot": "sheet-close", ...e });
}
function Vt({
  ...e
}) {
  return /* @__PURE__ */ a(b.Portal, { "data-slot": "sheet-portal", ...e });
}
function $t({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    b.Overlay,
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
function Ht({
  className: e,
  children: t,
  side: o = "right",
  ...n
}) {
  return /* @__PURE__ */ l(Vt, { children: [
    /* @__PURE__ */ a($t, {}),
    /* @__PURE__ */ l(
      b.Content,
      {
        "data-slot": "sheet-content",
        className: r(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          o === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          o === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          o === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          o === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          e
        ),
        ...n,
        children: [
          t,
          /* @__PURE__ */ l(b.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ a(ce, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Kt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: r("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function ri({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-footer",
      className: r("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function qt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    b.Title,
    {
      "data-slot": "sheet-title",
      className: r("text-foreground font-semibold", e),
      ...t
    }
  );
}
function Wt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    b.Description,
    {
      "data-slot": "sheet-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const Q = 768;
function Ut() {
  const [e, t] = u.useState(void 0);
  return u.useEffect(() => {
    const o = window.matchMedia(`(max-width: ${Q - 1}px)`), n = () => {
      t(window.innerWidth < Q);
    };
    return o.addEventListener("change", n), t(window.innerWidth < Q), () => o.removeEventListener("change", n);
  }, []), !!e;
}
function de({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "skeleton",
      className: r("bg-accent animate-pulse rounded-md", e),
      ...t
    }
  );
}
function ye({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ a(
    A.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function Xt({
  ...e
}) {
  return /* @__PURE__ */ a(ye, { children: /* @__PURE__ */ a(A.Root, { "data-slot": "tooltip", ...e }) });
}
function Yt({
  ...e
}) {
  return /* @__PURE__ */ a(A.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function Jt({
  className: e,
  sideOffset: t = 0,
  children: o,
  ...n
}) {
  return /* @__PURE__ */ a(A.Portal, { children: /* @__PURE__ */ l(
    A.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: r(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...n,
      children: [
        o,
        /* @__PURE__ */ a(A.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const Qt = "sidebar_state", Zt = 3600 * 24 * 7, ea = "16rem", ta = "18rem", aa = "3rem", ra = "b", ke = u.createContext(null);
function J() {
  const e = u.useContext(ke);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function oi({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: o,
  className: n,
  style: i,
  children: d,
  ...c
}) {
  const m = Ut(), [s, p] = u.useState(!1), [w, C] = u.useState(e), _ = t ?? w, N = u.useCallback(
    (g) => {
      const z = typeof g == "function" ? g(_) : g;
      o ? o(z) : C(z), document.cookie = `${Qt}=${z}; path=/; max-age=${Zt}`;
    },
    [o, _]
  ), S = u.useCallback(() => m ? p((g) => !g) : N((g) => !g), [m, N, p]);
  u.useEffect(() => {
    const g = (z) => {
      z.key === ra && (z.metaKey || z.ctrlKey) && (z.preventDefault(), S());
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [S]);
  const I = _ ? "expanded" : "collapsed", f = u.useMemo(
    () => ({
      state: I,
      open: _,
      setOpen: N,
      isMobile: m,
      openMobile: s,
      setOpenMobile: p,
      toggleSidebar: S
    }),
    [I, _, N, m, s, p, S]
  );
  return /* @__PURE__ */ a(ke.Provider, { value: f, children: /* @__PURE__ */ a(ye, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": ea,
        "--sidebar-width-icon": aa,
        ...i
      },
      className: r(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        n
      ),
      ...c,
      children: d
    }
  ) }) });
}
function ni({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: o = "offcanvas",
  className: n,
  children: i,
  ...d
}) {
  const { isMobile: c, state: m, openMobile: s, setOpenMobile: p } = J();
  return o === "none" ? /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar",
      className: r(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        n
      ),
      ...d,
      children: i
    }
  ) : c ? /* @__PURE__ */ a(Ot, { open: s, onOpenChange: p, ...d, children: /* @__PURE__ */ l(
    Ht,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": ta
      },
      side: e,
      children: [
        /* @__PURE__ */ l(Kt, { className: "sr-only", children: [
          /* @__PURE__ */ a(qt, { children: "Sidebar" }),
          /* @__PURE__ */ a(Wt, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex h-full w-full flex-col", children: i })
      ]
    }
  ) }) : /* @__PURE__ */ l(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": m,
      "data-collapsible": m === "collapsed" ? o : "",
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
              n
            ),
            ...d,
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
function ii({
  className: e,
  onClick: t,
  ...o
}) {
  const { toggleSidebar: n } = J();
  return /* @__PURE__ */ l(
    $,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: r("size-7", e),
      onClick: (i) => {
        t?.(i), n();
      },
      ...o,
      children: [
        /* @__PURE__ */ a(Le, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function si({ className: e, ...t }) {
  const { toggleSidebar: o } = J();
  return /* @__PURE__ */ a(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: o,
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
function di({ className: e, ...t }) {
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
function li({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    we,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: r("bg-background h-8 w-full shadow-none", e),
      ...t
    }
  );
}
function ci({ className: e, ...t }) {
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
function ui({ className: e, ...t }) {
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
function mi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    U,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: r("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function fi({ className: e, ...t }) {
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
function pi({ className: e, ...t }) {
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
function gi({
  className: e,
  asChild: t = !1,
  ...o
}) {
  return /* @__PURE__ */ a(
    t ? T : "div",
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: r(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...o
    }
  );
}
function bi({
  className: e,
  asChild: t = !1,
  ...o
}) {
  return /* @__PURE__ */ a(
    t ? T : "button",
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
      ...o
    }
  );
}
function vi({
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
function xi({ className: e, ...t }) {
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
function hi({ className: e, ...t }) {
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
const oa = k(
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
function wi({
  asChild: e = !1,
  isActive: t = !1,
  variant: o = "default",
  size: n = "default",
  tooltip: i,
  className: d,
  ...c
}) {
  const m = e ? T : "button", { isMobile: s, state: p } = J(), w = /* @__PURE__ */ a(
    m,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": n,
      "data-active": t,
      className: r(oa({ variant: o, size: n }), d),
      ...c
    }
  );
  return i ? (typeof i == "string" && (i = {
    children: i
  }), /* @__PURE__ */ l(Xt, { children: [
    /* @__PURE__ */ a(Yt, { asChild: !0, children: w }),
    /* @__PURE__ */ a(
      Jt,
      {
        side: "right",
        align: "center",
        hidden: p !== "collapsed" || s,
        ...i
      }
    )
  ] })) : w;
}
function Ni({
  className: e,
  asChild: t = !1,
  showOnHover: o = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    t ? T : "button",
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
        o && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        e
      ),
      ...n
    }
  );
}
function yi({
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
function ki({
  className: e,
  showIcon: t = !1,
  ...o
}) {
  const n = u.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: r("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...o,
      children: [
        t && /* @__PURE__ */ a(
          de,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ a(
          de,
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
function zi({ className: e, ...t }) {
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
function Ci({
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
function _i({
  asChild: e = !1,
  size: t = "md",
  isActive: o = !1,
  className: n,
  ...i
}) {
  return /* @__PURE__ */ a(
    e ? T : "a",
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": t,
      "data-active": o,
      className: r(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        t === "sm" && "text-xs",
        t === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        n
      ),
      ...i
    }
  );
}
function Si({
  className: e,
  defaultValue: t,
  value: o,
  min: n = 0,
  max: i = 100,
  ...d
}) {
  const c = u.useMemo(
    () => Array.isArray(o) ? o : Array.isArray(t) ? t : [n, i],
    [o, t, n, i]
  );
  return /* @__PURE__ */ l(
    H.Root,
    {
      "data-slot": "slider",
      defaultValue: t,
      value: o,
      min: n,
      max: i,
      className: r(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        e
      ),
      ...d,
      children: [
        /* @__PURE__ */ a(
          H.Track,
          {
            "data-slot": "slider-track",
            className: r(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ a(
              H.Range,
              {
                "data-slot": "slider-range",
                className: r(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: c.length }, (m, s) => /* @__PURE__ */ a(
          H.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          s
        ))
      ]
    }
  );
}
const Ii = ({ ...e }) => {
  const { theme: t = "system" } = ot();
  return /* @__PURE__ */ a(
    nt,
    {
      theme: t,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ a(Oe, { className: "size-4" }),
        info: /* @__PURE__ */ a(Be, { className: "size-4" }),
        warning: /* @__PURE__ */ a(Fe, { className: "size-4" }),
        error: /* @__PURE__ */ a(Ee, { className: "size-4" }),
        loading: /* @__PURE__ */ a(ue, { className: "size-4 animate-spin" })
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      },
      ...e
    }
  );
};
function Ti({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ue,
    {
      role: "status",
      "aria-label": "Loading",
      className: r("size-4 animate-spin", e),
      ...t
    }
  );
}
function Mi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    se.Root,
    {
      "data-slot": "switch",
      className: r(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        se.Thumb,
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
function Pi({ className: e, ...t }) {
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
function Di({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "thead",
    {
      "data-slot": "table-header",
      className: r("[&_tr]:border-b", e),
      ...t
    }
  );
}
function Ri({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "table-body",
      className: r("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function ji({ className: e, ...t }) {
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
function Ai({ className: e, ...t }) {
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
function Gi({ className: e, ...t }) {
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
function Li({ className: e, ...t }) {
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
function Ei({
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
function Fi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    W.Root,
    {
      "data-slot": "tabs",
      className: r("flex flex-col gap-2", e),
      ...t
    }
  );
}
function Bi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    W.List,
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
function Oi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    W.Trigger,
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
function Vi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    W.Content,
    {
      "data-slot": "tabs-content",
      className: r("flex-1 outline-none", e),
      ...t
    }
  );
}
const ze = k(
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
function $i({
  className: e,
  variant: t,
  size: o,
  ...n
}) {
  return /* @__PURE__ */ a(
    it.Root,
    {
      "data-slot": "toggle",
      className: r(ze({ variant: t, size: o, className: e })),
      ...n
    }
  );
}
const Ce = u.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function Hi({
  className: e,
  variant: t,
  size: o,
  spacing: n = 0,
  children: i,
  ...d
}) {
  return /* @__PURE__ */ a(
    fe.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": o,
      "data-spacing": n,
      style: { "--gap": n },
      className: r(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        e
      ),
      ...d,
      children: /* @__PURE__ */ a(Ce.Provider, { value: { variant: t, size: o, spacing: n }, children: i })
    }
  );
}
function Ki({
  className: e,
  children: t,
  variant: o,
  size: n,
  ...i
}) {
  const d = u.useContext(Ce);
  return /* @__PURE__ */ a(
    fe.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": d.variant || o,
      "data-size": d.size || n,
      "data-spacing": d.spacing,
      className: r(
        ze({
          variant: d.variant || o,
          size: d.size || n
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
export {
  Na as Accordion,
  za as AccordionContent,
  ya as AccordionItem,
  ka as AccordionTrigger,
  dt as Alert,
  ct as AlertDescription,
  Ca as AlertDialog,
  Da as AlertDialogAction,
  Ra as AlertDialogCancel,
  Sa as AlertDialogContent,
  Pa as AlertDialogDescription,
  Ta as AlertDialogFooter,
  Ia as AlertDialogHeader,
  mt as AlertDialogOverlay,
  ut as AlertDialogPortal,
  Ma as AlertDialogTitle,
  _a as AlertDialogTrigger,
  lt as AlertTitle,
  ja as AspectRatio,
  Aa as Avatar,
  La as AvatarFallback,
  Ga as AvatarImage,
  Ea as Badge,
  Fa as Breadcrumb,
  Ka as BreadcrumbEllipsis,
  Oa as BreadcrumbItem,
  Va as BreadcrumbLink,
  Ba as BreadcrumbList,
  $a as BreadcrumbPage,
  Ha as BreadcrumbSeparator,
  $ as Button,
  qa as ButtonGroup,
  Ua as ButtonGroupSeparator,
  Wa as ButtonGroupText,
  Xa as Calendar,
  gt as CalendarDayButton,
  Ya as Card,
  er as CardAction,
  tr as CardContent,
  Za as CardDescription,
  ar as CardFooter,
  Ja as CardHeader,
  Qa as CardTitle,
  rr as Carousel,
  or as CarouselContent,
  nr as CarouselItem,
  sr as CarouselNext,
  ir as CarouselPrevious,
  dr as ChartContainer,
  ur as ChartLegend,
  mr as ChartLegendContent,
  vt as ChartStyle,
  lr as ChartTooltip,
  cr as ChartTooltipContent,
  fr as Checkbox,
  pr as Collapsible,
  br as CollapsibleContent,
  gr as CollapsibleTrigger,
  Ct as Command,
  wr as CommandDialog,
  kr as CommandEmpty,
  zr as CommandGroup,
  Nr as CommandInput,
  _r as CommandItem,
  yr as CommandList,
  Cr as CommandSeparator,
  Sr as CommandShortcut,
  Ir as ContextMenu,
  Er as ContextMenuCheckboxItem,
  Gr as ContextMenuContent,
  Mr as ContextMenuGroup,
  Lr as ContextMenuItem,
  Br as ContextMenuLabel,
  Pr as ContextMenuPortal,
  Rr as ContextMenuRadioGroup,
  Fr as ContextMenuRadioItem,
  Or as ContextMenuSeparator,
  Vr as ContextMenuShortcut,
  Dr as ContextMenuSub,
  Ar as ContextMenuSubContent,
  jr as ContextMenuSubTrigger,
  Tr as ContextMenuTrigger,
  xt as Dialog,
  xr as DialogClose,
  Nt as DialogContent,
  zt as DialogDescription,
  hr as DialogFooter,
  yt as DialogHeader,
  wt as DialogOverlay,
  ht as DialogPortal,
  kt as DialogTitle,
  vr as DialogTrigger,
  $r as Drawer,
  Kr as DrawerClose,
  qr as DrawerContent,
  Yr as DrawerDescription,
  Ur as DrawerFooter,
  Wr as DrawerHeader,
  St as DrawerOverlay,
  _t as DrawerPortal,
  Xr as DrawerTitle,
  Hr as DrawerTrigger,
  Jr as DropdownMenu,
  ro as DropdownMenuCheckboxItem,
  eo as DropdownMenuContent,
  to as DropdownMenuGroup,
  ao as DropdownMenuItem,
  io as DropdownMenuLabel,
  Qr as DropdownMenuPortal,
  oo as DropdownMenuRadioGroup,
  no as DropdownMenuRadioItem,
  so as DropdownMenuSeparator,
  lo as DropdownMenuShortcut,
  co as DropdownMenuSub,
  mo as DropdownMenuSubContent,
  uo as DropdownMenuSubTrigger,
  Zr as DropdownMenuTrigger,
  fo as Empty,
  xo as EmptyContent,
  vo as EmptyDescription,
  po as EmptyHeader,
  go as EmptyMedia,
  bo as EmptyTitle,
  yo as Field,
  ko as FieldContent,
  _o as FieldDescription,
  Io as FieldError,
  No as FieldGroup,
  zo as FieldLabel,
  wo as FieldLegend,
  So as FieldSeparator,
  ho as FieldSet,
  Co as FieldTitle,
  To as Form,
  Ro as FormControl,
  jo as FormDescription,
  Mo as FormField,
  Po as FormItem,
  Do as FormLabel,
  Ao as FormMessage,
  Go as HoverCard,
  Eo as HoverCardContent,
  Lo as HoverCardTrigger,
  we as Input,
  Fo as InputGroup,
  Bo as InputGroupAddon,
  Oo as InputGroupButton,
  $o as InputGroupInput,
  Vo as InputGroupText,
  Ho as InputGroupTextarea,
  Ko as InputOTP,
  qo as InputOTPGroup,
  Uo as InputOTPSeparator,
  Wo as InputOTPSlot,
  Jo as Item,
  an as ItemActions,
  Zo as ItemContent,
  tn as ItemDescription,
  on as ItemFooter,
  Xo as ItemGroup,
  rn as ItemHeader,
  Qo as ItemMedia,
  Yo as ItemSeparator,
  en as ItemTitle,
  nn as Kbd,
  sn as KbdGroup,
  ve as Label,
  dn as Menubar,
  gn as MenubarCheckboxItem,
  fn as MenubarContent,
  cn as MenubarGroup,
  pn as MenubarItem,
  vn as MenubarLabel,
  ln as MenubarMenu,
  At as MenubarPortal,
  un as MenubarRadioGroup,
  bn as MenubarRadioItem,
  xn as MenubarSeparator,
  hn as MenubarShortcut,
  wn as MenubarSub,
  yn as MenubarSubContent,
  Nn as MenubarSubTrigger,
  mn as MenubarTrigger,
  kn as NavigationMenu,
  Sn as NavigationMenuContent,
  Tn as NavigationMenuIndicator,
  Cn as NavigationMenuItem,
  In as NavigationMenuLink,
  zn as NavigationMenuList,
  _n as NavigationMenuTrigger,
  Lt as NavigationMenuViewport,
  Mn as Pagination,
  Pn as PaginationContent,
  An as PaginationEllipsis,
  Dn as PaginationItem,
  Ne as PaginationLink,
  jn as PaginationNext,
  Rn as PaginationPrevious,
  Gn as Popover,
  Fn as PopoverAnchor,
  En as PopoverContent,
  Ln as PopoverTrigger,
  Bn as Progress,
  On as RadioGroup,
  Vn as RadioGroupItem,
  Kn as ResizableHandle,
  Hn as ResizablePanel,
  $n as ResizablePanelGroup,
  qn as ScrollArea,
  Et as ScrollBar,
  Wn as Select,
  Jn as SelectContent,
  Un as SelectGroup,
  Zn as SelectItem,
  Qn as SelectLabel,
  Bt as SelectScrollDownButton,
  Ft as SelectScrollUpButton,
  ei as SelectSeparator,
  Yn as SelectTrigger,
  Xn as SelectValue,
  U as Separator,
  Ot as Sheet,
  ai as SheetClose,
  Ht as SheetContent,
  Wt as SheetDescription,
  ri as SheetFooter,
  Kt as SheetHeader,
  qt as SheetTitle,
  ti as SheetTrigger,
  ni as Sidebar,
  fi as SidebarContent,
  ui as SidebarFooter,
  pi as SidebarGroup,
  bi as SidebarGroupAction,
  vi as SidebarGroupContent,
  gi as SidebarGroupLabel,
  ci as SidebarHeader,
  li as SidebarInput,
  di as SidebarInset,
  xi as SidebarMenu,
  Ni as SidebarMenuAction,
  yi as SidebarMenuBadge,
  wi as SidebarMenuButton,
  hi as SidebarMenuItem,
  ki as SidebarMenuSkeleton,
  zi as SidebarMenuSub,
  _i as SidebarMenuSubButton,
  Ci as SidebarMenuSubItem,
  oi as SidebarProvider,
  si as SidebarRail,
  mi as SidebarSeparator,
  ii as SidebarTrigger,
  de as Skeleton,
  Si as Slider,
  Ti as Spinner,
  Mi as Switch,
  Pi as Table,
  Ri as TableBody,
  Ei as TableCaption,
  Li as TableCell,
  ji as TableFooter,
  Gi as TableHead,
  Di as TableHeader,
  Ai as TableRow,
  Fi as Tabs,
  Vi as TabsContent,
  Bi as TabsList,
  Oi as TabsTrigger,
  Mt as Textarea,
  Ii as Toaster,
  $i as Toggle,
  Hi as ToggleGroup,
  Ki as ToggleGroupItem,
  Xt as Tooltip,
  Jt as TooltipContent,
  ye as TooltipProvider,
  Yt as TooltipTrigger,
  ft as badgeVariants,
  pt as buttonGroupVariants,
  G as buttonVariants,
  r as cn,
  Gt as navigationMenuTriggerStyle,
  ze as toggleVariants,
  Y as useFormField,
  Ut as useIsMobile,
  J as useSidebar
};
//# sourceMappingURL=index.mjs.map
