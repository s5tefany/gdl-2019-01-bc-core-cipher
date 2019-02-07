window.cipher = {
  
  encode:
      function cifrar (n, cipher) {
      let letra="";
      for(let i=0; i<cipher.length; i++){ //Muestra 0 1 2 --->console.log(i);
          let numA=cipher.charCodeAt(i); // Muestra 65 66 67 --->  console.log(numA);
            if (n>=65&&n<=90){
              let cipherLetters=(numA-65+n)%26+65; // Muestra 66 67 68 ---> console.log(cipherLetters);
              letra+=String.fromCharCode(cipherLetters); //Muestra B C D --->console.log(letra);
            } else if (n>=97&&n<=122) {
              let cipherLetters=(numA-97+n)%26+97; 
              letra+=String.fromCharCode(cipherLetters); 
            } else {
              letra+=String.fromCharCode(numA);
            }
        }
      return letra;
      },
  
  decode: 
  function descifrar (n, cipher) {
    let letra="";
    for(let i=0; i<cipher.length; i++){ //Muestra 0 1 2 --->console.log(i);
        let numAs=cipher.charCodeAt(i); // Muestra 65 66 67 --->  console.log(numA);
        let decipherLetters= (numAs+65-n)%26+65; // Muestra 66 67 68 ---> console.log(cipherLetters) 
        letra+=String.fromCharCode(decipherLetters); //Muestra B C D --->console.log(letra);
      }
    return letra;
    }
  };


  /*para ENDOCE abcdefgh 
  
n=33;
cipher="abcdefghjlmnopqrstuvwxyz";
console.log(cipher);
let letra="";
    for(let i=0; i<cipher.length; i++){ //Muestra 0 1 2 --->console.log(i);
       let numA=cipher.charCodeAt(i); // Muestra 65 66 67 --->  console.log(numA);
       let cipherLetters=(numA-97+n)%26+97; // Muestra 66 67 68 ---> console.log(cipherLetters);
       letra+=String.fromCharCode(cipherLetters); //Muestra B C D --->console.log(letra);
      }
 console.log(letra);*/

 
  /*para DECODE abcdefgh   
n=33;
decipher="hijk";
console.log(decipher);
let letra="";
    for(let i=0; i<decipher.length; i++){ //Muestra 0 1 2 --->console.log(i);
       let numA=decipher.charCodeAt(i); // Muestra 65 66 67 --->  console.log(numA);
       let decipherLetters=(numA+59-n)%26+97; // Muestra 66 67 68 ---> console.log(cipherLetters);
       letra+=String.fromCharCode(decipherLetters); //Muestra B C D --->console.log(letra);
      }
 console.log(letra);*/ 
