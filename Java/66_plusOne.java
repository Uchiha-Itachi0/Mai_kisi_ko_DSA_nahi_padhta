
//Leet Code Question NO. 66. Plus One
//Link : https://leetcode.com/problems/plus-one/

//Created by : Rohit Singh on 23/08/2022

class Solution {
    public int[] plusOne(int[] digits) {
        int start = 0;
        int end = digits.length-1;
        while (start<=end){
            if(digits[end]+1!=10){
                digits[end] = digits[end]+1;
                return digits;
            } else if (digits[end]+1==10) {
                digits[end] = 0;
                end--;
            }
        }
        if(digits[0] == 0) {
            int [] ans = new int[digits.length+1];
            ans[0] = 1;
            return ans;
        }
        return digits;
    }
}
