import { StackNum } from "./stack";

let arrNum = new StackNum();
let newArray = [4, 2, 3, 7, 8, 0];

function convert() {
  let i = 1;
  while (i <= newArray.length) {
    let x = newArray.shift()
    arrNum.pushArr(x);    
  }
}
convert();

function convertBack() {
  let i = arrNum.size();
  while (i >=1 ) {
    let x = +arrNum.peek()
    // console.log(x)
    // console.log(newArray)
    newArray.push(x);
    arrNum.popArr();
    i--
  }
}
convertBack();

console.log(arrNum.stackNum);
console.log(newArray);
