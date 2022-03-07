const data = {
    frontend: 'Juan',
    backend: 'Juana',
    design: 'ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data ={
    frontend: 'Juan',
    backend: 'Juana',
    design: 'ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);


const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '-----'));



const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('hello wordls'), 3000)
        : reject(new Error('Test error'));
    });
};

const helloAsync = async () => {
    const hello = await helloWorld();
    
    console.log(hello);
}

helloAsync();

const anotherFunction = async () =>{
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
};

anotherFunction();