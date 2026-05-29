from pydantic import BaseModel

from src.models.execution_blueprint import ExecutionBlueprint
from src.models.tree_node import TreeNode


class ExecutionContext(BaseModel):

    blueprint: ExecutionBlueprint

    tree: TreeNode