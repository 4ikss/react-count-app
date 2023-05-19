import { useState, useEffect, useRef } from "react";

function Sayac() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const pauseButton = useRef();
  const startButton = useRef();
  
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

  function sifirla() {
    clearInterval(intervalId);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    pauseButton.current.setAttribute("disabled", "disabled");
    startButton.current.removeAttribute("disabled");
  }

  return (
    <div className="sayac">
      <div className="sayaclar">
        <span>{ hours < 10 ? "0" + hours : hours}</span>:
        <span>{ minutes < 10 ? "0" + minutes : minutes}</span>:
        <span>{ seconds < 10 ? "0" + seconds : seconds}</span>
      </div>
      <div className="buttonlar">
        <button id="start-button" class="fi fi-br-play-circle"> ref={startButton} onClick={baslat} disabled={intervalId}></button>
        <button id="pause-button" class="fi fi-br-pause-circle" ref={pauseButton} onClick={duraklat} disabled={!intervalId}></button>
        <button id="restart-button" class="fi fi-rr-refresh" onClick={sifirla} disabled={!(hours || minutes || seconds)}></button>
      </div>
    </div>
  );
}

export default Sayac;