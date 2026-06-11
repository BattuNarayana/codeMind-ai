export type ExecutionAction =
  | "PUSH_ROOT"
  | "WHILE_CHECK"
  | "WHILE_CHECK_FAILED"
  | "POP_NODE"
  | "ADD_TO_RESULT"
  | "RIGHT_CONDITION_CHECK"
  | "LEFT_CONDITION_CHECK"
  | "PUSH_LEFT"
  | "PUSH_RIGHT"
  | "SET_CURRENT"
  | "MOVE_LEFT"
  | "MOVE_RIGHT"
  | "PUSH_TO_STACK"
  | "INNER_WHILE_CHECK"
  | "INNER_WHILE_FAILED"
  | "PUSH_ROOT_TO_S1"
  | "POP_FROM_S1"
  | "PUSH_TO_S2"
  | "PUSH_LEFT_TO_S1"
  | "PUSH_RIGHT_TO_S1"
  | "SECOND_STACK_CHECK"
  | "POP_FROM_S2"
  | "ADD_FROM_S2_TO_RESULT";

export interface ExecutionSnapshot {
  step: number;

  current_node: number | null;

  stack: number[];

  result: number[];

  metadata?: {
    curr?: number | null;
    stack2?: number[];
  };

  action: ExecutionAction;

  source_code: string | null;

  explanation: string;
}

export interface ExecutionTrace {
  snapshots: ExecutionSnapshot[];
}