


// https://leetcode.com/problems/find-all-duplicates-in-an-array/

let arr= [4,3,2,7,8,2,3,1];
function findDuplicates(arr) {
    let i = 0;
    while (i < arr.length) {
        let correct = arr[i] - 1;
        if (arr[i] != arr[correct]) {
            swap(arr, i , correct);
        } else {
            i++;
        }
    }

    let ans = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] != index+1) {
            ans.push(arr[index]);
        }
    }

    return ans;
}

function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

console.log(findDuplicates(arr))