// Task 1
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};
const game = new Promise((resolve, reject) => {
    setTimeout(()=> {
        let number = getRandomInt(1, 6);
        if(number < 6){
            console.log(`Start the game... ${number}.`)
            resolve(number);
        } else {
            reject(`Error ${number}`);  
        };
    }, 2000);
})
.then(res => {
    if(res === 1){
        console.log(`Stay here`);
    } else {
        console.log(`Go ${res} steps`);
    }   
})
.catch(err => {
    console.log(`Exit ${err}`);
});

// Task 2
function goToShop() {
    return Promise.resolve(+prompt('Enter number of products you bought'));
}

function makeDinner() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Bon Apetit'), 3000)
    })
}

goToShop()
.then(res => {
    if(res < 4){
        return Promise.reject('Too low products');
    }
    return makeDinner();
})
.then(res => console.log(res))
.catch(err => console.error(err))
