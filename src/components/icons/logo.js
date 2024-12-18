import React from 'react';

const IconLogoWithStylizedY = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        {/* Outer polygon shape */}
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />

        {/* Central "Y" shape */}
        <path d="M39 30 L47 45 Q43 50 39 45 Q35 50 31 45 L39 30 Z" fill="currentColor" />
        <rect x="37" y="45" width="4" height="20" fill="currentColor" rx="2" />
      </g>
    </g>
  </svg>
);

export default IconLogoWithStylizedY;
