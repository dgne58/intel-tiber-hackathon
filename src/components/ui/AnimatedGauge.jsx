import React, { useState, useEffect } from 'react';

export default function AnimatedGauge({
  percentage,
  // Optional Tailwind classes for sizing (defaults to 9rem × 9rem)
  sizeClass = 'w-36 h-36',
  // Optional Tailwind stroke-color classes for the track and progress
  trackColorClass = 'stroke-gray-800',
  progressColorClass = 'stroke-white',
  // How long the fill animation takes (must match a Tailwind duration utility)
  durationClass = 'duration-500',
}) {
  // Stroke width of the gauge arc
  const strokeWidth = 8;
  // Radius so that circle fits perfectly in a 100×100 viewBox
  const radius = 50 - strokeWidth / 2;
  // Circumference of that circle
  const circumference = 2 * Math.PI * radius;

  // Local state for the current dash-offset
  const [dashOffset, setDashOffset] = useState(circumference);

  useEffect(() => {
    // Clamp to [0,100]
    const clamped = Math.min(100, Math.max(0, percentage));
    // Compute how far “empty” the arc should be
    const newOffset = ((100 - clamped) / 100) * circumference;
    // A slight timeout lets the initial render show at 0%
    setTimeout(() => setDashOffset(newOffset), 50);
  }, [percentage, circumference]);

  return (
    <div className={`relative flex items-center justify-center ${sizeClass}`}>
      <svg className="-rotate-90 w-full h-full" viewBox="0 0 100 100">
        {/* Background track */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className={trackColorClass}
        />
        {/* Animated progress arc */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className={`${progressColorClass} transition-all ${durationClass} ease-out`}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
      {/* Centered percentage text */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
        {Math.min(100, Math.max(0, percentage))}%
      </div>
    </div>
  );
}
