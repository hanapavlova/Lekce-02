document.body.innerHTML += "<p> Ahoj Verunko!!!</p>";

//1. úkol
let cislo = Math.floor((Math.random()*6)+1);
document.body.innerHTML += cislo;

//2. úkol
let cena = 12;
let pocetListku = 174*15;
let prijem = cena*pocetListku;

document.body.innerHTML += "<p>Měsíční příjem divadla je " + prijem + " EUR.</p>";

let pocetStudent = pocetListku*0.4;
let pocetDospely = pocetListku*0.6;
let cenaStudent = 12*0.65;

let prijemSleva = cena*pocetDospely + cenaStudent*pocetStudent;

document.body.innerHTML += "<p>Měsíční příjem divadla po zapocitani studentskych slev je " + prijemSleva + " EUR.</p>";
