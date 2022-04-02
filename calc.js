var numero1=''
var numero2=''
var ope=''
var resp=''

//adicina e concatena os digitos
function dig(num) {
    numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero +num;
}

//seleciona a operação salva o primeiro numero e operação e limpa o visor para receber o segundo numero 
function op(oper) {
    if (oper == 'adi','div','mul','sub') {
        numero1 = document.getElementById('visor').innerHTML;
        console.log(numero1)
        ope = oper
        console.log(oper)
        document.getElementById('visor').innerHTML=''
    }
}

//salva o segundo numero, define e realiza a operação e apresenta o resultado no visor
function calc() {
    numero2 = document.getElementById('visor').innerHTML;
    console.log(numero2);
    
    if (ope == 'adi') {
        resp=(Number(numero1)+Number(numero2));
        console.log(resp)
        document.getElementById('visor').innerHTML=resp;
    }
    if (ope == 'div') {
        resp=(Number(numero1)/Number(numero2));
        console.log(resp)
        document.getElementById('visor').innerHTML=resp;
    }
    if (ope == 'mul') {
        resp=(Number(numero1)*Number(numero2));
        console.log(resp)
        document.getElementById('visor').innerHTML=resp;
    }
    if (ope == 'sub') {
        resp=(Number(numero1)-Number(numero2));
        console.log(resp)
        document.getElementById('visor').innerHTML=resp;
    }
}

// func para limpar var o visor
function limpar() {
    location.reload();
}
//func para apagar apenas o ultimo numero digitado no visor
function voltar() {
    var res=document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML =res.substring(0, res.length -1)
}