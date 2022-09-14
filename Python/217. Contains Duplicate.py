# Method 1 using brute force
# Time Complexity: O(n^2)
# Space Complexity: O(1)
def duplicate(nums: list) -> bool:
    length = len(nums)
    for i in range(length):
        for j in range(i + 1, length):
            if nums[i] == nums[j]:
                return True
    return False


# Method 2 Using sorting
# Time Complexity: O(nlogn)
# Space Complexity: O(1)

def duplicateMethod2(nums: list) -> bool:
    nums.sort()
    for index in range(len(nums) - 1):
        if nums[index] == nums[index + 1]:
            return True
    return False


# Method 3 using Hash Table
# Time Complexity: O(n)
# Space Complexity: O(n)
def duplicateMethod3(nums: list) -> bool:
    storage = set()
    for value in nums:
        if value in storage:
            return True
        storage.add(value)

    return False


nums = [1, 2, 3, 4]
print(duplicateMethod2(nums))
