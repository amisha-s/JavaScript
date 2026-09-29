//Code 1
let t1=performance.now();
for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.innerText="This is para"+i;
    document.body.appendChild(para)
}
let t2=performance.now();
console.log(t2-t1)


//Code 2
let t3=performance.now()
let fpara= document.createElement('div');

for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.innerText="This is para"+i;
    fpara.appendChild(para)
}

document.body.appendChild(fpara);

let t4=performance.now()
console.log(t4-t3)