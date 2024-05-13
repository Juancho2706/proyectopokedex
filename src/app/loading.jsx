"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

function Loading() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (cargando) {
    return (
      <div className='z-30 absolute transition ease-in-out delay-700 bg-orange-200 w-screen h-screen flex items-center justify-center'>
        <Image src='/icon.ico' width={200} height={200} alt="PokeIcon" className="motion-safe:animate-spin" />
      </div>
    );
  }
  return <></>;
}

export default Loading;
