# Link https://leetcode.com/problems/longest-substring-without-repeating-characters/

# Method 1 Using HashMap
# Time Complexity: O(n)
# Space Complexity: O(n)

"""
Suppose we have "abcdbacd"
a       b   c   d   b   a   c   d
|
index

And we store all the visited letters in the hashmap. Like this {a: 0}
character as a key and it's index as a value

At certain point of time we are at this.
a   b   c   d   b      a   c   d
                |
                index
{a: 0, b: 1, c: 2, d: 3}   max_size = 4

Now we already have b inside our hashmap which implies that we have encounter
a repeating character. Therefore we have to move our index to a position such
that we don't encounter the repeating character. At what index we have the
repeating character at index 1 and 4. Since we have to return the maximum substring.
Therefore we should move our index to index 2. Which simply means now we don't have
the repeating character b anymore.

a   b   c      d   b   a   c   d
        |
        index
Now we start our count from here. Keeping the previous maximum i.e 4
"""


def longestSubstringWithoutRepetition(s: str) -> int:
    storage, count, max_substring, index = {}, 0, 0, 0
    length = len(s)
    while index < length:
        if s[index] in storage:
            max_substring = max(max_substring, count)
            count, storage, index = 0, {}, storage[s[index]] + 1
        else:
            storage[s[index]] = index
            index += 1
            count += 1
    if len(storage) > max_substring:
        return len(storage)
    return max_substring


# Method 2 Using HashMap with little optimization
# Time Complexity: O(n)
# Space Complexity: O(n)

"""
In the previous method what we are doing is going back as soon as we encounter
the repeated character.
a   b   c   d   b      a   c   d
                |
                index

a   b   c      d   b   a   c   d
        |
        index
And this is time consuming.

What we can do.

a      b   c   d   b     a   c   d
|                  |
left               right

{a: 0, b: 1, c: 2, d: 3}
curr_window = {0 : 3}.

a      b   c     d   b     a   c   d
            |        |
            left     right
            
{a: 0, b: 4, c: 2, d: 3}
curr_window = {2 : 4}.

also only move left if the index of repeating character is greater than left
"""


def longestSubstringWithoutRepetitionMethod2(s: str) -> int:
    left = max_so_far = count = 0
    storage = {}
    for index, char in enumerate(s):
        if char in storage and storage[char] >= left:
            max_so_far = max(max_so_far, count)
            left = storage[char] + 1
            count = (index - left)
        storage[char] = index
        count += 1
    return max(max_so_far, count)


print(longestSubstringWithoutRepetitionMethod2("bbbbb"))
