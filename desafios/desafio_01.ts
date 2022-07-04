
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let funcionario = {
    codigo: 20,
    nome: "jose",
    setor: "compras"
};

let funcionario1: {codigo: number, nome: string, setor: string} = {
    codigo: 20,
    nome: "jose",
    setor: "compras"
};

interface funcionario { 
    codigo: number,
    nome: string,
    setor: string
}