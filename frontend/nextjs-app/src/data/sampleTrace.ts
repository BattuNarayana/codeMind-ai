import { ExecutionTrace } from "@/types/trace";

export const sampleTrace: ExecutionTrace = {
  snapshots: [
    {
      step: 1,
      current_node: 1,
      stack: [1],
      result: [],
      action: "PUSH_ROOT",
      explanation: "Root node pushed into stack",
    },
    {
      step: 2,
      current_node: 1,
      stack: [],
      result: [],
      action: "POP_NODE",
      explanation: "Node 1 removed from stack",
    },
    {
      step: 3,
      current_node: 1,
      stack: [],
      result: [1],
      action: "ADD_TO_RESULT",
      explanation: "Added 1 to preorder result",
    },
  ],
};