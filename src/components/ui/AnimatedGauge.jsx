import React, { useState, useEffect } from 'react';

export default function AnimatedGauge({
  percentage,
  loading = false,              // ← new prop
  sizeClass = 'w-36 h-36',
  trackColorClass = 'stroke-gray-800',
  progressColorClass = 'stroke-white',
  durationClass = 'duration-500',
}) {
  const strokeWidth = 8;
  const radius = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const [dashOffset, setDashOffset] = useState(circumference);

  useEffect(() => {
    if (loading) {
      // keep gauge at 0 while loading
      setDashOffset(circumference);
      return;
    }
    const clamped = Math.min(100, Math.max(0, percentage));
    const newOffset = ((100 - clamped) / 100) * circumference;
    // small delay so the CSS transition fires
    setTimeout(() => setDashOffset(newOffset), 50);
  }, [percentage, loading, circumference]);

  return (
    <div className={`relative flex items-center justify-center ${sizeClass}`}>
      <svg className="-rotate-90 w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50" cy="50" r={radius}
          fill="none" strokeWidth={strokeWidth}
          className={trackColorClass}
        />
        <circle
          cx="50" cy="50" r={radius}
          fill="none" strokeWidth={strokeWidth}
          className={`${progressColorClass} transition-all ${durationClass} ease-out`}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
        {loading
          ? <span className="animate-pulse text-sm">Loading…</span>
          : `${Math.min(100, Math.max(0, percentage))}%`
        }
      </div>
    </div>
  );
}
