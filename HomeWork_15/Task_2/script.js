let pastAfter = document.querySelector('h1');
let newImg = document.createElement('img');
newImg.setAttribute('width', '300px');
newImg.setAttribute('height', '300px');
function imgPast(){
    if(confirm('Do yoy want to past image?')){
        let imgLink = prompt('Give me the link to image', 'https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80');
        newImg.setAttribute('src', imgLink);
        pastAfter.after(newImg);
    }
}
imgPast();