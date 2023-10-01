

function print(n) {
    if (n == 5 ){
        console.log(5)
        return;
    }
    console.log(n);
    print(n + 1);
}


print(1);