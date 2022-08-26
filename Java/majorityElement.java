// Question : 169.MajorityElement
// Link : https://leetcode.com/problems/majority-element/


public class majorityElement {
    public int majorityElement(int[] nums) {
        InsertionSort(nums);
        if(nums.length==1){
            return nums[0];
        }
        int count = 1;
        int start = 0;
        int end = nums.length-1;
        while (start<=end){
            if(count>((nums.length))/2&&(count!=1)){
                return nums[start];
            }
            if(nums[start]==nums[start+1]){
                count++;
                start++;
            }
            else{
                start++;
                count = 1;
            }
        }
        return -1;
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
