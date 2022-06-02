let userNames = ['Carlo', 'Marco', 'Gianni', 'Ernesto', 'Geltrude', 'Sandra'];
let userSurnames = ['Rossi', 'Verdi', 'Sassi', 'Plebani', 'Conti', 'Ferrero'];
let guests = prompt('Quanti invitati vuoi alle tua festa?');

for (let i = 0; i < guests; i++) {
    let randomName = Math.floor(Math.random() * userNames.length);
    // console.log(userNames[randomName]);
    let randomSurname = Math.floor(Math.random() * userSurnames.length);
    // console.log(userSurnames[randomSurname]);
    let user = `${userNames[randomName]} ${userSurnames[randomSurname]}`;
    console.log(user);
}