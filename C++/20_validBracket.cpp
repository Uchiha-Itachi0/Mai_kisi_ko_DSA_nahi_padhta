//
// Created by Anubhav Shukla on 24-08-2022.
//

#include<iostream>
#include<stack>
using namespace std;

bool validBracket(const string& s){
    stack<char> storage;
    for(auto bracket: s){
        if(bracket == '('){
            storage.push(')');
        }
        else if (bracket == '{'){
            storage.push('}');
        }
        else if (bracket == '['){
            storage.push(']');
        }
        else if (storage.empty() || storage.top() != bracket){
            return false;
        }
        else{
            storage.pop();
        }
    }
    return storage.empty();
}

int main(){
    string s = "()";
    cout << validBracket(s) << endl;
    return 0;
}

