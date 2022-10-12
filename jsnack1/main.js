//L’utente inserisce due numeri in successione, con due prompt.
const userNumber1 = prompt('Inserisci un numero:');
console.log(userNumber1);
const userNumber2 = prompt('Inserisci un altro numero:');
console.log(userNumber2);

const maxNumber = document.querySelector('h1');

if (userNumber1 > userNumber2){
    console.log(userNumber1);
    maxNumber.innerHTML = `${userNumber1}`;
} else{
    console.log(userNumber2);
    maxNumber.innerHTML = `${userNumber2}`;
}
//Il software stampa il maggiore. 