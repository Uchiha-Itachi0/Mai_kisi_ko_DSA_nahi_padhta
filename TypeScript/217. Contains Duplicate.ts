
// Method 1 - Using Set
// Time Complexity: O(n)
// Space Complexity: O(n)

function containsDuplicate(nums: number[]): boolean {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;
        set.add(nums[i]);
    }
    return false;
}

// Method 2 - Using Set (shorter)
// Time Complexity: O(n)
// Space Complexity: O(n)

function containsDuplicateMethod2(nums: number[]): boolean {
    return new Set(nums).size !== nums.length;
}

const nums: number[] = [1, 2, 3];
console.log(containsDuplicate(nums));

