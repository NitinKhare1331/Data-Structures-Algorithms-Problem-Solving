class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null; //head of ll
        this.tail = null; //tail of ll
    }

    getHead(){
        if(this.head == null) return undefined;
        return this.head.data;
    }

    getTail(){
        if(this.tail == null) return undefined;
        return this.tail.data;
    }
    addAtHead(val){
        if(this.head == null){
            let n = new Node(val);
            this.head = n;
            this.tail = n;
        }
        else{
            let n = new Node(val);
            n = this.head.next;
            this.head = null;
        }
    }

    removeAtHead(){
        if(this.head == null) return;
        const newHead = this.head.next; //we will store new head
        this.head.next = null; //disconnect old head
        this.head = newHead;
        //if head becomes null after removal of node ,it means ll is empty
        if(this.head == null){
            this.tail == null;
        }
    }

    addAtTail(data){
        if(this.tail == null){
            //ll is empty
            const newNode = new Node(data);
            this.tail = newNode;
            this.head = newNode;
        }
        else{
            const newNode = new Node(data);
            this.tail.next = newNode; //we are attaching new node to previous tail
            this.tail = newNode; //updating new tail
        }
    }
    removeAtTail(){
        
    }

    isEmpty(){
        return this.head == null;
    }
}