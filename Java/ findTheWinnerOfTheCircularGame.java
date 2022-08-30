// Leetcode Question : 1823. Find the Winner of the Circular Game
// Link : https://leetcode.com/problems/find-the-winner-of-the-circular-game/

class Solution {
    public int findTheWinner(int n, int k) {
        ArrayList<Integer> players = new ArrayList<>();
        int start = 1;
        while (start<=n){
            players.add(start);
            start++;
        }
        int index = 0;
        while(players.size()>1){
            int remove = index + (k-1);
            while(remove>=players.size()){
                remove = remove-(players.size());
            }
            if(remove==players.size()-1){
                index = 0;
            }
            else{
                index = remove;
            }
            players.remove(remove);
        }
        return players.get(0);
    }
}