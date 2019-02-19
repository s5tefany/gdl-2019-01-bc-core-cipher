window.cipher = {
  
  encode:
      function cifrar (n, cipher) {
      if (n<0){
        return window.cipher.decode(n*-1, cipher);
      }
        let letra="";
        for(let i=0; i<cipher.length; i++){ //Muestra 0 1 2 --->console.log(i);
            let numA=cipher.charCodeAt(i); // Muestra 65 66 67 --->  console.log(numA);
              if (numA>=65&&numA<=90){
                let cipherLetters=(numA-65+n)%26+65; // Muestra 66 67 68 ---> console.log(cipherLetters);
                letra+=String.fromCharCode(cipherLetters); //Muestra B C D --->console.log(letra);
              } else if (numA>=97&&numA<=122) {
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
    if (n<0){
      return window.cipher.encode(n*-1, cipher);
    }
      let letra="";
      for(let i=0; i<cipher.length; i++){ //Muestra 0 1 2 --->console.log(i);
          let numA=cipher.charCodeAt(i); // Muestra 65 66 67 --->  console.log(numA);
            if (numA>=65&&numA<=90){
              let cipherLetters=(numA+65-n)%26+65; // Muestra 66 67 68 ---> console.log(cipherLetters);
              letra+=String.fromCharCode(cipherLetters); //Muestra B C D --->console.log(letra);
            } else if (numA>=97&&numA<=122) {
              let cipherLetters=(numA+59-n)%26+97; 
              letra+=String.fromCharCode(cipherLetters); 
            } else {
              letra+=String.fromCharCode(numA);
            }
        }
      return letra;
      }
  };


