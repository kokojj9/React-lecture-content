import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    // open속성으로 열게되면 뒤쪽화면은 비활성화된 상태로 작동함
    // 그래서 이 프로젝트에서는 다르게 사용할 예정
    // esc를 눌러서 모달창을 닫으면 state는 변하지 않기 때문에 모달을 여는 판단을 하는 state가 cart, checkout으로 남게됨
    // onClose 속성으로 esc네 반응하여 state를 수정하게끔 만들어야한다
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
