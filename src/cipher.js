//window.cipher = {
  const cipher="ABC"; //palabra a descifrar
  const n=1;  // desplazamiento
  //const divCipher=cipher.split(""); //Muestra ["A", "B", "C"] --->console.log(divCipher)
  //Muestra A B C --->console.log(divCipher[i]);
  const converter=(cipher, n)=> {
  for(let i=0; i<cipher.length; i++){ //Muestra 0 1 2 --->console.log(i);
      let numA=cipher.charCodeAt(i); // Muestra 65 66 67 --->  console.log(numA);
      let cipherLetters=(numA-65+n)%26+65; // Muestra 66 67 68 ---> console.log(cipherLetters) 
      let letra=String.fromCharCode(cipherLetters); //Muestra B C D --->
      console.log(letra);   
       }
    }
    
  console.log(converter(cipher,n));
  //prueba gitdavavsva
   
  //}
  //console.log(resultado);
  //console.log(resultado.join(""));
  
  
  
  
  /*
  function transformer(numASCII, n){
    for(i=0; i<=cipher.length-1; i++){
      let numASCII=cipher.charCodeAt(i); // Muestra 65 66 67 --->
      console.log(numASCII)
      let cipherLetters=(numASCII-65+n)%26+65; // Muestra 66 67 68 ---> console.log(cipherLetters) 
      let letra=String.fromCharCode(cipherLetters); //Muestra B C D ---> console.log(letra);
    }
  } 
  var resultado=divCipher.map(transformer);
  console.log(resultado); */