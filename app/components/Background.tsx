// components/Background.tsx
'use client';

import { ReactNode } from 'react';

interface BackgroundProps {
  children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        className="fixed inset-0 w-full h-full object-cover -z-50 pointer-events-none select-none touch-none"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/fondo.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Contenido encima del video */}
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default Background;


