import BST, { TreeNode } from "./BinaryTree";

function inOrderTraverserUsingLoop(root: TreeNode<number> | null): number[] {
    const result: number[] = [];
    const stack: TreeNode<number>[] = [];
    let current: TreeNode<number> | null = root;
    if(root !== null) stack.push(root);
    while(stack.length > 0){
        if(current !== null && current.left !== null){
            current = current.left;
            stack.push(current);
        }
        else{
            const element = stack.pop();
            if(element !== undefined){
                current = element;
                result.push(current.data);
            }
            if(current !== null) current = current.right;
            if(current !== null) stack.push(current);
        }
    }
    return result;
}

const bst = new BST<number>();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3)
bst.insert(8);
bst.insert(20);

console.log(inOrderTraverserUsingLoop(bst.root));

console.log(bst.inOrder());