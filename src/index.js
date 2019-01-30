function encriptar(){
    let cipher = document.getElementById("string").value.toUpperCase();//ok
    let n=Number(document.getElementById("offset").value);//ok
    let mensaje = window.cipher.encode(cipher,n);
    document.getElementById("result").innerHTML=mensaje;
}
document.getElementById("cipherButton").addEventListener("click", encriptar);

function desencriptar(){
    let cipher = document.getElementById("string").value.toUpperCase();
    let n=Number(document.getElementById("offset").value);
    let mensaje = window.cipher.decode(cipher,n);
    document.getElementById("result").innerHTML=mensaje;
}

document.getElementById("decipherButton").addEventListener("click",desencriptar);


