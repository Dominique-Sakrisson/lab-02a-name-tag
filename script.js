const userName = document.getElementById('name-input');
const userPro = document.getElementById('pro-input');
const userCount = document.getElementById('name-count');
const button = document.getElementById('button');
const tag = document.getElementById('name-tag');
const select = document.getElementById('font-input');

const tagName = document.getElementById('tag-name');
const tagPro = document.getElementById('tag-pro');
let tagMade =0; 






console.log(tag.style.fontFamily);

console.log(tag.style);

button.addEventListener('click', () => {
    if(!userName.value){
        alert('Tell us your name.');
        return;
    }
    if(!userPro.value){
        alert('what are your preffered pronouns');
        return;
    }
     
    if(select.value === 'monospace'){
        tag.style.fontFamily = 'monospace'; 
    } else if(select.value === 'sans-serif'){
        tag.style.fontFamily = 'sans-serif';
    } else if(select.value === 'serif'){
        tag.style.fontFamily = 'serif';
    } else{
        tag.style.fontFamily = tag.style.fontFamily;
        alert('Font set to default, \n next time pick a font! :) ');
    }
       
    tagName.textContent = userName.value;
    tagPro.textContent = userPro.value;
    tagMade++;
    userCount.textContent = 'Number of tags made: ' + tagMade;
});