import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
function ImpactCounter({ value, label, icon, delay = 0 }) {
  const [displayValue, setDisplayValue] = reactExports.useState("0");
  const [visible, setVisible] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  const { targetNum, suffix, isNumeric } = reactExports.useMemo(() => {
    const match = value.match(/^([\d,]+)/);
    if (!match) return { targetNum: 0, suffix: "", isNumeric: false };
    return {
      targetNum: parseInt(match[0].replace(/,/g, ""), 10),
      suffix: value.slice(match[0].length),
      isNumeric: true
    };
  }, [value]);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  reactExports.useEffect(() => {
    if (!visible) return;
    if (!isNumeric) {
      setDisplayValue(value);
      return;
    }
    const duration = 1500;
    const steps = 60;
    const increment = targetNum / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        setDisplayValue(targetNum.toLocaleString() + suffix);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current).toLocaleString() + suffix);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [visible, isNumeric, targetNum, suffix, value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "flex flex-col items-center px-2 text-center animate-fade-up",
      style: { animationDelay: `${delay}ms` },
      children: [
        icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex justify-center text-accent", children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold leading-tight text-primary-foreground sm:text-3xl md:text-4xl lg:text-5xl", children: displayValue }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 text-xs uppercase tracking-wider text-primary-foreground/70 md:text-sm", children: label })
      ]
    }
  );
}
export {
  ImpactCounter as I
};
