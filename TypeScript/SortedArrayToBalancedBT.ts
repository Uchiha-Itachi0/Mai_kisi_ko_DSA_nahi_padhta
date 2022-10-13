import { TreeNode } from "./BinaryTree";

function createNode(data: number): TreeNode<number>{
    return {
        data,
        left: null,
        right: null
    }
}

function sortedArrayToBalancedBT(arr: number[]): TreeNode<number> | null {
    if(arr.length === 0) return null;
    const mid = Math.floor(arr.length / 2);
    const root = createNode(arr[mid]);
    root.left = sortedArrayToBalancedBT(arr.slice(0, mid));
    root.right = sortedArrayToBalancedBT(arr.slice(mid + 1));
    return root;
}