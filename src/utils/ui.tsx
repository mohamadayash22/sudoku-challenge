import { Modal } from "@/components";
import { createRoot } from "react-dom/client";

export const showModal = (message: string, success: boolean = false) => {
  const modalRoot = document.createElement("div");
  document.body.appendChild(modalRoot);

  const handleClose = () => {
    root.unmount();
    document.body.removeChild(modalRoot);
  };

  const root = createRoot(modalRoot);
  root.render(<Modal onClose={handleClose} message={message} success={success} />);
};
