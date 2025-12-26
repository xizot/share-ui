import { jsx as t, jsxs as m } from "react/jsx-runtime";
import * as le from "@radix-ui/react-checkbox";
import { CheckIcon as ae, SearchIcon as ke, XCircle as Ce, ChevronDown as de, ChevronLeftIcon as De, ChevronRightIcon as _e, ChevronDownIcon as oe, CalendarIcon as we, ChevronUpIcon as Me } from "lucide-react";
import * as c from "react";
import { F as ve, c as n, L as X, B as A, b as ue, S as Se } from "./textarea-Bt2ohije.js";
import { Command as q } from "cmdk";
import { startOfMonth as Y, format as j, setSeconds as me, setMinutes as fe, setHours as pe, endOfDay as ze, startOfDay as Te, endOfWeek as Re, startOfWeek as Ie, endOfMonth as ge, subWeeks as he, subMonths as Q } from "date-fns";
import * as W from "@radix-ui/react-scroll-area";
import { getDefaultClassNames as ye, DayPicker as Ee } from "react-day-picker";
import * as G from "@radix-ui/react-popover";
import * as xe from "@radix-ui/react-progress";
import * as N from "@radix-ui/react-select";
function Ke({
  className: e,
  size: r = "md",
  ...s
}) {
  const l = ve[r ?? "md"];
  return /* @__PURE__ */ t(
    le.Root,
    {
      "data-slot": "checkbox",
      "data-size": r,
      className: n(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        l.icon,
        e
      ),
      ...s,
      children: /* @__PURE__ */ t(
        le.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ t(ae, { className: l.icon })
        }
      )
    }
  );
}
function Pe({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    q,
    {
      "data-slot": "command",
      className: n(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...r
    }
  );
}
function He({
  className: e,
  label: r,
  error: s,
  required: l,
  id: d,
  ...x
}) {
  const u = r || s, g = /* @__PURE__ */ t("div", { className: "px-1 pt-1", children: /* @__PURE__ */ m(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: n(
        "flex h-9 items-center gap-2 rounded-md border px-3",
        s && "border-destructive"
      ),
      children: [
        /* @__PURE__ */ t(ke, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ t(
          q.Input,
          {
            id: d,
            "data-slot": "command-input",
            "aria-invalid": !!s,
            className: n(
              "placeholder:text-muted-foreground flex h-10 w-full bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              s && "focus-visible:ring-destructive",
              e
            ),
            ...x
          }
        )
      ]
    }
  ) });
  return u ? /* @__PURE__ */ m("div", { className: "flex flex-col gap-1", children: [
    r && /* @__PURE__ */ m(X, { htmlFor: d, children: [
      r,
      l && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    g,
    s && /* @__PURE__ */ t("div", { className: "text-destructive text-sm", role: "alert", children: s })
  ] }) : g;
}
function $e({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    q.List,
    {
      "data-slot": "command-list",
      className: n("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
      ...r
    }
  );
}
function je({ ...e }) {
  return /* @__PURE__ */ t(
    q.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function Ae({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    q.Group,
    {
      "data-slot": "command-group",
      className: n(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...r
    }
  );
}
function Le({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    q.Item,
    {
      "data-slot": "command-item",
      className: n(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function se({ ...e }) {
  return /* @__PURE__ */ t(G.Root, { "data-slot": "popover", ...e });
}
function ie({ ...e }) {
  return /* @__PURE__ */ t(G.Trigger, { "data-slot": "popover-trigger", ...e });
}
function ce({
  className: e,
  align: r = "center",
  sideOffset: s = 4,
  ...l
}) {
  return /* @__PURE__ */ t(G.Portal, { children: /* @__PURE__ */ t(
    G.Content,
    {
      "data-slot": "popover-content",
      align: r,
      sideOffset: s,
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...l
    }
  ) });
}
function Qe({ ...e }) {
  return /* @__PURE__ */ t(G.Anchor, { "data-slot": "popover-anchor", ...e });
}
function et({
  options: e,
  value: r,
  onChange: s,
  label: l,
  error: d,
  required: x,
  placeholder: u = "Select option...",
  searchPlaceholder: g = "Search...",
  emptyMessage: i = "No results found.",
  disabled: f = !1,
  readonly: h = !1,
  size: S = "md",
  showClearIcon: D = !0,
  showArrowIcon: _ = !0,
  showSearch: C = !0,
  suffix: I,
  className: E,
  triggerClassName: a,
  popoverClassName: o
}) {
  const [b, w] = c.useState(!1), P = c.useMemo(
    () => e.find((p) => p.id === r),
    [e, r]
  ), H = !f && !h && !!r, M = (p) => {
    s?.(p.id, p), w(!1);
  }, z = (p) => {
    p.preventDefault(), p.stopPropagation(), H && s?.("", void 0);
  }, k = /* @__PURE__ */ m(se, { open: b, onOpenChange: w, children: [
    /* @__PURE__ */ t(ie, { asChild: !0, children: /* @__PURE__ */ m(
      A,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": b,
        disabled: f,
        size: S,
        className: n(
          "w-full justify-between group/combobox",
          !r && "text-muted-foreground",
          d && "border-destructive",
          a
        ),
        children: [
          /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: P ? P.name : u }),
          /* @__PURE__ */ m("div", { className: "flex items-center gap-1 shrink-0 ml-2", children: [
            r && H ? /* @__PURE__ */ m(
              "span",
              {
                onMouseDown: (p) => {
                  p.preventDefault(), p.stopPropagation();
                },
                onClick: z,
                className: "cursor-pointer",
                children: [
                  D && /* @__PURE__ */ t(Ce, { className: "text-muted-foreground hidden group-hover/combobox:block h-4 w-4" }),
                  _ && /* @__PURE__ */ t(de, { className: "text-muted-foreground block group-hover/combobox:hidden h-4 w-4" })
                ]
              }
            ) : _ && /* @__PURE__ */ t(de, { className: "text-muted-foreground h-4 w-4" }),
            I
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      ce,
      {
        className: n("w-(--radix-popover-trigger-width) p-0", o),
        align: "start",
        children: /* @__PURE__ */ m(Pe, { children: [
          C && /* @__PURE__ */ t(He, { placeholder: g }),
          /* @__PURE__ */ m($e, { children: [
            /* @__PURE__ */ t(je, { children: i }),
            /* @__PURE__ */ t(Ae, { children: e.map((p) => /* @__PURE__ */ m(
              Le,
              {
                value: p.name,
                disabled: p.disabled,
                onSelect: () => M(p),
                className: "flex items-center justify-between gap-2",
                children: [
                  /* @__PURE__ */ t("span", { className: "flex-1 truncate", children: p.name }),
                  /* @__PURE__ */ t(
                    ae,
                    {
                      className: n(
                        "h-4 w-4 shrink-0 text-primary",
                        r === p.id ? "opacity-100" : "opacity-0"
                      )
                    }
                  )
                ]
              },
              p.id
            )) })
          ] })
        ] })
      }
    )
  ] });
  return !l && !d ? /* @__PURE__ */ t("div", { className: n("w-full", E), children: k }) : /* @__PURE__ */ m("div", { className: n("w-full", E), children: [
    l && /* @__PURE__ */ m(X, { className: "text-foreground leading-5 block", children: [
      l,
      x && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: l ? "mt-1" : "", children: k }),
    d && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: d })
  ] });
}
function Ne({
  className: e,
  classNames: r,
  showOutsideDays: s = !0,
  captionLayout: l = "label",
  buttonVariant: d = "ghost",
  formatters: x,
  components: u,
  ...g
}) {
  const i = ye();
  return /* @__PURE__ */ t(
    Ee,
    {
      showOutsideDays: s,
      weekStartsOn: 1,
      className: n(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: l,
      formatters: {
        formatMonthDropdown: (f) => {
          const h = g.locale ? typeof g.locale == "string" ? g.locale : g.locale.code || "default" : "default";
          return f.toLocaleString(h, { month: "short" });
        },
        ...x
      },
      classNames: {
        root: n("w-fit", i.root),
        months: n("flex gap-4 flex-col md:flex-row relative", i.months),
        month: n("flex flex-col w-full gap-4", i.month),
        nav: n(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          i.nav
        ),
        button_previous: n(
          ue({ variant: d }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          i.button_previous
        ),
        button_next: n(
          ue({ variant: d }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          i.button_next
        ),
        month_caption: n(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          i.month_caption
        ),
        dropdowns: n(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          i.dropdowns
        ),
        dropdown_root: n(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          i.dropdown_root
        ),
        dropdown: n("absolute bg-popover inset-0 opacity-0", i.dropdown),
        caption_label: n(
          "select-none font-medium",
          l === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          i.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: n("flex", i.weekdays),
        weekday: n(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          i.weekday
        ),
        week: n("flex w-full mt-1", i.week),
        week_number_header: n("select-none w-(--cell-size)", i.week_number_header),
        week_number: n(
          "text-[0.8rem] select-none text-muted-foreground",
          i.week_number
        ),
        day: n(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          g.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          i.day
        ),
        range_start: n("rounded-l-md bg-accent", i.range_start),
        range_middle: n("rounded-none", i.range_middle),
        range_end: n("rounded-r-md bg-accent", i.range_end),
        today: n("bg-accent text-accent-foreground !rounded-full", i.today),
        outside: n(
          "text-muted-foreground aria-selected:text-muted-foreground",
          i.outside
        ),
        disabled: n("text-muted-foreground opacity-50", i.disabled),
        hidden: n("invisible", i.hidden),
        ...r
      },
      components: {
        ...u,
        CaptionLabel: ({ className: f, ...h }) => /* @__PURE__ */ t("div", { className: n(f), ...h }),
        Root: ({ className: f, rootRef: h, ...S }) => /* @__PURE__ */ t("div", { "data-slot": "calendar", ref: h, className: n(f), ...S }),
        Chevron: ({ className: f, orientation: h, ...S }) => h === "left" ? /* @__PURE__ */ t(De, { className: n("size-4", f), ...S }) : h === "right" ? /* @__PURE__ */ t(_e, { className: n("size-4", f), ...S }) : /* @__PURE__ */ t(oe, { className: n("size-4", f), ...S }),
        DayButton: Oe,
        WeekNumber: ({ children: f, ...h }) => /* @__PURE__ */ t("td", { ...h, children: /* @__PURE__ */ t("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: f }) })
      },
      ...g
    }
  );
}
function Oe({
  className: e,
  day: r,
  modifiers: s,
  ...l
}) {
  const d = ye(), x = c.useRef(null);
  c.useEffect(() => {
    s.focused && x.current?.focus();
  }, [s.focused]);
  const u = s.today, g = s.selected && !s.range_start && !s.range_end && !s.range_middle, i = s.range_start, f = s.range_end, h = s.range_middle;
  return /* @__PURE__ */ m(
    A,
    {
      ref: x,
      variant: "ghost",
      size: "icon",
      "data-day": r.date.toLocaleDateString(),
      "data-selected-single": g,
      "data-range-start": i,
      "data-range-end": f,
      "data-range-middle": h,
      className: n(
        "data-[selected-single=true]:!bg-primary data-[selected-single=true]:!text-primary-foreground",
        "data-[range-middle=true]:!bg-accent data-[range-middle=true]:!text-accent-foreground",
        "data-[range-start=true]:!bg-primary data-[range-start=true]:!text-primary-foreground",
        "data-[range-end=true]:!bg-primary data-[range-end=true]:!text-primary-foreground",
        "dark:hover:text-accent-foreground",
        "flex aspect-square h-10 w-10 flex-col gap-0.5 leading-none font-normal text-sm p-1.5 group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 !rounded-full",
        "[&>span]:text-sm [&>span]:font-normal",
        d.day,
        e
      ),
      ...l,
      children: [
        /* @__PURE__ */ t("span", { children: l.children }),
        u && /* @__PURE__ */ t("div", { className: "h-1 w-1 rounded-full bg-current opacity-70" })
      ]
    }
  );
}
function U({
  className: e,
  children: r,
  ...s
}) {
  return /* @__PURE__ */ m(
    W.Root,
    {
      "data-slot": "scroll-area",
      className: n("relative", e),
      ...s,
      children: [
        /* @__PURE__ */ t(
          W.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: r
          }
        ),
        /* @__PURE__ */ t(Ye, {}),
        /* @__PURE__ */ t(W.Corner, {})
      ]
    }
  );
}
function Ye({
  className: e,
  orientation: r = "vertical",
  ...s
}) {
  return /* @__PURE__ */ t(
    W.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: r,
      className: n(
        "flex touch-none p-px transition-colors select-none",
        r === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        r === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...s,
      children: /* @__PURE__ */ t(
        W.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
function Fe({
  value: e,
  onChange: r,
  locale: s,
  monthNames: l,
  disabled: d,
  className: x
}) {
  const [u, g] = c.useState(() => e ? e.getFullYear() : (/* @__PURE__ */ new Date()).getFullYear()), [i, f] = c.useState(() => e ? e.getMonth() : (/* @__PURE__ */ new Date()).getMonth()), h = c.useRef(null), S = c.useRef(null);
  c.useEffect(() => {
    if (e) {
      const a = e.getFullYear(), o = e.getMonth();
      (u !== a || i !== o) && (g(a), f(o));
    } else {
      const a = /* @__PURE__ */ new Date(), o = a.getFullYear(), b = a.getMonth();
      (u !== o || i !== b) && (g(o), f(b));
    }
  }, [e]), c.useEffect(() => {
    if (!h.current) return;
    const a = setTimeout(() => {
      const o = h.current?.querySelector(
        `[data-month="${i}"]`
      );
      if (o && h.current) {
        const b = h.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (b) {
          const w = o.offsetTop;
          b.scrollTo({ top: w, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(a);
  }, [i]), c.useEffect(() => {
    if (!S.current) return;
    const a = setTimeout(() => {
      const o = S.current?.querySelector(
        `[data-year="${u}"]`
      );
      if (o && S.current) {
        const b = S.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (b) {
          const w = o.offsetTop;
          b.scrollTo({ top: w, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(a);
  }, [u]);
  const D = c.useCallback(
    (a) => {
      f(a);
      const o = new Date(u, a, 1);
      r(Y(o));
    },
    [u, r]
  ), _ = c.useCallback(
    (a) => {
      g(a);
      const o = new Date(a, i, 1);
      r(Y(o));
    },
    [i, r]
  ), C = c.useMemo(() => {
    if (l && l.length === 12)
      return l;
    const a = typeof s == "string" ? s : s?.code || "en-US", o = new Intl.DateTimeFormat(a, { month: "long" });
    return Array.from({ length: 12 }, (b, w) => {
      const P = new Date(2024, w, 1);
      return o.format(P);
    });
  }, [s, l]), I = c.useMemo(
    () => Array.from({ length: 100 }, (a, o) => (/* @__PURE__ */ new Date()).getFullYear() - 50 + o),
    []
  ), E = c.useMemo(() => e ? `${C[i]} ${u}` : `${C[(/* @__PURE__ */ new Date()).getMonth()]} ${(/* @__PURE__ */ new Date()).getFullYear()}`, [e, C, i, u]);
  return /* @__PURE__ */ m("div", { className: n("flex flex-col h-full", x), children: [
    /* @__PURE__ */ t("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ t("div", { className: "font-medium text-lg", children: E }) }),
    /* @__PURE__ */ m("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ t(U, { className: "w-30 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: h, className: "px-2", children: C.map((a, o) => {
        const b = i === o, w = d ? d(new Date(u, o, 1)) : !1;
        return /* @__PURE__ */ t(
          "div",
          {
            "data-month": o,
            onClick: () => !w && D(o),
            className: n(
              "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
              b ? "bg-secondary" : "hover:bg-accent",
              w && "opacity-50 cursor-not-allowed"
            ),
            children: a
          },
          o
        );
      }) }) }),
      /* @__PURE__ */ t(U, { className: "flex-1 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: S, className: "px-2", children: I.map((a) => /* @__PURE__ */ t(
        "div",
        {
          "data-year": a,
          onClick: () => _(a),
          className: n(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            u === a ? "bg-secondary" : "hover:bg-accent"
          ),
          children: a
        },
        a
      )) }) })
    ] })
  ] });
}
function be({ value: e, onChange: r, showSeconds: s = !0, className: l }) {
  const d = c.useRef(null), x = c.useRef(null), u = c.useRef(null), g = parseInt(e.hour, 10) || 0, i = parseInt(e.minute, 10) || 0, f = parseInt(e.second, 10) || 0, h = Array.from({ length: 24 }, (a, o) => o), S = Array.from({ length: 60 }, (a, o) => o), D = Array.from({ length: 60 }, (a, o) => o);
  c.useEffect(() => {
    const a = setTimeout(() => {
      if (d.current) {
        const o = d.current.querySelector(
          `[data-hour="${g}"]`
        );
        if (o) {
          const b = d.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (b) {
            const w = o.offsetTop;
            b.scrollTo({ top: w, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(a);
  }, [g]), c.useEffect(() => {
    const a = setTimeout(() => {
      if (x.current) {
        const o = x.current.querySelector(
          `[data-minute="${i}"]`
        );
        if (o) {
          const b = x.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (b) {
            const w = o.offsetTop;
            b.scrollTo({ top: w, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(a);
  }, [i]), c.useEffect(() => {
    if (!s) return;
    const a = setTimeout(() => {
      if (u.current) {
        const o = u.current.querySelector(
          `[data-second="${f}"]`
        );
        if (o) {
          const b = u.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (b) {
            const w = o.offsetTop;
            b.scrollTo({ top: w, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(a);
  }, [f, s]);
  const _ = (a) => {
    r({
      ...e,
      hour: a.toString().padStart(2, "0")
    });
  }, C = (a) => {
    r({
      ...e,
      minute: a.toString().padStart(2, "0")
    });
  }, I = (a) => {
    r({
      ...e,
      second: a.toString().padStart(2, "0")
    });
  }, E = `${e.hour}:${e.minute}${s ? `:${e.second}` : ""}`;
  return /* @__PURE__ */ m("div", { className: n("flex flex-col h-full border-l", l), children: [
    /* @__PURE__ */ t("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ t("div", { className: "font-medium text-lg", children: E }) }),
    /* @__PURE__ */ m("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ t(U, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: d, className: "px-2", children: h.map((a) => /* @__PURE__ */ t(
        "div",
        {
          "data-hour": a,
          onClick: () => _(a),
          className: n(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            g === a ? "bg-secondary" : "hover:bg-accent"
          ),
          children: a.toString().padStart(2, "0")
        },
        a
      )) }) }),
      /* @__PURE__ */ t(U, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:overflow-hidden", children: /* @__PURE__ */ t("div", { ref: x, className: "px-2", children: S.map((a) => /* @__PURE__ */ t(
        "div",
        {
          "data-minute": a,
          onClick: () => C(a),
          className: n(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            i === a ? "bg-secondary" : "hover:bg-accent"
          ),
          children: a.toString().padStart(2, "0")
        },
        a
      )) }) }),
      s && /* @__PURE__ */ t(U, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: u, className: "px-2", children: D.map((a) => /* @__PURE__ */ t(
        "div",
        {
          "data-second": a,
          onClick: () => I(a),
          className: n(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            f === a ? "bg-secondary" : "hover:bg-accent"
          ),
          children: a.toString().padStart(2, "0")
        },
        a
      )) }) })
    ] })
  ] });
}
function tt({
  value: e,
  onChange: r,
  placeholder: s = "Pick a date",
  dateFormat: l = "dd/MM/yyyy",
  showTime: d = !1,
  timeOnly: x = !1,
  mode: u = "single",
  label: g,
  error: i,
  required: f,
  disabled: h = !1,
  disabledPast: S = !1,
  disabledFuture: D = !1,
  onDisabled: _,
  size: C = "md",
  className: I,
  triggerClassName: E,
  popoverClassName: a,
  locale: o,
  cancelText: b,
  applyText: w,
  monthNames: P,
  ...H
}) {
  const [M, z] = c.useState(!1), [k, p] = c.useState(e), [F, L] = c.useState(() => e || /* @__PURE__ */ new Date()), [T, R] = c.useState(() => e ? {
    hour: e.getHours().toString().padStart(2, "0"),
    minute: e.getMinutes().toString().padStart(2, "0"),
    second: e.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }), V = c.useRef(e), Z = c.useRef(e || /* @__PURE__ */ new Date()), ee = () => e ? {
    hour: e.getHours().toString().padStart(2, "0"),
    minute: e.getMinutes().toString().padStart(2, "0"),
    second: e.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }, J = c.useRef(ee());
  c.useEffect(() => {
    M && (V.current = e, Z.current = e || /* @__PURE__ */ new Date(), J.current = e ? {
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }, x ? R(e ? {
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }) : u === "month" ? p(e ? Y(e) : Y(/* @__PURE__ */ new Date())) : (p(e), e ? (L(e), d && R({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    })) : (L(/* @__PURE__ */ new Date()), d && R({ hour: "00", minute: "00", second: "00" }))));
  }, [M, e, d, x, u]), c.useEffect(() => {
    !M && !x ? (p(e), e && (L(e), d && R({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    }))) : !M && x && e && R({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    });
  }, [e, d, x, M]);
  const te = () => {
    if (x) {
      const $ = me(
        fe(pe(e || /* @__PURE__ */ new Date(), parseInt(T.hour, 10)), parseInt(T.minute, 10)),
        parseInt(T.second, 10)
      );
      r?.($);
    } else if (u === "month")
      r?.(k ? Y(k) : void 0);
    else if (k) {
      let v = k;
      d && (v = pe(v, parseInt(T.hour, 10)), v = fe(v, parseInt(T.minute, 10)), v = me(v, parseInt(T.second, 10))), r?.(v);
    } else
      r?.(void 0);
    z(!1);
  }, re = () => {
    p(V.current), L(Z.current), d && R(J.current), z(!1);
  }, ne = c.useMemo(() => {
    if (!e) return s;
    const v = o && typeof o != "string" ? { locale: o } : void 0;
    if (x)
      return /[Hhms]/.test(l) ? j(e, l, v) : j(e, "HH:mm:ss", v);
    if (u === "month") {
      if (o) {
        const $ = typeof o == "string" ? o : o?.code || "en-US";
        return new Intl.DateTimeFormat($, { month: "2-digit", year: "numeric" }).format(e);
      }
      return j(e, "MM/yyyy", v);
    }
    return d ? /[Hhms]/.test(l) ? j(e, l, v) : j(e, `${l} HH:mm:ss`, v) : j(e, l, v);
  }, [e, l, d, x, u, s, o]), B = c.useCallback(
    (v) => {
      if (h) return !0;
      const $ = /* @__PURE__ */ new Date();
      $.setHours(0, 0, 0, 0);
      const K = new Date(v);
      return K.setHours(0, 0, 0, 0), S && K < $ || D && K > $ ? !0 : _ ? _(v) : !1;
    },
    [h, S, D, _]
  ), y = c.useMemo(
    () => ({
      ...H,
      mode: "single",
      selected: k,
      onSelect: p,
      defaultMonth: F,
      month: F,
      onMonthChange: L,
      captionLayout: "dropdown",
      disabled: B,
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: o
    }),
    [H, k, F, B, o]
  ), O = /* @__PURE__ */ m(se, { open: M, onOpenChange: z, children: [
    /* @__PURE__ */ t(ie, { asChild: !0, children: /* @__PURE__ */ m(
      A,
      {
        variant: "outline",
        size: C,
        disabled: h,
        className: n(
          "group w-full justify-between",
          !e && "text-muted-foreground",
          i && "border-destructive",
          E
        ),
        children: [
          /* @__PURE__ */ t("span", { children: ne }),
          /* @__PURE__ */ t(we, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      ce,
      {
        className: n("flex w-auto flex-col gap-2 p-0", a),
        align: "start",
        children: /* @__PURE__ */ m("div", { className: "flex flex-col gap-2 pb-2", children: [
          x ? /* @__PURE__ */ t("div", { className: "flex h-[350px]", children: /* @__PURE__ */ t(
            be,
            {
              value: T,
              onChange: R,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : u === "month" ? /* @__PURE__ */ t("div", { className: "flex h-[350px]", children: /* @__PURE__ */ t(
            Fe,
            {
              value: k,
              onChange: p,
              locale: o,
              monthNames: P,
              disabled: B,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : /* @__PURE__ */ m("div", { className: n("flex h-[350px]", d && "overflow-hidden"), children: [
            /* @__PURE__ */ t(Ne, { initialFocus: !0, ...y }),
            d && /* @__PURE__ */ t(
              be,
              {
                value: T,
                onChange: R,
                className: "min-h-0 h-full shrink-0"
              }
            )
          ] }),
          /* @__PURE__ */ t(Se, { className: "shrink-0" }),
          /* @__PURE__ */ m("div", { className: "flex justify-end gap-2 px-2 shrink-0", children: [
            /* @__PURE__ */ t(A, { variant: "secondary", size: "sm", onClick: re, children: b || "Cancel" }),
            /* @__PURE__ */ t(A, { size: "sm", onClick: te, children: w || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return g || i ? /* @__PURE__ */ m("div", { className: n("w-full", I), children: [
    g && /* @__PURE__ */ m(X, { className: "text-foreground leading-5 block", children: [
      g,
      f && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: g ? "mt-1" : "", children: O }),
    i && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: i })
  ] }) : /* @__PURE__ */ t("div", { className: n("w-full", I), children: O });
}
const Be = () => {
  const e = /* @__PURE__ */ new Date();
  return [
    {
      label: "Hôm nay",
      range: {
        from: Te(e),
        to: ze(e)
      }
    },
    {
      label: "Tuần trước",
      range: {
        from: Ie(he(e, 1), { weekStartsOn: 1 }),
        to: Re(he(e, 1), { weekStartsOn: 1 })
      }
    },
    {
      label: "Tháng trước",
      range: {
        from: Y(Q(e, 1)),
        to: ge(Q(e, 1))
      }
    },
    {
      label: "3 tháng trước",
      range: {
        from: Y(Q(e, 3)),
        to: ge(Q(e, 3))
      }
    }
  ];
};
function rt({
  value: e,
  onChange: r,
  placeholder: s = { from: "From date", to: "To date" },
  dateFormat: l = "dd/MM/yyyy",
  presets: d,
  showPresets: x,
  label: u,
  error: g,
  required: i,
  disabled: f = !1,
  disabledPast: h = !1,
  disabledFuture: S = !1,
  onDisabled: D,
  size: _ = "md",
  className: C,
  triggerClassName: I,
  popoverClassName: E,
  locale: a,
  cancelText: o,
  applyText: b,
  ...w
}) {
  const [P, H] = c.useState(!1), [M, z] = c.useState(e), [k, p] = c.useState(() => e?.to || e?.from || /* @__PURE__ */ new Date()), F = c.useRef(e), L = c.useRef(e?.to || e?.from || /* @__PURE__ */ new Date());
  c.useEffect(() => {
    P && (F.current = e, L.current = e?.to || e?.from || /* @__PURE__ */ new Date(), z(e), e?.to ? p(e.to) : e?.from ? p(e.from) : p(/* @__PURE__ */ new Date()));
  }, [P, e]), c.useEffect(() => {
    z(e), e?.to ? p(e.to) : e?.from && p(e.from);
  }, [e]);
  const T = c.useCallback(
    (y) => {
      if (f) return !0;
      const O = /* @__PURE__ */ new Date();
      O.setHours(0, 0, 0, 0);
      const v = new Date(y);
      return v.setHours(0, 0, 0, 0), h && v < O || S && v > O ? !0 : D ? D(y) : !1;
    },
    [f, h, S, D]
  ), R = c.useMemo(() => Be(), []), V = d ?? R, Z = x !== void 0 ? x : V.length > 0, ee = () => {
    r?.(M), H(!1);
  }, J = () => {
    z(F.current), p(L.current), H(!1);
  }, te = (y) => {
    z(y.range), y.range.to ? p(y.range.to) : y.range.from && p(y.range.from);
  }, re = c.useMemo(() => {
    if (!e?.from) return s.from || "Pick a date";
    const y = a && typeof a != "string" ? { locale: a } : void 0;
    return e.from && e.to ? `${j(e.from, l, y)} - ${j(e.to, l, y)}` : j(e.from, l, y);
  }, [e, l, s, a]), ne = c.useMemo(
    () => ({
      ...w,
      mode: "range",
      selected: M,
      onSelect: z,
      defaultMonth: k,
      month: k,
      onMonthChange: p,
      disabled: T,
      captionLayout: "dropdown",
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: a
    }),
    [w, M, k, T, a]
  ), B = /* @__PURE__ */ m(se, { open: P, onOpenChange: H, children: [
    /* @__PURE__ */ t(ie, { asChild: !0, children: /* @__PURE__ */ m(
      A,
      {
        variant: "outline",
        size: _,
        disabled: f,
        className: n(
          "group w-full justify-between",
          !e?.from && "text-muted-foreground",
          g && "border-destructive",
          I
        ),
        children: [
          /* @__PURE__ */ t("span", { children: re }),
          /* @__PURE__ */ t(we, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      ce,
      {
        className: n("flex w-auto flex-col gap-2 p-0 pb-2", E),
        align: "start",
        children: /* @__PURE__ */ m("div", { className: "flex flex-col gap-2 pb-2", children: [
          /* @__PURE__ */ m("div", { className: "flex", children: [
            Z && /* @__PURE__ */ t("div", { className: "border-r p-2 w-fit", children: /* @__PURE__ */ t("div", { className: "space-y-1", children: V.map((y, O) => /* @__PURE__ */ t(
              A,
              {
                variant: "ghost",
                size: "sm",
                className: "block text-left font-normal",
                onClick: () => te(y),
                children: y.label
              },
              O
            )) }) }),
            /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(Ne, { initialFocus: !0, ...ne }) })
          ] }),
          /* @__PURE__ */ t(Se, {}),
          /* @__PURE__ */ m("div", { className: "flex justify-end gap-2 px-2", children: [
            /* @__PURE__ */ t(A, { variant: "secondary", onClick: J, children: o || "Cancel" }),
            /* @__PURE__ */ t(A, { onClick: ee, children: b || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return u || g ? /* @__PURE__ */ m("div", { className: n("w-full", C), children: [
    u && /* @__PURE__ */ m(X, { className: "text-foreground leading-5 block", children: [
      u,
      i && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: u ? "mt-1" : "", children: B }),
    g && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: g })
  ] }) : /* @__PURE__ */ t("div", { className: n("w-full", C), children: B });
}
function nt({
  className: e,
  value: r,
  ...s
}) {
  return /* @__PURE__ */ t(
    xe.Root,
    {
      "data-slot": "progress",
      className: n("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", e),
      ...s,
      children: /* @__PURE__ */ t(
        xe.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (r || 0)}%)` }
        }
      )
    }
  );
}
function at({ ...e }) {
  return /* @__PURE__ */ t(N.Root, { "data-slot": "select", ...e });
}
function ot({ ...e }) {
  return /* @__PURE__ */ t(N.Group, { "data-slot": "select-group", ...e });
}
function st({ ...e }) {
  return /* @__PURE__ */ t(N.Value, { "data-slot": "select-value", ...e });
}
function it({
  className: e,
  size: r = "md",
  children: s,
  label: l,
  error: d,
  required: x,
  id: u,
  ...g
}) {
  const i = l || d, f = ve[r ?? "md"], h = /* @__PURE__ */ m(
    N.Trigger,
    {
      id: u,
      "data-slot": "select-trigger",
      "data-size": r,
      "aria-invalid": !!d,
      className: n(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-transparent whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        f.height,
        f.text,
        f.padding,
        {
          "[&_svg:not([class*='size-'])]:size-3": r === "xxs",
          "[&_svg:not([class*='size-'])]:size-3.5": r === "xs",
          "[&_svg:not([class*='size-'])]:size-4": r === "sm" || r === "md",
          "[&_svg:not([class*='size-'])]:size-5": r === "lg" || r === "xl",
          "[&_svg:not([class*='size-'])]:size-6": r === "xxl"
        },
        d ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...g,
      children: [
        s,
        /* @__PURE__ */ t(N.Icon, { asChild: !0, children: /* @__PURE__ */ t(oe, { className: n("opacity-50", f.icon) }) })
      ]
    }
  );
  return i ? /* @__PURE__ */ m("div", { className: "flex flex-col gap-1", children: [
    l && /* @__PURE__ */ m(X, { htmlFor: u, children: [
      l,
      x && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    h,
    d && /* @__PURE__ */ t("div", { className: "text-sm text-destructive", role: "alert", children: d })
  ] }) : h;
}
function ct({
  className: e,
  children: r,
  position: s = "item-aligned",
  align: l = "center",
  ...d
}) {
  return /* @__PURE__ */ t(N.Portal, { children: /* @__PURE__ */ m(
    N.Content,
    {
      "data-slot": "select-content",
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        s === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: s,
      align: l,
      ...d,
      children: [
        /* @__PURE__ */ t(qe, {}),
        /* @__PURE__ */ t(
          N.Viewport,
          {
            className: n(
              "p-1",
              s === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: r
          }
        ),
        /* @__PURE__ */ t(Ve, {})
      ]
    }
  ) });
}
function lt({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    N.Label,
    {
      "data-slot": "select-label",
      className: n("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...r
    }
  );
}
function dt({
  className: e,
  children: r,
  ...s
}) {
  return /* @__PURE__ */ m(
    N.Item,
    {
      "data-slot": "select-item",
      className: n(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...s,
      children: [
        /* @__PURE__ */ t(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ t(N.ItemIndicator, { children: /* @__PURE__ */ t(ae, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ t(N.ItemText, { children: r })
      ]
    }
  );
}
function ut({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    N.Separator,
    {
      "data-slot": "select-separator",
      className: n("-mx-1 my-1 h-px pointer-events-none bg-border", e),
      ...r
    }
  );
}
function qe({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    N.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: n("flex justify-center items-center py-1 cursor-default", e),
      ...r,
      children: /* @__PURE__ */ t(Me, { className: "size-4" })
    }
  );
}
function Ve({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    N.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: n("flex justify-center items-center py-1 cursor-default", e),
      ...r,
      children: /* @__PURE__ */ t(oe, { className: "size-4" })
    }
  );
}
export {
  Ke as C,
  tt as D,
  Fe as M,
  nt as P,
  at as S,
  be as T,
  et as a,
  rt as b,
  it as c,
  st as d,
  ct as e,
  dt as f,
  se as g,
  ie as h,
  ce as i,
  Pe as j,
  He as k,
  $e as l,
  je as m,
  Ae as n,
  Le as o,
  Ne as p,
  Oe as q,
  Qe as r,
  U as s,
  Ye as t,
  ot as u,
  lt as v,
  Ve as w,
  qe as x,
  ut as y
};
//# sourceMappingURL=select-DBgGnY92.js.map
