
var auxiliar ="";
var mensagemEncriptada ='';
var mensagemDecriptada = '';
function imprimeNaTela(msg){
	document.write('<h1>'+ msg + '</h1>');
}
function ehvogal(letra){
	if((letra === 'a')||(letra ==='e')||(letra === 'i')||(letra === 'o')||(letra ==='u')){
			return 1;
		}else{
			return 0;
		}
	}
function codificaVogal(vogal){
	if (vogal === 'a'){
		return 'ai';	
	}else if(vogal === 'e'){
		return 'enter';
	}else if (vogal === 'i'){
		return 'imes';
	}else if (vogal === 'o'){
		return'ober';
	}else{
		return 'ufat';
	}
}
function decriptar(){
	mensagemDecriptada = mensagemEncriptada.replace(/ai/g, 'a');
	let temp = mensagemDecriptada.replace(/enter/g, 'e');
	mensagemDecriptada = temp.replace(/imes/g, 'i');
	temp = mensagemDecriptada.replace(/ober/g, 'o');
	mensagemDecriptada = temp.replace(/ufat/g, 'u');
	return document.write(mensagemDecriptada);
}
function encriptar(){
	let msg = textoDigitado.value;
	for (var i = 0; i < msg.length;i++){
			if(ehvogal(msg.charAt(i)) ){
				mensagemEncriptada+= codificaVogal(msg[i]);	
			}else{
				mensagemEncriptada += msg[i]
			}	
		}	
}
let textoDigitado = document.getElementById('textoDeEntrada');
let btncriptografar = document.getElementById('btncodifica');
let btndescriptografar = document.getElementById('btndescodifica');
btncriptografar.onclick = encriptar;
btndescriptografar.onclick = decriptar;