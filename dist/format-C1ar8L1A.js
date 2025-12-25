const s = {
  short: "dd/MM/yyyy",
  long: "dd MMMM yyyy",
  datetime: "dd/MM/yyyy HH:mm",
  datetimeLong: "dd MMMM yyyy HH:mm",
  time: "HH:mm",
  iso: "yyyy-MM-dd",
  isoDateTime: "yyyy-MM-dd'T'HH:mm:ss"
};
function u(t, e = "en-US", r = "USD") {
  return new Intl.NumberFormat(e, {
    style: "currency",
    currency: r
  }).format(t);
}
function g(t, e = "short") {
  const r = typeof t == "string" || typeof t == "number" ? new Date(t) : t;
  if (isNaN(r.getTime()))
    return "";
  if (e in s) {
    const n = s[e];
    return c(r, n);
  }
  return c(r, e);
}
function c(t, e) {
  const r = t.getDate().toString().padStart(2, "0"), n = (t.getMonth() + 1).toString().padStart(2, "0"), a = t.getFullYear(), i = t.getHours().toString().padStart(2, "0"), y = t.getMinutes().toString().padStart(2, "0"), M = t.getSeconds().toString().padStart(2, "0"), o = [
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
  return e.replace(/dd/g, r).replace(/MM/g, n).replace(/yyyy/g, a.toString()).replace(/MMMM/g, o[t.getMonth()]).replace(/MMM/g, o[t.getMonth()].substring(0, 3)).replace(/HH/g, i).replace(/mm/g, y).replace(/ss/g, M);
}
function l(t) {
  const e = t.replace(/\D/g, "");
  return e.length === 10 ? `${e.slice(0, 4)} ${e.slice(4, 7)} ${e.slice(7)}` : e.length === 11 ? `${e.slice(0, 4)} ${e.slice(4, 7)} ${e.slice(7)}` : t;
}
function m(t) {
  if (t === 0) return "0 Bytes";
  const e = 1024, r = ["Bytes", "KB", "MB", "GB", "TB", "PB"], n = Math.floor(Math.log(t) / Math.log(e));
  return Math.round(t / Math.pow(e, n) * 100) / 100 + " " + r[n];
}
function f(t, e, r = "...") {
  return t.length <= e ? t : t.slice(0, e) + r;
}
export {
  s as D,
  u as a,
  g as b,
  l as c,
  m as f,
  f as t
};
//# sourceMappingURL=format-C1ar8L1A.js.map
