
var auxiliar ="";
var mensagemEncriptada ='';
var mensagemDecriptada = '';
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
function filtraMensagem(str){
	var frase = str;
	frase = frase.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
	frase = frase.toLowerCase().replace(/[^a-z\s]/g,"");
	return frase;
}
function decriptar(){
	mensagemDecriptada = mensagemEncriptada.replace(/ai/gi, 'a');
	let temp = mensagemDecriptada.replace(/enter/gi, 'e');
	mensagemDecriptada = temp.replace(/imes/gi, 'i');
	temp = mensagemDecriptada.replace(/ober/gi, 'o');
	mensagemDecriptada = temp.replace(/ufat/g, 'u');
	let div = document.querySelector('#botaoCopiar');
	resolucao.removeChild(div);
	let resposta = document.querySelector('#resposta');
	resposta.value = mensagemDecriptada;
}
function encriptar(){
	let msg = textoDigitado.value;
	msg = filtraMensagem(msg);
	let resposta = document.querySelector('#resposta');
	for (var i = 0; i < msg.length;i++){
			if(ehvogal(msg.charAt(i)) ){
				mensagemEncriptada+= codificaVogal(msg[i]);	
			}else{
				mensagemEncriptada += msg[i]
			}	
	}	
	textoDigitado.value = "";
	resolucao.removeChild(img);
	resolucao.removeChild(p);
	resposta.textContent = mensagemEncriptada;
}
var textoDigitado = document.getElementById('input');
var btncriptografar = document.querySelector('#btncodifica');
let btndescriptografar = document.getElementById('btndescodifica');
let resolucao = document.querySelector('#espacoResposta');
let img = document.querySelector('#pesquisa');
let p = document.querySelector('section p');
btncriptografar.onclick = encriptar;
btndescriptografar.onclick = decriptar;
let btnCopiar = document.querySelector('#btncopiar');
	btncopiar.addEventListener("click",function(){
	document.getElementById('resposta').select();
	document.execCommand('copy');
	//resolucao.removeChild('#resposta');
	document.getElementById('resposta').value = "";
	//resolucao.removeChild('button');
	btncopiar.style.display = ('none');
	textoDigitado.focus();
	btncriptografar.style.display = ('none');
})