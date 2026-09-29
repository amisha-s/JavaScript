// async function getData(){
//     setTimeout((function(){
//         console.log("I am inside setTimeOut");
//     }),3000);

// }

// getData();

async function getData(){
    let result=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data=await result.json();
    console.log(data);
}
getData();