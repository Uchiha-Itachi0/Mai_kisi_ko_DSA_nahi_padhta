# Method 1: Using Sorting
# Time Complexity: O(n log n)
# Space Complexity: O(1)
def longestConsecutive(nums: list[int]) -> int:
    """
    :param nums: list[int]
    :return: int
    """
    if len(nums) == 0:
        return 0
    nums.sort()
    count, maximum = 0, 0
    for index in range(len(nums) - 1):
        if nums[index + 1] - nums[index] == 1:
            count += 1
        elif nums[index + 1] - nums[index] != 0:
            count = 0
        maximum = max(maximum, count)
    return maximum + 1


# Method 2: Using Hash Table
# Time Complexity: O(n)
# Space Complexity: O(n)
def longestConsecutiveHashMap(nums: list[int]) -> int:
    storage = set(nums)
    maximum = 0
    for value in nums:
        longest = 1
        subtract_value = 1
        while value - subtract_value in storage:
            longest += 1
            storage.remove(value - subtract_value)
            subtract_value += 1
        subtract_value = 1
        while value + subtract_value in storage:
            longest += 1
            storage.remove(value + subtract_value)
            subtract_value += 1
        maximum = max(maximum, longest)
    return maximum


# Method 3: Using Hash Table with little optimization
# Time Complexity: O(n)
# Space Complexity: O(n)
def longestConsecutiveHashMapOptimized(nums: list[int]) -> int:
    """
    :param nums: list[int]
    :return: int

    The main approach in this optimization is that we have to find the smallest
    number of sequence because if we add the numbers like 1, 2, 3 we will get all
    the numbers which are present in the consecutive.
    """
    storage, maximum = set(nums), 0
    for value in nums:
        if value - 1 not in storage:
            count = 1
            while value + count in storage:
                count += 1
            maximum = max(maximum, count)
    return maximum


print(longestConsecutiveHashMapOptimized([1, 2, 3, 4, 7, 8]))
