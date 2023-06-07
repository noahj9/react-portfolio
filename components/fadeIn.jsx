import React, { useEffect, useState } from 'react';

const FadeInElement = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`transition-opacity duration-[3000ms] ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="py-5 md:py-10 flex justify-center text-center text-4xl md:text-8xl text-purple-500 mt-5 md:mt-10 font-bold">Hi, I'm Noah</h1>
    </div>
  );
};

export default FadeInElement;