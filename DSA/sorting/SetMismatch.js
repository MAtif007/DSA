
// https://leetcode.com/problems/set-mismatch/


let nums = [1,2,2,4];
function findErrorNums(arr) {
    let i = 0;
    while (i < arr.length) {
        let correct = arr[i] - 1;
        if (arr[i] != arr[correct]) {
            swap(arr, i , correct);
        } else {
            i++;
        }
    }

    // search for first missing number
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] != index + 1) {
            return [arr[index], index+1];
        }
    }
    return [-1, -1];
}

    function swap(arr, first,second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

console.log(findErrorNums(nums))