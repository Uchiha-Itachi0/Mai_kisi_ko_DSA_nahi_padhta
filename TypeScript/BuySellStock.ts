function BuySellStock(prices: number[]): number {
    let buy: number = 0;
    let sell: number = 1;
    let max_profit: number = 0;
    while (sell < prices.length){
        let curr_profit: number = prices[sell] - prices[buy];
        if(curr_profit < 0){
            buy = sell;
        }
        max_profit = Math.max(max_profit, curr_profit);
        sell++;
    }
    return max_profit;
}

let prices: number[] = [1, 2, 3, 4];
console.log(BuySellStock(prices))