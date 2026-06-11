type Props = {
  currentIndex: number;
  maxIndex: number;
  onChange: (
    index: number
  ) => void;
};

export default function Timeline({
  currentIndex,
  maxIndex,
  onChange,
}: Props) {
  return (
    <div className="mt-8">

      <div className="mb-2 font-semibold">
        Step {currentIndex + 1}
        {" / "}
        {maxIndex + 1}
      </div>

      <input
        type="range"
        min={0}
        max={maxIndex}
        value={currentIndex}
        onChange={(e) =>
          onChange(
            Number(e.target.value)
          )
        }
        className="w-full"
      />

    </div>
  );
}