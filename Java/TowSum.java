public int[] twoSum(int[] nums, int target) {
        int start = 0;
        int end = nums.length-1;
        int find = target-nums[0];
        int searchIndex = start+1;
        while (start<=end){
        if(nums[searchIndex]==find){
        return new int[]{start, searchIndex};
        }
        else if(searchIndex==end){
        start++;
        find = target-nums[start];
        searchIndex = start+1;
        }
        else {
        searchIndex++;
        }
        }
        return new int[]{start, searchIndex};
        }
        }