import { useEffect, useState } from 'react';

export default function AnimatedConfidence({ value, loading }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (loading) return;

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setDisplayValue(current);
      if (current >= value) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, [value, loading]);

  return (
    <div className="absolute w-[95px] h-[73px] top-[52px] left-[42px] font-headings-heading-1 text-white text-center text-[length:var(--headings-heading-1-font-size)] leading-[var(--headings-heading-1-line-height)]">
      {loading ? (
        <span className="animate-pulse text-sm">Loading…</span>
      ) : (
        `${displayValue}%`
      )}
    </div>
  );
}
