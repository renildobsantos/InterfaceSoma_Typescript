enum cargo {
    secretaria,
    porteiro,
    medica
}

type cadastro = {
    nome: string,
    idade: number,
    profissao: cargo
} 

let pessoa: cadastro = {
    nome: "maria",
    idade: 35,
    profissao: cargo.secretaria
};

let pessoa1 : cadastro = {
    nome: "jose",
    idade: 29,
    profissao: cargo.porteiro
};

let pessoa2 = {
    nome: "laura",
    idade: "32",
    profissao: cargo.medica
}
