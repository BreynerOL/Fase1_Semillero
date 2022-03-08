const fruits = () => {
    if(true){
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);
    }

    console.log(fruits1);

}

fruits();

let x = 1;
{
    let x = 2; 
    console.log(x);
}
console.log(x);