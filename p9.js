let num= Number(window.prompt("Enter number between 1 to 9"))

for( let i=1 ; i<=num ; i++){

    for(let j=1 ; j<=i ; j++){
        document.write(i+'&nbsp&nbsp')
    }
    document.write(`<br/>`)
}