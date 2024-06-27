import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";
// let timer;

function TimerChallenge({ title, targetTime }) {
  // const [timerExpired, setTimerExpired] = useState(false);
  // const [timerStarted, setTimerStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  // const [timerIsActive, setTimerIsActive] = useState(false)

  const dialog = useRef();
  let timer = useRef();

  /*  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.openModal()
      setTimerStarted(false);
    }, targetTime * 1000);

    setTimerStarted(true);
  }
*/
  let timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // time is up
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.openModal();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.openModal();
  }

  function resetTime(){
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTIme={targetTime} result="lost"  timeRemaining = {timeRemaining} resetTime = {resetTime}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        {/* <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop Challenge" : "Start Challenge"}
        </button>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p> */}
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "Stop Challenge" : "Start Challenge"}
        </button>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
