// LeetCode Question : 1492. The kth Factor of n
// Link : https://leetcode.com/problems/the-kth-factor-of-n/

public class kthFactorOfN {
    public int kthFactor(int n, int k) {
        int count = 0;
        int start = 1;
        while (start<=n){
            if(n%start==0){
                count++;
                if(count==k){
                    return start;
                }
            }
            start++;
        }
        return -1;
    }
}
