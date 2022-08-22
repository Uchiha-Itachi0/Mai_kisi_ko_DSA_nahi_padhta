//
// Created by Anubhav Shukla on 22-08-2022.
//

#include<iostream>
#include<vector>
using namespace std;

//# Method 1
//# Time Complexity: O(n^2)
//# Space Complexity: O(1)
//# Approach : Calculate every possible sell for particular stock. This can be\
//# achieved using nested loop
int bestTimeToBuyStockMethod1(vector<int>& prices){
    int max_profit = 0;
    for(int buy = 0; buy < prices.size(); buy++){
        for(int sell = buy + 1; sell < prices.size(); sell++){
            int curr_profit = prices[sell] - prices[buy];
            max_profit = max(max_profit, curr_profit);
        }
    }
    return max_profit;
}

//# Method 2
//# Time Complexity : O(n)
//# Space Complexity: O(1)
//# Approach : [3, 2, 5, 4, 1, 6] in this array suppose we buy stock at index 1
//# Using method 1 we can calculate all the profit we can get if we buy the stock
//# at index 1. But wait a minute we can see that when we calculate the profit at index 4
//# we get a negative value which means we are at loss at this point which is no good
//# Therefore we can say instead of buying the stock at index 1 let's buy at index 4.
//# Since we have already calculated all the profits we can get if we buy stock at index 1.
//# So if one doesn't produce us the maximum profit we already store the maximum profit for other index.

int bestTimeForStockMethod2(vector<int>& prices){
    int max_profit = 0;
    int buy = 0, sell = 1;
    while(sell < prices.size()){
        int curr_profit = prices[sell] - prices[buy];
        if (curr_profit < 0){
            buy = sell;
        }
        max_profit = max(max_profit, curr_profit);
        sell++;
    }
    return max_profit;
}

int main(){
    vector<int> prices = {7,1,5,3,6,4};
    cout << bestTimeForStockMethod2(prices);
    return 0;
}