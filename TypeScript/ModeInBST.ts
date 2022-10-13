import { TreeNode } from "./BinaryTree";


interface storageType{
    [key: number]: number;
}

function updateStorage(root: TreeNode<number> | null, storage: storageType){
    if(root !== null){
        storage[root.data] ? storage[root.data]++ : storage[root.data] = 1;
        if(root.left !== null) updateStorage(root.left, storage);
        if(root.right !== null) updateStorage(root.right, storage);
    }
}

function findMode(root: TreeNode<number> | null): number[] {
    const storage: storageType = {};
    const ans: number[] = [];
    updateStorage(root, storage);
    let maximum: number = Number.NEGATIVE_INFINITY;
    for(const values of Object.values(storage)){
        if(values >= maximum){
            maximum = values;
        }
    }
    for(const values of Object.keys(storage)){
        if(storage[Number(values)] === maximum){
            ans.push(Number(values));
        }
    }
    return ans;

}

const root: TreeNode<number> = {
    data: 1,
    left: null,
    right: {
        data: 3,
        left: {
            data: 2,
            left: null,
            right: null
        },
        right: {
            data: 3,
            left: {
                data: 2,
                left: null,
                right: null
            },
            right: null

        }
    }
}

console.log(findMode(root));

