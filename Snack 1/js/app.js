const number = document.querySelector('.number-container');

const askNumber = +prompt('Inserisci un numero');



const newDiv = document.createElement("div");
const newClass = newDiv.classList.add('pippo');
number.appendChild(newDiv);


if (askNumber % 2 === 0) {
    console.log(askNumber);
    newDiv.textContent = askNumber;
} else {
    console.log(askNumber + 1);
    newDiv.textContent = askNumber + 1;
}