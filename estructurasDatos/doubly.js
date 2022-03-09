class Node{
    constructor(value){
        this.value=value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyListKedList{
    constructor(value){
        this.head = {
            value: value,
            prev: null,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const nodo = new Node(value);
        nodo.prev = this.tail;
        this.tail.next = nodo;
        this.tail = nodo;
        this.length++;
        return this;
    }
}

let milista = new MyDoublyListKedList(1);