

function pattern31( n) {
    let originalN = n;
    n = 2 * n;
    for (let row = 0; row <= n; row++) {
        for (let col = 0; col <= n; col++) {
            let atEveryIndex = originalN - Math.min(Math.min(row, col), Math.min(n - row, n - col));
            document.write(atEveryIndex + " ");
        }
        document.write("<br>");
    }
}

// pattern31(5)


function pattern30(n) {
    for (let row = 1; row <= n; row++) {

        for (let space = 0; space < n-row; space++) {
            document.write("  ");
        }

        for (let col = row; col >= 1; col--) {
            document.write(col + " ");
        }
        for (let col = 2; col <= row; col++) {
            document.write(col + " ");
        }

        document.write("<br>");
    }
}
pattern30(5)


function pattern17( n) {
    for (let row = 1; row <= 2 * n; row++) {

        let c = row > n ? 2 * n - row: row;

        for (let space = 0; space < n-c; space++) {
            document.write("  ");
        }

        for (let col = c; col >= 1; col--) {
            document.write(col + " ");
        }
        for (let col = 2; col <= c; col++) {
            document.write(col + " ");
        }

        document.write("<br>");
    }
}


function  pattern28(n) {
    let str = " ";
    for (let row = 0; row < 2 * n; row++) {
        let totalColsInRow = row > n ? 2 * n - row: row;

        let noOfSpaces = n - totalColsInRow;
        for (let s = 0; s < noOfSpaces; s++) {
            document.write(str)
        }
        for (let col = 0; col < totalColsInRow; col++) {
            document.write(" *")
        }
        document.write("<br>");
    }
}

// pattern28(5)

function  pattern5(n) {
    // debugger
    for (let r = 1; r <= 2 * n; r++) {
        let totalColsInRow = r > n ? 2 * n - r: r;
        for (let c = 1; c <= totalColsInRow; c++) {
            document.write("  *");
        }   
       document.write("<br>");
    }
}

// pattern5(4)

function  pattern4(n) {
    // debugger
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= r; c++) {
            document.write(c + " ");
        }   
       document.write("<br>");
    }
}

// pattern4(4)

function  pattern3(n) {
    // debugger
    for (let r = 0; r <= n; r++) {
        for (let c = 1; c <= n - r + 1; c++) {
            document.write('* ');
        }   
       document.write("<br>");
    }
}

// pattern3(4)

function  pattern2(n) {
    // debugger
    for (let r = 0; r <= n; r++) {
       for (let c = 0; c <= r; c++) {
           document.write('* ');
       }  
       document.write("<br>");
    }
}

// pattern2(4)


function  pattern1(n) {
    // debugger
    for (let r = 0; r <= n; r++) {
       for (let c = 0; c <= n; c++) {
           document.write('* ');
       }  
       document.write("<br>");
    }
}

// pattern1(4)