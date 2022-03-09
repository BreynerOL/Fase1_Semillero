class Node{
    constructor(value){

        this.left = null;
        this.right = null;
        this.value=value;
    }
}
class Tree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const nodo = new Node(value);
        if(this.root ===null){
            this.root = nodo;
        }else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = nodo;
                        return this;
                    }
                    currentNode = currentNode.left;
                }else{
                    if(!currentNode.right){
                        currentNode.right = nodo;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
}

const tree = new Tree();