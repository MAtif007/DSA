// https://leetcode.com/problems/search-in-rotated-sorted-array/submissions/

// let array = [1,2,3,4,5,5,6];
let array = [4,5,6,7,0,1,2];



function search(nums, target) {
    let pivot = findPivot(nums);

    // if you did not find a pivot, it means the array is not rotated
    if (pivot == -1) {
        // just do normal binary search
        return binarySearch(nums, target, 0 , nums.length - 1);
    }

    // if pivot is found, you have found 2 asc sorted arrays
    if (nums[pivot] == target) {
        return pivot;
    }

    if (target >= nums[0]) {
        return binarySearch(nums, target, 0, pivot - 1);
    }

    return binarySearch(nums, target, pivot + 1, nums.length - 1);
}

function binarySearch(arr, target, start, end) {
    while(start <= end) {
        // find the middle element
//            int mid = (start + end) / 2; // might be possible that (start + end) exceeds the range of int in java
        let mid = Math.floor((start + end)/2);

        if (target < arr[mid]) {
            end = mid - 1;
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            // ans found
            return mid;
        }
    }
    return -1;
}

function findPivot(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        // 4 cases over here
        if (mid < end && arr[mid] > arr[mid + 1]) {
            return mid;
        }
        if (mid > start && arr[mid] < arr[mid - 1]) {
            return mid-1;
        }
        if (arr[mid] <= arr[start]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

function findPivotWithDuplicates(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        // 4 cases over here
        if (mid < end && arr[mid] > arr[mid + 1]) {
            return mid;
        }
        if (mid > start && arr[mid] < arr[mid - 1]) {
            return mid-1;
        }

        // if elements at middle, start, end are equal then just skip the duplicates
        if (arr[mid] == arr[start] && arr[mid] == arr[end]) {
            // skip the duplicates
            // NOTE: what if these elements at start and end were the pivot??
            // check if start is pivot
            if (start < end && arr[start] > arr[start + 1]) {
                return start;
            }
            start++;

            // check whether end is pivot
            if (end > start && arr[end] < arr[end - 1]) {
                return end - 1;
            }
            end--;
        }
        // left side is sorted, so pivot should be in right
        else if(arr[start] < arr[mid] || (arr[start] == arr[mid] && arr[mid] > arr[end])) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

console.log(findPivotWithDuplicates(array));

// let search2 = function(a, key) {

//     let low = 0, high = a.length - 1;

//       while(low<=high){

//       let mid = Math.floor((low + high)/2);

//       if(a[mid] == key) return mid;

//         //If left part sorted

//    if(a[low] <= a[mid]){

//       if(key >= a[low] && key < a[mid])

//             high = mid - 1;
//       else
//             low = mid + 1;
     
//     }

//       //If right part sorted
//     else{
            
//         if(key > a[mid] && key <= a[high]) 

//             low = mid + 1;
//         else 
//             high = mid - 1;
        
//     }

//  }
//  return -1;   
// };

// console.log(search2(array))