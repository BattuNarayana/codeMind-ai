type Props = {
  stack: number[];
};

export default function StackPanel({
  stack,
}: Props) {
  const visualStack = [...stack].reverse();

  return (
    <div className="border p-6 rounded-lg">

      <h2 className="font-bold mb-4">
        Stack
      </h2>

      <div className="flex flex-col items-center gap-2">

        {visualStack.length === 0 ? (
          <p>Empty Stack</p>
        ) : (
          visualStack.map((value, index) => (
            <div
              key={`${value}-${index}`}
              className="
                w-16
                h-12
                border
                rounded
                flex
                items-center
                justify-center
                font-bold
              "
            >
              {value}
            </div>
          ))
        )}

      </div>

      {visualStack.length > 0 && (
        <p className="text-sm mt-4 text-center">
          TOP
        </p>
      )}

    </div>
  );
}