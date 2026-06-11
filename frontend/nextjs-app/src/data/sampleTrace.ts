import { ExecutionTrace } from "@/types/trace";

export const sampleTrace: ExecutionTrace = {
  snapshots: [
    {
      "step": 1,
      "current_node": 1,
      "stack": [
        1
      ],
      "result": [],
      "metadata": {
        "stack2": []
      },
      "action": "PUSH_ROOT_TO_S1",
      "source_code": "s1.push(root)",
      "explanation": "Root node pushed into Stack 1"
    },
    {
      "step": 2,
      "current_node": null,
      "stack": [
        1
      ],
      "result": [],
      "metadata": {
        "stack2": []
      },
      "action": "WHILE_CHECK",
      "source_code": "while(!s1.isEmpty())",
      "explanation": "Checking whether Stack 1 contains nodes"
    },
    {
      "step": 3,
      "current_node": 1,
      "stack": [],
      "result": [],
      "metadata": {
        "stack2": []
      },
      "action": "POP_FROM_S1",
      "source_code": "TreeNode node = s1.pop()",
      "explanation": "Popped 1 from Stack 1"
    },
    {
      "step": 4,
      "current_node": 1,
      "stack": [],
      "result": [],
      "metadata": {
        "stack2": [
          1
        ]
      },
      "action": "PUSH_TO_S2",
      "source_code": "s2.push(node)",
      "explanation": "Pushed 1 into Stack 2"
    },
    {
      "step": 5,
      "current_node": 2,
      "stack": [
        2
      ],
      "result": [],
      "metadata": {
        "stack2": [
          1
        ]
      },
      "action": "PUSH_LEFT_TO_S1",
      "source_code": "s1.push(node.left)",
      "explanation": "Pushed left child 2"
    },
    {
      "step": 6,
      "current_node": 3,
      "stack": [
        2,
        3
      ],
      "result": [],
      "metadata": {
        "stack2": [
          1
        ]
      },
      "action": "PUSH_RIGHT_TO_S1",
      "source_code": "s1.push(node.right)",
      "explanation": "Pushed right child 3"
    },
    {
      "step": 7,
      "current_node": null,
      "stack": [
        2,
        3
      ],
      "result": [],
      "metadata": {
        "stack2": [
          1
        ]
      },
      "action": "WHILE_CHECK",
      "source_code": "while(!s1.isEmpty())",
      "explanation": "Checking whether Stack 1 contains nodes"
    },
    {
      "step": 8,
      "current_node": 3,
      "stack": [
        2
      ],
      "result": [],
      "metadata": {
        "stack2": [
          1
        ]
      },
      "action": "POP_FROM_S1",
      "source_code": "TreeNode node = s1.pop()",
      "explanation": "Popped 3 from Stack 1"
    },
    {
      "step": 9,
      "current_node": 3,
      "stack": [
        2
      ],
      "result": [],
      "metadata": {
        "stack2": [
          1,
          3
        ]
      },
      "action": "PUSH_TO_S2",
      "source_code": "s2.push(node)",
      "explanation": "Pushed 3 into Stack 2"
    },
    {
      "step": 10,
      "current_node": null,
      "stack": [
        2
      ],
      "result": [],
      "metadata": {
        "stack2": [
          1,
          3
        ]
      },
      "action": "WHILE_CHECK",
      "source_code": "while(!s1.isEmpty())",
      "explanation": "Checking whether Stack 1 contains nodes"
    },
    {
      "step": 11,
      "current_node": 2,
      "stack": [],
      "result": [],
      "metadata": {
        "stack2": [
          1,
          3
        ]
      },
      "action": "POP_FROM_S1",
      "source_code": "TreeNode node = s1.pop()",
      "explanation": "Popped 2 from Stack 1"
    },
    {
      "step": 12,
      "current_node": 2,
      "stack": [],
      "result": [],
      "metadata": {
        "stack2": [
          1,
          3,
          2
        ]
      },
      "action": "PUSH_TO_S2",
      "source_code": "s2.push(node)",
      "explanation": "Pushed 2 into Stack 2"
    },
    {
      "step": 13,
      "current_node": null,
      "stack": [],
      "result": [],
      "metadata": {
        "stack2": [
          1,
          3,
          2
        ]
      },
      "action": "WHILE_CHECK_FAILED",
      "source_code": "while(!s1.isEmpty())",
      "explanation": "Stack 1 became empty"
    },
    {
      "step": 14,
      "current_node": null,
      "stack": [],
      "result": [],
      "metadata": {
        "stack2": [
          1,
          3,
          2
        ]
      },
      "action": "SECOND_STACK_CHECK",
      "source_code": "while(!s2.isEmpty())",
      "explanation": "Checking whether Stack 2 contains nodes"
    },
    {
      "step": 15,
      "current_node": 2,
      "stack": [],
      "result": [
        2
      ],
      "metadata": {
        "stack2": [
          1,
          3
        ]
      },
      "action": "ADD_FROM_S2_TO_RESULT",
      "source_code": "result.add(s2.pop().val)",
      "explanation": "Added 2 to postorder result"
    },
    {
      "step": 16,
      "current_node": null,
      "stack": [],
      "result": [
        2
      ],
      "metadata": {
        "stack2": [
          1,
          3
        ]
      },
      "action": "SECOND_STACK_CHECK",
      "source_code": "while(!s2.isEmpty())",
      "explanation": "Checking whether Stack 2 contains nodes"
    },
    {
      "step": 17,
      "current_node": 3,
      "stack": [],
      "result": [
        2,
        3
      ],
      "metadata": {
        "stack2": [
          1
        ]
      },
      "action": "ADD_FROM_S2_TO_RESULT",
      "source_code": "result.add(s2.pop().val)",
      "explanation": "Added 3 to postorder result"
    },
    {
      "step": 18,
      "current_node": null,
      "stack": [],
      "result": [
        2,
        3
      ],
      "metadata": {
        "stack2": [
          1
        ]
      },
      "action": "SECOND_STACK_CHECK",
      "source_code": "while(!s2.isEmpty())",
      "explanation": "Checking whether Stack 2 contains nodes"
    },
    {
      "step": 19,
      "current_node": 1,
      "stack": [],
      "result": [
        2,
        3,
        1
      ],
      "metadata": {
        "stack2": []
      },
      "action": "ADD_FROM_S2_TO_RESULT",
      "source_code": "result.add(s2.pop().val)",
      "explanation": "Added 1 to postorder result"
    },
    {
      "step": 20,
      "current_node": null,
      "stack": [],
      "result": [
        2,
        3,
        1
      ],
      "metadata": {
        "stack2": []
      },
      "action": "WHILE_CHECK_FAILED",
      "source_code": "while(!s2.isEmpty())",
      "explanation": "Postorder traversal completed"
    }
  ],
};