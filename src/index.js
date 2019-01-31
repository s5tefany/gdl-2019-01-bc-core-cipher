function encriptar(){
    let cipher = document.getElementById("string").value.toUpperCase();
    let n=Number(document.getElementById("offset").value);
    //let mensaje = window.cipher.encode(n, cipher);
    document.getElementById("result").value=window.cipher.encode(n, cipher);
}

document.getElementById("cipherButton").addEventListener("click", encriptar);

function desencriptar(){
    let cipher = document.getElementById("string").value.toUpperCase();
    let n=Number(document.getElementById("offset").value);
    //let mensaje = window.cipher.decode(n, cipher);
    document.getElementById("result").value=window.cipher.decode(n, cipher);
}

document.getElementById("decipherButton").addEventListener("click", desencriptar);


