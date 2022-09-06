// LeetCode : 67. Add Binary
//Question Link : https://leetcode.com/problems/add-binary/


class Solution {
    public String addBinary(String a, String b) {
        StringBuilder s = new StringBuilder("");
        int aChar = 0;
        int bChar = 0;
        int carry = 0;
        int start = 0;
        int end = a.length()-1;
        int end2 = b.length()-1;
        while (start<=end || start<=end2){

            if(end2<0) {
                bChar = 0;
            }
            else{
                bChar = b.charAt(end2)-'0';
            }
            if(end<0){
                aChar = 0;
            }
            else {
                aChar = a.charAt(end) - '0';
            }
            int ans = aChar+bChar+carry;
            if(ans==0){
                s.append(0);
                end--;
                carry=0;
                end2--;
            }
            else if(ans==1){
                s.append(1);
                carry=0;
                end--;
                end2--;
            }
            else if (ans==2){
                s.append(0);
                carry = 1;
                end--;
                end2--;
            }
            else{
                s.append(1);
                carry=1;
                end--;
                end2--;
            }
        }
        if(carry==1){
            s.append(carry);
        }
        s.reverse();
        return s.toString();
    }
}