// LeetCode Question : 1051. Height Checker
// Link : https://leetcode.com/problems/height-checker/

    public int heightChecker(int[] heights) {
        int[] check = mergeSort(heights);
        int count = 0;
        int start = 0;
        int end = heights.length - 1;
        while (start <= end) {
            if (check[start] != heights[start]) {
                count++;
            }
            start++;
        }
        return count;
    }


    //Using Recursive MergeSort

    private static int[] mergeSort(int[] nums) {
        if (nums.length == 1) {
            return nums;
        }
        int mid = nums.length / 2;
        int[] left = mergeSort(Arrays.copyOfRange(nums, 0, mid));
        int[] right = mergeSort(Arrays.copyOfRange(nums, mid, nums.length));

        return merge(left, right);
    }

    private static int[] merge(int[] left, int[] right) {
        int[] ans = new int[left.length + right.length];
        int rightStart = 0;
        int leftStart = 0;
        int start = 0;
        while (leftStart < left.length && rightStart < right.length) {
            if (left[leftStart] <= right[rightStart]) {
                ans[start] = left[leftStart];
                leftStart++;
            } else if (right[rightStart] <= left[leftStart]) {
                ans[start] = right[rightStart];
                rightStart++;
            }
            start++;
        }
        while (leftStart < left.length) {
            ans[start] = left[leftStart];
            start++;
            leftStart++;
        }
        while (rightStart < right.length) {
            ans[start] = right[rightStart];
            start++;
            rightStart++;
        }
        return ans;
    }