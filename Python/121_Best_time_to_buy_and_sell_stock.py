# Explanation :
# https://github.com/Uchiha-Itachi0/Mai_kisi_ko_DSA_nahi_padhta/blob/master/Mai_kisi_ko_DSA_nahi_pdata/121_Buy_And_Sell_Stock.md

# Method 1
# Time Complexity: O(n^2)
# Space Complexity: O(1)
# Approach : Calculate every possible sell for particular stock. This can be\
# achieved using nested loop
def bestTimeForStockMethod1(prices: list[int]) -> int:
    max_profit = 0
    for buy_index, buy_value in enumerate(prices):
        for sell_index in range(buy_index + 1, len(prices)):
            curr_profit = prices[sell_index] - buy_value
            max_profit = max(max_profit, curr_profit)
    return max_profit


# Method 2
# Time Complexity : O(n)
# Space Complexity: O(1)
# Approach : [3, 2, 5, 4, 1, 6] in this array suppose we buy stock at index 1
# Using method 1 we can calculate all the profit we can get if we buy the stock
# at index 1. But wait a minute we can see that when we calculate the profit at index 4
# we get a negative value which means we are at loss at this point which is no good
# Therefore we can say instead of buying the stock at index 1 let's buy at index 4.
# Since we have already calculated all the profits we can get if we buy stock at index 1.
# So if one doesn't produce us the maximum profit we already store the maximum profit for other index.

def bestTimeForStockMethod2(prices: list[int]) -> int:
    max_profit = 0
    buy, sell = 0, 1
    while sell < len(prices):
        curr_profit = prices[sell] - prices[buy]
        if curr_profit < 0:
            buy = sell
        max_profit = max(max_profit, curr_profit)
        sell += 1
    return max_profit


print(bestTimeForStockMethod2([5]))
