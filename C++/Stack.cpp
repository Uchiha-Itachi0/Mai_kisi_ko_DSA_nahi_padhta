//
// Created by Anubhav Shukla on 23-08-2022.
//

#include<iostream>
#include<vector>
using namespace std;

class Node{
public:
    int data;
    Node* next;  // address for the Node
    explicit Node(int data){
        this -> data = data;
        this -> next = nullptr;
    }
};

class Stack{
public:
    Node* head;
    Stack(){
        this -> head = nullptr;
    }

    // For adding data
    void push(int data){
        Node* newNode = new Node(data);
        newNode -> next = head;
        head = newNode;
    }

    // For popping
    int pop(){
        if(!head){
            throw invalid_argument("Popping from the empty stack []");
        }
        int storage = head -> data;
        head = head -> next;
        return storage;

    }

    // For printing
    void print() const{
        Node* current = head;
        vector<int> storage;
        while(current){
            storage.push_back(current->data);
            current = current -> next;
        }
        cout << '[';
        for(int i = 0; i < storage.size(); i++){
            if(i == storage.size() - 1){
                cout << storage[i];
            }
            else{
                cout << storage[i] << ", ";
            }
        }
        cout << ']' << endl;
    }
};

int main(){
    auto* stack = new Stack();
    stack->push(10);
    stack -> push(20);
    stack -> print();
    cout << stack -> pop() << endl;
    stack -> print();
    return 0;
}