def validAnagram(s: str, t: str) -> bool:
    s_length, t_length = len(s), len(t)

    # if the length is not equal then all characters are not present
    if s_length != t_length:
        return False

    # English alphabet has 26 so all the character will definitely be one of them
    # If we store the appearance of all the character in s in an array of 26 character then
    # we can easily check for the anagram.

    storage = [0] * 26
    for char in s:
        storage[ord(char) - ord('a')] += 1
    for char in t:
        if storage[ord(char) - ord('a')] == 0:
            return False
        storage[ord(char) - ord('a')] -= 1
    return True


# Using dictionary
def validAnagramDic(s: str, t: str) -> bool:
    s_length, t_length = len(s), len(t)

    if s_length != t_length:
        return False

    storage = {}
    for char in s:
        storage[char] = storage.get(char, 0) + 1

    for char in t:
        if char not in storage or storage[char] == 0:
            return False
        storage[char] -= 1
        
    return True


print(validAnagram("cat", "rat"))
