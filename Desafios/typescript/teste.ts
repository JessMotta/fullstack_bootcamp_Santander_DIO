function soma(a: number, b: number) {
  return a + b;
}

console.log(soma(2, 3))


// types
// interfaces
/* 
interface IAnimal{
    nome: string;
    tipo: "terrestre" | "aquático";
    executarRugido(alturaEmDecibeis: number): void
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}


const animal: IAnimal ={
    nome: "Elefante",
    tipo: "terrestre",
    executarRugido:(alturaEmDecibeis) => (console.log(`${alturaEmDecibeis} dB`))

}

animal.executarRugido(50)

const felino: IFelino = {
    nome: 'Gato',
    tipo: "terrestre",
    visaoNoturna: true,
    executarRugido:(alturaEmDecibeis) => (console.log(`${alturaEmDecibeis} dB`))
} */

// interface IAnimal {
//     nome: string;
//     tipo: "terrestre" | "aquático"
//     domestico: boolean;
// }

// interface IFelino extends IAnimal {
//     visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal {
//     porte: 'pequeno' | "médio" | "grande";
// }

// type IDomestico = IFelino | ICanino


// const animal: IDomestico ={
//     domestico: true,
//     nome: 'cachorro', 
//     porte: 'médio',
//     tipo: "terrestre",
//     visaoNoturna: true

// }