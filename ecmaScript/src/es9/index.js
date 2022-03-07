const obj = {
    name: 'juan',
    age: 20,
    country: 'col'
};

let {name, ...all} = obj;
console.log(name,all);



const obj = {
    name: 'Juan',
    age: 20
};

const obj1 = {
    ...obj,
    country: 'col'
};

console.log(obj1);



const helloWolrd = () =>{
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(() => resolve('heelo world'), 3000)
        :reject(new Error('Test Error'))
    });
};

helloWolrd()
.then(Response => console.log(Response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'));


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);