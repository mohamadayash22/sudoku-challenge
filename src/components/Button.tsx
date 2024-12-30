import clsx from "clsx";
import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  onClick: () => void;
  icon?: LucideIcon;
  className?: string;
  disabled?: boolean;
};

export const Button = ({ title, onClick, icon: Icon, className, disabled }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "transition-color mt-5 flex w-full justify-center gap-2 rounded-lg px-4 py-3 text-center font-medium text-white disabled:bg-opacity-50",
        className,
      )}
    >
      {Icon && <Icon />} {title}
    </button>
  );
};
