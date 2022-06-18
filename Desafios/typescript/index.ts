const input = document.getElementById("input") as HTMLInputElement;

input.addEventListener("input", (event) => {
  const target = event.currentTarget as HTMLInputElement;
  console.log(target.value);
});

//Generic Types

/* function adicionaApendiceALista<Generic>(array:any[], valor:Generic){
    return array.map(item => item + valor)
}

adicionaApendiceALista([1,2,3], 5) */

//Generic Types

/* function adicionaApendiceALista<Generic>(array:Generic[], valor:Generic){
    return array.map(() => valor)
}
// fica com erro pois está esperando o mesmo tipo
adicionaApendiceALista(["A","B","C"], 25) */

// CONDICIONAIS
interface IUsuario {
  id: string;
  email: string;
  cargo?: "funcionario" | "gerente" | "coordenador" | "supervisor";
}

function redirecione(usuario: IUsuario) {
  if (usuario.cargo) {
    // redirecionar(usuario.cargo)
  }

  // redirecionar para área do usuário
}

// READONLY AND PRIVATE
interface Gato {
   nome: string;
   idade: number;
   parqueFavorito?: string;
}
type GatoSomenteLeitura ={
    +readonly [K in keyof Gato]-?: Gato[K] // o +readonly quer dizer que está adicional essa propriedade, e o -? remove os valores opcionais, que é o caso do parque favorito
}

const meuGato: Gato = {
  nome: "Blinho",
  idade: 9,
  parqueFavorito: "Varandinha de casa",
};

// OU PODE SER UMA CLASSE
class meuGato2 implements Gato {
  nome ;
  idade ;
  parqueFavorito ;

  constructor(nome, idade, parqueFavorito) {
    this.nome = nome;
    this.idade = idade;
    this.parqueFavorito = parqueFavorito;
  }
}

const gato = new meuGato2("Blinho", 9, "Varandinha de casa");