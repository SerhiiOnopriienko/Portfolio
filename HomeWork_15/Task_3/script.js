let registerBtn = document.querySelector('.button');
function createInputs(num = prompt('Enter number of inputs', 10)){
    if(+num > 0){
        for(let i = 1; i <= num; i++){
            let newInput = document.createElement('input');
            newInput.setAttribute('class', 'input-item');
            newInput.setAttribute('value', `Input ${i}`);
            if(i === +num){
                newInput.classList.add('margin-zero');
            }
            if(i % 2){
                newInput.classList.add('background-color');
                newInput.style.backgroundColor = 'yellow';
            }
            if(!(i % 3)){
                newInput.removeAttribute('value');
                newInput.setAttribute('placeholder', 'Some text');
            }
            registerBtn.before(newInput);
        }
    } else {
        let error = document.createElement('h1');
        let body = document.querySelector('body');
        error.textContent = 'Wrong input';
        error.style.color = 'red';
        body.append(error);
    }
}
createInputs();