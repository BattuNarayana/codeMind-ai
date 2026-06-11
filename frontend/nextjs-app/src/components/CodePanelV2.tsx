type Props = {
  activeStatement: string | null;
};

const codeLines = [
  "s1.push(root);",
  "",
  "while(!s1.isEmpty()) {",
  "",
  "    TreeNode node = s1.pop();",
  "",
  "    s2.push(node);",
  "",
  "    if(node.left != null)",
  "        s1.push(node.left);",
  "",
  "    if(node.right != null)",
  "        s1.push(node.right);",
  "",
  "}",
  "",
  "while(!s2.isEmpty()) {",
  "",
  "    result.add(s2.pop().val);",
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