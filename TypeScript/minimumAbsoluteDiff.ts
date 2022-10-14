import BST, {TreeNode} from "./BinaryTree";

let maximum: number = Number.POSITIVE_INFINITY;
let prev: TreeNode<number> | null = null;
function getMinimumDifference(root: TreeNode<number> | null): number{
    inorder(root);
    return maximum;
}

function inorder(root: TreeNode<number> | null): void{
    if(root !== null){
        if(root.left !== null) inorder(root.left);
        if(prev != null){
            const diff: number = Math.abs(prev.data - root.data);
            if(diff < maximum) maximum = diff;
        }
        prev = root;
        if(root.right !== null) inorder(root.right);
    }
}

const bst = new BST<number>();

bst.insert(2);
bst.insert(0);

console.log(getMinimumDifference(bst.root));
