"use client";
import { useEffect, useRef } from 'react';



function Botoncry({ sonido }) {
  const audioRef = useRef();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio(sonido);
    }
  }, [sonido]);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const audionuevo = new Audio(sonido);
  return (
    <div className="max-h-6">
      <button
        onClick={() => {
          playSound()
        }}
      >
        <img src="/wave-sound.png" className="max-h-6"></img>
      </button>
    </div>
  );
}

export default Botoncry;
