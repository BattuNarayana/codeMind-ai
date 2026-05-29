from src.models.traversal_type import TraversalType


class TraversalDetector:

    @staticmethod
    def detect(code: str) -> TraversalType:

        code_lower = code.lower()

        if "preorder" in code_lower:
            return TraversalType.PREORDER

        if "inorder" in code_lower:
            return TraversalType.INORDER

        if "postorder" in code_lower:
            return TraversalType.POSTORDER

        if "levelorder" in code_lower:
            return TraversalType.LEVEL_ORDER

        return TraversalType.UNKNOWN