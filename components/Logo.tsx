
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'green' | 'white';
}

/**
 * Sirenexis Official Logo Component
 * 
 * INSTRUCTIONS:
 * 1. Upload the solid logo as 'logo.png'
 * 2. Upload the outline logo as 'logo-outline.png'
 * 3. Both should have transparent backgrounds.
 */
const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8", variant = 'green' }) => {
  const isWhite = variant === 'white';
  
  // Use the outline file for the 'white' variant, solid for 'green'
  const src = isWhite ? './logo-outline.png' : './logo.png';
  
  return (
    <div className={`${className} flex items-center justify-center overflow-hidden`}>
      <img 
        src={src} 
        alt="Sirenexis" 
        className={`w-full h-full object-contain transition-all duration-500 ${
          isWhite ? 'brightness-0 invert' : ''
        }`}
        onError={(e) => {
          // Fallback: If files are missing, show a high-end minimalist placeholder
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<div class="flex items-center justify-center w-full h-full border-2 border-current rounded-full"><span class="font-black text-[40%] tracking-tighter">S.</span></div>`;
            parent.className += isWhite ? " text-white" : " text-sirenexis-green";
          }
        }}
      />
    </div>
  );
};

export default Logo;
