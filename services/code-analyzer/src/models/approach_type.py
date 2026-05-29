from enum import Enum


class ApproachType(str, Enum):
    ITERATIVE = "ITERATIVE"
    RECURSIVE = "RECURSIVE"
    UNKNOWN = "UNKNOWN"