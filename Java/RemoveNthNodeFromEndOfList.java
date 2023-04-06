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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        int count = 0;
        ListNode node = head;
        while (node!=null){
            count++;
            node = node.next;
        }
        if(count==n){
            head = head.next;
            return head;
        }
        ListNode find = head;
        int start = 1;
        while(start<=((count-1)-n)){
            find = find.next;
            start++;
        }
        find.next = find.next.next;
        return head;
    }
}