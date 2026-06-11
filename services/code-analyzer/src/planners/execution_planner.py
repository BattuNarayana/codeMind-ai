from src.models.analysis_result import AnalysisResult
from src.models.execution_blueprint import ExecutionBlueprint


class ExecutionPlanner:

    @staticmethod
    def create_blueprint(
        analysis: AnalysisResult
    ) -> ExecutionBlueprint:

        if (
            analysis.traversal_type == "PREORDER"
            and
            analysis.approach == "ITERATIVE"
        ):

            return ExecutionBlueprint(
                execution_strategy=
                "ITERATIVE_PREORDER",

                example_type=
                "BINARY_TREE",

                visualizations=[
                    "TREE",
                    "STACK",
                    "RESULT_ARRAY"
                ],

                required_entities=[
                    "tree",
                    "stack",
                    "result"
                ]
            )
        
        if (
            analysis.traversal_type == "INORDER"
            and
            analysis.approach == "ITERATIVE"
        ):

            return ExecutionBlueprint(
                execution_strategy=
                "ITERATIVE_INORDER",

                example_type=
                "BINARY_TREE",

                visualizations=[
                    "TREE",
                    "STACK",
                    "RESULT_ARRAY"
                ],

                required_entities=[
                    "tree",
                    "stack",
                    "result"
                ]
            )

        if (
            analysis.traversal_type == "POSTORDER"
            and
            analysis.approach == "ITERATIVE"
        ):

            return ExecutionBlueprint(
                execution_strategy=
                "ITERATIVE_POSTORDER",

                example_type=
                "BINARY_TREE",

                visualizations=[
                    "TREE",
                    "STACK_1",
                    "STACK_2",
                    "RESULT_ARRAY"
                ],

                required_entities=[
                    "tree",
                    "stack1",
                    "stack2",
                    "result"
                ]
            )
        raise ValueError(
            "Unsupported analysis result"
        )