from src.models.execution_context import ExecutionContext
from src.models.execution_trace import ExecutionTrace
from src.models.execution_action import ExecutionAction

from src.builders.snapshot_builder import SnapshotBuilder


class IterativePreorderExecutor:

    @staticmethod
    def execute(
        context: ExecutionContext
    ) -> ExecutionTrace:

        snapshots = []

        stack = [context.tree]

        result = []

        step = 1

        snapshots.append(
            SnapshotBuilder.create(
                step=step,
                current_node=context.tree.value,
                stack=[context.tree.value],
                result=[],
                action=ExecutionAction.PUSH_ROOT,
                explanation=
                "Root node pushed into stack"
            )
        )

        while stack:

            node = stack.pop()

            step += 1

            snapshots.append(
                SnapshotBuilder.create(
                    step=step,
                    current_node=node.value,
                    stack=[n.value for n in stack],
                    result=result,
                    action=ExecutionAction.POP_NODE,
                    explanation=
                    f"Node {node.value} removed from stack"
                )
            )

            result.append(node.value)

            step += 1

            snapshots.append(
                SnapshotBuilder.create(
                    step=step,
                    current_node=node.value,
                    stack=[n.value for n in stack],
                    result=result,
                    action=ExecutionAction.ADD_TO_RESULT,
                    explanation=
                    f"Added {node.value} to preorder result"
                )
            )

            if node.right:

                stack.append(node.right)

                step += 1

                snapshots.append(
                    SnapshotBuilder.create(
                        step=step,
                        current_node=node.right.value,
                        stack=[n.value for n in stack],
                        result=result,
                        action=
                        ExecutionAction.PUSH_RIGHT,
                        explanation=
                        f"Pushed right child "
                        f"{node.right.value}"
                    )
                )

            if node.left:

                stack.append(node.left)

                step += 1

                snapshots.append(
                    SnapshotBuilder.create(
                        step=step,
                        current_node=node.left.value,
                        stack=[n.value for n in stack],
                        result=result,
                        action=
                        ExecutionAction.PUSH_LEFT,
                        explanation=
                        f"Pushed left child "
                        f"{node.left.value}"
                    )
                )

        return ExecutionTrace(
            snapshots=snapshots
        )