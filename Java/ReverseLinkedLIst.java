/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        ArrayList<Integer> list = new ArrayList<>();
        while(head!=null){
            list.add(head.val);
            head = head.next;
        }
        ListNode previousNode = null;
        int lastElement = list.size()-1;
        int start = 0;
        while(start<=lastElement){
            ListNode node = new ListNode(list.get(start),previousNode);
            previousNode = node;
            start++;
        }
        return previousNode;
    }
}