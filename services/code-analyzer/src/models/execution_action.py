from enum import Enum


class ExecutionAction(str, Enum):

    PUSH_ROOT = "PUSH_ROOT"

    POP_NODE = "POP_NODE"

    ADD_TO_RESULT = "ADD_TO_RESULT"

    PUSH_LEFT = "PUSH_LEFT"

    PUSH_RIGHT = "PUSH_RIGHT"