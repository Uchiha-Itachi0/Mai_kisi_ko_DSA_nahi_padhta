//
// Created by Anubhav Shukla on 15-08-2022.
//

#include<iostream>
#include<unordered_set>
using namespace std;
#define size(arr) (sizeof(arr) / sizeof((arr)[0]))

// Method 1: Using Sorting
// Time Complexity: O(n log n)
// Space Complexity: O(1)

int longestConsecutive(int* nums, int numsSize){
    if(numsSize == 0) return 0;
    sort(nums, nums + numsSize);
    int
            ans = 0,
            max = 0;
    for(int i = 0; i < numsSize - 1; i++){
        if(nums[i  + 1] - nums[i] == 1){
            ans++;
        }
            // same number should not set ans to 0
        else if(nums[i + 1] - nums[i] !=  0){
            ans = 0;
        }
        max = max > ans ? max : ans;
    }
    return max + 1;


}

// Method 2: Using Hash Table
// Time Complexity: O(n)
// Space Complexity: O(n)
int longestConsecutiveHashMap(int* nums, int numsSize){
    unordered_set<int> storage(nums, nums + numsSize);
    int maximum = 0;
    for(int i = 0; i < numsSize; i++){
        int
                longest = 1,
                subtract_value = 1;
        while(storage.find(nums[i] - subtract_value) != storage.end()){
            longest++;
            storage.erase(nums[i] - subtract_value);
            subtract_value++;
        }
        subtract_value = 1;
        while(storage.find(nums[i] + subtract_value) != storage.end()){
            longest++;
            storage.erase(nums[i] + subtract_value);
            subtract_value++;
        }
        maximum = maximum > longest ? maximum : longest;
    }
    return maximum;
}

// Method 3: Using Hash Table with little optimization
// Time Complexity: O(n)
// Space Complexity: O(n)
int longestConsecutiveHashMapOptimized(int* nums, int numsSize){
    unordered_set<int> storage(nums, nums + numsSize);
    int maximum = 0;
    for(int i = 0; i < numsSize; i++){
        if(storage.find(nums[i] - 1) == storage.end()){
            int current_longest = 1;
            while(storage.find(nums[i] + current_longest) != storage.end()){
                current_longest++;
            }
            maximum = maximum > current_longest ? maximum : current_longest;
        }
    }
    return maximum;
}
int main(){
    int arr[] = {0,3,7,2,5,8,4,6,0,1};
    int n = size(arr);
    cout << "Longest Consecutive Subsequence: " << longestConsecutiveHashMapOptimized(arr, n) << endl;
    return 0;
}

