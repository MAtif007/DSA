let array = [[1,7,3], [3,2,1], [13,12,199], [13,12,1090]]

let sum;
function account(arr) {
    for (let c = 0; c < arr.length; c++) {
      sum = 0;
      for (let j = 0; j < arr[c].length; j++) {
         sum += arr[c][j];
      }     
    }
    return sum;
}

console.log(account(array));


let newARR1 = [];
function account2(arr) {
    for (let c = 0; c < arr.length; c++) {
      let sum = 0;
      for (let j = 0; j < arr[c].length; j++) {
         sum += arr[c][j];
      }    
      newARR1.push(sum) 
    }
    return newARR1;
}

console.log(account2(array));