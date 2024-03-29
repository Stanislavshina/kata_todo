import React, { useEffect, useState } from 'react';
import './Timer.css';

export default function Timer({ min = 0, sec = 0 }) {
  const time = 60 * min + sec;
  const [timeLeft, setTimeLeft] = useState(time);
  const [flag, setFlag] = useState(false);

  const currTime = (t) => t.toString().padStart(2, '0');

  const minutes = currTime(Math.floor(timeLeft / 60));
  const seconds = currTime(timeLeft - minutes * 60);
  useEffect(() => {
    const interval = setInterval(() => {
      flag && setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
    if (timeLeft === 0) return setFlag(false);
    return () => clearInterval(interval);
  }, [timeLeft, flag]);

  const toogleStart = () => setFlag(!flag);

  return (
    <span className="description">
      <p>
        {minutes}:{seconds}
      </p>
      {flag ? (
        <button className={'icon icon-pause'} onClick={toogleStart}></button>
      ) : (
        <button className={'icon icon-play'} onClick={toogleStart}></button>
      )}
    </span>
  );
}
