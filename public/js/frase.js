
$('#bnt-shuffle').click(function(){
  mudarFrase();
});

function mudarFrase(){
	$.get('http://localhost:3000/frases', function(data){
	  
	  let indexFrase = integerNumber(data);
	  
	  let texto = data[indexFrase].texto;	  
	  
	  atualizaTempo(data[indexFrase].tempo);
	  
	  $('#frase').text(texto);
     
      totalFrase(texto);    	
	});
 }
 

 function integerNumber(data){
 	return Math.floor(Math.random() * data.length); 	
 }
