const messages = [
    'Hola',
    'Carolina',
    'Ana',
    'Nicole',
    'Yessica',
    'Diego',
    'Laura'
];

const randomMsg = () =>{
    const messages = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

export default {randomMsg};