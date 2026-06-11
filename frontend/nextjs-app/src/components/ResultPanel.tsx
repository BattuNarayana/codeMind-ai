type Props = {
  result: number[];
};

export default function ResultPanel({
  result,
}: Props) {
  return (
    <div className="border p-6 rounded-lg">

      <h2 className="font-bold mb-4">
        Result
      </h2>

      <div className="flex gap-3 flex-wrap">

        {result.length === 0 ? (
          <p>Empty Result</p>
        ) : (
          result.map((value) => (
            <div
              key={value}
              className="
                w-12
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

    </div>
  );
}