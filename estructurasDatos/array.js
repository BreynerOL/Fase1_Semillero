const array = ['Juan', 'Pablo', 'Lucia'];

console.log(array[1]);
array.push('Ana');
console.log(array);

class MyArray{
    constructor(){
        this.length = 0;
        this.data = {}
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop(){
        const lasItem = this.data[this.length -1];
        delete this.data[this.length -1];
        this.length--;
        return lasItem;
    }
    delete(index){
        const lasItem = this.data[index];
        delete this.data[index];
        this.shiftIndex(index);
        return lasItem;
    }
    shiftIndex(index){
        for(let i=index; i<this.length-1;i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const Myarray = new MyArray();