class Node{
    constructor(value){
        this.value=value;
        this.next = null;
    }
}

class MySinglyListKedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const nodo = new Node(value);
        this.tail.next = nodo;
        this.tail = nodo;
        this.length++;
        return this;
    }

    prepend(value){
        const nodo = new Node(value);
        nodo.next = this.head;
        this.head = nodo;
        this.length++;
        return this;
    }
    insert(index, value){
        if(index>=this.length){
            return this.append(value);
        }

        const nodo = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingpointer = firstPointer.next;
        firstPointer.next= nodo;
        nodo.next = holdingpointer;
        this.length++;
        return this;
    }
    remove(index){
        const antesNodo = this.getTheIndex(index -1);
        const despuesNodo = this.getTheIndex(index +1);
        const holdingpointer = antesNodo.next;

        return this;
    }

    getTheIndex(index){
        let counter =0;
        let currentNode = this.head;

        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

let listed = new MySinglyListKedList(1);