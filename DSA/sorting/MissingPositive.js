
// https://leetcode.com/problems/first-missing-positive/

let nums =  [3,4,-1,1];
function firstMissingPositive(arr) {
    let i = 0;
    while (i < arr.length) {
        let correct = arr[i] - 1;
        if (arr[i] > 0 && arr[i] <= arr.length && arr[i] != arr[correct]) {
            swap(arr, i , correct);
        } else {
            i++;
        }
    }

    // search for first missing number
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] != index + 1) {
            return index + 1;
        }
    }

    // case 2
    return arr.length + 1;
}

function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

console.log(firstMissingPositive(nums))