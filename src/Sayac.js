import { useState, useEffect } from "react";

function Sayac() {

  let interval;

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  useEffect(() => {
    if(seconds > 59) {
      setMinutes(m => m +1);
    }
  }, [seconds]);

  useEffect(() => {
    if(minutes > 59) {
      setHours(h => h +1);
    }
  }, [minutes]);

  function baslat() {
    interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
  }

  function duraklat() {
    clearInterval(interval);
  }

  return (
    <div className="sayac">
    
      <div className="sayaclar">
        <span>{hours < 10 ? "0" + hours : hours }</span>:
        <span>{minutes < 10 ? "0" + minutes : minutes }</span>:
        <span>{seconds < 10 ? "0" + seconds : seconds }</span>
      </div>
      <div className="buttonlar">
        <button onClick={baslat}>başlat</button>
        <button onClick={duraklat}>duraklat</button>
      </div>
    </div>
  )

}

export default Sayac;
