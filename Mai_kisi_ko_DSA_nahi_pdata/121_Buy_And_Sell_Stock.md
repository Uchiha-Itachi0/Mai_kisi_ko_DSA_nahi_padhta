## Leetcode - 121. Best Time to Buy and Sell Stock

### Easy

### [Question Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

### Code
[Python](https://github.com/Uchiha-Itachi0/Mai_kisi_ko_DSA_nahi_padhta/blob/master/Python/121_Best_time_to_buy_and_sell_stock.py)
|| [C++](https://github.com/Uchiha-Itachi0/Mai_kisi_ko_DSA_nahi_padhta/blob/master/C%2B%2B/121_Best_time_to_buy_sell_stock.cpp)
|| [TypeScript](https://github.com/Uchiha-Itachi0/Mai_kisi_ko_DSA_nahi_padhta/blob/master/TypeScript/BuySellStock.ts)

First thing you should know is that the problem is asking for the maximum profit that can be made by buying and selling a stock once.
And Maximum Profit you can make is the difference between the maximum price and the minimum price i.e. if we buy the stock when
it's price is minimum and sell it when it's price is maximum then we get maximum profit.

For example, if we have prices [1, 2, 3, 4, 5] then we can buy the stock at 1 and sell it at 5, profit is 4.

Similarly, if we have prices [7, 1, 5, 3, 6, 4] then we can buy the stock at 1 and sell it at 6, profit is 5.

And if we have prices [7, 6, 4, 3, 1] then we can't make any profit.

Let's first discuss the brute force approach.

## Brute Force Approach
 
- We buy the stock at the first day
- We calculate all the profit we can make by selling it at every day, means we sell it at day 2 and store the profit then
we sell it at day 3 and store the profit and so on.
- Repeat these two points for all the days.
- Return the maximum profit we can make.

We can code the above approach using two for loop.

### Code

```python
def bestTimeForStockMethod1(prices: list[int]) -> int:
    max_profit = 0
    for buy_index, buy_value in enumerate(prices):
        for sell_index in range(buy_index + 1, len(prices)):
            curr_profit = prices[sell_index] - buy_value
            max_profit = max(max_profit, curr_profit)
    return max_profit
```
### Let's understand the above code with the help of an example.

`prices = [7, 1, 5, 3, 6, 4]`
 
--> First iteration

We buy the stock at the first day i.e. we buy the stock at price `7`

- We sell the stock at day 2 i.e. we sell the stock at price `1`.
- Profit is `1 - 7 = -6` i.e. we are at loss.
- We update the max_profit.
- We sell the stock at day 3 i.e. we sell the stock at price `5`.
- Profit is `5 - 7 = -2` i.e. we are at loss. 
- We update the max_profit.
- .........continues.........................
- We sell the stock at day 6 i.e. we sell the stock at price `4`.
- Profit is `4 - 7 = -3` i.e. we are at loss.
- We update the max_profit.

--> Second iteration

We buy the stock at the second day i.e. we buy the stock at price `1`

- We sell the stock at day 3 i.e. we sell the stock at price `5`.
- Profit is `5 - 1 = 4` i.e. we are at profit.
- We update the max_profit.

And so on.

At the end we will have the maximum profit we can make.


`Time Complexity: O(n^2)`
`Space Complexity: O(1)`

## Better approach

`prices = [7, 1, 5, 3, 6, 4]`

Just like the above approach let's buy the stock at day 1 i.e at price `7`

Now when we sell the stock at day 2 i.e. at price `1` we will get the profit `1 - 7 = -6`
`-6`. What kind of profit is that?. It's a loss.
And from this loss we can say that price of stock at day 2 is less than price of stock at day 1.
So why do we buy the stock at day 1? Let's buy the stock at day 2 i.e. at price `1`. So we move
our pointer to day 2 i.e. at price `1`.

Now when we sell the stock at day 3 i.e. at price `5` we will get the profit `5 - 1 = 4`
`4`. We store this profit in `max_profit`.

Now we sell the stock at day 4 i.e. at price `3`.
We will get the profit `3 - 1 = 2`. We will store the maximum profit i.e. 4

Now we sell the stock at day 5 i.e. at price `6`.
We will get the profit `6 - 1 = 5`. We will store the maximum profit i.e. 5

Now we sell the stock at day 6 i.e. at price `4`.
we will get the profit `4 - 1 = 3`. We will store the maximum profit i.e. 5

Now we are at the end of the loop and since we don't encounter any loss which means we have bought the stock at lowest possible value.
Therefore, the `max_profit` which we store is the maximum profit we can make.

### Let's take another example but with less english

`prices = [7, 2, 5, 6, 1, 4]`

Let's have two pointer

```Python
[7,     2, 5, 6, 1, 4]
 |      |
 Buy    sell
 
 2 - 7 = -5 
 Loss which means we can buy stock at lower price 
 therefore we move our buy pointer to sell pointer and increase sell pointer by 1
 
[7, 2,     5, 6, 1, 4]
 |         |
 buy       sell
 
5 - 2 = 3    max_profit = 3
  
[7, 2,     5, 6, 1, 4]
    |         |
    buy      sell
    
6 - 2 = 4    max_profit = 4
    
[7, 2,  5, 6, 1, 4]
    |         |
    buy      sell
 
1 - 2 = -1   max_profit = 4

Loss which means we can buy stock at lower price 
therefore we move our buy pointer to sell pointer and increase sell pointer by 1

[7, 2,  5, 6, 1,    4]
              |     |
              buy   sell
              
4 - 1 = 3    max_profit = 4

we are at the end of the loop. Therefore, we return max_profit i.e 4

```

`Time Complexity: O(n)`
`Space Complexity: O(1)`

## Code

We can code this using two pointer approach.

```python
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
```