from src.models.execution_blueprint import ExecutionBlueprint
from src.models.tree_node import TreeNode


class ExampleGenerator:

    @staticmethod
    def generate(
        blueprint: ExecutionBlueprint
    ):

        if blueprint.example_type == "BINARY_TREE":

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
            f"Unsupported example type: "
            f"{blueprint.example_type}"
        )