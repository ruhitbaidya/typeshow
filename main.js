// type js here

let a = document.querySelector('#typeshow');
let b = document.querySelector('#typehe');

function typetext(){
    b.addEventListener('input', function(){
        a.innerText = b.value.length;
    });
}
typetext();