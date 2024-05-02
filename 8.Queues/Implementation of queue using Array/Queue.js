class queue {
    #queue;
    constructor(){
        this.#queue = [];
    }
    enqueue(val){
        this.#queue.push(val);
    }
    dequeue(){
        return this.#queue.shift();
    }
    front(){
        return this.#queue[0];
    }
    isEmpty(){
        return this.#queue.length == 0;
    }
}

let q = new queue;
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.front());
q.dequeue();
console.log(q.isEmpty());