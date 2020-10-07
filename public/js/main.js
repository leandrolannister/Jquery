var campo = $('.campo-digitacao');

$(document).ready(function(){
  
  count();
  countTempo();
  
  $('#bnt-restart').click(function(){
    restarGame();
  });  

  totalFrase($('#frase').text());
});


function count(){
  campo.on('input', function(){

     $('#count-words').text(
       campo.val().split(/\S+/).length -1);

     $('#count-caracter').text(
       campo.val().length);   
  });
}  

function countTempo(){
  campo.one('focus', function(){  
    let timer = $('#timer').text();

    let cronos = setInterval(function(){
    
      $('#timer').text(timer--);  
    
      if(timer < 0){
        clearInterval(cronos);
        finalizaJogo();
      } 
    }, 1000);
  });
}

function finalizaJogo(){
  campo.attr("disabled", true);
  campo.toggleClass("campo-desativado"); 
  insertPlacar();  
}  

function restarGame(timer = 3){
  campo.attr("disabled", false);
  campo.val('');
  campo.toggleClass('campo-desativado');
  campo.removeClass('borda-verde');
  campo.removeClass('borda-vermelha');
  
  $('#count-words').text(0);   
  $('#count-caracter').text(0);  
  
  atualizaTempo(timer); 

  mudarFrase();
  
  countTempo();   
}

function atualizaTempo(tempo){
  $('#timer').text(tempo) ;  
}

campo.on('input', function(){
  let frase = $('#frase').text();   
  let comparar = frase.substr(0, campo.val().length);

  let ehIgual = (comparar == campo.val());  
  campo.toggleClass('borda-verde', ehIgual);
  campo.toggleClass('borda-vermelha', !ehIgual);
  
});

function totalFrase(frase){
  $('#totalFrase').text(frase.length);
}