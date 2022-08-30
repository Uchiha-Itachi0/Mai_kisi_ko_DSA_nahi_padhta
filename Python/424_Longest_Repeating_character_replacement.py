# Key idea: Number of character we can replace in a current window.


# Method 1 : Using sliding window and HashMap
# Time Complexity: O(n)
# Space complexity: O(n)

def longestRepeatingCharacter(s: str, k: int) -> int:
    storage, max_length = {}, 0
    right = left = 0
    while right < len(s):
        storage[s[right]] = storage.get(s[right], 0) + 1
        if ((right - left) + 1) - max(storage.values()) <= k:
            max_length = max(max_length, (right - left + 1))
        else:
            storage[s[left]] -= 1
            left += 1
        right += 1
    return max_length


# Method 2 : Using sliding window and HashMap (Optimize)
# Time Complexity: O(n)
# Space complexity: O(n)
def longestRepeatingCharacterMethod2(s: str, k: int) -> int:
    storage, max_length = {}, 0
    right = left = max_count = 0
    while right < len(s):
        storage[s[right]] = storage.get(s[right], 0) + 1
        max_count = max(max_count, storage[s[right]])
        if ((right - left) + 1) - max_count <= k:
            max_length = max(max_length, (right - left + 1))
        else:
            storage[s[left]] -= 1
            left += 1
        right += 1
    return max_length


print(longestRepeatingCharacterMethod2("ABCDBCD", 2))
