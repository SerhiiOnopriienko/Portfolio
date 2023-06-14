let songs = [
  {
    name: 'Jingle Bells',
    isLiked: false,
  },
  {
    name: 'We Wish You a Merry Christmas',
    isLiked: true,
  },
];

const fixEl = document.querySelector('.songs');
fixEl.style.padding = 0;

window.addEventListener('load', function () {
  for(key in songs){
    createList(songs[key]);
    countSongs();
  }
  addBtn.addEventListener('click', addSongs);
  input.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
      addSongs();
    }
  })
});

function createBtn(btnName, btnClass, btnEvent){
  const btn = document.createElement('button');
  btn.classList.add('button', btnClass);
  btn.textContent = btnName;
  btn.addEventListener('click', btnEvent);
  return btn;
}

function createImg(){
  const img = document.createElement('img');
  img.classList.add('like-icon');
  img.setAttribute('src', './images/like.svg');
  img.setAttribute('alt', 'heart');
  return img;
}

function createList(songObj){
  const li = document.createElement('li');
  li.classList.add('item');
  li.style.position = 'relative';
  const songWrapper = document.querySelector('.songs');
  songWrapper.append(li);
  const pic = createImg();
  li.append(pic);
  const songName = document.createElement('p');
  songName.textContent = songObj.name;
  li.append(songName);
  const btnDiv = document.createElement('div');
  li.append(btnDiv);
  btnDiv.style.position = 'absolute';
  btnDiv.style.right = '10px';
  let likeBtn;
  if(songObj.isLiked){
    likeBtn = createBtn('Unlike', 'like', likeEvent);
  } else {
    
    likeBtn = createBtn('Like', 'like', likeEvent);
    pic.style.opacity = 0;
  }
    likeBtn.style.width = '60px';
    btnDiv.append(likeBtn);

  const delBtn = createBtn('Delete', 'delete', deleteEvent);
  btnDiv.append(delBtn);
}

function likeEvent(e){
  const likeBtn = e.target.closest('.item');  
  const pic = likeBtn.querySelector('.like-icon');
  if(e.target.textContent === 'Unlike'){
    e.target.textContent = 'Like';
    pic.style.opacity = 0;
  } else if(e.target.textContent === 'Like') {
    e.target.textContent = 'Unlike';
    pic.style.opacity = 1;
  };
};

function deleteEvent(e){
  const itemToRemove = e.target.closest('.item');
  const deletingSongName = itemToRemove.querySelector('p').textContent;
  console.log(deletingSongName);
  const list = document.querySelectorAll('.item');
  const indexOfItem = [...list].indexOf(itemToRemove);
  const ask = confirm(`Do you really want to remove song ${deletingSongName}?`);
  if(ask){
     e.target.closest('.item').remove();
     songs.splice(indexOfItem, 1);
     countSongs();
   };
  }; 

function countSongs(){
  const count = document.querySelector('.count');
  //const items = document.querySelectorAll('.item');
  count.textContent = songs.length;
};

  const input = document.querySelector('.input-box');
  const addBtn = document.querySelector('.add');
  const error = document.createElement('p');
  const div = document.querySelector('.songs-wrapper');
  function addSongs() {
    const listOfSongs = document.querySelectorAll('.item p');
    const arrOfSongs = [...listOfSongs].map(item => item.textContent);
    if(input.value.length <= 3){
      error.textContent = 'Song name should not be empty or shorter than 3 characters!';
      error.style.color = 'red';
      div.before(error);
      input.value = '';
    } else if(arrOfSongs.includes(input.value)){
      error.textContent = 'Such song already exists in list, add another one!';
      error.style.color = 'red';
      div.before(error);
      input.value = '';
    } else {
      error.remove();
      const songArr = {name: input.value, isLiked: false,};
      songs.push(songArr);
      input.value = '';
      createList(songArr);
      countSongs();
    };
  };