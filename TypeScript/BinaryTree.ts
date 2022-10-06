import Queue from "./Queue";
import {readdirSync} from "fs";
import {cursorTo} from "readline";

export interface TreeNode<T>{
    data: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
}

export default class BST<U>{
    root: TreeNode<U> | null;

    constructor() {
        this.root = null;
    }

    createNewNode = (data: U) : TreeNode<U> => {
        return {
            data,
            left: null,
            right: null
        }
    }

    insert(data: U): void{
        const newNode = this.createNewNode(data);
        // If root is not defined then first we need to create a root
        if(!this.root) this.root = newNode;
        else{
            let current: TreeNode<U> = this.root;
            let traversing: boolean = true;
            while(traversing) {
                // Value should not be equal in BST
                if(data === current.data) traversing = false;
                else if(data < current.data){
                    if(current.left === null){
                        current.left = newNode;
                        traversing = false;
                    }
                    else current = current.left;
                }
                else {
                    if(current.right === null){
                        current.right = newNode;
                        traversing = false;
                    }
                    else current = current.right;
                }
            }
        }
    }

    search(data: U): boolean {
        if (!this.root) return false;
        else {
            let current: TreeNode<U> | null = this.root;
            while (current !== null) {
                if (data === current.data) return true;
                else if (data < current.data) current = current.left;
                else current = current.right;
            }
        }
        return false;
    }
    searchRecursive(data: U, current: TreeNode<U> | null = this.root): boolean{
        if(current === null) return false;
        else if(data === current.data) return true;
        else if(data < current.data) return this.searchRecursive(data, current = current.left);
        else return this.searchRecursive(data, current = current.right);
    }

    BFS(): U[]{
        const result: U[] = [];
        const queue: Queue<TreeNode<U>> = new Queue<TreeNode<U>>();
        if(this.root !== null) queue.add(this.root);
        while(!queue.isEmpty()){
            let current: TreeNode<U> = queue.pop();
            result.push(current.data);
            if(current.left!== null) queue.add(current.left);
            if(current.right !== null) queue.add(current.right);
        }
        return result;
    }

    preorder(): U[]{
        const result: U[] = [];
        this.preorderHelper(result);
        return result;

    }
    postOrder(): U[] {
        const result: U[] = [];
        this.postOrderHelper(result);
        return result;
    }

    inOrder(): U[]{
        const result: U[] = [];
        this.inOrderHelper(result);
        return result;
    }

    private preorderHelper(result: U[], current: TreeNode<U> | null = this.root){
        if(current !== null) {
            result.push(current.data);
            if(current.left !== null) this.preorderHelper(result, current.left);
            if(current.right !== null) this.preorderHelper(result, current.right);
        }
    }

    private postOrderHelper(result: U[], current: TreeNode<U> | null = this.root){
        if(current !== null){
            if(current.left !== null) this.postOrderHelper(result, current.left);
            if(current.right !== null) this.postOrderHelper(result, current.right);
            result.push(current.data);
        }
    }

    private inOrderHelper(result: U[], current: TreeNode<U> | null = this.root){
        if(current !== null){
            if(current.left !== null) this.inOrderHelper(result, current.left);
            result.push(current.data);
            if(current.right !== null) this.inOrderHelper(result, current.right);
        }
    }
}