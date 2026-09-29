// // 

// const getPromise=()=>{
// return new Promise((resolve,reject)=>{
//     console.log("I am a Promise");
//     resolve("success");
// })
// }
// let promise=getPromise();
// promise.then(()=>{
//     console.log("promise is fulfilled")
// });

function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Here is Data " ,data);
            resolve("success");
        },4000)
    })
}
// console.log("Fetching Data 1")
// let promise=async(1);
// promise.then((res)=>{
//     console.log("Fetching data 2");
//     let p2=async(2);
    
// })
async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);

    
}
getAllData();