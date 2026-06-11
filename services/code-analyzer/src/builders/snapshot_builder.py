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
        source_code: str | None,
        explanation: str,
        metadata: dict | None = None
    ) -> ExecutionSnapshot:

        return ExecutionSnapshot(
            step=step,
            current_node=current_node,
            stack=stack.copy(),
            result=result.copy(),
            metadata=metadata or {},
            action=action,
            source_code=source_code,
            explanation=explanation,

        )