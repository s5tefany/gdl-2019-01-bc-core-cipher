//window.cipher = {
  const cipher="ABC"; //palabra a descifrar
  const n=1;  // desplazamiento
  //const divCipher=cipher.split(""); //Muestra ["A", "B", "C"] --->console.log(divCipher)
  //Muestra A B C --->console.log(divCipher[i]);

  const encode=(cipher, n)=> {
  let letra="";
  for(let i=0; i<cipher.length; i++){ //Muestra 0 1 2 --->console.log(i);
      let numA=cipher.charCodeAt(i); // Muestra 65 66 67 --->  console.log(numA);
      let cipherLetters=(numA-65+n)%26+65; // Muestra 66 67 68 ---> console.log(cipherLetters) 
      letra+=String.fromCharCode(cipherLetters); //Muestra B C D --->console.log(letra);
       }
  return letra;
    }
  console.log(encode(cipher,n));
  
  /*
  const decipher="BCD"
  const n=1;  // desplazamiento
  const encode=(cipher, n)=> {
  let letra="";
  for(let i=0; i<cipher.length; i++){ //Muestra 0 1 2 --->console.log(i);
      let numA=cipher.charCodeAt(i); // Muestra 65 66 67 --->  console.log(numA);
      let cipherLetters=(numA-65+n)%26+65; // Muestra 66 67 68 ---> console.log(cipherLetters) 
      letra+=String.fromCharCode(cipherLetters); //Muestra B C D --->console.log(letra);
       }
  return letra;
    }
  console.log(encode(cipher,n));*/