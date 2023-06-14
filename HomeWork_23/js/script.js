'use strict';
const url = `http://api.weatherstack.com/current`;
const accessKey = localStorage.getItem('key');
const ulContainer = document.querySelector('ul');
const city = document.querySelector('.weather__city');
const weatherStatus = document.querySelector('.weather__status');
const weatherIcon = document.querySelector('.weather__icon img');
const temperature = document.querySelector('.weather__temp');
const feelsLike = document.querySelector('.weather__feels-like');
const citiesArray = ['Kiev', 'Kharkiv', 'Odessa', 'Lviv', 'Mariupol'];

for (let city of citiesArray){
  createCity(city);
};

const loaderAndWeather = document.querySelectorAll('.weather');

function displayLoading(){
  [...loaderAndWeather][0].style.display = 'block';
  [...loaderAndWeather][1].style.display = 'none';
}

function hideLoading(){
  [...loaderAndWeather][0].style.display = 'none';
  [...loaderAndWeather][1].style.display = 'block';
}
displayLoading();

async function makeRequest(cityName){
  displayLoading();
  const res = await fetch(`${url}?access_key=${accessKey}&query=${cityName}`);
  const data = await res.json();
  console.log(data);
  hideLoading();
  city.innerHTML = data.location.name;
  weatherStatus.innerHTML = data.current.weather_descriptions[0];
  weatherIcon.setAttribute('src', data.current.weather_icons[0]);
  temperature.innerHTML = data.current.temperature;
  feelsLike.innerHTML = data.current.feelslike;
}


function createCity (cityName){
  let innerLi = document.createElement('li');
  innerLi.classList.add('animate');
  innerLi.innerHTML =  cityName;
  ulContainer.append(innerLi);
};

makeRequest(citiesArray[0]);

ulContainer.addEventListener('click', (e) => {
  if(citiesArray.includes(e.target.innerHTML)){
    const liElements = document.querySelectorAll('ul .animate');
    for (let li of [...liElements]){
        li.classList.remove('selected');
    };
    e.target.classList.add('selected');
    makeRequest(e.target.innerHTML);
  }
});