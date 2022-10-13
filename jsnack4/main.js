//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
const partyInvitedList = [
    'Pincopallo',
    'Pancopillo',
    'Alice',
    'Bianconiglio'
];
console.log(partyInvitedList);
//chiedi all’utente il suo nome
const userName = prompt('Inserisci il tuo nome:');

//comunicagli se può partecipare o no alla festa.
let i = 0;
while (i < partyInvitedList.length){
    const thisInvited = partyInvitedList[i];
    
    if (userName == thisInvited){
        console.log(userName);
        document.querySelector('h1').innerHTML = 'Benvenuto al Party!';
    }  
    i++  
}
