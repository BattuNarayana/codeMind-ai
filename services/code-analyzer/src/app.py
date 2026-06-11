from pathlib import Path

from src.analyzers.code_analyzer import CodeAnalyzer
from src.planners.execution_planner import ExecutionPlanner
from src.generators.example_generator import ExampleGenerator
from src.models.execution_context import ExecutionContext

from src.factories.executor_factory import (
    ExecutorFactory
)

def load_sample_code() -> str:

    sample_path = Path(__file__).parent / "sample_code.java"

    with open(sample_path, "r", encoding="utf-8") as file:
        return file.read()


def main():

    code = load_sample_code()

    analysis_result = CodeAnalyzer.analyze(code)

    blueprint = ExecutionPlanner.create_blueprint(
        analysis_result
    )

    example = ExampleGenerator.generate(
        blueprint
    )

    context = ExecutionContext(
    blueprint=blueprint,
    tree=example
    )

    executor = (
        ExecutorFactory.get_executor(
            blueprint.execution_strategy
        )
    )

    trace = executor.execute(
        context
    )

    print("\n=== ANALYSIS ===")
    print(
        analysis_result.model_dump_json(
            indent=2
        )
    )

    print("\n=== BLUEPRINT ===")
    print(
        blueprint.model_dump_json(
            indent=2
        )
    )

    print("\n=== TRACE ===")

    print(
        trace.model_dump_json(
            indent=2
        )
    )

    print("\n=== GENERATED TREE ===")
    print(example.model_dump())

if __name__ == "__main__":
    main()