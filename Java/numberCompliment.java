// Leet Code Question No. 476. Number Complement
// Link : https://leetcode.com/problems/number-complement/

// Created By Rohit Singh on 24/08/2022

class numberCompliment {
    public int findComplement(int num) {
        int mask = 1;
        while (mask<num){
            mask = (mask<<1)+1;
        }
        int ans = num^mask;
        return ans;
    }
}
