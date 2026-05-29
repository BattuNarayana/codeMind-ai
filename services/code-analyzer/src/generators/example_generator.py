from src.models.execution_blueprint import ExecutionBlueprint
from src.models.tree_node import TreeNode


class ExampleGenerator:

    @staticmethod
    def generate(
        blueprint: ExecutionBlueprint
    ):

        if blueprint.execution_strategy == "ITERATIVE_PREORDER":

            return TreeNode(
                value=1,
                left=TreeNode(
                    value=2
                ),
                right=TreeNode(
                    value=3
                )
            )

        raise ValueError(
            f"Unsupported strategy: "
            f"{blueprint.execution_strategy}"
        )