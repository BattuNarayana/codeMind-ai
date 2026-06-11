import { ExecutionTrace } from "@/types/trace";

export const sampleTrace: ExecutionTrace = {
  snapshots: [
    {
      "step": 1,
      "current_node": null,
      "stack": [],
      "result": [],
      "metadata": {
        "curr": 1
      },
      "action": "SET_CURRENT",
      "source_code": "TreeNode curr = root",
      "explanation": "Current pointer initialized to root"
    },
    {
      "step": 2,
      "current_node": null,
      "stack": [],
      "result": [],
      "metadata": {
        "curr": 1
      },
      "action": "WHILE_CHECK",
      "source_code": "while(curr != null || !stack.isEmpty())",
      "explanation": "Checking traversal continuation condition"
    },
    {
      "step": 3,
      "current_node": null,
      "stack": [],
      "result": [],
      "metadata": {
        "curr": 1
      },
      "action": "INNER_WHILE_CHECK",
      "source_code": "while(curr != null)",
      "explanation": "Checking current pointer"
    },
    {
      "step": 4,
      "current_node": null,
      "stack": [
        1
      ],
      "result": [],
      "metadata": {
        "curr": 1
      },
      "action": "PUSH_TO_STACK",
      "source_code": "stack.push(curr)",
      "explanation": "Pushed 1 into stack"
    },
    {
      "step": 5,
      "current_node": null,
      "stack": [
        1
      ],
      "result": [],
      "metadata": {
        "curr": 2
      },
      "action": "MOVE_LEFT",
      "source_code": "curr = curr.left",
      "explanation": "Moving to left child"
    },
    {
      "step": 6,
      "current_node": null,
      "stack": [
        1
      ],
      "result": [],
      "metadata": {
        "curr": 2
      },
      "action": "INNER_WHILE_CHECK",
      "source_code": "while(curr != null)",
      "explanation": "Checking current pointer"
    },
    {
      "step": 7,
      "current_node": null,
      "stack": [
        1,
        2
      ],
      "result": [],
      "metadata": {
        "curr": 2
      },
      "action": "PUSH_TO_STACK",
      "source_code": "stack.push(curr)",
      "explanation": "Pushed 2 into stack"
    },
    {
      "step": 8,
      "current_node": null,
      "stack": [
        1,
        2
      ],
      "result": [],
      "metadata": {
        "curr": null
      },
      "action": "MOVE_LEFT",
      "source_code": "curr = curr.left",
      "explanation": "Moving to left child"
    },
    {
      "step": 9,
      "current_node": null,
      "stack": [
        1,
        2
      ],
      "result": [],
      "metadata": {
        "curr": null
      },
      "action": "INNER_WHILE_FAILED",
      "source_code": "while(curr != null)",
      "explanation": "Current pointer became null"
    },
    {
      "step": 10,
      "current_node": 2,
      "stack": [
        1
      ],
      "result": [],
      "metadata": {
        "curr": 2
      },
      "action": "POP_NODE",
      "source_code": "curr = stack.pop()",
      "explanation": "Popped 2 from stack"
    },
    {
      "step": 11,
      "current_node": 2,
      "stack": [
        1
      ],
      "result": [
        2
      ],
      "metadata": {
        "curr": 2
      },
      "action": "ADD_TO_RESULT",
      "source_code": "result.add(curr.val)",
      "explanation": "Added 2 to inorder result"
    },
    {
      "step": 12,
      "current_node": null,
      "stack": [
        1
      ],
      "result": [
        2
      ],
      "metadata": {
        "curr": null
      },
      "action": "MOVE_RIGHT",
      "source_code": "curr = curr.right",
      "explanation": "Moving to right child"
    },
    {
      "step": 13,
      "current_node": null,
      "stack": [
        1
      ],
      "result": [
        2
      ],
      "metadata": {
        "curr": null
      },
      "action": "WHILE_CHECK",
      "source_code": "while(curr != null || !stack.isEmpty())",
      "explanation": "Checking traversal continuation condition"
    },
    {
      "step": 14,
      "current_node": null,
      "stack": [
        1
      ],
      "result": [
        2
      ],
      "metadata": {
        "curr": null
      },
      "action": "INNER_WHILE_FAILED",
      "source_code": "while(curr != null)",
      "explanation": "Current pointer became null"
    },
    {
      "step": 15,
      "current_node": 1,
      "stack": [],
      "result": [
        2
      ],
      "metadata": {
        "curr": 1
      },
      "action": "POP_NODE",
      "source_code": "curr = stack.pop()",
      "explanation": "Popped 1 from stack"
    },
    {
      "step": 16,
      "current_node": 1,
      "stack": [],
      "result": [
        2,
        1
      ],
      "metadata": {
        "curr": 1
      },
      "action": "ADD_TO_RESULT",
      "source_code": "result.add(curr.val)",
      "explanation": "Added 1 to inorder result"
    },
    {
      "step": 17,
      "current_node": null,
      "stack": [],
      "result": [
        2,
        1
      ],
      "metadata": {
        "curr": 3
      },
      "action": "MOVE_RIGHT",
      "source_code": "curr = curr.right",
      "explanation": "Moving to right child"
    },
    {
      "step": 18,
      "current_node": null,
      "stack": [],
      "result": [
        2,
        1
      ],
      "metadata": {
        "curr": 3
      },
      "action": "WHILE_CHECK",
      "source_code": "while(curr != null || !stack.isEmpty())",
      "explanation": "Checking traversal continuation condition"
    },
    {
      "step": 19,
      "current_node": null,
      "stack": [],
      "result": [
        2,
        1
      ],
      "metadata": {
        "curr": 3
      },
      "action": "INNER_WHILE_CHECK",
      "source_code": "while(curr != null)",
      "explanation": "Checking current pointer"
    },
    {
      "step": 20,
      "current_node": null,
      "stack": [
        3
      ],
      "result": [
        2,
        1
      ],
      "metadata": {
        "curr": 3
      },
      "action": "PUSH_TO_STACK",
      "source_code": "stack.push(curr)",
      "explanation": "Pushed 3 into stack"
    },
    {
      "step": 21,
      "current_node": null,
      "stack": [
        3
      ],
      "result": [
        2,
        1
      ],
      "metadata": {
        "curr": null
      },
      "action": "MOVE_LEFT",
      "source_code": "curr = curr.left",
      "explanation": "Moving to left child"
    },
    {
      "step": 22,
      "current_node": null,
      "stack": [
        3
      ],
      "result": [
        2,
        1
      ],
      "metadata": {
        "curr": null
      },
      "action": "INNER_WHILE_FAILED",
      "source_code": "while(curr != null)",
      "explanation": "Current pointer became null"
    },
    {
      "step": 23,
      "current_node": 3,
      "stack": [],
      "result": [
        2,
        1
      ],
      "metadata": {
        "curr": 3
      },
      "action": "POP_NODE",
      "source_code": "curr = stack.pop()",
      "explanation": "Popped 3 from stack"
    },
    {
      "step": 24,
      "current_node": 3,
      "stack": [],
      "result": [
        2,
        1,
        3
      ],
      "metadata": {
        "curr": 3
      },
      "action": "ADD_TO_RESULT",
      "source_code": "result.add(curr.val)",
      "explanation": "Added 3 to inorder result"
    },
    {
      "step": 25,
      "current_node": null,
      "stack": [],
      "result": [
        2,
        1,
        3
      ],
      "metadata": {
        "curr": null
      },
      "action": "MOVE_RIGHT",
      "source_code": "curr = curr.right",
      "explanation": "Moving to right child"
    },
    {
      "step": 26,
      "current_node": null,
      "stack": [],
      "result": [
        2,
        1,
        3
      ],
      "metadata": {
        "curr": null
      },
      "action": "WHILE_CHECK_FAILED",
      "source_code": "while(curr != null || !stack.isEmpty())",
      "explanation": "Traversal completed"
    }
  ],
};