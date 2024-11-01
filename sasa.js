const button = document.querySelectorAll('td');
  const display = document.querySelector('.digitos');
  let operadores = document.querySelectorAll('.operadores');
  let operador = [];
  
  // Preenche o array de operadores com o texto de cada elemento com a classe 'operadores'
  operadores.forEach(el => {
      operador.push(el.textContent);
  });
  
  let primeiroDigito = 0;
  display.textContent = [];
  let ultimoDigito = 0;
  
  // Adiciona evento de clique para cada botão
  button.forEach(el => { 
    el.addEventListener('click', (pp) => {
        let ultimoDigito = display.textContent[display.textContent.length - 1];
        
        // Verifica se o botão clicado não é o de "igual"
        if (!el.classList.contains('igual')) {

            // Verifica se o display está vazio
            if (display.textContent.length >= 0) {
                // Se o botão pressionado é um número, adiciona ao display
                if (!isNaN(el.textContent)) {
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
            console.log(ultimoDigito);
            console.log(el.classList.contains('operadores'));
        }

        else {
            if(display.textContent!=0) {
                if (ul) {
                    display.textContent = Math.round(Math.floor(Number(eval(display.textContent))))

                }
            }
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
