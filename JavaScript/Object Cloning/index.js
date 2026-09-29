let obj={
    age:12,
    wt:60,
    ht:180
}

// console.log(obj)
// obj.color="white";
// console.log(obj)
// let dest={...obj};
let dest=Object.assign({},obj);
console.log(dest)
