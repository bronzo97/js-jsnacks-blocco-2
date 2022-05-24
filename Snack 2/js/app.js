let userNames = ['Carlo', 'Marco', 'Gianni', 'Ernesto', 'Geltrude', 'Sandra'];
let userSurnames = ['Rossi', 'Verdi', 'Sassi', 'Plebani', 'Conti', 'Ferrero'];
let guests = prompt('Quanti invitati vuoi alle tua festa?');
let user;

for (let i = 0; i < guests; i++) {
    let randomName = Math.floor(Math.random()* 6);
    // console.log(userNames[randomName]);
    let randomSurname = Math.floor(Math.random()* 6);
    // console.log(userSurnames[randomSurname]);
    user = `${userNames[randomName]} ${userSurnames[randomSurname]}`;
    console.log(user);
}