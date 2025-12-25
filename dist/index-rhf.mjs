import { jsx as e, jsxs as d } from "react/jsx-runtime";
import * as C from "react";
import { Slot as ue } from "@radix-ui/react-slot";
import { useFormState as R, Controller as $, useController as me, FormProvider as fe, useFormContext as he } from "react-hook-form";
import { F as V, c as u, g as D, L as _, B as J, h as pe, I as A } from "./input-D0NE8tsx.js";
import * as X from "@radix-ui/react-checkbox";
import { CheckIcon as G, SearchIcon as ge, XCircle as ve, ChevronDown as K, Upload as Y, CheckCircle2 as xe, AlertCircle as be, X as ee, Image as Ne, File as we, ChevronDownIcon as te, ChevronUpIcon as ye } from "lucide-react";
import { Command as U } from "cmdk";
import "@radix-ui/react-dialog";
import { P as ke, a as Ce, b as Fe, D as _e, c as Re } from "./date-range-picker-CgTHHbYz.js";
import Se from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import * as Q from "@radix-ui/react-progress";
import { f as B, B as re, T as Ie } from "./textarea-BPwkqiSr.js";
import * as q from "@radix-ui/react-select";
import * as qe from "@radix-ui/react-radio-group";
import * as Z from "@radix-ui/react-switch";
function $e({
  className: r,
  size: t = "md",
  ...s
}) {
  const a = V[t ?? "md"];
  return /* @__PURE__ */ e(
    X.Root,
    {
      "data-slot": "checkbox",
      "data-size": t,
      className: u(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.icon,
        r
      ),
      ...s,
      children: /* @__PURE__ */ e(
        X.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ e(G, { className: a.icon })
        }
      )
    }
  );
}
function mt({
  control: r,
  name: t,
  options: s,
  label: a,
  error: o,
  required: m = !1,
  wrapperClassName: l,
  orientation: h = "vertical"
}) {
  const p = R({ control: r, name: t }), c = o || D(p.errors, `${t}.message`);
  return /* @__PURE__ */ d("div", { className: u("w-full", l), children: [
    a && /* @__PURE__ */ d(_, { htmlFor: t, className: "mb-2 block", children: [
      a,
      m && /* @__PURE__ */ e("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ e(
      $,
      {
        control: r,
        name: t,
        render: ({ field: n }) => /* @__PURE__ */ e("div", { className: u("flex gap-4", h === "horizontal" ? "flex-row" : "flex-col"), children: s.map((i) => /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(
            $e,
            {
              id: `${t}-${i.value}`,
              checked: Array.isArray(n.value) && n.value.includes(i.value),
              onCheckedChange: (g) => {
                const x = Array.isArray(n.value) ? n.value : [];
                g ? n.onChange([...x, i.value]) : n.onChange(x.filter((k) => k !== i.value));
              },
              disabled: i.disabled
            }
          ),
          /* @__PURE__ */ e(_, { htmlFor: `${t}-${i.value}`, className: "font-normal cursor-pointer", children: i.label })
        ] }, i.value)) })
      }
    ),
    c && /* @__PURE__ */ e("p", { className: "text-sm text-destructive mt-1", children: c })
  ] });
}
function De({ className: r, ...t }) {
  return /* @__PURE__ */ e(
    U,
    {
      "data-slot": "command",
      className: u(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        r
      ),
      ...t
    }
  );
}
function Ee({
  className: r,
  label: t,
  error: s,
  required: a,
  id: o,
  ...m
}) {
  const l = t || s, h = /* @__PURE__ */ e("div", { className: "px-1 pt-1", children: /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: u(
        "flex h-9 items-center gap-2 rounded-md border px-3",
        s && "border-destructive"
      ),
      children: [
        /* @__PURE__ */ e(ge, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ e(
          U.Input,
          {
            id: o,
            "data-slot": "command-input",
            "aria-invalid": !!s,
            className: u(
              "placeholder:text-muted-foreground flex h-10 w-full bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              s && "focus-visible:ring-destructive",
              r
            ),
            ...m
          }
        )
      ]
    }
  ) });
  return l ? /* @__PURE__ */ d("div", { className: "flex flex-col gap-1", children: [
    t && /* @__PURE__ */ d(_, { htmlFor: o, children: [
      t,
      a && /* @__PURE__ */ e("span", { className: "text-destructive", children: "*" })
    ] }),
    h,
    s && /* @__PURE__ */ e("div", { className: "text-destructive text-sm", role: "alert", children: s })
  ] }) : h;
}
function ze({ className: r, ...t }) {
  return /* @__PURE__ */ e(
    U.List,
    {
      "data-slot": "command-list",
      className: u("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", r),
      ...t
    }
  );
}
function Le({ ...r }) {
  return /* @__PURE__ */ e(
    U.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...r
    }
  );
}
function je({
  className: r,
  ...t
}) {
  return /* @__PURE__ */ e(
    U.Group,
    {
      "data-slot": "command-group",
      className: u(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        r
      ),
      ...t
    }
  );
}
function Pe({ className: r, ...t }) {
  return /* @__PURE__ */ e(
    U.Item,
    {
      "data-slot": "command-item",
      className: u(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        r
      ),
      ...t
    }
  );
}
function Ue({
  options: r,
  value: t,
  onChange: s,
  label: a,
  error: o,
  required: m,
  placeholder: l = "Select option...",
  searchPlaceholder: h = "Search...",
  emptyMessage: p = "No results found.",
  disabled: c = !1,
  readonly: n = !1,
  size: i = "md",
  showClearIcon: g = !0,
  showArrowIcon: x = !0,
  suffix: k,
  className: S,
  triggerClassName: P,
  popoverClassName: I
}) {
  const [E, L] = C.useState(!1), z = C.useMemo(
    () => r.find((w) => w.id === t),
    [r, t]
  ), H = !c && !n && !!t, O = (w) => {
    s?.(w.id, w), L(!1);
  }, W = (w) => {
    w.preventDefault(), w.stopPropagation(), H && s?.("", void 0);
  }, M = /* @__PURE__ */ d(ke, { open: E, onOpenChange: L, children: [
    /* @__PURE__ */ e(Ce, { asChild: !0, children: /* @__PURE__ */ d(
      J,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": E,
        disabled: c,
        size: i,
        className: u(
          "w-full justify-between group/combobox",
          !t && "text-muted-foreground",
          o && "border-destructive",
          P
        ),
        children: [
          /* @__PURE__ */ e("span", { className: "flex-1 text-left truncate", children: z ? z.name : l }),
          /* @__PURE__ */ d("div", { className: "flex items-center gap-1 shrink-0 ml-2", children: [
            t && H ? /* @__PURE__ */ d(
              "span",
              {
                onMouseDown: (w) => {
                  w.preventDefault(), w.stopPropagation();
                },
                onClick: W,
                className: "cursor-pointer",
                children: [
                  g && /* @__PURE__ */ e(ve, { className: "text-muted-foreground hidden group-hover/combobox:block h-4 w-4" }),
                  x && /* @__PURE__ */ e(K, { className: "text-muted-foreground block group-hover/combobox:hidden h-4 w-4" })
                ]
              }
            ) : x && /* @__PURE__ */ e(K, { className: "text-muted-foreground h-4 w-4" }),
            k
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ e(
      Fe,
      {
        className: u("w-(--radix-popover-trigger-width) p-0", I),
        align: "start",
        children: /* @__PURE__ */ d(De, { children: [
          /* @__PURE__ */ e(Ee, { placeholder: h }),
          /* @__PURE__ */ d(ze, { children: [
            /* @__PURE__ */ e(Le, { children: p }),
            /* @__PURE__ */ e(je, { children: r.map((w) => /* @__PURE__ */ d(
              Pe,
              {
                value: w.name,
                disabled: w.disabled,
                onSelect: () => O(w),
                className: "flex items-center justify-between gap-2",
                children: [
                  /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: w.name }),
                  /* @__PURE__ */ e(
                    G,
                    {
                      className: u(
                        "h-4 w-4 shrink-0 text-primary",
                        t === w.id ? "opacity-100" : "opacity-0"
                      )
                    }
                  )
                ]
              },
              w.id
            )) })
          ] })
        ] })
      }
    )
  ] });
  return !a && !o ? /* @__PURE__ */ e("div", { className: u("w-full", S), children: M }) : /* @__PURE__ */ d("div", { className: u("w-full", S), children: [
    a && /* @__PURE__ */ d(_, { className: "text-foreground leading-5 block", children: [
      a,
      m && /* @__PURE__ */ e("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ e("div", { className: a ? "mt-1" : "", children: M }),
    o && /* @__PURE__ */ e("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: o })
  ] });
}
function ft({
  control: r,
  name: t,
  label: s,
  required: a,
  callback: o = () => {
  },
  className: m,
  ...l
}) {
  const h = R({ control: r, name: t }), p = D(h.errors, `${t}.message`);
  return /* @__PURE__ */ e(
    $,
    {
      control: r,
      name: t,
      render: ({ field: c }) => /* @__PURE__ */ e(
        Ue,
        {
          ...l,
          value: c.value,
          onChange: (n, i) => {
            c.onChange(n), o(n, i);
          },
          label: s,
          error: p,
          required: a,
          className: u("w-full", m)
        }
      )
    }
  );
}
function ht({
  control: r,
  name: t,
  label: s,
  required: a,
  error: o,
  className: m,
  callback: l = () => {
  },
  ...h
}) {
  return /* @__PURE__ */ e(
    $,
    {
      control: r,
      name: t,
      render: ({ field: p, fieldState: { error: c } }) => {
        const n = o || c?.message;
        return /* @__PURE__ */ e(
          _e,
          {
            ...h,
            value: p.value,
            onChange: (i) => {
              p.onChange(i), l(i);
            },
            label: s,
            error: n,
            required: a,
            className: u("w-full", m)
          }
        );
      }
    }
  );
}
function pt({
  control: r,
  name: t,
  label: s,
  required: a,
  error: o,
  className: m,
  callback: l = () => {
  },
  ...h
}) {
  return /* @__PURE__ */ e(
    $,
    {
      control: r,
      name: t,
      render: ({ field: p, fieldState: { error: c } }) => {
        const n = o || c?.message;
        return /* @__PURE__ */ e(
          Re,
          {
            ...h,
            value: p.value,
            onChange: (i) => {
              p.onChange(i), l(i);
            },
            label: s,
            error: n,
            required: a,
            className: u("w-full", m)
          }
        );
      }
    }
  );
}
const Ae = {
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
}, He = [
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
function Oe({
  className: r,
  label: t,
  error: s,
  required: a,
  id: o,
  size: m = "md",
  modules: l,
  formats: h,
  placeholder: p,
  value: c,
  onChange: n,
  readOnly: i,
  ...g
}) {
  const x = C.useId(), k = o || x, S = t || s, E = /* @__PURE__ */ e("div", { className: "relative w-full", children: /* @__PURE__ */ e(
    Se,
    {
      id: k,
      "data-slot": "editor",
      "data-size": m,
      "aria-invalid": !!s,
      theme: "snow",
      modules: l || Ae,
      formats: h || He,
      placeholder: p,
      value: c,
      onChange: n,
      readOnly: i,
      className: u(
        "editor-wrapper",
        "[&_.ql-container]:border-input [&_.ql-container]:dark:bg-input/30 [&_.ql-container]:rounded-b-md [&_.ql-container]:border [&_.ql-container]:shadow-xs",
        "[&_.ql-toolbar]:border-input [&_.ql-toolbar]:dark:bg-input/30 [&_.ql-toolbar]:rounded-t-md [&_.ql-toolbar]:border [&_.ql-toolbar]:border-b-0 [&_.ql-toolbar]:bg-transparent",
        "[&_.ql-editor]:min-h-[200px] [&_.ql-editor]:text-foreground",
        "[&_.ql-editor.ql-blank::before]:text-muted-foreground [&_.ql-editor.ql-blank::before]:italic",
        "[&_.ql-stroke]:stroke-foreground [&_.ql-fill]:fill-foreground",
        "[&_.ql-picker-label]:text-foreground [&_.ql-picker-options]:bg-popover [&_.ql-picker-options]:text-popover-foreground [&_.ql-picker-options]:border-border",
        "[&_.ql-snow.ql-toolbar_button:hover]:bg-accent [&_.ql-snow.ql-toolbar_button.ql-active]:bg-accent",
        "[&_.ql-snow.ql-toolbar]:dark:bg-input/30",
        s && "[&_.ql-container]:border-destructive [&_.ql-container]:focus-within:border-destructive [&_.ql-container]:focus-within:ring-destructive [&_.ql-container]:focus-within:ring-[3px] [&_.ql-toolbar]:border-destructive",
        !s && "[&_.ql-container]:focus-within:border-ring [&_.ql-container]:focus-within:ring-ring/50 [&_.ql-container]:focus-within:ring-[3px]",
        i && "[&_.ql-toolbar]:pointer-events-none [&_.ql-toolbar]:opacity-50 [&_.ql-toolbar_button]:cursor-not-allowed",
        r
      ),
      ...g
    }
  ) });
  return S ? /* @__PURE__ */ d("div", { className: "flex flex-col gap-1", children: [
    t && /* @__PURE__ */ d(_, { htmlFor: k, children: [
      t,
      a && /* @__PURE__ */ e("span", { className: "text-destructive", children: "*" })
    ] }),
    E,
    s && /* @__PURE__ */ e("div", { className: "text-destructive text-sm", role: "alert", children: s })
  ] }) : E;
}
function gt({
  control: r,
  name: t,
  label: s,
  className: a,
  wrapperClassName: o,
  required: m = !1,
  callback: l = () => {
  },
  ...h
}) {
  const p = R({ control: r, name: t }), c = D(p.errors, `${t}.message`);
  return /* @__PURE__ */ e("div", { className: u("w-full", o), children: /* @__PURE__ */ e(
    $,
    {
      control: r,
      name: t,
      render: ({ field: n }) => /* @__PURE__ */ e(
        Oe,
        {
          ...h,
          value: n.value || "",
          onChange: (i) => {
            n.onChange(i), l(i);
          },
          label: s,
          error: c,
          required: m,
          className: a
        }
      )
    }
  ) });
}
function vt({
  name: r,
  control: t
}) {
  const s = R({
    control: t,
    name: r
  }), a = D(s.errors, `${r}.message`);
  return /* @__PURE__ */ e(
    "p",
    {
      className: u(
        "text-xs text-destructive hidden",
        pe(a) && "input-error block mt-1.5"
      ),
      children: a
    }
  );
}
function Me({
  className: r,
  value: t,
  ...s
}) {
  return /* @__PURE__ */ e(
    Q.Root,
    {
      "data-slot": "progress",
      className: u("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", r),
      ...s,
      children: /* @__PURE__ */ e(
        Q.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function Te({
  value: r = [],
  onChange: t,
  accept: s,
  multiple: a = !1,
  maxSize: o,
  maxFiles: m,
  disabled: l = !1,
  onError: h,
  showPreview: p = !0,
  showProgress: c = !1,
  className: n,
  dropzoneClassName: i,
  placeholder: g,
  uploadText: x
}) {
  const [k, S] = C.useState(!1), P = (f) => f && typeof f == "object" && "name" in f && "size" in f && "type" in f && "lastModified" in f && !("file" in f), [I, E] = C.useState(() => !r || r.length === 0 ? [] : r.map((f) => P(f) ? {
    file: f,
    preview: f.type.startsWith("image/") ? URL.createObjectURL(f) : void 0,
    status: "success"
  } : f)), L = C.useRef(null), z = C.useRef(I);
  C.useEffect(() => {
    z.current = I;
  }, [I]), C.useEffect(() => () => {
    z.current.forEach((f) => {
      f.preview && URL.revokeObjectURL(f.preview);
    });
  }, []), C.useEffect(() => {
    if (!r || r.length === 0) {
      z.current.forEach((j) => {
        j.preview && URL.revokeObjectURL(j.preview);
      }), z.current.length > 0 && E([]);
      return;
    }
    const f = r.map((v) => P(v) ? v : v.file), b = z.current.map((v) => v.file), N = f.map((v) => `${v.name}-${v.size}`).join(","), F = b.map((v) => `${v.name}-${v.size}`).join(",");
    if (N === F && f.length === b.length)
      return;
    z.current.forEach((v) => {
      v.preview && URL.revokeObjectURL(v.preview);
    });
    const y = r.map((v) => P(v) ? {
      file: v,
      preview: v.type.startsWith("image/") ? URL.createObjectURL(v) : void 0,
      status: "success"
    } : v);
    E(y);
  }, [r]);
  const H = (f) => {
    if (o && f.size > o)
      return `File size exceeds ${B(o)}`;
    if (s) {
      const b = s.split(",").map((v) => v.trim()), N = f.type, F = f.name.toLowerCase();
      if (!(b.some((v) => v.startsWith(".") ? F.endsWith(v.toLowerCase()) : v.endsWith("/*") ? N.startsWith(v.slice(0, -1)) : N === v || N.match(v.replace("*", ".*"))) || b.some((v) => F.endsWith(v.toLowerCase()))))
        return `File type not allowed. Accepted types: ${s}`;
    }
    return null;
  }, O = (f) => {
    const b = [], N = [];
    if (m && I.length + f.length > m) {
      const y = `Maximum ${m} file(s) allowed`;
      b.push(y), h?.(y);
      return;
    }
    if (f.forEach((y) => {
      const v = H(y);
      if (v)
        b.push(`${y.name}: ${v}`), h?.(v);
      else {
        const j = {
          file: y,
          preview: y.type.startsWith("image/") ? URL.createObjectURL(y) : void 0,
          status: "success"
        };
        N.push(j);
      }
    }), b.length > 0 && N.length === 0)
      return;
    const F = a ? [...I, ...N] : N;
    E(F), t?.(F.map((y) => y.file));
  }, W = (f) => {
    if (f.preventDefault(), f.stopPropagation(), S(!1), l) return;
    const b = Array.from(f.dataTransfer.files);
    b.length > 0 && O(b);
  }, M = (f) => {
    f.preventDefault(), f.stopPropagation(), l || S(!0);
  }, w = (f) => {
    f.preventDefault(), f.stopPropagation(), S(!1);
  }, oe = (f) => {
    const b = Array.from(f.target.files || []);
    b.length > 0 && O(b), L.current && (L.current.value = "");
  }, ne = (f) => {
    const b = I[f];
    b.preview && URL.revokeObjectURL(b.preview);
    const N = I.filter((F, y) => y !== f);
    E(N), t?.(N.map((F) => F.file));
  }, le = () => {
    !l && L.current && L.current.click();
  }, ie = (f) => f.type.startsWith("image/") ? /* @__PURE__ */ e(Ne, { className: "h-8 w-8 text-muted-foreground" }) : /* @__PURE__ */ e(we, { className: "h-8 w-8 text-muted-foreground" });
  return /* @__PURE__ */ d("div", { className: u("w-full space-y-4", n), "data-slot": "file-upload", children: [
    /* @__PURE__ */ d(
      "div",
      {
        onClick: le,
        onDrop: W,
        onDragOver: M,
        onDragLeave: w,
        className: u(
          "relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
          k && !l && "border-primary bg-primary/5",
          !k && !l && "border-input hover:border-primary/50 hover:bg-accent/50",
          l && "cursor-not-allowed opacity-50",
          i
        ),
        "data-slot": "file-upload-dropzone",
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: L,
              type: "file",
              accept: s,
              multiple: a,
              disabled: l,
              onChange: oe,
              className: "hidden",
              "data-slot": "file-upload-input"
            }
          ),
          /* @__PURE__ */ d("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
            /* @__PURE__ */ e(Y, { className: u("h-8 w-8 mb-2", l ? "text-muted-foreground" : "text-primary") }),
            /* @__PURE__ */ d("p", { className: "mb-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ e("span", { className: "font-semibold", children: x || "Click to upload" }),
              !l && " or drag and drop"
            ] }),
            /* @__PURE__ */ d("p", { className: "text-xs text-muted-foreground", children: [
              g || s || "Any file",
              a && " (multiple files allowed)",
              o && ` (max ${B(o)})`
            ] })
          ] })
        ]
      }
    ),
    p && I.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-2", "data-slot": "file-upload-list", children: I.map((f, b) => {
      const { file: N, preview: F, progress: y, status: v, error: j } = f, ce = N.type.startsWith("image/");
      return /* @__PURE__ */ d(
        "div",
        {
          className: "flex items-center gap-3 p-3 border rounded-lg bg-card",
          "data-slot": "file-upload-item",
          children: [
            /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: ce && F ? /* @__PURE__ */ e(
              "img",
              {
                src: F,
                alt: N.name,
                className: "h-12 w-12 object-cover rounded",
                "data-slot": "file-upload-preview"
              }
            ) : /* @__PURE__ */ e("div", { className: "h-12 w-12 flex items-center justify-center bg-muted rounded", children: ie(N) }) }),
            /* @__PURE__ */ d("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("p", { className: "text-sm font-medium truncate", "data-slot": "file-upload-name", children: N.name }),
                v === "success" && /* @__PURE__ */ e(xe, { className: "h-4 w-4 text-green-500 flex-shrink-0" }),
                v === "error" && /* @__PURE__ */ e(be, { className: "h-4 w-4 text-destructive flex-shrink-0" })
              ] }),
              /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", "data-slot": "file-upload-size", children: B(N.size) }),
              j && /* @__PURE__ */ e("p", { className: "text-xs text-destructive mt-1", "data-slot": "file-upload-error", children: j }),
              c && y !== void 0 && /* @__PURE__ */ e("div", { className: "mt-2", "data-slot": "file-upload-progress", children: /* @__PURE__ */ e(Me, { value: y, className: "h-1" }) })
            ] }),
            !l && /* @__PURE__ */ d(
              J,
              {
                type: "button",
                variant: "ghost",
                size: "icon",
                className: "h-8 w-8 flex-shrink-0",
                onClick: (de) => {
                  de.stopPropagation(), ne(b);
                },
                "data-slot": "file-upload-remove",
                children: [
                  /* @__PURE__ */ e(ee, { className: "h-4 w-4" }),
                  /* @__PURE__ */ e("span", { className: "sr-only", children: "Remove file" })
                ]
              }
            )
          ]
        },
        `${N.name}-${b}`
      );
    }) })
  ] });
}
function xt({
  control: r,
  name: t,
  label: s,
  error: a,
  required: o = !1,
  wrapperClassName: m,
  ...l
}) {
  const h = R({ control: r, name: t }), p = a || D(h.errors, `${t}.message`);
  return /* @__PURE__ */ d("div", { className: u("w-full", m), "data-slot": "rhf-file-upload", children: [
    s && /* @__PURE__ */ d(_, { htmlFor: t, className: "mb-2 block", children: [
      s,
      o && /* @__PURE__ */ e("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ e(
      $,
      {
        control: r,
        name: t,
        render: ({ field: { onChange: c, value: n, ...i } }) => {
          const g = n ? (Array.isArray(n) ? n : [n]).filter(Boolean) : [];
          return /* @__PURE__ */ e(
            Te,
            {
              ...l,
              ...i,
              value: g,
              onChange: (x) => {
                l.multiple ? c(x) : c(x.length > 0 ? x[0] : void 0);
              },
              onError: (x) => {
                console.error("File upload error:", x);
              },
              disabled: l.disabled
            }
          );
        }
      }
    ),
    p && /* @__PURE__ */ e("p", { className: "text-sm text-destructive mt-1", "data-slot": "rhf-file-upload-error", children: p })
  ] });
}
const We = (r, t) => t === "text" || !r ? r : t === "integer" || t === "currency" ? r.replace(/\D/g, "") : t === "decimal" ? r.replace(/[^\d.,]/g, "").replace(/\./g, ",") : r;
function bt({
  control: r,
  name: t,
  label: s,
  format: a = "text",
  required: o,
  wrapperClassName: m,
  callback: l = () => {
  },
  ...h
}) {
  const p = R({ control: r, name: t }), c = D(p.errors, `${t}.message`);
  return /* @__PURE__ */ e(
    $,
    {
      control: r,
      name: t,
      render: ({ field: n }) => /* @__PURE__ */ e("div", { className: u("w-full", m), children: /* @__PURE__ */ e(
        A,
        {
          ...h,
          ...n,
          type: "text",
          label: s,
          error: c,
          required: o,
          value: n.value || "",
          onChange: (i) => {
            const g = We(i.target.value, a);
            n.onChange(g), l(g);
          }
        }
      ) })
    }
  );
}
function Nt({
  control: r,
  register: t,
  name: s,
  label: a,
  placeholder: o,
  className: m,
  wrapperClassName: l,
  required: h = !1,
  ...p
}) {
  const c = R({ control: r, name: s }), n = D(c.errors, `${s}.message`);
  return /* @__PURE__ */ e("div", { className: u("w-full", l), children: /* @__PURE__ */ e(
    A,
    {
      ...p,
      ...t(s),
      label: a,
      error: n,
      required: h,
      className: m,
      placeholder: o
    }
  ) });
}
function Be({ ...r }) {
  return /* @__PURE__ */ e(q.Root, { "data-slot": "select", ...r });
}
function Ve({ ...r }) {
  return /* @__PURE__ */ e(q.Value, { "data-slot": "select-value", ...r });
}
function Ge({
  className: r,
  size: t = "md",
  children: s,
  label: a,
  error: o,
  required: m,
  id: l,
  ...h
}) {
  const p = a || o, c = V[t ?? "md"], n = /* @__PURE__ */ d(
    q.Trigger,
    {
      id: l,
      "data-slot": "select-trigger",
      "data-size": t,
      "aria-invalid": !!o,
      className: u(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-transparent whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        c.height,
        c.text,
        c.padding,
        {
          "[&_svg:not([class*='size-'])]:size-3": t === "xxs",
          "[&_svg:not([class*='size-'])]:size-3.5": t === "xs",
          "[&_svg:not([class*='size-'])]:size-4": t === "sm" || t === "md",
          "[&_svg:not([class*='size-'])]:size-5": t === "lg" || t === "xl",
          "[&_svg:not([class*='size-'])]:size-6": t === "xxl"
        },
        o ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        r
      ),
      ...h,
      children: [
        s,
        /* @__PURE__ */ e(q.Icon, { asChild: !0, children: /* @__PURE__ */ e(te, { className: u("opacity-50", c.icon) }) })
      ]
    }
  );
  return p ? /* @__PURE__ */ d("div", { className: "flex flex-col gap-1", children: [
    a && /* @__PURE__ */ d(_, { htmlFor: l, children: [
      a,
      m && /* @__PURE__ */ e("span", { className: "text-destructive", children: "*" })
    ] }),
    n,
    o && /* @__PURE__ */ e("div", { className: "text-sm text-destructive", role: "alert", children: o })
  ] }) : n;
}
function Xe({
  className: r,
  children: t,
  position: s = "item-aligned",
  align: a = "center",
  ...o
}) {
  return /* @__PURE__ */ e(q.Portal, { children: /* @__PURE__ */ d(
    q.Content,
    {
      "data-slot": "select-content",
      className: u(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        s === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        r
      ),
      position: s,
      align: a,
      ...o,
      children: [
        /* @__PURE__ */ e(Qe, {}),
        /* @__PURE__ */ e(
          q.Viewport,
          {
            className: u(
              "p-1",
              s === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ e(Ze, {})
      ]
    }
  ) });
}
function Ke({
  className: r,
  children: t,
  ...s
}) {
  return /* @__PURE__ */ d(
    q.Item,
    {
      "data-slot": "select-item",
      className: u(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        r
      ),
      ...s,
      children: [
        /* @__PURE__ */ e(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ e(q.ItemIndicator, { children: /* @__PURE__ */ e(G, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ e(q.ItemText, { children: t })
      ]
    }
  );
}
function Qe({
  className: r,
  ...t
}) {
  return /* @__PURE__ */ e(
    q.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: u("flex justify-center items-center py-1 cursor-default", r),
      ...t,
      children: /* @__PURE__ */ e(ye, { className: "size-4" })
    }
  );
}
function Ze({
  className: r,
  ...t
}) {
  return /* @__PURE__ */ e(
    q.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: u("flex justify-center items-center py-1 cursor-default", r),
      ...t,
      children: /* @__PURE__ */ e(te, { className: "size-4" })
    }
  );
}
function wt({
  control: r,
  name: t,
  options: s,
  label: a,
  error: o,
  required: m = !1,
  placeholder: l = "Select options...",
  wrapperClassName: h
}) {
  const p = R({ control: r, name: t }), c = o || D(p.errors, `${t}.message`);
  return /* @__PURE__ */ d("div", { className: u("w-full", h), children: [
    a && /* @__PURE__ */ d(_, { htmlFor: t, className: "mb-2 block", children: [
      a,
      m && /* @__PURE__ */ e("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ e(
      $,
      {
        control: r,
        name: t,
        render: ({ field: n }) => {
          const i = Array.isArray(n.value) ? n.value : [];
          return /* @__PURE__ */ d("div", { className: "space-y-2", children: [
            /* @__PURE__ */ d(
              Be,
              {
                value: "",
                onValueChange: (g) => {
                  i.includes(g) || n.onChange([...i, g]);
                },
                children: [
                  /* @__PURE__ */ e(Ge, { className: u(c && "border-destructive"), children: /* @__PURE__ */ e(Ve, { placeholder: l }) }),
                  /* @__PURE__ */ e(Xe, { children: s.map((g) => /* @__PURE__ */ e(
                    Ke,
                    {
                      value: g.value,
                      disabled: g.disabled || i.includes(g.value),
                      children: g.label
                    },
                    g.value
                  )) })
                ]
              }
            ),
            i.length > 0 && /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: i.map((g) => {
              const x = s.find((k) => k.value === g);
              return /* @__PURE__ */ d(re, { variant: "secondary", className: "gap-1", children: [
                x?.label || g,
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      n.onChange(i.filter((k) => k !== g));
                    },
                    className: "ml-1 hover:bg-destructive/20 rounded-full p-0.5",
                    children: /* @__PURE__ */ e(ee, { className: "h-3 w-3" })
                  }
                )
              ] }, g);
            }) })
          ] });
        }
      }
    ),
    c && /* @__PURE__ */ e("p", { className: "text-sm text-destructive mt-1", children: c })
  ] });
}
function yt({
  control: r,
  register: t,
  name: s,
  label: a,
  placeholder: o,
  className: m,
  wrapperClassName: l,
  required: h = !1,
  min: p,
  max: c,
  step: n,
  ...i
}) {
  const g = R({ control: r, name: s }), x = D(g.errors, `${s}.message`);
  return /* @__PURE__ */ e("div", { className: u("w-full", l), children: /* @__PURE__ */ e(
    A,
    {
      ...i,
      ...t(s, { valueAsNumber: !0 }),
      type: "number",
      label: a,
      error: x,
      required: h,
      className: m,
      placeholder: o,
      min: p,
      max: c,
      step: n
    }
  ) });
}
function Je({
  className: r,
  ...t
}) {
  return /* @__PURE__ */ e(
    qe.Root,
    {
      "data-slot": "radio-group",
      className: u("grid gap-3", r),
      ...t
    }
  );
}
function kt({
  control: r,
  name: t,
  label: s,
  required: a,
  children: o,
  className: m,
  callback: l = () => {
  },
  onBeforeChange: h,
  ...p
}) {
  const c = (n, i) => {
    const g = () => {
      i.onChange(n), l(n);
    };
    h ? h(n, i.value, g) : g();
  };
  return /* @__PURE__ */ e(
    $,
    {
      control: r,
      name: t,
      render: ({ field: n, fieldState: { error: i } }) => /* @__PURE__ */ d("div", { className: "space-y-1.5 w-full", children: [
        s && /* @__PURE__ */ d(
          _,
          {
            htmlFor: p.id || t,
            className: "text-foreground leading-5 cursor-pointer select-none flex-1",
            children: [
              s,
              a && /* @__PURE__ */ e("span", { className: "font-semibold text-destructive ml-1", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ e(
          Je,
          {
            ...p,
            id: p.id || t,
            className: u("flex flex-row gap-4", m),
            onValueChange: (g) => {
              c(g, n);
            },
            value: n.value?.toString(),
            children: o
          }
        ),
        i && /* @__PURE__ */ e("p", { className: "text-xs text-destructive", children: i.message })
      ] })
    }
  );
}
function Ye({
  className: r,
  size: t = "md",
  ...s
}) {
  const a = V[t ?? "md"], o = {
    xxs: { height: "h-3.5", width: "w-6", thumb: a.icon },
    xs: { height: "h-4", width: "w-7", thumb: a.icon },
    sm: { height: "h-4.5", width: "w-8", thumb: a.icon },
    md: { height: "h-5", width: "w-9", thumb: a.icon },
    lg: { height: "h-6", width: "w-11", thumb: a.icon },
    xl: { height: "h-6", width: "w-12", thumb: a.icon },
    xxl: { height: "h-7", width: "w-14", thumb: a.icon }
  }[t ?? "md"];
  return /* @__PURE__ */ e(
    Z.Root,
    {
      "data-slot": "switch",
      "data-size": t,
      className: u(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        o.height,
        o.width,
        r
      ),
      ...s,
      children: /* @__PURE__ */ e(
        Z.Thumb,
        {
          "data-slot": "switch-thumb",
          className: u(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
            o.thumb
          )
        }
      )
    }
  );
}
function Ct({
  control: r,
  name: t,
  label: s,
  required: a,
  callback: o = () => {
  },
  onBeforeChange: m,
  className: l,
  ...h
}) {
  const p = (c, n) => {
    const i = () => {
      n.onChange(c), o(c);
    };
    m ? m(c, n.value, i) : i();
  };
  return /* @__PURE__ */ e(
    $,
    {
      control: r,
      name: t,
      render: ({ field: c, fieldState: { error: n } }) => /* @__PURE__ */ d("div", { className: "space-y-1.5 w-full", children: [
        /* @__PURE__ */ d("div", { className: u("flex items-center gap-3", l), children: [
          s && /* @__PURE__ */ d(
            _,
            {
              htmlFor: h.id || t,
              className: "text-foreground leading-5 cursor-pointer select-none flex-1",
              children: [
                s,
                a && /* @__PURE__ */ e("span", { className: "font-semibold text-destructive ml-1", children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ e(
            Ye,
            {
              ...h,
              id: h.id || t,
              checked: !!c.value,
              onCheckedChange: (i) => {
                p(i, c);
              }
            }
          )
        ] }),
        n && /* @__PURE__ */ e("p", { className: "text-xs text-destructive", children: n.message })
      ] })
    }
  );
}
function Ft({
  control: r,
  register: t,
  name: s,
  label: a,
  placeholder: o,
  className: m,
  wrapperClassName: l,
  required: h = !1,
  showMaxLength: p = !0,
  maxLength: c = 512,
  rows: n = 5,
  ...i
}) {
  const g = R({ control: r, name: s }), x = D(g.errors, `${s}.message`);
  return /* @__PURE__ */ d("div", { className: u("relative w-full", l), children: [
    /* @__PURE__ */ e(
      Ie,
      {
        ...i,
        ...t(s),
        label: a,
        error: x,
        required: h,
        className: m,
        placeholder: o,
        maxLength: c,
        rows: n
      }
    ),
    p && /* @__PURE__ */ e(et, { control: r, name: s, maxLength: c })
  ] });
}
const et = ({
  control: r,
  name: t,
  maxLength: s
}) => {
  const { field: a } = me({ control: r, name: t });
  return /* @__PURE__ */ d(re, { variant: "secondary", className: "absolute rounded-sm right-3 bottom-2 text-[8px]", children: [
    a.value?.length || 0,
    "/",
    s
  ] });
};
function _t({
  control: r,
  register: t,
  name: s,
  label: a,
  placeholder: o = "HH:mm",
  className: m,
  wrapperClassName: l,
  required: h = !1,
  ...p
}) {
  const c = R({ control: r, name: s }), n = D(c.errors, `${s}.message`);
  return /* @__PURE__ */ e("div", { className: u("w-full", l), children: /* @__PURE__ */ e(
    A,
    {
      ...p,
      ...t(s),
      type: "time",
      label: a,
      error: n,
      required: h,
      className: m,
      placeholder: o
    }
  ) });
}
function Rt({
  control: r,
  name: t,
  label: s,
  error: a,
  required: o = !1,
  accept: m,
  multiple: l = !1,
  wrapperClassName: h,
  className: p
}) {
  const c = R({ control: r, name: t }), n = a || D(c.errors, `${t}.message`);
  return /* @__PURE__ */ d("div", { className: u("w-full", h), children: [
    s && /* @__PURE__ */ d(_, { htmlFor: t, className: "mb-2 block", children: [
      s,
      o && /* @__PURE__ */ e("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ e(
      $,
      {
        control: r,
        name: t,
        render: ({ field: { onChange: i, value: g, ...x } }) => /* @__PURE__ */ d("div", { className: "space-y-2", children: [
          /* @__PURE__ */ d(
            _,
            {
              htmlFor: t,
              className: u(
                "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent transition-colors",
                n && "border-destructive",
                p
              ),
              children: [
                /* @__PURE__ */ d("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
                  /* @__PURE__ */ e(Y, { className: "w-8 h-8 mb-2 text-muted-foreground" }),
                  /* @__PURE__ */ d("p", { className: "mb-2 text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ e("span", { className: "font-semibold", children: "Click to upload" }),
                    " or drag and drop"
                  ] }),
                  /* @__PURE__ */ d("p", { className: "text-xs text-muted-foreground", children: [
                    m || "Any file",
                    l && " (multiple files allowed)"
                  ] })
                ] }),
                /* @__PURE__ */ e(
                  A,
                  {
                    ...x,
                    id: t,
                    type: "file",
                    accept: m,
                    multiple: l,
                    className: "hidden",
                    onChange: (k) => {
                      const S = k.target.files;
                      S && i(l ? Array.from(S) : S[0]);
                    }
                  }
                )
              ]
            }
          ),
          g && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: l ? `${Array.isArray(g) ? g.length : 0} file(s) selected` : typeof g == "string" ? g : g?.name || "File selected" })
        ] })
      }
    ),
    n && /* @__PURE__ */ e("p", { className: "text-sm text-destructive mt-1", children: n })
  ] });
}
const St = fe, se = C.createContext({}), It = ({
  ...r
}) => /* @__PURE__ */ e(se.Provider, { value: { name: r.name }, children: /* @__PURE__ */ e($, { ...r }) }), T = () => {
  const r = C.useContext(se), t = C.useContext(ae), { getFieldState: s } = he(), a = R({ name: r.name }), o = s(r.name, a);
  if (!r)
    throw new Error("useFormField should be used within <FormField>");
  const { id: m } = t;
  return {
    id: m,
    name: r.name,
    formItemId: `${m}-form-item`,
    formDescriptionId: `${m}-form-item-description`,
    formMessageId: `${m}-form-item-message`,
    ...o
  };
}, ae = C.createContext({});
function qt({ className: r, ...t }) {
  const s = C.useId();
  return /* @__PURE__ */ e(ae.Provider, { value: { id: s }, children: /* @__PURE__ */ e("div", { "data-slot": "form-item", className: u("grid gap-2", r), ...t }) });
}
function $t({ className: r, ...t }) {
  const { error: s, formItemId: a } = T();
  return /* @__PURE__ */ e(
    _,
    {
      "data-slot": "form-label",
      "data-error": !!s,
      className: u("data-[error=true]:text-destructive", r),
      htmlFor: a,
      ...t
    }
  );
}
function Dt({ ...r }) {
  const { error: t, formItemId: s, formDescriptionId: a, formMessageId: o } = T();
  return /* @__PURE__ */ e(
    ue,
    {
      "data-slot": "form-control",
      id: s,
      "aria-describedby": t ? `${a} ${o}` : `${a}`,
      "aria-invalid": !!t,
      ...r
    }
  );
}
function Et({ className: r, ...t }) {
  const { formDescriptionId: s } = T();
  return /* @__PURE__ */ e(
    "p",
    {
      "data-slot": "form-description",
      id: s,
      className: u("text-muted-foreground text-sm", r),
      ...t
    }
  );
}
function zt({ className: r, ...t }) {
  const { error: s, formMessageId: a } = T(), o = s ? String(s?.message ?? "") : t.children;
  return o ? /* @__PURE__ */ e(
    "p",
    {
      "data-slot": "form-message",
      id: a,
      className: u("text-destructive text-sm", r),
      ...t,
      children: o
    }
  ) : null;
}
export {
  St as Form,
  Dt as FormControl,
  Et as FormDescription,
  It as FormField,
  qt as FormItem,
  $t as FormLabel,
  zt as FormMessage,
  mt as RHFCheckboxGroup,
  ft as RHFCombobox,
  ht as RHFDatePicker,
  pt as RHFDateRangePicker,
  gt as RHFEditor,
  vt as RHFErrorMessage,
  xt as RHFFileUpload,
  bt as RHFFormattedInput,
  Nt as RHFInput,
  wt as RHFMultiSelect,
  yt as RHFNumberInput,
  kt as RHFRadioGroup,
  Ct as RHFSwitch,
  Ft as RHFTextArea,
  _t as RHFTimePicker,
  Rt as RHFUpload,
  T as useFormField
};
//# sourceMappingURL=index-rhf.mjs.map
