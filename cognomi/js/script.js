var user = prompt("Inserisci il tuo cognome");

whiteList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

whiteList.push(user);

whiteList = whiteList.sort();

document.getElementById("one").innerHTML = whiteList[0];
document.getElementById("two").innerHTML = whiteList[1];
document.getElementById("three").innerHTML = whiteList[2];
document.getElementById("four").innerHTML = whiteList[3];
document.getElementById("five").innerHTML = whiteList[4];
document.getElementById("six").innerHTML = whiteList[5];