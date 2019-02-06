function encriptar(){
    let cipher = document.getElementById("string").value.toUpperCase();
    let n=Number(document.getElementById("offset").value);
    //let mensaje = window.cipher.encode(n, cipher);
    document.getElementById("result").value=window.cipher.encode(n, cipher);
}

document.getElementById("cipherButton").addEventListener("click", encriptar);

function desencriptar(){
    let cipher = document.getElementById("string2").value.toUpperCase();
    let n=Number(document.getElementById("offset2").value);
    //let mensaje = window.cipher.decode(n, cipher);
    document.getElementById("result2").value=window.cipher.decode(n, cipher);
}

document.getElementById("decipherButton").addEventListener("click", desencriptar);

function copyc() {
    let copyText = document.getElementById("result");
    copyText.select();
    document.execCommand("copy");
    } 
    document.getElementById("copyrc").addEventListener("click", copyc);


    function copyd() {
        let copyText = document.getElementById("result2");
        copyText.select();
        document.execCommand("copy");
        } 
        document.getElementById("copyrd").addEventListener("click", copyd);