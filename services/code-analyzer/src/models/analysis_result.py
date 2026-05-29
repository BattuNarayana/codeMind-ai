from pydantic import BaseModel


class AnalysisResult(BaseModel):
    language: str

    algorithm_type: str

    traversal_type: str
    
    approach: str

    data_structures: list[str]

    confidence: float