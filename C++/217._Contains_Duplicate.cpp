//
// Created by Anubhav Shukla on 15-09-2022.
//

#include<iostream>
#include<set>
#include<vector>
using namespace std;

bool containDuplicateMethod1(vector<int>& nums){
    set<int> storage;
    for(auto value: nums){
        if(storage.find(value) != storage.end()){
            return true;
        }
        storage.insert(value);
    }
    return false;
}


int main(){
    vector<int> nums = {1, 2, 3};
    cout << containDuplicateMethod1(nums) << endl;
    return 0;

}
