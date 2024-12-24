import clsx from "clsx";
import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  onClick: () => void;
  icon?: LucideIcon;
  className?: string;
};

export const Button = ({ title, onClick, icon: Icon, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "mt-5 flex w-full justify-center gap-2 rounded-lg px-4 py-3 text-center font-medium text-white transition-colors",
        className,
      )}
    >
      {Icon && <Icon />} {title}
    </button>
  );
};
