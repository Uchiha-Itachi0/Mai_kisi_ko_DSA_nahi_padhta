//
// Created by Anubhav Shukla on 24-08-2022.
//

#include<iostream>
#include<vector>
using namespace std;

class Node{
public:
    int data;
    Node *next;

    explicit Node(int data) : data(data), next(nullptr){}
};

class LinkedList{
public:
    Node *head;
    Node *tail;
    LinkedList() : head(nullptr), tail(nullptr) {}

    // Adding data
    void append(int data){
        Node *new_node = new Node(data);
        if (head){
            tail -> next = new_node;
            tail = new_node;
        }
        else{
            head = new_node;
            tail = new_node;
        }
    }


    // Converting array of integer
    void linked_list_array(int data[]){
        for(auto value: data){
            this -> append(value);
        }
    }

    // For displaying data
    void print() const{
        Node *current = head;
        cout << '[';
        while (current){
            if(!current -> next){
                cout << current -> data;
            }
            else{
                cout << current -> data << ", ";
            }
            current = current -> next;
        }
        cout << ']' << endl;
    }
};

//int main(){
//    LinkedList l1;
//    vector<int> data = {1, 2, 3, 4, 5};
//    cout << l1.head -> data << endl;
//    l1.print();
//    return 0;
//}
