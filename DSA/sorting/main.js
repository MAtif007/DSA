
let arr = [6, 5, 3, 4, 1, 2,];



function insertion(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i+1; j > 0; j--) {
            if (arr[j] < arr[j-1]) {
                swap(arr, j, j-1);
            } else {
                break;
            }
        }
    }
    return arr;
}


function selection(arr) {
    for (let i = 0; i < arr.length; i++) {
        // find the max item in the remaining array and swap with correct index
        let last = arr.length - i - 1;
        let maxIndex = getMaxIndex(arr, 0, last);
        swap(arr, maxIndex, last);
    }
    return arr;
}


function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}


function getMaxIndex(arr, start, end) {
    let max = start;
    for (let i = start; i <= end; i++) {
        if (arr[max] < arr[i]) {
            max = i;
        }
    }
    return max;
}


function bubble(arr) {
    // debugger
    let swapped;
    // run the steps n-1 times
    for (let i = 0; i < arr.length; i++) {
        swapped = false;
        // for each step, max item will come at the last respective index
        for (let j = 1; j < arr.length - i; j++) {
            // swap if the item is smaller than the previous item
            if (arr[j] < arr[j-1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                swapped = true;
            }
        }
        // if you did not swap for a particular value of i, it means the array is sorted hence stop the program
        if (!swapped) { // !false = true
            break;
        }
    }
    return arr;
}

console.log(insertion(arr))