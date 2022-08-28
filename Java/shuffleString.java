// Leetcode Question : 1528. Shuffle String
// Link : https://leetcode.com/problems/shuffle-string/



public class shuffleString {
    public String restoreString(String s, int[] indices) {
        char [] arr = new char[indices.length];
        for(int  i : indices  ){
            arr[indices[i]] = s.charAt(i);
        }
        return new String(arr);
    }
}
