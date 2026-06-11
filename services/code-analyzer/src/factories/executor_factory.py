from src.executors.iterative_preorder_executor import (
    IterativePreorderExecutor
)

from src.executors.iterative_inorder_executor import (
    IterativeInorderExecutor
)

class ExecutorFactory:

    @staticmethod
    def get_executor(
        strategy: str
    ):

        if strategy == "ITERATIVE_PREORDER":
            return IterativePreorderExecutor

        if strategy == "ITERATIVE_INORDER":
            return IterativeInorderExecutor
        
        raise ValueError(
            f"Unknown strategy: {strategy}"
        )