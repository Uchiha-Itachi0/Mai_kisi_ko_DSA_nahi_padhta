import BST, {TreeNode} from "./BinaryTree";

function findTargetNode(root: TreeNode<number> | null, k: number): boolean{
    const arr: number[] = [];
    inorder(root, arr);
    let pointer1 = 0,
        pointer2 = arr.length - 1;
    while(pointer1 < pointer2){
        let sum = arr[pointer1] + arr[pointer2];
        if(sum === k) return true;
        else if(sum < k) pointer1++;
        else pointer2--;
    }
    return false;
}

function inorder(root: TreeNode<number> | null, arr: number[]): void{
    if(root !== null){
        if(root.left !== null) inorder(root.left, arr);
        arr.push(root.data);
        if(root.right !== null) inorder(root.right, arr);
    }
}

const bst = new BST<number>();

bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(2);
bst.insert(4);
bst.insert(7);

console.log(findTargetNode(bst.root, 9));