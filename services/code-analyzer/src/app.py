from pathlib import Path

from src.analyzers.code_analyzer import CodeAnalyzer

def load_sample_code() -> str:

    sample_path = Path(__file__).parent / "sample_code.java"

    with open(sample_path, "r", encoding="utf-8") as file:
        return file.read()


def main():

    code = load_sample_code()

    analysis_result = CodeAnalyzer.analyze(code)

    print("\n=== ANALYSIS RESULT ===")

    print(analysis_result.model_dump_json(indent=2))

if __name__ == "__main__":
    main()