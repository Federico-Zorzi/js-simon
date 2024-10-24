const randomNumberListEl = document.getElementById("random-number-list");

const numberRadomizer = (min, max) => {
  return Math.floor(Math.random() * max - min) + min;
};

const genRandomNumberList = () => {
  const randomNumberArray = [];

  for (let i = 1; i <= 5; i++) {
    let randomNumber = numberRadomizer(1, 99);
    randomNumberListEl.innerHTML += `<li id="random-number${i}" class="list-group-item">${randomNumber}</li>`;
    randomNumberArray.push(randomNumber);
  }

  return randomNumberArray;
};

const hideRandomNumberList = () => {
  console.log("Ciao");

  const firstNumber = document.getElementById("random-number1");
  const secondNumber = document.getElementById("random-number2");
  const thirdNumber = document.getElementById("random-number3");
  const fourthNumber = document.getElementById("random-number4");
  const fifthNumber = document.getElementById("random-number5");

  firstNumber.innerText = "XX";
  secondNumber.innerText = "XX";
  thirdNumber.innerText = "XX";
  fourthNumber.innerText = "XX";
  fifthNumber.innerText = "XX";
};

console.log(genRandomNumberList());

setTimeout(hideRandomNumberList, 3000);
