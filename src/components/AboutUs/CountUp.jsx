import React, { useEffect, useMemo, useRef, useState } from "react";

function parseStatValue(raw) {
  const str = String(raw).trim();

  // 24/7 => ثابت
  if (str.includes("/")) return { type: "static", raw: str };

  const hasPlus = str.includes("+");
  const hasPercent = str.includes("%");

  const numeric = str.replace(/[^\d.]/g, "");
  const value = numeric ? Number(numeric) : 0;

  return {
    type: "number",
    value,
    hasPlus,
    hasPercent,
    hadComma: /,/.test(str),
  };
}

function formatNumber(n, hadComma) {
  const rounded = Math.round(n);
  return hadComma ? rounded.toLocaleString("en-US") : String(rounded);
}

export default function CountUp({
  value,
  duration = 1200,
  start = 0,
  once = true,
}) {
  const elRef = useRef(null);
  const rafRef = useRef(null);
  const startedRef = useRef(false);

  const parsed = useMemo(() => parseStatValue(value), [value]);

  const [display, setDisplay] = useState(() => {
    if (parsed.type === "static") return parsed.raw;
    const prefix = parsed.hasPlus ? "+" : "";
    const suffix = parsed.hasPercent ? "%" : "";
    return `${prefix}${formatNumber(start, parsed.hadComma)}${suffix}`;
  });
  useEffect(() => {
    startedRef.current = false;
  
    if (parsed.type === "static") {
      setDisplay(parsed.raw);
      return;
    }
  
    const prefix = parsed.hasPlus ? "+" : "";
    const suffix = parsed.hasPercent ? "%" : "";
    setDisplay(`${prefix}${formatNumber(start, parsed.hadComma)}${suffix}`);
  }, [value, start, duration]); // أو [parsed, start, duration]
  

  useEffect(() => {
    if (parsed.type === "static") {
      setDisplay(parsed.raw);
      return;
    }

    const node = elRef.current;
    if (!node) return;

    const animate = () => {
      if (once && startedRef.current) return;
      startedRef.current = true;

      const from = Number(start) || 0;
      const to = parsed.value;
      const startTime = performance.now();

      const tick = (now) => {
        const t = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        const current = from + (to - from) * eased;

        const prefix = parsed.hasPlus ? "+" : "";
        const suffix = parsed.hasPercent ? "%" : "";
        setDisplay(`${prefix}${formatNumber(current, parsed.hadComma)}${suffix}`);

        if (t < 1) rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    // ✅ شغّل فورًا لو العنصر ظاهر بالفعل
    const rect = node.getBoundingClientRect();
    const inView =
      rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.1;
    if (inView) animate();

    // ✅ وبرضه راقب السكرول بعد كده
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) animate();
          else if (!once) startedRef.current = false;
        });
      },
      { threshold: 0.25 }
    );

    io.observe(node);

    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [parsed, duration, start, once]);

  return <span ref={elRef}>{display}</span>;
}
