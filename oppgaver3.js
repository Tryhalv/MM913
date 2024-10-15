/*
    Hei.
    Dette er et oppgave sett i MM-912.
    Meningen er å trene på et fåtall ting av gangen. 
    Du gjør dette ved å skrive inn ditt svar etter at en oppgave er gitt (se på eksempelet)

    IKKE endre på kode som er gitt, med mindre oppgaven spesefikt sier at du skal det
*/

/*
    Oppgave: Eksempel
    Skriv koden for å skrive ut alle navnene i listen, et navn per linje
*/
console.log("Oppgave: Eksempel");
const people = ["Tony","Christian","Håkon"]

for(let index = 0; index < people.length; index++){
    let person = people[index];
    console.log(person);
}

/*
    Oppgave: A
    Lag variabler for:
    * Timer i døgnet
    * Minutter i en time
    * Sekunder i et minutt
    * forholdet mellom vann og saft når man blander saft.
    * dager til din bursdag
    * mmilimeter regn som faller 
*/

const NUMBERS_OF_HOURS_IN_A_DAY= 24;
let minutesInAnHour = 60;
let secondsInAMinute = 60;
let mixRatio = 1/4;
let numberOfDays = 93;
let milimeter = 150;

/*
    Oppgave: B
    Bruk variablene dine fra oppgave A og kalkuler:
    * Hvor Mange sekunder er det i 2.5 timer?
    * Hvor mange minutter er det i 123 dager?
    Husk å sette svarene til sine egne variabler
    Eks:
    // Hvor mange dl er 4.5 coups?
    const dlInCoups = 2.36588;
    const antallDL = dlInCoups * 4.5;
*/
console.log("Oppgave: B");

let HourCalculation = secondsInAMinute * minutesInAnHour * 2.5;
let DayCalculation = minutesInAnHour * NUMBERS_OF_HOURS_IN_A_DAY * 123;

console.log(HourCalculation)
console.log(DayCalculation)

/*
    Oppgave: C
    Bruk en løkke (for) til å skrive ut tallene fra 1 til 10 
*/
console.log("Oppgave: C");
let max = 10 ;
for(let index = 0; index < max; index++){
    console.log(index+1);
}
    
/*
    Oppgave: D
    Bruk en løkke (for) til å skrive ut tallene fra 10 til 1
*/
console.log("Oppgave: D");

let min = 0 ;
for(let index = 10; index > min; index--){
    console.log(index);
}
/*
    Oppgave: E  
    Denne er litt vanskligere, men du klarer den ;)
    Bruk en løkke (for) til å skrive ut partallene mellom 1 og 100
*/
console.log("Oppgave: E");
let max = 100 ;
for(let index = 0; index < max; index++){
    let a = index / 2 
    let b = Math.floor(a)
    if (a-b==0){
    console.log(index);
}} 
/*
    Oppgave: F
    Fyll inn koden som skal til for å få følgende kode til å skrive ut det som er forventet.
*/
console.log("Oppgave: F");

const DICTIONARY = {
    hello:"Hei på deg",
    howAreYou:"hvordan står det til?"
}

console.log(`${DICTIONARY.hello} Christian ${DICTIONARY.howAreYou}`); //-> Hei på deg Christian, hvordan står det til?
console.log(`${DICTIONARY.goodQuestionsLatly}`) //-> Fått noen gode spørsmål i det siste?


/*
    Oppgave: G
    Fyll inn koden som skal til for å få følgende kode til å skrive ut det som er forventet.
*/
console.log("Oppgave: G");

const DICTIONARY_ML = {
    no:{
        hello:"Hei på deg",
        howAreYou:"hvordan står det til?"
    },
    en:{

    }
}

console.log(`${DICTIONARY.en.hello} Christian ${DICTIONARY.en.howAreYou}`); //-> Hi Christian, how are you?
console.log(`${DICTIONARY.en.goodQuestionsLatly}`) //-> Gotten anny good questions latly?

