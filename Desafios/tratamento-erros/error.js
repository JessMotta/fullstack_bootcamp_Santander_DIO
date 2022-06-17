function validateArray(array, number) {
  try {
    if (!array && !number) throw new ReferenceError("Envie os parâmetros");

    if (typeof array !== "object")
      throw new TypeError("Array precisa ser do tipo object");

    if (typeof number !== "number")
      throw new TypeError("O número precisa ser do tipo number");

    if (array.length != number) throw new RangeError("Tamanho inválido");

    return array;
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log("Este erro é um ReferenceError!");
      console.log(error.name);
      console.log(error.stack);
    } else if (error instanceof TypeError) {
      console.log("Este erro é um TypeError!");
      console.log(error.name);
      console.log(error.stack);
    } else if (error instanceof RangeError) {
      console.log("Este erro é um RangeError!");
      console.log(error.name);
      console.log(error.stack);
    } else{
        console.log("Erro não esperado", e)
    }
  }
}


console.log(validateArray(5,5))