import { jsx as t, jsxs as m } from "react/jsx-runtime";
import * as se from "@radix-ui/react-checkbox";
import { CheckIcon as he, SearchIcon as Se, XCircle as ye, ChevronDown as ce, ChevronLeftIcon as Ne, ChevronRightIcon as ve, ChevronDownIcon as ke, CalendarIcon as ge } from "lucide-react";
import * as i from "react";
import { F as Ce, c as n, L as K, B as $, b as ie, S as xe } from "./textarea-Bt2ohije.js";
import { Command as W } from "cmdk";
import "@radix-ui/react-dialog";
import { startOfMonth as Y, format as P, setSeconds as de, setMinutes as le, setHours as ue, endOfDay as De, startOfDay as Me, endOfWeek as _e, startOfWeek as Te, endOfMonth as me, subWeeks as fe, subMonths as J } from "date-fns";
import * as B from "@radix-ui/react-scroll-area";
import { getDefaultClassNames as be, DayPicker as Re } from "react-day-picker";
import * as G from "@radix-ui/react-popover";
function Ue({
  className: e,
  size: a = "md",
  ...c
}) {
  const d = Ce[a ?? "md"];
  return /* @__PURE__ */ t(
    se.Root,
    {
      "data-slot": "checkbox",
      "data-size": a,
      className: n(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        d.icon,
        e
      ),
      ...c,
      children: /* @__PURE__ */ t(
        se.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ t(he, { className: d.icon })
        }
      )
    }
  );
}
function ze({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    W,
    {
      "data-slot": "command",
      className: n(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...a
    }
  );
}
function Ee({
  className: e,
  label: a,
  error: c,
  required: d,
  id: u,
  ...x
}) {
  const l = a || c, f = /* @__PURE__ */ t("div", { className: "px-1 pt-1", children: /* @__PURE__ */ m(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: n(
        "flex h-9 items-center gap-2 rounded-md border px-3",
        c && "border-destructive"
      ),
      children: [
        /* @__PURE__ */ t(Se, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ t(
          W.Input,
          {
            id: u,
            "data-slot": "command-input",
            "aria-invalid": !!c,
            className: n(
              "placeholder:text-muted-foreground flex h-10 w-full bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              c && "focus-visible:ring-destructive",
              e
            ),
            ...x
          }
        )
      ]
    }
  ) });
  return l ? /* @__PURE__ */ m("div", { className: "flex flex-col gap-1", children: [
    a && /* @__PURE__ */ m(K, { htmlFor: u, children: [
      a,
      d && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    f,
    c && /* @__PURE__ */ t("div", { className: "text-destructive text-sm", role: "alert", children: c })
  ] }) : f;
}
function Ie({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    W.List,
    {
      "data-slot": "command-list",
      className: n("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
      ...a
    }
  );
}
function He({ ...e }) {
  return /* @__PURE__ */ t(
    W.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function Pe({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t(
    W.Group,
    {
      "data-slot": "command-group",
      className: n(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...a
    }
  );
}
function $e({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    W.Item,
    {
      "data-slot": "command-item",
      className: n(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...a
    }
  );
}
function ne({ ...e }) {
  return /* @__PURE__ */ t(G.Root, { "data-slot": "popover", ...e });
}
function oe({ ...e }) {
  return /* @__PURE__ */ t(G.Trigger, { "data-slot": "popover-trigger", ...e });
}
function ae({
  className: e,
  align: a = "center",
  sideOffset: c = 4,
  ...d
}) {
  return /* @__PURE__ */ t(G.Portal, { children: /* @__PURE__ */ t(
    G.Content,
    {
      "data-slot": "popover-content",
      align: a,
      sideOffset: c,
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...d
    }
  ) });
}
function Xe({ ...e }) {
  return /* @__PURE__ */ t(G.Anchor, { "data-slot": "popover-anchor", ...e });
}
function Ze({
  options: e,
  value: a,
  onChange: c,
  label: d,
  error: u,
  required: x,
  placeholder: l = "Select option...",
  searchPlaceholder: f = "Search...",
  emptyMessage: s = "No results found.",
  disabled: p = !1,
  readonly: h = !1,
  size: y = "md",
  showClearIcon: C = !0,
  showArrowIcon: D = !0,
  suffix: k,
  className: T,
  triggerClassName: I,
  popoverClassName: r
}) {
  const [o, b] = i.useState(!1), w = i.useMemo(
    () => e.find((g) => g.id === a),
    [e, a]
  ), E = !p && !h && !!a, A = (g) => {
    c?.(g.id, g), b(!1);
  }, M = (g) => {
    g.preventDefault(), g.stopPropagation(), E && c?.("", void 0);
  }, _ = /* @__PURE__ */ m(ne, { open: o, onOpenChange: b, children: [
    /* @__PURE__ */ t(oe, { asChild: !0, children: /* @__PURE__ */ m(
      $,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": o,
        disabled: p,
        size: y,
        className: n(
          "w-full justify-between group/combobox",
          !a && "text-muted-foreground",
          u && "border-destructive",
          I
        ),
        children: [
          /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: w ? w.name : l }),
          /* @__PURE__ */ m("div", { className: "flex items-center gap-1 shrink-0 ml-2", children: [
            a && E ? /* @__PURE__ */ m(
              "span",
              {
                onMouseDown: (g) => {
                  g.preventDefault(), g.stopPropagation();
                },
                onClick: M,
                className: "cursor-pointer",
                children: [
                  C && /* @__PURE__ */ t(ye, { className: "text-muted-foreground hidden group-hover/combobox:block h-4 w-4" }),
                  D && /* @__PURE__ */ t(ce, { className: "text-muted-foreground block group-hover/combobox:hidden h-4 w-4" })
                ]
              }
            ) : D && /* @__PURE__ */ t(ce, { className: "text-muted-foreground h-4 w-4" }),
            k
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      ae,
      {
        className: n("w-(--radix-popover-trigger-width) p-0", r),
        align: "start",
        children: /* @__PURE__ */ m(ze, { children: [
          /* @__PURE__ */ t(Ee, { placeholder: f }),
          /* @__PURE__ */ m(Ie, { children: [
            /* @__PURE__ */ t(He, { children: s }),
            /* @__PURE__ */ t(Pe, { children: e.map((g) => /* @__PURE__ */ m(
              $e,
              {
                value: g.name,
                disabled: g.disabled,
                onSelect: () => A(g),
                className: "flex items-center justify-between gap-2",
                children: [
                  /* @__PURE__ */ t("span", { className: "flex-1 truncate", children: g.name }),
                  /* @__PURE__ */ t(
                    he,
                    {
                      className: n(
                        "h-4 w-4 shrink-0 text-primary",
                        a === g.id ? "opacity-100" : "opacity-0"
                      )
                    }
                  )
                ]
              },
              g.id
            )) })
          ] })
        ] })
      }
    )
  ] });
  return !d && !u ? /* @__PURE__ */ t("div", { className: n("w-full", T), children: _ }) : /* @__PURE__ */ m("div", { className: n("w-full", T), children: [
    d && /* @__PURE__ */ m(K, { className: "text-foreground leading-5 block", children: [
      d,
      x && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: d ? "mt-1" : "", children: _ }),
    u && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: u })
  ] });
}
function we({
  className: e,
  classNames: a,
  showOutsideDays: c = !0,
  captionLayout: d = "label",
  buttonVariant: u = "ghost",
  formatters: x,
  components: l,
  ...f
}) {
  const s = be();
  return /* @__PURE__ */ t(
    Re,
    {
      showOutsideDays: c,
      weekStartsOn: 1,
      className: n(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: d,
      formatters: {
        formatMonthDropdown: (p) => {
          const h = f.locale ? typeof f.locale == "string" ? f.locale : f.locale.code || "default" : "default";
          return p.toLocaleString(h, { month: "short" });
        },
        ...x
      },
      classNames: {
        root: n("w-fit", s.root),
        months: n("flex gap-4 flex-col md:flex-row relative", s.months),
        month: n("flex flex-col w-full gap-4", s.month),
        nav: n(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          s.nav
        ),
        button_previous: n(
          ie({ variant: u }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          s.button_previous
        ),
        button_next: n(
          ie({ variant: u }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          s.button_next
        ),
        month_caption: n(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          s.month_caption
        ),
        dropdowns: n(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          s.dropdowns
        ),
        dropdown_root: n(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          s.dropdown_root
        ),
        dropdown: n("absolute bg-popover inset-0 opacity-0", s.dropdown),
        caption_label: n(
          "select-none font-medium",
          d === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          s.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: n("flex", s.weekdays),
        weekday: n(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          s.weekday
        ),
        week: n("flex w-full mt-1", s.week),
        week_number_header: n("select-none w-(--cell-size)", s.week_number_header),
        week_number: n(
          "text-[0.8rem] select-none text-muted-foreground",
          s.week_number
        ),
        day: n(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          f.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          s.day
        ),
        range_start: n("rounded-l-md bg-accent", s.range_start),
        range_middle: n("rounded-none", s.range_middle),
        range_end: n("rounded-r-md bg-accent", s.range_end),
        today: n("bg-accent text-accent-foreground !rounded-full", s.today),
        outside: n(
          "text-muted-foreground aria-selected:text-muted-foreground",
          s.outside
        ),
        disabled: n("text-muted-foreground opacity-50", s.disabled),
        hidden: n("invisible", s.hidden),
        ...a
      },
      components: {
        ...l,
        CaptionLabel: ({ className: p, ...h }) => /* @__PURE__ */ t("div", { className: n(p), ...h }),
        Root: ({ className: p, rootRef: h, ...y }) => /* @__PURE__ */ t("div", { "data-slot": "calendar", ref: h, className: n(p), ...y }),
        Chevron: ({ className: p, orientation: h, ...y }) => h === "left" ? /* @__PURE__ */ t(Ne, { className: n("size-4", p), ...y }) : h === "right" ? /* @__PURE__ */ t(ve, { className: n("size-4", p), ...y }) : /* @__PURE__ */ t(ke, { className: n("size-4", p), ...y }),
        DayButton: Ae,
        WeekNumber: ({ children: p, ...h }) => /* @__PURE__ */ t("td", { ...h, children: /* @__PURE__ */ t("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: p }) })
      },
      ...f
    }
  );
}
function Ae({
  className: e,
  day: a,
  modifiers: c,
  ...d
}) {
  const u = be(), x = i.useRef(null);
  i.useEffect(() => {
    c.focused && x.current?.focus();
  }, [c.focused]);
  const l = c.today, f = c.selected && !c.range_start && !c.range_end && !c.range_middle, s = c.range_start, p = c.range_end, h = c.range_middle;
  return /* @__PURE__ */ m(
    $,
    {
      ref: x,
      variant: "ghost",
      size: "icon",
      "data-day": a.date.toLocaleDateString(),
      "data-selected-single": f,
      "data-range-start": s,
      "data-range-end": p,
      "data-range-middle": h,
      className: n(
        "data-[selected-single=true]:!bg-primary data-[selected-single=true]:!text-primary-foreground",
        "data-[range-middle=true]:!bg-accent data-[range-middle=true]:!text-accent-foreground",
        "data-[range-start=true]:!bg-primary data-[range-start=true]:!text-primary-foreground",
        "data-[range-end=true]:!bg-primary data-[range-end=true]:!text-primary-foreground",
        "dark:hover:text-accent-foreground",
        "flex aspect-square h-10 w-10 flex-col gap-0.5 leading-none font-normal text-sm p-1.5 group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 !rounded-full",
        "[&>span]:text-sm [&>span]:font-normal",
        u.day,
        e
      ),
      ...d,
      children: [
        /* @__PURE__ */ t("span", { children: d.children }),
        l && /* @__PURE__ */ t("div", { className: "h-1 w-1 rounded-full bg-current opacity-70" })
      ]
    }
  );
}
function V({
  className: e,
  children: a,
  ...c
}) {
  return /* @__PURE__ */ m(
    B.Root,
    {
      "data-slot": "scroll-area",
      className: n("relative", e),
      ...c,
      children: [
        /* @__PURE__ */ t(
          B.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: a
          }
        ),
        /* @__PURE__ */ t(je, {}),
        /* @__PURE__ */ t(B.Corner, {})
      ]
    }
  );
}
function je({
  className: e,
  orientation: a = "vertical",
  ...c
}) {
  return /* @__PURE__ */ t(
    B.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: a,
      className: n(
        "flex touch-none p-px transition-colors select-none",
        a === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        a === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...c,
      children: /* @__PURE__ */ t(
        B.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
function Oe({
  value: e,
  onChange: a,
  locale: c,
  monthNames: d,
  disabled: u,
  className: x
}) {
  const [l, f] = i.useState(() => e ? e.getFullYear() : (/* @__PURE__ */ new Date()).getFullYear()), [s, p] = i.useState(() => e ? e.getMonth() : (/* @__PURE__ */ new Date()).getMonth()), h = i.useRef(null), y = i.useRef(null);
  i.useEffect(() => {
    if (e) {
      const r = e.getFullYear(), o = e.getMonth();
      (l !== r || s !== o) && (f(r), p(o));
    } else {
      const r = /* @__PURE__ */ new Date(), o = r.getFullYear(), b = r.getMonth();
      (l !== o || s !== b) && (f(o), p(b));
    }
  }, [e]), i.useEffect(() => {
    if (!h.current) return;
    const r = setTimeout(() => {
      const o = h.current?.querySelector(
        `[data-month="${s}"]`
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
    return () => clearTimeout(r);
  }, [s]), i.useEffect(() => {
    if (!y.current) return;
    const r = setTimeout(() => {
      const o = y.current?.querySelector(
        `[data-year="${l}"]`
      );
      if (o && y.current) {
        const b = y.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (b) {
          const w = o.offsetTop;
          b.scrollTo({ top: w, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(r);
  }, [l]);
  const C = i.useCallback(
    (r) => {
      p(r);
      const o = new Date(l, r, 1);
      a(Y(o));
    },
    [l, a]
  ), D = i.useCallback(
    (r) => {
      f(r);
      const o = new Date(r, s, 1);
      a(Y(o));
    },
    [s, a]
  ), k = i.useMemo(() => {
    if (d && d.length === 12)
      return d;
    const r = typeof c == "string" ? c : c?.code || "en-US", o = new Intl.DateTimeFormat(r, { month: "long" });
    return Array.from({ length: 12 }, (b, w) => {
      const E = new Date(2024, w, 1);
      return o.format(E);
    });
  }, [c, d]), T = i.useMemo(
    () => Array.from({ length: 100 }, (r, o) => (/* @__PURE__ */ new Date()).getFullYear() - 50 + o),
    []
  ), I = i.useMemo(() => e ? `${k[s]} ${l}` : `${k[(/* @__PURE__ */ new Date()).getMonth()]} ${(/* @__PURE__ */ new Date()).getFullYear()}`, [e, k, s, l]);
  return /* @__PURE__ */ m("div", { className: n("flex flex-col h-full", x), children: [
    /* @__PURE__ */ t("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ t("div", { className: "font-medium text-lg", children: I }) }),
    /* @__PURE__ */ m("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ t(V, { className: "w-30 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: h, className: "px-2", children: k.map((r, o) => {
        const b = s === o, w = u ? u(new Date(l, o, 1)) : !1;
        return /* @__PURE__ */ t(
          "div",
          {
            "data-month": o,
            onClick: () => !w && C(o),
            className: n(
              "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
              b ? "bg-secondary" : "hover:bg-accent",
              w && "opacity-50 cursor-not-allowed"
            ),
            children: r
          },
          o
        );
      }) }) }),
      /* @__PURE__ */ t(V, { className: "flex-1 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: y, className: "px-2", children: T.map((r) => /* @__PURE__ */ t(
        "div",
        {
          "data-year": r,
          onClick: () => D(r),
          className: n(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            l === r ? "bg-secondary" : "hover:bg-accent"
          ),
          children: r
        },
        r
      )) }) })
    ] })
  ] });
}
function pe({ value: e, onChange: a, showSeconds: c = !0, className: d }) {
  const u = i.useRef(null), x = i.useRef(null), l = i.useRef(null), f = parseInt(e.hour, 10) || 0, s = parseInt(e.minute, 10) || 0, p = parseInt(e.second, 10) || 0, h = Array.from({ length: 24 }, (r, o) => o), y = Array.from({ length: 60 }, (r, o) => o), C = Array.from({ length: 60 }, (r, o) => o);
  i.useEffect(() => {
    const r = setTimeout(() => {
      if (u.current) {
        const o = u.current.querySelector(
          `[data-hour="${f}"]`
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
    return () => clearTimeout(r);
  }, [f]), i.useEffect(() => {
    const r = setTimeout(() => {
      if (x.current) {
        const o = x.current.querySelector(
          `[data-minute="${s}"]`
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
    return () => clearTimeout(r);
  }, [s]), i.useEffect(() => {
    if (!c) return;
    const r = setTimeout(() => {
      if (l.current) {
        const o = l.current.querySelector(
          `[data-second="${p}"]`
        );
        if (o) {
          const b = l.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (b) {
            const w = o.offsetTop;
            b.scrollTo({ top: w, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(r);
  }, [p, c]);
  const D = (r) => {
    a({
      ...e,
      hour: r.toString().padStart(2, "0")
    });
  }, k = (r) => {
    a({
      ...e,
      minute: r.toString().padStart(2, "0")
    });
  }, T = (r) => {
    a({
      ...e,
      second: r.toString().padStart(2, "0")
    });
  }, I = `${e.hour}:${e.minute}${c ? `:${e.second}` : ""}`;
  return /* @__PURE__ */ m("div", { className: n("flex flex-col h-full border-l", d), children: [
    /* @__PURE__ */ t("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ t("div", { className: "font-medium text-lg", children: I }) }),
    /* @__PURE__ */ m("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ t(V, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: u, className: "px-2", children: h.map((r) => /* @__PURE__ */ t(
        "div",
        {
          "data-hour": r,
          onClick: () => D(r),
          className: n(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            f === r ? "bg-secondary" : "hover:bg-accent"
          ),
          children: r.toString().padStart(2, "0")
        },
        r
      )) }) }),
      /* @__PURE__ */ t(V, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:overflow-hidden", children: /* @__PURE__ */ t("div", { ref: x, className: "px-2", children: y.map((r) => /* @__PURE__ */ t(
        "div",
        {
          "data-minute": r,
          onClick: () => k(r),
          className: n(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            s === r ? "bg-secondary" : "hover:bg-accent"
          ),
          children: r.toString().padStart(2, "0")
        },
        r
      )) }) }),
      c && /* @__PURE__ */ t(V, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: l, className: "px-2", children: C.map((r) => /* @__PURE__ */ t(
        "div",
        {
          "data-second": r,
          onClick: () => T(r),
          className: n(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            p === r ? "bg-secondary" : "hover:bg-accent"
          ),
          children: r.toString().padStart(2, "0")
        },
        r
      )) }) })
    ] })
  ] });
}
function Je({
  value: e,
  onChange: a,
  placeholder: c = "Pick a date",
  dateFormat: d = "dd/MM/yyyy",
  showTime: u = !1,
  timeOnly: x = !1,
  mode: l = "single",
  label: f,
  error: s,
  required: p,
  disabled: h = !1,
  disabledPast: y = !1,
  disabledFuture: C = !1,
  onDisabled: D,
  size: k = "md",
  className: T,
  triggerClassName: I,
  popoverClassName: r,
  locale: o,
  cancelText: b,
  applyText: w,
  monthNames: E,
  ...A
}) {
  const [M, _] = i.useState(!1), [g, N] = i.useState(e), [L, j] = i.useState(() => e || /* @__PURE__ */ new Date()), [R, z] = i.useState(() => e ? {
    hour: e.getHours().toString().padStart(2, "0"),
    minute: e.getMinutes().toString().padStart(2, "0"),
    second: e.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }), q = i.useRef(e), U = i.useRef(e || /* @__PURE__ */ new Date()), Q = () => e ? {
    hour: e.getHours().toString().padStart(2, "0"),
    minute: e.getMinutes().toString().padStart(2, "0"),
    second: e.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }, X = i.useRef(Q());
  i.useEffect(() => {
    M && (q.current = e, U.current = e || /* @__PURE__ */ new Date(), X.current = e ? {
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }, x ? z(e ? {
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }) : l === "month" ? N(e ? Y(e) : Y(/* @__PURE__ */ new Date())) : (N(e), e ? (j(e), u && z({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    })) : (j(/* @__PURE__ */ new Date()), u && z({ hour: "00", minute: "00", second: "00" }))));
  }, [M, e, u, x, l]), i.useEffect(() => {
    !M && !x ? (N(e), e && (j(e), u && z({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    }))) : !M && x && e && z({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    });
  }, [e, u, x, M]);
  const ee = () => {
    if (x) {
      const H = de(
        le(ue(e || /* @__PURE__ */ new Date(), parseInt(R.hour, 10)), parseInt(R.minute, 10)),
        parseInt(R.second, 10)
      );
      a?.(H);
    } else if (l === "month")
      a?.(g ? Y(g) : void 0);
    else if (g) {
      let S = g;
      u && (S = ue(S, parseInt(R.hour, 10)), S = le(S, parseInt(R.minute, 10)), S = de(S, parseInt(R.second, 10))), a?.(S);
    } else
      a?.(void 0);
    _(!1);
  }, te = () => {
    N(q.current), j(U.current), u && z(X.current), _(!1);
  }, re = i.useMemo(() => {
    if (!e) return c;
    const S = o && typeof o != "string" ? { locale: o } : void 0;
    if (x)
      return /[Hhms]/.test(d) ? P(e, d, S) : P(e, "HH:mm:ss", S);
    if (l === "month") {
      if (o) {
        const H = typeof o == "string" ? o : o?.code || "en-US";
        return new Intl.DateTimeFormat(H, { month: "2-digit", year: "numeric" }).format(e);
      }
      return P(e, "MM/yyyy", S);
    }
    return u ? /[Hhms]/.test(d) ? P(e, d, S) : P(e, `${d} HH:mm:ss`, S) : P(e, d, S);
  }, [e, d, u, x, l, c, o]), F = i.useCallback(
    (S) => {
      if (h) return !0;
      const H = /* @__PURE__ */ new Date();
      H.setHours(0, 0, 0, 0);
      const Z = new Date(S);
      return Z.setHours(0, 0, 0, 0), y && Z < H || C && Z > H ? !0 : D ? D(S) : !1;
    },
    [h, y, C, D]
  ), v = i.useMemo(
    () => ({
      ...A,
      mode: "single",
      selected: g,
      onSelect: N,
      defaultMonth: L,
      month: L,
      onMonthChange: j,
      captionLayout: "dropdown",
      disabled: F,
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: o
    }),
    [A, g, L, F, o]
  ), O = /* @__PURE__ */ m(ne, { open: M, onOpenChange: _, children: [
    /* @__PURE__ */ t(oe, { asChild: !0, children: /* @__PURE__ */ m(
      $,
      {
        variant: "outline",
        size: k,
        disabled: h,
        className: n(
          "group w-full justify-between",
          !e && "text-muted-foreground",
          s && "border-destructive",
          I
        ),
        children: [
          /* @__PURE__ */ t("span", { children: re }),
          /* @__PURE__ */ t(ge, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      ae,
      {
        className: n("flex w-auto flex-col gap-2 p-0", r),
        align: "start",
        children: /* @__PURE__ */ m("div", { className: "flex flex-col gap-2 pb-2", children: [
          x ? /* @__PURE__ */ t("div", { className: "flex h-[350px]", children: /* @__PURE__ */ t(
            pe,
            {
              value: R,
              onChange: z,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : l === "month" ? /* @__PURE__ */ t("div", { className: "flex h-[350px]", children: /* @__PURE__ */ t(
            Oe,
            {
              value: g,
              onChange: N,
              locale: o,
              monthNames: E,
              disabled: F,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : /* @__PURE__ */ m("div", { className: n("flex h-[350px]", u && "overflow-hidden"), children: [
            /* @__PURE__ */ t(we, { initialFocus: !0, ...v }),
            u && /* @__PURE__ */ t(
              pe,
              {
                value: R,
                onChange: z,
                className: "min-h-0 h-full shrink-0"
              }
            )
          ] }),
          /* @__PURE__ */ t(xe, { className: "shrink-0" }),
          /* @__PURE__ */ m("div", { className: "flex justify-end gap-2 px-2 shrink-0", children: [
            /* @__PURE__ */ t($, { variant: "secondary", size: "sm", onClick: te, children: b || "Cancel" }),
            /* @__PURE__ */ t($, { size: "sm", onClick: ee, children: w || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return f || s ? /* @__PURE__ */ m("div", { className: n("w-full", T), children: [
    f && /* @__PURE__ */ m(K, { className: "text-foreground leading-5 block", children: [
      f,
      p && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: f ? "mt-1" : "", children: O }),
    s && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: s })
  ] }) : /* @__PURE__ */ t("div", { className: n("w-full", T), children: O });
}
const Ye = () => {
  const e = /* @__PURE__ */ new Date();
  return [
    {
      label: "Hôm nay",
      range: {
        from: Me(e),
        to: De(e)
      }
    },
    {
      label: "Tuần trước",
      range: {
        from: Te(fe(e, 1), { weekStartsOn: 1 }),
        to: _e(fe(e, 1), { weekStartsOn: 1 })
      }
    },
    {
      label: "Tháng trước",
      range: {
        from: Y(J(e, 1)),
        to: me(J(e, 1))
      }
    },
    {
      label: "3 tháng trước",
      range: {
        from: Y(J(e, 3)),
        to: me(J(e, 3))
      }
    }
  ];
};
function Ke({
  value: e,
  onChange: a,
  placeholder: c = { from: "From date", to: "To date" },
  dateFormat: d = "dd/MM/yyyy",
  presets: u,
  showPresets: x,
  label: l,
  error: f,
  required: s,
  disabled: p = !1,
  disabledPast: h = !1,
  disabledFuture: y = !1,
  onDisabled: C,
  size: D = "md",
  className: k,
  triggerClassName: T,
  popoverClassName: I,
  locale: r,
  cancelText: o,
  applyText: b,
  ...w
}) {
  const [E, A] = i.useState(!1), [M, _] = i.useState(e), [g, N] = i.useState(() => e?.to || e?.from || /* @__PURE__ */ new Date()), L = i.useRef(e), j = i.useRef(e?.to || e?.from || /* @__PURE__ */ new Date());
  i.useEffect(() => {
    E && (L.current = e, j.current = e?.to || e?.from || /* @__PURE__ */ new Date(), _(e), e?.to ? N(e.to) : e?.from ? N(e.from) : N(/* @__PURE__ */ new Date()));
  }, [E, e]), i.useEffect(() => {
    _(e), e?.to ? N(e.to) : e?.from && N(e.from);
  }, [e]);
  const R = i.useCallback(
    (v) => {
      if (p) return !0;
      const O = /* @__PURE__ */ new Date();
      O.setHours(0, 0, 0, 0);
      const S = new Date(v);
      return S.setHours(0, 0, 0, 0), h && S < O || y && S > O ? !0 : C ? C(v) : !1;
    },
    [p, h, y, C]
  ), z = i.useMemo(() => Ye(), []), q = u ?? z, U = x !== void 0 ? x : q.length > 0, Q = () => {
    a?.(M), A(!1);
  }, X = () => {
    _(L.current), N(j.current), A(!1);
  }, ee = (v) => {
    _(v.range), v.range.to ? N(v.range.to) : v.range.from && N(v.range.from);
  }, te = i.useMemo(() => {
    if (!e?.from) return c.from || "Pick a date";
    const v = r && typeof r != "string" ? { locale: r } : void 0;
    return e.from && e.to ? `${P(e.from, d, v)} - ${P(e.to, d, v)}` : P(e.from, d, v);
  }, [e, d, c, r]), re = i.useMemo(
    () => ({
      ...w,
      mode: "range",
      selected: M,
      onSelect: _,
      defaultMonth: g,
      month: g,
      onMonthChange: N,
      disabled: R,
      captionLayout: "dropdown",
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: r
    }),
    [w, M, g, R, r]
  ), F = /* @__PURE__ */ m(ne, { open: E, onOpenChange: A, children: [
    /* @__PURE__ */ t(oe, { asChild: !0, children: /* @__PURE__ */ m(
      $,
      {
        variant: "outline",
        size: D,
        disabled: p,
        className: n(
          "group w-full justify-between",
          !e?.from && "text-muted-foreground",
          f && "border-destructive",
          T
        ),
        children: [
          /* @__PURE__ */ t("span", { children: te }),
          /* @__PURE__ */ t(ge, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      ae,
      {
        className: n("flex w-auto flex-col gap-2 p-0 pb-2", I),
        align: "start",
        children: /* @__PURE__ */ m("div", { className: "flex flex-col gap-2 pb-2", children: [
          /* @__PURE__ */ m("div", { className: "flex", children: [
            U && /* @__PURE__ */ t("div", { className: "border-r p-2 w-fit", children: /* @__PURE__ */ t("div", { className: "space-y-1", children: q.map((v, O) => /* @__PURE__ */ t(
              $,
              {
                variant: "ghost",
                size: "sm",
                className: "block text-left font-normal",
                onClick: () => ee(v),
                children: v.label
              },
              O
            )) }) }),
            /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(we, { initialFocus: !0, ...re }) })
          ] }),
          /* @__PURE__ */ t(xe, {}),
          /* @__PURE__ */ m("div", { className: "flex justify-end gap-2 px-2", children: [
            /* @__PURE__ */ t($, { variant: "secondary", onClick: X, children: o || "Cancel" }),
            /* @__PURE__ */ t($, { onClick: Q, children: b || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return l || f ? /* @__PURE__ */ m("div", { className: n("w-full", k), children: [
    l && /* @__PURE__ */ m(K, { className: "text-foreground leading-5 block", children: [
      l,
      s && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: l ? "mt-1" : "", children: F }),
    f && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: f })
  ] }) : /* @__PURE__ */ t("div", { className: n("w-full", k), children: F });
}
export {
  Ue as C,
  Je as D,
  Oe as M,
  ne as P,
  V as S,
  pe as T,
  Ze as a,
  Ke as b,
  oe as c,
  ae as d,
  ze as e,
  Ee as f,
  Ie as g,
  He as h,
  Pe as i,
  $e as j,
  we as k,
  Ae as l,
  Xe as m,
  je as n
};
//# sourceMappingURL=date-range-picker-D-OnnMm4.js.map
