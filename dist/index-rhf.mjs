import { jsx as t, jsxs as h } from "react/jsx-runtime";
import * as x from "react";
import { Slot as Ee } from "@radix-ui/react-slot";
import { useFormState as A, Controller as O, useController as He, FormProvider as je, useFormContext as Ae } from "react-hook-form";
import { F as de, c as o, g as U, L as q, B, b as ge, S as Fe, h as Le, I as se } from "./input-D0NE8tsx.js";
import * as xe from "@radix-ui/react-checkbox";
import { CheckIcon as ue, SearchIcon as Pe, XCircle as Oe, ChevronDown as be, ChevronLeftIcon as Ue, ChevronRightIcon as We, ChevronDownIcon as me, CalendarIcon as Re, Upload as De, CheckCircle2 as Ve, AlertCircle as Ye, X as Me, Image as Be, File as Ge, ChevronUpIcon as Xe } from "lucide-react";
import { Command as ee } from "cmdk";
import "@radix-ui/react-dialog";
import * as ie from "@radix-ui/react-popover";
import { startOfMonth as J, format as X, setSeconds as ve, setMinutes as we, setHours as Ne, endOfDay as Ke, startOfDay as Qe, endOfWeek as Ze, startOfWeek as Je, endOfMonth as ye, subWeeks as Se, subMonths as ae } from "date-fns";
import { getDefaultClassNames as Ie, DayPicker as et } from "react-day-picker";
import * as re from "@radix-ui/react-scroll-area";
import tt from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import * as ke from "@radix-ui/react-progress";
import { f as ce, B as $e, T as rt } from "./textarea-BPwkqiSr.js";
import * as P from "@radix-ui/react-select";
import * as nt from "@radix-ui/react-radio-group";
import * as Ce from "@radix-ui/react-switch";
function st({
  className: e,
  size: r = "md",
  ...n
}) {
  const s = de[r ?? "md"];
  return /* @__PURE__ */ t(
    xe.Root,
    {
      "data-slot": "checkbox",
      "data-size": r,
      className: o(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        s.icon,
        e
      ),
      ...n,
      children: /* @__PURE__ */ t(
        xe.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ t(ue, { className: s.icon })
        }
      )
    }
  );
}
function Yt({
  control: e,
  name: r,
  options: n,
  label: s,
  error: i,
  required: f = !1,
  wrapperClassName: c,
  orientation: p = "vertical"
}) {
  const l = A({ control: e, name: r }), u = i || U(l.errors, `${r}.message`);
  return /* @__PURE__ */ h("div", { className: o("w-full", c), children: [
    s && /* @__PURE__ */ h(q, { htmlFor: r, className: "mb-2 block", children: [
      s,
      f && /* @__PURE__ */ t("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ t(
      O,
      {
        control: e,
        name: r,
        render: ({ field: a }) => /* @__PURE__ */ t("div", { className: o("flex gap-4", p === "horizontal" ? "flex-row" : "flex-col"), children: n.map((m) => /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ t(
            st,
            {
              id: `${r}-${m.value}`,
              checked: Array.isArray(a.value) && a.value.includes(m.value),
              onCheckedChange: (v) => {
                const N = Array.isArray(a.value) ? a.value : [];
                v ? a.onChange([...N, m.value]) : a.onChange(N.filter((C) => C !== m.value));
              },
              disabled: m.disabled
            }
          ),
          /* @__PURE__ */ t(q, { htmlFor: `${r}-${m.value}`, className: "font-normal cursor-pointer", children: m.label })
        ] }, m.value)) })
      }
    ),
    u && /* @__PURE__ */ t("p", { className: "text-sm text-destructive mt-1", children: u })
  ] });
}
function ot({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    ee,
    {
      "data-slot": "command",
      className: o(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...r
    }
  );
}
function at({
  className: e,
  label: r,
  error: n,
  required: s,
  id: i,
  ...f
}) {
  const c = r || n, p = /* @__PURE__ */ t("div", { className: "px-1 pt-1", children: /* @__PURE__ */ h(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: o(
        "flex h-9 items-center gap-2 rounded-md border px-3",
        n && "border-destructive"
      ),
      children: [
        /* @__PURE__ */ t(Pe, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ t(
          ee.Input,
          {
            id: i,
            "data-slot": "command-input",
            "aria-invalid": !!n,
            className: o(
              "placeholder:text-muted-foreground flex h-10 w-full bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              n && "focus-visible:ring-destructive",
              e
            ),
            ...f
          }
        )
      ]
    }
  ) });
  return c ? /* @__PURE__ */ h("div", { className: "flex flex-col gap-1", children: [
    r && /* @__PURE__ */ h(q, { htmlFor: i, children: [
      r,
      s && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    p,
    n && /* @__PURE__ */ t("div", { className: "text-destructive text-sm", role: "alert", children: n })
  ] }) : p;
}
function it({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    ee.List,
    {
      "data-slot": "command-list",
      className: o("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
      ...r
    }
  );
}
function lt({ ...e }) {
  return /* @__PURE__ */ t(
    ee.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function ct({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    ee.Group,
    {
      "data-slot": "command-group",
      className: o(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...r
    }
  );
}
function dt({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    ee.Item,
    {
      "data-slot": "command-item",
      className: o(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function fe({ ...e }) {
  return /* @__PURE__ */ t(ie.Root, { "data-slot": "popover", ...e });
}
function he({ ...e }) {
  return /* @__PURE__ */ t(ie.Trigger, { "data-slot": "popover-trigger", ...e });
}
function pe({
  className: e,
  align: r = "center",
  sideOffset: n = 4,
  ...s
}) {
  return /* @__PURE__ */ t(ie.Portal, { children: /* @__PURE__ */ t(
    ie.Content,
    {
      "data-slot": "popover-content",
      align: r,
      sideOffset: n,
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...s
    }
  ) });
}
function ut({
  options: e,
  value: r,
  onChange: n,
  label: s,
  error: i,
  required: f,
  placeholder: c = "Select option...",
  searchPlaceholder: p = "Search...",
  emptyMessage: l = "No results found.",
  disabled: u = !1,
  readonly: a = !1,
  size: m = "md",
  showClearIcon: v = !0,
  showArrowIcon: N = !0,
  suffix: C,
  className: M,
  triggerClassName: T,
  popoverClassName: d
}) {
  const [g, y] = x.useState(!1), k = x.useMemo(
    () => e.find((S) => S.id === r),
    [e, r]
  ), L = !u && !a && !!r, W = (S) => {
    n?.(S.id, S), y(!1);
  }, E = (S) => {
    S.preventDefault(), S.stopPropagation(), L && n?.("", void 0);
  }, H = /* @__PURE__ */ h(fe, { open: g, onOpenChange: y, children: [
    /* @__PURE__ */ t(he, { asChild: !0, children: /* @__PURE__ */ h(
      B,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": g,
        disabled: u,
        size: m,
        className: o(
          "w-full justify-between group/combobox",
          !r && "text-muted-foreground",
          i && "border-destructive",
          T
        ),
        children: [
          /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: k ? k.name : c }),
          /* @__PURE__ */ h("div", { className: "flex items-center gap-1 shrink-0 ml-2", children: [
            r && L ? /* @__PURE__ */ h(
              "span",
              {
                onMouseDown: (S) => {
                  S.preventDefault(), S.stopPropagation();
                },
                onClick: E,
                className: "cursor-pointer",
                children: [
                  v && /* @__PURE__ */ t(Oe, { className: "text-muted-foreground hidden group-hover/combobox:block h-4 w-4" }),
                  N && /* @__PURE__ */ t(be, { className: "text-muted-foreground block group-hover/combobox:hidden h-4 w-4" })
                ]
              }
            ) : N && /* @__PURE__ */ t(be, { className: "text-muted-foreground h-4 w-4" }),
            C
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      pe,
      {
        className: o("w-(--radix-popover-trigger-width) p-0", d),
        align: "start",
        children: /* @__PURE__ */ h(ot, { children: [
          /* @__PURE__ */ t(at, { placeholder: p }),
          /* @__PURE__ */ h(it, { children: [
            /* @__PURE__ */ t(lt, { children: l }),
            /* @__PURE__ */ t(ct, { children: e.map((S) => /* @__PURE__ */ h(
              dt,
              {
                value: S.name,
                disabled: S.disabled,
                onSelect: () => W(S),
                className: "flex items-center justify-between gap-2",
                children: [
                  /* @__PURE__ */ t("span", { className: "flex-1 truncate", children: S.name }),
                  /* @__PURE__ */ t(
                    ue,
                    {
                      className: o(
                        "h-4 w-4 shrink-0 text-primary",
                        r === S.id ? "opacity-100" : "opacity-0"
                      )
                    }
                  )
                ]
              },
              S.id
            )) })
          ] })
        ] })
      }
    )
  ] });
  return !s && !i ? /* @__PURE__ */ t("div", { className: o("w-full", M), children: H }) : /* @__PURE__ */ h("div", { className: o("w-full", M), children: [
    s && /* @__PURE__ */ h(q, { className: "text-foreground leading-5 block", children: [
      s,
      f && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: s ? "mt-1" : "", children: H }),
    i && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: i })
  ] });
}
function Bt({
  control: e,
  name: r,
  label: n,
  required: s,
  callback: i = () => {
  },
  className: f,
  ...c
}) {
  const p = A({ control: e, name: r }), l = U(p.errors, `${r}.message`);
  return /* @__PURE__ */ t(
    O,
    {
      control: e,
      name: r,
      render: ({ field: u }) => /* @__PURE__ */ t(
        ut,
        {
          ...c,
          value: u.value,
          onChange: (a, m) => {
            u.onChange(a), i(a, m);
          },
          label: n,
          error: l,
          required: s,
          className: o("w-full", f)
        }
      )
    }
  );
}
function ze({
  className: e,
  classNames: r,
  showOutsideDays: n = !0,
  captionLayout: s = "label",
  buttonVariant: i = "ghost",
  formatters: f,
  components: c,
  ...p
}) {
  const l = Ie();
  return /* @__PURE__ */ t(
    et,
    {
      showOutsideDays: n,
      weekStartsOn: 1,
      className: o(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: s,
      formatters: {
        formatMonthDropdown: (u) => {
          const a = p.locale ? typeof p.locale == "string" ? p.locale : p.locale.code || "default" : "default";
          return u.toLocaleString(a, { month: "short" });
        },
        ...f
      },
      classNames: {
        root: o("w-fit", l.root),
        months: o("flex gap-4 flex-col md:flex-row relative", l.months),
        month: o("flex flex-col w-full gap-4", l.month),
        nav: o(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          l.nav
        ),
        button_previous: o(
          ge({ variant: i }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          l.button_previous
        ),
        button_next: o(
          ge({ variant: i }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          l.button_next
        ),
        month_caption: o(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          l.month_caption
        ),
        dropdowns: o(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          l.dropdowns
        ),
        dropdown_root: o(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          l.dropdown_root
        ),
        dropdown: o("absolute bg-popover inset-0 opacity-0", l.dropdown),
        caption_label: o(
          "select-none font-medium",
          s === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          l.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: o("flex", l.weekdays),
        weekday: o(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          l.weekday
        ),
        week: o("flex w-full mt-1", l.week),
        week_number_header: o("select-none w-(--cell-size)", l.week_number_header),
        week_number: o(
          "text-[0.8rem] select-none text-muted-foreground",
          l.week_number
        ),
        day: o(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          p.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          l.day
        ),
        range_start: o("rounded-l-md bg-accent", l.range_start),
        range_middle: o("rounded-none", l.range_middle),
        range_end: o("rounded-r-md bg-accent", l.range_end),
        today: o("bg-accent text-accent-foreground !rounded-full", l.today),
        outside: o(
          "text-muted-foreground aria-selected:text-muted-foreground",
          l.outside
        ),
        disabled: o("text-muted-foreground opacity-50", l.disabled),
        hidden: o("invisible", l.hidden),
        ...r
      },
      components: {
        ...c,
        CaptionLabel: ({ className: u, ...a }) => /* @__PURE__ */ t("div", { className: o(u), ...a }),
        Root: ({ className: u, rootRef: a, ...m }) => /* @__PURE__ */ t("div", { "data-slot": "calendar", ref: a, className: o(u), ...m }),
        Chevron: ({ className: u, orientation: a, ...m }) => a === "left" ? /* @__PURE__ */ t(Ue, { className: o("size-4", u), ...m }) : a === "right" ? /* @__PURE__ */ t(We, { className: o("size-4", u), ...m }) : /* @__PURE__ */ t(me, { className: o("size-4", u), ...m }),
        DayButton: mt,
        WeekNumber: ({ children: u, ...a }) => /* @__PURE__ */ t("td", { ...a, children: /* @__PURE__ */ t("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: u }) })
      },
      ...p
    }
  );
}
function mt({
  className: e,
  day: r,
  modifiers: n,
  ...s
}) {
  const i = Ie(), f = x.useRef(null);
  x.useEffect(() => {
    n.focused && f.current?.focus();
  }, [n.focused]);
  const c = n.today, p = n.selected && !n.range_start && !n.range_end && !n.range_middle, l = n.range_start, u = n.range_end, a = n.range_middle;
  return /* @__PURE__ */ h(
    B,
    {
      ref: f,
      variant: "ghost",
      size: "icon",
      "data-day": r.date.toLocaleDateString(),
      "data-selected-single": p,
      "data-range-start": l,
      "data-range-end": u,
      "data-range-middle": a,
      className: o(
        "data-[selected-single=true]:!bg-primary data-[selected-single=true]:!text-primary-foreground",
        "data-[range-middle=true]:!bg-accent data-[range-middle=true]:!text-accent-foreground",
        "data-[range-start=true]:!bg-primary data-[range-start=true]:!text-primary-foreground",
        "data-[range-end=true]:!bg-primary data-[range-end=true]:!text-primary-foreground",
        "dark:hover:text-accent-foreground",
        "flex aspect-square h-10 w-10 flex-col gap-0.5 leading-none font-normal text-sm p-1.5 group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 !rounded-full",
        "[&>span]:text-sm [&>span]:font-normal",
        i.day,
        e
      ),
      ...s,
      children: [
        /* @__PURE__ */ t("span", { children: s.children }),
        c && /* @__PURE__ */ t("div", { className: "h-1 w-1 rounded-full bg-current opacity-70" })
      ]
    }
  );
}
function ne({
  className: e,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ h(
    re.Root,
    {
      "data-slot": "scroll-area",
      className: o("relative", e),
      ...n,
      children: [
        /* @__PURE__ */ t(
          re.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: r
          }
        ),
        /* @__PURE__ */ t(ft, {}),
        /* @__PURE__ */ t(re.Corner, {})
      ]
    }
  );
}
function ft({
  className: e,
  orientation: r = "vertical",
  ...n
}) {
  return /* @__PURE__ */ t(
    re.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: r,
      className: o(
        "flex touch-none p-px transition-colors select-none",
        r === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        r === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...n,
      children: /* @__PURE__ */ t(
        re.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
function ht({
  value: e,
  onChange: r,
  locale: n,
  monthNames: s,
  disabled: i,
  className: f
}) {
  const [c, p] = x.useState(() => e ? e.getFullYear() : (/* @__PURE__ */ new Date()).getFullYear()), [l, u] = x.useState(() => e ? e.getMonth() : (/* @__PURE__ */ new Date()).getMonth()), a = x.useRef(null), m = x.useRef(null);
  x.useEffect(() => {
    if (e) {
      const d = e.getFullYear(), g = e.getMonth();
      (c !== d || l !== g) && (p(d), u(g));
    } else {
      const d = /* @__PURE__ */ new Date(), g = d.getFullYear(), y = d.getMonth();
      (c !== g || l !== y) && (p(g), u(y));
    }
  }, [e]), x.useEffect(() => {
    if (!a.current) return;
    const d = setTimeout(() => {
      const g = a.current?.querySelector(
        `[data-month="${l}"]`
      );
      if (g && a.current) {
        const y = a.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (y) {
          const k = g.offsetTop;
          y.scrollTo({ top: k, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(d);
  }, [l]), x.useEffect(() => {
    if (!m.current) return;
    const d = setTimeout(() => {
      const g = m.current?.querySelector(
        `[data-year="${c}"]`
      );
      if (g && m.current) {
        const y = m.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (y) {
          const k = g.offsetTop;
          y.scrollTo({ top: k, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(d);
  }, [c]);
  const v = x.useCallback(
    (d) => {
      u(d);
      const g = new Date(c, d, 1);
      r(J(g));
    },
    [c, r]
  ), N = x.useCallback(
    (d) => {
      p(d);
      const g = new Date(d, l, 1);
      r(J(g));
    },
    [l, r]
  ), C = x.useMemo(() => {
    if (s && s.length === 12)
      return s;
    const d = typeof n == "string" ? n : n?.code || "en-US", g = new Intl.DateTimeFormat(d, { month: "long" });
    return Array.from({ length: 12 }, (y, k) => {
      const L = new Date(2024, k, 1);
      return g.format(L);
    });
  }, [n, s]), M = x.useMemo(
    () => Array.from({ length: 100 }, (d, g) => (/* @__PURE__ */ new Date()).getFullYear() - 50 + g),
    []
  ), T = x.useMemo(() => e ? `${C[l]} ${c}` : `${C[(/* @__PURE__ */ new Date()).getMonth()]} ${(/* @__PURE__ */ new Date()).getFullYear()}`, [e, C, l, c]);
  return /* @__PURE__ */ h("div", { className: o("flex flex-col h-full", f), children: [
    /* @__PURE__ */ t("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ t("div", { className: "font-medium text-lg", children: T }) }),
    /* @__PURE__ */ h("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ t(ne, { className: "w-30 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: a, className: "px-2", children: C.map((d, g) => {
        const y = l === g, k = i ? i(new Date(c, g, 1)) : !1;
        return /* @__PURE__ */ t(
          "div",
          {
            "data-month": g,
            onClick: () => !k && v(g),
            className: o(
              "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
              y ? "bg-secondary" : "hover:bg-accent",
              k && "opacity-50 cursor-not-allowed"
            ),
            children: d
          },
          g
        );
      }) }) }),
      /* @__PURE__ */ t(ne, { className: "flex-1 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: m, className: "px-2", children: M.map((d) => /* @__PURE__ */ t(
        "div",
        {
          "data-year": d,
          onClick: () => N(d),
          className: o(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            c === d ? "bg-secondary" : "hover:bg-accent"
          ),
          children: d
        },
        d
      )) }) })
    ] })
  ] });
}
function _e({ value: e, onChange: r, showSeconds: n = !0, className: s }) {
  const i = x.useRef(null), f = x.useRef(null), c = x.useRef(null), p = parseInt(e.hour, 10) || 0, l = parseInt(e.minute, 10) || 0, u = parseInt(e.second, 10) || 0, a = Array.from({ length: 24 }, (d, g) => g), m = Array.from({ length: 60 }, (d, g) => g), v = Array.from({ length: 60 }, (d, g) => g);
  x.useEffect(() => {
    const d = setTimeout(() => {
      if (i.current) {
        const g = i.current.querySelector(
          `[data-hour="${p}"]`
        );
        if (g) {
          const y = i.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (y) {
            const k = g.offsetTop;
            y.scrollTo({ top: k, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(d);
  }, [p]), x.useEffect(() => {
    const d = setTimeout(() => {
      if (f.current) {
        const g = f.current.querySelector(
          `[data-minute="${l}"]`
        );
        if (g) {
          const y = f.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (y) {
            const k = g.offsetTop;
            y.scrollTo({ top: k, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(d);
  }, [l]), x.useEffect(() => {
    if (!n) return;
    const d = setTimeout(() => {
      if (c.current) {
        const g = c.current.querySelector(
          `[data-second="${u}"]`
        );
        if (g) {
          const y = c.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (y) {
            const k = g.offsetTop;
            y.scrollTo({ top: k, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(d);
  }, [u, n]);
  const N = (d) => {
    r({
      ...e,
      hour: d.toString().padStart(2, "0")
    });
  }, C = (d) => {
    r({
      ...e,
      minute: d.toString().padStart(2, "0")
    });
  }, M = (d) => {
    r({
      ...e,
      second: d.toString().padStart(2, "0")
    });
  }, T = `${e.hour}:${e.minute}${n ? `:${e.second}` : ""}`;
  return /* @__PURE__ */ h("div", { className: o("flex flex-col h-full border-l", s), children: [
    /* @__PURE__ */ t("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ t("div", { className: "font-medium text-lg", children: T }) }),
    /* @__PURE__ */ h("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ t(ne, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: i, className: "px-2", children: a.map((d) => /* @__PURE__ */ t(
        "div",
        {
          "data-hour": d,
          onClick: () => N(d),
          className: o(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            p === d ? "bg-secondary" : "hover:bg-accent"
          ),
          children: d.toString().padStart(2, "0")
        },
        d
      )) }) }),
      /* @__PURE__ */ t(ne, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:overflow-hidden", children: /* @__PURE__ */ t("div", { ref: f, className: "px-2", children: m.map((d) => /* @__PURE__ */ t(
        "div",
        {
          "data-minute": d,
          onClick: () => C(d),
          className: o(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            l === d ? "bg-secondary" : "hover:bg-accent"
          ),
          children: d.toString().padStart(2, "0")
        },
        d
      )) }) }),
      n && /* @__PURE__ */ t(ne, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: c, className: "px-2", children: v.map((d) => /* @__PURE__ */ t(
        "div",
        {
          "data-second": d,
          onClick: () => M(d),
          className: o(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            u === d ? "bg-secondary" : "hover:bg-accent"
          ),
          children: d.toString().padStart(2, "0")
        },
        d
      )) }) })
    ] })
  ] });
}
function pt({
  value: e,
  onChange: r,
  placeholder: n = "Pick a date",
  dateFormat: s = "dd/MM/yyyy",
  showTime: i = !1,
  timeOnly: f = !1,
  mode: c = "single",
  label: p,
  error: l,
  required: u,
  disabled: a = !1,
  disabledPast: m = !1,
  disabledFuture: v = !1,
  onDisabled: N,
  size: C = "md",
  className: M,
  triggerClassName: T,
  popoverClassName: d,
  locale: g,
  cancelText: y,
  applyText: k,
  monthNames: L,
  ...W
}) {
  const [E, H] = x.useState(!1), [S, I] = x.useState(e), [K, Y] = x.useState(() => e || /* @__PURE__ */ new Date()), [j, b] = x.useState(() => e ? {
    hour: e.getHours().toString().padStart(2, "0"),
    minute: e.getMinutes().toString().padStart(2, "0"),
    second: e.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }), _ = x.useRef(e), F = x.useRef(e || /* @__PURE__ */ new Date()), $ = () => e ? {
    hour: e.getHours().toString().padStart(2, "0"),
    minute: e.getMinutes().toString().padStart(2, "0"),
    second: e.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }, R = x.useRef($());
  x.useEffect(() => {
    E && (_.current = e, F.current = e || /* @__PURE__ */ new Date(), R.current = e ? {
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }, f ? b(e ? {
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }) : c === "month" ? I(e ? J(e) : J(/* @__PURE__ */ new Date())) : (I(e), e ? (Y(e), i && b({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    })) : (Y(/* @__PURE__ */ new Date()), i && b({ hour: "00", minute: "00", second: "00" }))));
  }, [E, e, i, f, c]), x.useEffect(() => {
    !E && !f ? (I(e), e && (Y(e), i && b({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    }))) : !E && f && e && b({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    });
  }, [e, i, f, E]);
  const w = () => {
    if (f) {
      const G = ve(
        we(Ne(e || /* @__PURE__ */ new Date(), parseInt(j.hour, 10)), parseInt(j.minute, 10)),
        parseInt(j.second, 10)
      );
      r?.(G);
    } else if (c === "month")
      r?.(S ? J(S) : void 0);
    else if (S) {
      let D = S;
      i && (D = Ne(D, parseInt(j.hour, 10)), D = we(D, parseInt(j.minute, 10)), D = ve(D, parseInt(j.second, 10))), r?.(D);
    } else
      r?.(void 0);
    H(!1);
  }, V = () => {
    I(_.current), Y(F.current), i && b(R.current), H(!1);
  }, te = x.useMemo(() => {
    if (!e) return n;
    const D = g && typeof g != "string" ? { locale: g } : void 0;
    if (f)
      return /[Hhms]/.test(s) ? X(e, s, D) : X(e, "HH:mm:ss", D);
    if (c === "month") {
      if (g) {
        const G = typeof g == "string" ? g : g?.code || "en-US";
        return new Intl.DateTimeFormat(G, { month: "2-digit", year: "numeric" }).format(e);
      }
      return X(e, "MM/yyyy", D);
    }
    return i ? /[Hhms]/.test(s) ? X(e, s, D) : X(e, `${s} HH:mm:ss`, D) : X(e, s, D);
  }, [e, s, i, f, c, n, g]), Q = x.useCallback(
    (D) => {
      if (a) return !0;
      const G = /* @__PURE__ */ new Date();
      G.setHours(0, 0, 0, 0);
      const oe = new Date(D);
      return oe.setHours(0, 0, 0, 0), m && oe < G || v && oe > G ? !0 : N ? N(D) : !1;
    },
    [a, m, v, N]
  ), z = x.useMemo(
    () => ({
      ...W,
      mode: "single",
      selected: S,
      onSelect: I,
      defaultMonth: K,
      month: K,
      onMonthChange: Y,
      captionLayout: "dropdown",
      disabled: Q,
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: g
    }),
    [W, S, K, Q, g]
  ), Z = /* @__PURE__ */ h(fe, { open: E, onOpenChange: H, children: [
    /* @__PURE__ */ t(he, { asChild: !0, children: /* @__PURE__ */ h(
      B,
      {
        variant: "outline",
        size: C,
        disabled: a,
        className: o(
          "group w-full justify-between",
          !e && "text-muted-foreground",
          l && "border-destructive",
          T
        ),
        children: [
          /* @__PURE__ */ t("span", { children: te }),
          /* @__PURE__ */ t(Re, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      pe,
      {
        className: o("flex w-auto flex-col gap-2 p-0", d),
        align: "start",
        children: /* @__PURE__ */ h("div", { className: "flex flex-col gap-2 pb-2", children: [
          f ? /* @__PURE__ */ t("div", { className: "flex h-[350px]", children: /* @__PURE__ */ t(
            _e,
            {
              value: j,
              onChange: b,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : c === "month" ? /* @__PURE__ */ t("div", { className: "flex h-[350px]", children: /* @__PURE__ */ t(
            ht,
            {
              value: S,
              onChange: I,
              locale: g,
              monthNames: L,
              disabled: Q,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : /* @__PURE__ */ h("div", { className: o("flex h-[350px]", i && "overflow-hidden"), children: [
            /* @__PURE__ */ t(ze, { initialFocus: !0, ...z }),
            i && /* @__PURE__ */ t(
              _e,
              {
                value: j,
                onChange: b,
                className: "min-h-0 h-full shrink-0"
              }
            )
          ] }),
          /* @__PURE__ */ t(Fe, { className: "shrink-0" }),
          /* @__PURE__ */ h("div", { className: "flex justify-end gap-2 px-2 shrink-0", children: [
            /* @__PURE__ */ t(B, { variant: "secondary", size: "sm", onClick: V, children: y || "Cancel" }),
            /* @__PURE__ */ t(B, { size: "sm", onClick: w, children: k || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return p || l ? /* @__PURE__ */ h("div", { className: o("w-full", M), children: [
    p && /* @__PURE__ */ h(q, { className: "text-foreground leading-5 block", children: [
      p,
      u && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: p ? "mt-1" : "", children: Z }),
    l && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: l })
  ] }) : /* @__PURE__ */ t("div", { className: o("w-full", M), children: Z });
}
function Gt({
  control: e,
  name: r,
  label: n,
  required: s,
  error: i,
  className: f,
  callback: c = () => {
  },
  ...p
}) {
  return /* @__PURE__ */ t(
    O,
    {
      control: e,
      name: r,
      render: ({ field: l, fieldState: { error: u } }) => {
        const a = i || u?.message;
        return /* @__PURE__ */ t(
          pt,
          {
            ...p,
            value: l.value,
            onChange: (m) => {
              l.onChange(m), c(m);
            },
            label: n,
            error: a,
            required: s,
            className: o("w-full", f)
          }
        );
      }
    }
  );
}
const gt = () => {
  const e = /* @__PURE__ */ new Date();
  return [
    {
      label: "Hôm nay",
      range: {
        from: Qe(e),
        to: Ke(e)
      }
    },
    {
      label: "Tuần trước",
      range: {
        from: Je(Se(e, 1), { weekStartsOn: 1 }),
        to: Ze(Se(e, 1), { weekStartsOn: 1 })
      }
    },
    {
      label: "Tháng trước",
      range: {
        from: J(ae(e, 1)),
        to: ye(ae(e, 1))
      }
    },
    {
      label: "3 tháng trước",
      range: {
        from: J(ae(e, 3)),
        to: ye(ae(e, 3))
      }
    }
  ];
};
function xt({
  value: e,
  onChange: r,
  placeholder: n = { from: "From date", to: "To date" },
  dateFormat: s = "dd/MM/yyyy",
  presets: i,
  showPresets: f,
  label: c,
  error: p,
  required: l,
  disabled: u = !1,
  disabledPast: a = !1,
  disabledFuture: m = !1,
  onDisabled: v,
  size: N = "md",
  className: C,
  triggerClassName: M,
  popoverClassName: T,
  locale: d,
  cancelText: g,
  applyText: y,
  ...k
}) {
  const [L, W] = x.useState(!1), [E, H] = x.useState(e), [S, I] = x.useState(() => e?.to || e?.from || /* @__PURE__ */ new Date()), K = x.useRef(e), Y = x.useRef(e?.to || e?.from || /* @__PURE__ */ new Date());
  x.useEffect(() => {
    L && (K.current = e, Y.current = e?.to || e?.from || /* @__PURE__ */ new Date(), H(e), e?.to ? I(e.to) : e?.from ? I(e.from) : I(/* @__PURE__ */ new Date()));
  }, [L, e]), x.useEffect(() => {
    H(e), e?.to ? I(e.to) : e?.from && I(e.from);
  }, [e]);
  const j = x.useCallback(
    (z) => {
      if (u) return !0;
      const Z = /* @__PURE__ */ new Date();
      Z.setHours(0, 0, 0, 0);
      const D = new Date(z);
      return D.setHours(0, 0, 0, 0), a && D < Z || m && D > Z ? !0 : v ? v(z) : !1;
    },
    [u, a, m, v]
  ), b = x.useMemo(() => gt(), []), _ = i ?? b, F = f !== void 0 ? f : _.length > 0, $ = () => {
    r?.(E), W(!1);
  }, R = () => {
    H(K.current), I(Y.current), W(!1);
  }, w = (z) => {
    H(z.range), z.range.to ? I(z.range.to) : z.range.from && I(z.range.from);
  }, V = x.useMemo(() => {
    if (!e?.from) return n.from || "Pick a date";
    const z = d && typeof d != "string" ? { locale: d } : void 0;
    return e.from && e.to ? `${X(e.from, s, z)} - ${X(e.to, s, z)}` : X(e.from, s, z);
  }, [e, s, n, d]), te = x.useMemo(
    () => ({
      ...k,
      mode: "range",
      selected: E,
      onSelect: H,
      defaultMonth: S,
      month: S,
      onMonthChange: I,
      disabled: j,
      captionLayout: "dropdown",
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: d
    }),
    [k, E, S, j, d]
  ), Q = /* @__PURE__ */ h(fe, { open: L, onOpenChange: W, children: [
    /* @__PURE__ */ t(he, { asChild: !0, children: /* @__PURE__ */ h(
      B,
      {
        variant: "outline",
        size: N,
        disabled: u,
        className: o(
          "group w-full justify-between",
          !e?.from && "text-muted-foreground",
          p && "border-destructive",
          M
        ),
        children: [
          /* @__PURE__ */ t("span", { children: V }),
          /* @__PURE__ */ t(Re, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      pe,
      {
        className: o("flex w-auto flex-col gap-2 p-0 pb-2", T),
        align: "start",
        children: /* @__PURE__ */ h("div", { className: "flex flex-col gap-2 pb-2", children: [
          /* @__PURE__ */ h("div", { className: "flex", children: [
            F && /* @__PURE__ */ t("div", { className: "border-r p-2 w-fit", children: /* @__PURE__ */ t("div", { className: "space-y-1", children: _.map((z, Z) => /* @__PURE__ */ t(
              B,
              {
                variant: "ghost",
                size: "sm",
                className: "block text-left font-normal",
                onClick: () => w(z),
                children: z.label
              },
              Z
            )) }) }),
            /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(ze, { initialFocus: !0, ...te }) })
          ] }),
          /* @__PURE__ */ t(Fe, {}),
          /* @__PURE__ */ h("div", { className: "flex justify-end gap-2 px-2", children: [
            /* @__PURE__ */ t(B, { variant: "secondary", onClick: R, children: g || "Cancel" }),
            /* @__PURE__ */ t(B, { onClick: $, children: y || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return c || p ? /* @__PURE__ */ h("div", { className: o("w-full", C), children: [
    c && /* @__PURE__ */ h(q, { className: "text-foreground leading-5 block", children: [
      c,
      l && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: c ? "mt-1" : "", children: Q }),
    p && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: p })
  ] }) : /* @__PURE__ */ t("div", { className: o("w-full", C), children: Q });
}
function Xt({
  control: e,
  name: r,
  label: n,
  required: s,
  error: i,
  className: f,
  callback: c = () => {
  },
  ...p
}) {
  return /* @__PURE__ */ t(
    O,
    {
      control: e,
      name: r,
      render: ({ field: l, fieldState: { error: u } }) => {
        const a = i || u?.message;
        return /* @__PURE__ */ t(
          xt,
          {
            ...p,
            value: l.value,
            onChange: (m) => {
              l.onChange(m), c(m);
            },
            label: n,
            error: a,
            required: s,
            className: o("w-full", f)
          }
        );
      }
    }
  );
}
const bt = {
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
}, vt = [
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
function wt({
  className: e,
  label: r,
  error: n,
  required: s,
  id: i,
  size: f = "md",
  modules: c,
  formats: p,
  placeholder: l,
  value: u,
  onChange: a,
  readOnly: m,
  ...v
}) {
  const N = x.useId(), C = i || N, M = r || n, g = /* @__PURE__ */ t("div", { className: "relative w-full", children: /* @__PURE__ */ t(
    tt,
    {
      id: C,
      "data-slot": "editor",
      "data-size": f,
      "aria-invalid": !!n,
      theme: "snow",
      modules: c || bt,
      formats: p || vt,
      placeholder: l,
      value: u,
      onChange: a,
      readOnly: m,
      className: o(
        "editor-wrapper",
        "[&_.ql-container]:border-input [&_.ql-container]:dark:bg-input/30 [&_.ql-container]:rounded-b-md [&_.ql-container]:border [&_.ql-container]:shadow-xs",
        "[&_.ql-toolbar]:border-input [&_.ql-toolbar]:dark:bg-input/30 [&_.ql-toolbar]:rounded-t-md [&_.ql-toolbar]:border [&_.ql-toolbar]:border-b-0 [&_.ql-toolbar]:bg-transparent",
        "[&_.ql-editor]:min-h-[200px] [&_.ql-editor]:text-foreground",
        "[&_.ql-editor.ql-blank::before]:text-muted-foreground [&_.ql-editor.ql-blank::before]:italic",
        "[&_.ql-stroke]:stroke-foreground [&_.ql-fill]:fill-foreground",
        "[&_.ql-picker-label]:text-foreground [&_.ql-picker-options]:bg-popover [&_.ql-picker-options]:text-popover-foreground [&_.ql-picker-options]:border-border",
        "[&_.ql-snow.ql-toolbar_button:hover]:bg-accent [&_.ql-snow.ql-toolbar_button.ql-active]:bg-accent",
        "[&_.ql-snow.ql-toolbar]:dark:bg-input/30",
        n && "[&_.ql-container]:border-destructive [&_.ql-container]:focus-within:border-destructive [&_.ql-container]:focus-within:ring-destructive [&_.ql-container]:focus-within:ring-[3px] [&_.ql-toolbar]:border-destructive",
        !n && "[&_.ql-container]:focus-within:border-ring [&_.ql-container]:focus-within:ring-ring/50 [&_.ql-container]:focus-within:ring-[3px]",
        m && "[&_.ql-toolbar]:pointer-events-none [&_.ql-toolbar]:opacity-50 [&_.ql-toolbar_button]:cursor-not-allowed",
        e
      ),
      ...v
    }
  ) });
  return M ? /* @__PURE__ */ h("div", { className: "flex flex-col gap-1", children: [
    r && /* @__PURE__ */ h(q, { htmlFor: C, children: [
      r,
      s && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    g,
    n && /* @__PURE__ */ t("div", { className: "text-destructive text-sm", role: "alert", children: n })
  ] }) : g;
}
function Kt({
  control: e,
  name: r,
  label: n,
  className: s,
  wrapperClassName: i,
  required: f = !1,
  callback: c = () => {
  },
  ...p
}) {
  const l = A({ control: e, name: r }), u = U(l.errors, `${r}.message`);
  return /* @__PURE__ */ t("div", { className: o("w-full", i), children: /* @__PURE__ */ t(
    O,
    {
      control: e,
      name: r,
      render: ({ field: a }) => /* @__PURE__ */ t(
        wt,
        {
          ...p,
          value: a.value || "",
          onChange: (m) => {
            a.onChange(m), c(m);
          },
          label: n,
          error: u,
          required: f,
          className: s
        }
      )
    }
  ) });
}
function Qt({
  name: e,
  control: r
}) {
  const n = A({
    control: r,
    name: e
  }), s = U(n.errors, `${e}.message`);
  return /* @__PURE__ */ t(
    "p",
    {
      className: o(
        "text-xs text-destructive hidden",
        Le(s) && "input-error block mt-1.5"
      ),
      children: s
    }
  );
}
function Nt({
  className: e,
  value: r,
  ...n
}) {
  return /* @__PURE__ */ t(
    ke.Root,
    {
      "data-slot": "progress",
      className: o("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", e),
      ...n,
      children: /* @__PURE__ */ t(
        ke.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (r || 0)}%)` }
        }
      )
    }
  );
}
function yt({
  value: e = [],
  onChange: r,
  accept: n,
  multiple: s = !1,
  maxSize: i,
  maxFiles: f,
  disabled: c = !1,
  onError: p,
  showPreview: l = !0,
  showProgress: u = !1,
  className: a,
  dropzoneClassName: m,
  placeholder: v,
  uploadText: N
}) {
  const [C, M] = x.useState(!1), T = (b) => b && typeof b == "object" && "name" in b && "size" in b && "type" in b && "lastModified" in b && !("file" in b), [d, g] = x.useState(() => !e || e.length === 0 ? [] : e.map((b) => T(b) ? {
    file: b,
    preview: b.type.startsWith("image/") ? URL.createObjectURL(b) : void 0,
    status: "success"
  } : b)), y = x.useRef(null), k = x.useRef(d);
  x.useEffect(() => {
    k.current = d;
  }, [d]), x.useEffect(() => () => {
    k.current.forEach((b) => {
      b.preview && URL.revokeObjectURL(b.preview);
    });
  }, []), x.useEffect(() => {
    if (!e || e.length === 0) {
      k.current.forEach((V) => {
        V.preview && URL.revokeObjectURL(V.preview);
      }), k.current.length > 0 && g([]);
      return;
    }
    const b = e.map((w) => T(w) ? w : w.file), _ = k.current.map((w) => w.file), F = b.map((w) => `${w.name}-${w.size}`).join(","), $ = _.map((w) => `${w.name}-${w.size}`).join(",");
    if (F === $ && b.length === _.length)
      return;
    k.current.forEach((w) => {
      w.preview && URL.revokeObjectURL(w.preview);
    });
    const R = e.map((w) => T(w) ? {
      file: w,
      preview: w.type.startsWith("image/") ? URL.createObjectURL(w) : void 0,
      status: "success"
    } : w);
    g(R);
  }, [e]);
  const L = (b) => {
    if (i && b.size > i)
      return `File size exceeds ${ce(i)}`;
    if (n) {
      const _ = n.split(",").map((w) => w.trim()), F = b.type, $ = b.name.toLowerCase();
      if (!(_.some((w) => w.startsWith(".") ? $.endsWith(w.toLowerCase()) : w.endsWith("/*") ? F.startsWith(w.slice(0, -1)) : F === w || F.match(w.replace("*", ".*"))) || _.some((w) => $.endsWith(w.toLowerCase()))))
        return `File type not allowed. Accepted types: ${n}`;
    }
    return null;
  }, W = (b) => {
    const _ = [], F = [];
    if (f && d.length + b.length > f) {
      const R = `Maximum ${f} file(s) allowed`;
      _.push(R), p?.(R);
      return;
    }
    if (b.forEach((R) => {
      const w = L(R);
      if (w)
        _.push(`${R.name}: ${w}`), p?.(w);
      else {
        const V = {
          file: R,
          preview: R.type.startsWith("image/") ? URL.createObjectURL(R) : void 0,
          status: "success"
        };
        F.push(V);
      }
    }), _.length > 0 && F.length === 0)
      return;
    const $ = s ? [...d, ...F] : F;
    g($), r?.($.map((R) => R.file));
  }, E = (b) => {
    if (b.preventDefault(), b.stopPropagation(), M(!1), c) return;
    const _ = Array.from(b.dataTransfer.files);
    _.length > 0 && W(_);
  }, H = (b) => {
    b.preventDefault(), b.stopPropagation(), c || M(!0);
  }, S = (b) => {
    b.preventDefault(), b.stopPropagation(), M(!1);
  }, I = (b) => {
    const _ = Array.from(b.target.files || []);
    _.length > 0 && W(_), y.current && (y.current.value = "");
  }, K = (b) => {
    const _ = d[b];
    _.preview && URL.revokeObjectURL(_.preview);
    const F = d.filter(($, R) => R !== b);
    g(F), r?.(F.map(($) => $.file));
  }, Y = () => {
    !c && y.current && y.current.click();
  }, j = (b) => b.type.startsWith("image/") ? /* @__PURE__ */ t(Be, { className: "h-8 w-8 text-muted-foreground" }) : /* @__PURE__ */ t(Ge, { className: "h-8 w-8 text-muted-foreground" });
  return /* @__PURE__ */ h("div", { className: o("w-full space-y-4", a), "data-slot": "file-upload", children: [
    /* @__PURE__ */ h(
      "div",
      {
        onClick: Y,
        onDrop: E,
        onDragOver: H,
        onDragLeave: S,
        className: o(
          "relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
          C && !c && "border-primary bg-primary/5",
          !C && !c && "border-input hover:border-primary/50 hover:bg-accent/50",
          c && "cursor-not-allowed opacity-50",
          m
        ),
        "data-slot": "file-upload-dropzone",
        children: [
          /* @__PURE__ */ t(
            "input",
            {
              ref: y,
              type: "file",
              accept: n,
              multiple: s,
              disabled: c,
              onChange: I,
              className: "hidden",
              "data-slot": "file-upload-input"
            }
          ),
          /* @__PURE__ */ h("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
            /* @__PURE__ */ t(De, { className: o("h-8 w-8 mb-2", c ? "text-muted-foreground" : "text-primary") }),
            /* @__PURE__ */ h("p", { className: "mb-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ t("span", { className: "font-semibold", children: N || "Click to upload" }),
              !c && " or drag and drop"
            ] }),
            /* @__PURE__ */ h("p", { className: "text-xs text-muted-foreground", children: [
              v || n || "Any file",
              s && " (multiple files allowed)",
              i && ` (max ${ce(i)})`
            ] })
          ] })
        ]
      }
    ),
    l && d.length > 0 && /* @__PURE__ */ t("div", { className: "space-y-2", "data-slot": "file-upload-list", children: d.map((b, _) => {
      const { file: F, preview: $, progress: R, status: w, error: V } = b, te = F.type.startsWith("image/");
      return /* @__PURE__ */ h(
        "div",
        {
          className: "flex items-center gap-3 p-3 border rounded-lg bg-card",
          "data-slot": "file-upload-item",
          children: [
            /* @__PURE__ */ t("div", { className: "flex-shrink-0", children: te && $ ? /* @__PURE__ */ t(
              "img",
              {
                src: $,
                alt: F.name,
                className: "h-12 w-12 object-cover rounded",
                "data-slot": "file-upload-preview"
              }
            ) : /* @__PURE__ */ t("div", { className: "h-12 w-12 flex items-center justify-center bg-muted rounded", children: j(F) }) }),
            /* @__PURE__ */ h("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ t("p", { className: "text-sm font-medium truncate", "data-slot": "file-upload-name", children: F.name }),
                w === "success" && /* @__PURE__ */ t(Ve, { className: "h-4 w-4 text-green-500 flex-shrink-0" }),
                w === "error" && /* @__PURE__ */ t(Ye, { className: "h-4 w-4 text-destructive flex-shrink-0" })
              ] }),
              /* @__PURE__ */ t("p", { className: "text-xs text-muted-foreground", "data-slot": "file-upload-size", children: ce(F.size) }),
              V && /* @__PURE__ */ t("p", { className: "text-xs text-destructive mt-1", "data-slot": "file-upload-error", children: V }),
              u && R !== void 0 && /* @__PURE__ */ t("div", { className: "mt-2", "data-slot": "file-upload-progress", children: /* @__PURE__ */ t(Nt, { value: R, className: "h-1" }) })
            ] }),
            !c && /* @__PURE__ */ h(
              B,
              {
                type: "button",
                variant: "ghost",
                size: "icon",
                className: "h-8 w-8 flex-shrink-0",
                onClick: (Q) => {
                  Q.stopPropagation(), K(_);
                },
                "data-slot": "file-upload-remove",
                children: [
                  /* @__PURE__ */ t(Me, { className: "h-4 w-4" }),
                  /* @__PURE__ */ t("span", { className: "sr-only", children: "Remove file" })
                ]
              }
            )
          ]
        },
        `${F.name}-${_}`
      );
    }) })
  ] });
}
function Zt({
  control: e,
  name: r,
  label: n,
  error: s,
  required: i = !1,
  wrapperClassName: f,
  ...c
}) {
  const p = A({ control: e, name: r }), l = s || U(p.errors, `${r}.message`);
  return /* @__PURE__ */ h("div", { className: o("w-full", f), "data-slot": "rhf-file-upload", children: [
    n && /* @__PURE__ */ h(q, { htmlFor: r, className: "mb-2 block", children: [
      n,
      i && /* @__PURE__ */ t("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ t(
      O,
      {
        control: e,
        name: r,
        render: ({ field: { onChange: u, value: a, ...m } }) => {
          const v = a ? (Array.isArray(a) ? a : [a]).filter(Boolean) : [];
          return /* @__PURE__ */ t(
            yt,
            {
              ...c,
              ...m,
              value: v,
              onChange: (N) => {
                c.multiple ? u(N) : u(N.length > 0 ? N[0] : void 0);
              },
              onError: (N) => {
                console.error("File upload error:", N);
              },
              disabled: c.disabled
            }
          );
        }
      }
    ),
    l && /* @__PURE__ */ t("p", { className: "text-sm text-destructive mt-1", "data-slot": "rhf-file-upload-error", children: l })
  ] });
}
const St = (e, r) => r === "text" || !e ? e : r === "integer" || r === "currency" ? e.replace(/\D/g, "") : r === "decimal" ? e.replace(/[^\d.,]/g, "").replace(/\./g, ",") : e;
function Jt({
  control: e,
  name: r,
  label: n,
  format: s = "text",
  required: i,
  wrapperClassName: f,
  callback: c = () => {
  },
  ...p
}) {
  const l = A({ control: e, name: r }), u = U(l.errors, `${r}.message`);
  return /* @__PURE__ */ t(
    O,
    {
      control: e,
      name: r,
      render: ({ field: a }) => /* @__PURE__ */ t("div", { className: o("w-full", f), children: /* @__PURE__ */ t(
        se,
        {
          ...p,
          ...a,
          type: "text",
          label: n,
          error: u,
          required: i,
          value: a.value || "",
          onChange: (m) => {
            const v = St(m.target.value, s);
            a.onChange(v), c(v);
          }
        }
      ) })
    }
  );
}
function er({
  control: e,
  register: r,
  name: n,
  label: s,
  placeholder: i,
  className: f,
  wrapperClassName: c,
  required: p = !1,
  ...l
}) {
  const u = A({ control: e, name: n }), a = U(u.errors, `${n}.message`);
  return /* @__PURE__ */ t("div", { className: o("w-full", c), children: /* @__PURE__ */ t(
    se,
    {
      ...l,
      ...r(n),
      label: s,
      error: a,
      required: p,
      className: f,
      placeholder: i
    }
  ) });
}
function kt({ ...e }) {
  return /* @__PURE__ */ t(P.Root, { "data-slot": "select", ...e });
}
function Ct({ ...e }) {
  return /* @__PURE__ */ t(P.Value, { "data-slot": "select-value", ...e });
}
function _t({
  className: e,
  size: r = "md",
  children: n,
  label: s,
  error: i,
  required: f,
  id: c,
  ...p
}) {
  const l = s || i, u = de[r ?? "md"], a = /* @__PURE__ */ h(
    P.Trigger,
    {
      id: c,
      "data-slot": "select-trigger",
      "data-size": r,
      "aria-invalid": !!i,
      className: o(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-transparent whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        u.height,
        u.text,
        u.padding,
        {
          "[&_svg:not([class*='size-'])]:size-3": r === "xxs",
          "[&_svg:not([class*='size-'])]:size-3.5": r === "xs",
          "[&_svg:not([class*='size-'])]:size-4": r === "sm" || r === "md",
          "[&_svg:not([class*='size-'])]:size-5": r === "lg" || r === "xl",
          "[&_svg:not([class*='size-'])]:size-6": r === "xxl"
        },
        i ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...p,
      children: [
        n,
        /* @__PURE__ */ t(P.Icon, { asChild: !0, children: /* @__PURE__ */ t(me, { className: o("opacity-50", u.icon) }) })
      ]
    }
  );
  return l ? /* @__PURE__ */ h("div", { className: "flex flex-col gap-1", children: [
    s && /* @__PURE__ */ h(q, { htmlFor: c, children: [
      s,
      f && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    a,
    i && /* @__PURE__ */ t("div", { className: "text-sm text-destructive", role: "alert", children: i })
  ] }) : a;
}
function Ft({
  className: e,
  children: r,
  position: n = "item-aligned",
  align: s = "center",
  ...i
}) {
  return /* @__PURE__ */ t(P.Portal, { children: /* @__PURE__ */ h(
    P.Content,
    {
      "data-slot": "select-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      align: s,
      ...i,
      children: [
        /* @__PURE__ */ t(Dt, {}),
        /* @__PURE__ */ t(
          P.Viewport,
          {
            className: o(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: r
          }
        ),
        /* @__PURE__ */ t(Mt, {})
      ]
    }
  ) });
}
function Rt({
  className: e,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ h(
    P.Item,
    {
      "data-slot": "select-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ t(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ t(P.ItemIndicator, { children: /* @__PURE__ */ t(ue, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ t(P.ItemText, { children: r })
      ]
    }
  );
}
function Dt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    P.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: o("flex justify-center items-center py-1 cursor-default", e),
      ...r,
      children: /* @__PURE__ */ t(Xe, { className: "size-4" })
    }
  );
}
function Mt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    P.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: o("flex justify-center items-center py-1 cursor-default", e),
      ...r,
      children: /* @__PURE__ */ t(me, { className: "size-4" })
    }
  );
}
function tr({
  control: e,
  name: r,
  options: n,
  label: s,
  error: i,
  required: f = !1,
  placeholder: c = "Select options...",
  wrapperClassName: p
}) {
  const l = A({ control: e, name: r }), u = i || U(l.errors, `${r}.message`);
  return /* @__PURE__ */ h("div", { className: o("w-full", p), children: [
    s && /* @__PURE__ */ h(q, { htmlFor: r, className: "mb-2 block", children: [
      s,
      f && /* @__PURE__ */ t("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ t(
      O,
      {
        control: e,
        name: r,
        render: ({ field: a }) => {
          const m = Array.isArray(a.value) ? a.value : [];
          return /* @__PURE__ */ h("div", { className: "space-y-2", children: [
            /* @__PURE__ */ h(
              kt,
              {
                value: "",
                onValueChange: (v) => {
                  m.includes(v) || a.onChange([...m, v]);
                },
                children: [
                  /* @__PURE__ */ t(_t, { className: o(u && "border-destructive"), children: /* @__PURE__ */ t(Ct, { placeholder: c }) }),
                  /* @__PURE__ */ t(Ft, { children: n.map((v) => /* @__PURE__ */ t(
                    Rt,
                    {
                      value: v.value,
                      disabled: v.disabled || m.includes(v.value),
                      children: v.label
                    },
                    v.value
                  )) })
                ]
              }
            ),
            m.length > 0 && /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-2", children: m.map((v) => {
              const N = n.find((C) => C.value === v);
              return /* @__PURE__ */ h($e, { variant: "secondary", className: "gap-1", children: [
                N?.label || v,
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      a.onChange(m.filter((C) => C !== v));
                    },
                    className: "ml-1 hover:bg-destructive/20 rounded-full p-0.5",
                    children: /* @__PURE__ */ t(Me, { className: "h-3 w-3" })
                  }
                )
              ] }, v);
            }) })
          ] });
        }
      }
    ),
    u && /* @__PURE__ */ t("p", { className: "text-sm text-destructive mt-1", children: u })
  ] });
}
function rr({
  control: e,
  register: r,
  name: n,
  label: s,
  placeholder: i,
  className: f,
  wrapperClassName: c,
  required: p = !1,
  min: l,
  max: u,
  step: a,
  ...m
}) {
  const v = A({ control: e, name: n }), N = U(v.errors, `${n}.message`);
  return /* @__PURE__ */ t("div", { className: o("w-full", c), children: /* @__PURE__ */ t(
    se,
    {
      ...m,
      ...r(n, { valueAsNumber: !0 }),
      type: "number",
      label: s,
      error: N,
      required: p,
      className: f,
      placeholder: i,
      min: l,
      max: u,
      step: a
    }
  ) });
}
function It({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    nt.Root,
    {
      "data-slot": "radio-group",
      className: o("grid gap-3", e),
      ...r
    }
  );
}
function nr({
  control: e,
  name: r,
  label: n,
  required: s,
  children: i,
  className: f,
  callback: c = () => {
  },
  onBeforeChange: p,
  ...l
}) {
  const u = (a, m) => {
    const v = () => {
      m.onChange(a), c(a);
    };
    p ? p(a, m.value, v) : v();
  };
  return /* @__PURE__ */ t(
    O,
    {
      control: e,
      name: r,
      render: ({ field: a, fieldState: { error: m } }) => /* @__PURE__ */ h("div", { className: "space-y-1.5 w-full", children: [
        n && /* @__PURE__ */ h(
          q,
          {
            htmlFor: l.id || r,
            className: "text-foreground leading-5 cursor-pointer select-none flex-1",
            children: [
              n,
              s && /* @__PURE__ */ t("span", { className: "font-semibold text-destructive ml-1", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ t(
          It,
          {
            ...l,
            id: l.id || r,
            className: o("flex flex-row gap-4", f),
            onValueChange: (v) => {
              u(v, a);
            },
            value: a.value?.toString(),
            children: i
          }
        ),
        m && /* @__PURE__ */ t("p", { className: "text-xs text-destructive", children: m.message })
      ] })
    }
  );
}
function $t({
  className: e,
  size: r = "md",
  ...n
}) {
  const s = de[r ?? "md"], i = {
    xxs: { height: "h-3.5", width: "w-6", thumb: s.icon },
    xs: { height: "h-4", width: "w-7", thumb: s.icon },
    sm: { height: "h-4.5", width: "w-8", thumb: s.icon },
    md: { height: "h-5", width: "w-9", thumb: s.icon },
    lg: { height: "h-6", width: "w-11", thumb: s.icon },
    xl: { height: "h-6", width: "w-12", thumb: s.icon },
    xxl: { height: "h-7", width: "w-14", thumb: s.icon }
  }[r ?? "md"];
  return /* @__PURE__ */ t(
    Ce.Root,
    {
      "data-slot": "switch",
      "data-size": r,
      className: o(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        i.height,
        i.width,
        e
      ),
      ...n,
      children: /* @__PURE__ */ t(
        Ce.Thumb,
        {
          "data-slot": "switch-thumb",
          className: o(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
            i.thumb
          )
        }
      )
    }
  );
}
function sr({
  control: e,
  name: r,
  label: n,
  required: s,
  callback: i = () => {
  },
  onBeforeChange: f,
  className: c,
  ...p
}) {
  const l = (u, a) => {
    const m = () => {
      a.onChange(u), i(u);
    };
    f ? f(u, a.value, m) : m();
  };
  return /* @__PURE__ */ t(
    O,
    {
      control: e,
      name: r,
      render: ({ field: u, fieldState: { error: a } }) => /* @__PURE__ */ h("div", { className: "space-y-1.5 w-full", children: [
        /* @__PURE__ */ h("div", { className: o("flex items-center gap-3", c), children: [
          n && /* @__PURE__ */ h(
            q,
            {
              htmlFor: p.id || r,
              className: "text-foreground leading-5 cursor-pointer select-none flex-1",
              children: [
                n,
                s && /* @__PURE__ */ t("span", { className: "font-semibold text-destructive ml-1", children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ t(
            $t,
            {
              ...p,
              id: p.id || r,
              checked: !!u.value,
              onCheckedChange: (m) => {
                l(m, u);
              }
            }
          )
        ] }),
        a && /* @__PURE__ */ t("p", { className: "text-xs text-destructive", children: a.message })
      ] })
    }
  );
}
function or({
  control: e,
  register: r,
  name: n,
  label: s,
  placeholder: i,
  className: f,
  wrapperClassName: c,
  required: p = !1,
  showMaxLength: l = !0,
  maxLength: u = 512,
  rows: a = 5,
  ...m
}) {
  const v = A({ control: e, name: n }), N = U(v.errors, `${n}.message`);
  return /* @__PURE__ */ h("div", { className: o("relative w-full", c), children: [
    /* @__PURE__ */ t(
      rt,
      {
        ...m,
        ...r(n),
        label: s,
        error: N,
        required: p,
        className: f,
        placeholder: i,
        maxLength: u,
        rows: a
      }
    ),
    l && /* @__PURE__ */ t(zt, { control: e, name: n, maxLength: u })
  ] });
}
const zt = ({
  control: e,
  name: r,
  maxLength: n
}) => {
  const { field: s } = He({ control: e, name: r });
  return /* @__PURE__ */ h($e, { variant: "secondary", className: "absolute rounded-sm right-3 bottom-2 text-[8px]", children: [
    s.value?.length || 0,
    "/",
    n
  ] });
};
function ar({
  control: e,
  register: r,
  name: n,
  label: s,
  placeholder: i = "HH:mm",
  className: f,
  wrapperClassName: c,
  required: p = !1,
  ...l
}) {
  const u = A({ control: e, name: n }), a = U(u.errors, `${n}.message`);
  return /* @__PURE__ */ t("div", { className: o("w-full", c), children: /* @__PURE__ */ t(
    se,
    {
      ...l,
      ...r(n),
      type: "time",
      label: s,
      error: a,
      required: p,
      className: f,
      placeholder: i
    }
  ) });
}
function ir({
  control: e,
  name: r,
  label: n,
  error: s,
  required: i = !1,
  accept: f,
  multiple: c = !1,
  wrapperClassName: p,
  className: l
}) {
  const u = A({ control: e, name: r }), a = s || U(u.errors, `${r}.message`);
  return /* @__PURE__ */ h("div", { className: o("w-full", p), children: [
    n && /* @__PURE__ */ h(q, { htmlFor: r, className: "mb-2 block", children: [
      n,
      i && /* @__PURE__ */ t("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ t(
      O,
      {
        control: e,
        name: r,
        render: ({ field: { onChange: m, value: v, ...N } }) => /* @__PURE__ */ h("div", { className: "space-y-2", children: [
          /* @__PURE__ */ h(
            q,
            {
              htmlFor: r,
              className: o(
                "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent transition-colors",
                a && "border-destructive",
                l
              ),
              children: [
                /* @__PURE__ */ h("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
                  /* @__PURE__ */ t(De, { className: "w-8 h-8 mb-2 text-muted-foreground" }),
                  /* @__PURE__ */ h("p", { className: "mb-2 text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ t("span", { className: "font-semibold", children: "Click to upload" }),
                    " or drag and drop"
                  ] }),
                  /* @__PURE__ */ h("p", { className: "text-xs text-muted-foreground", children: [
                    f || "Any file",
                    c && " (multiple files allowed)"
                  ] })
                ] }),
                /* @__PURE__ */ t(
                  se,
                  {
                    ...N,
                    id: r,
                    type: "file",
                    accept: f,
                    multiple: c,
                    className: "hidden",
                    onChange: (C) => {
                      const M = C.target.files;
                      M && m(c ? Array.from(M) : M[0]);
                    }
                  }
                )
              ]
            }
          ),
          v && /* @__PURE__ */ t("p", { className: "text-sm text-muted-foreground", children: c ? `${Array.isArray(v) ? v.length : 0} file(s) selected` : typeof v == "string" ? v : v?.name || "File selected" })
        ] })
      }
    ),
    a && /* @__PURE__ */ t("p", { className: "text-sm text-destructive mt-1", children: a })
  ] });
}
const lr = je, qe = x.createContext({}), cr = ({
  ...e
}) => /* @__PURE__ */ t(qe.Provider, { value: { name: e.name }, children: /* @__PURE__ */ t(O, { ...e }) }), le = () => {
  const e = x.useContext(qe), r = x.useContext(Te), { getFieldState: n } = Ae(), s = A({ name: e.name }), i = n(e.name, s);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: f } = r;
  return {
    id: f,
    name: e.name,
    formItemId: `${f}-form-item`,
    formDescriptionId: `${f}-form-item-description`,
    formMessageId: `${f}-form-item-message`,
    ...i
  };
}, Te = x.createContext({});
function dr({ className: e, ...r }) {
  const n = x.useId();
  return /* @__PURE__ */ t(Te.Provider, { value: { id: n }, children: /* @__PURE__ */ t("div", { "data-slot": "form-item", className: o("grid gap-2", e), ...r }) });
}
function ur({ className: e, ...r }) {
  const { error: n, formItemId: s } = le();
  return /* @__PURE__ */ t(
    q,
    {
      "data-slot": "form-label",
      "data-error": !!n,
      className: o("data-[error=true]:text-destructive", e),
      htmlFor: s,
      ...r
    }
  );
}
function mr({ ...e }) {
  const { error: r, formItemId: n, formDescriptionId: s, formMessageId: i } = le();
  return /* @__PURE__ */ t(
    Ee,
    {
      "data-slot": "form-control",
      id: n,
      "aria-describedby": r ? `${s} ${i}` : `${s}`,
      "aria-invalid": !!r,
      ...e
    }
  );
}
function fr({ className: e, ...r }) {
  const { formDescriptionId: n } = le();
  return /* @__PURE__ */ t(
    "p",
    {
      "data-slot": "form-description",
      id: n,
      className: o("text-muted-foreground text-sm", e),
      ...r
    }
  );
}
function hr({ className: e, ...r }) {
  const { error: n, formMessageId: s } = le(), i = n ? String(n?.message ?? "") : r.children;
  return i ? /* @__PURE__ */ t(
    "p",
    {
      "data-slot": "form-message",
      id: s,
      className: o("text-destructive text-sm", e),
      ...r,
      children: i
    }
  ) : null;
}
export {
  lr as Form,
  mr as FormControl,
  fr as FormDescription,
  cr as FormField,
  dr as FormItem,
  ur as FormLabel,
  hr as FormMessage,
  Yt as RHFCheckboxGroup,
  Bt as RHFCombobox,
  Gt as RHFDatePicker,
  Xt as RHFDateRangePicker,
  Kt as RHFEditor,
  Qt as RHFErrorMessage,
  Zt as RHFFileUpload,
  Jt as RHFFormattedInput,
  er as RHFInput,
  tr as RHFMultiSelect,
  rr as RHFNumberInput,
  nr as RHFRadioGroup,
  sr as RHFSwitch,
  or as RHFTextArea,
  ar as RHFTimePicker,
  ir as RHFUpload,
  le as useFormField
};
//# sourceMappingURL=index-rhf.mjs.map
