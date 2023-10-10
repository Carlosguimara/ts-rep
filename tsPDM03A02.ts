import { get } from 'http';
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



class Triangulo {
    ladoA: number;
    ladoB: number;
    ladoC: number;
    constructor (ladoA: number, ladoB: number, ladoC: number) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }
    testarMedidas(ladoA: number, ladoB: number, ladoC: number) {
        if ( ladoA > (ladoB+ladoC) || ladoB > (ladoA+ladoC) || ladoC> (ladoA+ladoB)) {
            console.log(`As medidas informadas nao formam um triangulo válido`)
        } else{
            console.log(`As medidas informadas permitem construir um triangulo`)  
            }
    }
}
const Triangulo1 = new Triangulo (3,4,5)
console.log(Triangulo1)
Triangulo1.testarMedidas(3,4,5)


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

//************** Pesquisar */

class Contato {
    nome: string
    telefone: Array<string>
    constructor (nome: string, telefone: Array<string>) {
        this.nome = nome;
        this.telefone = telefone;
        }
    listar() {
        console.log(`nome: ${this.nome} Telefones: ${this.telefone}`)
    }
}
 
const Contato1 = new Contato("Carlos", ["91234561","91234562"])
console.log(Contato1.nome)
const Contato2 = new Contato("Jorge", ["91234563","91234564"])
const Contato3 = new Contato("Maria", ["91234565","91234566"])

class Agenda{
    contato: Array<string>
    constructor (contato: Array<string> = []){
        this.contato = contato
    }
    IncluirContato(contato) {
        this.contato.push(contato)
    }
    DeletarContato(nomecontato) {
        let i: number = 0
        for (i ; i <= this.contato.length-1 ; i++){
                console.log(i," ",this.contato[i])
            if (this.contato[i] == nomecontato){
                this.contato.splice(i,i)
                console.log(i)
                break
            }
        }
    }

    }


const Agenda1 = new Agenda()
console.log(Agenda1.contato)
Agenda1.IncluirContato(Contato1)
console.log(Agenda1.contato)
Agenda1.IncluirContato(Contato2)
console.log(Agenda1.contato)
Agenda1.IncluirContato(Contato3)
console.log(Agenda1.contato)
Agenda1.DeletarContato("Jorge")
console.log(Agenda1.contato)


//10-Crie uma classe CarroEsportivo que herda da classe Carro (usada no exemplo anterior) e tenha métodos 
//   adicionais para acelerar rapidamente e produzir um som esportivo.


class Carro {
    fabricante: string;
    modelo:String;
    portas: number;
    potencia: string;
    constructor(fabricante: string, modelo: string, portas: number, potencia: string) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.portas = portas;
        this.potencia = potencia;
    }
}

class CarroEsportivo extends Carro {
    buzinaplus: boolean;
    aceleraplus: boolean;
    constructor(fabricante: string, modelo: string, portas: number, potencia:string, buzinaplus: boolean, aceleraplus: boolean) {
        super (fabricante, modelo, portas, potencia)
        this.buzinaplus = buzinaplus;
        this.aceleraplus = aceleraplus;
    }
    
    buzinar(){
        console.log(`Voce está buzinando um(a) ${this.modelo}`)
        if (this.buzinaplus){
            console.log ("FUÓÓÓÓÓÓMMMM")
        } else{
            console.log ('beep beep')
        }
    }
    acelerar(){
        console.log(`Voce está Acelerando um(a) ${this.modelo}`)
        if (this.aceleraplus){
            console.log ("De 0 a 100 em 3.2 seg")
        } else{
            console.log ("de 0 a 100 em 14.5 seg")
        }
    }
}

const ferrari = new CarroEsportivo("Ferrari","Ferrari",2,"520CV",false,true)
ferrari.acelerar()
ferrari.buzinar()
const fiestaSport = new CarroEsportivo("Ford","Fiesta Sport",2,"80CV",true,false)
fiestaSport.buzinar()
fiestaSport.acelerar()


// DESAFIO 01
// Crie uma classe chamada Invoice que possa ser utilizado por uma loja de suprimentos
// de informática para representar uma fatura de um item vendido na loja. Uma fatura deve
// incluir as seguintes informações como atributos:
// o número do item faturado,
// a descrição do item,
// a quantidade comprada do item e
// o preço unitário do item.
// Sua classe deve ter um construtor que inicialize os quatro atributos. Se a quantidade não for positiva, 
// ela deve ser configurada como 0. Se o preço por item não for positivo ele deve ser configurado como 0.0. 
// Forneça um método set e um método get para cada variável de instância. Além disso, forneça um método 
// chamado getInvoiceAmount que calcula o valor da fatura (isso é, multiplica a quantidade pelo preço por item) e 
// depois retorna o valor como um double. Escreva um aplicativo de teste que demonstra as capacidades da classe Invoice.


class Invoice {
    idItem: number;
    descricao: string;
    qtdVenda: number;
    precoUnd: number;
    constructor (idItem: number, descricao: string, qtdVenda: number, precoUnd: number) {
        this.idItem = idItem;
        this.descricao = descricao;
        if (qtdVenda >= 0){
            this.qtdVenda = qtdVenda
        } else {
            this.qtdVenda = 0;
        }
        
        if (precoUnd >= 0){
            this.precoUnd = precoUnd
        } else {      
            this.precoUnd = 0.00
        }
    }

    getidItem() {
        return this.idItem
    }

    getdescricao() {
        return this.descricao
    }
  
    getqtdVenda() {
        return this.qtdVenda
    }
    
    getprecoUnd() {
        return this.precoUnd
    }

    setidItem(novoId: number) {
        this.idItem = novoId;
    }

    setdescricao(novaDescricao: string) {
        this.descricao = novaDescricao;
    }
  
    setqtdVenda(novaQtdVenda: number) {
        if (novaQtdVenda >= 0){
            this.qtdVenda = novaQtdVenda
        } else {
            this.qtdVenda = 0;
        }
    }
    
    setprecoUnd(novoPrecoUnd: number) {
        if (novoPrecoUnd >= 0){
            this.precoUnd = novoPrecoUnd
        } else {      
            this.precoUnd = 0.00
        }
    }

    getInvoiceAmount() {
        return (this.qtdVenda*this.precoUnd).toFixed(2)
    }
}

const Invoice1 = new Invoice(1,"cafe",-5,-10)
console.log(Invoice1)
console.log(`Qtde anterior: ${Invoice1.getqtdVenda()}`)
Invoice1.setqtdVenda(12)
let qtd = Invoice1.getqtdVenda()
console.log(`Qtde atual: ${qtd}`)

console.log(`Preço anterior: ${Invoice1.getprecoUnd()}`)
Invoice1.setprecoUnd(10.05)
let preco = Invoice1.getprecoUnd()
console.log(`Preco atual: R$ ${preco}`)

let id = Invoice1.getidItem()
let descr = Invoice1.getdescricao()
let total = Invoice1.getInvoiceAmount()
console.log(`Foram vendidas ${qtd} unidades do item ${id} - ${descr} ao preço unitário de R$ ${preco} - Valor total da nota: R$ ${total}`)


// DESAFIO 02
// A fim de representar empregados em uma firma, crie uma classe chamada Empregado que inclui as 
// três informações a seguir como atributos:
// um primeiro nome,
// um sobrenome, e
// um salário mensal.
// Sua classe deve ter um construtor que inicializa os três atributos. Forneça um método set e get para
// cada atributo. Se o salário mensal não for positivo, configure-o como 0.0. Escreva um aplicativo de teste
// que demonstra as capacidades da classe. Crie duas instâncias da classe e exiba o salário anual de cada 
// instância. Então dê a cada empregado um aumento de 10% e exiba novamente o salário anual de cada empregado.

class Empregado {
    nome: string;
    sobrenome: string;
    salario: number;
    constructor (nome: string, sobrenome: string, salario: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        if (salario >= 0){
            this.salario = salario
        } else {
            this.salario = 0.00
        }
   
    }

    getnome() {
        return this.nome
    }

    getsobrenome() {
        return this.sobrenome
    }
  
    getsalario() {
        return this.salario
    }

    setnome(novonome: string) {
        this.nome = novonome;
    }

    setsobrenome(novosobrenome: string) {
        this.sobrenome = novosobrenome;
    }
  
    setsalario(novosalario: number) {
        if (novosalario >= 0){
            this.salario = novosalario
        } else {
            this.salario = 0.00
        }
    }


    Reajustasalario(percentual: number) {
        if (percentual <0){
            percentual=0
        }
        console.log(`Salario Anterior R$ ${(this.salario).toFixed(2)}`)
        let indice: number = percentual/100 + 1
            this.salario = this.salario*indice
        console.log(`Salario Atualizado R$ ${(this.salario).toFixed(2)}`)
     }
}

const Empregado1 = new Empregado("Carlos","Cruz",18926.35)
console.log(Empregado1)
Empregado1.setsobrenome("Guimaraes")
console.log(`Sobrenome Alterado para ${Empregado1.getsobrenome()}`)
console.log(Empregado1)
Empregado1.Reajustasalario(10)
console.log()
const Empregado2 = new Empregado("Xavier","Almeida",5325.64)
console.log(Empregado2)
Empregado2.Reajustasalario(10)


// DESAFIO 03
// Cria uma classe chamada Complex para representar números complexos e escreva um programa para testá-la.
// 1. Escolha uma representação para os números complexos, usando a forma retangular ou a forma polar.
// 2. Forneça três construtores que permitam que objetos dessa classe sejam inicializados ao serem alocados na memória:
//    um construtor sem parâmetros que inicializa o objeto como zero
//    um construtor com um parâmetro representando a parte real; a parte imaginária será zero
//    um construtor com dois parâmetros representando as partes real e imaginária
// 3. Defina operações para obter a parte real, a parte imaginária, o módulo (valor absoluto) e o ângulo de um 
//    número complexo.
// 4. Forneça a operação para determinar o inverso aditivo de um número complexo.
// 5. Forneça as operações aritméticas básicas com números complexos: adição, subtração, multiplicação e divisão.
// 6. Forneça as operações relacionais que permitem comparar dois números complexos.
// 7. Defina a operação toString para converter um número complexo em string Utilize o formato (a,b), onde a é a 
//    parte real e b é a parte imaginária.
// 8. Escreva um aplicativo de teste que demonstra as capacidades da classe Complex.
