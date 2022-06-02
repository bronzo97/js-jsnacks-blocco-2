                    // 0   1   2   3   4  5  6  7  8  9  10
const numeriInteri = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
let somma = 0;

for (i = 0; i < numeriInteri.length; i++) {
    if(i % 2 === 0) {
        console.log('numero posizione pari');
    } else {
    console.log(somma += numeriInteri[i]);
    }

}
