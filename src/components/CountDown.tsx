import React, { useEffect, useState } from 'react';

const SESSIONTIMEINSECONDS = 2700;

export const CountDown: React.FC = () => {
  const [seconds, setSeconds] = useState(SESSIONTIMEINSECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      seconds != 0 ? setSeconds((s) => s - 1) : null;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const splittedMin = (seconds / 60).toString().split('.')[0];
  const splittedSec = seconds - parseInt(splittedMin) * 60;

  return (
    <div className="flex w-screen h-screen">
      <p className="self-center text-center w-full font-lato font-black text-[5rem] tracking-[0.1em]">
        {splittedMin}:{splittedSec < 10 ? '0' + splittedSec.toString() : splittedSec.toString()}
      </p>
    </div>
  );
};
