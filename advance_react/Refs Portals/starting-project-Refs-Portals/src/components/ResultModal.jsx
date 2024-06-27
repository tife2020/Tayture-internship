import React, { forwardRef, useImperativeHandle, useRef } from "react";

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
  return (
    <dialog ref={dialog} className="result-modal">
      {lost && <h2>You Lost</h2>}
      <p>
        The target time was <strong>{targetTIme} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{timeLeft} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={resetTime}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
