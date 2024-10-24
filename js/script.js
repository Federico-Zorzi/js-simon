const randomNumberListEl = document.getElementById("random-number-list");
const confirmNumber = document.getElementById("confirm-numbers");

const numberOfFields = 5;

// * funzione per generare un numero casuale
const numberRadomizer = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// * funzione per generazione numeri casuali da 1 a 99
const genRandomNumberList = () => {
  const randomNumberArray = [];

  for (let i = 1; i <= numberOfFields; i++) {
    //genero numero random
    let randomNumber = numberRadomizer(1, 99);
    let isNumberValid = !randomNumberArray.includes(randomNumber);
    // controllo che il numero sia l'unico all'interno dell'array dei numeri random
    while (!isNumberValid) {
      randomNumber = numberRadomizer(1, 99);
      isNumberValid = !randomNumberArray.includes(randomNumber);
    }

    //stampo numero nell'array dei numeri random + creazione dell'Id per ogni singolo elemento
    randomNumberListEl.innerHTML += `<li id="random-number${i}" class="list-group-item">${randomNumber}</li>`;
    randomNumberArray.push(randomNumber);
  }

  return randomNumberArray;
};

// * funzione per nascondere i numeri presenti nella lista
const hideRandomNumberList = () => {
  const firstRandomNumber = document.getElementById("random-number1");
  const secondRandomNumber = document.getElementById("random-number2");
  const thirdRandomNumber = document.getElementById("random-number3");
  const fourthRandomNumber = document.getElementById("random-number4");
  const fifthRandomNumber = document.getElementById("random-number5");

  firstRandomNumber.innerText = "XX";
  secondRandomNumber.innerText = "XX";
  thirdRandomNumber.innerText = "XX";
  fourthRandomNumber.innerText = "XX";
  fifthRandomNumber.innerText = "XX";

  for (let i = 1; i <= numberOfFields; i++) {
    let actualUserNumber = document.getElementById(`user-number${i}`);
    actualUserNumber.disabled = false;
  }
};

// * funzione che confronta i due array
const compareBetweenArray = (randomArray, userArray) => {
  let numberIncluded = [];
  randomArray.forEach((randomArrayIndex) => {
    if (userArray.includes(randomArrayIndex)) {
      numberIncluded.push(randomArrayIndex);
    }
  });

  numberIncluded.sort();
  numberIncluded.join(" , ");

  return numberIncluded.length > 0
    ? `I numeri che hai indovinato sono: ${numberIncluded}`
    : `Non hai indovinato nessun numero!`;
};

const cleanUserInputs = () => {
  for (let i = 1; i <= numberOfFields; i++) {
    let actualUserNumber = document.getElementById(`user-number${i}`);
    actualUserNumber.value = "";
  }
};

const disabledFields = () => {
  for (let i = 1; i <= numberOfFields; i++) {
    let actualUserNumber = document.getElementById(`user-number${i}`);
    actualUserNumber.disabled = true;
  }
};

// pulisco gli input dell-utente al caricamento della pagina
cleanUserInputs();
disabledFields();
// richiamo generazione lista di numeri casuale
const casualNumberArray = genRandomNumberList();
console.log(casualNumberArray);

// * evento confronto numeri random e quelli selezionati dall'utente
confirmNumber.addEventListener("submit", (e) => {
  e.preventDefault();
  const userNumberArray = [];
  const randomNumberArray = casualNumberArray;
  const messageForUser = document.getElementById("message-for-user");

  /* stampa array numeri utente */
  for (let i = 1; i <= numberOfFields; i++) {
    let actualUserNumber = document.getElementById(`user-number${i}`);
    userNumberArray.push(parseInt(actualUserNumber.value));
  }

  cleanUserInputs();

  /* confronta i due array */
  messageForUser.innerText = compareBetweenArray(
    randomNumberArray,
    userNumberArray
  );
});

// * tempo di 30 secondi per memorizzare i numeri dopo di che vengono cancellati
setTimeout(hideRandomNumberList, 10000);
