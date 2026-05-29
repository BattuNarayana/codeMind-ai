from src.models.data_structure import DataStructure


class DataStructureDetector:

    @staticmethod
    def detect(code: str) -> list[DataStructure]:

        detected = []

        rules = {
            DataStructure.STACK: [
                "Stack<",
                "new Stack"
            ],

            DataStructure.QUEUE: [
                "Queue<",
                "LinkedList<"
            ],

            DataStructure.ARRAY: [
                "ArrayList<",
                "[]"
            ],

            DataStructure.LINKED_LIST: [
                "ListNode",
                "LinkedList"
            ],

            DataStructure.TREE: [
                "TreeNode"
            ]
        }

        for ds, patterns in rules.items():

            for pattern in patterns:

                if pattern in code:

                    detected.append(ds)

                    break

        return detected