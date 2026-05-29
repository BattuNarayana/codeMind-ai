from enum import Enum


class AlgorithmType(str, Enum):
    TREE_TRAVERSAL = "TREE_TRAVERSAL"
    SORTING = "SORTING"
    SEARCHING = "SEARCHING"
    UNKNOWN = "UNKNOWN"