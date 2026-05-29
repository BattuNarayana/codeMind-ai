from pydantic import BaseModel


class ExecutionBlueprint(BaseModel):

    execution_strategy: str

    example_type: str

    visualizations: list[str]

    required_entities: list[str]