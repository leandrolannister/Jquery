
$('#bnt-shuffle').click(function(){
  mudarFrase();
});

function mudarFrase(){
	
  $('#spinner').toggle();

  $.get('http://localhost:3000/frases', trocaFrase)
	  
    .fail(function(){
      $('#error').show();
      
      setTimeout( () => $('#error').toggle(), 4500);
	  })
    .always( () => $('#spinner').toggle());
 }
 
function trocaFrase(data){
  let indexFrase = integerNumber(data);
	  
  let texto = data[indexFrase].texto;	  
	  
  atualizaTempo(data[indexFrase].tempo);
	  
  $('#frase').text(texto);
     
  totalFrase(texto); 
}
 

function integerNumber(data){
  return Math.floor(Math.random() * data.length); 	
}
