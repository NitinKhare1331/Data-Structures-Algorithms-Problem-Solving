public class dup{
    public static ListNode deleteDuplicate(ListNode head){
        ListNode curr = head;
        while(curr != null && curr.next != null){
            if(curr.val == curr.next.val){
                ListNode toBeRemoved = curr.next;
                curr.next = toBeRemoved.next;
                toBeRemoved.next = null;
            }
            else{
                curr = curr.next;
            }
        }
        return head;
    }
    public statin void main(String[] args){
        
    }
}