import readline from 'readline-sync';
//1-Crie uma funçaõ chamada saudação que exiba a mensagem "Olá, mundo !" no console quando for chamada.

// function exibirSaudacao1(): void {
//     console.log("Olá Mundo !"); 
//  }
 
//  exibirSaudacao1()

// //outra 
 
//  let mensagem="Carlos";

// function exibirSaudacao2(mens: string): void {
//    console.log(`Bom dia ${mens} !`); 
// }

// exibirSaudacao2(mensagem)


// //outra


// let mensagem1: string = readline.question(`Digite seu nome - `)
// let diahoje: number | undefined = readline.questionInt(`Digite a dia do mes - `)
// let meshoje: number | undefined = readline.questionInt(`Digite o mes (1 a 12) - `)



// function exibirSaudacao3(mens: string, dia: number | undefined,mes: number | undefined) {
//    console.log(`Bom dia ${mens} hoje é ${dia}/${mes} !`); 
// }

// exibirSaudacao3(mensagem1,diahoje,meshoje)


//2-Escreva uma função chamada dobro que aceite um parametro num e exiba o dobro deste numero na console


// let num2: number | undefined = readline.questionInt(`Digite um número - `)

// function calcularDobro(num: number | undefined): void {
//    console.log(`O dobro de ${num} é ${(num*2)}`); 
// }

// calcularDobro(num2)

/*3-Crie uma funçao chamada mostrarNumeros que receba dois parametros, inicio e fim.
    Essa função deve exibir todos os numeros inteiros no intervalo de inicio e fim
    (inclusive), no console */

// let inicio: number = readline.questionInt(`Digite um numero inicial - `)
// let final: number= readline.questionInt(`Digite um numero final - `)

// function mostrarNumeros(inic,fim) {  
    
//    while (inic <= fim) {  
//        console.log(inic)
//        inic == ++inic
//    }
// }

// mostrarNumeros(inicio,final)

/*4-Escreva uma função chamada verificarPar que aceite um número como entrada
    e exiba no console se o número é par ou não*/

    // let num4: number =readline.questionInt(`Digite um numero - `)
    
    // function verificarPar(num: number): void {  
    
    //    if (num%2==0) {  
    //        console.log(`o número ${num} é PAR`)
    //    } else {
    //        console.log(`o número ${num} é IMPAR`);
    //    }
    // }
    
    // verificarPar(num4)

/*5-Crie uma função chamada imprimirLista que aceite um array como parametro
    e que exiba cada elemento desse array no console, um por um*/

        // const meuArray: Array<string> =["1","2","E","D"]

        // function imprimirLista(array: Array<string>) {  
        //     let tam=array.length-1
            
        //     for (let ind=0; ind<=tam; ++ind) {
        //        console.log(array[ind])
        //     }
               
        // }
        
        // imprimirLista(meuArray)

/*6-Escreva uma função chamada calcularMedia que receba um array de números como parâmetro 
    e calcule a média desses números. Não é necessário exibir o resultado, apenas retorne o valor da média. */

    // const meuArray6: Array<number> = []
    // let num6: number , fim6: string
    
    // //Pede ao usario que digite os itens a serem incluidos um a um 
    // do {
    //     fim6 = readline.question('Digite "*" para encerrar ou enter para continuar - ')
    //     if (fim6 == "*" ){
    //         break
    //     }
    //     num6 = parseInt(readline.question('Digite um numero a ser incluido - '))
    //     meuArray6.push(num6)
    // } while (fim6 !='*');
        
    // console.log(meuArray6)
    
    // //calcula o amanho do array e se tamanho maior que Zero, chama a função para calcular a média.
    // let tam6: number = meuArray6.length
    // if (tam6 >1){
    //     calcularMedia(meuArray6,tam6)
    //     }
    
    // // define função que calcua a média e divulga o resultado
    // function calcularMedia(array: Array<number>,tam: number): void {  
    //             let soma: number =array.reduce(function(acumulado: number,atual: number){
    //                 return acumulado+atual;
    //             })
    //             let media: number =soma/tam
    //             console.log(`Média - ${media.toFixed(2)}`)
    // }
  
/*7-Crie uma função chamada maiorNumero que receba um array de números como parâmetro e exiba o maior número 
    presente no array no console.*/

    // let meuArray7: Array<number> = [1,2,10,8,25,23]

    // function valorMaximo(array: Array<number>): void { 
    //     //usa a função (método ?) Math.Max() para descobrir o maior valor do array
    //     let maximo: number = Math.max(...array)
    //     console.log(meuArray7)
    //     console.log(`O maior valor deste array é ${maximo}`)
    // }
                   
    // valorMaximo(meuArray7)

/*8-Escreva uma função chamada contarVogais que aceite uma string como parâmetro e conte quantas 
    vogais (a, e, i, o, u) ela contém. Exiba o resultado no console.*/

//  //Pede ao usuário para digitar qualquer frase

//  let frase8: string = readline.question('Digite uma frase qualquer em minusculas e sem acento - ')
 
// // converte todas as letras para minusculas 
//  let fraseconvert8: string = frase8.toLowerCase()
 
// // separa todos os acentos
//  let frasenormalizada8: string = fraseconvert8.normalize("NFD")
 
// //Funcão para contar as letras usando split
//  function contaLetras(frase: string,letra: string ): void {

//      let ocorrencias = frase.split(letra).length -1
//      console.log(`Nesta frase a letra '${letra}' aparece ${ocorrencias} vezes`)
//  } 

// //chama a função contaLetras para cada vogal    
//  contaLetras(frasenormalizada8,"a")
//  contaLetras(frasenormalizada8,"e")
//  contaLetras(frasenormalizada8,"i")
//  contaLetras(frasenormalizada8,"o")
//  contaLetras(frasenormalizada8,"u")
 


/*9-Crie uma função chamada imprimirTabuada que aceite um número como entrada e exiba a tabuada desse número 
    de 1 a 10 no console.*/

    // let operacao: string= readline.question('Digite o Tipo de Operação (+ ,- ,/ , *) - ')
    // let tabDe: number = parseInt(readline.question('Digite o numero base para a Tabuada - '))
    
    
    // function imprimirTabuada(tab: number,op: string,ct: number): void {
    //     switch (op){
    //         case "+" :
    //            console.log(`${tab} ${op} ${ct} = ${tab+ct}`)
    //            break
    //         case "-" :
    //             console.log(`${tab} ${op} ${ct} = ${tab-ct}`)
    //            break
    //         case "/" :
    //             console.log(`${tab} ${op} ${ct} = ${tab/ct}`)
    //            break
    //         case "*" :
    //             console.log(`${tab} ${op} ${ct} = ${tab*ct}`)
    //             break
    //         default :
    //             console.log(`Operação inválida - "${op}"`)
    //             let cont=11
    //     }
        
    // }
    
    // for (let cont=1; cont<=10; ++cont){
    //         imprimirTabuada(tabDe,operacao,cont)
    // }
 
/*10-Escreva uma função chamada verificarPrimo que receba um número como parâmetro e exiba no console se o 
     número é primo ou não.*/

 /* 
 //Verifique se um número é primo.

let num10= parseInt(readline.question(`digite um número inteiro para verificarmos se ele é um numero primo - `))

function verificarPrimo(num){
    let cont=0, div=2
    do {
        if (num%div==0) {
            cont= ++cont;    }
            div= ++div;  
    }  while (div<num && cont==0);
    if (cont !=0){
        console.log(num,'não é um numero primo')
        
    }
    else {
        console.log(num,'é um número primo')
        
    }
}

verificarPrimo(num10)


// VALORES PADRÂO ********

/*
1-Crie uma função chamada saudacao que aceita um parâmetro nome para uma pessoa e exiba no console 
a saudação "Olá, [nome]!" utilizando um valor padrão para nome caso nenhum seja fornecido.
*/

/*
function exibirSaudacao(nome,saudacao="Hello"){
    console.log(`${saudacao} ${nome} !!!`)
}
let aluno="José"
let msg="Bom dia"

exibirSaudacao(aluno)
// exibe Hello José !!!

exibirSaudacao(aluno,msg)
// exibe Bom dia José !
*/


/*
2-Escreva uma função chamada calculadora que receba dois números (num1 e num2) e um operador matemático (operacao) 
como parâmetros. A função deve realizar a operação matemática entre 
num1 e num2 (por exemplo, adição, subtração, multiplicação, divisão) com um valor padrão de operação sendo "+".

/*
const readline = require("readline-sync")
    let operacao= readline.question('Digite o Tipo de Operação (+ ,- ,/ , *) - ')
    let num01 = parseInt(readline.question('Digite o 1° número - '))
    let num02 = parseInt(readline.question('Digite o 2° número - ')) 
    
    function imprimirTabuada(num1,op='+',num2){
        switch (op){
            case "+" :
               console.log(`${num1} ${op} ${num2} = ${num1+num2}`)
               break
            case "-" :
               console.log(`${num1} ${op} ${num2} = ${num1-num2}`)
               break
            case "/" :
               console.log(`${num1} ${op} ${num2} = ${num1/num2}`)
               break
            case "*" :
               console.log(`${num1} ${op} ${num2} = ${num1*num2}`)
                break
            default :
               console.log(`operação invalida`)
                
        }
        
    }
    
imprimirTabuada(num01,operacao,num02)

*/

/*
3-Crie uma função chamada contagemRegressiva que aceite um parâmetro inicio para iniciar a contagem regressiva. 
A função deve exibir no console uma contagem regressiva a partir do número fornecido até 1, utilizando um valor 
padrão de início igual a 10.

/*
function contagemRegressiva(start="10"){
    for (cont=start; cont>=0; cont--){
        console.log(cont)
    }
}
    
 let st=15 
 
contagemRegressiva()   
contagemRegressiva(st)
*/

/*
1-Escreva uma função chamada apresentacao que aceite três parâmetros: nome, idade e profissao. 
A função deve exibir no console uma mensagem de apresentação no formato "Olá, eu sou [nome],
tenho [idade] anos e sou [profissao].", utilizando valores padrão para os parâmetros caso nenhum seja fornecido. 
*/

/*
const readline = require("readline-sync")
 let nome = readline.question('Digite seu nome -')
 let idade = readline.question('Digite sua idade -')
 let profissao = readline.question('Digite sua profissão - ')
 
 function apresentacao(nom="Fulano",id="16",prof="estudante"){
     console.log(`Meu nome é ${nom}, tenho ${id} anos e sou ${prof}`)
 }
 
 apresentacao(nome,idade,profissao)
 apresentacao(nome,idade)
 apresentacao(nome)
 apresentacao()
*/


/*
2-Crie uma função chamada mensagemPersonalizada que receba um parâmetro texto para uma mensagem e 
um parâmetro estilo para o estilo da mensagem (por exemplo, "normal", "negrito", "itálico"), com 
um valor padrão de estilo sendo "normal". A função deve exibir no console o texto fornecido com o 
estilo especificado.
/*
/*
const readline = require("readline-sync")
let texto = readline.question('Digite o texto - ')
let estilo = readline.question('Digite o estilo desejado (normal, negrito ou itálico) - ')

 function mesagemPersonalizada(msg,est="normal"){
     console.log(`O texto "${msg}" está em estilo ${est}`)
 }
 
 mesagemPersonalizada(texto,estilo)
 mesagemPersonalizada(texto)
*/


/*****Funçoes com Return */

//Exercício Avulso
/*
function criarMensagemDeSaudacao(nome,saudacao='Hello'){
    const mensagem = `${saudacao} ${nome}`
    return mensagem;
    
}

let mensagemDeSaudacao= criarMensagemDeSaudacao("Ana")
console.log(mensagemDeSaudacao)

mensagemDeSaudacao= criarMensagemDeSaudacao("Ana","Bom dia")
console.log(mensagemDeSaudacao)
*/

/* SLIDES LPM01A05 sl 39
1-Crie uma função chamada somar que aceite dois números como parâmetros e retorne a soma deles.


const readline = require("readline-sync")
let num1 = parseInt(readline.question('Digite um número inteiro - '))
let num2 = parseInt(readline.question('Digite outro número inteiro - '))

function somaNumeros(n1,n2){
    let soma=n1+n2
    return soma;
}

console.log(`${num1}+${num2}=${somaNumeros(num1,num2)}`)


2-Escreva uma função chamada ehPar que aceite um número como parâmetro e retorne true se o número for par 
e false caso contrário.


const readline = require("readline-sync")
let num = parseInt(readline.question('Digite um número inteiro - '))
let resp
function ehPar(n){
    return n%2==0;
}

if (ehPar(num)){
    resp=`${num} é par`
    }else{
        resp=`${num} é impar`
    }
   
console.log(resp)


3-Crie uma função chamada maiorNumero que receba três números como parâmetros e retorne o maior deles.
##### NÃO ESTÁ FUNCIONANDO ####

/*
const readline = require("readline-sync")
let num1 = parseFloat(readline.question("Digite o 1° número inteiro - "))
let num2 = parseInt(readline.question("Digite o 2° número inteiro - "))
let num3 = parseInt(readline.question("Digite o 3° número inteiro - "))

const entrada=[num1,num2,num3]

function maiorNumero(ent){
    return (maior=Math.max.apply(null,ent))
}

console.log(`o maior numero é ${maiorNumero(entrada)}`)
*/

/*
4-Escreva uma função chamada calcularIMC que receba o peso e a altura de uma pessoa como parâmetros e 
retorne o índice de massa corporal (IMC) calculado.
*/


/*
const leiauser = require("readline-sync")
let peso = parseFloat(leiauser.question("Digite o seu peso exato - "))
let altura = parseFloat(leiauser.question("Digite o sua altura exata em metros - "))

function calcularIMC(pes,alt){
    return (IMC=pes/(alt^2))
}

console.log(`o seu peso é ${peso}, altura ${altura} e seu IMC é ${calcularIMC(peso,altura).toFixed(1)}`)
*/


