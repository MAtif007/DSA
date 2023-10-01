let arr = [23, 45, 1, 2, 8, 19, -3, 16, -11, 28];

let element = 19;

function linearSearch(arr, ele) {
    if (arr.length === 0) return -1;
    for (let i = 0; i <= arr.length; i++) {
        let currentEle = arr[i]
        if(currentEle === ele){
            return i;
        }
    }
    return -1;
}

console.log("Element found" , linearSearch(arr, element))

function linearSearch2(arr, ele) {
    if (arr.length === 0) return -1;
    for (let i = 0; i <= arr.length; i++) {
        let currentEle = arr[i]
        if(currentEle === ele){
            return currentEle;
        }
    }
    return -1;
}

console.log("Element found" , linearSearch2(arr, element))

function linearSearch3(arr, ele) {
    if (arr.length === 0) return false;
    for (let i = 0; i <= arr.length; i++) {
        let currentEle = arr[i]
        if(currentEle === ele){
            return true;
        }
    }
    return false;
}

console.log("Element found" , linearSearch3(arr, element))