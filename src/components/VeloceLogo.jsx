import React from 'react';

export default function VeloceLogo({ className = '', color = 'currentColor', height = '100%', width = 'auto' }) {
  return (
    <svg 
      viewBox="0 0 440 100" 
      height={height} 
      width={width} 
      className={className} 
      style={{ display: 'block' }}
      aria-label="VÉLOCE"
    >
      <g fill={color}>
        {/* V: Block V with flat bottom and slanted interior */}
        <polygon points="0,15 22,15 35,68 48,15 70,15 48,95 22,95" />
        
        {/* Accent for É */}
        <polygon points="90,0 115,-12 122,-2 97,10" />
        {/* É: Block E */}
        <polygon points="76,15 140,15 140,33 98,33 98,46 132,46 132,64 98,64 98,77 140,77 140,95 76,95" />
        
        {/* L: Block L */}
        <polygon points="148,15 170,15 170,77 212,77 212,95 148,95" />
        
        {/* O: Octagonal/Bevelled Block O */}
        <path 
          fillRule="evenodd" 
          d="M232,15 H276 L292,31 V79 L276,95 H232 L216,79 V31 Z M238,33 V77 H270 V33 Z" 
        />
        
        {/* C: Octagonal/Bevelled Block C */}
        <polygon points="300,31 316,15 368,15 368,33 322,33 322,77 368,77 368,95 316,95 300,79" />
        
        {/* E: Block E */}
        <polygon points="376,15 440,15 440,33 398,33 398,46 432,46 432,64 398,64 398,77 440,77 440,95 376,95" />
      </g>
    </svg>
  );
}
