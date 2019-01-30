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
    };
  console.log(encode(cipher,n));
  
  
  const decipher="BCD";
  const m=30;  // desplazamiento

  const decode=(decipher, m)=> {
  let letra="";
  for(let i=0; i<decipher.length; i++){ //Muestra 0 1 2 --->console.log(i);
      let numAs=decipher.charCodeAt(i); // Muestra 65 66 67 --->  console.log(numA);
      let decipherLetters= (numAs+65-m)%26+65; // Muestra 66 67 68 ---> console.log(cipherLetters) 
      letra+=String.fromCharCode(decipherLetters); //Muestra B C D --->console.log(letra);
       }
  return letra;
    };
  console.log(decode(decipher,m));