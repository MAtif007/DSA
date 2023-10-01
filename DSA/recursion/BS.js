
let arr = [1, 2, 3, 4, 55, 66, 78];
let tar = 78;
function search(arr, target, s, e) {
    if (s > e) {
        return -1;
    }
    let m = Math.floor((s +e) / 2);
    if (arr[m] == target) {
        return m;
    }
    if (target < arr[m]) {
        return search(arr, target, s, m - 1);
    }
    return search(arr, target, m + 1, e);
}

console.log(search(arr, tar, 0, arr.length-1));