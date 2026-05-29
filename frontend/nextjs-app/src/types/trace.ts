export type ExecutionAction =
  | "PUSH_ROOT"
  | "POP_NODE"
  | "ADD_TO_RESULT"
  | "PUSH_LEFT"
  | "PUSH_RIGHT";

export interface ExecutionSnapshot {
  step: number;
  current_node: number | null;
  stack: number[];
  result: number[];
  action: ExecutionAction;
  explanation: string;
}

export interface ExecutionTrace {
  snapshots: ExecutionSnapshot[];
}