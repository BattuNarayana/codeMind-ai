from pydantic import BaseModel
from src.models.execution_action import ExecutionAction

class ExecutionSnapshot(BaseModel):

    step: int

    current_node: int | None

    stack: list[int]

    result: list[int]

    metadata: dict = {}

    action: ExecutionAction

    source_code: str | None

    explanation: str