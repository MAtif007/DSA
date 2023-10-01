

// https://leetcode.com/problems/find-the-duplicate-number/

let nums = [1,3,4,2,2];

function findDuplicate(arr) {
    let i = 0;
    while (i < arr.length) {

        if (arr[i] != i + 1) {
            let correct = arr[i] - 1;
            if (arr[i] != arr[correct]) {
                swap(arr, i , correct);
            } else {
                return arr[i];
            }
        } else {
            i++;
        }
    }
    return -1;
}

    function swap(arr, first, second) {
    let  temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
    }

console.log(findDuplicate(nums))