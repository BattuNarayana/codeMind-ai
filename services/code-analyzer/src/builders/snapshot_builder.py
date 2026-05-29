from src.models.execution_snapshot import ExecutionSnapshot
from src.models.execution_action import ExecutionAction


class SnapshotBuilder:

    @staticmethod
    def create(
        step: int,
        current_node: int | None,
        stack: list[int],
        result: list[int],
        action: ExecutionAction,
        explanation: str
    ) -> ExecutionSnapshot:

        return ExecutionSnapshot(
            step=step,
            current_node=current_node,
            stack=stack.copy(),
            result=result.copy(),
            action=action,
            explanation=explanation
        )