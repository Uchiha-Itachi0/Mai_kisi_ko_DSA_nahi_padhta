def maximumAverageSubarray(nums: list[int], k: int) -> float:
    summation = 0
    max_summation = float("-inf")
    for index, value in enumerate(nums):
        summation += value
        if index >= k:
            summation -= nums[index - k]
        if index >= k - 1:
            max_summation = max(summation, max_summation)
    return max_summation / k


print(maximumAverageSubarray([1, 12, -5, -6, 50, 3], 4))
