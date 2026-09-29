

// function changeText(){
// let fpara=document.getElementById('fpara');
// fpara.innerText="Hello Jee Kaise Ho";
// }
// let fpara=document.getElementById('fpara');
// fpara.addEventListener('click',changeText);

let paras=document.querySelectorAll('p');

function alertLine(event){
        alert("You have clicked on para ");
    }

for(let i=0;i<paras.length;i++){
    let para=paras[i];
    para.addEventListener('click',alertLine)
}