let obj={
    name:"Amisha",
    age:24,
    height:"6ft 1inch",
    "full Name":"Amisha Srivastava",
    greet:function(){
        console.log("Hello ji kaise ho?")
    }
}
for(let key in obj){
    console.log(key ,"is ",obj[key]);
}


// // }
// // console.log(obj)
// // obj.greet();

// let arr=[10,20,30,21,34,87,23,
//     44,84
// ];
// let evenArr=arr.filter((number)=>{
//     if(number%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(evenArr)

// // arr.map((number,index)=>{
// //     console.log(number*number);
// //     console.log(index)
// // })

let arr=[10,20,30,40];
// sum=arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0);
// console.log(sum)


// arr.forEach((value,index)=>{
//     console.log("value is ",value,"and index is",index);
// })

for(let i=0;i<=3;i++){
    console.log(arr[i]);
}
