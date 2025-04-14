//Anonymous function
//IIFE - Immediatelly Invoked Function Expression (Garantir que determinados valores vão estar dentro de um escopo mais restrito)
(function (x, y, z){
    let A = 3
    console.log(`Result: ${x + y + z}`) 
    console.log(A) 
})(1, 2, 3); 


//O mais comum de se encontrar 
(function (x, y, z){
    let A = 300
    console.log(A) 
})();

//Funções Arrow (Padrão e em uma linha só)
(() => {
      console.log('arrow #01')
})();

(() => console.log('arrow #02'))();
