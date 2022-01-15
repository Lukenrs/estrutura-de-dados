let idade = 19
let humano = true
let aniversario = "outubro"
let nome = "Luiz"
let sobrenome = "Kennedy"
if(idade>18){
    console.log("uau, você tem mais que 18 anos")
}else{
    console.log("você tem 18 anos, ou menos")
}

if(idade>18 && humano==true){
    console.log("Saiu o teste: Infelizmente você é humano, pra piorar ainda é maior de idade")
}
else{
    console.log("Pane no sistema")
}

if((aniversario=="janeiro") || (aniversario=="dezembro")){
        console.log("Parabénsss uhhuuuu")
}
else{
    console.log("Você não faz aniversário em janeiro, nem dezembro")
}
if(nome[0]=="R"){
    console.log("Parabéns, seu nome começa com R")
}
else{
    console.log("Seu nome não começa com 'R', amigão")
}
if(nome[0]=="E" || sobrenome.length==6){
    console.log("Quer um suquinho? hmmmmmmm")
}
else{
    console.log("Não vou te dar suquinho >:P")
}