from pydantic import BaseModel


class ExecutionSnapshot(BaseModel):

    step: int

    line_number: int

    current_node: str | None

    stack: list[str]

    result: list[str]

    explanation: str