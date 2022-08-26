// Question : 977. Squares of a Sorted Array
// Link : https://leetcode.com/problems/squares-of-a-sorted-array/


public class squaresOfSortedArray {
    public int[] sortedSquares(int[] nums) {
        int start = 0;
        int end = nums.length-1;
        while (start<=end){
            nums[start] = nums[start]* nums[start];
            start++;
        }
        InsertionSort(nums);
        return nums;
    }
    static int [] InsertionSort (int[] nums1) {
        for (int i = 0;i< nums1.length-1;i++){
            for (int j=i+1;j>0;j--){
                if (nums1[j]<nums1[j-1]){
                    int temp = nums1[j];
                    nums1[j]= nums1[j-1];
                    nums1[j-1]=temp;
                }
                else{
                    break;
                }
            }
        }
        return nums1;
    }
}
