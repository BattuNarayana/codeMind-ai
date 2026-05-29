from src.models.approach_type import ApproachType


class ApproachDetector:

    @staticmethod
    def detect(code: str) -> ApproachType:

        iterative_indicators = [
            "while(",
            "while (",
            "for(",
            "for (",
            "Stack<",
            "Queue<"
        ]

        for indicator in iterative_indicators:
            if indicator in code:
                return ApproachType.ITERATIVE

        return ApproachType.UNKNOWN