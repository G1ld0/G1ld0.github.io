const textoEntrada = document.querySelector(".textoEntrada");
const textoSaida = document.querySelector(".textoSaida");

function btnEncripitar(){
    textoSaida.style.backgroundImage = "none";
    textoSaida.value = encriptar(textoEntrada.value);
    textoEntrada.value = "";
}

function encriptar(stringEncriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencripitar(){
    textoSaida.style.backgroundImage = "none";
    textoSaida.value = desencriptar(textoEntrada.value);
    textoEntrada.value = "";
}

function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada=stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnCopiar(){
    textoSaida.select();
    document.execCommand("copy");
}