from pydantic import BaseModel


class TreeNode(BaseModel):

    value: int

    left: "TreeNode | None" = None

    right: "TreeNode | None" = None