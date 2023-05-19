import { useState, useEffect } from "react";

function Sayac() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (seconds > 59) {
      setMinutes(m => m + 1);
      setSeconds(0);
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes > 59) {
      setHours(h => h + 1);
      setMinutes(0);
    }
  }, [minutes]);

  function baslat() {
    const id = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    setIntervalId(id);
  }

  function duraklat() {
    clearInterval(intervalId);
    setIntervalId(null);
  }

  return (
    <div className="sayac">
      <div className="sayaclar">
        <span>{hours < 10 ? "0" + hours : hours}</span>:
        <span>{minutes < 10 ? "0" + minutes : minutes}</span>:
        <span>{seconds < 10 ? "0" + seconds : seconds}</span>
      </div>
      <div className="buttonlar">
        <button onClick={baslat}>başlat</button>
        <button onClick={duraklat}>duraklat</button>
      </div>
    </div>
  );
}

export default Sayac;
