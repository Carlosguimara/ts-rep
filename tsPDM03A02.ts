import readline from 'readline-sync';

// 1-Crie uma classe Pessoa com os atributos nome, idade e email.

class Pessoa {
    nome: string;
    idade: number;
    email: string;
    constructor(nome: string, idade:number, email: string) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
}

//2-Crie uma classe Aluno que herda da classe Pessoa e tenha um atributo adicional matricula.

class Aluno extends Pessoa {
    matricula: number;
    constructor(nome: string, idade:number, email: string,matricula: number) {
        super (nome, idade, email)
        this.matricula= matricula;
    }
}

//3-Crie uma classe Retangulo com os atributos largura e altura e métodos para calcular a área e o perímetro.

class Retangulo {
    largura: number;
    altura: number;
    constructor (largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
        }
    area(largura:number ,altura: number) {
        console.log(`a área do retângulo é: ${largura*altura}`)
    }
    perimetro(largura: number ,altura: number){
        console.log(`O perimetro do retângulo é: ${2*largura+2*altura}`)
    }
}

//4-Crie uma classe Círculo com o atributo raio e métodos para calcular a área e a circunferência.

class Circulo {
    raio: number;
    constructor (raio: number) {
        this.raio = raio;
        }
    area(raio: number) {
        console.log(`a área do círculo é ${3.1416*raio^2}`)
    }
    circunferência(raio: number){
        console.log(`O perimetro do Circunferência  mede: ${2*3.1416*raio}`)
    }
}

//5-Crie uma classe ContaBancaria com os atributos saldo e numeroConta e métodos para depositar, sacar e verificar o saldo.

class ContaBancaria {
    numeroConta: number;
    saldo: number;
    constructor (conta: number, saldo: number) {
        this.numeroConta = conta;
        this.saldo = saldo;
        }
    depositar(valor: number) {
        console.log(`Saldo Anterior: ${this.saldo} Saldo Atual: ${this.saldo+valor}`)
    }

    sacar(valor: number) {
        console.log(`Saldo Anterior: ${this.saldo} Saldo Atual: ${this.saldo-valor}`)
    }

    exibesaldo() {
        console.log(`Saldo atual: ${this.saldo}`)
    }
}

//6-Crie uma classe Produto com os atributos nome, preco e quantidade e métodos para calcular o valor total (preço * quantidade).

class Produto {
    nome: string;
    preco: number;
    quantidade: number;
    constructor (nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        }
    valorTotal(preco: number, quantidade: number) {
        console.log(`O valor total do produto ${this.nome} é R$ ${preco*quantidade}`)
    }
}

//7-Crie uma classe Triangulo com os atributos lado1, lado2 e lado3 e um método para verificar se é um triângulo válido.

//todos os lados devem ser > 0 e menores do que a soma dos outros 2.





//8-Crie uma classe Livro com os atributos titulo, autor e anoPublicacao e um método para exibir informações do livro.

class Livro {
    titulo: string;
    autor: string;
    anoPublicacao: string;
    constructor (titulo: string, autor: string, anoPublicacao: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        }
    exibe() {
        console.log(`Livro: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}`)
    }
}

//9-Crie uma classe Agenda que permite adicionar, listar e remover contatos (nomes e números de telefone).





//10-Crie uma classe CarroEsportivo que herda da classe Carro (usada no exemplo anterior) e tenha métodos 
//   adicionais para acelerar rapidamente e produzir um som esportivo.

