/* Funcionalidades básicas JS 
variaveis
alert
console.log
.replace
.toUpperCase e .toLowerCase
concatenação e operações básicas matemáticas.
*/

/*
var nome = "Thiago Nicolas";
var idade = 19;
var idade2 = 10;
var frase = "Japão é o melhor pais do mundo"
var teste = "Testando";
var n1 = 5;
var n2 = 3;
alert(nome + " Tem " + idade + " anos.")

alert(idade+idade2);

console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase())
console.log(teste.toLowerCase())
console.log(n1 * n2)
alert(frase.replace("Japão","Brasil")); 
dicionário e junção de dicionário e array
*/

/* Funcionalidades do JS
Arrays e Dicionário
.push
.pop
.length = mostra quantos itens contem na array
.reverse()
.toString() = transformar valores de em string
.join() = transforma em string e muda tmb a virgula das arrais .
*/

//var lista = ["Maça","pêra","Laranja"];
//lista.push("uva")
//console.log(lista[3])
//console.log(lista.join(" | "))
//console.log(lista.toString()[0])
//console.log(lista.reverse())
//lista.pop();
//console.log(lista.length)
//alert(lista[1])

/*var fruta = {nome:"Maça", cor:"vermelha "}
console.log(fruta.nome)
console.log(fruta.cor)*/

//var fruta = [{nome:"Maça", cor:"vermelha",},{nome:"Uva", cor:"roxa"}]
//console.log(fruta.nome)
//console.log(fruta)
//alert(fruta[0].nome)
//alert(fruta[0].cor) // exibir um item dentro do dicionário


/* Funcionalidades do JS
if{}else{}
prompt("") = dentro de uma variavel, para pedir o valor através do navegador.
while (condição) {
	ação
}
for (var i = 0; i < Things.length; i++) {
	Things[i]
}
new Date() na variavel
*/


//var idade = 18;
/*var idade = prompt("Qual sua idade? ")
if (idade >= 18) {
	alert("Maior de idade")
}else{
	alert("Menor de idade")
}
*/

/*
var count = 0
while (count <= 5){
	console.log(count);
	alert(count)
	count++;
}
*/

/*
var count;
for (var count = 0; count <= 5; count++) {
	console.log(count)
}
*/

/*
var d = new Date();
alert(d.getMonth())
alert(d.getHours())
*/

/* Biblioteca do JS
function

*/

/* function soma(n1, n2) {
	return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
	 return frase.replace(nome, novo_nome)
}

function validaIdade(idade){
	var validar;
	if (idade >= 18){
		validar = true
	}else{
		validar = false
	}
	return validar;
}

var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade))
*/

function clicou(){
	document.getElementById("agradecimento").innerHTML = "<hr>Obrigado por Clicar";
	//console.log(document.getElementById("agradecimento"))
	//alert("Obrigado Por clicar");
}

function redirecionar(){
	window.open("https://github.com/Vajean1/aula_javascript")
	//window.location.href = "https://github.com/Vajean1/aula_javascript"
}

function trocar(elemento){
	elemento.innerHTML = "Obrigado por passar o mouse"
	//document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse"
	//console.log(document.getElementById("mouseover"))
	//alert("Trocar texto");
}

function voltar(elemento){
	//document.getElementById("mouseover").innerHTML = "Passe o mouse aqui"
	elemento.innerHTML = "Passe o Mouse"
}

function load(){
	alert ("Página carrega")
}

function funcaoChange(elemento){
	console.log(elemento.value)
}



