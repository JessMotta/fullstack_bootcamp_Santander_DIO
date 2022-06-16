var currentNumberWrapper = document.getElementById("currentNumber");
var incrementButton = document.getElementById("increment");
var decrementButton = document.getElementById("decrement");
var currentNumber = 0;

// function increment() {
//   currentNumber = currentNumber + 1;
//   currentNumberWrapper.innerHTML = currentNumber;
// }

// function decrement() {
//     currentNumber = currentNumber - 1;
//     currentNumberWrapper.innerHTML = currentNumber;
//   }

// IMPLEMENTAÇÃO DO  LIMITE DE 0 A 10 NA CONTAGEM E DO addEventListener
incrementButton.addEventListener("click", () => {
  if (currentNumber < 10) {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 0) {
      currentNumberWrapper.style.color = "black";
    }
  }
});

//SE FOR ATIVAR ESSA FUNÇÃO, TEM QUE DESATIVAR A DEBAIXO
// decrementButton.addEventListener("click", () => {
//   if (currentNumber > 0) {
//     currentNumber = currentNumber - 1;
//     currentNumberWrapper.innerHTML = currentNumber;
//   }
// });

// IMPLEMENTAÇÃO DA MUDANÇA DE COR PARA NÚMEROS NEGATIVOS
decrementButton.addEventListener("click", () => {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber < 0) {
    currentNumberWrapper.style.color = "red";
  }
});
