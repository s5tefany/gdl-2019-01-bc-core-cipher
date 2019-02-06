function encriptar(){
    let cipher = document.getElementById("string").value.toUpperCase();
    let n=Number(document.getElementById("offset").value);
    //let mensaje = window.cipher.encode(n, cipher);
    document.getElementById("result").value=window.cipher.encode(n, cipher);
<<<<<<< HEAD
    }
=======
} 
>>>>>>> master

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
<<<<<<< HEAD
    } 
=======
} 
>>>>>>> master
document.getElementById("copyrc").addEventListener("click", copyc);


function copyd() {
<<<<<<< HEAD
    let copyText = document.getElementById("result2");
    copyText.select();
    document.execCommand("copy");
    } 
=======
        let copyText = document.getElementById("result2");
        copyText.select();
        document.execCommand("copy");
} 
>>>>>>> master
document.getElementById("copyrd").addEventListener("click", copyd);