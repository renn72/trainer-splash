import React from "react";

const BarbellIcon = ({ size = 64, color = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Left weights - chunkier and rounded */}
    <rect x="4" y="18" width="3" height="28" rx="1.5" />
    <rect x="8" y="16" width="4" height="32" rx="2" />
    <rect x="13" y="14" width="5" height="36" rx="2.5" />

    {/* Bar */}
    <rect x="18" y="30" width="28" height="4" rx="2" />

    {/* Right weights - mirrored */}
    <rect x="48" y="14" width="5" height="36" rx="2.5" />
    <rect x="54" y="16" width="4" height="32" rx="2" />
    <rect x="59" y="18" width="3" height="28" rx="1.5" />
  </svg>
);

export default BarbellIcon;

