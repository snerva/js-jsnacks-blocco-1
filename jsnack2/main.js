//L’utente inserisce due parole in successione, con due prompt.
const userFirstWord = prompt('Inserisci una parola:');
const userSecondWord = prompt('Inserisci una seconda parola:');
//Il software stampa prima la parola più corta, poi la parola più lunga 
const word = document.querySelector('h1');

if (userFirstWord > userSecondWord){
    console.log(userFirstWord);
} else {
    console.log(userSecondWord);
}

if (userFirstWord < userSecondWord){
    console.log(userFirstWord);
} else {
    console.log(userSecondWord);
}