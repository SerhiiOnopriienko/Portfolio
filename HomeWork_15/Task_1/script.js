let parag = document.querySelectorAll('div p');
function changeColor(){
    parag[parag.length - 1].style.backgroundColor = 'red';
}
changeColor();

let main = document.querySelector('#main');
let footer = document.querySelector('#footer');
function changePlaces(){
    main.after(footer);
}
changePlaces();