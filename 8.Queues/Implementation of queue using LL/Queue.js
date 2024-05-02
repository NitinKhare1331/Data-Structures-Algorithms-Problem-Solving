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

    isEmpty(){
        return this.head == null;
    }
}

class Queue{
    constructor(){
        this.ll = new LinkedList //we will create a brand new empty ll
    }
    enqueue(data){
        this.ll.addAtTail(data);
    }

    dequeue(){
        this.ll.removeAtHead();
    }

    isEmpty(){
        return this.ll.isEmpty()
    }

    front(){
        return this.ll.getHead();
    }

    back(){
        return this.ll.getTail();
    }
}

const qu = new Queue();
qu.enqueue(10);
qu.enqueue(20);
qu.enqueue(30);
console.log(qu.front(), qu.back());
qu.dequeue();
console.log(qu.front(), qu.back());
qu.dequeue();
console.log(qu.front(), qu.back());
qu.dequeue();
console.log(qu.front(), qu.back());


let arr = [1,2,3,4,5,6];
console.log(arr.splice(2,1)[0]);