import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/site-data";
import { useCountUp } from "@/hooks/use-count-up";

function Stat({ value, suffix, label, active }) {
  const n = useCountUp(value, 2000, active);
  
  return (
    <div className="text-center">
      <div className="font-display text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
        {n.toLocaleString("en-IN")}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-1.5 text-xs font-medium text-white/70">
        {label}
      </div>
    </div>
  );
}

function Stats() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-gradient-to-br from-navy to-[oklch(0.2_0.06_255)] py-12 sm:py-14">
      <div ref={ref} className="container-x max-w-5xl mx-auto grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {STATS.map((s) => (
          <Stat key={s.label} {...s} active={active} />
        ))}
      </div>
    </section>
  );
}

export { Stats };