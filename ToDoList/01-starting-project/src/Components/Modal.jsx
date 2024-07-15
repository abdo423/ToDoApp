import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef((props, ref) => {
  const modal = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      openModal: () => {
        modal.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={modal} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      <div className="bg-white p-8 rounded-md">
        {props.children}
        <form method="dialog" className="mt-8 text-right">
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Close</button>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
