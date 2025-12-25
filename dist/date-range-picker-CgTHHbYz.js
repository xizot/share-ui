import { jsx as t, jsxs as w } from "react/jsx-runtime";
import { startOfMonth as j, format as H, setSeconds as te, setMinutes as re, setHours as ne, endOfDay as ge, startOfDay as xe, endOfWeek as we, startOfWeek as Se, endOfMonth as oe, subWeeks as se, subMonths as K } from "date-fns";
import { ChevronLeftIcon as be, ChevronRightIcon as ye, ChevronDownIcon as Ne, CalendarIcon as ie } from "lucide-react";
import * as a from "react";
import { c as o, b as ae, B as A, S as le, L as de } from "./input-D0NE8tsx.js";
import * as F from "@radix-ui/react-scroll-area";
import { getDefaultClassNames as fe, DayPicker as ke } from "react-day-picker";
import * as V from "@radix-ui/react-popover";
function ue({ ...e }) {
  return /* @__PURE__ */ t(V.Root, { "data-slot": "popover", ...e });
}
function me({ ...e }) {
  return /* @__PURE__ */ t(V.Trigger, { "data-slot": "popover-trigger", ...e });
}
function pe({
  className: e,
  align: l = "center",
  sideOffset: c = 4,
  ...d
}) {
  return /* @__PURE__ */ t(V.Portal, { children: /* @__PURE__ */ t(
    V.Content,
    {
      "data-slot": "popover-content",
      align: l,
      sideOffset: c,
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...d
    }
  ) });
}
function Ee({ ...e }) {
  return /* @__PURE__ */ t(V.Anchor, { "data-slot": "popover-anchor", ...e });
}
function he({
  className: e,
  classNames: l,
  showOutsideDays: c = !0,
  captionLayout: d = "label",
  buttonVariant: m = "ghost",
  formatters: h,
  components: i,
  ...p
}) {
  const s = fe();
  return /* @__PURE__ */ t(
    ke,
    {
      showOutsideDays: c,
      weekStartsOn: 1,
      className: o(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: d,
      formatters: {
        formatMonthDropdown: (f) => {
          const u = p.locale ? typeof p.locale == "string" ? p.locale : p.locale.code || "default" : "default";
          return f.toLocaleString(u, { month: "short" });
        },
        ...h
      },
      classNames: {
        root: o("w-fit", s.root),
        months: o("flex gap-4 flex-col md:flex-row relative", s.months),
        month: o("flex flex-col w-full gap-4", s.month),
        nav: o(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          s.nav
        ),
        button_previous: o(
          ae({ variant: m }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          s.button_previous
        ),
        button_next: o(
          ae({ variant: m }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          s.button_next
        ),
        month_caption: o(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          s.month_caption
        ),
        dropdowns: o(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          s.dropdowns
        ),
        dropdown_root: o(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          s.dropdown_root
        ),
        dropdown: o("absolute bg-popover inset-0 opacity-0", s.dropdown),
        caption_label: o(
          "select-none font-medium",
          d === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          s.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: o("flex", s.weekdays),
        weekday: o(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          s.weekday
        ),
        week: o("flex w-full mt-1", s.week),
        week_number_header: o("select-none w-(--cell-size)", s.week_number_header),
        week_number: o(
          "text-[0.8rem] select-none text-muted-foreground",
          s.week_number
        ),
        day: o(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          p.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          s.day
        ),
        range_start: o("rounded-l-md bg-accent", s.range_start),
        range_middle: o("rounded-none", s.range_middle),
        range_end: o("rounded-r-md bg-accent", s.range_end),
        today: o("bg-accent text-accent-foreground !rounded-full", s.today),
        outside: o(
          "text-muted-foreground aria-selected:text-muted-foreground",
          s.outside
        ),
        disabled: o("text-muted-foreground opacity-50", s.disabled),
        hidden: o("invisible", s.hidden),
        ...l
      },
      components: {
        ...i,
        CaptionLabel: ({ className: f, ...u }) => /* @__PURE__ */ t("div", { className: o(f), ...u }),
        Root: ({ className: f, rootRef: u, ...S }) => /* @__PURE__ */ t("div", { "data-slot": "calendar", ref: u, className: o(f), ...S }),
        Chevron: ({ className: f, orientation: u, ...S }) => u === "left" ? /* @__PURE__ */ t(be, { className: o("size-4", f), ...S }) : u === "right" ? /* @__PURE__ */ t(ye, { className: o("size-4", f), ...S }) : /* @__PURE__ */ t(Ne, { className: o("size-4", f), ...S }),
        DayButton: De,
        WeekNumber: ({ children: f, ...u }) => /* @__PURE__ */ t("td", { ...u, children: /* @__PURE__ */ t("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: f }) })
      },
      ...p
    }
  );
}
function De({
  className: e,
  day: l,
  modifiers: c,
  ...d
}) {
  const m = fe(), h = a.useRef(null);
  a.useEffect(() => {
    c.focused && h.current?.focus();
  }, [c.focused]);
  const i = c.today, p = c.selected && !c.range_start && !c.range_end && !c.range_middle, s = c.range_start, f = c.range_end, u = c.range_middle;
  return /* @__PURE__ */ w(
    A,
    {
      ref: h,
      variant: "ghost",
      size: "icon",
      "data-day": l.date.toLocaleDateString(),
      "data-selected-single": p,
      "data-range-start": s,
      "data-range-end": f,
      "data-range-middle": u,
      className: o(
        "data-[selected-single=true]:!bg-primary data-[selected-single=true]:!text-primary-foreground",
        "data-[range-middle=true]:!bg-accent data-[range-middle=true]:!text-accent-foreground",
        "data-[range-start=true]:!bg-primary data-[range-start=true]:!text-primary-foreground",
        "data-[range-end=true]:!bg-primary data-[range-end=true]:!text-primary-foreground",
        "dark:hover:text-accent-foreground",
        "flex aspect-square h-10 w-10 flex-col gap-0.5 leading-none font-normal text-sm p-1.5 group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 !rounded-full",
        "[&>span]:text-sm [&>span]:font-normal",
        m.day,
        e
      ),
      ...d,
      children: [
        /* @__PURE__ */ t("span", { children: d.children }),
        i && /* @__PURE__ */ t("div", { className: "h-1 w-1 rounded-full bg-current opacity-70" })
      ]
    }
  );
}
function B({
  className: e,
  children: l,
  ...c
}) {
  return /* @__PURE__ */ w(
    F.Root,
    {
      "data-slot": "scroll-area",
      className: o("relative", e),
      ...c,
      children: [
        /* @__PURE__ */ t(
          F.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: l
          }
        ),
        /* @__PURE__ */ t(Me, {}),
        /* @__PURE__ */ t(F.Corner, {})
      ]
    }
  );
}
function Me({
  className: e,
  orientation: l = "vertical",
  ...c
}) {
  return /* @__PURE__ */ t(
    F.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: l,
      className: o(
        "flex touch-none p-px transition-colors select-none",
        l === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        l === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...c,
      children: /* @__PURE__ */ t(
        F.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
function Ce({
  value: e,
  onChange: l,
  locale: c,
  monthNames: d,
  disabled: m,
  className: h
}) {
  const [i, p] = a.useState(() => e ? e.getFullYear() : (/* @__PURE__ */ new Date()).getFullYear()), [s, f] = a.useState(() => e ? e.getMonth() : (/* @__PURE__ */ new Date()).getMonth()), u = a.useRef(null), S = a.useRef(null);
  a.useEffect(() => {
    if (e) {
      const r = e.getFullYear(), n = e.getMonth();
      (i !== r || s !== n) && (p(r), f(n));
    } else {
      const r = /* @__PURE__ */ new Date(), n = r.getFullYear(), g = r.getMonth();
      (i !== n || s !== g) && (p(n), f(g));
    }
  }, [e]), a.useEffect(() => {
    if (!u.current) return;
    const r = setTimeout(() => {
      const n = u.current?.querySelector(
        `[data-month="${s}"]`
      );
      if (n && u.current) {
        const g = u.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (g) {
          const b = n.offsetTop;
          g.scrollTo({ top: b, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(r);
  }, [s]), a.useEffect(() => {
    if (!S.current) return;
    const r = setTimeout(() => {
      const n = S.current?.querySelector(
        `[data-year="${i}"]`
      );
      if (n && S.current) {
        const g = S.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (g) {
          const b = n.offsetTop;
          g.scrollTo({ top: b, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(r);
  }, [i]);
  const v = a.useCallback(
    (r) => {
      f(r);
      const n = new Date(i, r, 1);
      l(j(n));
    },
    [i, l]
  ), T = a.useCallback(
    (r) => {
      p(r);
      const n = new Date(r, s, 1);
      l(j(n));
    },
    [s, l]
  ), k = a.useMemo(() => {
    if (d && d.length === 12)
      return d;
    const r = typeof c == "string" ? c : c?.code || "en-US", n = new Intl.DateTimeFormat(r, { month: "long" });
    return Array.from({ length: 12 }, (g, b) => {
      const Y = new Date(2024, b, 1);
      return n.format(Y);
    });
  }, [c, d]), E = a.useMemo(
    () => Array.from({ length: 100 }, (r, n) => (/* @__PURE__ */ new Date()).getFullYear() - 50 + n),
    []
  ), I = a.useMemo(() => e ? `${k[s]} ${i}` : `${k[(/* @__PURE__ */ new Date()).getMonth()]} ${(/* @__PURE__ */ new Date()).getFullYear()}`, [e, k, s, i]);
  return /* @__PURE__ */ w("div", { className: o("flex flex-col h-full", h), children: [
    /* @__PURE__ */ t("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ t("div", { className: "font-medium text-lg", children: I }) }),
    /* @__PURE__ */ w("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ t(B, { className: "w-30 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: u, className: "px-2", children: k.map((r, n) => {
        const g = s === n, b = m ? m(new Date(i, n, 1)) : !1;
        return /* @__PURE__ */ t(
          "div",
          {
            "data-month": n,
            onClick: () => !b && v(n),
            className: o(
              "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
              g ? "bg-secondary" : "hover:bg-accent",
              b && "opacity-50 cursor-not-allowed"
            ),
            children: r
          },
          n
        );
      }) }) }),
      /* @__PURE__ */ t(B, { className: "flex-1 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: S, className: "px-2", children: E.map((r) => /* @__PURE__ */ t(
        "div",
        {
          "data-year": r,
          onClick: () => T(r),
          className: o(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            i === r ? "bg-secondary" : "hover:bg-accent"
          ),
          children: r
        },
        r
      )) }) })
    ] })
  ] });
}
function ce({ value: e, onChange: l, showSeconds: c = !0, className: d }) {
  const m = a.useRef(null), h = a.useRef(null), i = a.useRef(null), p = parseInt(e.hour, 10) || 0, s = parseInt(e.minute, 10) || 0, f = parseInt(e.second, 10) || 0, u = Array.from({ length: 24 }, (r, n) => n), S = Array.from({ length: 60 }, (r, n) => n), v = Array.from({ length: 60 }, (r, n) => n);
  a.useEffect(() => {
    const r = setTimeout(() => {
      if (m.current) {
        const n = m.current.querySelector(
          `[data-hour="${p}"]`
        );
        if (n) {
          const g = m.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (g) {
            const b = n.offsetTop;
            g.scrollTo({ top: b, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(r);
  }, [p]), a.useEffect(() => {
    const r = setTimeout(() => {
      if (h.current) {
        const n = h.current.querySelector(
          `[data-minute="${s}"]`
        );
        if (n) {
          const g = h.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (g) {
            const b = n.offsetTop;
            g.scrollTo({ top: b, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(r);
  }, [s]), a.useEffect(() => {
    if (!c) return;
    const r = setTimeout(() => {
      if (i.current) {
        const n = i.current.querySelector(
          `[data-second="${f}"]`
        );
        if (n) {
          const g = i.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (g) {
            const b = n.offsetTop;
            g.scrollTo({ top: b, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(r);
  }, [f, c]);
  const T = (r) => {
    l({
      ...e,
      hour: r.toString().padStart(2, "0")
    });
  }, k = (r) => {
    l({
      ...e,
      minute: r.toString().padStart(2, "0")
    });
  }, E = (r) => {
    l({
      ...e,
      second: r.toString().padStart(2, "0")
    });
  }, I = `${e.hour}:${e.minute}${c ? `:${e.second}` : ""}`;
  return /* @__PURE__ */ w("div", { className: o("flex flex-col h-full border-l", d), children: [
    /* @__PURE__ */ t("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ t("div", { className: "font-medium text-lg", children: I }) }),
    /* @__PURE__ */ w("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ t(B, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: m, className: "px-2", children: u.map((r) => /* @__PURE__ */ t(
        "div",
        {
          "data-hour": r,
          onClick: () => T(r),
          className: o(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            p === r ? "bg-secondary" : "hover:bg-accent"
          ),
          children: r.toString().padStart(2, "0")
        },
        r
      )) }) }),
      /* @__PURE__ */ t(B, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:overflow-hidden", children: /* @__PURE__ */ t("div", { ref: h, className: "px-2", children: S.map((r) => /* @__PURE__ */ t(
        "div",
        {
          "data-minute": r,
          onClick: () => k(r),
          className: o(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            s === r ? "bg-secondary" : "hover:bg-accent"
          ),
          children: r.toString().padStart(2, "0")
        },
        r
      )) }) }),
      c && /* @__PURE__ */ t(B, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: i, className: "px-2", children: v.map((r) => /* @__PURE__ */ t(
        "div",
        {
          "data-second": r,
          onClick: () => E(r),
          className: o(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            f === r ? "bg-secondary" : "hover:bg-accent"
          ),
          children: r.toString().padStart(2, "0")
        },
        r
      )) }) })
    ] })
  ] });
}
function Pe({
  value: e,
  onChange: l,
  placeholder: c = "Pick a date",
  dateFormat: d = "dd/MM/yyyy",
  showTime: m = !1,
  timeOnly: h = !1,
  mode: i = "single",
  label: p,
  error: s,
  required: f,
  disabled: u = !1,
  disabledPast: S = !1,
  disabledFuture: v = !1,
  onDisabled: T,
  size: k = "md",
  className: E,
  triggerClassName: I,
  popoverClassName: r,
  locale: n,
  cancelText: g,
  applyText: b,
  monthNames: Y,
  ...q
}) {
  const [_, R] = a.useState(!1), [D, y] = a.useState(e), [L, P] = a.useState(() => e || /* @__PURE__ */ new Date()), [M, C] = a.useState(() => e ? {
    hour: e.getHours().toString().padStart(2, "0"),
    minute: e.getMinutes().toString().padStart(2, "0"),
    second: e.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }), W = a.useRef(e), U = a.useRef(e || /* @__PURE__ */ new Date()), Q = () => e ? {
    hour: e.getHours().toString().padStart(2, "0"),
    minute: e.getMinutes().toString().padStart(2, "0"),
    second: e.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }, G = a.useRef(Q());
  a.useEffect(() => {
    _ && (W.current = e, U.current = e || /* @__PURE__ */ new Date(), G.current = e ? {
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }, h ? C(e ? {
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }) : i === "month" ? y(e ? j(e) : j(/* @__PURE__ */ new Date())) : (y(e), e ? (P(e), m && C({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    })) : (P(/* @__PURE__ */ new Date()), m && C({ hour: "00", minute: "00", second: "00" }))));
  }, [_, e, m, h, i]), a.useEffect(() => {
    !_ && !h ? (y(e), e && (P(e), m && C({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    }))) : !_ && h && e && C({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    });
  }, [e, m, h, _]);
  const X = () => {
    if (h) {
      const z = te(
        re(ne(e || /* @__PURE__ */ new Date(), parseInt(M.hour, 10)), parseInt(M.minute, 10)),
        parseInt(M.second, 10)
      );
      l?.(z);
    } else if (i === "month")
      l?.(D ? j(D) : void 0);
    else if (D) {
      let x = D;
      m && (x = ne(x, parseInt(M.hour, 10)), x = re(x, parseInt(M.minute, 10)), x = te(x, parseInt(M.second, 10))), l?.(x);
    } else
      l?.(void 0);
    R(!1);
  }, Z = () => {
    y(W.current), P(U.current), m && C(G.current), R(!1);
  }, ee = a.useMemo(() => {
    if (!e) return c;
    const x = n && typeof n != "string" ? { locale: n } : void 0;
    if (h)
      return /[Hhms]/.test(d) ? H(e, d, x) : H(e, "HH:mm:ss", x);
    if (i === "month") {
      if (n) {
        const z = typeof n == "string" ? n : n?.code || "en-US";
        return new Intl.DateTimeFormat(z, { month: "2-digit", year: "numeric" }).format(e);
      }
      return H(e, "MM/yyyy", x);
    }
    return m ? /[Hhms]/.test(d) ? H(e, d, x) : H(e, `${d} HH:mm:ss`, x) : H(e, d, x);
  }, [e, d, m, h, i, c, n]), O = a.useCallback(
    (x) => {
      if (u) return !0;
      const z = /* @__PURE__ */ new Date();
      z.setHours(0, 0, 0, 0);
      const J = new Date(x);
      return J.setHours(0, 0, 0, 0), S && J < z || v && J > z ? !0 : T ? T(x) : !1;
    },
    [u, S, v, T]
  ), N = a.useMemo(
    () => ({
      ...q,
      mode: "single",
      selected: D,
      onSelect: y,
      defaultMonth: L,
      month: L,
      onMonthChange: P,
      captionLayout: "dropdown",
      disabled: O,
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: n
    }),
    [q, D, L, O, n]
  ), $ = /* @__PURE__ */ w(ue, { open: _, onOpenChange: R, children: [
    /* @__PURE__ */ t(me, { asChild: !0, children: /* @__PURE__ */ w(
      A,
      {
        variant: "outline",
        size: k,
        disabled: u,
        className: o(
          "group w-full justify-between",
          !e && "text-muted-foreground",
          s && "border-destructive",
          I
        ),
        children: [
          /* @__PURE__ */ t("span", { children: ee }),
          /* @__PURE__ */ t(ie, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      pe,
      {
        className: o("flex w-auto flex-col gap-2 p-0", r),
        align: "start",
        children: /* @__PURE__ */ w("div", { className: "flex flex-col gap-2 pb-2", children: [
          h ? /* @__PURE__ */ t("div", { className: "flex h-[350px]", children: /* @__PURE__ */ t(
            ce,
            {
              value: M,
              onChange: C,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : i === "month" ? /* @__PURE__ */ t("div", { className: "flex h-[350px]", children: /* @__PURE__ */ t(
            Ce,
            {
              value: D,
              onChange: y,
              locale: n,
              monthNames: Y,
              disabled: O,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : /* @__PURE__ */ w("div", { className: o("flex h-[350px]", m && "overflow-hidden"), children: [
            /* @__PURE__ */ t(he, { initialFocus: !0, ...N }),
            m && /* @__PURE__ */ t(
              ce,
              {
                value: M,
                onChange: C,
                className: "min-h-0 h-full shrink-0"
              }
            )
          ] }),
          /* @__PURE__ */ t(le, { className: "shrink-0" }),
          /* @__PURE__ */ w("div", { className: "flex justify-end gap-2 px-2 shrink-0", children: [
            /* @__PURE__ */ t(A, { variant: "secondary", size: "sm", onClick: Z, children: g || "Cancel" }),
            /* @__PURE__ */ t(A, { size: "sm", onClick: X, children: b || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return p || s ? /* @__PURE__ */ w("div", { className: o("w-full", E), children: [
    p && /* @__PURE__ */ w(de, { className: "text-foreground leading-5 block", children: [
      p,
      f && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: p ? "mt-1" : "", children: $ }),
    s && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: s })
  ] }) : /* @__PURE__ */ t("div", { className: o("w-full", E), children: $ });
}
const ve = () => {
  const e = /* @__PURE__ */ new Date();
  return [
    {
      label: "Hôm nay",
      range: {
        from: xe(e),
        to: ge(e)
      }
    },
    {
      label: "Tuần trước",
      range: {
        from: Se(se(e, 1), { weekStartsOn: 1 }),
        to: we(se(e, 1), { weekStartsOn: 1 })
      }
    },
    {
      label: "Tháng trước",
      range: {
        from: j(K(e, 1)),
        to: oe(K(e, 1))
      }
    },
    {
      label: "3 tháng trước",
      range: {
        from: j(K(e, 3)),
        to: oe(K(e, 3))
      }
    }
  ];
};
function $e({
  value: e,
  onChange: l,
  placeholder: c = { from: "From date", to: "To date" },
  dateFormat: d = "dd/MM/yyyy",
  presets: m,
  showPresets: h,
  label: i,
  error: p,
  required: s,
  disabled: f = !1,
  disabledPast: u = !1,
  disabledFuture: S = !1,
  onDisabled: v,
  size: T = "md",
  className: k,
  triggerClassName: E,
  popoverClassName: I,
  locale: r,
  cancelText: n,
  applyText: g,
  ...b
}) {
  const [Y, q] = a.useState(!1), [_, R] = a.useState(e), [D, y] = a.useState(() => e?.to || e?.from || /* @__PURE__ */ new Date()), L = a.useRef(e), P = a.useRef(e?.to || e?.from || /* @__PURE__ */ new Date());
  a.useEffect(() => {
    Y && (L.current = e, P.current = e?.to || e?.from || /* @__PURE__ */ new Date(), R(e), e?.to ? y(e.to) : e?.from ? y(e.from) : y(/* @__PURE__ */ new Date()));
  }, [Y, e]), a.useEffect(() => {
    R(e), e?.to ? y(e.to) : e?.from && y(e.from);
  }, [e]);
  const M = a.useCallback(
    (N) => {
      if (f) return !0;
      const $ = /* @__PURE__ */ new Date();
      $.setHours(0, 0, 0, 0);
      const x = new Date(N);
      return x.setHours(0, 0, 0, 0), u && x < $ || S && x > $ ? !0 : v ? v(N) : !1;
    },
    [f, u, S, v]
  ), C = a.useMemo(() => ve(), []), W = m ?? C, U = h !== void 0 ? h : W.length > 0, Q = () => {
    l?.(_), q(!1);
  }, G = () => {
    R(L.current), y(P.current), q(!1);
  }, X = (N) => {
    R(N.range), N.range.to ? y(N.range.to) : N.range.from && y(N.range.from);
  }, Z = a.useMemo(() => {
    if (!e?.from) return c.from || "Pick a date";
    const N = r && typeof r != "string" ? { locale: r } : void 0;
    return e.from && e.to ? `${H(e.from, d, N)} - ${H(e.to, d, N)}` : H(e.from, d, N);
  }, [e, d, c, r]), ee = a.useMemo(
    () => ({
      ...b,
      mode: "range",
      selected: _,
      onSelect: R,
      defaultMonth: D,
      month: D,
      onMonthChange: y,
      disabled: M,
      captionLayout: "dropdown",
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: r
    }),
    [b, _, D, M, r]
  ), O = /* @__PURE__ */ w(ue, { open: Y, onOpenChange: q, children: [
    /* @__PURE__ */ t(me, { asChild: !0, children: /* @__PURE__ */ w(
      A,
      {
        variant: "outline",
        size: T,
        disabled: f,
        className: o(
          "group w-full justify-between",
          !e?.from && "text-muted-foreground",
          p && "border-destructive",
          E
        ),
        children: [
          /* @__PURE__ */ t("span", { children: Z }),
          /* @__PURE__ */ t(ie, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      pe,
      {
        className: o("flex w-auto flex-col gap-2 p-0 pb-2", I),
        align: "start",
        children: /* @__PURE__ */ w("div", { className: "flex flex-col gap-2 pb-2", children: [
          /* @__PURE__ */ w("div", { className: "flex", children: [
            U && /* @__PURE__ */ t("div", { className: "border-r p-2 w-fit", children: /* @__PURE__ */ t("div", { className: "space-y-1", children: W.map((N, $) => /* @__PURE__ */ t(
              A,
              {
                variant: "ghost",
                size: "sm",
                className: "block text-left font-normal",
                onClick: () => X(N),
                children: N.label
              },
              $
            )) }) }),
            /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(he, { initialFocus: !0, ...ee }) })
          ] }),
          /* @__PURE__ */ t(le, {}),
          /* @__PURE__ */ w("div", { className: "flex justify-end gap-2 px-2", children: [
            /* @__PURE__ */ t(A, { variant: "secondary", onClick: G, children: n || "Cancel" }),
            /* @__PURE__ */ t(A, { onClick: Q, children: g || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return i || p ? /* @__PURE__ */ w("div", { className: o("w-full", k), children: [
    i && /* @__PURE__ */ w(de, { className: "text-foreground leading-5 block", children: [
      i,
      s && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: i ? "mt-1" : "", children: O }),
    p && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: p })
  ] }) : /* @__PURE__ */ t("div", { className: o("w-full", k), children: O });
}
export {
  he as C,
  Pe as D,
  Ce as M,
  ue as P,
  B as S,
  ce as T,
  me as a,
  pe as b,
  $e as c,
  De as d,
  Ee as e,
  Me as f
};
//# sourceMappingURL=date-range-picker-CgTHHbYz.js.map
