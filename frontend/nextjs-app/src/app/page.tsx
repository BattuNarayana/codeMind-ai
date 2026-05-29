"use client";

import { sampleTrace } from "@/data/sampleTrace";
import { useTraceStore } from "@/store/traceStore";

export default function Home() {

  const {
    currentIndex,
    nextStep,
    previousStep,
  } = useTraceStore();

  const snapshot =
    sampleTrace.snapshots[currentIndex];

  return (
    <main className="min-h-screen p-8">

      <h1 className="text-3xl font-bold mb-6">
        CodeMind AI
      </h1>

      <div className="border p-4 rounded-lg mb-4">
        <h2 className="font-semibold">
          Current Step
        </h2>

        <p>{snapshot.step}</p>
      </div>

      <div className="border p-4 rounded-lg mb-4">
        <h2 className="font-semibold">
          Stack
        </h2>

        <p>
          {JSON.stringify(snapshot.stack)}
        </p>
      </div>

      <div className="border p-4 rounded-lg mb-4">
        <h2 className="font-semibold">
          Result
        </h2>

        <p>
          {JSON.stringify(snapshot.result)}
        </p>
      </div>

      <div className="border p-4 rounded-lg mb-4">
        <h2 className="font-semibold">
          Action
        </h2>

        <p>{snapshot.action}</p>
      </div>

      <div className="border p-4 rounded-lg mb-8">
        <h2 className="font-semibold">
          Explanation
        </h2>

        <p>{snapshot.explanation}</p>
      </div>

      <div className="flex gap-4">

        <button
          onClick={previousStep}
          className="
            border
            px-4
            py-2
            rounded
          "
        >
          Previous
        </button>

        <button
          onClick={nextStep}
          className="
            border
            px-4
            py-2
            rounded
          "
        >
          Next
        </button>

      </div>

    </main>
  );
}