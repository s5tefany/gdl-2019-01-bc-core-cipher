window.cipher = {
  
  encode: function cifrar (n, cipher) {
    let letra="";
    for(let i=0; i<cipher.length; i++){ //Muestra 0 1 2 --->console.log(i);
        let numA=cipher.charCodeAt(i); // Muestra 65 66 67 --->  console.log(numA);
        let cipherLetters=(numA-65+n)%26+65; // Muestra 66 67 68 ---> console.log(cipherLetters);
        letra+=String.fromCharCode(cipherLetters); //Muestra B C D --->console.log(letra);
      }
     return letra;
  },
  
  decode: function descifrar (n, cipher) {
    let letra="";
    for(let i=0; i<cipher.length; i++){ //Muestra 0 1 2 --->console.log(i);
        let numAs=cipher.charCodeAt(i); // Muestra 65 66 67 --->  console.log(numA);
        let decipherLetters= (numAs+65-n)%26+65; // Muestra 66 67 68 ---> console.log(cipherLetters) 
        letra+=String.fromCharCode(decipherLetters); //Muestra B C D --->console.log(letra);
      }
    return letra;
    },
  };
