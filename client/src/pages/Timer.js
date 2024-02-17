import { useState, useEffect } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(60);
  useEffect(() => {
    let timerId;
    if (timer !== 0)
      timerId = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);

    return () => clearInterval(timerId);
  }, [timer, setTimer]);
  const minute = Math.floor(timer / 60);
  const seconds = timer % 60;
  return (
    <div className="Timer">
      {minute}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}