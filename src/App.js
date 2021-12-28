import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [date, setDate] = useState(new Date());
  const [second, setSeconds] = useState(date.getSeconds());
  const [minute, setMinutes] = useState(date.getMinutes());
  const [hour, setHours] = useState(date.getHours());
  setInterval(() => {
    var date = new Date();
    // console.log(date.getHours());
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    setDate(date);
    setSeconds(sec * 6);
    setMinutes(6 * min);
    setHours(30 * hr + min / 2);
    // console.log(date.getMinutes() / 0.5 / 0.5);
  }, 1000);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {date !== null && (
        <div className="digital-border">
          <div className="digital-time">{date.getHours()}</div>

          <div className="digital-time">{date.getMinutes()}</div>
          <div className="digital-time">{date.getSeconds()}</div>
        </div>
      )}

      <div className="outer-circle">
        <div className="inner-circle">
          <div>
            <div
              className="hour"
              style={{ transform: `rotate(${hour}deg)` }}
              id="hour"
            ></div>
            <div
              className="minute"
              style={{ transform: `rotate(${minute}deg)` }}
              id="minute"
            ></div>
            <div
              className="second"
              style={{ transform: `rotate(${second}deg)` }}
              id="second"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
