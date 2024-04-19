/*
You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]
Example 2:

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
*/

function swap(head,k){
    let fast = head;
    let i=0;
    while(i<k-1 && fast!=null){
        fast = fast.next;
        i++;
    }
    let a = fast;
    let slow = head;
    while(fast.next!=null){
        slow = slow.next;
        fast = fast.next;
    }
    let b = slow;
    let temp = a.val;
    a.val = b.val;
    b.val = temp;
    return head;
}