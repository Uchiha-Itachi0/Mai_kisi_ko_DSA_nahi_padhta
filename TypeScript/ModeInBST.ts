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
    const ans: number[] = []
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
let prev: TreeNode<number> | null = null;
let frequency = 1;
let maxFrequency = 0;
function modeHelper(root: TreeNode<number> | null,
                    modes: number[]): void{
    if(root !== null){
        if(root.left !== null) modeHelper(root.left, modes);
        if(prev != null){
            if(prev.data === root.data) frequency++;
            else frequency = 1;
        }
        if(frequency > maxFrequency){
            modes.length = 0;
            modes.push(root.data);
            maxFrequency = frequency;
        }
        else if(frequency === maxFrequency) modes.push(root.data);
        prev = root;
        if(root.right !== null) modeHelper(root.right, modes);
    }

}

function findModeWithoutHashMap(root: TreeNode<number> | null): number[]{
    let ans: number[] = [];
    modeHelper(root, ans);
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

const root2: TreeNode<number> = {
    data: 1,
    left: null,
    right: null
}

// console.log(findMode(root));
console.log(findModeWithoutHashMap(root));
