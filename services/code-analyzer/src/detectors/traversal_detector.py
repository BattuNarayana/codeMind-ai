from src.models.traversal_type import TraversalType


class TraversalDetector:

    @staticmethod
    def detect(code: str) -> TraversalType:

        code_lower = code.lower()

        # Explicit naming detection

        if "preorder" in code_lower:
            return TraversalType.PREORDER

        if "inorder" in code_lower:
            return TraversalType.INORDER

        if "postorder" in code_lower:
            return TraversalType.POSTORDER

        if "levelorder" in code_lower:
            return TraversalType.LEVEL_ORDER

        # Pattern-based detection

        if (
            "stack.push(node.right)" in code_lower
            and
            "stack.push(node.left)" in code_lower
        ):
            return TraversalType.PREORDER

        if (
            "curr = curr.left" in code_lower
            and
            "curr = stack.pop()" in code_lower
            and
            "curr = curr.right" in code_lower
        ):
            return TraversalType.INORDER

        return TraversalType.UNKNOWN