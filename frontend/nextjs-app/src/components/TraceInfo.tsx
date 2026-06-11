import { ExecutionSnapshot } from "@/types/trace";

type Props = {
  snapshot: ExecutionSnapshot;
};

export default function TraceInfo({
  snapshot,
}: Props) {
  return (
    <div className="border p-6 rounded-lg">

      <h2 className="font-bold mb-4">
        Trace Information
      </h2>

      <p>
        <strong>Step:</strong>{" "}
        {snapshot.step}
      </p>

      <p>
        <strong>Action:</strong>{" "}
        {snapshot.action}
      </p>

      <p className="mt-2">
        {snapshot.explanation}
      </p>

    </div>
  );
}