import BST, {TreeNode} from "./BinaryTree";

function heightCalculator(root: TreeNode<number> | null): number {
    if(root === null) return 0;
    return Math.max(heightCalculator(root.left), heightCalculator(root.right)) + 1;
}

function checkForBalancedBT(root: TreeNode<number> | null): boolean {
    if(root === null) return true;
    let leftHeight: number = heightCalculator(root.left);
    let rightHeight: number = heightCalculator(root.right);
    if(Math.abs(leftHeight - rightHeight) > 1) return false;
    return checkForBalancedBT(root.left) && checkForBalancedBT(root.right);
}

function checkForBalancedBTOptimized(root: TreeNode<number>): boolean{
    return checkForBalancedBTOptimizedHelper(root)[0];

}

function checkForBalancedBTOptimizedHelper(root: TreeNode<number> | null): [boolean, number]{
    if(root === null) return [true, 0];
    let [left, right] = [checkForBalancedBTOptimizedHelper(root.left), checkForBalancedBTOptimizedHelper(root.right)];
    let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
    return [balanced, Math.max(left[1], right[1]) + 1];
}

const bst = new BST<number>();
bst.root = {
    data: 1,
    left: {
        data: 3,
        left: {
            data: 5,
            left: {
                data: 7,
                left: null,
                right: null
            },
            right: {
                data: 6,
                left: null,
                right: null
            }
        },
        right: {
            data: 4,
            left: null,
            right: null
        }
    },
    right: {
        data: 2,
        left: null,
        right: null
    }
}

console.log(checkForBalancedBTOptimized(bst.root));

