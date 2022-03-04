const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey!');
        }else{
            reject('Whooooops');
        }
    });
};

somethingWillHappen()
    .then(response=> console.log(response))
    .catch(err => console.error(err));

    const somethingWillHappen2 = () =>{
        return new Promise((resolve, reject) =>{
            if(true){
                setTimeout(() =>{
                    resolve('True');
                }, 2000)
            } else{
                const eror = new Error('Whooop!');
                reject(eror);
            }
        });
    }

    somethingWillHappen2()
    .then(response=> console.log(response))
    .catch(err => console.error(err));

    Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response =>{
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })