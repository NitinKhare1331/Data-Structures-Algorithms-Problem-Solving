package Linked List.Swapping nodes in a linked list;

public class Swap {
    public ListNode swapNodes(ListNode head, int k) {
        ListNode fast = head;
        int i=0;
        while(i<k-1 && fast!=null){
            fast = fast.next;
            i++;
        }
        ListNode a = fast;
        ListNode slow = head;
        while(fast.next!=null){
            slow = slow.next;
            fast = fast.next;
        }
        ListNode b = slow;
        int temp = a.val;
        a.val = b.val;
        b.val = temp;
        return head;
    }
}
