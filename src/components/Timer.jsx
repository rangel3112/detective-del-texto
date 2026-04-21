import { useEffect, useState } from 'react';

function Timer({ duration, onExpire, disabled }) {
  const [seconds, setSeconds] = useState(duration);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    setSeconds(duration);
    setExpired(false);
  }, [duration]);

  useEffect(() => {
    if (disabled || expired) return;
    if (seconds <= 0) {
      setExpired(true);
      onExpire();
      return;
    }

    const timerId = window.setTimeout(() => {
      setSeconds((current) => current - 1);
    }, 1000);

    return () => window.clearTimeout(timerId);
  }, [seconds, disabled, expired, onExpire]);

  let timerClass = 'timer';
  if (seconds <= 5) timerClass += ' danger';
  else if (seconds <= 10) timerClass += ' warning';

  return (
    <div className={timerClass}>
      <span>⏱️</span>
      <span>{seconds}s</span>
    </div>
  );
}

export default Timer;
