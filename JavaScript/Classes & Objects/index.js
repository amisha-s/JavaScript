function sayName(myName="Amisha",lastName=myName.toUpperCase()){
   console.log("hy my name is",myName," ",lastName);

}
sayName();

function solve(value={age:15,wt:90,ht:20}){
console.log(value)
}
solve();


// class Human{
//      age;
//      #wt=60;
//      height;
     
//      constructor(newAge,newHeight){
//       this.age=newAge;
//       this.height=newHeight;

//      }

//      walking(){
//         console.log("I am walking");
//      }
//      eating(){
//         console.log("I am esting",this.wt);
//      }
//      get fetchWeight(){
//       return this.#wt

//      }
//      set modifyWeight(val){
//       this.#wt=val
//      }

    
// }
//  let obj=new Human(66,166);
//  console.log(obj.age)
// //  console.log(obj.#wt);
//  obj.modifyWeight=65;
//  console.log(obj.fetchWeight);
 