def twoSum(nums: list[int], target: int) -> list[int]:
    storage = {}
    for index, value in enumerate(nums):
        if (target - value) in storage:
            return [storage[target - value], index]
        storage[value] = index


print(twoSum([2, 7, 11, 15], 9))
