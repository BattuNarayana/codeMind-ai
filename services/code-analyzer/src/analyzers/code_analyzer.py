from src.detectors.language_detector import LanguageDetector
from src.detectors.data_structure_detector import DataStructureDetector

from src.models.analysis_result import AnalysisResult


class CodeAnalyzer:

    @staticmethod
    def analyze(code: str) -> AnalysisResult:

        language = LanguageDetector.detect(code)

        data_structures = DataStructureDetector.detect(code)

        return AnalysisResult(
            language=language.value,
            algorithm_type="UNKNOWN",
            approach="UNKNOWN",
            data_structures=[ds.value for ds in data_structures],
            confidence=0.50
        )