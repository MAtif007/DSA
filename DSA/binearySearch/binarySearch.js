let array = [-18, -12, -4, 0, 2, 3, 4, 15, 16, 18, 22, 45, 89];
let target = 22;

function binarySearch(arr, tar) {
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end) {

        // let mid = start + end / 2;
        // int mid = (start + end) / 2; // might be possible that (start + end) exceeds the range of int in
    //    let mid = start + (end - start) / 2;
       let mid = Math.floor((start + end)/2)

       if (tar < arr[mid]) {
           end = mid - 1;
        } else if (tar > arr[mid]) {
           start = mid + 1;
        } else {
        // ans found
            return mid;
        }
    }
       return -1;
        
}
// debugger
console.log(binarySearch(array, target))

function binarySearch2(arr, s, e, tar) {
    // debugger;
    if(e >= s)
    {
       let mid = s + Math.floor((e - s) / 2);
       
       // If the element is present at the middle
      // itself
       if (arr[mid] == tar)
           return mid;

       // If element is smaller than mid, then
       // it can only be present in left subarray
       if(arr[mid] > tar)
          return binarySearch2(arr, s, mid - 1, tar);

         // Else the element can only be present
         // in right subarray
          return binarySearch2(arr , mid + 1, e, tar);
    }

    return -1;
}

let end = array.length - 1;
console.log(binarySearch2(array, 0, end ,target))