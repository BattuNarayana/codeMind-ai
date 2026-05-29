from pydantic import BaseModel

from src.models.execution_snapshot import ExecutionSnapshot


class ExecutionTrace(BaseModel):

    snapshots: list[ExecutionSnapshot]