import clsx from "clsx";
import { LucideIcon } from "lucide-react";

type Props = {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  className?: string;
};

export const ControlButton = ({ label, icon: Icon, onClick, className }: Props) => {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <button
        onClick={onClick}
        className={clsx(
          "flex h-14 w-14 items-center justify-center rounded-full text-white transition-colors",
          className,
        )}
      >
        <Icon className="h-6 w-6" />
      </button>
      <span className="text-sm font-medium text-gray-500">{label}</span>
    </div>
  );
};
