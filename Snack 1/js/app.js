const askNumber = prompt('Inserisci un numero');

if (parseInt(askNumber) % 2 === 0) {
    console.log(parseInt(askNumber));
} else {
    console.log(parseInt(askNumber) + 1);
}