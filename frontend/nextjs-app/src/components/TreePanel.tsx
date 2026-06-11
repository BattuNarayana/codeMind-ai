type Props = {
  currentNode: number | null;
  currentPointer: number | null;
};

function Node({
  value,
  currentNode,
  currentPointer,
}: {
  value: number;
  currentNode: number | null;
  currentPointer: number | null;
}) {
  const isActive = value === currentNode;
  const isPointer = value === currentPointer;

  return (
    <div
      className={`
  w-12
  h-12
  rounded-full
  border
  flex
  items-center
  justify-center
  font-bold
  transition-all

  ${
  isActive
    ? "bg-green-500 text-black border-green-500 scale-110"
    : isPointer
    ? "border-blue-500 border-4 scale-110"
    : "border-white"
}
`}
    >
      {value}
    </div>
  );
}

export default function TreePanel({
  currentNode,
  currentPointer,
}: Props) {
  return (
    <div className="border p-6 rounded-lg">

      <h2 className="font-bold mb-6">
        Tree
      </h2>

      <div className="flex flex-col items-center">

  {/* Root */}

  <Node
    value={1}
    currentNode={currentNode}
    currentPointer={currentPointer}
  />

  {/* Edge Layer */}

  <svg
  width="200"
  height="50"
  className="overflow-visible"
>
  <line
    x1="100"
    y1="0"
    x2="50"
    y2="40"
    stroke="white"
    strokeWidth="2"
  />

  <line
    x1="100"
    y1="0"
    x2="150"
    y2="40"
    stroke="white"
    strokeWidth="2"
  />
</svg>

  {/* Children */}

  <div
    className="
      flex
      gap-20
    "
  >

    <Node
      value={2}
      currentNode={currentNode}
      currentPointer={currentPointer}
    />

    <Node
      value={3}
      currentNode={currentNode}
      currentPointer={currentPointer}
    />

  </div>

</div>

    </div>
  );
}