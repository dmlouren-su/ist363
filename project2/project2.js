/* TUTORIAL VIDEO 1

console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback function fired')
}, 2000); 

console.log(3);
console.log(4);
*/


/*  TUTORIAL VIDEO 2
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState);
    if(request.readyState === 4){
        console.log(request.responseText);
    }
});


request.open('GET','https://jsonplaceholder.typicode.com/todos/');
request.send();

*/


/* TUTORIAL VIDEO 3

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
        console.log(request, request.responseText);
    } 
    else if (request.readyState === 4 ) {
        console.log('could not fetch the data')
    }
});


request.open('GET','https://jsonplaceholder.typicode.com/todos/');
request.send();

*/

/* TUTORIAL VIDEO 4
const getTodos = (callback) => {

    const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                callback(undefined, request.responseText);
            } 
            else if (request.readyState === 4 ) {
                callback('could not fetch data', undefined);
            }
        });

        request.open('GET','https://jsonplaceholder.typicode.com/todos/');
        request.send();

};

console.log(1)
console.log(2)

getTodos((err, data) => {
    console.log('callback fired')
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3)
console.log(4)

*/

/* TUTORIAL VIDEO 5

const getTodos = (callback) => {

    const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText)
                callback(undefined, data);
            } 
            else if (request.readyState === 4 ) {
                callback('could not fetch data', undefined);
            }
        });

        request.open('GET','https://jsonplaceholder.typicode.com/todos/');
        request.send();

};

getTodos((err, data) => {
    console.log('callback fired')
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});
*/

/* TUTORIAL 6

const getTodos = (resource, callback) => {

    const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText)
                callback(undefined, data);
            } 
            else if (request.readyState === 4 ) {
                callback('could not fetch data', undefined);
            }
        });

        request.open('GET', resource);
        request.send();

};

getTodos('luigi.json',(err, data) => {
    console.log('data');
    getTodos('mario.json',(err, data) => {
        console.log('data');
        getTodos('shaun.json',(err, data) => {
            console.log('data');
        });  
    });
});

*/

/* TUTORIAL 7
const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } 
            else if (request.readyState === 4 ) {
                reject("error getting resource")
            }
        });

        request.open('GET', resource);
        request.send();
    });
};

getTodos('https://jsonplaceholder.typicode.com/todoss/').then(data => {
    console.log('promise resolved:', data)
}).catch(err => {
    console.log('promise rejected:', err);
})
// promise example

// const getSomething = () => {

//    return new Promise((resolve, reject) => {
        // fetch something
        // resolve('some data');
//        reject('some error');
//    });
// }

// getSomething().then((data) => {
//   console.log(data);
// }, (err) => {
//    console.log(err);
// });

// getSomething().then(data => {
// console.log(data);
// }).catch(err => {
//     console.log(err);
// });

*/

/* TUTORIAL 8
const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } 
            else if (request.readyState === 4 ) {
                reject("error getting resource")
            }
        });

        request.open('GET', resource);
        request.send();
    });
};

getTodos('https://jsonplaceholder.typicode.com/todos/').then(data => {
    console.log('promise 1 resolved:', data);
    return getTodos('https://dummyjson.com/products');
}).then(data => {
    console.log('promise 2 resolved:', data);
    return getTodos('https://dummyjson.com/carts')
}).then(data => {
    console.log('promise 3 resolved:', data)
}).catch(err => {
    console.log('promise rejected:', err);
})


*/


/* TUTORIAL 9
fetch('https://dummyjson.com/carts').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err)
});

*/

// v fetch API v

//fetch('https://dummyjson.com/carts').then((response) => {
//    console.log('resolved', response);
//    return response.json();
//}).then(data => {
//    console.log(data);
//}).catch((err) => {
//    console.log('rejected', err)
//});

/* TUTORIAL 10
const getTodos = async () => {

   const response = await fetch('https://dummyjson.com/carts')
   const data = await response.json();
   return data
};

getTodos()
    .then(data => console.log('resolved:', data));

*/

/* TUTORIAL 11 
const getTodos = async () => {

   const response = await fetch('https://dummyjson.com/carts')

    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    }

   const data = await response.json();
   return data
};

getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message));
*/

