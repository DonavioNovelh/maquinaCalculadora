let n = '4x+2+4'
let agora=0;
let passato=0;


for (let index = 0; index < n.length; index++) {
    agora = n[index]
   if(agora=='X' || agora=='+' || agora=='X') {
        if(agora==passato) {
            console.log('Pronlemas de sina')
        } 
   }
    passato =agora
}