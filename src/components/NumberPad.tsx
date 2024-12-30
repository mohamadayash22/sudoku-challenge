type Props = {
  handleNumberClick: (value: number) => void;
};

export const NumberPad = ({ handleNumberClick }: Props) => {
  return (
    <div className="grid h-fit grid-cols-3 grid-rows-3 gap-1.5">
      {Array.from({ length: 9 }, (_, i) => (
        <div
          key={i}
          onClick={() => handleNumberClick(i + 1)}
          className="flex h-24 w-24 cursor-pointer select-none items-center justify-center rounded-lg bg-gray-200 text-4xl transition-colors hover:bg-gray-300"
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};
