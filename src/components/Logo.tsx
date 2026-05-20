import React from 'react';

export function Logo({ className = "h-8", src = "/logo.png" }: { className?: string; src?: string }) {
  return (
    <img 
      src={`${src}?v=${Date.now()}`} 
      alt="Adna Cosmetics Logo" 
      className={`object-contain ${className}`}
    />
  );
}
