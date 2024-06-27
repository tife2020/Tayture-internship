import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  {targetTIme, timeRemaining, resetTime },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    openModal() {
      dialog.current.showModal();
    },
  }));

  let lost = timeRemaining <= 0;
  let timeLeft = (timeRemaining/1000).toFixed(2)
  let score = Math.floor((1-(timeRemaining / (targetTIme*1000)))*100)
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={resetTime}>
      {lost && <h2>You Lost</h2>}
      {!lost && <h2>You score is {score}</h2>}
      <p>
        The target time was <strong>{targetTIme} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{timeLeft} seconds left.</strong>
      </p>

      {/* 
        since we have (a) onClose = {resetTime}, we do not need to specify (b) onSubmit = {resetTime}. (a) will handle it for both
        but I am leaving it for education sake
      */}
      <form method="dialog" onSubmit={resetTime}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
