class Node{
    constructor(value){
        this.value=value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top;
    }
    push(value){
        const nodo = new Node(value);
        if(this.length===0){
        this.top = nodo;
        this.bottom = nodo;
        }else{
            const holdingPointer = this.top;
            this.top = nodo;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
}

const mypila = new Stack();