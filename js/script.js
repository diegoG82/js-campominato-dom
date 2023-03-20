// Dichiaro che il numero delle celle sono 100 (gioco base):
const numberOfsquares = 100;

//   Genero le bombe con la funzione
const bombs = generatebombs(16, 100);
console.log(bombs);

// VARIABILE PER IL PUNTEGGIO
let score = [];
console.log(score);

// Al click del tasto play generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.

const btnPlay = document.getElementById("startgame");

btnPlay.addEventListener("click", function () {
  const grid = document.querySelector(".grid");

  // Reset delle celle:
  grid.innerHTML = "";

  //   reset dello score
  score = [];

  // Ciclo per creare le 100 caselle:
  for (let i = 1; i <= numberOfsquares; i++) {
    const newItem = generateGridItem(i);
    grid.append(newItem);
  }
});

// FUNZIONI
////////////////////////////////////////////////////////////////

// FUNZIONE PER CREARE IL TESTO
function generateGridItem(number) {
  // CREO UN NODO
  const newSquare = document.createElement("div");
  // AGGIUNGO AL NODO LA CLASSE
  newSquare.classList.add("grid-item");
  //   CREO ELEMENTO SPAN CON IL NUMERO
  newSquare.innerHTML = `<span>${number}</span>`;
  // IMPLEMENTO LA FUNZIONE DEL COLORE DELLE CELLE
  newSquare.addEventListener("click", addColor);
  return newSquare;
}

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.

// FUNZIONE PER GENERARE LE BOMBE
function generatebombs(numbersquantity, maxNumber) {
  const bombNumbers = [];
  while (bombNumbers.length < numbersquantity) {
    const rndNumber = getRndInteger(1, maxNumber);
    if (!bombNumbers.includes(rndNumber)) {
      bombNumbers.push(rndNumber);
    }
  }

  return bombNumbers;
}

// FUNZIONE PER NUMERI RANDOM
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

// FUNZIONE PER IL COLORE DELLE CELLE

function addColor() {
  const clickedNumber = parseInt(this.querySelector("span").textContent);
  console.log(clickedNumber);
  // SCONFITTA
  if (bombs.includes(clickedNumber)) {
    this.classList.add("red");

    alert("Bomba! Hai perso!");
    alert(`il tuo punteggio è: ${score.length}`);

    // PROSEGUIMENTO GIOCO
  } else {
    this.classList.add("azure");
    this.classList.add("noneclick");
    if (gamescore(clickedNumber) === true) {
      console.log("hai vinto!");
    }
  }
}

// FUNZIONE CALCOLO PUNTEGGIO

function gamescore(number) {
  score.push(number);
  console.log(score);
  console.log(score.length);

  if (score.length === numberOfsquares - 16) {
    console.log("Hai Vinto!");
  } else {
    score.length + 1;
  }

  return gamescore;
}
