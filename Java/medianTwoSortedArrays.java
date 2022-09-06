// LeetCode Question : 4. Median of Two Sorted Arrays
// Link : https://leetcode.com/problems/median-of-two-sorted-arrays/



class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int [] newMerge = new int[nums1.length+ nums2.length];
        newMerge = merge(nums1,nums2);
        if(newMerge.length%2==0){
            int mid = (newMerge.length-1)/2;
            double ans = newMerge[mid]+newMerge[mid+1];
            return ans/2;
        }else {
            int mid = (newMerge.length-1)/2;
            double ans = newMerge[mid];
            return ans;
        }
    }
    static int[] merge(int[] left, int[] right) {
        int [] ans = new int[left.length+ right.length];
        int rightStart = 0;
        int leftStart = 0;
        int start = 0;
        while(leftStart<left.length && rightStart < right.length){
            if(left[leftStart]<=right[rightStart]){
                ans[start] = left[leftStart];
                leftStart++;
            }
            else if(right[rightStart]<=left[leftStart]){
                ans[start] = right[rightStart];
                rightStart++;
            }
            start++;
        }
        while (leftStart<left.length){
            ans[start] = left[leftStart];
            start++;
            leftStart++;
        }
        while (rightStart<right.length){
            ans[start] = right[rightStart];
            start++;
            rightStart++;
        }
        return ans;
    }
}