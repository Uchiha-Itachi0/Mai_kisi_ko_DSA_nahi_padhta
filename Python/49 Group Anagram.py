def groupAnagram(strs: list[str]) -> list[list[str]]:
    storage = {}
    for value in strs:
        char_storage = [0] * 26
        for char in value:
            char_storage[ord(char) - ord('a')] += 1

        if tuple(char_storage) in storage:
            storage[tuple(char_storage)].append(value)
        else:
            storage[tuple(char_storage)] = [value]

    return list(storage.values())


print(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]))
