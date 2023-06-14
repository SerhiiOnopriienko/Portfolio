const container = document.querySelector('.container');
const url = 'https://rickandmortyapi.com/api/character/';

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
  }  
  
const arrWithNumbers = Array.from({ length: 10 }, () => getRandomInt(0, 826));
const eventObject = {
	gender: '',
	status: '',
}
const checkArray = ['Male', 'Female', 'Alive', 'Dead'];

function createCard(name, species, status, location, img) {
	const card = document.createElement('div');
	card.classList.add('card');

	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');

	const cardTitle = document.createElement('div');
	cardTitle.classList.add('title');
	const cardTitleH1 = document.createElement('h1');
	cardTitleH1.innerHTML = name;
	cardTitle.append(cardTitleH1);

	const cardStatus = document.createElement('div');
	cardStatus.classList.add('status');
	const cardLiveStatus = document.createElement('div');
	cardLiveStatus.classList.add('live-status');

	const cardStatusP = document.createElement('p');
	const cardStatusPText = document.createTextNode(`${species} -- ${status}`);
	if(status === 'Dead'){
		cardLiveStatus.classList.add('dead');
	}
	cardStatus.append(cardLiveStatus);
	cardStatusP.append(cardStatusPText);
	cardStatus.append(cardStatusP);
	cardTitle.append(cardStatus);
	cardInfo.append(cardTitle);

	const cardContent = document.createElement('div');
	cardContent.classList.add('content');
	const cardContentText = document.createTextNode(location);
	cardContent.append(cardContentText);
	cardInfo.append(cardContent);

	card.append(cardInfo);

	const cardImage = document.createElement('div');
	cardImage.classList.add('card-image');
	const image = document.createElement('img');
	image.src = img;
	image.alt = 'Some image';
	cardImage.append(image);
	card.append(cardImage);

	container.append(card);
}

fetch(`${url}${arrWithNumbers}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
	for (character of data){
		createCard(character.name, character.species, character.status, character.location.name, character.image);
	};
  });

  const filterButtons = document.querySelector('.header');
  filterButtons.addEventListener('click', (e) => {
	if(checkArray.includes(e.target.textContent)){
		if(e.target.textContent === 'Male' || e.target.textContent === 'Female'){
			eventObject.gender = e.target.textContent;
		} else if(e.target.textContent === 'Alive' || e.target.textContent === 'Dead'){
			eventObject.status = e.target.textContent;
		};
	container.textContent = '';
	fetch(`${url}?gender=${eventObject.gender}&status=${eventObject.status}`)
	  .then((response) => {
		return response.json();
	  })
	  .then((data) => {
		for (character of data.results){
			createCard(character.name, character.species, character.status, character.location.name, character.image);
		};
	});
	};
  });