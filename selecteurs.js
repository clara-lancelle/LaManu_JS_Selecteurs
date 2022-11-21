"use strict";
//Exo 1 : display title in h1.title

let textToDisplay = 'Les Selecteurs';

document.getElementById('title').innerHTML = textToDisplay;

//Exo 2 : console.log contenu h1 / .description / every li

console.log(document.querySelector('h1').innerHTML);
console.log(document.querySelector('.description').innerText);
let lis = document.querySelectorAll('li');
lis.forEach(function(li) {
    console.log(li.innerHTML);
})


//Exo 3 : modify li innerHTML like 1- JavaScript

let i = 1;
for(let li of lis) {
    
    li.innerHTML = i +' - '+ li.textContent;
    console.log(li.innerHTML);
    i++;
}

//Exo 4 : afficher dans le champs caché la source de l'image 

document.getElementById('src_image').value = document.images[0].src;

//Exo 5 : add .important to span 

document.querySelector('span').classList.add('important');

//Exo 6 : add .red à l'item 'Javascript

for(let li of lis){
    if(li.textContent.includes('Javascript')) {
        li.classList.add('red');
    }
}
