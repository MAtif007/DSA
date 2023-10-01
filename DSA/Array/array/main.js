
// const arr = ['ali', 'khan', 'bandu khan'];
// const newarr = new Array(5);
// console.log('length',newarr.length)
// console.log(arr)
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
    
// }

//////////////////////
//  1 2 3
//  3 4 5

// let items = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];

///////////////////////////////// 2d array/////////////////////////
// let items = [];
// for (let row = 0; row < 3; row++) {
//    // col
//    items.push([0])
//    for (let col = 0; col < 3; col++) {
//       items[row][col] = col+row;
//    }
    
// }
// console.log(items)
// let arrText= ' '; 
// for (let r = 0; r < items.length; r++) {
//     // c)
//     for (let c = 0; c < items[r].length; c++) {
//     //    console.log(items[r][c] + ' ')
//        arrText+= items[r][c] + ' ';
//     }
//     console.log(arrText)
//     arrText = ' ';
    
// }
// let arrNe = [];
// for (let ro = 0; ro < items.length; ro++) {
//     arrNe.push(items[ro]); 
//     console.log(items[ro])
// }
// console.log(arrNe)

// ------------------------------------remove element -----------------------

// let remove = arr.splice(0, 1);
// console.log('remove', remove, arr)

// let index = 1
// let remove = arr.splice(0, index);
// console.log('remove', remove, arr)

// -------------------------------------swap array-----------------

// const arr1 = [1,23,4,56,7,5,56,7,8,9,99];
// console.log('ori', arr1);

// let index = 2;
// let index2 = 4;
function swap(arr, i, j) {
    // debugger;
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    
    return arr;
}

// console.log(Math.max(...arr1))
// console.log(Math.min(...arr1))

// console.log(swap(arr1, index, index2));

// function max(arr) {
//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//          if(arr[i] > max){
//             max = arr[i];
//          }
        
//     }
//     return max;
// }
// console.log(max(arr1));

// let startIndex = 9;
// let endIndex = 10;

// function max(arr, start, end) {
//     if( end > start) {
//         return -1;
//     }
//     let max = arr[start]
//     // debugger;
//     for (let i = start; i <= end; i++) {
//          if(arr[i] > max){
//             max = arr[i];
//          }
        
//     }
//     return max;
// }
// console.log(max(arr1, startIndex, endIndex));
 ////////////////////////////// reverse the array ///////////////////////

//  const arr2 = [1,3,23,9, 18, 56];

//  function reverse(arr2) {
//      let start = 0;
//      let end = arr2.length - 1;
    
//     while (start < end) {
//         swap(arr2, start, end);
//         start++;
//         end--;
//     };
//     return arr2;
//  }
//  console.log(arr2);
// console.log(reverse(arr2))

