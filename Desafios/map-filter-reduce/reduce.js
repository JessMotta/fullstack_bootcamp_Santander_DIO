// function sumNumbers(arr){
//    return arr.reduce(function(prev, current){
//         return prev + current
//     }, 2)
// }

// const arr = [1,2 , 5, 8];

// console.log(sumNumbers(arr));

// SALDO TOTAL DA LISTA
const list = [
  {
    name: "Sabão em pó",
    price: 25,
  },
  {
    name: "Cereal",
    price: 12,
  },
  {
    name: "Toalha de banho",
    price: 55,
  },
];

const balanceAvailable = 100;

function calcBalance(balanceAvailable, list) {
  return list.reduce(function (prev, current) {
    console.log({prev})
    console.log({current})
    return prev - current.price;
  }, balanceAvailable);
}

console.log(calcBalance(balanceAvailable, list));
