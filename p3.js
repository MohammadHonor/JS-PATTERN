let n = Number(prompt("Enter the row"))
for (let i = 1; i <= n; i++) {
    for (let j = 1; j < 2 * n; j++) {
        if (i + j == n + 1 || j - i == n - 1 || i == n) {
            document.write("*")
        }
        else {

            document.write('&nbsp&nbsp');
        }
    }
    document.write("<br/>")
}

