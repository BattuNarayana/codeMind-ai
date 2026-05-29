from src.models.language import Language


class LanguageDetector:

    @staticmethod
    def detect(code: str) -> Language:

        code = code.strip()

        java_keywords = [
            "public class",
            "public static void main",
            "System.out.println",
            "import java",
            "ArrayList",
            "HashMap",
            "TreeNode"
        ]

        for keyword in java_keywords:
            if keyword in code:
                return Language.JAVA

        return Language.UNKNOWN