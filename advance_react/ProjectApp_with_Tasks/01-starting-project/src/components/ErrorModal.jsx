import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ErrorModal = forwardRef(function (props, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="py-10 rounded-2xl px-8 text-center backdrop:bg-neutral-900/90"
      
    >
      <h2 className="text-4xl text-neutral-600 font-black mb-2">Invalid Input!</h2>
      <p className="text-lg text-neutral-800 font-medium mb-2">
        Oops...looks like you forgot to enter a value
      </p>
      <p className="text-base text-neutral-500 font-medium mb-6">
        Please make sure you provide a valid value for every input...
      </p>
      <form method="dialog">
        <button className="bg-neutral-500 py-3 px-10 rounded-xl text-neutral-200 font-medium hover:bg-neutral-700">Close</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default ErrorModal;
