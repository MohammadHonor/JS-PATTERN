//reverse hollow pyramid
var n = Number(window.prompt("Enter number of rows"));

for (var row = 1; row <= n; row++) {

    for (var col = 1; col < n * 2; col++) {

       if (row + col == row * 2 || row + col == n * 2 || row == 1) {
            document.write("*")
       }
        else {
            document.write('&nbsp&nbsp');
        }

    }
    document.write("<br/>")

}