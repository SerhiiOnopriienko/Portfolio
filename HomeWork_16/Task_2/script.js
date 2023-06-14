const INGREDIENTS = {
    "cocoa": ["cocoa powder", "milk", "sugar"],
    "cappuccino": ["milk", "coffee"],
    "smoothie": ["banana", "orange", "sugar"],
    "matcha frappe": ["matcha", "milk", "ice"]
  };

const list = document.querySelector('#menu');
const verificationList = document.querySelectorAll('#menu li');
const verificationArr = [...verificationList].map(item => item.textContent);
list.addEventListener('click', function(e){
  const cutElement = e.target.querySelector('ol');
  if(cutElement){
    cutElement.remove();
  } else if(verificationArr.includes(e.target.textContent)){
    const addUl = document.createElement('ol');
    for(let i = 0; i < INGREDIENTS[e.target.textContent].length; i++){
      const li = document.createElement('li');
      li.textContent = INGREDIENTS[e.target.textContent][i];
      addUl.append(li); 
  }
  e.target.append(addUl);
  }
  
});