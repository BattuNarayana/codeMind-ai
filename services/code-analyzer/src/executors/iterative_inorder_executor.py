from src.models.execution_context import ExecutionContext
from src.models.execution_trace import ExecutionTrace
from src.models.execution_action import ExecutionAction

from src.builders.snapshot_builder import SnapshotBuilder


class IterativeInorderExecutor:

    @staticmethod
    def execute(
        context: ExecutionContext
    ) -> ExecutionTrace:

        snapshots = []

        stack = []

        result = []

        curr = context.tree

        snapshots.append(
            SnapshotBuilder.create(
                step=1,
                current_node=None,
                stack=[],
                result=[],
                action=ExecutionAction.SET_CURRENT,
                source_code="TreeNode curr = root",
                explanation="Current pointer initialized to root",
                metadata={
                    "curr": curr.value
                }
            )
        )

        step = 1

        while curr or stack:

            step += 1

            snapshots.append(
                SnapshotBuilder.create(
                    step=step,
                    current_node=None,
                    stack=[n.value for n in stack],
                    result=result,
                    action=ExecutionAction.WHILE_CHECK,
                    source_code=
                    "while(curr != null || !stack.isEmpty())",
                    explanation=
                    "Checking traversal continuation condition",
                    metadata={
                        "curr":
                        None if curr is None
                        else curr.value
                    }
                )
            )

            while curr:

                step += 1

                snapshots.append(
                    SnapshotBuilder.create(
                        step=step,
                        current_node=None,
                        stack=[n.value for n in stack],
                        result=result,
                        action=
                        ExecutionAction.INNER_WHILE_CHECK,
                        source_code=
                        "while(curr != null)",
                        explanation=
                        "Checking current pointer",
                        metadata={
                            "curr": curr.value
                        }
                    )
                )

                stack.append(curr)

                step += 1

                snapshots.append(
                    SnapshotBuilder.create(
                        step=step,
                        current_node=None,
                        stack=[n.value for n in stack],
                        result=result,
                        action=
                        ExecutionAction.PUSH_TO_STACK,
                        source_code=
                        "stack.push(curr)",
                        explanation=
                        f"Pushed {curr.value} into stack",
                        metadata={
                            "curr": curr.value
                        }
                    )
                )

                curr = curr.left

                step += 1

                snapshots.append(
                    SnapshotBuilder.create(
                        step=step,
                        current_node=None,
                        stack=[n.value for n in stack],
                        result=result,
                        action=
                        ExecutionAction.MOVE_LEFT,
                        source_code=
                        "curr = curr.left",
                        explanation=
                        "Moving to left child",
                        metadata={
                            "curr":
                            None if curr is None
                            else curr.value
                        }
                    )
                )

            step += 1

            snapshots.append(
                SnapshotBuilder.create(
                    step=step,
                    current_node=None,
                    stack=[n.value for n in stack],
                    result=result,
                    action=
                    ExecutionAction.INNER_WHILE_FAILED,
                    source_code=
                    "while(curr != null)",
                    explanation=
                    "Current pointer became null",
                    metadata={
                        "curr": None
                    }
                )
            )

            curr = stack.pop()

            step += 1

            snapshots.append(
                SnapshotBuilder.create(
                    step=step,
                    current_node=curr.value,
                    stack=[n.value for n in stack],
                    result=result,
                    action=
                    ExecutionAction.POP_NODE,
                    source_code=
                    "curr = stack.pop()",
                    explanation=
                    f"Popped {curr.value} from stack",
                    metadata={
                        "curr": curr.value
                    }
                )
            )

            result.append(curr.value)

            step += 1

            snapshots.append(
                SnapshotBuilder.create(
                    step=step,
                    current_node=curr.value,
                    stack=[n.value for n in stack],
                    result=result,
                    action=
                    ExecutionAction.ADD_TO_RESULT,
                    source_code=
                    "result.add(curr.val)",
                    explanation=
                    f"Added {curr.value} to inorder result",
                    metadata={
                        "curr": curr.value
                    }
                )
            )

            curr = curr.right

            step += 1

            snapshots.append(
                SnapshotBuilder.create(
                    step=step,
                    current_node=None,
                    stack=[n.value for n in stack],
                    result=result,
                    action=
                    ExecutionAction.MOVE_RIGHT,
                    source_code=
                    "curr = curr.right",
                    explanation=
                    "Moving to right child",
                    metadata={
                        "curr":
                        None if curr is None
                        else curr.value
                    }
                )
            )

        step += 1

        snapshots.append(
            SnapshotBuilder.create(
                step=step,
                current_node=None,
                stack=[],
                result=result,
                action=
                ExecutionAction.WHILE_CHECK_FAILED,
                source_code=
                "while(curr != null || !stack.isEmpty())",
                explanation=
                "Traversal completed",
                metadata={
                    "curr": None
                }
            )
        )

        return ExecutionTrace(
            snapshots=snapshots
        )