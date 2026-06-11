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
                source_code="stack.push(root)",
                explanation="Root node pushed into stack"
            )
        )

        while stack:
            step += 1

            snapshots.append(
                SnapshotBuilder.create(
                    step=step,
                    current_node=stack[-1].value,
                    stack=[n.value for n in stack],
                    result=result,
                    action=ExecutionAction.WHILE_CHECK,
                    source_code="while(!stack.isEmpty())",
                    explanation="Checking whether stack contains nodes"
                )
            )

            node = stack.pop()

            step += 1

            snapshots.append(
                SnapshotBuilder.create(
                    step=step,
                    current_node=node.value,
                    stack=[n.value for n in stack],
                    result=result,
                    action=ExecutionAction.POP_NODE,
                    source_code="TreeNode node = stack.pop()",
                    explanation=f"Node {node.value} removed from stack"
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
                    source_code="result.add(node.val)",
                    explanation=f"Added {node.value} to preorder result"
                )
            )

            step += 1

            snapshots.append(
                SnapshotBuilder.create(
                    step=step,
                    current_node=node.value,
                    stack=[n.value for n in stack],
                    result=result,
                    action=ExecutionAction.RIGHT_CONDITION_CHECK,
                    source_code="if(node.right != null)",
                    explanation="Checking whether right child exists"
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
                        action=ExecutionAction.PUSH_RIGHT,
                        source_code="stack.push(node.right)",
                        explanation=f"Pushed right child {node.right.value}"
                    )
                )

            step += 1

            snapshots.append(
                SnapshotBuilder.create(
                    step=step,
                    current_node=node.value,
                    stack=[n.value for n in stack],
                    result=result,
                    action=ExecutionAction.LEFT_CONDITION_CHECK,
                    source_code="if(node.left != null)",
                    explanation="Checking whether left child exists"
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
                        action=ExecutionAction.PUSH_LEFT,
                        source_code="stack.push(node.left)",
                        explanation=f"Pushed left child {node.left.value}"
                    )
                )

        step += 1

        snapshots.append(
            SnapshotBuilder.create(
                step=step,
                current_node=None,
                stack=[],
                result=result,
                action=ExecutionAction.WHILE_CHECK_FAILED,
                source_code="while(!stack.isEmpty())",
                explanation="Stack is empty. Loop terminates."
            )
        )   

        return ExecutionTrace(
            snapshots=snapshots
        )