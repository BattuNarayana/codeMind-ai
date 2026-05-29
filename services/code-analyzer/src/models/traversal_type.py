from enum import Enum


class TraversalType(str, Enum):
    PREORDER = "PREORDER"
    INORDER = "INORDER"
    POSTORDER = "POSTORDER"
    LEVEL_ORDER = "LEVEL_ORDER"
    UNKNOWN = "UNKNOWN"