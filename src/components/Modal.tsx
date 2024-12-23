type Props = {
  isOpen: boolean;
  onClose: () => void;
  isValid: boolean;
};

export const Modal = ({ isOpen, onClose, isValid }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <div className="mb-4 text-center">
          <div
            className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full ${isValid ? "bg-green-100" : "bg-red-100"}`}
          >
            <svg
              className={`h-6 w-6 ${isValid ? "text-green-600" : "text-red-600"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isValid ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              )}
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900">
            {isValid ? "Perfect!" : "Not quite right"}
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            {isValid
              ? "Your solution is correct. Great job!"
              : "There are some conflicts in your solution. Keep trying!"}
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-full rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-600"
        >
          Continue Playing
        </button>
      </div>
    </div>
  );
};
