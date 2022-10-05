function groupAnagram(strs: string[]): string[][]{
    interface storageType {
        [key: string]: string[];
    }
    const storage: storageType = {};
    for(const str of strs){
        const char_storage: number[] = new Array(26).fill(0);
        for(const char of str) char_storage[char.charCodeAt(0) - 97]++;
        const key = char_storage.join("");
        storage[key] ? storage[key].push(str) : storage[key] = [str];
    }
    return Object.values(storage);
}

const strs: string[] = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagram(strs));