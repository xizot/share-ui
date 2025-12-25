import { jsxs as h, jsx as t } from "react/jsx-runtime";
import * as k from "react";
import { Slot as ne } from "@radix-ui/react-slot";
import { useFormState as C, Controller as R, useController as le, FormProvider as ie, useFormContext as ce } from "react-hook-form";
import { g as q, c as v, L as S, h as de, B as ue, I as z, F as O, a as W, T as me } from "./textarea-Bt2ohije.js";
import { C as fe, a as he, D as ge, b as pe } from "./date-range-picker-D-OnnMm4.js";
import ve from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Upload as V, CheckCircle2 as be, AlertCircle as xe, X as B, Image as Ne, File as we, ChevronDownIcon as G, CheckIcon as ye, ChevronUpIcon as Fe } from "lucide-react";
import * as T from "@radix-ui/react-progress";
import { f as H } from "./format-C1ar8L1A.js";
import * as _ from "@radix-ui/react-select";
import * as ke from "@radix-ui/react-radio-group";
import * as M from "@radix-ui/react-switch";
function Qe({
  control: r,
  name: e,
  options: s,
  label: a,
  error: n,
  required: u = !1,
  wrapperClassName: i,
  orientation: g = "vertical"
}) {
  const m = C({ control: r, name: e }), c = n || q(m.errors, `${e}.message`);
  return /* @__PURE__ */ h("div", { className: v("w-full", i), children: [
    a && /* @__PURE__ */ h(S, { htmlFor: e, className: "mb-2 block", children: [
      a,
      u && /* @__PURE__ */ t("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ t(
      R,
      {
        control: r,
        name: e,
        render: ({ field: o }) => /* @__PURE__ */ t("div", { className: v("flex gap-4", g === "horizontal" ? "flex-row" : "flex-col"), children: s.map((l) => /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ t(
            fe,
            {
              id: `${e}-${l.value}`,
              checked: Array.isArray(o.value) && o.value.includes(l.value),
              onCheckedChange: (f) => {
                const x = Array.isArray(o.value) ? o.value : [];
                f ? o.onChange([...x, l.value]) : o.onChange(x.filter((y) => y !== l.value));
              },
              disabled: l.disabled
            }
          ),
          /* @__PURE__ */ t(S, { htmlFor: `${e}-${l.value}`, className: "font-normal cursor-pointer", children: l.label })
        ] }, l.value)) })
      }
    ),
    c && /* @__PURE__ */ t("p", { className: "text-sm text-destructive mt-1", children: c })
  ] });
}
function Ze({
  control: r,
  name: e,
  label: s,
  required: a,
  callback: n = () => {
  },
  className: u,
  ...i
}) {
  const g = C({ control: r, name: e }), m = q(g.errors, `${e}.message`);
  return /* @__PURE__ */ t(
    R,
    {
      control: r,
      name: e,
      render: ({ field: c }) => /* @__PURE__ */ t(
        he,
        {
          ...i,
          value: c.value,
          onChange: (o, l) => {
            c.onChange(o), n(o, l);
          },
          label: s,
          error: m,
          required: a,
          className: v("w-full", u)
        }
      )
    }
  );
}
function Je({
  control: r,
  name: e,
  label: s,
  required: a,
  error: n,
  className: u,
  callback: i = () => {
  },
  ...g
}) {
  return /* @__PURE__ */ t(
    R,
    {
      control: r,
      name: e,
      render: ({ field: m, fieldState: { error: c } }) => {
        const o = n || c?.message;
        return /* @__PURE__ */ t(
          ge,
          {
            ...g,
            value: m.value,
            onChange: (l) => {
              m.onChange(l), i(l);
            },
            label: s,
            error: o,
            required: a,
            className: v("w-full", u)
          }
        );
      }
    }
  );
}
function Ye({
  control: r,
  name: e,
  label: s,
  required: a,
  error: n,
  className: u,
  callback: i = () => {
  },
  ...g
}) {
  return /* @__PURE__ */ t(
    R,
    {
      control: r,
      name: e,
      render: ({ field: m, fieldState: { error: c } }) => {
        const o = n || c?.message;
        return /* @__PURE__ */ t(
          pe,
          {
            ...g,
            value: m.value,
            onChange: (l) => {
              m.onChange(l), i(l);
            },
            label: s,
            error: o,
            required: a,
            className: v("w-full", u)
          }
        );
      }
    }
  );
}
const Ce = {
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
}, _e = [
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
function Re({
  className: r,
  label: e,
  error: s,
  required: a,
  id: n,
  size: u = "md",
  modules: i,
  formats: g,
  placeholder: m,
  value: c,
  onChange: o,
  readOnly: l,
  ...f
}) {
  const x = k.useId(), y = n || x, $ = e || s, D = /* @__PURE__ */ t("div", { className: "relative w-full", children: /* @__PURE__ */ t(
    ve,
    {
      id: y,
      "data-slot": "editor",
      "data-size": u,
      "aria-invalid": !!s,
      theme: "snow",
      modules: i || Ce,
      formats: g || _e,
      placeholder: m,
      value: c,
      onChange: o,
      readOnly: l,
      className: v(
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
        l && "[&_.ql-toolbar]:pointer-events-none [&_.ql-toolbar]:opacity-50 [&_.ql-toolbar_button]:cursor-not-allowed",
        r
      ),
      ...f
    }
  ) });
  return $ ? /* @__PURE__ */ h("div", { className: "flex flex-col gap-1", children: [
    e && /* @__PURE__ */ h(S, { htmlFor: y, children: [
      e,
      a && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    D,
    s && /* @__PURE__ */ t("div", { className: "text-destructive text-sm", role: "alert", children: s })
  ] }) : D;
}
function et({
  control: r,
  name: e,
  label: s,
  className: a,
  wrapperClassName: n,
  required: u = !1,
  callback: i = () => {
  },
  ...g
}) {
  const m = C({ control: r, name: e }), c = q(m.errors, `${e}.message`);
  return /* @__PURE__ */ t("div", { className: v("w-full", n), children: /* @__PURE__ */ t(
    R,
    {
      control: r,
      name: e,
      render: ({ field: o }) => /* @__PURE__ */ t(
        Re,
        {
          ...g,
          value: o.value || "",
          onChange: (l) => {
            o.onChange(l), i(l);
          },
          label: s,
          error: c,
          required: u,
          className: a
        }
      )
    }
  ) });
}
function tt({
  name: r,
  control: e
}) {
  const s = C({
    control: e,
    name: r
  }), a = q(s.errors, `${r}.message`);
  return /* @__PURE__ */ t(
    "p",
    {
      className: v(
        "text-xs text-destructive hidden",
        de(a) && "input-error block mt-1.5"
      ),
      children: a
    }
  );
}
function qe({
  className: r,
  value: e,
  ...s
}) {
  return /* @__PURE__ */ t(
    T.Root,
    {
      "data-slot": "progress",
      className: v("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", r),
      ...s,
      children: /* @__PURE__ */ t(
        T.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (e || 0)}%)` }
        }
      )
    }
  );
}
function Se({
  value: r = [],
  onChange: e,
  accept: s,
  multiple: a = !1,
  maxSize: n,
  maxFiles: u,
  disabled: i = !1,
  onError: g,
  showPreview: m = !0,
  showProgress: c = !1,
  className: o,
  dropzoneClassName: l,
  placeholder: f,
  uploadText: x
}) {
  const [y, $] = k.useState(!1), A = (d) => d && typeof d == "object" && "name" in d && "size" in d && "type" in d && "lastModified" in d && !("file" in d), [I, D] = k.useState(() => !r || r.length === 0 ? [] : r.map((d) => A(d) ? {
    file: d,
    preview: d.type.startsWith("image/") ? URL.createObjectURL(d) : void 0,
    status: "success"
  } : d)), j = k.useRef(null), L = k.useRef(I);
  k.useEffect(() => {
    L.current = I;
  }, [I]), k.useEffect(() => () => {
    L.current.forEach((d) => {
      d.preview && URL.revokeObjectURL(d.preview);
    });
  }, []), k.useEffect(() => {
    if (!r || r.length === 0) {
      L.current.forEach((E) => {
        E.preview && URL.revokeObjectURL(E.preview);
      }), L.current.length > 0 && D([]);
      return;
    }
    const d = r.map((p) => A(p) ? p : p.file), b = L.current.map((p) => p.file), N = d.map((p) => `${p.name}-${p.size}`).join(","), F = b.map((p) => `${p.name}-${p.size}`).join(",");
    if (N === F && d.length === b.length)
      return;
    L.current.forEach((p) => {
      p.preview && URL.revokeObjectURL(p.preview);
    });
    const w = r.map((p) => A(p) ? {
      file: p,
      preview: p.type.startsWith("image/") ? URL.createObjectURL(p) : void 0,
      status: "success"
    } : p);
    D(w);
  }, [r]);
  const Q = (d) => {
    if (n && d.size > n)
      return `File size exceeds ${H(n)}`;
    if (s) {
      const b = s.split(",").map((p) => p.trim()), N = d.type, F = d.name.toLowerCase();
      if (!(b.some((p) => p.startsWith(".") ? F.endsWith(p.toLowerCase()) : p.endsWith("/*") ? N.startsWith(p.slice(0, -1)) : N === p || N.match(p.replace("*", ".*"))) || b.some((p) => F.endsWith(p.toLowerCase()))))
        return `File type not allowed. Accepted types: ${s}`;
    }
    return null;
  }, P = (d) => {
    const b = [], N = [];
    if (u && I.length + d.length > u) {
      const w = `Maximum ${u} file(s) allowed`;
      b.push(w), g?.(w);
      return;
    }
    if (d.forEach((w) => {
      const p = Q(w);
      if (p)
        b.push(`${w.name}: ${p}`), g?.(p);
      else {
        const E = {
          file: w,
          preview: w.type.startsWith("image/") ? URL.createObjectURL(w) : void 0,
          status: "success"
        };
        N.push(E);
      }
    }), b.length > 0 && N.length === 0)
      return;
    const F = a ? [...I, ...N] : N;
    D(F), e?.(F.map((w) => w.file));
  }, Z = (d) => {
    if (d.preventDefault(), d.stopPropagation(), $(!1), i) return;
    const b = Array.from(d.dataTransfer.files);
    b.length > 0 && P(b);
  }, J = (d) => {
    d.preventDefault(), d.stopPropagation(), i || $(!0);
  }, Y = (d) => {
    d.preventDefault(), d.stopPropagation(), $(!1);
  }, ee = (d) => {
    const b = Array.from(d.target.files || []);
    b.length > 0 && P(b), j.current && (j.current.value = "");
  }, te = (d) => {
    const b = I[d];
    b.preview && URL.revokeObjectURL(b.preview);
    const N = I.filter((F, w) => w !== d);
    D(N), e?.(N.map((F) => F.file));
  }, re = () => {
    !i && j.current && j.current.click();
  }, se = (d) => d.type.startsWith("image/") ? /* @__PURE__ */ t(Ne, { className: "h-8 w-8 text-muted-foreground" }) : /* @__PURE__ */ t(we, { className: "h-8 w-8 text-muted-foreground" });
  return /* @__PURE__ */ h("div", { className: v("w-full space-y-4", o), "data-slot": "file-upload", children: [
    /* @__PURE__ */ h(
      "div",
      {
        onClick: re,
        onDrop: Z,
        onDragOver: J,
        onDragLeave: Y,
        className: v(
          "relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
          y && !i && "border-primary bg-primary/5",
          !y && !i && "border-input hover:border-primary/50 hover:bg-accent/50",
          i && "cursor-not-allowed opacity-50",
          l
        ),
        "data-slot": "file-upload-dropzone",
        children: [
          /* @__PURE__ */ t(
            "input",
            {
              ref: j,
              type: "file",
              accept: s,
              multiple: a,
              disabled: i,
              onChange: ee,
              className: "hidden",
              "data-slot": "file-upload-input"
            }
          ),
          /* @__PURE__ */ h("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
            /* @__PURE__ */ t(V, { className: v("h-8 w-8 mb-2", i ? "text-muted-foreground" : "text-primary") }),
            /* @__PURE__ */ h("p", { className: "mb-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ t("span", { className: "font-semibold", children: x || "Click to upload" }),
              !i && " or drag and drop"
            ] }),
            /* @__PURE__ */ h("p", { className: "text-xs text-muted-foreground", children: [
              f || s || "Any file",
              a && " (multiple files allowed)",
              n && ` (max ${H(n)})`
            ] })
          ] })
        ]
      }
    ),
    m && I.length > 0 && /* @__PURE__ */ t("div", { className: "space-y-2", "data-slot": "file-upload-list", children: I.map((d, b) => {
      const { file: N, preview: F, progress: w, status: p, error: E } = d, ae = N.type.startsWith("image/");
      return /* @__PURE__ */ h(
        "div",
        {
          className: "flex items-center gap-3 p-3 border rounded-lg bg-card",
          "data-slot": "file-upload-item",
          children: [
            /* @__PURE__ */ t("div", { className: "flex-shrink-0", children: ae && F ? /* @__PURE__ */ t(
              "img",
              {
                src: F,
                alt: N.name,
                className: "h-12 w-12 object-cover rounded",
                "data-slot": "file-upload-preview"
              }
            ) : /* @__PURE__ */ t("div", { className: "h-12 w-12 flex items-center justify-center bg-muted rounded", children: se(N) }) }),
            /* @__PURE__ */ h("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ t("p", { className: "text-sm font-medium truncate", "data-slot": "file-upload-name", children: N.name }),
                p === "success" && /* @__PURE__ */ t(be, { className: "h-4 w-4 text-green-500 flex-shrink-0" }),
                p === "error" && /* @__PURE__ */ t(xe, { className: "h-4 w-4 text-destructive flex-shrink-0" })
              ] }),
              /* @__PURE__ */ t("p", { className: "text-xs text-muted-foreground", "data-slot": "file-upload-size", children: H(N.size) }),
              E && /* @__PURE__ */ t("p", { className: "text-xs text-destructive mt-1", "data-slot": "file-upload-error", children: E }),
              c && w !== void 0 && /* @__PURE__ */ t("div", { className: "mt-2", "data-slot": "file-upload-progress", children: /* @__PURE__ */ t(qe, { value: w, className: "h-1" }) })
            ] }),
            !i && /* @__PURE__ */ h(
              ue,
              {
                type: "button",
                variant: "ghost",
                size: "icon",
                className: "h-8 w-8 flex-shrink-0",
                onClick: (oe) => {
                  oe.stopPropagation(), te(b);
                },
                "data-slot": "file-upload-remove",
                children: [
                  /* @__PURE__ */ t(B, { className: "h-4 w-4" }),
                  /* @__PURE__ */ t("span", { className: "sr-only", children: "Remove file" })
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
function rt({
  control: r,
  name: e,
  label: s,
  error: a,
  required: n = !1,
  wrapperClassName: u,
  ...i
}) {
  const g = C({ control: r, name: e }), m = a || q(g.errors, `${e}.message`);
  return /* @__PURE__ */ h("div", { className: v("w-full", u), "data-slot": "rhf-file-upload", children: [
    s && /* @__PURE__ */ h(S, { htmlFor: e, className: "mb-2 block", children: [
      s,
      n && /* @__PURE__ */ t("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ t(
      R,
      {
        control: r,
        name: e,
        render: ({ field: { onChange: c, value: o, ...l } }) => {
          const f = o ? (Array.isArray(o) ? o : [o]).filter(Boolean) : [];
          return /* @__PURE__ */ t(
            Se,
            {
              ...i,
              ...l,
              value: f,
              onChange: (x) => {
                i.multiple ? c(x) : c(x.length > 0 ? x[0] : void 0);
              },
              onError: (x) => {
                console.error("File upload error:", x);
              },
              disabled: i.disabled
            }
          );
        }
      }
    ),
    m && /* @__PURE__ */ t("p", { className: "text-sm text-destructive mt-1", "data-slot": "rhf-file-upload-error", children: m })
  ] });
}
const Ie = (r, e) => e === "text" || !r ? r : e === "integer" || e === "currency" ? r.replace(/\D/g, "") : e === "decimal" ? r.replace(/[^\d.,]/g, "").replace(/\./g, ",") : r;
function st({
  control: r,
  name: e,
  label: s,
  format: a = "text",
  required: n,
  wrapperClassName: u,
  callback: i = () => {
  },
  ...g
}) {
  const m = C({ control: r, name: e }), c = q(m.errors, `${e}.message`);
  return /* @__PURE__ */ t(
    R,
    {
      control: r,
      name: e,
      render: ({ field: o }) => /* @__PURE__ */ t("div", { className: v("w-full", u), children: /* @__PURE__ */ t(
        z,
        {
          ...g,
          ...o,
          type: "text",
          label: s,
          error: c,
          required: n,
          value: o.value || "",
          onChange: (l) => {
            const f = Ie(l.target.value, a);
            o.onChange(f), i(f);
          }
        }
      ) })
    }
  );
}
function at({
  control: r,
  register: e,
  name: s,
  label: a,
  placeholder: n,
  className: u,
  wrapperClassName: i,
  required: g = !1,
  ...m
}) {
  const c = C({ control: r, name: s }), o = q(c.errors, `${s}.message`);
  return /* @__PURE__ */ t("div", { className: v("w-full", i), children: /* @__PURE__ */ t(
    z,
    {
      ...m,
      ...e(s),
      label: a,
      error: o,
      required: g,
      className: u,
      placeholder: n
    }
  ) });
}
function $e({ ...r }) {
  return /* @__PURE__ */ t(_.Root, { "data-slot": "select", ...r });
}
function De({ ...r }) {
  return /* @__PURE__ */ t(_.Value, { "data-slot": "select-value", ...r });
}
function Ee({
  className: r,
  size: e = "md",
  children: s,
  label: a,
  error: n,
  required: u,
  id: i,
  ...g
}) {
  const m = a || n, c = O[e ?? "md"], o = /* @__PURE__ */ h(
    _.Trigger,
    {
      id: i,
      "data-slot": "select-trigger",
      "data-size": e,
      "aria-invalid": !!n,
      className: v(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-transparent whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        c.height,
        c.text,
        c.padding,
        {
          "[&_svg:not([class*='size-'])]:size-3": e === "xxs",
          "[&_svg:not([class*='size-'])]:size-3.5": e === "xs",
          "[&_svg:not([class*='size-'])]:size-4": e === "sm" || e === "md",
          "[&_svg:not([class*='size-'])]:size-5": e === "lg" || e === "xl",
          "[&_svg:not([class*='size-'])]:size-6": e === "xxl"
        },
        n ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        r
      ),
      ...g,
      children: [
        s,
        /* @__PURE__ */ t(_.Icon, { asChild: !0, children: /* @__PURE__ */ t(G, { className: v("opacity-50", c.icon) }) })
      ]
    }
  );
  return m ? /* @__PURE__ */ h("div", { className: "flex flex-col gap-1", children: [
    a && /* @__PURE__ */ h(S, { htmlFor: i, children: [
      a,
      u && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    o,
    n && /* @__PURE__ */ t("div", { className: "text-sm text-destructive", role: "alert", children: n })
  ] }) : o;
}
function Le({
  className: r,
  children: e,
  position: s = "item-aligned",
  align: a = "center",
  ...n
}) {
  return /* @__PURE__ */ t(_.Portal, { children: /* @__PURE__ */ h(
    _.Content,
    {
      "data-slot": "select-content",
      className: v(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        s === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        r
      ),
      position: s,
      align: a,
      ...n,
      children: [
        /* @__PURE__ */ t(ze, {}),
        /* @__PURE__ */ t(
          _.Viewport,
          {
            className: v(
              "p-1",
              s === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: e
          }
        ),
        /* @__PURE__ */ t(Ae, {})
      ]
    }
  ) });
}
function je({
  className: r,
  children: e,
  ...s
}) {
  return /* @__PURE__ */ h(
    _.Item,
    {
      "data-slot": "select-item",
      className: v(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        r
      ),
      ...s,
      children: [
        /* @__PURE__ */ t(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ t(_.ItemIndicator, { children: /* @__PURE__ */ t(ye, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ t(_.ItemText, { children: e })
      ]
    }
  );
}
function ze({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ t(
    _.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: v("flex justify-center items-center py-1 cursor-default", r),
      ...e,
      children: /* @__PURE__ */ t(Fe, { className: "size-4" })
    }
  );
}
function Ae({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ t(
    _.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: v("flex justify-center items-center py-1 cursor-default", r),
      ...e,
      children: /* @__PURE__ */ t(G, { className: "size-4" })
    }
  );
}
function ot({
  control: r,
  name: e,
  options: s,
  label: a,
  error: n,
  required: u = !1,
  placeholder: i = "Select options...",
  wrapperClassName: g
}) {
  const m = C({ control: r, name: e }), c = n || q(m.errors, `${e}.message`);
  return /* @__PURE__ */ h("div", { className: v("w-full", g), children: [
    a && /* @__PURE__ */ h(S, { htmlFor: e, className: "mb-2 block", children: [
      a,
      u && /* @__PURE__ */ t("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ t(
      R,
      {
        control: r,
        name: e,
        render: ({ field: o }) => {
          const l = Array.isArray(o.value) ? o.value : [];
          return /* @__PURE__ */ h("div", { className: "space-y-2", children: [
            /* @__PURE__ */ h(
              $e,
              {
                value: "",
                onValueChange: (f) => {
                  l.includes(f) || o.onChange([...l, f]);
                },
                children: [
                  /* @__PURE__ */ t(Ee, { className: v(c && "border-destructive"), children: /* @__PURE__ */ t(De, { placeholder: i }) }),
                  /* @__PURE__ */ t(Le, { children: s.map((f) => /* @__PURE__ */ t(
                    je,
                    {
                      value: f.value,
                      disabled: f.disabled || l.includes(f.value),
                      children: f.label
                    },
                    f.value
                  )) })
                ]
              }
            ),
            l.length > 0 && /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-2", children: l.map((f) => {
              const x = s.find((y) => y.value === f);
              return /* @__PURE__ */ h(W, { variant: "secondary", className: "gap-1", children: [
                x?.label || f,
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      o.onChange(l.filter((y) => y !== f));
                    },
                    className: "ml-1 hover:bg-destructive/20 rounded-full p-0.5",
                    children: /* @__PURE__ */ t(B, { className: "h-3 w-3" })
                  }
                )
              ] }, f);
            }) })
          ] });
        }
      }
    ),
    c && /* @__PURE__ */ t("p", { className: "text-sm text-destructive mt-1", children: c })
  ] });
}
function nt({
  control: r,
  register: e,
  name: s,
  label: a,
  placeholder: n,
  className: u,
  wrapperClassName: i,
  required: g = !1,
  min: m,
  max: c,
  step: o,
  ...l
}) {
  const f = C({ control: r, name: s }), x = q(f.errors, `${s}.message`);
  return /* @__PURE__ */ t("div", { className: v("w-full", i), children: /* @__PURE__ */ t(
    z,
    {
      ...l,
      ...e(s, { valueAsNumber: !0 }),
      type: "number",
      label: a,
      error: x,
      required: g,
      className: u,
      placeholder: n,
      min: m,
      max: c,
      step: o
    }
  ) });
}
function Ue({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ t(
    ke.Root,
    {
      "data-slot": "radio-group",
      className: v("grid gap-3", r),
      ...e
    }
  );
}
function lt({
  control: r,
  name: e,
  label: s,
  required: a,
  children: n,
  className: u,
  callback: i = () => {
  },
  onBeforeChange: g,
  ...m
}) {
  const c = (o, l) => {
    const f = () => {
      l.onChange(o), i(o);
    };
    g ? g(o, l.value, f) : f();
  };
  return /* @__PURE__ */ t(
    R,
    {
      control: r,
      name: e,
      render: ({ field: o, fieldState: { error: l } }) => /* @__PURE__ */ h("div", { className: "space-y-1.5 w-full", children: [
        s && /* @__PURE__ */ h(
          S,
          {
            htmlFor: m.id || e,
            className: "text-foreground leading-5 cursor-pointer select-none flex-1",
            children: [
              s,
              a && /* @__PURE__ */ t("span", { className: "font-semibold text-destructive ml-1", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ t(
          Ue,
          {
            ...m,
            id: m.id || e,
            className: v("flex flex-row gap-4", u),
            onValueChange: (f) => {
              c(f, o);
            },
            value: o.value?.toString(),
            children: n
          }
        ),
        l && /* @__PURE__ */ t("p", { className: "text-xs text-destructive", children: l.message })
      ] })
    }
  );
}
function He({
  className: r,
  size: e = "md",
  ...s
}) {
  const a = O[e ?? "md"], n = {
    xxs: { height: "h-3.5", width: "w-6", thumb: a.icon },
    xs: { height: "h-4", width: "w-7", thumb: a.icon },
    sm: { height: "h-4.5", width: "w-8", thumb: a.icon },
    md: { height: "h-5", width: "w-9", thumb: a.icon },
    lg: { height: "h-6", width: "w-11", thumb: a.icon },
    xl: { height: "h-6", width: "w-12", thumb: a.icon },
    xxl: { height: "h-7", width: "w-14", thumb: a.icon }
  }[e ?? "md"];
  return /* @__PURE__ */ t(
    M.Root,
    {
      "data-slot": "switch",
      "data-size": e,
      className: v(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.height,
        n.width,
        r
      ),
      ...s,
      children: /* @__PURE__ */ t(
        M.Thumb,
        {
          "data-slot": "switch-thumb",
          className: v(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
            n.thumb
          )
        }
      )
    }
  );
}
function it({
  control: r,
  name: e,
  label: s,
  required: a,
  callback: n = () => {
  },
  onBeforeChange: u,
  className: i,
  ...g
}) {
  const m = (c, o) => {
    const l = () => {
      o.onChange(c), n(c);
    };
    u ? u(c, o.value, l) : l();
  };
  return /* @__PURE__ */ t(
    R,
    {
      control: r,
      name: e,
      render: ({ field: c, fieldState: { error: o } }) => /* @__PURE__ */ h("div", { className: "space-y-1.5 w-full", children: [
        /* @__PURE__ */ h("div", { className: v("flex items-center gap-3", i), children: [
          s && /* @__PURE__ */ h(
            S,
            {
              htmlFor: g.id || e,
              className: "text-foreground leading-5 cursor-pointer select-none flex-1",
              children: [
                s,
                a && /* @__PURE__ */ t("span", { className: "font-semibold text-destructive ml-1", children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ t(
            He,
            {
              ...g,
              id: g.id || e,
              checked: !!c.value,
              onCheckedChange: (l) => {
                m(l, c);
              }
            }
          )
        ] }),
        o && /* @__PURE__ */ t("p", { className: "text-xs text-destructive", children: o.message })
      ] })
    }
  );
}
function ct({
  control: r,
  register: e,
  name: s,
  label: a,
  placeholder: n,
  className: u,
  wrapperClassName: i,
  required: g = !1,
  showMaxLength: m = !0,
  maxLength: c = 512,
  rows: o = 5,
  ...l
}) {
  const f = C({ control: r, name: s }), x = q(f.errors, `${s}.message`);
  return /* @__PURE__ */ h("div", { className: v("relative w-full", i), children: [
    /* @__PURE__ */ t(
      me,
      {
        ...l,
        ...e(s),
        label: a,
        error: x,
        required: g,
        className: u,
        placeholder: n,
        maxLength: c,
        rows: o
      }
    ),
    m && /* @__PURE__ */ t(Pe, { control: r, name: s, maxLength: c })
  ] });
}
const Pe = ({
  control: r,
  name: e,
  maxLength: s
}) => {
  const { field: a } = le({ control: r, name: e });
  return /* @__PURE__ */ h(W, { variant: "secondary", className: "absolute rounded-sm right-3 bottom-2 text-[8px]", children: [
    a.value?.length || 0,
    "/",
    s
  ] });
};
function dt({
  control: r,
  register: e,
  name: s,
  label: a,
  placeholder: n = "HH:mm",
  className: u,
  wrapperClassName: i,
  required: g = !1,
  ...m
}) {
  const c = C({ control: r, name: s }), o = q(c.errors, `${s}.message`);
  return /* @__PURE__ */ t("div", { className: v("w-full", i), children: /* @__PURE__ */ t(
    z,
    {
      ...m,
      ...e(s),
      type: "time",
      label: a,
      error: o,
      required: g,
      className: u,
      placeholder: n
    }
  ) });
}
function ut({
  control: r,
  name: e,
  label: s,
  error: a,
  required: n = !1,
  accept: u,
  multiple: i = !1,
  wrapperClassName: g,
  className: m
}) {
  const c = C({ control: r, name: e }), o = a || q(c.errors, `${e}.message`);
  return /* @__PURE__ */ h("div", { className: v("w-full", g), children: [
    s && /* @__PURE__ */ h(S, { htmlFor: e, className: "mb-2 block", children: [
      s,
      n && /* @__PURE__ */ t("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ t(
      R,
      {
        control: r,
        name: e,
        render: ({ field: { onChange: l, value: f, ...x } }) => /* @__PURE__ */ h("div", { className: "space-y-2", children: [
          /* @__PURE__ */ h(
            S,
            {
              htmlFor: e,
              className: v(
                "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent transition-colors",
                o && "border-destructive",
                m
              ),
              children: [
                /* @__PURE__ */ h("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
                  /* @__PURE__ */ t(V, { className: "w-8 h-8 mb-2 text-muted-foreground" }),
                  /* @__PURE__ */ h("p", { className: "mb-2 text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ t("span", { className: "font-semibold", children: "Click to upload" }),
                    " or drag and drop"
                  ] }),
                  /* @__PURE__ */ h("p", { className: "text-xs text-muted-foreground", children: [
                    u || "Any file",
                    i && " (multiple files allowed)"
                  ] })
                ] }),
                /* @__PURE__ */ t(
                  z,
                  {
                    ...x,
                    id: e,
                    type: "file",
                    accept: u,
                    multiple: i,
                    className: "hidden",
                    onChange: (y) => {
                      const $ = y.target.files;
                      $ && l(i ? Array.from($) : $[0]);
                    }
                  }
                )
              ]
            }
          ),
          f && /* @__PURE__ */ t("p", { className: "text-sm text-muted-foreground", children: i ? `${Array.isArray(f) ? f.length : 0} file(s) selected` : typeof f == "string" ? f : f?.name || "File selected" })
        ] })
      }
    ),
    o && /* @__PURE__ */ t("p", { className: "text-sm text-destructive mt-1", children: o })
  ] });
}
const mt = ie, K = k.createContext({}), ft = ({
  ...r
}) => /* @__PURE__ */ t(K.Provider, { value: { name: r.name }, children: /* @__PURE__ */ t(R, { ...r }) }), U = () => {
  const r = k.useContext(K), e = k.useContext(X), { getFieldState: s } = ce(), a = C({ name: r.name }), n = s(r.name, a);
  if (!r)
    throw new Error("useFormField should be used within <FormField>");
  const { id: u } = e;
  return {
    id: u,
    name: r.name,
    formItemId: `${u}-form-item`,
    formDescriptionId: `${u}-form-item-description`,
    formMessageId: `${u}-form-item-message`,
    ...n
  };
}, X = k.createContext({});
function ht({ className: r, ...e }) {
  const s = k.useId();
  return /* @__PURE__ */ t(X.Provider, { value: { id: s }, children: /* @__PURE__ */ t("div", { "data-slot": "form-item", className: v("grid gap-2", r), ...e }) });
}
function gt({ className: r, ...e }) {
  const { error: s, formItemId: a } = U();
  return /* @__PURE__ */ t(
    S,
    {
      "data-slot": "form-label",
      "data-error": !!s,
      className: v("data-[error=true]:text-destructive", r),
      htmlFor: a,
      ...e
    }
  );
}
function pt({ ...r }) {
  const { error: e, formItemId: s, formDescriptionId: a, formMessageId: n } = U();
  return /* @__PURE__ */ t(
    ne,
    {
      "data-slot": "form-control",
      id: s,
      "aria-describedby": e ? `${a} ${n}` : `${a}`,
      "aria-invalid": !!e,
      ...r
    }
  );
}
function vt({ className: r, ...e }) {
  const { formDescriptionId: s } = U();
  return /* @__PURE__ */ t(
    "p",
    {
      "data-slot": "form-description",
      id: s,
      className: v("text-muted-foreground text-sm", r),
      ...e
    }
  );
}
function bt({ className: r, ...e }) {
  const { error: s, formMessageId: a } = U(), n = s ? String(s?.message ?? "") : e.children;
  return n ? /* @__PURE__ */ t(
    "p",
    {
      "data-slot": "form-message",
      id: a,
      className: v("text-destructive text-sm", r),
      ...e,
      children: n
    }
  ) : null;
}
export {
  mt as Form,
  pt as FormControl,
  vt as FormDescription,
  ft as FormField,
  ht as FormItem,
  gt as FormLabel,
  bt as FormMessage,
  Qe as RHFCheckboxGroup,
  Ze as RHFCombobox,
  Je as RHFDatePicker,
  Ye as RHFDateRangePicker,
  et as RHFEditor,
  tt as RHFErrorMessage,
  rt as RHFFileUpload,
  st as RHFFormattedInput,
  at as RHFInput,
  ot as RHFMultiSelect,
  nt as RHFNumberInput,
  lt as RHFRadioGroup,
  it as RHFSwitch,
  ct as RHFTextArea,
  dt as RHFTimePicker,
  ut as RHFUpload,
  U as useFormField
};
//# sourceMappingURL=index-rhf.mjs.map
