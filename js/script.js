var user = prompt("Inserisci il tuo cognome")

whiteList = ["nome.cognome@gmail.com", "prova@gmail.com", "prova@gmail.it", "gl.galassini@gmail.com", "boolean@booleanmail.com"];

document.getElementById("printer").innerHTML = "accesso negato"

for (i = 0; i < whiteList.length; i++) {
    if (user == whiteList[i]) {
        document.getElementById("printer").innerHTML = "accesso autorizzato"
    }
}