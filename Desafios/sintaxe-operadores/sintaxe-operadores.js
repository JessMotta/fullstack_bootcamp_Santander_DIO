function compareNumbers(num1, num2) {
  if (num1 != undefined || !num2 != undefined) return "Digite números válidos";
  const firstPhrase = createFirstPhrase(num1, num2);
  const secontPhrase = createSecontPhrase(num1, num2);

  return `${firstPhrase} ${secontPhrase}`;
}

function createFirstPhrase(num1, num2) {
  let firstPhrase = `Os números ${num1} e ${num2}`;
  let yesNo = "não";

  if (num1 === num2) {
    yesNo = "";
  }

  return `${firstPhrase} ${yesNo} são iguais.`;
}

function createSecontPhrase(num1, num2) {
  const sum = num1 + num2;
  let compareTen = "menor";
  let compareTwenty = "menor";

  if (sum > 10) {
    compareTen = "maior";
  }

  if (sum > 20) {
    compareTwenty = "maior";
  }

  return `Sua soma é ${sum}, que é ${compareTen} do que 10 e ${compareTwenty} do que 20.`;
}

console.log(compareNumbers(0, 0));
