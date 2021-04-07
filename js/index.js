// Your code goes here
const funBHead = document.querySelector('h1');
funBHead.addEventListener('click', function(event){
    event.target.style.borderBottom = "2px solid red";
});

const navigation = document.querySelectorAll('nav a');
Array.from(navigation).forEach(link =>{
    link.addEventListener('mouseover', function(event){
        event.target.style.color = 'orange';
});

// });

console.log(navigation)
