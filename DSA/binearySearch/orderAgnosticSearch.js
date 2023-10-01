let array = [99, 80, 75, 22, 11, 10, 5, 2, -3];
// let array = [-18, -12, -4, 0, 2, 3, 4, 15, 16, 18, 22, 45, 89];

let target = 22;


function orderAgnotic(arr, tar) {
    // debugger;
    let start = 0;
    let end = arr.length - 1;
    let isAsc = arr[start] < arr[end];
    while (start <= end) {

        // let mid = start + end / 2;
        // int mid = (start + end) / 2; // might be possible that (start + end) exceeds the range of int in
       // let mid = start + (end - start) / 2;
       let mid = Math.floor((start + end)/2);

       if (arr[mid] == tar) {
        return mid;
       }

       if (isAsc) {
            if (tar < arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
       } else {
            if (tar > arr[mid]) {
               end = mid - 1;
            } else{
               start = mid + 1;
            }   
        }
    }
       return -1;
    
}

console.log('orderAgnotic', orderAgnotic(array, target));