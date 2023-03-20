// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// [23, 65, 1, 4,78,15,....];
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// Dichiaro che il numero delle celle sono 100 (gioco base):
const numberOfsquares = 100;

// Al click del tasto play generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.

const btnPlay = document.getElementById("startgame");

btnPlay.addEventListener("click", function () {
  const grid = document.querySelector(".grid");

  // Reset delle celle:
  grid.innerHTML = "";

  // Ciclo per creare le 100 caselle:
  for (let i = 1; i <= numberOfsquares; i++) {
    const newItem = generateGridItem(i);
    grid.append(newItem);
  }
});

// Creo l'array delle 16 bombe nella griglia da 100

const bombs = generatebombs(16, 100);

///////////////////////

// FUNZIONE PER CREARE IL TESTO
function generateGridItem(number) {
  // CREO UN NODO
  const newSquare = document.createElement("div");
  // AGGIUNGO AL NODO LA CLASSE
  newSquare.classList.add("grid-item");
  //   creo elemento span con il numero
  newSquare.innerHTML = `<span>${number}</span>`;
  // al click aggiungiamo la classe azure
  newSquare.addEventListener("click", function () {
    newSquare.classList.add("azure");
  });
  return newSquare;
}

// FUNZIONE PER GENERARE LE BOMBE
function generatebombs(numbersquantity, maxNumber) {
  const numbers = [];
  while (numbers.length < numbersquantity) {
    const rndNumber = getRndInteger(1, maxNumber);
    if (!numbers.includes(rndNumber)) {
      numbers.push(rndNumber);
      console.log(rndNumber);
    }
  }
 
}


// FUNZIONE PER NUMERI RANDOM
function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// FUNZIONE PER COLORARE IL TESTO DI AZZURRO
function handleItemClick() {
  const clickedNumber = parseInt(this.querySelector("span").textContent);
  this.classList.add("azure");
}
