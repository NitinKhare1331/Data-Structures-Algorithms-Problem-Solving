import java.util.*;

public class nthNode {
    public static ListNode removeNthFromEnd(ListNode head, int n){
        ListNode fast = head;
        int i=0;
        while(i<n && fast!= null){
            fast = fast.next;
            i++;
        }
        if(fast == null){
            ListNode newHead = head.next;
            head.next = null;
            return newHead;
        }
        ListNode slow = head;
        while(fast.next != null){ //till the time fast doesnt reaches the tailnode
            slow = slow.next;
            fast = fast.next;
        }
        ListNode toBeRemoved = slow.next;
        slow.next = toBeRemoved.next;
        toBeRemoved.next = null;
        return head;
    }
}
