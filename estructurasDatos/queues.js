class Node{
    constructor(value){
        this.value=value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top;
    }
    enqueue(value){
        const nodo = new Node(value);
        if(this.length===0){
            this.top = nodo;
            this.bottom = nodo;
        }else{
            this.bottom.next=nodo;
            this.bottom = nodo;
        }
        this.length++;
        return this;
    }
    dequeue(){
        const holdingPointer = this.top.next;
        this.top = holdingPointer;
        this.length--;
        return this;
    }
}

const cola = new Queue();