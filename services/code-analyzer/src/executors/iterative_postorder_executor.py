from src.models.execution_context import ExecutionContext
from src.models.execution_trace import ExecutionTrace
from src.models.execution_action import ExecutionAction

from src.builders.snapshot_builder import SnapshotBuilder


class IterativePostorderExecutor:

    @staticmethod
    def execute(
        context: ExecutionContext
    ) -> ExecutionTrace:

        snapshots = []

        s1 = [context.tree]

        s2 = []

        result = []

        step = 1

        snapshots.append(
            SnapshotBuilder.create(
                step=step,
                current_node=context.tree.value,
                stack=[node.value for node in s1],
                result=result,
                action=
                ExecutionAction.PUSH_ROOT_TO_S1,
                source_code=
                "s1.push(root)",
                explanation=
                "Root node pushed into Stack 1",
                metadata={
                    "stack2": []
                }
            )
        )

        while s1:

            step += 1

            snapshots.append(
                SnapshotBuilder.create(
                    step=step,
                    current_node=None,
                    stack=[node.value for node in s1],
                    result=result,
                    action=
                    ExecutionAction.WHILE_CHECK,
                    source_code=
                    "while(!s1.isEmpty())",
                    explanation=
                    "Checking whether Stack 1 contains nodes",
                    metadata={
                        "stack2":
                        [node.value for node in s2]
                    }
                )
            )

            node = s1.pop()

            step += 1

            snapshots.append(
                SnapshotBuilder.create(
                    step=step,
                    current_node=node.value,
                    stack=[n.value for n in s1],
                    result=result,
                    action=
                    ExecutionAction.POP_FROM_S1,
                    source_code=
                    "TreeNode node = s1.pop()",
                    explanation=
                    f"Popped {node.value} from Stack 1",
                    metadata={
                        "stack2":
                        [n.value for n in s2]
                    }
                )
            )

            s2.append(node)

            step += 1

            snapshots.append(
                SnapshotBuilder.create(
                    step=step,
                    current_node=node.value,
                    stack=[n.value for n in s1],
                    result=result,
                    action=
                    ExecutionAction.PUSH_TO_S2,
                    source_code=
                    "s2.push(node)",
                    explanation=
                    f"Pushed {node.value} into Stack 2",
                    metadata={
                        "stack2":
                        [n.value for n in s2]
                    }
                )
            )

            if node.left:

                s1.append(node.left)

                step += 1

                snapshots.append(
                    SnapshotBuilder.create(
                        step=step,
                        current_node=node.left.value,
                        stack=[n.value for n in s1],
                        result=result,
                        action=
                        ExecutionAction.PUSH_LEFT_TO_S1,
                        source_code=
                        "s1.push(node.left)",
                        explanation=
                        f"Pushed left child {node.left.value}",
                        metadata={
                            "stack2":
                            [n.value for n in s2]
                        }
                    )
                )

            if node.right:

                s1.append(node.right)

                step += 1

                snapshots.append(
                    SnapshotBuilder.create(
                        step=step,
                        current_node=node.right.value,
                        stack=[n.value for n in s1],
                        result=result,
                        action=
                        ExecutionAction.PUSH_RIGHT_TO_S1,
                        source_code=
                        "s1.push(node.right)",
                        explanation=
                        f"Pushed right child {node.right.value}",
                        metadata={
                            "stack2":
                            [n.value for n in s2]
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
                "while(!s1.isEmpty())",
                explanation=
                "Stack 1 became empty",
                metadata={
                    "stack2":
                    [n.value for n in s2]
                }
            )
        )

        while s2:

            step += 1

            snapshots.append(
                SnapshotBuilder.create(
                    step=step,
                    current_node=None,
                    stack=[],
                    result=result,
                    action=
                    ExecutionAction.SECOND_STACK_CHECK,
                    source_code=
                    "while(!s2.isEmpty())",
                    explanation=
                    "Checking whether Stack 2 contains nodes",
                    metadata={
                        "stack2":
                        [n.value for n in s2]
                    }
                )
            )

            node = s2.pop()

            result.append(node.value)

            step += 1

            snapshots.append(
                SnapshotBuilder.create(
                    step=step,
                    current_node=node.value,
                    stack=[],
                    result=result,
                    action=
                    ExecutionAction.ADD_FROM_S2_TO_RESULT,
                    source_code=
                    "result.add(s2.pop().val)",
                    explanation=
                    f"Added {node.value} to postorder result",
                    metadata={
                        "stack2":
                        [n.value for n in s2]
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
                "while(!s2.isEmpty())",
                explanation=
                "Postorder traversal completed",
                metadata={
                    "stack2": []
                }
            )
        )
        return ExecutionTrace(
            snapshots=snapshots
        )