import ReactDOM from "react-dom";
import { CheckCircle, XCircle } from "lucide-react";

type Props = {
  onClose: () => void;
  message: string;
  success: boolean;
};

export const Modal = ({ onClose, message, success }: Props) => {
  return ReactDOM.createPortal(
    <div className="fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="fade-in w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <div className="mb-4 text-center">
          <div
            className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
              success ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {success ? (
              <CheckCircle className="h-8 w-8 text-white" />
            ) : (
              <XCircle className="h-8 w-8 text-white" />
            )}
          </div>
          <p className="text font-medium text-gray-500">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="mt-2 w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Close
        </button>
      </div>
    </div>,
    document.body,
  );
};
