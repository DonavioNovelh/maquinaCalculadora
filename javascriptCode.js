const button = document.querySelectorAll('td');
var display = document.querySelector('.digitos');
var displayBack = document.querySelector('.display');

var sonZ = document.querySelector('.bt');
  
    sonZ.addEventListener('click', ()=> {
    sonZ.classList.add('centro')



  })
/*let operadores = document.querySelectorAll('.operadores');
  
  let operador = [];
  
  // Preenche o array de operadores com o texto de cada elemento com a classe 'operadores'
  operadores.forEach(el => {
      operador.push(el.textContent);
  });
  
  let primeiroDigito = 0;
  display.textContent = [];
  let ultimoDigito = 0;
  var fontS = 0;
  
 

  //console.log(display1.clientWidth)

  
  // Adiciona evento de clique para cada botão
  button.forEach(el => { 
    el.addEventListener('click', (pp) => {
    

           
           
         
    //  console.log(display.offsetWidth)
      //  console.log("letra"+ display.width)
      //  console.log(" back"+ displayBack.width)
        let ultimoDigito = display.textContent[display.textContent.length - 1];
        
        
        // Verifica se o botão clicado não é o de "igual"
        if (!el.classList.contains('igual')) {
            if(display.textContent.length==0) display.style.fontSize='48px';
            // Verifica se o display está vazio
            if (display.textContent.length >= 0) {
                
                // Se o botão pressionado é um número, adiciona ao display
                if (!isNaN(el.textContent)) {
                    display.style.color = 'yellow';
                    display.textContent += el.textContent;
                }

                else if (el.classList.contains('operadores')) {
                // Adiciona o operador ao display somente se o último caractere não for um operador
                if (!operador.includes(ultimoDigito)) {
                    display.textContent += el.textContent;
                }
            } 

              else if (el.textContent=='RESET') {
                  display.textContent = '';
              }

              else if (el.textContent=='DEL') {
                  var dona =display.textContent.substring(0, display.textContent.length-1)
                  display.textContent = '';

                  display.textContent = dona;
                }
            }
            // Verifica se o botão clicado é um operador
            
            // Caso contrário, adiciona o conteúdo do botão ao display
           

            // Para fins de depuração, mostra o último dígito e se o botão possui a classe "operadores"
            
        }

        else if (el.classList.contains('igual')){
            if(display.textContent.length!=0) {
                if (!operador.includes(ultimoDigito)) {
                    var d = display.textContent.replace('X', '*')
                 
                    display.textContent = Math.round(Math.floor(Number(eval(d))))
                    display.style.color = '#00FFAB';
                  
                   

                }
            }
        }

        if(display.textContent.includes('X')) {
            display.textContent=display.textContent.replaceAll('X', '*')
            
        }
    });
});



  
  /* Código adicional comentado para futuros ajustes
  button.forEach(el => {
      el.addEventListener('click', () => {
          if(el.classList.contains('num') && display.textContent.length == 0) {
              if(el.textContent == 'RESET') {
                  reset();
              } else if (primeiroDigito) {
                  display.textContent += el.textContent;
              }
              primeiroDigito = el.classList.contains;
          }
      });
  });
  
  function reset() {
      display.textContent = 0;
  }
  */

 