"use client";
import { useEffect, useRef, useState } from "react";

const Clock = () => {
  const [hourAngle, setHourAngle] = useState(0);
  const [minuteAngle, setMinuteAngle] = useState(0);
  const [secondAngle, setSecondAngle] = useState(0);

  const animationId = useRef<number | null>(null);

  function setHandles() {
    const d = new Date();

    const hours = d.getHours() % 12;
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();

    const extraMinutesAngle = seconds * 0.1;
    const minutesAngle = minutes * 6 + extraMinutesAngle;

    const extraHoursAngle = minutes * 0.5;
    const hoursAngle = hours * 30 + extraHoursAngle;

    const secondsAngle = seconds * 6;

    setHourAngle(hoursAngle);
    setMinuteAngle(minutesAngle);
    setSecondAngle(secondsAngle);

    animationId.current = requestAnimationFrame(setHandles);
  }

  useEffect(() => {
    animationId.current = requestAnimationFrame(setHandles);

    return () => {
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, []);

  return (
    <div className="clock-wrapper">
    <div className="clock">
      <div className="clock__center"></div>

      <div className="hour marker hour--1"></div>
      <div className="hour marker hour--2"></div>
      <div className="hour number hour--3">
        <span>3</span>
      </div>
      <div className="hour marker hour--4"></div>

      <div className="hour marker hour--5"></div>
      <div className="hour number hour--6">
        <span>6</span>
      </div>
      <div className="hour marker hour--7"></div>

      <div className="hour marker hour--8"></div>
      <div className="hour number hour--9">
        <span>9</span>
      </div>

      <div className="hour marker hour--10"></div>
      <div className="hour marker hour--11"></div>
      <div className="hour number hour--12">
        <span>12</span>
      </div>

      <div
        className="handle-rotate handle-rotate--hour"
        style={{ transform: `rotate(${hourAngle}deg)` }}
      >
        <div className="handle handle__hour"></div>
      </div>

      <div
        className="handle-rotate handle-rotate--minute"
        style={{ transform: `rotate(${minuteAngle}deg)` }}
      >
        <div className="handle handle__minute"></div>
      </div>

      <div
        className="handle-rotate handle-rotate--second"
        style={{ transform: `rotate(${secondAngle}deg)` }}
      >
        <div className="handle handle__second"></div>
      </div>
    </div>
    </div>
  );
};

export default Clock;
