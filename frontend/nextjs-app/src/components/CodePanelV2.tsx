type Props = {
  activeStatement: string | null;
};

const codeLines = [
  "TreeNode curr = root;",
  "",
  "while(curr != null || !stack.isEmpty()) {",
  "",
  "    while(curr != null) {",
  "",
  "        stack.push(curr);",
  "",
  "        curr = curr.left;",
  "",
  "    }",
  "",
  "    curr = stack.pop();",
  "",
  "    result.add(curr.val);",
  "",
  "    curr = curr.right;",
  "",
  "}",
];

export default function CodePanelV2({
  activeStatement,
}: Props) {
  return (
    <div className="border p-6 rounded-lg">

      <h2 className="font-bold mb-4">
        Algorithm Code
      </h2>

      <pre className="font-mono text-sm">

        {codeLines.map((line, index) => {

          const normalizedLine =
            line.replace(";", "").trim();

            const normalizedActive =
            activeStatement?.trim() ?? "";

            const isActive =
            normalizedLine.includes(
                normalizedActive
            );

          return (
            <div
              key={index}
              className={
                isActive
                  ? "bg-green-500 text-black"
                  : ""
              }
            >
              {line}
            </div>
          );
        })}

      </pre>

    </div>
  );
}