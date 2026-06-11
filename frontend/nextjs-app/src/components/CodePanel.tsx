

type Props = {
  code: string | null;
};

export default function CodePanel({
  code,
}: Props) {
  return (
    <div className="border p-6 rounded-lg">

      <h2 className="font-bold mb-4">
        Current Code
      </h2>

      <pre
        className="
          p-4
          rounded
          bg-gray-900
          overflow-auto
        "
      >
        {code}
      </pre>

    </div>
  );
}