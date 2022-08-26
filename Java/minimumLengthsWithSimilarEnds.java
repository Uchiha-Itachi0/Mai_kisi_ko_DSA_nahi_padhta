// Leet Code : Minimum Length of String After Deleting Similar Ends , No . 1750
// Link : https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/

class minimumLengthsWithSimilarEnds {
    public int minimumLength(String s) {
        if(s.length()==1){
            return 1;
        }
        int chcek = 0;
        int count = 0;
        int start = 0;
        int end = s.length()-1;
        while(start<=end){
            if(s.charAt(start)==s.charAt(end)){
                count++;
                while(start<=end){
                    if(s.charAt(start)==s.charAt(start+1)&&end!=(start+1)){
                        chcek++;
                        start++;
                    } else if (s.charAt(end)==s.charAt(end-1)&&end!=(start+1)) {
                        chcek++;
                        end--;
                    }
                    else{
                        start++;
                        end--;
                        break;
                    }
                }
            }
            else{
                break;
            }
        }
        int ans = s.length()-((count*2)+chcek);
        if(ans>=0){
            return ans;
        }
        else {
            return ans*-1;
        }
    }
}
