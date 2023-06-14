const input = document.querySelector('#search');
const filmList = [...document.querySelectorAll('li')].map(el => el.textContent);
const output = document.querySelector('#filmsCount');
let result;
input.addEventListener('input', function(){
    result = filmList.filter(el => el.includes(input.value));
    output.textContent = result.length;
});