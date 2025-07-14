// components/Background.tsx
'use client';

import { ReactNode, useEffect, useRef } from 'react';

interface BackgroundProps {
  children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Previene gestos como zoom o selección
      video.addEventListener('contextmenu', (e) => e.preventDefault());
      video.setAttribute('tabIndex', '-1'); // No se puede enfocar
    }
  }, []);

  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
      {/* Video de fondo sin interacción ni zoom */}
      <video
        ref={videoRef}
        className="fixed inset-0 w-full h-full object-cover -z-50
                   pointer-events-none select-none touch-none"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/fondo.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Capa superior con contenido */}
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default Background;
