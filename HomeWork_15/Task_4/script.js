let numOfRows = prompt('Enter the number of rows and columns', 5);
let table = document.querySelector('#matrix');
let valueTr = 0;
let valueTd;
if(+numOfRows > 0){
    for(let i = 1; i <= numOfRows; i++){
        let tr = document.createElement('tr');
        table.append(tr);
        valueTr++;
        valueTd = valueTr;
        for(let j = 1; j <= numOfRows; j++){
            let td = document.createElement('td');
            tr.append(td);
            td.textContent = valueTd;
            if(valueTd === +numOfRows){
                td.style.backgroundColor = 'blue';
            }
            valueTd++;   
        }
    }
} else {
    let error = document.createElement('h1');
    let body = document.querySelector('body');
    error.textContent = 'Wrong input';
    error.style.color = 'red';
    body.append(error);
}