function limpiarCaja(){
    document.querySelector('#input_text').value='';
}

function Mayusculas(text){
    return [...text].some(caracter => caracter >= 'A' && caracter <= 'Z') ? 1:0;
}

function Acentos(text){
    let v2 = /[áéíóúÁÉÍÓÚñÑ]/;
    return v2.test(text) ? 1 : 0 ;
}

function encript(){
    var text = document.getElementById("input_text").value;
    //i es para que afecte tanto mayúsculas como minúsculas
    //g es para toda la línea u oración
    //m es para que afecte a multiples líneas o párrafos
    let palconmayuscula = Mayusculas(text);
    let palconacento = Acentos(text);
    if (palconmayuscula === 1 || palconacento === 1 ){
        const v3 = window.matchMedia("(max-width:425px)");
        if (v3.matches){
            alert(`Solo letras minúsculas y sin acentos`)
            limpiarCaja();
        }else{
            document.getElementById("h6").style.color="red";
            document.getElementById("h6").style.fontSize="14px";
            limpiarCaja();
        }
    } else if (text =="") {
        alert(`No se ha ingresado ninguna palabra.`)
    }else {
        var textencriptado = text.replace(/a/igm,"ai");
        textencriptado = textencriptado.replace(/e/igm,"enter");
        textencriptado = textencriptado.replace(/i/igm,"imes");
        textencriptado = textencriptado.replace(/o/igm,"ober");
        textencriptado = textencriptado.replace(/u/igm,"ufat");
        limpiarCaja();
        document.getElementById("img_niño").style.display = "none";
        document.getElementById("h3").style.display = "none";
        document.getElementById("texto1").innerHTML = textencriptado;
        document.getElementById("copiar").style.display = "inline-block";
        document.getElementById("copiar").style.textAlign="center";
    }
}

function desencript(){
    var text = document.getElementById("input_text").value.toLowerCase();
    //i es para que afecte tanto mayúsculas como minúsculas
    //g es para toda la línea u oración
    //m es para que afecte a multiples líneas o párrafos
    if (text==""){
        alert(`No se ha ingresado ninguna palabra.`)
    } else {
        var textencriptado = text.replace(/imes/igm,"i");
        textencriptado = textencriptado.replace(/ober/igm,"o");
        textencriptado = textencriptado.replace(/enter/igm,"e");
        textencriptado = textencriptado.replace(/ufat/igm,"u");
        textencriptado = textencriptado.replace(/ai/igm,"a");
        
        document.getElementById("img_niño").style.display = "none";
        document.getElementById("h3").style.display = "none";
        document.getElementById("texto1").innerHTML = textencriptado;
        document.getElementById("copiar").style.display = "inline-block";
        document.getElementById("copiar").style.textAlign="center";
    }
}

function copiar(){
    var content = document.querySelector("#texto1").textContent;
    navigator.clipboard.writeText(content).then(function() {
        alert("Texto copiado");
    }).catch(function(err) {
        console.error('Error al copiar: ', err);
    });
}